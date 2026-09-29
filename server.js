'use strict';
/**
 * Monibas Capital — servidor de producción
 * -------------------------------------------------
 * Sirve la web (carpeta /public) y la API desde el mismo origen:
 *   - Autenticación: registro, inicio y cierre de sesión (bcrypt + JWT en cookie httpOnly, SameSite=Strict)
 *   - Perfil: idioma y progreso guardados en la cuenta
 *   - Foro multiusuario con moderación (autor o administrador pueden borrar)
 *   - Proxy del consultor IA (la clave de Anthropic nunca llega al navegador)
 *   - Titulares económicos en directo a partir de feeds RSS configurables
 *
 * Ver README.md para instalación, despliegue y la revisión de seguridad.
 */
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Database = require('better-sqlite3');
const Parser = require('rss-parser');

/* ------------------------------------------------------------------ */
/* Configuración                                                       */
/* ------------------------------------------------------------------ */
const IS_PROD = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT, 10) || 4000;
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, 'data'));
const COOKIE_SECURE = process.env.COOKIE_SECURE ? process.env.COOKIE_SECURE === 'true' : IS_PROD;
const COOKIE_NAME = COOKIE_SECURE ? '__Host-session' : 'session';
const TRUST_PROXY = process.env.TRUST_PROXY || (IS_PROD ? '1' : '0');
const ALLOWED_ORIGINS = splitList(process.env.ALLOWED_ORIGINS);
// Los administradores se guardan en la base de datos (npm run make-admin). Antes se definían por correo en
// ADMIN_EMAILS, pero como el registro no verifica el correo, cualquiera podía registrarse con ese correo y ser admin.
if (process.env.ADMIN_EMAILS) console.warn('[seguridad] ADMIN_EMAILS ya no se usa. Nombra administradores con: npm run make-admin -- correo@ejemplo.com');
const AI_DAILY_LIMIT = Math.max(0, parseInt(process.env.AI_DAILY_LIMIT, 10) || 500);
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5';
const NEWS_FEEDS = splitList(process.env.NEWS_FEEDS ||
  'https://feeds.bbci.co.uk/news/business/rss.xml,https://www.cnbc.com/id/100003114/device/rss/rss.html');

let JWT_SECRET = process.env.JWT_SECRET || '';
if (JWT_SECRET.length < 32 || /CAMBIA/i.test(JWT_SECRET)) {
  if (IS_PROD) {
    console.error('[seguridad] JWT_SECRET falta o es demasiado corto (mínimo 32 caracteres). El servidor no arrancará en producción así.');
    process.exit(1);
  }
  JWT_SECRET = crypto.randomBytes(48).toString('hex');
  console.warn('[seguridad] JWT_SECRET no configurado: se usa uno temporal. Las sesiones se perderán al reiniciar (solo aceptable en desarrollo).');
}

function splitList(value) {
  return String(value || '').split(',').map(s => s.trim()).filter(Boolean);
}

