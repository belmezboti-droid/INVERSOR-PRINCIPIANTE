/* El Cuaderno del Inversor — aplicación del navegador.
   Reglas de seguridad de este archivo:
   - Todo texto que venga de usuarios o del servidor se pinta con textContent.
   - Solo se usa innerHTML con contenido propio (archivos de idioma y gráficos),
     y el script de comprobación (npm run check) valida que ese contenido solo
     contiene etiquetas de formato inofensivas. */
(function () {
  'use strict';

  var LANGS = ['es', 'en', 'fr', 'de'];
  var LEVELS = 8;
  var PASS_RATIO = 0.7;
  var TOPICS = ['primeros-pasos', 'acciones', 'etfs-fondos', 'materias-primas', 'estrategia'];
  var TOPIC_ICONS = { 'primeros-pasos': 'spark', 'acciones': 'chart', 'etfs-fondos': 'pie', 'materias-primas': 'factory', 'estrategia': 'compass' };
  var LEVEL_ICONS = ['shield', 'book', 'chart', 'basket', 'arrows', 'search', 'compass', 'globe'];
  var STAGE_OF = [0, 0, 0, 1, 1, 1, 2, 2];
  var NS = 'http://www.w3.org/2000/svg';
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE_POINTER = window.matchMedia('(pointer: fine)').matches;

  var ICONS = {
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
    book: 'M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 5v16M8 7h7',
    chart: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6',
    basket: 'M5 9h14l-1.5 10h-11zM9 9l3-5 3 5',
    arrows: 'M7 7h11l-3-3M17 17H6l3 3',
    search: 'M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4',
    compass: 'M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5z',
    globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
    clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
    wallet: 'M4 7h15v12H4zM4 7l11-3v3M15 13h2',
    heart: 'M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z',
    pie: 'M12 3v9h9A9 9 0 1112 3zM15 3.5A9 9 0 0120.5 9H15z',
    lock: 'M6 11h12v9H6zM8 11V8a4 4 0 018 0v3',
    drop: 'M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z',
    percent: 'M19 5L5 19M7 9a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z',
    factory: 'M3 21V10l6 4V10l6 4V6h6v15z',
    currency: 'M12 21a9 9 0 100-18 9 9 0 000 18zM15 9a3 3 0 00-5 1c0 3 5 1 5 4a3 3 0 01-5 1M12 6v2M12 16v2',
    check: 'M5 12l5 5 9-10',
    spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
    message: 'M4 5h16v11H9l-5 4z',
    bot: 'M6 8h12v10H6zM12 4v4M9 13h.01M15 13h.01M3 12v3M21 12v3',
    news: 'M4 5h13v14H6a2 2 0 01-2-2zM17 9h3v8a2 2 0 01-2 2M8 9h5M8 13h5',
    settings: 'M12 15a3 3 0 100-6 3 3 0 000 6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2',
    user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0',
    menu: 'M4 7h16M4 12h16M4 17h16',
    x: 'M6 6l12 12M18 6L6 18',
    right: 'M5 12h14M13 6l6 6-6 6',
    left: 'M19 12H5M11 6l-6 6 6 6',
    chev: 'M9 6l6 6-6 6',
    trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
    trophy: 'M8 4h8v5a4 4 0 01-8 0zM8 6H4a3 3 0 003 4M16 6h4a3 3 0 01-3 4M12 13v4M8 21h8M10 17h4',
    calc: 'M6 3h12v18H6zM9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01',
    info: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 11v5M12 8h.01',
    alert: 'M12 3l10 18H2zM12 10v5M12 18h.01',
    external: 'M14 4h6v6M20 4l-9 9M18 14v5H5V6h5',
    eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z',
    eyeOff: 'M3 3l18 18M10.6 5.1A10 10 0 0122 12s-1.3 2.3-3.7 4.3M6.6 6.6C3.8 8.4 2 12 2 12s4 7 10 7c1.8 0 3.4-.5 4.8-1.3M9.9 9.9a3 3 0 004.2 4.2',
    reply: 'M10 8L4 13l6 5M4 13h11a5 5 0 015 5v1',
    send: 'M4 12l16-8-6 16-3-7z',
    logout: 'M15 4h4v16h-4M10 16l4-4-4-4M14 12H3',
    refresh: 'M20 11a8 8 0 10-2.3 5.7M20 4v7h-7',
    target: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 12h.01',
    play: 'M8 5l11 7-11 7z'
  };

  /* ------------------------------------------------------------ */
  /* Utilidades                                                    */
  /* ------------------------------------------------------------ */
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* almacenamiento no disponible */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* nada */ } }
  };
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, props) {
    var e = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') e.className = v;
        else if (k === 'text') e.textContent = v;
        else if (k === 'html') e.innerHTML = v; // solo contenido propio
        else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) append(e, arguments[i]);
    return e;
  }
  function append(parent, kid) {
    if (kid === null || kid === undefined || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { append(parent, k); }); return; }
    parent.appendChild(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  function icon(name, cls) {
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('class', 'ico' + (cls ? ' ' + cls : ''));
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', ICONS[name] || ICONS.info);
    s.appendChild(p);
    return s;
  }

  /* ------------------------------------------------------------ */
  /* Idioma                                                        */
  /* ------------------------------------------------------------ */
  function detectLang() {
    var saved = store.get('ci.lang', null) || store.get('cuadernoInversorLang', null);
    if (LANGS.indexOf(saved) >= 0) return saved;
    var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) >= 0 ? nav : 'es';
  }
  function LOC(lang) { return window.LOCALES[lang || state.lang] || window.LOCALES.es; }
  function lookup(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k] !== undefined ? o[k] : undefined; }, obj);
  }
  function t(path, vars) {
    var s = lookup(LOC(), path);
    if (s === undefined) s = lookup(LOC('es'), path);
    if (s === undefined) return path;
    if (typeof s === 'string' && vars) {
      s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    }
    return s;
  }
  function locale() { return LOC().meta.locale; }
  function money(n) {
    return new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
  }
  function dateTime(ts) {
    return new Intl.DateTimeFormat(locale(), { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(ts));
  }
  function relTime(ts) {
    var diff = (ts - Date.now()) / 1000, rtf = new Intl.RelativeTimeFormat(locale(), { numeric: 'auto' });
    var units = [['day', 86400], ['hour', 3600], ['minute', 60]];
    for (var i = 0; i < units.length; i++) {
      if (Math.abs(diff) >= units[i][1] || units[i][0] === 'minute') return rtf.format(Math.round(diff / units[i][1]), units[i][0]);
    }
    return '';
  }
  function errorText(code) {
    var s = lookup(LOC(), 'errors.' + code);
    return s || t('errors.SERVER_ERROR');
  }

  /* ------------------------------------------------------------ */
  /* Estado y progreso                                             */
  /* ------------------------------------------------------------ */
  var state = {
    lang: detectLang(),
    theme: store.get('ci.theme', 'auto'),
    progress: null,
    user: null,
    apiOnline: null,
    forumTopic: TOPICS[0],
    aiHistory: [],
    aiPrefill: '',
    firstRender: true
  };

  function sanitizeProgress(p) {
    p = p || {};
    var passed = Array.isArray(p.passed) ? p.passed.filter(function (n) { return Number.isInteger(n) && n >= 0 && n < LEVELS; }) : [];
    passed = passed.filter(function (n, i) { return passed.indexOf(n) === i; }).sort(function (a, b) { return a - b; });
    var scores = {};
    if (p.scores && typeof p.scores === 'object') {
      Object.keys(p.scores).forEach(function (k) {
        var lvl = Number(k), v = Number(p.scores[k]);
        if (Number.isInteger(lvl) && lvl >= 0 && lvl < LEVELS && isFinite(v) && v >= 0 && v <= 100) scores[lvl] = Math.round(v);
      });
    }
    return { passed: passed, scores: scores };
  }
  function loadProgress() {
    var p = store.get('ci.progress', null);
    if (!p) {
      var old = store.get('cuadernoInversorProgress_v1', null); // versión anterior
      if (old && old.passed) {
        p = { passed: Object.keys(old.passed).filter(function (k) { return old.passed[k]; }).map(Number), scores: {} };
      }
    }
    return sanitizeProgress(p);
  }
  state.progress = loadProgress();

  function isDone(i) { return state.progress.passed.indexOf(i) >= 0; }
  function isUnlocked(i) { return i === 0 || isDone(i - 1); }
  function doneCount() { return state.progress.passed.length; }
  function nextLevel() {
    for (var i = 0; i < LEVELS; i++) if (isUnlocked(i) && !isDone(i)) return i;
    return null;
  }
  var progressTimer = null;
  function saveProgress() {
    store.set('ci.progress', state.progress);
    if (state.user) {
      clearTimeout(progressTimer);
      progressTimer = setTimeout(function () {
        api('/me/progress', { method: 'PUT', body: state.progress }).catch(function () { /* se reintenta en el próximo guardado */ });
      }, 400);
    }
  }
  function mergeProgress(remote) {
    remote = sanitizeProgress(remote);
    var local = state.progress, passed = local.passed.slice(), scores = Object.assign({}, local.scores);
    remote.passed.forEach(function (n) { if (passed.indexOf(n) < 0) passed.push(n); });
    Object.keys(remote.scores).forEach(function (k) { scores[k] = Math.max(scores[k] || 0, remote.scores[k]); });
    state.progress = sanitizeProgress({ passed: passed, scores: scores });
    saveProgress();
  }

  /* ------------------------------------------------------------ */
  /* API                                                           */
  /* ------------------------------------------------------------ */
  function ApiError(code) { this.code = code; this.message = code; }
  function api(path, opts) {
    opts = opts || {};
    var headers = { 'Accept': 'application/json', 'X-Requested-With': 'fetch' };
    if (opts.body !== undefined) headers['Content-Type'] = 'application/json';
    return fetch('/api' + path, {
      method: opts.method || 'GET',
      credentials: 'same-origin',
      headers: headers,
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined
    }).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (data) {
        if (!res.ok) throw new ApiError((data && data.error) || (res.status === 404 ? 'NETWORK' : 'SERVER_ERROR'));
        if (data === null) throw new ApiError('NETWORK');
        state.apiOnline = true;
        return data;
      });
    }, function () {
      state.apiOnline = false;
      throw new ApiError('NETWORK');
    });
  }

  /* ------------------------------------------------------------ */
  /* Tema                                                          */
  /* ------------------------------------------------------------ */
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  function applyTheme() {
    var resolved = state.theme === 'auto' ? (darkQuery.matches ? 'dark' : 'light') : state.theme;
    document.documentElement.setAttribute('data-theme', resolved);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', resolved === 'dark' ? '#0a1222' : '#14213d');
  }
  if (darkQuery.addEventListener) darkQuery.addEventListener('change', function () { if (state.theme === 'auto') applyTheme(); });

  /* ------------------------------------------------------------ */
  /* Avisos (toasts), modales y confirmaciones                     */
  /* ------------------------------------------------------------ */
  function toast(msg, type) {
    var box = $('#toasts');
    var ic = type === 'err' ? 'alert' : type === 'ok' ? 'check' : 'info';
    var node = el('div', { class: 'toast ' + (type || 'info') }, icon(ic), el('span', { text: msg }));
    box.appendChild(node);
    setTimeout(function () { node.remove(); }, 4200);
  }

  var modalStack = [];
  function openModal(content, labelId, onClose) {
    var trigger = document.activeElement;
    var closeBtn = el('button', { class: 'btn-icon close', type: 'button', 'aria-label': t('ui.common.close') }, icon('x'));
    var box = el('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': labelId }, closeBtn, content);
    var back = el('div', { class: 'modal-backdrop' }, box);
    function close() {
      back.remove();
      document.removeEventListener('keydown', onKey);
      modalStack.pop();
      if (onClose) onClose();
      if (trigger && trigger.focus) trigger.focus();
    }
    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'Tab') {
        var f = $$('button, [href], input, select, textarea', box).filter(function (x) { return !x.disabled && x.offsetParent !== null; });
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    }
    closeBtn.addEventListener('click', close);
    back.addEventListener('mousedown', function (e) { if (e.target === back) close(); });
    document.addEventListener('keydown', onKey);
    $('#modalRoot').appendChild(back);
    modalStack.push(close);
    var first = $('input, select, textarea', box) || closeBtn;
    setTimeout(function () { first.focus(); }, 30);
    return close;
  }
  function closeAllModals() { while (modalStack.length) modalStack[modalStack.length - 1](); }

  function confirmDialog(message, confirmLabel) {
    return new Promise(function (resolve) {
      var done = false, close;
      var ok = el('button', { class: 'btn btn-primary', type: 'button', onclick: function () { done = true; resolve(true); close(); } }, confirmLabel);
      var cancel = el('button', { class: 'btn btn-ghost', type: 'button', onclick: function () { close(); } }, t('ui.common.cancel'));
      var content = el('div', null,
        el('h2', { id: 'confirmTitle', text: t('ui.common.confirm') }),
        el('p', { class: 'sub', text: message }),
        el('div', { class: 'quiz-actions' }, ok, cancel));
      close = openModal(content, 'confirmTitle', function () { if (!done) { done = true; resolve(false); } });
    });
  }

  /* ------------------------------------------------------------ */
  /* Enrutado                                                      */
  /* ------------------------------------------------------------ */
  function parseRoute() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    if (parts[0] === 'level' && /^\d+$/.test(parts[1]) && Number(parts[1]) < LEVELS) return { name: 'level', id: Number(parts[1]) };
    if (['simulator', 'forum', 'ai', 'resources'].indexOf(parts[0]) >= 0) return { name: parts[0] };
    return { name: 'home' };
  }
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }

  /* ------------------------------------------------------------ */
  /* Cabecera, navegación y pie                                    */
  /* ------------------------------------------------------------ */
  function brandMark() {
    return el('span', { class: 'brand-mark', html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v12" stroke="#ff7a7e" stroke-width="1.6" stroke-linecap="round"/><rect x="4" y="8" width="4" height="6" rx=".8" fill="#ff7a7e"/><path d="M12 3v14" stroke="#3fcf95" stroke-width="1.6" stroke-linecap="round"/><rect x="10" y="5" width="4" height="8" rx=".8" fill="#3fcf95"/><path d="M18 2v11" stroke="#3fcf95" stroke-width="1.6" stroke-linecap="round"/><rect x="16" y="3" width="4" height="6" rx=".8" fill="#3fcf95"/><path d="M3 20h18" stroke="#f0a92e" stroke-width="1.8" stroke-linecap="round"/></svg>' });
  }
  function navItems() {
    return [
      { hash: '#/', key: 'learn', icon: 'book', match: ['home', 'level'] },
      { hash: '#/simulator', key: 'simulator', icon: 'calc', match: ['simulator'] },
      { hash: '#/forum', key: 'forum', icon: 'message', match: ['forum'] },
      { hash: '#/ai', key: 'ai', icon: 'bot', match: ['ai'] },
      { hash: '#/resources', key: 'resources', icon: 'news', match: ['resources'] }
    ];
  }
  function langSelect(id) {
    var sel = el('select', { class: 'lang-select', id: id, 'aria-label': t('ui.settings.language') });
    LANGS.forEach(function (l) {
      var o = el('option', { value: l, text: LOC(l).meta.short });
      o.setAttribute('title', LOC(l).meta.name);
      if (l === state.lang) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () { setLang(sel.value, true); });
    return sel;
  }
  function accountControl(extraClass) {
    if (state.user) {
      var initial = (state.user.username || '?').charAt(0).toUpperCase();
      return el('button', { class: 'user-chip ' + (extraClass || ''), type: 'button', onclick: openSettings, 'aria-label': t('ui.account.settings') },
        el('span', { class: 'avatar', text: initial }), el('span', { class: 'name', text: state.user.username }));
    }
    return el('button', { class: 'btn btn-primary btn-sm ' + (extraClass || ''), type: 'button', onclick: function () { openAuth('login'); } }, t('ui.account.login'));
  }
  function renderChrome() {
    var route = state.route || { name: 'home' };
    var top = $('#topbar');
    top.replaceChildren();
    var nav = el('nav', { class: 'nav', 'aria-label': t('ui.nav.label') });
    navItems().forEach(function (n) {
      nav.appendChild(el('a', { href: n.hash, 'aria-current': n.match.indexOf(route.name) >= 0 ? 'page' : null }, icon(n.icon), t('ui.nav.' + n.key)));
    });
    var menuBtn = el('button', { class: 'btn-icon menu-btn', type: 'button', 'aria-label': t('ui.nav.menu'), 'aria-expanded': 'false', 'aria-controls': 'mobileNav', onclick: toggleMobileNav }, icon('menu'));
    top.appendChild(el('div', { class: 'topbar-inner' },
      el('a', { class: 'brand', href: '#/' }, brandMark(), el('span', null, t('ui.brand'), el('small', { text: t('ui.brandTag') }))),
      nav,
      el('div', { class: 'top-actions' },
        langSelect('langTop'),
        el('button', { class: 'btn-icon hide-sm', type: 'button', 'aria-label': t('ui.account.settings'), onclick: openSettings }, icon('settings')),
        accountControl('hide-sm'),
        menuBtn)));

    var mob = $('#mobileNav');
    mob.replaceChildren();
    navItems().forEach(function (n) {
      mob.appendChild(el('a', { href: n.hash, 'aria-current': n.match.indexOf(route.name) >= 0 ? 'page' : null }, icon(n.icon), t('ui.nav.' + n.key)));
    });
    mob.appendChild(el('div', { class: 'mobile-extra' },
      accountControl(),
      el('button', { class: 'btn btn-ghost btn-sm', type: 'button', onclick: openSettings }, icon('settings'), t('ui.account.settings'))));

    $('#skipLink').textContent = t('ui.skip');
    renderFooter();
  }
  function toggleMobileNav(force) {
    var mob = $('#mobileNav'), btn = $('.menu-btn');
    var open = typeof force === 'boolean' ? force : mob.hidden;
    mob.hidden = !open;
    if (btn) {
      btn.setAttribute('aria-expanded', String(open));
      btn.replaceChildren(icon(open ? 'x' : 'menu'));
      btn.setAttribute('aria-label', open ? t('ui.nav.closeMenu') : t('ui.nav.menu'));
    }
    document.body.style.overflow = open ? 'hidden' : '';
  }
  function renderFooter() {
    var f = $('#footer');
    f.replaceChildren(el('div', { class: 'wrap grid' },
      el('div', { class: 'warn' }, icon('alert'), el('p', { text: t('ui.footer.disclaimer') })),
      el('div', null, el('p', { text: t('ui.footer.sources') }), el('p', { text: t('ui.footer.privacy') }))));
  }

  /* ------------------------------------------------------------ */
  /* Render principal                                              */
  /* ------------------------------------------------------------ */
  function render() {
    var route = parseRoute();
    state.route = route;
    killAnimations();
    closeAllModals();
    toggleMobileNav(false);
    renderChrome();
    var view = $('#view');
    view.classList.remove('view-enter');
    view.replaceChildren();
    var title;
    if (route.name === 'level') { renderLevel(view, route.id); title = LOC().levels[route.id].title; }
    else if (route.name === 'simulator') { renderSimulator(view); title = t('ui.nav.simulator'); }
    else if (route.name === 'forum') { renderForum(view); title = t('ui.nav.forum'); }
    else if (route.name === 'ai') { renderAI(view); title = t('ui.nav.ai'); }
    else if (route.name === 'resources') { renderResources(view); title = t('ui.nav.resources'); }
    else { renderHome(view); title = null; }
    document.title = title ? title + ' | ' + t('ui.brand') : t('ui.brand') + ' | ' + t('ui.brandTag');
    void view.offsetWidth;
    view.classList.add('view-enter');
    if (!state.firstRender) {
      window.scrollTo(0, 0);
      view.focus({ preventScroll: true });
    }
    state.firstRender = false;
    setupReadProgress(route.name === 'level');
    animateView(route);
  }

  /* ------------------------------------------------------------ */
  /* Portada                                                       */
  /* ------------------------------------------------------------ */
  function renderHome(view) {
    var next = nextLevel(), done = doneCount();
    var startLabel = done === 0 ? t('ui.hero.start') : next === null ? t('ui.hero.review') : t('ui.hero.continue', { n: next });
    var startHash = next === null ? '#/level/0' : '#/level/' + next;

    var left = el('div', null,
      el('h1', null, t('ui.hero.title'), el('span', { class: 'line2', text: t('ui.hero.titleLine2') })),
      el('p', { class: 'hero-lead', text: t('ui.hero.lead') }),
      el('div', { class: 'hero-actions' },
        el('a', { class: 'btn btn-amber', href: startHash }, icon('play'), startLabel),
        el('a', { class: 'btn btn-ghost', href: '#/simulator' }, icon('calc'), t('ui.hero.simulator'))),
      el('ul', { class: 'hero-facts' },
        fact(String(LEVELS), t('ui.hero.facts.levels')),
        fact(String(LOC().levels.reduce(function (a, l) { return a + l.quiz.length; }, 0)), t('ui.hero.facts.questions')),
        fact(String(LOC().levels.reduce(function (a, l) { return a + l.minutes; }, 0)), t('ui.hero.facts.minutes')),
        fact(String(LANGS.length), t('ui.hero.facts.languages'))));
    if (done > 0) {
      left.appendChild(el('div', { class: 'resume-card' }, icon('trophy'),
        el('p', null, next === null ? t('ui.hero.allDone') : [t('ui.hero.resume') + ' ', el('b', { text: t('ui.route.levelN', { n: next }) + ': ' + LOC().levels[next].title })])));
    }
    var art = el('div', { class: 'hero-art' },
      el('div', { html: window.Charts.hero() }),
      el('div', { class: 'art-caption' }, el('span', { text: t('ui.hero.artCaption') }), el('b', { text: t('ui.hero.artTag') })));
    view.appendChild(el('section', { class: 'hero' }, el('div', { class: 'wrap' }, left, art)));

    var steps = t('ui.how.steps');
    view.appendChild(el('section', null, el('div', { class: 'wrap' },
      sectionHead(t('ui.how.title'), t('ui.how.sub')),
      el('div', { class: 'steps-row' }, steps.map(function (s) {
        return el('div', { class: 'how-step' }, el('h3', { text: s.h }), el('p', { text: s.p }));
      })))));

    var route = el('div', { class: 'wrap' }, sectionHead(t('ui.route.title'), t('ui.route.sub')));
    route.appendChild(el('div', { class: 'route-summary' },
      icon('target'),
      el('strong', { text: t('ui.route.summary', { done: done, total: LEVELS }) }),
      el('div', { class: 'bar', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(LEVELS), 'aria-valuenow': String(done), 'aria-label': t('ui.route.summary', { done: done, total: LEVELS }) },
        el('span', { class: 'route-fill', 'data-w': String(Math.round(done / LEVELS * 100)) }))));
    LOC().stages.forEach(function (stage, s) {
      var cards = [];
      for (var i = 0; i < LEVELS; i++) if (STAGE_OF[i] === s) cards.push(levelCard(i, i === next));
      route.appendChild(el('div', { class: 'stage stage-' + s },
        el('div', { class: 'stage-info' }, el('span', { class: 'stage-badge', text: stage.name }), el('h3', { text: stage.title }), el('p', { text: stage.desc })),
        el('div', { class: 'level-grid' }, cards)));
    });
    view.appendChild(el('section', { id: 'route' }, route));

    var tools = ['simulator', 'forum', 'ai', 'resources'], toolIcons = { simulator: 'calc', forum: 'message', ai: 'bot', resources: 'news' };
    view.appendChild(el('section', null, el('div', { class: 'wrap' },
      sectionHead(t('ui.tools.title'), t('ui.tools.sub')),
      el('div', { class: 'tools-grid' }, tools.map(function (k) {
        return el('a', { class: 'tool-card', href: '#/' + k }, icon(toolIcons[k]), el('h3', { text: t('ui.tools.' + k + '.h') }), el('p', { text: t('ui.tools.' + k + '.p') }));
      })))));

    requestAnimationFrame(function () {
      $$('.route-fill').forEach(function (b) { b.style.width = b.getAttribute('data-w') + '%'; });
    });
  }
  function fact(num, label) { return el('li', null, el('strong', { text: num }), el('span', { text: label })); }
  function sectionHead(title, sub) {
    return el('div', { class: 'section-head' }, el('h2', { text: title }), sub ? el('p', { text: sub }) : null);
  }
  function levelCard(i, isNext) {
    var lv = LOC().levels[i], done = isDone(i), open = isUnlocked(i);
    var status = done ? el('span', { class: 'pill pill-done' }, icon('check'), t('ui.route.status.done'))
      : open ? el('span', { class: 'pill pill-open' }, t('ui.route.status.open'))
        : el('span', { class: 'pill pill-locked' }, icon('lock'), t('ui.route.status.locked'));
    var meta = [status, el('span', { text: t('ui.route.min', { n: lv.minutes }) })];
    if (done && state.progress.scores[i] !== undefined) meta.push(el('span', { text: t('ui.route.score', { n: state.progress.scores[i] }) }));
    var cls = 'level-card' + (done ? ' is-done' : '') + (!open ? ' is-locked' : '') + (isNext ? ' is-next' : '');
    return el('a', { class: cls, href: '#/level/' + i, 'aria-label': t('ui.route.levelN', { n: i }) + ': ' + lv.title + '. ' + status.textContent },
      el('span', { class: 'lc-icon' }, icon(open ? LEVEL_ICONS[i] : 'lock')),
      el('span', null,
        el('span', { class: 'lc-num', text: t('ui.route.levelN', { n: i }) }),
        el('h4', { text: lv.title }),
        el('span', { class: 'lc-meta' }, meta)));
  }

  /* ------------------------------------------------------------ */
  /* Nivel                                                         */
  /* ------------------------------------------------------------ */
  function renderLevel(view, i) {
    var lv = LOC().levels[i];
    if (!isUnlocked(i)) {
      var prev = LOC().levels[i - 1];
      view.appendChild(el('section', { class: 'locked-view' },
        el('div', { class: 'lock-badge' }, icon('lock')),
        el('h1', { text: t('ui.level.locked.title') }),
        el('p', { text: t('ui.level.locked.text', { title: lv.title, prev: i - 1 }) }),
        el('p', null, el('b', { text: t('ui.route.levelN', { n: i - 1 }) + ': ' + prev.title })),
        el('div', { class: 'actions' },
          el('a', { class: 'btn btn-primary', href: '#/level/' + (i - 1) }, t('ui.level.locked.go', { prev: i - 1 })),
          el('a', { class: 'btn btn-ghost', href: '#/' }, t('ui.level.locked.back')))));
      return;
    }
    var stage = LOC().stages[STAGE_OF[i]];
    var pills = [el('span', { class: 'pill pill-open', text: stage.name }), el('span', null, icon('clock'), ' ' + t('ui.level.minutes', { n: lv.minutes }))];
    if (isDone(i)) pills.push(el('span', { class: 'pill pill-done' }, icon('check'), t('ui.route.status.done')));

    view.appendChild(el('section', { class: 'level-hero' }, el('div', { class: 'wrap' },
      el('div', { class: 'crumbs' }, el('a', { class: 'link-btn', href: '#/' }, icon('left'), t('ui.level.back'))),
      el('div', { class: 'level-title' },
        el('div', { class: 'big-icon' }, icon(LEVEL_ICONS[i])),
        el('div', null,
          el('div', { class: 'level-kicker' }, el('b', { text: t('ui.route.levelN', { n: i }) }), pills),
          el('h1', { text: lv.title }),
          el('p', { class: 'lede', text: lv.subtitle }))),
      el('div', { class: 'level-tools' },
        el('button', { class: 'btn btn-ghost btn-sm', type: 'button', onclick: function () { scrollToId('quiz'); } }, icon('trophy'), t('ui.level.jumpQuiz')),
        el('button', { class: 'btn btn-quiet btn-sm', type: 'button', onclick: function () { state.aiPrefill = t('ui.level.aiPrefill', { title: lv.title }); go('#/ai'); } }, icon('bot'), t('ui.level.askAi'))))));

    var body = el('article', { class: 'level-body prose' });
    body.appendChild(el('div', { class: 'essentials' },
      el('h2', null, icon('spark'), t('ui.level.essentials')),
      el('ol', null, lv.essentials.map(function (e) { return el('li', { text: e }); }))));
    var toc = [];
    lv.blocks.forEach(function (b, bi) { append(body, renderBlock(b, 'b' + i + '-' + bi, toc)); });
    body.appendChild(renderQuiz(i));
    body.appendChild(levelPager(i));

    var tocNav = el('nav', { class: 'toc', 'aria-label': t('ui.level.toc') }, el('h2', { text: t('ui.level.toc') }),
      el('ol', null, toc.concat([{ id: 'quiz', h: t('ui.level.tocQuiz') }]).map(function (item) {
        return el('li', null, el('a', { href: '#/level/' + i, 'data-target': item.id, onclick: function (e) { e.preventDefault(); scrollToId(item.id); } }, item.h));
      })));
    view.appendChild(el('section', { class: 'level-body-wrap' }, body, tocNav));
    watchToc();
  }
  function scrollToId(id) {
    var target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }
  function heading(b, id, toc) {
    if (!b.h) return null;
    toc.push({ id: id, h: b.h });
    return el('h2', { id: id, text: b.h });
  }
  function renderBlock(b, id, toc) {
    switch (b.t) {
      case 'p':
        return [heading(b, id, toc), [].concat(b.html).map(function (h) { return el('p', { html: h }); })];
      case 'list':
        return [heading(b, id, toc), el('ul', null, b.items.map(function (h) { return el('li', { html: h }); }))];
      case 'cards':
        return [heading(b, id, toc), el('div', { class: 'card-row' }, b.items.map(function (c) {
          return el('div', { class: 'info-card' }, icon(c.icon), el('h3', { text: c.h }), el('p', { html: c.p }));
        }))];
      case 'balance':
        return [heading(b, id, toc), b.intro ? el('p', { class: 'balance-intro', html: b.intro }) : null,
          el('div', { class: 'balance' + (b.neutral ? ' neutral' : '') },
            el('div', { class: 'side pro' }, el('h4', null, icon(b.neutral ? 'chart' : 'check'), b.prosLabel || t('ui.level.pros')),
              el('ul', null, b.pros.map(function (x) { return el('li', { html: x }); }))),
            el('div', { class: 'side con' }, el('h4', null, icon(b.neutral ? 'search' : 'alert'), b.consLabel || t('ui.level.cons')),
              el('ul', null, b.cons.map(function (x) { return el('li', { html: x }); }))))];
      case 'chart':
        return chartFigure(b);
      case 'callout':
        return el('div', { class: 'callout' }, icon('info'), el('p', { html: b.html }));
      case 'quote':
        return el('blockquote', { class: 'quote', text: b.text });
      case 'steps':
        return [heading(b, id, toc), el('ol', { class: 'steps' }, b.items.map(function (h) { return el('li', { html: h }); }))];
      case 'table':
        return [heading(b, id, toc), el('div', { class: 'table-wrap', tabindex: '0', role: 'region', 'aria-label': b.h || b.head.join(', ') },
          el('table', { class: 'data' },
            el('thead', null, el('tr', null, b.head.map(function (h) { return el('th', { scope: 'col', text: h }); }))),
            el('tbody', null, b.rows.map(function (r) { return el('tr', null, r.map(function (c) { return el('td', { text: c }); })); }))))];
      case 'glossary':
        return el('div', { class: 'glossary' }, b.items.map(function (term) {
          var btn = el('button', { class: 'term', type: 'button', 'aria-pressed': 'false' },
            el('span', { class: 'term-inner' },
              el('span', { class: 'term-face term-front' }, el('strong', { text: term.t }), el('span', null, icon('right'), t('ui.level.termHint'))),
              el('span', { class: 'term-face term-back' }, el('strong', { text: term.t }), el('span', { text: term.d }))));
          btn.addEventListener('click', function () {
            var on = btn.classList.toggle('flipped');
            btn.setAttribute('aria-pressed', String(on));
          });
          return btn;
        }));
      case 'deep':
        toc.push({ id: id, h: b.h });
        var inner = el('div', { class: 'deep-body' });
        b.blocks.forEach(function (sub, si) { append(inner, renderBlock(sub, id + '-' + si, [])); });
        return el('details', { class: 'deep', id: id },
          el('summary', null, icon('spark'), el('span', null, el('b', { text: b.h }), el('small', { text: t('ui.level.deepHint') })), icon('chev', 'chev')),
          inner);
      default:
        return null;
    }
  }
  function chartFigure(b) {
    var fn = window.Charts[b.id];
    if (!fn) return null;
    var res = fn(LOC().charts[b.id], money);
    var fig = el('figure', { class: 'figure' }, el('div', { class: 'figure-frame', html: res.svg }));
    if (res.legend) fig.appendChild(el('div', { class: 'legend' }, res.legend.map(function (l) { return el('span', null, el('i', { class: l.cls }), l.label); })));
    if (b.caption) fig.appendChild(el('figcaption', { html: b.caption }));
    return fig;
  }
  function levelPager(i) {
    var pager = el('nav', { class: 'level-pager', 'aria-label': t('ui.level.pagerLabel') });
    if (i > 0) pager.appendChild(el('a', { class: 'btn btn-ghost', href: '#/level/' + (i - 1) }, icon('left'), t('ui.level.prev')));
    else pager.appendChild(el('a', { class: 'btn btn-ghost', href: '#/' }, icon('left'), t('ui.level.back')));
    if (i < LEVELS - 1) {
      var open = isUnlocked(i + 1);
      pager.appendChild(el('a', { class: 'btn ' + (open ? 'btn-primary' : 'btn-ghost'), href: '#/level/' + (i + 1) },
        open ? null : icon('lock'), open ? t('ui.level.next') : t('ui.level.nextLocked'), open ? icon('right') : null));
    }
    return pager;
  }

  /* ------------------------------------------------------------ */
  /* Test                                                          */
  /* ------------------------------------------------------------ */
  function renderQuiz(i) {
    var qs = LOC().levels[i].quiz, total = qs.length, min = Math.ceil(total * PASS_RATIO);
    var wrap = el('section', { class: 'quiz', id: 'quiz', 'aria-labelledby': 'quizTitle' });
    var answeredText = el('span', { text: t('ui.quiz.answered', { a: 0, q: total }) });
    var meterBar = el('span');
    wrap.appendChild(el('div', { class: 'quiz-head' },
      el('div', null,
        el('h2', { id: 'quizTitle' }, icon('trophy'), t('ui.quiz.title', { n: i })),
        el('p', { text: i === LEVELS - 1 ? t('ui.quiz.hintLast', { q: total, min: min }) : t('ui.quiz.hint', { q: total, min: min }) })),
      el('div', { class: 'quiz-meter', 'aria-live': 'polite' }, answeredText, el('div', { class: 'bar' }, meterBar))));
    if (isDone(i) && state.progress.scores[i] !== undefined) {
      wrap.appendChild(el('div', { class: 'callout' }, icon('check'), el('p', { text: t('ui.quiz.previous', { p: state.progress.scores[i] }) })));
    }
    var form = el('form', { novalidate: true });
    var cards = qs.map(function (q, qi) {
      var name = 'q' + i + '-' + qi;
      var fs = el('fieldset', { class: 'q-card' },
        el('legend', null, el('span', { class: 'qn', text: (qi + 1) + '.' }), el('span', { text: q.q })),
        el('div', { class: 'opts' }, q.o.map(function (opt, oi) {
          return el('label', { class: 'opt' }, el('input', { type: 'radio', name: name, value: String(oi) }), el('span', { text: opt }));
        })));
      fs.addEventListener('change', function () { fs.classList.remove('missing'); updateMeter(); });
      return fs;
    });
    append(form, cards);
    var submit = el('button', { class: 'btn btn-primary', type: 'submit' }, icon('check'), t('ui.quiz.submit'));
    form.appendChild(el('div', { class: 'quiz-actions' }, submit));
    var result = el('div', { 'aria-live': 'polite' });
    wrap.appendChild(form);
    wrap.appendChild(result);

    function answers() {
      return cards.map(function (fs) { var c = $('input:checked', fs); return c ? Number(c.value) : null; });
    }
    function updateMeter() {
      var a = answers().filter(function (x) { return x !== null; }).length;
      answeredText.textContent = t('ui.quiz.answered', { a: a, q: total });
      meterBar.style.width = Math.round(a / total * 100) + '%';
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ans = answers(), missing = [];
      ans.forEach(function (a, qi) { if (a === null) missing.push(qi); });
      if (missing.length) {
        missing.forEach(function (qi) { cards[qi].classList.add('missing'); });
        toast(t('ui.quiz.missing', { n: missing.length }), 'info');
        cards[missing[0]].scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'center' });
        var firstInput = $('input', cards[missing[0]]);
        if (firstInput) firstInput.focus({ preventScroll: true });
        return;
      }
      var correct = 0;
      qs.forEach(function (q, qi) {
        var fs = cards[qi], ok = ans[qi] === q.a;
        if (ok) correct++;
        fs.classList.add('graded', ok ? 'is-correct' : 'is-wrong');
        $$('label.opt', fs).forEach(function (lab, oi) {
          $('input', lab).disabled = true;
          if (oi === q.a) lab.classList.add('right');
          else if (oi === ans[qi]) lab.classList.add('wrong');
        });
        fs.appendChild(el('div', { class: 'q-feedback' }, icon(ok ? 'check' : 'x'),
          el('span', null, el('b', { text: (ok ? t('ui.quiz.correct') : t('ui.quiz.wrong')) + ' ' }), q.e)));
      });
      submit.remove();
      var pct = Math.round(correct / total * 100), passed = correct >= min;
      if (passed) {
        var wasDone = isDone(i);
        if (!wasDone) state.progress.passed.push(i);
        state.progress.scores[i] = Math.max(state.progress.scores[i] || 0, pct);
        state.progress = sanitizeProgress(state.progress);
        saveProgress();
        var oldPager = $('.level-pager');
        if (oldPager) oldPager.replaceWith(levelPager(i)); // el siguiente nivel aparece desbloqueado al momento
        toast(i < LEVELS - 1 ? t('ui.quiz.unlocked', { n: i + 1 }) : t('ui.quiz.finished'), 'ok');
      }
      showResult(result, i, correct, total, pct, passed, min);
    });
    return wrap;
  }
  function scoreRing(pct) {
    var r = 42, c = 2 * Math.PI * r;
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 104 104'); s.setAttribute('class', 'score-ring'); s.setAttribute('aria-hidden', 'true');
    var track = document.createElementNS(NS, 'circle');
    track.setAttribute('cx', '52'); track.setAttribute('cy', '52'); track.setAttribute('r', String(r)); track.setAttribute('class', 'track');
    var val = document.createElementNS(NS, 'circle');
    val.setAttribute('cx', '52'); val.setAttribute('cy', '52'); val.setAttribute('r', String(r)); val.setAttribute('class', 'val');
    val.setAttribute('stroke-dasharray', c.toFixed(1)); val.setAttribute('stroke-dashoffset', c.toFixed(1));
    var txt = document.createElementNS(NS, 'text');
    txt.setAttribute('x', '52'); txt.setAttribute('y', '60'); txt.setAttribute('text-anchor', 'middle'); txt.textContent = new Intl.NumberFormat(locale(), { style: 'percent', maximumFractionDigits: 0 }).format(pct / 100);
    s.appendChild(track); s.appendChild(val); s.appendChild(txt);
    requestAnimationFrame(function () { requestAnimationFrame(function () { val.setAttribute('stroke-dashoffset', (c * (1 - pct / 100)).toFixed(1)); }); });
    return s;
  }
  function showResult(box, i, correct, total, pct, passed, min) {
    var actions = el('div', { class: 'quiz-actions' });
    if (passed) {
      if (i < LEVELS - 1) actions.appendChild(el('a', { class: 'btn btn-primary', href: '#/level/' + (i + 1) }, t('ui.quiz.goNext', { n: i + 1 }), icon('right')));
      actions.appendChild(el('a', { class: 'btn btn-ghost', href: '#/' }, t('ui.quiz.backRoute')));
    } else {
      actions.appendChild(el('button', { class: 'btn btn-primary', type: 'button', onclick: function () { render(); setTimeout(function () { scrollToId('quiz'); }, 60); } }, icon('refresh'), t('ui.quiz.retry')));
    }
    var node = el('div', { class: 'quiz-result ' + (passed ? 'pass' : 'fail') }, scoreRing(pct),
      el('div', null,
        el('h3', { text: passed ? t('ui.quiz.passTitle') : t('ui.quiz.failTitle') }),
        el('p', { text: passed ? t('ui.quiz.passText', { c: correct, q: total, p: pct }) + ' ' + (i < LEVELS - 1 ? t('ui.quiz.unlocked', { n: i + 1 }) + '.' : t('ui.quiz.finished'))
          : t('ui.quiz.failText', { c: correct, q: total, p: pct, min: min }) }),
        actions));
    box.replaceChildren(node);
    node.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'center' });
    if (passed) confetti(node);
  }
  function confetti(host) {
    if (!window.gsap || REDUCED) return;
    var colors = ['#17a673', '#f0a92e', '#2c4bd6', '#e5484d'];
    for (var k = 0; k < 26; k++) {
      var dot = el('span', { class: 'confetti' });
      dot.style.background = colors[k % colors.length];
      dot.style.left = '60px'; dot.style.top = '60px';
      host.appendChild(dot);
      window.gsap.to(dot, {
        x: (Math.random() - 0.2) * 520, y: (Math.random() - 0.7) * 180, rotation: Math.random() * 540,
        opacity: 0, duration: 1.3 + Math.random() * 0.6, ease: 'power2.out',
        onComplete: (function (d) { return function () { d.remove(); }; })(dot)
      });
    }
  }

  /* ------------------------------------------------------------ */
  /* Simulador                                                     */
  /* ------------------------------------------------------------ */
  var sim = store.get('ci.sim', { initial: 1000, monthly: 100, rate: 6, years: 20, real: false });
  function renderSimulator(view) {
    var outputs = {};
    function slider(key, min, max, step, fmt) {
      var id = 'sim-' + key;
      var out = el('output', { for: id });
      var input = el('input', { type: 'range', id: id, min: String(min), max: String(max), step: String(step), value: String(sim[key]) });
      input.addEventListener('input', function () { sim[key] = Number(input.value); update(); });
      outputs[key] = { out: out, fmt: fmt, input: input };
      return el('div', { class: 'slider-field' }, el('div', { class: 'row' }, el('label', { for: id, text: t('ui.sim.' + key) }), out), input);
    }
    var presetsRow = el('div', { class: 'presets', role: 'group', 'aria-label': t('ui.sim.presetsLabel') },
      t('ui.sim.presets').map(function (p) {
        return el('button', { class: 'chip', type: 'button', onclick: function () { sim.rate = p.rate; outputs.rate.input.value = String(p.rate); update(); } }, p.label);
      }));
    var realInput = el('input', { type: 'checkbox', id: 'sim-real' });
    realInput.checked = !!sim.real;
    realInput.addEventListener('change', function () { sim.real = realInput.checked; update(); });

    var kContrib = el('strong'), kInterest = el('strong'), kFinal = el('strong');
    var chartBox = el('div', { class: 'figure-frame' });
    var controls = el('div', { class: 'sim-controls' },
      slider('initial', 0, 100000, 500, money),
      slider('monthly', 0, 3000, 10, money),
      slider('rate', 0, 12, 0.5, function (v) { return new Intl.NumberFormat(locale(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(v) + ' %'; }),
      el('p', { class: 'field hint', text: t('ui.sim.presetsLabel') }),
      presetsRow,
      slider('years', 1, 45, 1, function (v) { return v === 1 ? t('ui.sim.yearVal') : t('ui.sim.yearsVal', { n: v }); }),
      el('label', { class: 'check', for: 'sim-real' }, realInput, el('span', { text: t('ui.sim.inflation') })));
    var output = el('div', { class: 'sim-output' },
      el('div', { class: 'kpis' },
        el('div', { class: 'kpi' }, el('span', { text: t('ui.sim.contributed') }), kContrib),
        el('div', { class: 'kpi' }, el('span', { text: t('ui.sim.interest') }), kInterest),
        el('div', { class: 'kpi total' }, el('span', { text: t('ui.sim.final') }), kFinal)),
      el('figure', { class: 'figure' }, chartBox,
        el('div', { class: 'legend' }, el('span', null, el('i', { class: 'l-cobalt' }), t('ui.sim.legendTotal')), el('span', null, el('i', { class: 'l-amber' }), t('ui.sim.legendContrib')))),
      el('p', { class: 'sim-note', text: t('ui.sim.note') }),
      el('p', { class: 'sim-note' }, icon('shield'), ' ' + t('ui.sim.privacy')));

    view.appendChild(el('section', null, el('div', { class: 'wrap' },
      sectionHead(t('ui.sim.title'), t('ui.sim.sub')),
      el('div', { class: 'panel' }, el('div', { class: 'sim-grid' }, controls, output)))));

    function update() {
      Object.keys(outputs).forEach(function (k) { outputs[k].out.textContent = outputs[k].fmt(sim[k]); });
      store.set('ci.sim', sim);
      var r = sim.rate / 100 / 12, bal = sim.initial, contrib = sim.initial;
      var totals = [bal], contribs = [contrib];
      for (var m = 1; m <= sim.years * 12; m++) {
        bal = bal * (1 + r) + sim.monthly; contrib += sim.monthly;
        if (m % 12 === 0) {
          var y = m / 12, defl = sim.real ? Math.pow(1.02, y) : 1;
          totals.push(bal / defl); contribs.push(contrib / defl);
        }
      }
      var fin = totals[totals.length - 1], con = contribs[contribs.length - 1];
      kContrib.textContent = money(con);
      kInterest.textContent = money(fin - con);
      kFinal.textContent = money(fin);
      drawSimChart(chartBox, totals, contribs);
    }
    update();
  }
  function drawSimChart(box, totals, contribs) {
    var W = 640, H = 300, L = 86, R = 16, T = 16, B = 34;
    // Eje con valores redondos (1, 2, 2,5 o 5 × 10^k) para que las etiquetas sean cortas y legibles
    var peak = Math.max.apply(null, totals.concat([1]));
    var raw = peak / 4, mag = Math.pow(10, Math.floor(Math.log10(raw)));
    var tick = [1, 2, 2.5, 5, 10].map(function (f) { return f * mag; }).filter(function (v) { return v >= raw; })[0];
    var ticks = Math.ceil(peak / tick);
    var max = tick * ticks;
    var n = totals.length - 1 || 1;
    function X(i) { return L + i * (W - L - R) / n; }
    function Y(v) { return H - B - v / max * (H - B - T); }
    function line(arr) { return arr.map(function (v, i) { return X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' '); }
    function area(arr) { return 'M' + X(0) + ',' + Y(0) + ' L' + line(arr).split(' ').join(' L') + ' L' + X(arr.length - 1) + ',' + Y(0) + ' Z'; }
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    s.setAttribute('role', 'img');
    s.setAttribute('aria-label', t('ui.sim.chartLabel'));
    function add(tag, attrs, txt) {
      var e = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
      if (txt !== undefined) e.textContent = txt;
      s.appendChild(e); return e;
    }
    for (var g = 0; g <= ticks; g++) {
      var v = tick * g, y = Y(v);
      add('line', { x1: L, x2: W - R, y1: y, y2: y, class: 'chart-grid' });
      add('text', { x: L - 8, y: y + 4, 'text-anchor': 'end', class: 'chart-label' }, compactMoney(v));
    }
    var step = n > 30 ? 10 : 5;
    for (var yr = 0; yr <= n; yr += step) add('text', { x: X(yr), y: H - 10, 'text-anchor': 'middle', class: 'chart-label' }, String(yr));
    add('path', { d: area(totals), class: 'chart-area' });
    add('path', { d: area(contribs), class: 'chart-area-2' });
    add('polyline', { points: line(contribs), class: 'chart-line-2' });
    add('polyline', { points: line(totals), class: 'chart-line' });
    var guide = add('line', { x1: 0, x2: 0, y1: T, y2: H - B, class: 'chart-dash-cobalt', opacity: '0' });
    var dot = add('circle', { cx: 0, cy: 0, r: 5, class: 'chart-dot', opacity: '0' });
    var tipG = document.createElementNS(NS, 'g'); tipG.setAttribute('opacity', '0'); s.appendChild(tipG);
    var tipRect = document.createElementNS(NS, 'rect'); tipRect.setAttribute('rx', '8'); tipRect.setAttribute('class', 'chart-tip'); tipRect.setAttribute('width', '170'); tipRect.setAttribute('height', '62');
    tipG.appendChild(tipRect);
    var lines = [0, 1, 2].map(function (k) {
      var tx = document.createElementNS(NS, 'text'); tx.setAttribute('class', 'chart-tip-text'); tx.setAttribute('x', '10'); tx.setAttribute('y', String(18 + k * 17)); tipG.appendChild(tx); return tx;
    });
    function show(i) {
      var x = X(i), yv = Y(totals[i]);
      guide.setAttribute('x1', x); guide.setAttribute('x2', x); guide.setAttribute('opacity', '1');
      dot.setAttribute('cx', x); dot.setAttribute('cy', yv); dot.setAttribute('opacity', '1');
      lines[0].textContent = t('ui.sim.tipYear', { n: i });
      lines[1].textContent = t('ui.sim.legendTotal') + ': ' + money(totals[i]);
      lines[2].textContent = t('ui.sim.legendContrib') + ': ' + money(contribs[i]);
      var tx = x + 12 + 170 > W ? x - 182 : x + 12;
      tipG.setAttribute('transform', 'translate(' + tx + ',' + Math.max(T, Math.min(yv - 30, H - B - 62)) + ')');
      tipG.setAttribute('opacity', '1');
    }
    function hide() { guide.setAttribute('opacity', '0'); dot.setAttribute('opacity', '0'); tipG.setAttribute('opacity', '0'); }
    s.addEventListener('pointermove', function (e) {
      var rect = s.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width * W;
      var i = Math.round((px - L) / (W - L - R) * n);
      show(Math.max(0, Math.min(n, i)));
    });
    s.addEventListener('pointerleave', hide);
    box.replaceChildren(s);
  }
  function compactMoney(v) {
    return new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR', notation: 'compact', maximumFractionDigits: 1 }).format(v);
  }

  /* ------------------------------------------------------------ */
  /* Foro                                                          */
  /* ------------------------------------------------------------ */
  function avatarColor(name) {
    var h = 0;
    for (var k = 0; k < name.length; k++) h = (h * 31 + name.charCodeAt(k)) % 360;
    return 'hsl(' + h + ', 55%, 42%)';
  }
  function renderForum(view) {
    var thread = el('div', { class: 'thread', 'aria-live': 'polite' });
    var topicList = el('div', { class: 'topic-list', role: 'group', 'aria-label': t('ui.forum.topicsLabel') });
    TOPICS.forEach(function (id) {
      var btn = el('button', { type: 'button', 'aria-pressed': String(id === state.forumTopic) }, icon(TOPIC_ICONS[id]), t('topics.' + id));
      btn.addEventListener('click', function () {
        state.forumTopic = id;
        $$('button', topicList).forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        loadThread();
      });
      topicList.appendChild(btn);
    });
    var main = el('div', { class: 'forum-main' },
      el('div', { class: 'forum-rules' }, icon('shield'), el('span', { text: t('ui.forum.rules') })),
      thread);
    if (state.user) main.appendChild(composer());
    else main.appendChild(el('div', { class: 'login-cta' }, el('p', { text: t('ui.forum.loginCta') }),
      el('button', { class: 'btn btn-primary btn-sm', type: 'button', onclick: function () { openAuth('login'); } }, t('ui.account.login'))));

    view.appendChild(el('section', null, el('div', { class: 'wrap' },
      sectionHead(t('ui.forum.title'), t('ui.forum.sub')),
      el('div', { class: 'panel' }, el('div', { class: 'forum-layout' }, topicList, main)))));

    function composer() {
      var ta = el('textarea', { class: 'textarea', id: 'forumText', maxlength: '600', placeholder: t('ui.forum.placeholder') });
      var counter = el('span', { class: 'counter', text: t('ui.forum.counter', { n: 0 }) });
      var btn = el('button', { class: 'btn btn-primary', type: 'submit' }, icon('send'), t('ui.forum.publish'));
      ta.addEventListener('input', function () { counter.textContent = t('ui.forum.counter', { n: ta.value.length }); });
      var form = el('form', { class: 'composer' },
        el('label', { class: 'visually-hidden', for: 'forumText', text: t('ui.forum.composerLabel') }), ta,
        el('div', { class: 'row' }, counter, btn));
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var text = ta.value.trim();
        if (!text) { ta.focus(); toast(errorText('EMPTY_MESSAGE'), 'info'); return; }
        btn.disabled = true;
        api('/topics/' + state.forumTopic + '/posts', { method: 'POST', body: { text: text } })
          .then(function () { ta.value = ''; counter.textContent = t('ui.forum.counter', { n: 0 }); toast(t('ui.forum.posted'), 'ok'); loadThread(); })
          .catch(function (err) { handleAuthError(err); toast(errorText(err.code), 'err'); })
          .then(function () { btn.disabled = false; });
      });
      return form;
    }
    function postNode(p, isReply) {
      var name = p.username || '?';
      var actions = el('div', { class: 'post-actions' });
      var node = el('article', { class: 'post' },
        el('div', { class: 'post-head' },
          (function () { var a = el('span', { class: 'avatar', text: name.charAt(0).toUpperCase(), 'aria-hidden': 'true' }); a.style.background = avatarColor(name); return a; })(),
          el('b', { text: name }),
          el('time', { datetime: new Date(p.created_at).toISOString(), text: dateTime(p.created_at) })),
        el('p', { class: 'post-text', text: p.text }),
        actions);
      if (!isReply && state.user) {
        var formBox = el('div');
        actions.appendChild(el('button', { class: 'link-btn', type: 'button', onclick: function () {
          if (formBox.firstChild) { formBox.replaceChildren(); return; }
          var ta = el('textarea', { class: 'textarea', maxlength: '600', placeholder: t('ui.forum.replyPh'), 'aria-label': t('ui.forum.replyPh') });
          var send = el('button', { class: 'btn btn-primary btn-sm', type: 'submit' }, t('ui.forum.sendReply'));
          var f = el('form', { class: 'reply-form' }, ta, el('div', { class: 'post-actions' }, send,
            el('button', { class: 'btn btn-quiet btn-sm', type: 'button', onclick: function () { formBox.replaceChildren(); } }, t('ui.common.cancel'))));
          f.addEventListener('submit', function (e) {
            e.preventDefault();
            var text = ta.value.trim();
            if (!text) { ta.focus(); return; }
            send.disabled = true;
            api('/posts/' + p.id + '/replies', { method: 'POST', body: { text: text } })
              .then(function () { toast(t('ui.forum.replied'), 'ok'); loadThread(); })
              .catch(function (err) { handleAuthError(err); toast(errorText(err.code), 'err'); send.disabled = false; });
          });
          formBox.replaceChildren(f);
          ta.focus();
        } }, icon('reply'), t('ui.forum.reply')));
        node.appendChild(formBox);
      }
      if (p.canDelete) {
        actions.appendChild(el('button', { class: 'link-btn danger', type: 'button', onclick: function () {
          confirmDialog(t('ui.forum.deleteConfirm'), t('ui.forum.delete')).then(function (ok) {
            if (!ok) return;
            api((isReply ? '/replies/' : '/posts/') + p.id, { method: 'DELETE' })
              .then(function () { toast(t('ui.forum.deleted'), 'ok'); loadThread(); })
              .catch(function (err) { toast(errorText(err.code), 'err'); });
          });
        } }, icon('trash'), t('ui.forum.delete')));
      }
      if (!isReply && p.replies && p.replies.length) {
        node.appendChild(el('div', { class: 'replies' }, p.replies.map(function (r) { return postNode(r, true); })));
      }
      return node;
    }
    function loadThread() {
      thread.replaceChildren(el('div', { class: 'skeleton' }), el('div', { class: 'skeleton' }), el('span', { class: 'visually-hidden', text: t('ui.forum.loading') }));
      var topic = state.forumTopic;
      api('/topics/' + topic + '/posts').then(function (data) {
        if (topic !== state.forumTopic) return;
        thread.replaceChildren();
        if (!data.posts.length) {
          thread.appendChild(el('div', { class: 'empty-state' }, icon('message'), el('p', { text: t('ui.forum.empty') })));
          return;
        }
        data.posts.forEach(function (p) { thread.appendChild(postNode(p, false)); });
      }).catch(function (err) {
        thread.replaceChildren(el('div', { class: 'empty-state' }, icon('alert'),
          el('p', { text: err.code === 'NETWORK' ? t('ui.forum.offline') : errorText(err.code) }),
          el('button', { class: 'btn btn-ghost btn-sm', type: 'button', onclick: loadThread }, icon('refresh'), t('ui.common.retry'))));
      });
    }
    loadThread();
  }
  function handleAuthError(err) {
    if (err && err.code === 'UNAUTHENTICATED') {
      state.user = null;
      renderChrome();
      openAuth('login');
    }
  }

  /* ------------------------------------------------------------ */
  /* Consultor IA                                                  */
  /* ------------------------------------------------------------ */
  function formatBotText(text) {
    var frag = document.createDocumentFragment();
    String(text).split(/(\*\*[^*]+\*\*)/g).forEach(function (part) {
      if (/^\*\*[^*]+\*\*$/.test(part)) frag.appendChild(el('strong', { text: part.slice(2, -2) }));
      else if (part) frag.appendChild(document.createTextNode(part));
    });
    return frag;
  }
  function renderAI(view) {
    var log = el('div', { class: 'chat-log', 'aria-live': 'polite' });
    function bubble(role, text, extra) {
      var b = el('div', { class: 'msg ' + role + (extra ? ' ' + extra : '') });
      if (role === 'bot') b.appendChild(formatBotText(text)); else b.textContent = text;
      log.appendChild(b);
      log.scrollTop = log.scrollHeight;
      return b;
    }
    bubble('bot', t('ui.ai.welcome'));
    state.aiHistory.forEach(function (m) { bubble(m.role === 'user' ? 'user' : 'bot', m.content); });

    var suggest = el('div', { class: 'chat-suggest' });
    var input = el('input', { class: 'input', id: 'aiInput', maxlength: '2000', autocomplete: 'off', placeholder: t('ui.ai.placeholder') });
    var sendBtn = el('button', { class: 'btn btn-primary', type: 'submit', 'aria-label': t('ui.ai.send') }, icon('send'), el('span', { class: 'hide-xs', text: t('ui.ai.send') }));
    var busy = false;

    function send(text) {
      text = String(text || '').trim();
      if (!text || busy) return;
      if (!state.user) { openAuth('login'); return; }
      busy = true; sendBtn.disabled = true;
      suggest.replaceChildren();
      bubble('user', text);
      state.aiHistory.push({ role: 'user', content: text });
      input.value = '';
      var typing = el('div', { class: 'msg bot typing', 'aria-label': t('ui.ai.thinking') }, el('i'), el('i'), el('i'));
      log.appendChild(typing); log.scrollTop = log.scrollHeight;
      api('/ai', { method: 'POST', body: { lang: state.lang, messages: state.aiHistory.slice(-12) } })
        .then(function (data) {
          typing.remove();
          bubble('bot', data.reply);
          state.aiHistory.push({ role: 'assistant', content: data.reply });
        })
        .catch(function (err) {
          typing.remove();
          state.aiHistory.pop();
          handleAuthError(err);
          bubble('bot', errorText(err.code), 'error');
        })
        .then(function () { busy = false; sendBtn.disabled = false; input.focus(); });
    }
    if (!state.aiHistory.length) {
      t('ui.ai.suggestions').forEach(function (s) {
        suggest.appendChild(el('button', { class: 'chip', type: 'button', onclick: function () { send(s); } }, s));
      });
    }
    var bottom;
    if (state.user) {
      bottom = el('form', { class: 'chat-input' }, el('label', { class: 'visually-hidden', for: 'aiInput', text: t('ui.ai.inputLabel') }), input, sendBtn);
      bottom.addEventListener('submit', function (e) { e.preventDefault(); send(input.value); });
      if (state.aiPrefill) { input.value = state.aiPrefill; state.aiPrefill = ''; setTimeout(function () { input.focus(); }, 80); }
    } else {
      bottom = el('div', { class: 'login-cta' }, el('p', { text: t('ui.ai.needLogin') }),
        el('button', { class: 'btn btn-primary btn-sm', type: 'button', onclick: function () { openAuth('login'); } }, t('ui.account.login')));
    }
    var head = el('div', { class: 'panel-head' },
      el('div', null, el('h2', { text: t('ui.ai.panelTitle') }), el('p', { text: t('ui.ai.panelSub') })),
      state.aiHistory.length ? el('button', { class: 'btn btn-ghost btn-sm', type: 'button', onclick: function () { state.aiHistory = []; render(); } }, icon('refresh'), t('ui.ai.clear')) : null);
    view.appendChild(el('section', null, el('div', { class: 'wrap' },
      sectionHead(t('ui.ai.title'), t('ui.ai.sub')),
      el('div', { class: 'panel' },
        head,
        el('div', { class: 'chat' }, log, suggest, bottom),
        el('div', { class: 'ai-note' }, icon('info'), el('span', { text: t('ui.ai.disclaimer') }))))));
  }

  /* ------------------------------------------------------------ */
  /* Noticias y recursos                                           */
  /* ------------------------------------------------------------ */
  function safeUrl(u) {
    try { var x = new URL(u); return (x.protocol === 'https:' || x.protocol === 'http:') ? x.href : null; } catch (e) { return null; }
  }
  function renderResources(view) {
    var list = el('div', { class: 'news-list' }, el('div', { class: 'skeleton' }), el('div', { class: 'skeleton' }), el('div', { class: 'skeleton' }));
    var updated = el('p');
    var newsPanel = el('div', { class: 'panel' },
      el('div', { class: 'panel-head' }, el('div', null, el('h2', { text: t('ui.res.liveTitle') }), el('p', { text: t('ui.res.liveSub') })), updated),
      el('div', { class: 'thread' }, list));
    var groups = LOC().resources.groups.map(function (g) {
      return el('div', { class: 'source-group' },
        el('h3', null, icon(g.icon), g.title),
        g.items.map(function (it) {
          var href = safeUrl(it.url);
          return el('a', { class: 'source', href: href, target: '_blank', rel: 'noopener noreferrer' },
            el('b', null, it.name, icon('external')), el('span', { text: it.desc }),
            el('span', { class: 'visually-hidden', text: t('ui.res.newTab') }));
        }));
    });
    view.appendChild(el('section', null, el('div', { class: 'wrap' },
      sectionHead(t('ui.res.title'), t('ui.res.sub')),
      newsPanel,
      el('div', { class: 'callout' }, icon('info'), el('p', { text: t('ui.res.tip') })),
      el('div', { class: 'section-head' }, el('h2', { text: t('ui.res.sourcesTitle') })),
      el('div', { class: 'source-groups' }, groups))));

    api('/news').then(function (data) {
      var items = (data.items || []).filter(function (it) { return safeUrl(it.link); });
      if (!items.length) throw new ApiError('NETWORK');
      updated.textContent = t('ui.res.updated', { time: dateTime(data.at) });
      list.replaceChildren();
      items.forEach(function (it) {
        list.appendChild(el('a', { class: 'news-item', href: safeUrl(it.link), target: '_blank', rel: 'noopener noreferrer' },
          el('b', { text: it.title }),
          el('span', { class: 'meta' }, el('span', { text: it.source + (it.date ? ' — ' + relTime(it.date) : '') }), icon('external')),
          el('span', { class: 'visually-hidden', text: t('ui.res.newTab') })));
      });
    }).catch(function () {
      list.replaceChildren(el('div', { class: 'empty-state' }, icon('news'), el('p', { text: t('ui.res.unavailable') })));
    });
  }

  /* ------------------------------------------------------------ */
  /* Ajustes                                                       */
  /* ------------------------------------------------------------ */
  function openSettings() {
    toggleMobileNav(false);
    var themeBtns = el('div', { class: 'segmented', role: 'group', 'aria-label': t('ui.settings.theme') });
    [['auto', 'spark'], ['light', 'target'], ['dark', 'globe']].forEach(function (pair) {
      var b = el('button', { type: 'button', 'aria-pressed': String(state.theme === pair[0]) }, t('ui.settings.theme_' + pair[0]));
      b.addEventListener('click', function () {
        state.theme = pair[0]; store.set('ci.theme', state.theme); applyTheme();
        $$('button', themeBtns).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
      });
      themeBtns.appendChild(b);
    });
    var content = el('div', null,
      el('h2', { id: 'settingsTitle', text: t('ui.settings.title') }),
      el('div', { class: 'settings-section' },
        el('h3', null, el('label', { for: 'langModal', text: t('ui.settings.language') })),
        langSelect('langModal')),
      el('div', { class: 'settings-section' }, el('h3', { text: t('ui.settings.theme') }), themeBtns),
      el('div', { class: 'settings-section' },
        el('h3', { text: t('ui.settings.progress') }),
        el('p', { text: t('ui.route.summary', { done: doneCount(), total: LEVELS }) }),
        el('button', { class: 'btn btn-danger btn-sm', type: 'button', onclick: function () {
          confirmDialog(t('ui.settings.resetConfirm'), t('ui.settings.reset')).then(function (ok) {
            if (!ok) return;
            state.progress = { passed: [], scores: {} };
            saveProgress();
            toast(t('ui.settings.resetDone'), 'ok');
            render();
          });
        } }, icon('refresh'), t('ui.settings.reset'))),
      el('div', { class: 'settings-section' },
        el('h3', { text: t('ui.settings.account') }),
        state.user
          ? [el('p', { text: t('ui.settings.loggedAs', { name: state.user.username }) }), el('p', { text: t('ui.settings.syncNote') }),
            el('button', { class: 'btn btn-ghost btn-sm', type: 'button', onclick: logout }, icon('logout'), t('ui.account.logout'))]
          : [el('p', { text: t('ui.settings.guestNote') }),
            el('button', { class: 'btn btn-primary btn-sm', type: 'button', onclick: function () { closeAllModals(); openAuth('login'); } }, t('ui.account.login'))]));
    openModal(content, 'settingsTitle');
  }
  function setLang(lang, persist) {
    if (LANGS.indexOf(lang) < 0) return;
    state.lang = lang;
    store.set('ci.lang', lang);
    document.documentElement.lang = LOC().meta.htmlLang;
    if (persist && state.user) api('/me/settings', { method: 'PUT', body: { lang: lang } }).catch(function () { /* se guarda localmente */ });
    render();
  }

  /* ------------------------------------------------------------ */
  /* Autenticación                                                 */
  /* ------------------------------------------------------------ */
  function openAuth(tab) {
    toggleMobileNav(false);
    closeAllModals();
    var mode = tab || 'login';
    var tabs = el('div', { class: 'segmented', role: 'tablist' });
    var formBox = el('div');
    function field(id, label, type, attrs, hint) {
      var input = el('input', Object.assign({ class: 'input', id: id, name: id, type: type, required: true }, attrs || {}));
      var control = input;
      if (type === 'password') {
        var eye = el('button', { class: 'btn-icon', type: 'button', 'aria-label': t('ui.auth.showPwd'), 'aria-pressed': 'false' }, icon('eye'));
        eye.addEventListener('click', function () {
          var show = input.type === 'password';
          input.type = show ? 'text' : 'password';
          eye.setAttribute('aria-pressed', String(show));
          eye.setAttribute('aria-label', show ? t('ui.auth.hidePwd') : t('ui.auth.showPwd'));
          eye.replaceChildren(icon(show ? 'eyeOff' : 'eye'));
        });
        control = el('div', { class: 'pwd-wrap' }, input, eye);
      }
      return { input: input, node: el('div', { class: 'field' }, el('label', { for: id, text: label }), control, hint ? el('span', { class: 'hint', id: id + '-hint', text: hint }) : null) };
    }
    function build() {
      $$('button', tabs).forEach(function (b) { b.setAttribute('aria-selected', String(b.dataset.mode === mode)); });
      var err = el('p', { class: 'form-error', role: 'alert' });
      var submit = el('button', { class: 'btn btn-primary', type: 'submit' }, mode === 'login' ? t('ui.auth.loginBtn') : t('ui.auth.registerBtn'));
      submit.style.width = '100%';
      var fields = [];
      if (mode === 'register') fields.push(field('authUser', t('ui.auth.username'), 'text', { autocomplete: 'username', minlength: '3', maxlength: '30', 'aria-describedby': 'authUser-hint' }, t('ui.auth.usernameHint')));
      fields.push(field('authEmail', t('ui.auth.email'), 'email', { autocomplete: 'email', maxlength: '254' }));
      fields.push(field('authPwd', t('ui.auth.password'), 'password', { autocomplete: mode === 'login' ? 'current-password' : 'new-password', minlength: '8', maxlength: '72', 'aria-describedby': mode === 'register' ? 'authPwd-hint' : null }, mode === 'register' ? t('ui.auth.passwordHint') : null));
      var form = el('form', { novalidate: true }, fields.map(function (f) { return f.node; }), err, submit);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        err.textContent = '';
        var body = { email: $('#authEmail').value.trim(), password: $('#authPwd').value, lang: state.lang };
        if (mode === 'register') body.username = $('#authUser').value.trim();
        submit.disabled = true;
        submit.replaceChildren(el('span', { class: 'spinner', 'aria-hidden': 'true' }), ' ' + t('ui.auth.working'));
        api(mode === 'login' ? '/auth/login' : '/auth/register', { method: 'POST', body: body })
          .then(function (data) {
            closeAllModals();
            onLoggedIn(data, mode === 'login');
            toast(t('ui.auth.welcome', { name: data.user.username }), 'ok');
          })
          .catch(function (e2) {
            err.textContent = errorText(e2.code);
            submit.disabled = false;
            submit.replaceChildren(mode === 'login' ? t('ui.auth.loginBtn') : t('ui.auth.registerBtn'));
          });
      });
      formBox.replaceChildren(form);
      var first = $('input', form); if (first) setTimeout(function () { first.focus(); }, 20);
    }
    ['login', 'register'].forEach(function (m) {
      var b = el('button', { type: 'button', role: 'tab', 'data-mode': m }, m === 'login' ? t('ui.auth.tabLogin') : t('ui.auth.tabRegister'));
      b.addEventListener('click', function () { mode = m; build(); });
      tabs.appendChild(b);
    });
    var content = el('div', null, el('h2', { id: 'authTitle', text: t('ui.auth.title') }), el('p', { class: 'sub', text: t('ui.auth.sub') }), tabs, formBox);
    openModal(content, 'authTitle');
    build();
  }
  function onLoggedIn(data, adoptAccountLang) {
    state.user = data.user;
    if (data.progress) mergeProgress(data.progress);
    if (adoptAccountLang && data.user.lang && data.user.lang !== state.lang && LANGS.indexOf(data.user.lang) >= 0) {
      setLang(data.user.lang, false);
    } else {
      render();
    }
  }
  function logout() {
    api('/auth/logout', { method: 'POST', body: {} }).catch(function () { /* se cierra igualmente en local */ }).then(function () {
      state.user = null;
      state.aiHistory = [];
      closeAllModals();
      toast(t('ui.auth.loggedOut'), 'info');
      render();
    });
  }

  /* ------------------------------------------------------------ */
  /* Barra de lectura, índice y animaciones                        */
  /* ------------------------------------------------------------ */
  var readHandler = null, tocObserver = null;
  function setupReadProgress(on) {
    var bar = $('#readProgress');
    if (readHandler) { window.removeEventListener('scroll', readHandler); readHandler = null; }
    bar.classList.toggle('on', on);
    if (!on) return;
    var span = $('span', bar);
    readHandler = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      span.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + '%';
    };
    window.addEventListener('scroll', readHandler, { passive: true });
    readHandler();
  }
  function watchToc() {
    if (tocObserver) tocObserver.disconnect();
    if (!('IntersectionObserver' in window)) return;
    tocObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$('.toc a').forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-target') === en.target.id); });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    setTimeout(function () {
      $$('.toc a').forEach(function (a) { var target = document.getElementById(a.getAttribute('data-target')); if (target) tocObserver.observe(target); });
    }, 0);
  }
  function killAnimations() {
    if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach(function (st) { st.kill(); });
  }
  function animateView(route) {
    var g = window.gsap;
    if (!g || REDUCED) return;
    if (window.ScrollTrigger && !animateView.registered) { g.registerPlugin(window.ScrollTrigger); animateView.registered = true; }
    if (route.name === 'home') {
      g.from('.hero-candle', { opacity: 0, y: 14, duration: 0.45, stagger: 0.035, ease: 'power2.out' });
      var line = $('.hero-line');
      if (line && line.getTotalLength) {
        var len = line.getTotalLength();
        g.fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.6, delay: 0.5, ease: 'power1.inOut' });
      }
      if (window.ScrollTrigger) {
        g.to('.hero-art', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      }
    }
    $$('.figure-frame').forEach(function (frame) {
      if (FINE_POINTER) {
        frame.addEventListener('mouseenter', function () { g.to(frame, { scale: 1.03, duration: 0.35, ease: 'power2.out' }); });
        frame.addEventListener('mouseleave', function () { g.to(frame, { scale: 1, duration: 0.35, ease: 'power2.out' }); });
      }
      if (window.ScrollTrigger && route.name === 'level') {
        g.from(frame, { opacity: 0, y: 18, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: frame, start: 'top 92%', once: true } });
      }
    });
  }

  /* ------------------------------------------------------------ */
  /* Arranque                                                      */
  /* ------------------------------------------------------------ */
  function init() {
    if (!window.LOCALES || !window.LOCALES.es || !window.Charts) return;
    document.documentElement.lang = LOC().meta.htmlLang;
    applyTheme();
    $('#skipLink').addEventListener('click', function (e) { e.preventDefault(); $('#view').focus(); });
    window.addEventListener('hashchange', render);
    render();
    api('/me').then(function (data) {
      if (data.user) {
        state.user = data.user;
        if (data.progress) mergeProgress(data.progress);
        if (data.user.lang && data.user.lang !== state.lang && LANGS.indexOf(data.user.lang) >= 0 && !store.get('ci.lang', null)) {
          setLang(data.user.lang, false);
          return;
        }
        render();
      }
    }).catch(function () { /* sin servidor: la parte de aprendizaje funciona igualmente */ });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
