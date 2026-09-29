'use strict';
/**
 * Nombra (o retira) un administrador del foro.
 *   npm run make-admin -- tu@correo.com            → da permisos de moderación
 *   npm run make-admin -- tu@correo.com --remove   → los retira
 * Se ejecuta en el propio servidor, así que solo puede usarlo quien tenga acceso a él.
 * La persona debe haberse registrado antes en la web con ese correo.
 */
require('dotenv').config();
const path = require('path');
const Database = require('better-sqlite3');

const email = String(process.argv[2] || '').trim().toLowerCase();
const remove = process.argv.includes('--remove');
if (!email || !email.includes('@')) {
  console.error('Uso: npm run make-admin -- correo@ejemplo.com [--remove]');
  process.exit(1);
}
const dataDir = path.resolve(process.env.DATA_DIR || path.join(__dirname, '..', 'data'));
const db = new Database(path.join(dataDir, 'foro.db'), { fileMustExist: true });
const cols = db.prepare('PRAGMA table_info(users)').all();
if (!cols.some(c => c.name === 'is_admin')) {
  console.error('Arranca el servidor una vez (npm start) para actualizar la base de datos y vuelve a intentarlo.');
  process.exit(1);
}
const user = db.prepare('SELECT id, username FROM users WHERE email = ?').get(email);
if (!user) {
  console.error('No hay ninguna cuenta con ese correo. Regístrate primero en la web.');
  process.exit(1);
}
db.prepare('UPDATE users SET is_admin = ? WHERE id = ?').run(remove ? 0 : 1, user.id);
console.log(remove ? `«${user.username}» ya no es administrador.` : `«${user.username}» ahora es administrador del foro.`);
db.close();