/* ------------------------------------------------------------------ */
/* Base de datos                                                       */
/* ------------------------------------------------------------------ */
fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new Database(path.join(DATA_DIR, 'foro.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  topic_id TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  text TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS replies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL REFERENCES posts(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  text TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_posts_topic ON posts(topic_id, created_at);
CREATE INDEX IF NOT EXISTS idx_replies_post ON replies(post_id, created_at);
`);

// Migraciones suaves: compatibles con la base de datos de la versión anterior.
function addColumn(table, column, definition) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  if (!cols.some(c => c.name === column)) db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
}
addColumn('users', 'lang', "TEXT NOT NULL DEFAULT 'es'");
addColumn('users', 'progress', "TEXT NOT NULL DEFAULT '{}'");
addColumn('users', 'token_version', 'INTEGER NOT NULL DEFAULT 0');
addColumn('users', 'is_admin', 'INTEGER NOT NULL DEFAULT 0');

const q = {
  userById: db.prepare('SELECT * FROM users WHERE id = ?'),
  userByEmail: db.prepare('SELECT * FROM users WHERE email = ?'),
  userExists: db.prepare('SELECT id FROM users WHERE email = ? OR username = ? COLLATE NOCASE'),
  insertUser: db.prepare('INSERT INTO users (username, email, password_hash, created_at, lang) VALUES (?, ?, ?, ?, ?)'),
  bumpTokenVersion: db.prepare('UPDATE users SET token_version = token_version + 1 WHERE id = ?'),
  setLang: db.prepare('UPDATE users SET lang = ? WHERE id = ?'),
  setProgress: db.prepare('UPDATE users SET progress = ? WHERE id = ?'),
  postsByTopic: db.prepare(`
    SELECT p.id, p.text, p.created_at, p.user_id, u.username
    FROM posts p JOIN users u ON u.id = p.user_id
    WHERE p.topic_id = ? ORDER BY p.created_at DESC LIMIT 50`),
  repliesByTopic: db.prepare(`
    SELECT r.id, r.post_id, r.text, r.created_at, r.user_id, u.username
    FROM replies r JOIN users u ON u.id = r.user_id
    WHERE r.post_id IN (SELECT id FROM posts WHERE topic_id = ? ORDER BY created_at DESC LIMIT 50)
    ORDER BY r.created_at ASC`),
  insertPost: db.prepare('INSERT INTO posts (topic_id, user_id, text, created_at) VALUES (?, ?, ?, ?)'),
  insertReply: db.prepare('INSERT INTO replies (post_id, user_id, text, created_at) VALUES (?, ?, ?, ?)'),
  postById: db.prepare('SELECT id, user_id FROM posts WHERE id = ?'),
  replyById: db.prepare('SELECT id, user_id FROM replies WHERE id = ?'),
  deleteRepliesOfPost: db.prepare('DELETE FROM replies WHERE post_id = ?'),
  deletePost: db.prepare('DELETE FROM posts WHERE id = ?'),
  deleteReply: db.prepare('DELETE FROM replies WHERE id = ?'),
  deleteRepliesByUser: db.prepare('DELETE FROM replies WHERE user_id = ?'),
  deleteRepliesOnUserPosts: db.prepare('DELETE FROM replies WHERE post_id IN (SELECT id FROM posts WHERE user_id = ?)'),
  deletePostsByUser: db.prepare('DELETE FROM posts WHERE user_id = ?'),
  deleteUser: db.prepare('DELETE FROM users WHERE id = ?')
};
const deletePostTx = db.transaction(id => { q.deleteRepliesOfPost.run(id); q.deletePost.run(id); });
const deleteAccountTx = db.transaction(id => {
  q.deleteRepliesByUser.run(id);
  q.deleteRepliesOnUserPosts.run(id);
  q.deletePostsByUser.run(id);
  q.deleteUser.run(id);
});

/* ------------------------------------------------------------------ */
/* Validación                                                          */
/* ------------------------------------------------------------------ */
const LANGS = new Set(['es', 'en', 'fr', 'de']);
const TOPICS = new Set(['primeros-pasos', 'acciones', 'etfs-fondos', 'materias-primas', 'estrategia']);
const LEVEL_COUNT = 8;
const USERNAME_RE = /^[\p{L}\p{N}_.-]{3,30}$/u;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const MAX_POST = 600;
const RESERVED_NAMES = /^(admin|administrador|administrator|administrateur|moderador|moderator|moderateur|mod|soporte|support|staff|equipo|team|sistema|system|root|oficial|official|monibas.*|monibascapital.*)$/i;
const DUMMY_HASH = bcrypt.hashSync(crypto.randomBytes(16).toString('hex'), 12);

function cleanText(value, max) {
  if (typeof value !== 'string') return '';
  return value
    .normalize('NFC')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')
    .replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF]/g, '')
    .replace(/\r\n?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}
function toId(value) {
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : null;
}
function parseProgress(raw) {
  try {
    const p = JSON.parse(raw || '{}');
    return sanitizeProgress(p);
  } catch (e) {
    return { passed: [], scores: {} };
  }
}
function sanitizeProgress(p) {
  const passed = Array.isArray(p && p.passed)
    ? [...new Set(p.passed.filter(n => Number.isInteger(n) && n >= 0 && n < LEVEL_COUNT))].sort((a, b) => a - b)
    : [];
  const scores = {};
  if (p && typeof p.scores === 'object' && p.scores) {
    for (const [k, v] of Object.entries(p.scores)) {
      const lvl = Number(k);
      if (Number.isInteger(lvl) && lvl >= 0 && lvl < LEVEL_COUNT && Number.isFinite(v) && v >= 0 && v <= 100) {
        scores[lvl] = Math.round(v);
      }
    }
  }
  return { passed, scores };
}

/* ------------------------------------------------------------------ */
/* Sesión                                                              */
/* ------------------------------------------------------------------ */
function isAdmin(user) { return !!user && user.is_admin === 1; }
function publicUser(user) {
  return { id: user.id, username: user.username, lang: user.lang, isAdmin: isAdmin(user) };
}
function issueSession(res, user) {
  const token = jwt.sign({ uid: user.id, tv: user.token_version }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' });
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true, secure: COOKIE_SECURE, sameSite: 'strict', path: '/', maxAge: 7 * 24 * 60 * 60 * 1000
  });
}
function clearSession(res) {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, secure: COOKIE_SECURE, sameSite: 'strict', path: '/' });
}
function readUser(req) {
  const token = req.cookies && req.cookies[COOKIE_NAME];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
    const user = q.userById.get(payload.uid);
    if (!user || user.token_version !== payload.tv) return null;
    return user;
  } catch (e) {
    return null;
  }
}
function optionalAuth(req, res, next) { req.user = readUser(req); next(); }
function requireAuth(req, res, next) {
  req.user = readUser(req);
  if (!req.user) return res.status(401).json({ error: 'UNAUTHENTICATED' });
  next();
}

/* ------------------------------------------------------------------ */
/* Aplicación                                                          */
/* ------------------------------------------------------------------ */
const app = express();
app.disable('x-powered-by');
app.set('trust proxy', /^\d+$/.test(TRUST_PROXY) ? Number(TRUST_PROXY) : TRUST_PROXY === 'true');

app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      fontSrc: ["'self'"],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      upgradeInsecureRequests: IS_PROD ? [] : null
    }
  },
  crossOriginEmbedderPolicy: false,
  hsts: IS_PROD ? { maxAge: 15552000, includeSubDomains: true } : false,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  next();
});
app.use(compression());
if (ALLOWED_ORIGINS.length) app.use('/api', cors({ origin: ALLOWED_ORIGINS, credentials: true }));
app.use(express.json({ limit: '32kb', strict: true }));
app.use(cookieParser());

// Protección CSRF: SameSite=Strict + cabecera propia (obliga a preflight) + comprobación de Origin.
app.use('/api', (req, res, next) => {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  if (req.get('X-Requested-With') !== 'fetch') return res.status(403).json({ error: 'BAD_ORIGIN' });
  const origin = req.get('Origin');
  if (origin) {
    const self = `${req.protocol}://${req.get('host')}`;
    if (origin !== self && !ALLOWED_ORIGINS.includes(origin)) return res.status(403).json({ error: 'BAD_ORIGIN' });
  }
  if (req.method !== 'DELETE' && !req.is('application/json')) return res.status(415).json({ error: 'INVALID_INPUT' });
  next();
});

