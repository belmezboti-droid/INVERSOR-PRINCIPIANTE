# Monibas Capital · versión 2.0

*Invierte con cabeza, no con corazonadas.*

Plataforma educativa para aprender a invertir desde cero. Incluye:

- una ruta de 8 niveles en 3 etapas (básico, intermedio y avanzado), con 64 preguntas de test;
- gráficos explicados y un simulador de interés compuesto;
- un foro multiusuario y un consultor IA;
- titulares financieros en directo;
- 4 idiomas completos: español, inglés, francés y alemán.

> Contenido educativo, no asesoramiento financiero.

---

## 1. Qué hay en la carpeta

```
server.js            Servidor (Express): sirve la web y la API desde el mismo origen
public/
  index.html         Página única (sin scripts en línea)
  css/styles.css     Diseño completo: temas claro/oscuro y adaptación a móvil
  js/app.js          Lógica de la aplicación
  js/charts.js       Gráficos SVG propios
  js/interactive.js  Gráfico explorable de la portada y simuladores (reto «¿sube o baja?», comisiones, cartera, tamaño de posición)
  locales/*.js       Textos en es / en / fr / de (todo el contenido, no solo la interfaz)
scripts/check.js     Comprobaciones automáticas antes de publicar
.env.example         Plantilla de configuración
Dockerfile, render.yaml
```

## 2. Instalación en tu ordenador

Necesitas **Node.js 18.18 o superior** (recomendado 20 LTS).

```bash
cd cuaderno-del-inversor
npm install
cp .env.example .env      # en Windows: copy .env.example .env
npm run check             # comprueba traducciones, tests y sintaxis
npm start
```

Tras el primer `npm install` se crea `package-lock.json`: **guárdalo junto al proyecto** (y súbelo a GitHub). Fija las versiones exactas de las dependencias, y Docker y Render lo usarán con `npm ci` para instalar siempre lo mismo que has probado.

Abre **http://localhost:4000**. La web y el servidor funcionan juntos, así que ya **no hace falta `npx serve`** ni configurar `API_BASE` como en la versión anterior.

### Activar el consultor IA

1. Crea una clave en https://console.anthropic.com.
2. Pégala en `.env` como `ANTHROPIC_API_KEY=...`.
3. Reinicia con `npm start`.

La clave se queda en el servidor y nunca llega al navegador. Sin clave, el consultor muestra un aviso traducido indicando que no está activado.

## 3. Migrar desde la versión anterior (servidor-foro)

Tus usuarios, contraseñas y mensajes se conservan: el esquema de la base de datos es compatible.

1. Para el servidor antiguo.
2. Crea la carpeta `data/` dentro del proyecto nuevo.
3. Copia el archivo antiguo `servidor-foro/foro.db` a `cuaderno-del-inversor/data/foro.db`.
4. Ejecuta `npm start`. Las columnas nuevas (idioma, progreso y versión de sesión) se añaden automáticamente.
5. Ya puedes borrar la carpeta antigua y el archivo HTML suelto: la página ahora la sirve el propio servidor.

## 4. Variables de entorno (`.env`)

| Variable | Para qué sirve |
|---|---|
| `NODE_ENV` | `production` en el servidor público: activa cookies seguras, HSTS y comprobaciones estrictas |
| `PORT` | Puerto (por defecto 4000) |
| `JWT_SECRET` | **Obligatorio en producción**, mínimo 32 caracteres. Genera uno con `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` |
| `DATA_DIR` | Carpeta de la base de datos. En producción, un **disco persistente** |
| `AI_DAILY_LIMIT` | Tope global de consultas al consultor IA por día (por defecto 500; `0` = sin tope). Protege tu factura aunque alguien cree muchas cuentas |
| `ANTHROPIC_API_KEY` / `ANTHROPIC_MODEL` | Consultor IA (modelo por defecto: `claude-sonnet-5`) |
| `NEWS_FEEDS` | Feeds RSS de los titulares (separados por comas) |
| `TRUST_PROXY` | Número de proxies por delante (Render, Railway o nginx: `1`) |
| `ALLOWED_ORIGINS` | Solo si sirves la web desde otro dominio. Normalmente, vacío |

