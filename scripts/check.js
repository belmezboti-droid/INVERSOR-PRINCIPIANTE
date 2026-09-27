'use strict';
/**
 * Comprobaciones automáticas antes de publicar (npm run check):
 *  1. Los 4 idiomas tienen exactamente las mismas claves y listas del mismo tamaño.
 *  2. Ningún texto traducido está vacío ni se ha dejado idéntico al español (salvo nombres propios, cifras y URLs).
 *  3. Los marcadores {n}, {title}… coinciden en todos los idiomas.
 *  4. 8 niveles, 8 preguntas por nivel, 4 opciones y respuesta válida.
 *  5. El HTML del contenido solo usa etiquetas de formato inofensivas (b, strong, em, br).
 *  6. Las URLs de recursos son https.
 *  7. Todos los archivos JavaScript tienen sintaxis válida.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const LANGS = ['es', 'en', 'fr', 'de'];
const errors = [];
const warnings = [];

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const l of LANGS) {
  const file = path.join(ROOT, 'public', 'locales', l + '.js');
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
}
const L = sandbox.window.LOCALES;

// Textos que pueden coincidir legítimamente con el español (nombres propios, siglas, cifras…)
const SAME_OK = /^(ETF|PER|PEG|ROE|RSI|TER|EBITDA|MiFID|CNMV|ISA|PEA|DCA|FOMO|Broker|Spread|Stop-loss|Take-profit|REIT|Blue chip|Benchmark|Tracking error|Bogleheads.*|Rankia|Investing\.com|Reuters|Bloomberg|ES|EN|FR|DE|Value investing|Growth|Disponible|\{n\} min|\{n\}\/600|[\d\s.,%€≈–-]+|.*https?:\/\/.*)$/i;

function placeholders(s) {
  return (s.match(/\{\w+\}/g) || []).sort().join(',');
}
function walk(ref, other, lang, p) {
  if (Array.isArray(ref)) {
    if (!Array.isArray(other)) return errors.push(`[${lang}] ${p}: debería ser una lista`);
    if (ref.length !== other.length) errors.push(`[${lang}] ${p}: ${other.length} elementos (en español hay ${ref.length})`);
    ref.forEach((v, i) => walk(v, other[i], lang, `${p}[${i}]`));
    return;
  }
  if (ref && typeof ref === 'object') {
    if (!other || typeof other !== 'object') return errors.push(`[${lang}] ${p}: falta el bloque`);
    for (const k of Object.keys(ref)) {
      if (!(k in other)) errors.push(`[${lang}] ${p}.${k}: falta la clave`);
      else walk(ref[k], other[k], lang, `${p}.${k}`);
    }
    for (const k of Object.keys(other)) if (!(k in ref)) errors.push(`[${lang}] ${p}.${k}: clave sobrante`);
    return;
  }
  if (typeof ref !== typeof other) return errors.push(`[${lang}] ${p}: tipo distinto`);
  if (typeof ref === 'string') {
    if (!other.trim()) errors.push(`[${lang}] ${p}: texto vacío`);
    if (placeholders(ref) !== placeholders(other)) errors.push(`[${lang}] ${p}: marcadores distintos (${placeholders(ref)} / ${placeholders(other)})`);
    const BLOCK_TYPES = ['p', 'list', 'cards', 'balance', 'chart', 'callout', 'quote', 'steps', 'table', 'glossary', 'deep'];
    const isStructural = /\.(id|icon|url|htmlLang|locale)$/.test(p) || (/\.t$/.test(p) && BLOCK_TYPES.includes(ref));
    if (lang !== 'es' && other === ref && !SAME_OK.test(ref) && !isStructural && !/resources\.groups\[\d+\]\.items\[\d+\]\.name/.test(p)) {
      warnings.push(`[${lang}] ${p}: idéntico al español («${ref.slice(0, 50)}»)`);
    }
  } else if (typeof ref === 'number' && !/\.(a|minutes|rate)$/.test(p) && ref !== other) {
    errors.push(`[${lang}] ${p}: número distinto (${other} / ${ref})`);
  } else if (/\.(a|minutes|rate)$/.test(p) && ref !== other) {
    errors.push(`[${lang}] ${p}: valor distinto al español (${other} / ${ref})`);
  }
}

const ALLOWED_TAGS = /^<\/?(b|strong|em|br)\s*\/?>$/i;
function checkHtml(obj, lang, p) {
  if (typeof obj === 'string') {
    const tags = obj.match(/<[^>]*>/g) || [];
    tags.forEach(tag => { if (!ALLOWED_TAGS.test(tag)) errors.push(`[${lang}] ${p}: etiqueta no permitida ${tag}`); });
    if (/javascript:|on\w+\s*=/i.test(obj)) errors.push(`[${lang}] ${p}: contenido potencialmente peligroso`);
    return;
  }
  if (obj && typeof obj === 'object') for (const k of Object.keys(obj)) checkHtml(obj[k], lang, `${p}.${k}`);
}

for (const lang of LANGS) {
  if (!L[lang]) { errors.push(`Falta el idioma ${lang}`); continue; }
  if (lang !== 'es') walk(L.es, L[lang], lang, lang);
  checkHtml(L[lang], lang, lang);

  const lv = L[lang].levels;
  if (lv.length !== 8) errors.push(`[${lang}] hay ${lv.length} niveles (deben ser 8)`);
  lv.forEach((level, i) => {
    if (level.quiz.length !== 8) errors.push(`[${lang}] nivel ${i}: ${level.quiz.length} preguntas (deben ser 8)`);
    if (level.essentials.length !== 3) errors.push(`[${lang}] nivel ${i}: "lo esencial" debe tener 3 ideas`);
    level.quiz.forEach((q, j) => {
      if (q.o.length !== 4) errors.push(`[${lang}] nivel ${i} pregunta ${j}: debe tener 4 opciones`);
      if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.o.length) errors.push(`[${lang}] nivel ${i} pregunta ${j}: respuesta fuera de rango`);
      if (new Set(q.o).size !== q.o.length) errors.push(`[${lang}] nivel ${i} pregunta ${j}: opciones repetidas`);
    });
  });
  L[lang].resources.groups.forEach((g, gi) => g.items.forEach((it, ii) => {
    if (!/^https:\/\//.test(it.url)) errors.push(`[${lang}] recurso ${gi}.${ii}: la URL debe ser https`);
  }));
}

// Coherencia de respuestas correctas entre idiomas (misma posición)
for (const lang of LANGS.slice(1)) {
  L.es.levels.forEach((level, i) => level.quiz.forEach((q, j) => {
    const other = L[lang].levels[i] && L[lang].levels[i].quiz[j];
    if (other && other.a !== q.a) errors.push(`[${lang}] nivel ${i} pregunta ${j}: la respuesta correcta no coincide con el español`);
  }));
}

// Todas las claves ui.* que usa app.js existen
const appSrc = fs.readFileSync(path.join(ROOT, 'public', 'js', 'app.js'), 'utf8');
const used = new Set((appSrc.match(/t\('((?:ui|errors|topics)\.[\w.]+)'/g) || []).map(m => m.slice(3, -1)));
const get = (o, p) => p.split('.').reduce((a, k) => (a && a[k] !== undefined ? a[k] : undefined), o);
for (const key of used) {
  if (/\.$/.test(key)) continue;
  if (/_$/.test(key)) {
    // Clave dinámica (p. ej. 'ui.settings.theme_' + modo): comprobar las variantes conocidas
    const variants = key === 'ui.settings.theme_' ? ['auto', 'light', 'dark'] : [];
    for (const v of variants) for (const lang of LANGS) if (get(L[lang], key + v) === undefined) errors.push(`[${lang}] falta la clave dinámica: ${key + v}`);
    if (!variants.length) warnings.push(`clave dinámica sin comprobar: ${key}`);
    continue;
  }
  for (const lang of LANGS) if (get(L[lang], key) === undefined) errors.push(`[${lang}] falta la clave usada en app.js: ${key}`);
}
// Claves construidas dinámicamente
['simulator', 'forum', 'ai', 'resources'].forEach(k => {
  ['h', 'p'].forEach(f => { for (const lang of LANGS) if (get(L[lang], `ui.tools.${k}.${f}`) === undefined) errors.push(`[${lang}] falta ui.tools.${k}.${f}`); });
});
['learn', 'simulator', 'forum', 'ai', 'resources'].forEach(k => { for (const lang of LANGS) if (!get(L[lang], 'ui.nav.' + k)) errors.push(`[${lang}] falta ui.nav.${k}`); });
['auto', 'light', 'dark'].forEach(k => { for (const lang of LANGS) if (!get(L[lang], 'ui.settings.theme_' + k)) errors.push(`[${lang}] falta ui.settings.theme_${k}`); });
['initial', 'monthly', 'rate', 'years'].forEach(k => { for (const lang of LANGS) if (!get(L[lang], 'ui.sim.' + k)) errors.push(`[${lang}] falta ui.sim.${k}`); });
const serverSrc = fs.readFileSync(path.join(ROOT, 'server.js'), 'utf8');
const codes = new Set((serverSrc.match(/error: '([A-Z_]+)'/g) || []).map(m => m.slice(8, -1)));
codes.add('NETWORK');
for (const c of codes) for (const lang of LANGS) if (!L[lang].errors[c]) errors.push(`[${lang}] falta la traducción del error ${c}`);

// Sintaxis de todos los JS
const jsFiles = ['server.js', 'scripts/check.js', 'public/js/app.js', 'public/js/charts.js', ...LANGS.map(l => `public/locales/${l}.js`)];
for (const f of jsFiles) {
  try { execFileSync(process.execPath, ['--check', path.join(ROOT, f)], { stdio: 'pipe' }); }
  catch (e) { errors.push(`Sintaxis inválida en ${f}: ${String(e.stderr).split('\n').slice(0, 3).join(' ')}`); }
}

if (warnings.length) {
  console.log(`Avisos (${warnings.length}) — revisa si son nombres propios o faltan por traducir:`);
  warnings.forEach(w => console.log('  · ' + w));
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} errores:`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
const qCount = L.es.levels.reduce((a, l) => a + l.quiz.length, 0);
console.log(`\n✓ Todo correcto: ${LANGS.length} idiomas, ${L.es.levels.length} niveles, ${qCount} preguntas por idioma, ${used.size} claves de interfaz verificadas, ${codes.size} códigos de error traducidos.`);