const limitHandler = (req, res) => res.status(429).json({ error: 'TOO_MANY_REQUESTS' });
// Límite general holgado: en universidades u oficinas muchas personas comparten IP. Los límites estrictos van por ruta.
const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 1500, standardHeaders: true, legacyHeaders: false, handler: limitHandler });
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false, handler: limitHandler });
const writeLimiter = rateLimit({ windowMs: 60 * 1000, max: 12, standardHeaders: true, legacyHeaders: false, handler: limitHandler });
const aiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false, handler: limitHandler,
  keyGenerator: req => 'u' + (req.user ? req.user.id : '0')
});
app.use('/api', apiLimiter);
app.use('/api', (req, res, next) => { if (req.path !== '/news') res.set('Cache-Control', 'no-store'); next(); });

// Fuerza bruta contra una cuenta concreta desde muchas IP: 10 intentos fallidos por correo cada 15 minutos
const loginAccountLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 10, standardHeaders: false, legacyHeaders: false, handler: limitHandler,
  skipSuccessfulRequests: true,
  keyGenerator: req => 'acct:' + crypto.createHash('sha256').update(String((req.body && req.body.email) || '').trim().toLowerCase()).digest('hex')
});

// Tope global diario del consultor IA (protege la factura aunque alguien cree muchas cuentas)
let aiDay = { day: '', count: 0 };
function aiBudgetAvailable() {
  const today = new Date().toISOString().slice(0, 10);
  if (aiDay.day !== today) aiDay = { day: today, count: 0 };
  return AI_DAILY_LIMIT === 0 || aiDay.count < AI_DAILY_LIMIT;
}