**Nunca subas `.env` a GitHub.** Ya está incluido en `.gitignore`.

## 5. Publicar en Internet

SQLite guarda los datos en un archivo, así que el servidor necesita un **disco persistente**. En discos temporales (el plan gratuito de muchos servicios) perderías usuarios y mensajes en cada reinicio.

### Opción A · Render (la más sencilla)

1. Sube el proyecto a un repositorio privado de GitHub.
2. En Render, elige *New → Blueprint* y selecciona el repositorio. Se usará `render.yaml`, que:
   - crea un plan con disco persistente en `/var/data`;
   - genera `JWT_SECRET` automáticamente.
3. En *Environment*, añade `ANTHROPIC_API_KEY`. Para ser moderador, regístrate en la web y ejecuta en la consola (*Shell*) de Render: `npm run make-admin -- tu@correo.com`.
4. Render te da un dominio con HTTPS. También puedes añadir el tuyo.

### Opción B · Railway

Crea un servicio desde el repositorio, añade un **Volume** montado en `/data` y define:

- `DATA_DIR=/data`
- `NODE_ENV=production`
- `JWT_SECRET`
- el resto de variables que necesites.

### Opción C · Docker (cualquier VPS)

```bash
docker build -t cuaderno .
docker run -d --name cuaderno -p 4000:4000 \
  -e NODE_ENV=production -e JWT_SECRET=... -e DATA_DIR=/data \
  -v cuaderno-datos:/data --restart unless-stopped cuaderno
```

### Opción D · VPS con nginx

Ejecuta `npm start` con un gestor de procesos (`pm2` o systemd) y pon nginx delante como proxy inverso, con HTTPS gratuito de Let's Encrypt (`certbot --nginx`). Deja `TRUST_PROXY=1`.

**Siempre con HTTPS.** En producción la cookie de sesión solo viaja cifrada.

## 6. Revisión de seguridad (qué se ha corregido)

| Área | Antes | Ahora |
|---|---|---|
| Consultor IA | Llamaba a la API desde el navegador: no funcionaba fuera de claude.ai y exigiría exponer la clave | Proxy en el servidor: la clave nunca sale de él. Requiere sesión, tiene límite de 30 consultas por hora y usuario, valida y recorta la conversación, y aplica un tiempo máximo de espera |
| XSS | Parte del contenido se insertaba como HTML | Los mensajes del foro, las respuestas de la IA y los titulares se insertan **siempre como texto**. Solo se usa HTML en textos propios (archivos de idioma y gráficos), revisados automáticamente por `npm run check` |
| CSP | Scripts y estilos en línea, CDN externos | `default-src 'self'` sin `unsafe-inline`. GSAP y las fuentes se sirven desde el propio servidor, sin CDN (así además se evita enviar datos a Google Fonts, que tiene implicaciones RGPD) |
| CSRF | Sin protección específica | Cookie `SameSite=Strict`, cabecera obligatoria `X-Requested-With`, comprobación de `Origin` y solo se acepta JSON |
| CORS | Abierto para desarrollo | Desactivado: todo va en el mismo origen. Solo se activa si defines `ALLOWED_ORIGINS` |
| Sesiones y cookies | Cierre de sesión solo en el navegador | Cookie `httpOnly`, `Secure` y con prefijo `__Host-` en producción. JWT firmado con algoritmo fijado (HS256). El cierre de sesión **invalida el token en el servidor** (`token_version`) |
| Contraseñas | bcrypt | bcrypt de coste 12 asíncrono, límite de 72 bytes y comparación de tiempo constante también con correos inexistentes, para no revelar qué correos están registrados |
| Fuerza bruta y abuso | Sin límites | Límites de peticiones: global, inicio de sesión y registro (20 cada 15 min), escritura (12 por minuto) e IA |
| Validación | Básica | Usuario, correo, longitudes, temas, identificadores y progreso validados en el servidor. Se eliminan caracteres de control. Cuerpo máximo de 32 KB |
| SQL injection | Consultas preparadas | Se mantienen consultas preparadas en todas las operaciones |
| Autorización | Administradores por correo en `ADMIN_EMAILS`: como el registro no verifica el correo, **cualquiera podía registrarse con ese correo y obtener permisos de moderación** | Los administradores se guardan en la base de datos y solo se nombran desde el servidor con `npm run make-admin -- correo`. Solo el autor o un administrador pueden borrar mensajes, y se comprueba en el servidor |
| Suplantación | — | Nombres reservados (admin, moderador, soporte, Monibas…), normalización Unicode y eliminación de caracteres invisibles y de control de dirección (que permiten camuflar nombres o texto) |
| Fuerza bruta distribuida | Solo límite por IP | Además, bloqueo de 15 min tras 10 intentos fallidos contra **la misma cuenta**, aunque vengan de muchas IP |
| Coste de la IA | Límite por usuario | Además, tope global diario (`AI_DAILY_LIMIT`) |
| RGPD | Sin forma de darse de baja | En *Ajustes → Eliminar mi cuenta* (con contraseña) se borran la cuenta, el progreso y todos sus mensajes |
| Cachés | — | Ninguna respuesta de la API con datos de usuario se guarda en cachés intermedias (`Cache-Control: no-store`) |
| Docker | Faltaba `.dockerignore`: la imagen podía incluir `.env` y la base de datos | `.dockerignore` excluye `.env`, `data/`, bases de datos y `node_modules` |
| Errores | Podían mostrar detalles internos | La API solo devuelve códigos (`INVALID_CREDENTIALS`…), que la web traduce. Nunca envía trazas del servidor |
| Secretos | — | En producción el servidor **se niega a arrancar** sin un `JWT_SECRET` válido |
| Navegador | — | `localStorage` solo guarda idioma, tema, progreso y valores del simulador. Nada sensible |
| Cabeceras | — | Helmet (HSTS en producción, `frame-ancestors 'none'`, `Referrer-Policy`, `nosniff`), `Permissions-Policy` y sin `X-Powered-By` |
| Titulares | — | Se limpian las etiquetas HTML y solo se aceptan enlaces `http(s)`. Caché de 15 minutos |

