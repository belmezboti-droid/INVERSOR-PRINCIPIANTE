window.LOCALES = window.LOCALES || {};
window.LOCALES.es = {
  meta: { name: "Español", short: "ES", htmlLang: "es", locale: "es-ES" },

  ui: {
    brand: "NEXORA",
    brandTag: "Aprende a invertir desde cero",
    skip: "Saltar al contenido",
    nav: { label: "Navegación principal", learn: "Aprender", simulator: "Simulador", forum: "Foro", ai: "Consultor IA", resources: "Noticias", menu: "Abrir menú", closeMenu: "Cerrar menú" },
    account: { login: "Iniciar sesión", logout: "Cerrar sesión", settings: "Ajustes" },
    common: { close: "Cerrar", cancel: "Cancelar", confirm: "Confirmar", retry: "Reintentar" },

    hero: {
      title: "Aprende a invertir",
      titleLine2: "desde cero, con criterio.",
      lead: "Una ruta guiada de lo más básico a lo avanzado: gráficos que se entienden, argumentos a favor y en contra en cada tema, tests para comprobar lo aprendido y herramientas para practicar sin arriesgar dinero.",
      start: "Empezar desde cero",
      continue: "Continuar con el nivel {n}",
      review: "Repasar la ruta",
      simulator: "Probar el simulador",
      resume: "Continúas en",
      allDone: "Has completado toda la ruta. Repasa cuando quieras o pon a prueba lo aprendido en el simulador.",
      artCaption: "Cada vela resume una sesión de mercado.",
      artTag: "Aprenderás a leerlas",
      facts: { levels: "niveles", questions: "preguntas de test", minutes: "minutos de lectura", languages: "idiomas" }
    },
    how: {
      title: "Cómo funciona",
      sub: "No hace falta saber nada de antemano. Avanzas a tu ritmo y siempre sabes en qué punto estás.",
      steps: [
        { h: "Lee a tu ritmo", p: "Cada nivel empieza con lo esencial en tres ideas y se amplía con gráficos, ejemplos y un apartado opcional para profundizar." },
        { h: "Demuestra lo aprendido", p: "Al final de cada nivel hay un test de 8 preguntas. Con un 70 % de aciertos desbloqueas el siguiente." },
        { h: "Practica y comenta", p: "Simula el interés compuesto, pregunta al consultor IA y comparte dudas con la comunidad del foro." }
      ]
    },
    route: {
      title: "Tu ruta de aprendizaje",
      sub: "Tres etapas y ocho niveles. Cada nivel se desbloquea al aprobar el test del anterior.",
      summary: "{done} de {total} niveles completados",
      levelN: "Nivel {n}",
      min: "{n} min",
      score: "Nota: {n} %",
      status: { done: "Completado", open: "Disponible", locked: "Bloqueado" }
    },
    tools: {
      title: "Herramientas para practicar",
      sub: "Úsalas en cualquier momento, sin esperar a terminar la ruta.",
      simulator: { h: "Simulador", p: "Descubre cuánto puede crecer tu ahorro con aportaciones periódicas y el paso del tiempo." },
      forum: { h: "Foro", p: "Pregunta, comparte tu experiencia y aprende de otras personas que también están empezando." },
      ai: { h: "Consultor IA", p: "Resuelve dudas concretas con explicaciones claras que siempre incluyen pros y contras." },
      resources: { h: "Noticias y fuentes", p: "Titulares económicos actualizados y las fuentes oficiales que conviene conocer." }
    },

    level: {
      back: "Volver a la ruta",
      minutes: "{n} min de lectura",
      essentials: "Lo esencial",
      deepHint: "Opcional, para quien quiere ir más allá",
      jumpQuiz: "Ya lo domino: ir al test",
      askAi: "Preguntar al consultor",
      aiPrefill: "Tengo una duda sobre «{title}»: ",
      toc: "En este nivel",
      tocQuiz: "Test del nivel",
      pros: "A favor",
      cons: "En contra y riesgos",
      termHint: "Toca para ver la definición",
      prev: "Nivel anterior",
      next: "Siguiente nivel",
      nextLocked: "Siguiente nivel (bloqueado)",
      pagerLabel: "Navegación entre niveles",
      locked: {
        title: "Este nivel aún está bloqueado",
        text: "Para abrir «{title}», aprueba antes el test del nivel {prev} con al menos un 70 %.",
        go: "Ir al nivel {prev}",
        back: "Ver la ruta completa"
      }
    },
    quiz: {
      title: "Test del nivel {n}",
      hint: "{q} preguntas. Con {min} aciertos (70 %) desbloqueas el siguiente nivel.",
      hintLast: "{q} preguntas. Con {min} aciertos (70 %) completas la ruta.",
      answered: "{a} de {q} respondidas",
      submit: "Corregir test",
      missing: "Te faltan {n} preguntas por responder.",
      correct: "Correcto.",
      wrong: "No es correcto.",
      passTitle: "¡Aprobado!",
      passText: "Has acertado {c} de {q} ({p} %).",
      unlocked: "Nivel {n} desbloqueado",
      finished: "Has completado toda la ruta. ¡Enhorabuena!",
      failTitle: "Todavía no",
      failText: "Has acertado {c} de {q} ({p} %) y necesitas {min}. Lee las explicaciones y vuelve a intentarlo.",
      retry: "Repetir el test",
      goNext: "Ir al nivel {n}",
      backRoute: "Volver a la ruta",
      previous: "Ya aprobaste este test con un {p} %. Puedes repetirlo cuando quieras."
    },
    sim: {
      title: "Simulador de interés compuesto",
      sub: "Mueve los controles y observa cómo el tiempo y la constancia multiplican el efecto de cada euro.",
      initial: "Capital inicial",
      monthly: "Aportación mensual",
      rate: "Rentabilidad anual estimada",
      years: "Años invertido",
      yearsVal: "{n} años",
      yearVal: "1 año",
      presetsLabel: "Escenarios de ejemplo",
      presets: [
        { label: "Conservador (3 %)", rate: 3 },
        { label: "Moderado (5 %)", rate: 5 },
        { label: "Dinámico (7 %)", rate: 7 }
      ],
      inflation: "Mostrar el resultado en euros de hoy (descontando una inflación del 2 % anual)",
      contributed: "Capital aportado",
      interest: "Intereses generados",
      final: "Valor final estimado",
      legendTotal: "Valor total",
      legendContrib: "Capital aportado",
      tipYear: "Año {n}",
      chartLabel: "Evolución del valor de la inversión año a año",
      note: "Simulación con capitalización mensual y rentabilidad constante. En la realidad la rentabilidad varía cada año, hay comisiones e impuestos, y los resultados pasados no garantizan los futuros.",
      privacy: "Los cálculos se hacen en tu dispositivo: no se envía ningún dato."
    },
    forum: {
      title: "Foro de la comunidad",
      sub: "Un espacio para preguntar sin miedo y compartir lo que vas aprendiendo.",
      topicsLabel: "Temas del foro",
      rules: "Normas: trato respetuoso, nada de promesas de rentabilidad ni recomendaciones de compra, y no compartas datos personales.",
      loading: "Cargando mensajes…",
      empty: "Todavía no hay mensajes en este tema. ¡Abre tú la conversación!",
      offline: "No se puede conectar con el servidor del foro. Comprueba tu conexión e inténtalo de nuevo.",
      composerLabel: "Escribe tu mensaje",
      placeholder: "Escribe tu pregunta o comparte tu experiencia…",
      publish: "Publicar",
      counter: "{n}/600",
      reply: "Responder",
      replyPh: "Escribe tu respuesta…",
      sendReply: "Publicar respuesta",
      delete: "Eliminar",
      deleteConfirm: "¿Eliminar este mensaje? Esta acción no se puede deshacer.",
      deleted: "Mensaje eliminado",
      posted: "Mensaje publicado",
      replied: "Respuesta publicada",
      loginCta: "Inicia sesión para publicar y responder."
    },
    ai: {
      title: "Consultor IA",
      sub: "Resuelve dudas sobre inversión con explicaciones claras. Siempre verás argumentos a favor y en contra.",
      panelTitle: "Conversación",
      panelSub: "Pregunta con tus propias palabras; se adapta a tu nivel.",
      welcome: "¡Hola! Soy el consultor de NEXORA. Pregúntame lo que quieras sobre inversión: conceptos, productos, estrategias o dudas de los niveles. Te daré siempre los pros y los contras, sin recomendaciones personalizadas.",
      needLogin: "Inicia sesión para usar el consultor IA. Así evitamos abusos del servicio.",
      placeholder: "Por ejemplo: ¿qué diferencia hay entre un ETF y un fondo indexado?",
      inputLabel: "Tu pregunta para el consultor",
      send: "Enviar",
      thinking: "El consultor está escribiendo",
      suggestions: [
        "¿Qué es un ETF y en qué se diferencia de un fondo indexado?",
        "¿Merece la pena invertir si solo puedo aportar 50 € al mes?",
        "¿Cómo afecta la subida de tipos de interés a mis inversiones?",
        "Explícame el PER con un ejemplo sencillo"
      ],
      clear: "Nueva conversación",
      disclaimer: "Las respuestas son orientativas y educativas. No constituyen asesoramiento financiero personalizado y el consultor no tiene datos de mercado en tiempo real."
    },
    res: {
      title: "Noticias y fuentes",
      sub: "Mantente al día con titulares de medios económicos de referencia y conoce las fuentes oficiales para contrastar.",
      liveTitle: "Titulares en directo",
      liveSub: "Se actualizan automáticamente. Pulsa un titular para leer la noticia completa en la web del medio.",
      updated: "Actualizado: {time}",
      unavailable: "Ahora mismo no se pueden cargar los titulares. Mientras tanto, consulta directamente las fuentes de abajo.",
      tip: "Contrasta siempre una noticia en al menos dos fuentes independientes y desconfía de quien prometa rentabilidades garantizadas.",
      sourcesTitle: "Fuentes de referencia",
      newTab: "(se abre en una pestaña nueva)"
    },
    settings: {
      title: "Ajustes",
      language: "Idioma",
      theme: "Apariencia",
      theme_auto: "Automática",
      theme_light: "Clara",
      theme_dark: "Oscura",
      progress: "Tu progreso",
      reset: "Reiniciar progreso",
      resetConfirm: "¿Reiniciar todo tu progreso? Los niveles volverán a bloquearse.",
      resetDone: "Progreso reiniciado",
      account: "Cuenta",
      loggedAs: "Sesión iniciada como {name}",
      syncNote: "Tu idioma y tu progreso se guardan en tu cuenta y se sincronizan entre dispositivos.",
      guestNote: "Inicia sesión para guardar tu progreso y tu idioma en tu cuenta y usarlos en cualquier dispositivo."
    },
    auth: {
      title: "Tu cuenta",
      sub: "Con una cuenta puedes publicar en el foro, usar el consultor IA y guardar tu progreso.",
      tabLogin: "Iniciar sesión",
      tabRegister: "Crear cuenta",
      email: "Correo electrónico",
      password: "Contraseña",
      showPwd: "Mostrar contraseña",
      hidePwd: "Ocultar contraseña",
      username: "Nombre de usuario",
      usernameHint: "Entre 3 y 30 caracteres: letras, números, punto, guion o guion bajo. Será visible en el foro.",
      passwordHint: "Mínimo 8 caracteres. Usa una contraseña que no utilices en otros sitios.",
      loginBtn: "Iniciar sesión",
      registerBtn: "Crear cuenta",
      working: "Un momento…",
      welcome: "¡Hola, {name}!",
      loggedOut: "Has cerrado sesión"
    },
    footer: {
      disclaimer: "Contenido educativo, no asesoramiento financiero. Invertir conlleva riesgos, incluida la pérdida del capital. Rentabilidades pasadas no garantizan rentabilidades futuras.",
      sources: "Contenido elaborado a partir de guías de organismos supervisores y comunidades inversoras reconocidas. Última revisión: septiembre de 2026.",
      privacy: "Solo usamos una cookie técnica para mantener tu sesión. Sin publicidad ni rastreadores."
    }
  },

  errors: {
    NETWORK: "No se puede conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.",
    SERVER_ERROR: "Algo ha fallado en el servidor. Inténtalo de nuevo en unos minutos.",
    NOT_FOUND: "No se ha encontrado lo que buscabas.",
    INVALID_INPUT: "Los datos enviados no son válidos. Revísalos e inténtalo de nuevo.",
    INVALID_USERNAME: "El nombre de usuario debe tener entre 3 y 30 caracteres: letras, números, punto, guion o guion bajo.",
    INVALID_EMAIL: "Introduce un correo electrónico válido.",
    WEAK_PASSWORD: "La contraseña debe tener al menos 8 caracteres (y no más de 72).",
    REGISTRATION_FAILED: "No se ha podido crear la cuenta: ese nombre de usuario o correo ya está en uso.",
    INVALID_CREDENTIALS: "El correo o la contraseña no son correctos.",
    UNAUTHENTICATED: "Tu sesión ha caducado. Inicia sesión de nuevo.",
    FORBIDDEN: "No tienes permiso para hacer esto.",
    BAD_ORIGIN: "La petición se ha bloqueado por seguridad. Recarga la página e inténtalo de nuevo.",
    TOO_MANY_REQUESTS: "Has hecho demasiadas peticiones seguidas. Espera un poco y vuelve a intentarlo.",
    TOPIC_NOT_FOUND: "Ese tema del foro no existe.",
    POST_NOT_FOUND: "Ese mensaje ya no existe.",
    EMPTY_MESSAGE: "Escribe algo antes de publicar.",
    AI_DISABLED: "El consultor IA no está activado en este servidor. La persona que lo administra debe configurar la clave de la API.",
    AI_ERROR: "El consultor no ha podido responder ahora. Inténtalo de nuevo en unos momentos."
  },

  topics: {
    "primeros-pasos": "Primeros pasos",
    "acciones": "Acciones",
    "etfs-fondos": "ETF y fondos",
    "materias-primas": "Materias primas",
    "estrategia": "Estrategia"
  },

  stages: [
    { name: "Básico", title: "Los cimientos", desc: "Qué necesitas antes de invertir, el vocabulario clave y cómo leer un gráfico." },
    { name: "Intermedio", title: "Pasar a la acción", desc: "Qué productos existen, cómo se opera en la práctica y cómo analizar una empresa." },
    { name: "Avanzado", title: "Pensar como inversor", desc: "Estrategia, gestión del riesgo, macroeconomía y el factor psicológico." }
  ],

  charts: {
    inflation: { idle: "Dinero parado", invested: "Invertido al 7 % anual", year: "Año {n}", note: "Poder de compra de 1.000 € con una inflación del 3 % anual" },
    line: { price: "Precio", time: "Tiempo", resistance: "Resistencia", support: "Soporte" },
    candle: { high: "Máximo", low: "Mínimo", open: "Apertura", close: "Cierre", bull: "Vela alcista", bear: "Vela bajista", sequence: "Secuencia alcista" },
    ma: { price: "Precio diario", ma: "Media móvil" },
    risk: {
      x: "Riesgo (oscilaciones del precio)", y: "Rentabilidad esperada", note: "Esquema ilustrativo",
      items: ["Depósitos y monetarios", "Bonos", "Fondo indexado global", "Acciones individuales", "Materias primas", "Criptoactivos"]
    },
    orders: { current: "Precio actual", limitBuy: "Compra limitada", stop: "Stop-loss", take: "Take-profit" },
    donut: { center: "Ejemplo", items: ["Renta variable global", "Renta fija", "Liquidez", "Materias primas"] },
    cycle: { phases: ["Expansión", "Auge", "Recesión", "Recuperación", "Crisis"] },
    emotion: {
      phases: ["Optimismo", "Euforia", "Ansiedad", "Miedo", "Pánico", "Desánimo", "Esperanza", "Alivio"],
      top: "Máximo riesgo", bottom: "Máxima oportunidad"
    }
  },

  resources: {
    groups: [
      {
        icon: "shield", title: "Organismos oficiales",
        items: [
          { name: "CNMV", url: "https://www.cnmv.es", desc: "Supervisor de los mercados en España. Consulta si un broker está registrado y lee sus guías gratuitas." },
          { name: "Finanzas para todos", url: "https://www.finanzasparatodos.es", desc: "Programa de educación financiera de la CNMV y el Banco de España." },
          { name: "Portal del Cliente Bancario", url: "https://clientebancario.bde.es", desc: "Banco de España: derechos, productos bancarios y reclamaciones." }
        ]
      },
      {
        icon: "message", title: "Comunidades",
        items: [
          { name: "Bogleheads España", url: "https://foro.bogleheads.es", desc: "Foro centrado en la inversión indexada y a largo plazo." },
          { name: "Rankia", url: "https://www.rankia.com", desc: "Comunidad financiera en español con foros sobre bolsa, fondos y brokers." },
          { name: "Investing.com", url: "https://es.investing.com", desc: "Cotizaciones, calendario económico y análisis." }
        ]
      },
      {
        icon: "news", title: "Prensa económica",
        items: [
          { name: "Expansión", url: "https://www.expansion.com", desc: "Diario económico de referencia en España." },
          { name: "Cinco Días", url: "https://cincodias.elpais.com", desc: "Mercados, empresas y economía." },
          { name: "Reuters", url: "https://www.reuters.com/markets", desc: "Agencia internacional: mercados en tiempo casi real." },
          { name: "Bolsa de Madrid", url: "https://www.bolsamadrid.es", desc: "Datos oficiales del mercado español." }
        ]
      }
    ]
  },

  levels: [
    /* ---------------- NIVEL 0 ---------------- */
    {
      title: "Antes de invertir",
      subtitle: "Lo que conviene tener claro antes de poner el primer euro en bolsa.",
      minutes: 8,
      essentials: [
        "Invierte solo dinero que no vayas a necesitar en años y ten antes un fondo de emergencia.",
        "Tu perfil (horizonte, capacidad de asumir pérdidas y tolerancia emocional) decide qué productos te convienen.",
        "El tiempo y el interés compuesto son tus grandes aliados; la inflación, el enemigo silencioso del dinero parado."
      ],
      blocks: [
        { t: "p", h: "Tu perfil de inversor", html: "Antes de mirar una sola acción, responde con honestidad: ¿cuánto tiempo puedes dejar el dinero invertido sin tocarlo? ¿Podrías permitirte perder una parte? ¿Cómo reaccionarías si mañana valiera un 30 % menos? Los supervisores, como la CNMV en España, insisten en que estas respuestas, y no una corazonada o una moda, deben guiar lo que compras." },
        { t: "cards", items: [
          { icon: "clock", h: "Horizonte temporal", p: "¿Menos de 2 años, entre 2 y 10, o más de 10? Cuanto más largo, más margen tienes para recuperarte de las caídas." },
          { icon: "wallet", h: "Capacidad financiera", p: "¿Perder ese dinero afectaría a tu día a día? Si la respuesta es sí, ese dinero no debería estar en bolsa." },
          { icon: "heart", h: "Tolerancia emocional", p: "¿Dormirías tranquilo viendo tu inversión caer un 20 % en un mes? Sé sincero: es la causa de muchas malas decisiones." }
        ] },
        { t: "p", h: "El colchón va antes que la inversión", html: "Reserva entre 3 y 6 meses de gastos en algo líquido y seguro, como una cuenta remunerada o un fondo monetario, antes de invertir en bolsa. Así nunca tendrás que vender en el peor momento por un imprevisto." },
        { t: "quote", text: "Primero el fondo de emergencia, después la inversión. Nunca al revés." },
        { t: "chart", id: "inflation", caption: "Con una inflación media del 3 %, 1.000 € guardados en un cajón compran dentro de 20 años lo que hoy comprarían unos 550 €. Invertidos a un 7 % anual (cifra ilustrativa, no garantizada), su poder de compra se habría más que duplicado." },
        { t: "p", h: "El interés compuesto", html: "Los rendimientos generan a su vez nuevos rendimientos, como una bola de nieve que crece al rodar. Con aportaciones constantes y una rentabilidad media del 7 % anual (una referencia histórica habitual para carteras diversificadas de acciones, no una promesa):" },
        { t: "table", head: ["Aportación mensual", "Años", "Capital aportado", "Valor final aproximado"], rows: [
          ["100 €", "10", "12.000 €", "≈ 17.300 €"],
          ["100 €", "25", "30.000 €", "≈ 81.000 €"],
          ["300 €", "25", "90.000 €", "≈ 243.000 €"]
        ] },
        { t: "callout", html: "Cifras con capitalización mensual, sin comisiones, impuestos ni inflación. Sirven para entender el efecto del tiempo, no como previsión. Prueba con tus propios números en el <b>Simulador</b>." },
        { t: "balance", h: "Invertir: ¿sí o no?", pros: [
          "El dinero parado pierde poder de compra año tras año por la inflación.",
          "A largo plazo, la renta variable diversificada ha superado históricamente a la inflación y al ahorro tradicional.",
          "El interés compuesto premia empezar pronto, aunque sea con poco."
        ], cons: [
          "Puedes perder una parte o la totalidad del dinero invertido.",
          "Las rentabilidades pasadas no garantizan las futuras.",
          "Si inviertes dinero que vas a necesitar pronto, puedes verte obligado a vender con pérdidas."
        ] },
        { t: "callout", html: "La regla de oro de los supervisores: <b>no inviertas en lo que no entiendas</b>. Si no puedes explicar en dos frases qué has comprado y qué riesgo tiene, todavía no es el momento." },
        { t: "deep", h: "Rentabilidad real, regla del 72 y coste de oportunidad", blocks: [
          { t: "p", html: "La <b>rentabilidad real</b> es, aproximadamente, la rentabilidad nominal menos la inflación. Un 5 % nominal con un 3 % de inflación es solo un 2 % real: eso es lo que de verdad aumenta tu poder de compra." },
          { t: "p", html: "La <b>regla del 72</b> estima cuántos años tarda en duplicarse un capital: divide 72 entre la rentabilidad anual. Al 6 % tarda unos 12 años; al 9 %, unos 8." },
          { t: "p", html: "El <b>coste de oportunidad</b> también cuenta: amortizar una deuda al 8 % TAE equivale a una rentabilidad segura del 8 %, algo que ninguna inversión garantiza. Por eso suele tener sentido cancelar las deudas caras antes de invertir." }
        ] }
      ],
      quiz: [
        { q: "¿Qué se recomienda tener antes de empezar a invertir?", o: ["Un fondo de emergencia de 3 a 6 meses de gastos", "Un préstamo personal para invertir más", "Nada: cuanto antes se invierta, mejor", "Una tarjeta de crédito con un límite alto"], a: 0, e: "El colchón de emergencia evita tener que vender inversiones en el peor momento por un imprevisto." },
        { q: "Según los supervisores como la CNMV, ¿qué debe guiar tus decisiones de inversión?", o: ["Lo que se recomienda en redes sociales", "Tu perfil de inversor: objetivos, horizonte y tolerancia al riesgo", "Invertir siempre en lo que más sube ese mes", "Copiar la cartera de un familiar"], a: 1, e: "Tu situación financiera, tu horizonte temporal y tu tolerancia al riesgo determinan qué productos te convienen." },
        { q: "¿Qué papel juega el interés compuesto?", o: ["No tiene un efecto relevante", "Los rendimientos generados también generan rendimientos con el tiempo", "Solo se aplica a préstamos, no a inversiones", "Reduce la rentabilidad cuanto más tiempo pasa"], a: 1, e: "El interés compuesto hace que el crecimiento se acelere cuanto más tiempo permanece invertido el capital." },
        { q: "¿Qué significa «no inviertas en lo que no entiendas»?", o: ["Que solo debes invertir en productos complejos", "Que, si no puedes explicar qué has comprado y su riesgo, no es el momento de comprarlo", "Que es una frase sin importancia práctica", "Que solo se aplica a las criptomonedas"], a: 1, e: "Es un principio básico de protección al inversor que repiten todos los supervisores." },
        { q: "¿Cuál de estos NO es uno de los tres ejes del perfil de inversor?", o: ["El horizonte temporal", "La capacidad financiera de asumir pérdidas", "El color corporativo del broker", "La tolerancia emocional al riesgo"], a: 2, e: "Los tres ejes son el horizonte temporal, la capacidad financiera de asumir pérdidas y la tolerancia emocional al riesgo." },
        { q: "¿Cuántos meses de gastos se recomienda reunir en el fondo de emergencia antes de invertir?", o: ["De 3 a 6 meses", "Una semana", "Al menos 5 años", "No hace falta ningún colchón"], a: 0, e: "Lo habitual es cubrir entre 3 y 6 meses de gastos en algo líquido y accesible." },
        { q: "Aportando 100 € al mes durante 25 años a un 7 % anual, ¿qué ocurre con el valor final frente a lo aportado?", o: ["El valor final es menor que lo aportado", "El valor final es prácticamente igual a lo aportado", "El valor final es varias veces superior gracias al interés compuesto", "Es imposible de calcular"], a: 2, e: "Con 30.000 € aportados, el valor final ronda los 81.000 €: el tiempo multiplica el efecto de cada aportación." },
        { q: "Según la regla del 72, ¿cuántos años tarda aproximadamente en duplicarse un capital al 8 % anual?", o: ["3 años", "9 años", "20 años", "72 años"], a: 1, e: "72 ÷ 8 = 9. Es una aproximación rápida muy útil para hacerse una idea del efecto del tiempo." }
      ]
    },

    /* ---------------- NIVEL 1 ---------------- */
    {
      title: "El vocabulario básico",
      subtitle: "Los términos que oirás una y otra vez, explicados sin jerga.",
      minutes: 10,
      essentials: [
        "Una acción es una pequeña parte de una empresa; un bono, un préstamo que haces a cambio de intereses.",
        "Un ETF o un fondo indexado te permite comprar cientos de empresas de una sola vez.",
        "Las órdenes de mercado priorizan la rapidez; las limitadas, el precio."
      ],
      blocks: [
        { t: "p", html: "Toca cada tarjeta para ver su definición. No hace falta memorizarlas de golpe: vuelve aquí siempre que lo necesites." },
        { t: "glossary", items: [
          { t: "Acción", d: "Una pequeña parte de la propiedad de una empresa. Si a la empresa le va bien, tu parte suele valer más." },
          { t: "Bono", d: "Un préstamo que haces a un Estado o a una empresa a cambio de un interés pactado de antemano." },
          { t: "Dividendo", d: "La parte del beneficio que una empresa reparte entre sus accionistas, normalmente en efectivo." },
          { t: "ETF", d: "Un fondo que cotiza en bolsa como una acción y que suele replicar un índice completo." },
          { t: "Fondo indexado", d: "Un fondo que copia un índice de forma pasiva y con comisiones bajas. No cotiza en tiempo real como un ETF." },
          { t: "Índice bursátil", d: "Una cesta de empresas que resume la evolución de un mercado, como el IBEX 35 o el MSCI World." },
          { t: "Broker", d: "La entidad regulada a través de la cual compras y vendes activos." },
          { t: "Capitalización", d: "El valor total de una empresa en bolsa: precio por acción multiplicado por el número de acciones." },
          { t: "Volatilidad", d: "Cuánto y con qué rapidez se mueve el precio de un activo. Más volatilidad significa más incertidumbre." },
          { t: "Diversificación", d: "Repartir el dinero entre muchos activos para que ningún tropiezo individual te hunda." },
          { t: "Spread", d: "La diferencia entre el precio al que puedes comprar y el precio al que puedes vender en un momento dado." },
          { t: "Orden de mercado", d: "Compra o venta inmediata al mejor precio disponible en ese momento." },
          { t: "Orden limitada", d: "Compra o venta que solo se ejecuta si se alcanza el precio que tú fijas." },
          { t: "Rentabilidad anualizada", d: "La ganancia o pérdida media por año. Permite comparar inversiones de distinta duración." },
          { t: "Liquidez", d: "La facilidad para convertir una inversión en dinero rápidamente y sin perder valor." },
          { t: "Plusvalía y minusvalía", d: "La ganancia (plusvalía) o la pérdida (minusvalía) al vender algo por más o menos de lo que te costó." }
        ] },
        { t: "p", h: "Cómo encajan las piezas", html: "Cuando compras un ETF a través de tu broker, envías una orden (de mercado o limitada) que se ejecuta al precio disponible, con un pequeño spread entre compra y venta. El ETF sube o baja según el índice que replica y, si lo mantienes varios años, tu resultado se mide en rentabilidad anualizada." },
        { t: "cards", h: "Las tres grandes familias", items: [
          { icon: "pie", h: "Renta variable", p: "Acciones y fondos de acciones. Más potencial de ganancia y más oscilaciones." },
          { icon: "lock", h: "Renta fija", p: "Bonos y letras. Menos oscilaciones y una rentabilidad más previsible." },
          { icon: "drop", h: "Liquidez", p: "Cuentas y fondos monetarios. Disponible al momento, con poca rentabilidad." }
        ] },
        { t: "deep", h: "Términos que usan los profesionales", blocks: [
          { t: "list", items: [
            "<b>Bid y ask:</b> el mejor precio al que alguien está dispuesto a comprar (bid) y a vender (ask). Su diferencia es el spread.",
            "<b>TER:</b> el gasto total anual de un fondo o ETF, expresado en porcentaje. En los indexados suele ser muy bajo.",
            "<b>Acumulación o distribución:</b> los fondos de acumulación reinvierten los dividendos; los de distribución los reparten.",
            "<b>Tracking error:</b> cuánto se desvía un fondo indexado del índice que intenta copiar.",
            "<b>Benchmark:</b> el índice de referencia con el que se compara una inversión.",
            "<b>Blue chip:</b> una empresa grande, consolidada y con mucho volumen de negociación."
          ] }
        ] }
      ],
      quiz: [
        { q: "¿Qué es un ETF?", o: ["Un tipo de acción individual", "Un fondo cotizado que suele replicar un índice y se compra como una acción", "Un préstamo a una empresa", "Un impuesto sobre las ganancias en bolsa"], a: 1, e: "Un ETF combina la diversificación de un fondo con la facilidad de compraventa de una acción." },
        { q: "¿Qué diferencia hay entre una orden de mercado y una limitada?", o: ["No hay diferencia real", "La de mercado se ejecuta al momento al mejor precio; la limitada, solo si se alcanza el precio que fijas", "La limitada siempre es más cara", "La de mercado solo sirve para vender"], a: 1, e: "La orden de mercado prioriza la ejecución inmediata; la limitada, el control del precio." },
        { q: "¿Qué mide la volatilidad de un activo?", o: ["Su rentabilidad garantizada", "Cuánto y con qué rapidez se mueve su precio", "El número de accionistas que tiene", "La comisión que cobra el broker"], a: 1, e: "La volatilidad refleja la magnitud y la velocidad de los movimientos de precio; no garantiza ninguna rentabilidad." },
        { q: "¿Qué es la diversificación?", o: ["Invertir todo en una sola empresa prometedora", "Repartir la inversión entre distintos activos para reducir el riesgo de una sola apuesta", "Vender todas las acciones cada mes", "Un tipo de orden de bolsa"], a: 1, e: "Diversificar reduce el impacto de que un solo activo salga mal sobre el conjunto de la cartera." },
        { q: "¿Qué es el spread?", o: ["El dividendo anual repartido", "La diferencia entre el precio de compra y el de venta en un momento dado", "Un impuesto sobre las plusvalías", "El número de acciones en circulación"], a: 1, e: "Es la diferencia entre el precio de venta ofrecido (ask) y el de compra ofrecido (bid) en ese momento." },
        { q: "¿Qué mide la capitalización de una empresa?", o: ["Su deuda total", "El precio de la acción multiplicado por el número de acciones", "Su beneficio neto anual", "Su número de empleados"], a: 1, e: "La capitalización bursátil es el valor total de la empresa en bolsa." },
        { q: "¿Qué es un broker?", o: ["Un tipo de acción muy volátil", "La entidad regulada a través de la cual compras y vendes activos", "Un impuesto sobre los dividendos", "Un índice bursátil"], a: 1, e: "El broker, supervisado por el organismo correspondiente, ejecuta tus órdenes de compra y venta." },
        { q: "¿Qué indica la rentabilidad anualizada?", o: ["La ganancia total, sin importar el tiempo transcurrido", "La ganancia o pérdida media por año si el resultado se repartiera de forma uniforme", "El precio actual del activo", "La comisión anual del broker"], a: 1, e: "Normaliza el resultado a una cifra media por año para comparar inversiones de distinta duración." }
      ]
    },

    /* ---------------- NIVEL 2 ---------------- */
    {
      title: "Cómo leer un gráfico",
      subtitle: "Líneas, velas, tendencias y volumen: lo que de verdad te cuenta un gráfico.",
      minutes: 12,
      essentials: [
        "El gráfico de líneas muestra la tendencia; las velas, lo que pasó dentro de cada periodo.",
        "Soportes y resistencias son zonas donde el precio suele frenarse, no muros infranqueables.",
        "El volumen y las medias móviles ayudan a separar la señal del ruido."
      ],
      blocks: [
        { t: "p", h: "El gráfico de líneas", html: "Une el precio de cierre de cada periodo con una línea. Es la forma más sencilla de ver de un vistazo la tendencia general, aunque no muestra lo que ocurrió dentro de cada día." },
        { t: "chart", id: "line", caption: "Tendencia alcista con sus niveles clave: la resistencia, donde el precio tiende a frenarse al subir, y el soporte, donde tiende a rebotar al bajar." },
        { t: "p", h: "Las velas japonesas", html: "Cada vela resume un periodo con cuatro datos: apertura, cierre, máximo y mínimo. El cuerpo va de la apertura al cierre; las mechas marcan los extremos." },
        { t: "chart", id: "candle", caption: "Verde: cerró por encima de su apertura (alcista). Roja: cerró por debajo (bajista). A la derecha, una secuencia de velas que forma una tendencia alcista." },
        { t: "list", h: "Tendencias, soportes y resistencias", items: [
          "<b>Alcista:</b> máximos y mínimos cada vez más altos.",
          "<b>Bajista:</b> máximos y mínimos cada vez más bajos.",
          "<b>Lateral:</b> el precio oscila dentro de una banda, sin una dirección clara.",
          "<b>Soporte:</b> zona donde históricamente ha habido compradores suficientes para frenar una caída.",
          "<b>Resistencia:</b> zona donde históricamente ha habido vendedores suficientes para frenar una subida."
        ] },
        { t: "p", h: "Volumen y medias móviles", html: [
          "Debajo del precio suele aparecer el <b>volumen</b>: cuántos títulos se han negociado. Un movimiento con mucho volumen tiene más «convicción» que uno con poco.",
          "La <b>media móvil</b> (por ejemplo, de 50 o de 200 sesiones) es el precio medio de los últimos periodos, dibujado como una línea suave que deja ver la tendencia de fondo."
        ] },
        { t: "chart", id: "ma", caption: "El precio diario oscila alrededor de su media móvil. Mientras el precio se mantiene por encima, muchos analistas lo interpretan como una señal de fortaleza." },
        { t: "balance", h: "¿Sirve de algo mirar gráficos?", pros: [
          "Ayuda a elegir el momento de entrada o de salida.",
          "El volumen y la tendencia aportan un contexto que el precio aislado no da."
        ], cons: [
          "Ningún patrón garantiza lo que ocurrirá después.",
          "Mirar el gráfico a diario puede generar ansiedad y decisiones impulsivas si tu horizonte es largo."
        ] },
        { t: "deep", h: "Escalas, marcos temporales y trampas habituales", blocks: [
          { t: "p", html: "Usa la <b>escala logarítmica</b> para periodos largos: una subida de 10 a 20 € y otra de 100 a 200 € son ambas del 100 % y se verán igual de grandes. En escala lineal, la segunda parecería enorme." },
          { t: "p", html: "Cambia el <b>marco temporal</b> (diario, semanal, mensual) antes de sacar conclusiones: una caída que asusta en el gráfico diario puede ser una simple corrección en el semanal." },
          { t: "p", html: "Cuidado con el <b>sesgo de confirmación</b>: es fácil «ver» el patrón que ya querías encontrar. Contrástalo siempre con datos del negocio." }
        ] }
      ],
      quiz: [
        { q: "En un gráfico de velas, ¿qué representa el cuerpo de la vela?", o: ["El volumen negociado", "La distancia entre la apertura y el cierre del periodo", "El nombre de la empresa", "La comisión del broker"], a: 1, e: "El cuerpo va de la apertura al cierre; las mechas marcan el máximo y el mínimo." },
        { q: "¿Qué es una resistencia?", o: ["Un nivel de precio donde las subidas han tendido a frenarse", "Un tipo de orden de venta obligatoria", "El dividendo mínimo de una empresa", "Una comisión bancaria"], a: 0, e: "Es una zona donde, históricamente, ha habido vendedores suficientes para frenar el precio." },
        { q: "¿Qué indica una tendencia alcista?", o: ["Máximos y mínimos cada vez más bajos", "Que el precio se mueve siempre en línea recta", "Máximos y mínimos cada vez más altos", "Que el volumen baja a cero"], a: 2, e: "Una tendencia alcista se define por una sucesión de máximos y mínimos crecientes." },
        { q: "¿Para qué sirve una media móvil?", o: ["Para calcular impuestos sobre dividendos", "Para suavizar el precio y ver mejor la tendencia de fondo", "Para fijar el precio oficial de una acción", "Para sustituir por completo al análisis fundamental"], a: 1, e: "La media móvil filtra el ruido diario y ayuda a ver la tendencia general." },
        { q: "¿Qué muestra el volumen en un gráfico?", o: ["El precio medio histórico", "Cuántos títulos se han negociado en ese periodo", "El dividendo repartido ese día", "La comisión cobrada por el broker"], a: 1, e: "El volumen indica cuántos títulos han cambiado de manos y da «convicción» a un movimiento de precio." },
        { q: "¿Qué caracteriza a una tendencia lateral?", o: ["Máximos y mínimos siempre crecientes", "El precio se mueve dentro de una banda, sin dirección clara", "El precio solo puede bajar", "Es lo mismo que una tendencia alcista"], a: 1, e: "En una tendencia lateral el precio oscila dentro de un rango, sin marcar una dirección clara." },
        { q: "En una vela japonesa, ¿qué representan las mechas?", o: ["El precio de apertura y de cierre", "El máximo y el mínimo alcanzados en el periodo", "El volumen negociado", "El nombre del activo"], a: 1, e: "Las mechas marcan los extremos que tocó el precio durante ese periodo." },
        { q: "¿Qué diferencia una vela alcista de una bajista?", o: ["El color es siempre el mismo", "En la alcista el cierre queda por encima de la apertura; en la bajista, por debajo", "La alcista no tiene mechas", "La bajista solo aparece los lunes"], a: 1, e: "Alcista: cerró más alto de lo que abrió. Bajista: cerró más bajo." }
      ]
    },

    /* ---------------- NIVEL 3 ---------------- */
    {
      title: "Qué se puede comprar",
      subtitle: "Acciones, fondos, bonos, materias primas y más: qué ofrece cada uno y qué riesgos tiene.",
      minutes: 12,
      essentials: [
        "Cada producto combina de forma distinta riesgo, esfuerzo y potencial de ganancia.",
        "Para empezar, los fondos indexados y los ETF amplios ofrecen diversificación y costes bajos.",
        "Materias primas y criptoactivos pueden complementar una cartera, pero no deberían ser su base."
      ],
      blocks: [
        { t: "chart", id: "risk", caption: "Mapa ilustrativo de riesgo y rentabilidad esperada. A más rentabilidad potencial, más oscilaciones: la inversión muy rentable y sin riesgo no existe." },
        { t: "balance", h: "Acciones individuales", intro: "Comprar acciones de una empresa concreta es apostar por esa empresa, no por el mercado en su conjunto.", pros: [
          "Mayor potencial de ganancia si aciertas con la empresa.",
          "Derecho a voto en la junta y posibles dividendos.",
          "Sin comisiones anuales de gestión."
        ], cons: [
          "Riesgo concentrado: una mala noticia puede hundir la cotización.",
          "Exige tiempo para analizar y seguir cada empresa.",
          "Es fácil dejarse llevar por las emociones o las modas."
        ] },
        { t: "balance", h: "Fondos indexados y ETF", intro: "Replican un índice completo: con una sola compra tienes cientos o miles de empresas. Comunidades como Bogleheads y muchos supervisores los señalan como un buen punto de partida.", pros: [
          "Diversificación inmediata.",
          "Comisiones muy bajas frente a la gestión activa.",
          "Poco esfuerzo: no hay que elegir empresas."
        ], cons: [
          "Nunca batirás al mercado: obtienes su rentabilidad, menos los costes.",
          "Caen cuando cae el mercado, sin protección.",
          "Tanta variedad de índices puede confundir al principio."
        ] },
        { t: "balance", h: "Bonos y renta fija", intro: "Prestas dinero a un Estado o a una empresa a cambio de un interés pactado.", pros: [
          "Menos oscilaciones que las acciones.",
          "Ingresos previsibles.",
          "Amortiguan las caídas de la bolsa en una cartera mixta."
        ], cons: [
          "Menor rentabilidad esperada a largo plazo.",
          "Su precio baja cuando suben los tipos de interés.",
          "Riesgo de impago si el emisor tiene problemas."
        ] },
        { t: "balance", h: "Materias primas y recursos naturales", intro: "Oro, petróleo, gas o metales, normalmente a través de ETF o de acciones de empresas del sector (energéticas, mineras, agrícolas).", pros: [
          "Diversifican frente a las acciones y los bonos.",
          "El oro se ha comportado a menudo como refugio en momentos de crisis.",
          "Pueden proteger en parte frente a la inflación."
        ], cons: [
          "Muy sensibles a la geopolítica, el clima y las decisiones de los países productores.",
          "No generan beneficios ni dividendos por sí mismas.",
          "Algunos productos que las replican tienen costes ocultos."
        ] },
        { t: "p", h: "Inmobiliario cotizado (REIT y socimi)", html: "Son empresas que poseen y gestionan inmuebles (oficinas, centros logísticos, viviendas en alquiler) y reparten gran parte de su beneficio como dividendo. Dan exposición al sector inmobiliario sin comprar un piso, pero sufren cuando suben los tipos de interés." },
        { t: "p", h: "Criptoactivos, con mucha cautela", html: "Son activos digitales muy volátiles y con un marco de protección al inversor más limitado que el de los productos tradicionales. Si decides invertir, que sea una parte pequeña de tu patrimonio y solo con dinero que puedas permitirte perder por completo." },
        { t: "table", h: "Comparativa rápida", head: ["Vehículo", "Riesgo típico", "Esfuerzo", "Para quién"], rows: [
          ["Depósitos y monetarios", "Muy bajo", "Mínimo", "Fondo de emergencia y corto plazo"],
          ["Bonos", "Bajo o medio", "Bajo", "Estabilizar una cartera"],
          ["Fondo indexado o ETF global", "Medio", "Bajo", "La base de casi cualquier cartera a largo plazo"],
          ["Acciones individuales", "Alto", "Alto", "Quien quiere analizar empresas"],
          ["Materias primas", "Alto", "Medio", "Complemento de diversificación"],
          ["Criptoactivos", "Muy alto", "Medio", "Una parte pequeña, solo si se entiende"]
        ] },
        { t: "deep", h: "Qué mirar antes de comprar un fondo o un ETF", blocks: [
          { t: "list", items: [
            "<b>Índice replicado:</b> ¿el mercado mundial, un país, un sector? Cuanto más amplio, más diversificado.",
            "<b>TER:</b> el coste anual. Una diferencia del 1 % parece pequeña, pero a 30 años es enorme.",
            "<b>Método de réplica:</b> física (compra los valores del índice) o sintética (usa derivados).",
            "<b>Divisa y domicilio:</b> afectan a la fiscalidad y al riesgo de tipo de cambio.",
            "<b>Tamaño y liquidez:</b> los fondos muy pequeños pueden cerrarse y los ETF poco negociados tienen spreads altos."
          ] }
        ] }
      ],
      quiz: [
        { q: "¿Qué caracteriza principalmente a un fondo indexado?", o: ["Una gestión activa que intenta batir al mercado cada mes", "Replica un índice de forma pasiva con comisiones bajas", "Solo invierte en una empresa", "Garantiza una rentabilidad fija"], a: 1, e: "Los fondos indexados siguen un índice de referencia de forma pasiva y con costes bajos." },
        { q: "¿Qué riesgo es propio de las materias primas?", o: ["Ninguno: siempre son un refugio seguro", "Una alta sensibilidad a la geopolítica, al clima y a las decisiones de los países productores", "Que solo pueden subir de precio", "Que están garantizadas por el Estado"], a: 1, e: "Sus precios dependen de muchos factores externos difíciles de prever." },
        { q: "¿Qué son los bonos o la renta fija?", o: ["Acciones de empresas tecnológicas", "Un préstamo a un Estado o a una empresa a cambio de un interés pactado", "Un tipo de criptoactivo", "Un fondo que solo invierte en oro"], a: 1, e: "Comprar un bono es prestar dinero a cambio de un interés fijado de antemano." },
        { q: "¿Qué se recomienda a un principiante respecto a los criptoactivos?", o: ["Poner en ellos la mayor parte de la cartera", "Evitarlos siempre y sin excepción", "Si invierte, que sea una parte pequeña y solo con dinero que pueda perder", "Pedir un préstamo para invertir más"], a: 2, e: "Por su alta volatilidad y su menor protección regulatoria, conviene máxima prudencia y una exposición limitada." },
        { q: "¿Qué son los REIT o las socimis?", o: ["Bonos emitidos por los bancos centrales", "Empresas que poseen y gestionan inmuebles y reparten gran parte del beneficio como dividendo", "Un tipo de criptoactivo", "Fondos que solo invierten en oro físico"], a: 1, e: "Dan exposición al sector inmobiliario cotizado sin necesidad de comprar un inmueble." },
        { q: "¿Qué ventaja típica tienen las acciones individuales frente a un fondo indexado?", o: ["Un riesgo menor garantizado", "Más potencial de ganancia si aciertas con la empresa, además de derecho a voto y posibles dividendos", "Comisiones siempre más bajas", "Diversificación automática"], a: 1, e: "Concentran el riesgo en una empresa, pero también el potencial de ganancia si aciertas." },
        { q: "¿Por qué muchos supervisores y comunidades como Bogleheads recomiendan fondos indexados a quien empieza?", o: ["Porque garantizan ganar dinero", "Por su diversificación automática y sus comisiones bajas frente a la gestión activa", "Porque no tienen ningún riesgo", "Porque solo invierten en materias primas"], a: 1, e: "Reparten el riesgo entre muchas empresas y cobran mucho menos que la gestión activa." },
        { q: "¿Qué distingue a un bono de una acción?", o: ["El bono es un préstamo con interés pactado; la acción es una parte de la propiedad de la empresa", "Son exactamente lo mismo", "El bono siempre da más rentabilidad que la acción", "La acción garantiza el capital invertido"], a: 0, e: "Con un bono prestas dinero; con una acción te conviertes en copropietario." }
      ]
    },

    /* ---------------- NIVEL 4 ---------------- */
    {
      title: "Cómo se opera en la práctica",
      subtitle: "De abrir una cuenta a lanzar tu primera orden, con las protecciones que te corresponden.",
      minutes: 12,
      essentials: [
        "Opera solo con brokers registrados en el supervisor de tu país.",
        "Conoce los tipos de orden: de mercado, limitada, stop-loss y take-profit.",
        "Automatizar aportaciones periódicas elimina la tentación de adivinar el mejor momento."
      ],
      blocks: [
        { t: "steps", h: "Tus primeros pasos, en orden", items: [
          "<b>Elige un broker regulado.</b> Comprueba en la web del supervisor (la CNMV en España) que está registrado y autorizado.",
          "<b>Abre la cuenta y verifica tu identidad.</b> Te pedirán documentación: es una obligación legal contra el blanqueo de capitales.",
          "<b>Responde al test de conveniencia.</b> La normativa europea MiFID obliga a evaluar tus conocimientos y tu situación financiera para protegerte.",
          "<b>Transfiere el dinero</b> desde tu cuenta bancaria a la del broker.",
          "<b>Busca el producto</b> por su nombre o por su código ISIN y revisa su ficha de datos fundamentales.",
          "<b>Lanza la orden</b> eligiendo el tipo, la cantidad y, si procede, el precio límite."
        ] },
        { t: "chart", id: "orders", caption: "Dónde se sitúan las órdenes respecto al precio actual: la compra limitada espera a un precio más bajo, el stop-loss limita las pérdidas y el take-profit asegura las ganancias." },
        { t: "list", h: "Tipos de órdenes", items: [
          "<b>De mercado:</b> se ejecuta al momento, al mejor precio disponible. Es rápida, pero no controlas el precio exacto.",
          "<b>Limitada:</b> solo se ejecuta al precio que fijas o a uno mejor. Controlas el precio, pero puede no ejecutarse nunca.",
          "<b>Stop-loss:</b> vende automáticamente si el precio cae hasta el nivel que marcas, para limitar pérdidas.",
          "<b>Take-profit:</b> vende automáticamente al alcanzar la ganancia objetivo que fijas de antemano."
        ] },
        { t: "callout", html: "<b>Fiscalidad:</b> en España, traspasar dinero entre fondos de inversión no tributa en el momento del traspaso, a diferencia de vender acciones o ETF. Por eso muchos inversores a largo plazo usan fondos indexados para su cartera principal. Otros países tienen cuentas con ventajas fiscales (como el PEA en Francia o la ISA en el Reino Unido): infórmate de las normas de tu país de residencia." },
        { t: "balance", h: "Aportaciones periódicas (DCA)", intro: "Consiste en invertir la misma cantidad cada mes, pase lo que pase en el mercado.", pros: [
          "Evita la tentación de adivinar el mejor momento.",
          "Compras más participaciones cuando el precio está bajo y menos cuando está alto.",
          "Crea un hábito automático y sin estrés."
        ], cons: [
          "Si el mercado sube de forma sostenida, invertir todo de golpe habría rendido algo más de media.",
          "Cada compra puede tener comisión: revisa las condiciones del broker.",
          "Exige constancia durante años."
        ] },
        { t: "deep", h: "Costes ocultos y protección del inversor", blocks: [
          { t: "list", items: [
            "<b>Cambio de divisa:</b> comprar acciones en dólares puede costar un 0,5 % o más en cada conversión.",
            "<b>Custodia:</b> algunos brokers cobran por mantener tus valores; otros no.",
            "<b>Fondo de garantía:</b> si un broker quiebra, tus valores siguen siendo tuyos. Además, el efectivo y los valores no recuperables tienen una cobertura limitada: el mínimo en la UE es de 20.000 € y en España el FOGAIN cubre hasta 100.000 €.",
            "<b>Préstamo de valores:</b> algunos brokers prestan tus acciones a terceros. Infórmate de las condiciones y de quién se queda los ingresos.",
            "<b>Deslizamiento (slippage):</b> la diferencia entre el precio esperado y el realmente ejecutado, frecuente en órdenes de mercado con poca liquidez."
          ] }
        ] }
      ],
      quiz: [
        { q: "¿Qué debes comprobar antes de elegir un broker?", o: ["Que tenga muchos anuncios en redes sociales", "Que esté registrado y supervisado por la CNMV o el organismo correspondiente", "Que sea el más nuevo del mercado", "Que no pida ningún dato personal"], a: 1, e: "Solo las entidades registradas y supervisadas ofrecen la protección legal necesaria para operar con seguridad." },
        { q: "¿Qué es una orden stop-loss?", o: ["Una orden que aumenta automáticamente tu inversión", "Una venta automática que se activa si el precio cae hasta el nivel que marcas", "Una orden que solo sirve para comprar", "Un impuesto sobre las pérdidas"], a: 1, e: "El stop-loss limita las pérdidas vendiendo automáticamente al nivel de precio que fijes." },
        { q: "¿Qué ventaja fiscal tienen los traspasos entre fondos de inversión en España?", o: ["No tributan en el momento del traspaso", "Están exentos de impuestos para siempre", "Reducen automáticamente el IRPF de tu nómina", "No existe tal ventaja"], a: 0, e: "A diferencia de vender acciones o ETF, traspasar entre fondos no genera tributación inmediata en España." },
        { q: "¿Qué son las aportaciones periódicas (DCA)?", o: ["Invertir todo el capital de golpe", "Aportar la misma cantidad de forma periódica, sin intentar adivinar el momento perfecto", "Un tipo de impuesto sobre dividendos", "Vender al primer síntoma de caída"], a: 1, e: "Automatizar las aportaciones suaviza el precio medio de compra con el tiempo." },
        { q: "¿Qué es una orden take-profit?", o: ["Una venta automática al alcanzar la ganancia objetivo que fijas de antemano", "Un tipo de impuesto sobre las ganancias", "Una orden que solo sirve para comprar", "Una comisión de mantenimiento"], a: 0, e: "Cierra la posición automáticamente cuando el precio alcanza tu objetivo." },
        { q: "¿Qué evalúa la normativa MiFID al abrir una cuenta en un broker?", o: ["Tus conocimientos y tu situación financiera, para protegerte", "Solo tu nombre y tu dirección", "Nada relevante: es un simple trámite", "Tu afiliación política"], a: 0, e: "MiFID exige evaluar tus conocimientos y tu situación antes de operar, como medida de protección." },
        { q: "¿Qué tipo de cuentas con ventajas fiscales para el ahorro a largo plazo existen en algunos países europeos?", o: ["Ninguna: no existen en Europa", "Cuentas como la ISA o el PEA, o planes de pensiones", "Solo cuentas de criptoactivos", "Una cuenta corriente normal"], a: 1, e: "Varios países ofrecen vehículos con ventajas fiscales; merece la pena informarse de los del tuyo." },
        { q: "¿Qué diferencia hay entre una orden limitada y una de mercado en cuanto a garantías?", o: ["La limitada garantiza el precio, pero puede no ejecutarse; la de mercado se ejecuta al momento, pero sin control exacto del precio", "Ambas garantizan siempre el mismo precio", "La de mercado nunca se ejecuta", "La limitada siempre es más rápida"], a: 0, e: "La limitada prioriza el control del precio; la de mercado, la ejecución inmediata." }
      ]
    },

    /* ---------------- NIVEL 5 ---------------- */
    {
      title: "Analizar una empresa",
      subtitle: "Ratios clave, análisis fundamental y técnico, y cómo combinarlos con sentido común.",
      minutes: 14,
      essentials: [
        "El análisis fundamental estudia el negocio; el técnico, el comportamiento del precio.",
        "Ratios como el PER, el ROE o la deuda ayudan a comparar, pero nunca deben usarse solos.",
        "Ningún método predice el futuro: cada uno aporta información distinta."
      ],
      blocks: [
        { t: "p", h: "El análisis fundamental", html: "Se pregunta cuánto vale realmente una empresa: cuánto gana, cuánto crece, cuánto debe y qué ventajas tiene frente a la competencia. Si el precio en bolsa es inferior a ese valor estimado, la acción podría estar barata." },
        { t: "cards", h: "Los ratios más usados", items: [
          { icon: "calc", h: "PER", p: "Precio ÷ beneficio por acción. Indica cuántos años de beneficio actual pagas por la empresa." },
          { icon: "chart", h: "PEG", p: "PER ÷ crecimiento anual esperado del beneficio. Permite comparar empresas que crecen a ritmos distintos." },
          { icon: "target", h: "ROE", p: "Beneficio ÷ recursos propios. Mide la eficiencia con la que la empresa usa el dinero de sus accionistas." },
          { icon: "drop", h: "Rentabilidad por dividendo", p: "Dividendo anual ÷ precio. Cuidado: una cifra muy alta puede anunciar un recorte." },
          { icon: "alert", h: "Deuda neta / EBITDA", p: "Cuántos años de beneficio operativo harían falta para pagar la deuda. Por encima de 3 o 4, conviene mirar con lupa." }
        ] },
        { t: "p", h: "Un ejemplo práctico", html: "Una empresa cotiza a 50 € y gana 2,50 € por acción: su <b>PER es 20</b>, es decir, pagas 20 años de beneficios actuales. Si sus beneficios crecen un 10 % al año, su <b>PEG es 2</b> (20 ÷ 10). Otra empresa con un PER de 15 que crece un 15 % tendría un PEG de 1: es más «barata» en relación con su crecimiento, aunque habría que comprobar si ese crecimiento es sostenible." },
        { t: "list", h: "El análisis técnico", items: [
          "<b>Medias móviles:</b> muestran la tendencia de fondo. El cruce de la media corta sobre la larga se interpreta a menudo como señal alcista.",
          "<b>RSI:</b> un indicador de 0 a 100 que ayuda a detectar si un activo está sobrecomprado (por encima de 70) o sobrevendido (por debajo de 30) a corto plazo.",
          "<b>Patrones:</b> triángulos, banderas o dobles techos que algunos analistas usan para anticipar movimientos, sin ninguna garantía de que se cumplan."
        ] },
        { t: "balance", h: "Fundamental frente a técnico", neutral: true, prosLabel: "Análisis fundamental", consLabel: "Análisis técnico", pros: [
          "Se centra en el negocio real y en su valor a largo plazo.",
          "Útil para decidir qué comprar y mantener durante años.",
          "Requiere leer cuentas y entender el sector."
        ], cons: [
          "Se centra en el precio, el volumen y el comportamiento del mercado.",
          "Útil para decidir cuándo entrar o salir.",
          "Muy expuesto al ruido y a las interpretaciones subjetivas."
        ] },
        { t: "callout", html: "La conclusión honesta: <b>ninguno de los dos métodos garantiza resultados</b>. Aportan información distinta y complementaria, y la mayoría de los inversores a largo plazo dan mucho más peso al fundamental." },
        { t: "deep", h: "Leer las cuentas de una empresa", blocks: [
          { t: "list", items: [
            "<b>Cuenta de resultados:</b> los ingresos, gastos y beneficios de un periodo.",
            "<b>Balance:</b> lo que la empresa tiene (activos) y lo que debe (pasivos) en un momento dado.",
            "<b>Estado de flujos de caja:</b> el dinero que de verdad entra y sale. Un beneficio que no se convierte en caja es una señal de alerta.",
            "<b>Ventaja competitiva:</b> marca, patentes, costes bajos o efectos de red que protegen el negocio de la competencia.",
            "<b>Dónde encontrarlo:</b> en los informes anuales y trimestrales de la sección de relación con inversores de cada empresa y en el registro del supervisor."
          ] }
        ] }
      ],
      quiz: [
        { q: "¿Qué mide el PER de una empresa?", o: ["Su deuda total en euros", "Cuántos años de beneficio actual pagas por la empresa", "Su número de empleados", "La rentabilidad garantizada del dividendo"], a: 1, e: "El PER relaciona el precio de la acción con el beneficio por acción." },
        { q: "¿Qué evalúa principalmente el análisis fundamental?", o: ["Solo el movimiento del precio en los gráficos", "El negocio real de la empresa: beneficios, deuda y crecimiento", "Únicamente el volumen diario", "La opinión de un único analista"], a: 1, e: "Estudia la salud y las perspectivas reales del negocio, no solo el precio." },
        { q: "¿Para qué se usa el RSI en el análisis técnico?", o: ["Para calcular impuestos", "Para medir si un activo está sobrecomprado o sobrevendido a corto plazo", "Para fijar el precio de salida a bolsa", "Para sustituir a los estados financieros"], a: 1, e: "Es un indicador de impulso que ayuda a detectar posibles excesos de compra o de venta." },
        { q: "¿Qué conclusión honesta se puede sacar del análisis técnico frente al fundamental?", o: ["El técnico predice el futuro con total certeza", "El fundamental es siempre inútil", "Ninguno garantiza resultados: aportan información distinta y complementaria", "Solo el fundamental sirve a corto plazo"], a: 2, e: "Ambos aportan perspectivas distintas, pero ninguno elimina la incertidumbre del mercado." },
        { q: "¿Qué mide el ROE?", o: ["Cuánto beneficio genera la empresa con el capital de sus accionistas", "El precio de la acción", "El número de acciones en circulación", "La deuda total"], a: 0, e: "Relaciona el beneficio neto con los recursos propios: mide la eficiencia." },
        { q: "¿Para qué sirve el ratio PEG?", o: ["Para medir el dividendo repartido", "Para comparar empresas con distinto ritmo de crecimiento, relacionando el PER con el crecimiento esperado", "Para calcular impuestos", "Para fijar el precio de salida a bolsa"], a: 1, e: "Divide el PER entre el crecimiento esperado del beneficio." },
        { q: "¿Qué son los patrones de precio del análisis técnico (triángulos, banderas, dobles techos…)?", o: ["Garantías matemáticas de lo que ocurrirá", "Figuras que algunos analistas usan para anticipar movimientos, sin garantía de que se cumplan", "Un tipo de orden de compra", "Un impuesto sobre plusvalías"], a: 1, e: "Son herramientas de apoyo; ningún patrón garantiza el movimiento futuro del precio." },
        { q: "¿Qué mide el ratio deuda / EBITDA?", o: ["Cuánta deuda tiene la empresa en relación con lo que genera su negocio", "El precio de la acción", "El número de accionistas", "La rentabilidad por dividendo"], a: 0, e: "Ayuda a valorar si el endeudamiento es razonable respecto a la capacidad de generar beneficio." }
      ]
    },

    /* ---------------- NIVEL 6 ---------------- */
    {
      title: "Estrategia y gestión del riesgo",
      subtitle: "Cómo construir una cartera con sentido y protegerla de los errores más caros.",
      minutes: 14,
      essentials: [
        "Diversifica entre tipos de activo, sectores y países.",
        "Define por escrito tu reparto objetivo y rebalancea de forma periódica.",
        "Los mayores enemigos del inversor particular suelen ser las comisiones y sus propias emociones."
      ],
      blocks: [
        { t: "chart", id: "donut", caption: "Ejemplo ilustrativo de cartera diversificada para un perfil moderado a largo plazo. No es una recomendación: el reparto adecuado depende de tu perfil." },
        { t: "list", h: "Estrategias habituales", items: [
          "<b>Indexada pasiva:</b> comprar el mercado entero con fondos indexados y mantener durante décadas.",
          "<b>Value investing:</b> buscar empresas que cotizan por debajo de su valor estimado según el análisis fundamental.",
          "<b>Growth:</b> apostar por empresas que crecen mucho más rápido que la media, asumiendo valoraciones más altas.",
          "<b>Dividendos:</b> priorizar empresas con dividendos estables o crecientes para obtener ingresos recurrentes."
        ] },
        { t: "p", h: "Tamaño de posición y rebalanceo", html: [
          "El <b>tamaño de posición</b> es cuánto de tu capital total pones en una sola idea. Una regla habitual entre particulares es no dedicar a una sola acción más de un 5-10 % de la cartera.",
          "El <b>rebalanceo</b> consiste en volver cada cierto tiempo (por ejemplo, una vez al año) a tus porcentajes objetivo: vendes parte de lo que más ha subido y compras lo que se ha quedado atrás. Te obliga, de forma disciplinada, a comprar barato y vender caro."
        ] },
        { t: "list", h: "Los cinco errores más caros", items: [
          "<b>FOMO:</b> el miedo a quedarse fuera, que lleva a comprar por moda o presión social.",
          "<b>Apalancamiento sin entenderlo:</b> multiplica las ganancias, pero también las pérdidas, incluso por encima de lo invertido.",
          "<b>Ignorar las comisiones:</b> un 1-2 % anual de más puede suponer decenas de miles de euros menos en 20 o 30 años.",
          "<b>Concentrarse demasiado:</b> apostar casi todo a una empresa, un sector o un país.",
          "<b>Intentar adivinar el mercado:</b> entrar y salir según las noticias suele acabar en comprar caro y vender barato."
        ] },
        { t: "quote", text: "El mercado es un mecanismo para transferir dinero del impaciente al paciente." },
        { t: "balance", h: "Largo plazo frente a trading", prosLabel: "A favor del largo plazo", consLabel: "Lo que dice la evidencia sobre el trading", pros: [
          "Menos comisiones e impuestos.",
          "Menos estrés y menos decisiones impulsivas.",
          "Aprovecha al máximo el interés compuesto."
        ], cons: [
          "De media, y tras comisiones, los particulares que operan con frecuencia obtienen peores resultados que el propio mercado.",
          "Exige mucho tiempo, formación y control emocional.",
          "Con apalancamiento, un error puede costar más que el capital invertido."
        ] },
        { t: "deep", h: "Medir el riesgo como un profesional", blocks: [
          { t: "list", items: [
            "<b>Caída máxima (drawdown):</b> la mayor caída desde un máximo hasta un mínimo. Pregúntate si soportarías la peor caída histórica de tu cartera.",
            "<b>Volatilidad (desviación típica):</b> cuánto se alejan las rentabilidades de su media. Más volatilidad implica más incertidumbre.",
            "<b>Ratio de Sharpe:</b> la rentabilidad extra obtenida por cada unidad de riesgo asumida. Sirve para comparar estrategias con riesgos distintos.",
            "<b>Correlación:</b> cómo se mueven dos activos entre sí. Diversificar de verdad es combinar activos poco correlacionados.",
            "<b>Riesgo de secuencia:</b> sufrir una gran caída justo cuando empiezas a retirar dinero duele mucho más que sufrirla al principio."
          ] }
        ] }
      ],
      quiz: [
        { q: "¿Qué es el rebalanceo de cartera?", o: ["Vender toda la cartera una vez al año", "Volver periódicamente a los porcentajes objetivo de cada tipo de activo", "Un tipo de orden de compra urgente", "Aumentar siempre el riesgo con el tiempo"], a: 1, e: "Ajusta la cartera a su composición objetivo vendiendo lo que más ha subido y comprando lo rezagado." },
        { q: "¿Qué es el FOMO en inversión?", o: ["Un indicador técnico de tendencia", "El miedo a quedarse fuera, que lleva a comprar por moda o presión social", "Un tipo de fondo regulado", "Una comisión bancaria"], a: 1, e: "El FOMO empuja a tomar decisiones impulsivas basadas en el ruido, no en un análisis propio." },
        { q: "¿Qué riesgo tiene el apalancamiento si no se entiende bien?", o: ["Ninguno: siempre mejora los resultados", "Puede multiplicar tanto las ganancias como las pérdidas, incluso por encima del capital invertido", "Solo afecta a los impuestos", "Elimina la volatilidad de la cartera"], a: 1, e: "El apalancamiento amplifica los resultados en ambas direcciones." },
        { q: "¿Qué suele mostrar la investigación sobre el trading activo de particulares?", o: ["Que casi siempre baten al mercado con facilidad", "Que, de media y tras comisiones, suelen obtener peores resultados que el mercado", "Que no hay ninguna diferencia", "Que solo funciona con criptomonedas"], a: 1, e: "La evidencia empírica indica que operar con frecuencia suele perjudicar la rentabilidad media del particular." },
        { q: "¿Qué es el tamaño de posición?", o: ["El número de brokers que usas", "Cuánto de tu capital total pones en una sola idea de inversión", "El tamaño de la empresa en la que inviertes", "Un tipo de orden bursátil"], a: 1, e: "Una regla habitual es no concentrar en una sola acción más de un 5-10 % de la cartera." },
        { q: "¿Qué caracteriza al value investing?", o: ["Comprar solo criptoactivos", "Buscar empresas que cotizan por debajo de su valor estimado según el análisis fundamental", "Vender siempre en menos de un día", "Ignorar por completo los fundamentales"], a: 1, e: "Busca empresas que el mercado infravalora respecto a su valor estimado." },
        { q: "¿Qué prioriza la inversión por dividendos?", o: ["Empresas con dividendos estables o crecientes para obtener ingresos recurrentes", "Solo empresas sin beneficios", "Exclusivamente materias primas", "Criptoactivos muy volátiles"], a: 0, e: "Busca ingresos recurrentes a través de dividendos sostenibles." },
        { q: "¿Por qué ignorar las comisiones es un error caro a largo plazo?", o: ["Las comisiones nunca afectan al resultado final", "Un 1-2 % anual de más puede suponer decenas de miles de euros menos en 20 o 30 años por el efecto compuesto", "Las comisiones solo existen en las materias primas", "Solo importan si inviertes menos de 100 €"], a: 1, e: "Las pequeñas diferencias de coste se amplifican enormemente con el tiempo." }
      ]
    },

    /* ---------------- NIVEL 7 ---------------- */
    {
      title: "Macroeconomía, ciclos y psicología",
      subtitle: "Por qué se mueven los mercados y cómo evitar que tus emociones decidan por ti.",
      minutes: 15,
      essentials: [
        "Los tipos de interés, la inflación y el crecimiento económico mueven los mercados.",
        "Los mercados atraviesan ciclos: a las subidas les siguen caídas, y viceversa.",
        "Conocer tus sesgos psicológicos es tan importante como conocer los productos."
      ],
      blocks: [
        { t: "p", h: "Los bancos centrales y los tipos de interés", html: "El Banco Central Europeo o la Reserva Federal de EE. UU. suben los tipos de interés para frenar la inflación y los bajan para estimular la economía. Unos tipos más altos encarecen el crédito, suelen hacer bajar el precio de los bonos ya emitidos y pueden enfriar las valoraciones de las empresas de crecimiento." },
        { t: "cards", h: "Tres indicadores que conviene seguir", items: [
          { icon: "percent", h: "Inflación", p: "Si sube mucho, los bancos centrales suben los tipos. Erosiona el valor del efectivo y de la renta fija a tipo fijo." },
          { icon: "factory", h: "Crecimiento (PIB)", p: "Una economía que crece impulsa los beneficios empresariales; una recesión los reduce." },
          { icon: "currency", h: "Divisas", p: "Si inviertes en otra moneda, su evolución frente al euro suma o resta a tu rentabilidad." }
        ] },
        { t: "chart", id: "cycle", caption: "Las fases del ciclo económico. Cada fase suele favorecer a sectores distintos, pero nadie puede predecir con precisión cuándo cambia." },
        { t: "p", h: "Los ciclos de mercado", html: "Los mercados alternan periodos alcistas y bajistas. Se habla de <b>corrección</b> cuando un índice cae más de un 10 % desde su máximo y de <b>mercado bajista</b> cuando la caída supera el 20 %. Históricamente, los mercados diversificados se han recuperado de todas sus caídas, aunque a veces han tardado años." },
        { t: "chart", id: "emotion", caption: "El ciclo emocional del inversor: la euforia suele coincidir con el máximo riesgo y el pánico, con la mayor oportunidad. Reconocer en qué fase están tus emociones te protege de comprar caro y vender barato." },
        { t: "list", h: "Sesgos que te harán perder dinero", items: [
          "<b>Aversión a las pérdidas:</b> perder 100 € duele más de lo que alegra ganarlos, y eso empuja a vender en pleno pánico.",
          "<b>Exceso de confianza:</b> tras unos cuantos aciertos, creer que se puede predecir el mercado.",
          "<b>Efecto rebaño:</b> comprar porque todo el mundo está comprando.",
          "<b>Anclaje:</b> aferrarse al precio al que compraste, como si el mercado lo recordara.",
          "<b>Sesgo de lo reciente:</b> pensar que lo ocurrido en los últimos meses seguirá ocurriendo."
        ] },
        { t: "balance", h: "¿Conviene seguir la actualidad económica?", pros: [
          "Entiendes por qué se mueven los mercados y las caídas no te pillan por sorpresa.",
          "Te ayuda a detectar riesgos en tu cartera (divisa, tipos de interés, sectores)."
        ], cons: [
          "El exceso de noticias invita a operar más de la cuenta.",
          "Los titulares buscan atención: amplifican tanto el miedo como la euforia."
        ] },
        { t: "callout", html: "Para el inversor a largo plazo, la mejor defensa contra las emociones es un <b>plan escrito</b>: qué compras, en qué proporción, cada cuánto aportas y cuándo rebalanceas. Decide en frío y ejecuta en caliente." },
        { t: "deep", h: "Fiscalidad y planificación avanzada", blocks: [
          { t: "list", items: [
            "<b>Compensación de pérdidas:</b> en muchos países las minusvalías pueden restarse de las plusvalías del mismo año o de los siguientes (en España, hasta cuatro años).",
            "<b>Regla de los dos meses:</b> en España, si vendes con pérdidas valores cotizados y recompras valores homogéneos en los dos meses anteriores o posteriores, no puedes aplicar esa pérdida hasta que vendas los recomprados.",
            "<b>Doble imposición de dividendos:</b> los dividendos extranjeros pueden tributar en origen y en destino; a menudo parte se recupera en la declaración.",
            "<b>Vehículos con ventajas fiscales:</b> planes de pensiones, el PEA en Francia, la ISA en el Reino Unido… cada país tiene los suyos.",
            "Las normas fiscales cambian: consulta siempre la agencia tributaria de tu país o a un asesor fiscal."
          ] }
        ] }
      ],
      quiz: [
        { q: "¿Qué suelen hacer los bancos centrales cuando la inflación es muy alta?", o: ["Bajar los tipos de interés", "Subir los tipos de interés", "Comprar acciones de todas las empresas", "Cerrar la bolsa"], a: 1, e: "Subir los tipos encarece el crédito y enfría la demanda, lo que ayuda a frenar la inflación." },
        { q: "¿Qué efecto suele tener una subida de tipos sobre los bonos ya emitidos?", o: ["Su precio suele subir", "Su precio suele bajar", "No les afecta", "Se convierten en acciones"], a: 1, e: "Los bonos nuevos pagan más, así que los antiguos, con un interés menor, pierden atractivo y bajan de precio." },
        { q: "¿Qué es una corrección de mercado?", o: ["Una caída de más del 10 % desde el máximo", "Un error del broker", "Una subida del 50 %", "Un cambio en la ley"], a: 0, e: "Es una caída de más del 10 %; si supera el 20 %, se habla de mercado bajista." },
        { q: "¿A partir de qué caída desde el máximo se suele hablar de mercado bajista?", o: ["5 %", "10 %", "20 %", "60 %"], a: 2, e: "El umbral habitual es una caída superior al 20 % desde el máximo." },
        { q: "¿Qué es la aversión a las pérdidas?", o: ["No invertir nunca", "Que perder una cantidad duela más de lo que alegra ganar esa misma cantidad", "Un tipo de seguro", "Un indicador técnico"], a: 1, e: "Este sesgo empuja a vender en pánico o a no vender nunca las inversiones perdedoras." },
        { q: "En el ciclo emocional del inversor, ¿con qué fase suele coincidir el máximo riesgo?", o: ["Pánico", "Desánimo", "Euforia", "Esperanza"], a: 2, e: "Cuando todo el mundo está eufórico, los precios suelen estar más altos y el riesgo es mayor." },
        { q: "¿Cómo afecta la divisa a una inversión en otra moneda?", o: ["No afecta nunca", "Su evolución frente a tu moneda suma o resta a la rentabilidad", "Solo afecta a los bonos", "Siempre mejora la rentabilidad"], a: 1, e: "Si el dólar cae frente al euro, una inversión en dólares vale menos en euros, aunque no se haya movido." },
        { q: "¿Cuál es la mejor defensa frente a las decisiones emocionales?", o: ["Mirar la cotización cada hora", "Seguir a los influencers", "Un plan de inversión escrito y decidido en frío", "Operar con apalancamiento"], a: 2, e: "Un plan escrito te recuerda qué habías decidido cuando las emociones aprieten." }
      ]
    }
  ]
};