/* ---------------- Autenticación ---------------- */
app.post('/api/auth/register', authLimiter, async (req, res, next) => {
  try {
    const username = cleanText(req.body.username, 40).normalize('NFKC');
    const email = cleanText(req.body.email, 254).toLowerCase();
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    const lang = LANGS.has(req.body.lang) ? req.body.lang : 'es';

    if (!USERNAME_RE.test(username) || RESERVED_NAMES.test(username.replace(/[_.-]/g, ''))) return res.status(400).json({ error: 'INVALID_USERNAME' });
    if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'INVALID_EMAIL' });
    const pwBytes = Buffer.byteLength(password, 'utf8');
    if (password.length < 8 || pwBytes > 72) return res.status(400).json({ error: 'WEAK_PASSWORD' });
    if (q.userExists.get(email, username)) return res.status(409).json({ error: 'REGISTRATION_FAILED' });

    const hash = await bcrypt.hash(password, 12);
    const info = q.insertUser.run(username, email, hash, Date.now(), lang);
    const user = q.userById.get(info.lastInsertRowid);
    issueSession(res, user);
    res.status(201).json({ user: publicUser(user), progress: parseProgress(user.progress) });
  } catch (err) {
    if (err && err.code === 'SQLITE_CONSTRAINT_UNIQUE') return res.status(409).json({ error: 'REGISTRATION_FAILED' });
    next(err);
  }
});

app.post('/api/auth/login', authLimiter, loginAccountLimiter, async (req, res, next) => {
  try {
    const email = cleanText(req.body.email, 254).toLowerCase();
    const password = typeof req.body.password === 'string' ? req.body.password.slice(0, 200) : '';
    const user = q.userByEmail.get(email);
    // Se compara siempre contra un hash para no revelar, por el tiempo de respuesta, si el correo existe.
    const ok = await bcrypt.compare(password, user ? user.password_hash : DUMMY_HASH);
    if (!user || !ok) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });
    issueSession(res, user);
    res.json({ user: publicUser(user), progress: parseProgress(user.progress) });
  } catch (err) { next(err); }
});

app.post('/api/auth/logout', optionalAuth, (req, res) => {
  if (req.user) q.bumpTokenVersion.run(req.user.id); // invalida el token también en el servidor
  clearSession(res);
  res.json({ ok: true });
});

/* ---------------- Perfil ---------------- */
app.get('/api/me', optionalAuth, (req, res) => {
  res.set('Cache-Control', 'no-store');
  if (!req.user) return res.json({ user: null });
  res.json({ user: publicUser(req.user), progress: parseProgress(req.user.progress) });
});

app.put('/api/me/settings', requireAuth, (req, res) => {
  if (!LANGS.has(req.body.lang)) return res.status(400).json({ error: 'INVALID_INPUT' });
  q.setLang.run(req.body.lang, req.user.id);
  res.json({ ok: true });
});

app.put('/api/me/progress', requireAuth, writeLimiter, (req, res) => {
  const progress = sanitizeProgress(req.body);
  q.setProgress.run(JSON.stringify(progress), req.user.id);
  res.json({ progress });
});

app.delete('/api/me', requireAuth, authLimiter, async (req, res, next) => {
  try {
    const password = typeof req.body.password === 'string' ? req.body.password.slice(0, 200) : '';
    const ok = await bcrypt.compare(password, req.user.password_hash);
    if (!ok) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });
    deleteAccountTx(req.user.id);
    clearSession(res);
    res.json({ ok: true });
  } catch (err) { next(err); }
});

/* ---------------- Foro ---------------- */
app.get('/api/topics/:topicId/posts', optionalAuth, (req, res) => {
  const topic = req.params.topicId;
  if (!TOPICS.has(topic)) return res.status(404).json({ error: 'TOPIC_NOT_FOUND' });
  const viewer = req.user;
  const canDelete = row => !!viewer && (row.user_id === viewer.id || isAdmin(viewer));
  const replies = q.repliesByTopic.all(topic);
  const byPost = new Map();
  for (const r of replies) {
    if (!byPost.has(r.post_id)) byPost.set(r.post_id, []);
    byPost.get(r.post_id).push({ id: r.id, text: r.text, created_at: r.created_at, username: r.username, canDelete: canDelete(r) });
  }
  const posts = q.postsByTopic.all(topic).map(p => ({
    id: p.id, text: p.text, created_at: p.created_at, username: p.username,
    canDelete: canDelete(p), replies: byPost.get(p.id) || []
  }));
  res.set('Cache-Control', 'no-store');
  res.json({ posts });
});