## 7. Lista de comprobación antes de publicar

- [ ] `npm run check` sin errores.
- [ ] `npm audit --omit=dev` sin vulnerabilidades altas. Si aparecen, ejecuta `npm audit fix` y vuelve a probar.
- [ ] `NODE_ENV=production` y un `JWT_SECRET` largo y aleatorio.
- [ ] HTTPS activo.
- [ ] Disco persistente configurado en `DATA_DIR`.
- [ ] Regístrate en la web y hazte moderador con `npm run make-admin -- tu@correo.com`.
- [ ] `package-lock.json` guardado en el proyecto.
- [ ] Copias de seguridad periódicas de `data/foro.db`, por ejemplo con `sqlite3 data/foro.db ".backup copia.db"`.
- [ ] **Aviso legal y política de privacidad** (LSSI y RGPD): son obligatorios al abrir el registro al público en España, porque la web guarda nombre de usuario, correo y mensajes. Deben incluir quién es el responsable, con nombre y contacto, y no se pueden inventar: redáctalos con tus datos o con un servicio especializado.
- [ ] Comprobar que la marca «Monibas Capital» está libre en la OEPM (España) y la EUIPO (UE) antes de invertir en ella.
- [ ] Probar el registro, un test, el foro y el consultor en el dominio final, desde el móvil y el ordenador.

## 8. Mantenimiento

- **Textos:** todo está en `public/locales/`. Si cambias un texto, cámbialo en los 4 idiomas; `npm run check` avisa si falta alguna clave o si no coinciden los marcadores `{n}`.
- **Nuevas preguntas:** cada nivel necesita 8 preguntas con 4 opciones, y la respuesta correcta debe estar en la misma posición en todos los idiomas. El comprobador lo verifica.
- **Dependencias:** ejecuta `npm outdated` y `npm audit` cada pocos meses.

## 9. Límites conocidos (pendientes para una versión futura)

- **No hay verificación de correo ni recuperación de contraseña**: ambas necesitan un servicio de envío de correos (por ejemplo, Postmark o Amazon SES).
- **El bloqueo por cuenta tiene una contrapartida**: alguien que conozca tu correo puede bloquear tu acceso durante 15 minutos a base de intentos fallidos. Es el equilibrio habitual frente al robo de cuentas.