app.post('/api/topics/:topicId/posts', requireAuth, writeLimiter, (req, res) => {
  const topic = req.params.topicId;
  if (!TOPICS.has(topic)) return res.status(404).json({ error: 'TOPIC_NOT_FOUND' });
  const text = cleanText(req.body.text, MAX_POST);
  if (!text) return res.status(400).json({ error: 'EMPTY_MESSAGE' });
  const info = q.insertPost.run(topic, req.user.id, text, Date.now());
  res.status(201).json({ id: info.lastInsertRowid });
});

app.post('/api/posts/:postId/replies', requireAuth, writeLimiter, (req, res) => {
  const postId = toId(req.params.postId);
  if (!postId || !q.postById.get(postId)) return res.status(404).json({ error: 'POST_NOT_FOUND' });
  const text = cleanText(req.body.text, MAX_POST);
  if (!text) return res.status(400).json({ error: 'EMPTY_MESSAGE' });
  const info = q.insertReply.run(postId, req.user.id, text, Date.now());
  res.status(201).json({ id: info.lastInsertRowid });
});

app.delete('/api/posts/:postId', requireAuth, writeLimiter, (req, res) => {
  const postId = toId(req.params.postId);
  const post = postId && q.postById.get(postId);
  if (!post) return res.status(404).json({ error: 'POST_NOT_FOUND' });
  if (post.user_id !== req.user.id && !isAdmin(req.user)) return res.status(403).json({ error: 'FORBIDDEN' });
  deletePostTx(postId);
  res.json({ ok: true });
});

app.delete('/api/replies/:replyId', requireAuth, writeLimiter, (req, res) => {
  const replyId = toId(req.params.replyId);
  const reply = replyId && q.replyById.get(replyId);
  if (!reply) return res.status(404).json({ error: 'POST_NOT_FOUND' });
  if (reply.user_id !== req.user.id && !isAdmin(req.user)) return res.status(403).json({ error: 'FORBIDDEN' });
  q.deleteReply.run(replyId);
  res.json({ ok: true });
});

/* ---------------- Consultor IA (proxy seguro) ---------------- */
const LANG_NAMES = { es: 'Spanish (Spain)', en: 'English', fr: 'French', de: 'German' };
function aiSystemPrompt(lang) {
  return [
    'You are the "AI Consultant" inside "Monibas Capital", an educational website that teaches people to invest from zero.',
    `Always answer in ${LANG_NAMES[lang]}, in a clear, friendly tone without unnecessary jargon; briefly explain any technical term you use.`,
    'Adapt the depth to a beginner unless the question clearly shows an advanced level; with advanced users, be precise and go deeper.',
    'Whenever you discuss an investment decision, product or strategy, ALWAYS present both arguments in favour and against (or the risks). Never give only one side.',
    'You are not a regulated financial adviser: never give personalised buy/sell recommendations for a specific asset. Explain how things work, their pros, cons and risks, and how to think about them.',
    'You have no real-time market data. If asked for a current price, quote or today\'s news, say so explicitly and suggest checking the regulator, the exchange or reputable financial media.',
    'Encourage common sense: cross-check sources, distrust guaranteed returns, invest only money not needed in the short term, check that brokers are registered with the national regulator.',
    'Be concise: 3 to 8 sentences unless the user explicitly asks for more detail. Plain text only, you may use short lists.'
  ].join('\n');
}

app.post('/api/ai', requireAuth, aiLimiter, async (req, res, next) => {
  if (!ANTHROPIC_API_KEY) return res.status(503).json({ error: 'AI_DISABLED' });
  if (!aiBudgetAvailable()) return res.status(429).json({ error: 'TOO_MANY_REQUESTS' });
  const lang = LANGS.has(req.body.lang) ? req.body.lang : 'es';
  const raw = Array.isArray(req.body.messages) ? req.body.messages.slice(-12) : [];
  const messages = [];
  for (const m of raw) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant')) return res.status(400).json({ error: 'INVALID_INPUT' });
    const content = cleanText(m.content, 2000);
    if (!content) return res.status(400).json({ error: 'INVALID_INPUT' });
    if (messages.length && messages[messages.length - 1].role === m.role) return res.status(400).json({ error: 'INVALID_INPUT' });
    messages.push({ role: m.role, content });
  }
  while (messages.length && messages[0].role !== 'user') messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== 'user') return res.status(400).json({ error: 'INVALID_INPUT' });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: ANTHROPIC_MODEL, max_tokens: 900, system: aiSystemPrompt(lang), messages }),
      signal: controller.signal
    });
    if (!upstream.ok) {
      console.error('[ia] respuesta del proveedor:', upstream.status);
      return res.status(502).json({ error: 'AI_ERROR' });
    }
    aiDay.count++;
    const data = await upstream.json();
    const reply = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
    if (!reply) return res.status(502).json({ error: 'AI_ERROR' });
    res.json({ reply: reply.slice(0, 8000) });
  } catch (err) {
    console.error('[ia] error:', err.name);
    res.status(502).json({ error: 'AI_ERROR' });
  } finally {
    clearTimeout(timer);
  }
});

/* ---------------- Titulares en directo (RSS) ---------------- */
const rss = new Parser({ timeout: 8000, headers: { 'User-Agent': 'MonibasCapital/1.0 (lector de titulares)' } });
const NEWS_TTL = 15 * 60 * 1000;
let newsCache = { at: 0, items: [] };
let newsInFlight = null;

function stripTags(s, max) {
  return String(s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
}
function safeLink(link) {
  try {
    const u = new URL(link);
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : null;
  } catch (e) { return null; }
}
async function refreshNews() {
  const results = await Promise.allSettled(NEWS_FEEDS.map(url => rss.parseURL(url)));
  const items = [];
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    const source = stripTags(r.value.title, 60) || 'RSS';
    for (const it of (r.value.items || []).slice(0, 12)) {
      const link = safeLink(it.link);
      const title = stripTags(it.title, 220);
      if (!link || !title) continue;
      const date = Date.parse(it.isoDate || it.pubDate || '') || null;
      items.push({ title, link, source, date });
    }
  }
  items.sort((a, b) => (b.date || 0) - (a.date || 0));
  const seen = new Set();
  for (let k = items.length - 1; k >= 0; k--) { if (seen.has(items[k].link)) items.splice(k, 1); else seen.add(items[k].link); } // sin duplicados entre medios
  if (items.length) newsCache = { at: Date.now(), items: items.slice(0, 24) };
  return newsCache;
}
app.get('/api/news', async (req, res) => {
  try {
    if (Date.now() - newsCache.at > NEWS_TTL || !newsCache.items.length) {
      newsInFlight = newsInFlight || refreshNews().finally(() => { newsInFlight = null; });
      await newsInFlight;
    }
  } catch (e) {
    console.error('[noticias] no se pudieron actualizar');
  }
  res.set('Cache-Control', 'public, max-age=300');
  res.json(newsCache);
});

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api', (req, res) => res.status(404).json({ error: 'NOT_FOUND' }));

/* ---------------- Archivos estáticos ---------------- */
const staticOpts = { maxAge: IS_PROD ? '7d' : 0, fallthrough: true };
const nm = p => path.join(__dirname, 'node_modules', p);
app.use('/vendor/gsap', express.static(nm('gsap/dist'), staticOpts));
app.use('/vendor/fonts/inter', express.static(nm('@fontsource/inter'), staticOpts));
app.use('/vendor/fonts/space-grotesk', express.static(nm('@fontsource/space-grotesk'), staticOpts));
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: IS_PROD ? '1h' : 0,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');
  }
}));

/* ---------------- Errores ---------------- */
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err && (err.type === 'entity.parse.failed' || err.type === 'entity.too.large')) {
    return res.status(400).json({ error: 'INVALID_INPUT' });
  }
  console.error('[error]', err && err.message);
  res.status(500).json({ error: 'SERVER_ERROR' }); // nunca se envían trazas al cliente
});

const server = app.listen(PORT, () => {
  console.log(`Monibas Capital en http://localhost:${PORT} (${IS_PROD ? 'producción' : 'desarrollo'})`);
  if (!ANTHROPIC_API_KEY) console.log('[ia] ANTHROPIC_API_KEY no configurada: el consultor IA mostrará que no está disponible.');
});

function shutdown() {
  server.close(() => { db.close(); process.exit(0); });
  setTimeout(() => process.exit(0), 5000).unref();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
