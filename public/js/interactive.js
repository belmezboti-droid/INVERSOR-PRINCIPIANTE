/* Monibas Capital — gráficos y simuladores interactivos.
   Todo se calcula en el navegador; no se envía ningún dato.
   Los textos llegan traducidos desde app.js (función t) y siempre se insertan como texto, nunca como HTML. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function S(tag, attrs, text) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]); });
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function clamp(x, a, b) { return Math.min(b, Math.max(a, x)); }
  function niceStep(raw) {
    var mag = Math.pow(10, Math.floor(Math.log10(raw || 1)));
    return [1, 2, 2.5, 5, 10].map(function (f) { return f * mag; }).filter(function (v) { return v >= raw; })[0];
  }
  function seeded(seed) { return function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }; }
  function gauss(rnd) { var u = 1 - rnd(), v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

  /* ---------- Clasificación de velas (misma lógica para portada y reto) ---------- */
  function classify(c, avgBody) {
    var body = Math.abs(c.c - c.o), range = Math.max(1e-9, c.h - c.l);
    var upper = c.h - Math.max(c.o, c.c), lower = Math.min(c.o, c.c) - c.l, up = c.c >= c.o;
    if (body <= range * 0.12) return 'doji';
    if (lower >= body * 2 && upper <= body * 0.6) return 'hammer';
    if (upper >= body * 2 && lower <= body * 0.6) return 'star';
    if (body >= range * 0.6 && body >= avgBody * 1.6) return up ? 'bigBull' : 'bigBear';
    return up ? 'bull' : 'bear';
  }

  /* ---------- Serie de la portada: una historia de mercado completa ---------- */
  function heroSeries() {
    var rnd = seeded(11), out = [], prev = 121;
    var path = [];
    for (var i = 0; i < 40; i++) {
      var target;
      if (i < 12) target = 121 - i * 1.75;                 // tendencia bajista
      else if (i < 20) target = 101.5 + Math.sin(i * 1.3) * 2.2; // lateral (base)
      else if (i < 33) target = 110 + (i - 20) * 1.35;      // tendencia alcista tras la ruptura
      else target = 127 - (i - 33) * 1.1;                  // retroceso
      path.push(target);
    }
    for (var k = 0; k < 40; k++) {
      var o = prev + (rnd() - 0.5) * 0.8;
      var c = path[k] + (rnd() - 0.5) * 2.2;
      if (Math.abs(c - o) < 1) c = o + (c >= o ? 1 : -1) * (1 + rnd() * 0.6); // cuerpos claros: el doji debe ser la excepción
      var h = Math.max(o, c) + rnd() * 1.6 + 0.2, l = Math.min(o, c) - rnd() * 1.6 - 0.2;
      var v = 80 + rnd() * 50 + Math.abs(c - o) * 9;
      out.push({ o: o, h: h, l: l, c: c, v: v });
      prev = c;
    }
    // Velas diseñadas a propósito para explicar patrones
    out[12] = { o: 99.6, c: 100.5, h: 100.7, l: 95.2, v: 175 };            // martillo en el mínimo
    out[13].o = 100.6;
    out[20] = { o: 104.2, c: 110.6, h: 111.1, l: 103.9, v: 290 };          // ruptura con volumen
    out[21].o = 110.7;
    out[27] = { o: out[26].c, c: out[26].c + 0.08, h: out[26].c + 1.5, l: out[26].c - 1.4, v: 95 }; // doji
    out[28].o = out[27].c;
    out[33] = { o: 127.6, c: 126.4, h: 131.8, l: 126.1, v: 185 };          // estrella fugaz en el máximo
    out[34].o = 126.3;
    for (var m = 0; m < 40; m++) { var x = out[m]; x.h = Math.max(x.h, x.o, x.c); x.l = Math.min(x.l, x.o, x.c); }
    return out;
  }
  function movingAverage(data, n) {
    return data.map(function (d, i) {
      if (i < n - 1) return null;
      var s = 0; for (var k = i - n + 1; k <= i; k++) s += data[k].c;
      return s / n;
    });
  }

  /* ---------- Gráfico explorable de la portada ---------- */
  function heroChart(host, api) {
    var t = api.t, el = api.el, icon = api.icon;
    var data = heroSeries(), ma = movingAverage(data, 10);
    var avgBody = data.reduce(function (a, d) { return a + Math.abs(d.c - d.o); }, 0) / data.length;
    var support = Math.min.apply(null, data.slice(8, 20).map(function (d) { return d.l; }));
    var resistance = Math.max.apply(null, data.slice(13, 20).map(function (d) { return d.h; }));
    var opts = { view: 'candles', ma: true, volume: true, levels: false }, active = 12;
    var W = 560, H = 318, PT = 14, PB = 226, VT = 244, VB = 300, step = (W - 16) / data.length;
    var lo = Math.min.apply(null, data.map(function (d) { return d.l; })) - 2;
    var hi = Math.max.apply(null, data.map(function (d) { return d.h; })) + 2;
    var vmax = Math.max.apply(null, data.map(function (d) { return d.v; }));
    function X(i) { return 8 + i * step + step / 2; }
    function Y(p) { return PB - (p - lo) / (hi - lo) * (PB - PT); }
    var priceFmt = new Intl.NumberFormat(api.locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    var pctFmt = new Intl.NumberFormat(api.locale(), { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: 'exceptZero' });
    var volFmt = new Intl.NumberFormat(api.locale(), { maximumFractionDigits: 1, notation: 'compact' });

    var svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'hc-svg', role: 'img', 'aria-label': t('ui.heroChart.label') });
    var gGrid = S('g'), gVol = S('g', { class: 'hc-vol' }), gLevels = S('g', { class: 'hc-levels' }), gCandles = S('g'), gLine = S('g'), gMa = S('g'), gCross = S('g', { class: 'hc-cross' });
    for (var g = 0; g < 5; g++) gGrid.appendChild(S('line', { x1: 0, x2: W, y1: PT + g * (PB - PT) / 4, y2: PT + g * (PB - PT) / 4, class: 'chart-hero-grid' }));
    var candleNodes = data.map(function (d, i) {
      var up = d.c >= d.o, cls = up ? 'chart-hero-bull' : 'chart-hero-bear', grp = S('g', { class: 'hero-candle' });
      grp.appendChild(S('line', { x1: X(i), x2: X(i), y1: Y(d.h).toFixed(1), y2: Y(d.l).toFixed(1), class: cls, 'stroke-width': 1.5 }));
      var top = Y(Math.max(d.o, d.c)), bot = Y(Math.min(d.o, d.c));
      grp.appendChild(S('rect', { x: (X(i) - step * 0.32).toFixed(1), y: top.toFixed(1), width: (step * 0.64).toFixed(1), height: Math.max(1.6, bot - top).toFixed(1), rx: 1.5, class: cls }));
      gCandles.appendChild(grp);
      gVol.appendChild(S('rect', { x: (X(i) - step * 0.32).toFixed(1), y: (VB - d.v / vmax * (VB - VT)).toFixed(1), width: (step * 0.64).toFixed(1), height: (d.v / vmax * (VB - VT)).toFixed(1), class: up ? 'hc-vol-up' : 'hc-vol-down' }));
      return grp;
    });
    gLine.appendChild(S('polyline', { points: data.map(function (d, i) { return X(i).toFixed(1) + ',' + Y(d.c).toFixed(1); }).join(' '), class: 'hc-close-line' }));
    var maPts = ma.map(function (v, i) { return v === null ? null : X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).filter(Boolean).join(' ');
    gMa.appendChild(S('polyline', { points: maPts, class: 'chart-hero-line hero-line' }));
    function level(p, cls, label) {
      gLevels.appendChild(S('line', { x1: 0, x2: W, y1: Y(p).toFixed(1), y2: Y(p).toFixed(1), class: cls }));
      gLevels.appendChild(S('text', { x: 6, y: (Y(p) - 6).toFixed(1), class: 'hc-level-label' }, label + ' · ' + priceFmt.format(p)));
    }
    level(resistance, 'hc-res', t('charts.line.resistance'));
    level(support, 'hc-sup', t('charts.line.support'));
    var crossLine = S('line', { y1: PT - 6, y2: VB, class: 'hc-cross-line' });
    var crossDot = S('circle', { r: 4.5, class: 'hc-cross-dot' });
    gCross.appendChild(crossLine); gCross.appendChild(crossDot);
    [gGrid, gVol, gLevels, gCandles, gLine, gMa, gCross].forEach(function (n) { svg.appendChild(n); });

    var frame = el('div', { class: 'hc-frame', tabindex: '0', 'aria-describedby': 'hcInfo' }, svg);
    var info = el('div', { class: 'hc-info', id: 'hcInfo', 'aria-live': 'polite' });

    function chip(key, label) {
      var b = el('button', { type: 'button', class: 'hc-chip', 'aria-pressed': String(!!opts[key]) }, label);
      b.addEventListener('click', function () { opts[key] = !opts[key]; b.setAttribute('aria-pressed', String(opts[key])); apply(); });
      return b;
    }
    var viewSeg = el('div', { class: 'hc-seg', role: 'group', 'aria-label': t('ui.heroChart.controls') });
    [['candles', t('ui.heroChart.candles')], ['line', t('ui.heroChart.line')]].forEach(function (p) {
      var b = el('button', { type: 'button', 'aria-pressed': String(opts.view === p[0]) }, p[1]);
      b.addEventListener('click', function () {
        opts.view = p[0];
        Array.prototype.forEach.call(viewSeg.children, function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true'); apply();
      });
      viewSeg.appendChild(b);
    });
    var controls = el('div', { class: 'hc-controls', role: 'group', 'aria-label': t('ui.heroChart.controls') },
      viewSeg, chip('ma', t('ui.heroChart.ma')), chip('volume', t('ui.heroChart.volume')), chip('levels', t('ui.heroChart.levels')));

    function apply() {
      gCandles.style.display = opts.view === 'candles' ? '' : 'none';
      gLine.style.display = opts.view === 'line' ? '' : 'none';
      gMa.style.display = opts.ma ? '' : 'none';
      gVol.style.display = opts.volume ? '' : 'none';
      gLevels.style.display = opts.levels ? '' : 'none';
    }
    function select(i) {
      active = clamp(i, 0, data.length - 1);
      var d = data[active], prevClose = active > 0 ? data[active - 1].c : d.o;
      crossLine.setAttribute('x1', X(active)); crossLine.setAttribute('x2', X(active));
      crossDot.setAttribute('cx', X(active)); crossDot.setAttribute('cy', Y(d.c).toFixed(1));
      candleNodes.forEach(function (n, k) { n.classList.toggle('is-dim', k !== active); });
      var kind = classify(d, avgBody), up = d.c >= d.o;
      var maLine = ma[active] === null ? null : (d.c >= ma[active] ? t('ui.heroChart.aboveMa') : t('ui.heroChart.belowMa'));
      function cell(label, value, cls) { return el('div', { class: 'hc-cell' + (cls ? ' ' + cls : '') }, el('span', { text: label }), el('b', { text: value })); }
      var change = (d.c - prevClose) / prevClose;
      info.replaceChildren(
        el('div', { class: 'hc-info-head' },
          el('span', { class: 'hc-badge ' + (up ? 'is-up' : 'is-down') }, icon(up ? 'up' : 'down')),
          el('div', null, el('small', { text: t('ui.heroChart.session', { n: active + 1 }) }), el('strong', { text: t('ui.heroChart.patterns.' + kind + '.h') }))),
        el('div', { class: 'hc-grid' },
          cell(t('charts.candle.open'), priceFmt.format(d.o)), cell(t('charts.candle.high'), priceFmt.format(d.h)),
          cell(t('charts.candle.low'), priceFmt.format(d.l)), cell(t('charts.candle.close'), priceFmt.format(d.c)),
          cell(t('ui.heroChart.change'), pctFmt.format(change), change >= 0 ? 'is-up' : 'is-down'), cell(t('ui.heroChart.volumeLbl'), volFmt.format(d.v * 1000))),
        el('p', { class: 'hc-explain', text: t('ui.heroChart.patterns.' + kind + '.p') }),
        maLine && opts.ma ? el('p', { class: 'hc-ma', text: maLine }) : null);
    }
    function indexFromEvent(e) {
      var r = svg.getBoundingClientRect();
      return Math.floor(((e.clientX - r.left) / r.width * W - 8) / step);
    }
    svg.addEventListener('pointermove', function (e) { select(indexFromEvent(e)); });
    svg.addEventListener('pointerdown', function (e) { select(indexFromEvent(e)); });
    frame.addEventListener('keydown', function (e) {
      var map = { ArrowLeft: -1, ArrowRight: 1 };
      if (map[e.key]) { e.preventDefault(); select(active + map[e.key]); }
      else if (e.key === 'Home') { e.preventDefault(); select(0); }
      else if (e.key === 'End') { e.preventDefault(); select(data.length - 1); }
    });

    host.appendChild(controls);
    host.appendChild(frame);
    host.appendChild(el('p', { class: 'hc-hint' }, icon('info'), t('ui.heroChart.hint')));
    host.appendChild(info);
    host.appendChild(el('div', { class: 'hc-foot' },
      el('span', { text: t('ui.heroChart.note') }),
      el('a', { class: 'hc-cta', href: '#/simulator/challenge' }, t('ui.heroChart.cta') + ' ', el('b', { text: t('ui.heroChart.ctaBtn') }), icon('right'))));
    apply(); select(active);
  }


  /* ---------- Utilidades comunes de los simuladores ---------- */
  function fmtPct(api, v, digits) {
    return new Intl.NumberFormat(api.locale(), { style: 'percent', minimumFractionDigits: digits === undefined ? 1 : digits, maximumFractionDigits: digits === undefined ? 1 : digits }).format(v);
  }
  function fmtNum(api, v, digits) {
    return new Intl.NumberFormat(api.locale(), { minimumFractionDigits: digits || 0, maximumFractionDigits: digits || 0 }).format(v);
  }
  function slider(api, o) {
    // o: { id, label, min, max, step, value, fmt, hint, onInput }
    var out = api.el('output', { for: o.id });
    var input = api.el('input', { type: 'range', id: o.id, min: String(o.min), max: String(o.max), step: String(o.step), value: String(o.value) });
    function show() { out.textContent = o.fmt(Number(input.value)); }
    input.addEventListener('input', function () { show(); o.onInput(Number(input.value)); });
    show();
    var node = api.el('div', { class: 'slider-field' }, api.el('div', { class: 'row' }, api.el('label', { for: o.id, text: o.label }), out), input,
      o.hint ? api.el('span', { class: 'field-hint', text: o.hint }) : null);
    return { node: node, input: input, set: function (v) { input.value = String(v); show(); } };
  }
  function kpi(api, label, cls) {
    var v = api.el('strong');
    return { node: api.el('div', { class: 'kpi' + (cls ? ' ' + cls : '') }, api.el('span', { text: label }), v), value: v };
  }
  function toolHead(api, h, p) { return api.el('div', { class: 'tool-head' }, api.el('h2', { text: h }), api.el('p', { text: p })); }

  // Gráfico de líneas genérico, dibujado al ancho real del contenedor para que sea legible en móvil
  function lineChart(box, series, api, o) {
    var inner = Math.max(280, Math.min(900, (box.clientWidth || 640) - 36));
    var W = Math.round(inner), H = W < 480 ? 240 : 290, L = W < 480 ? 62 : 84, R = 14, T = 14, B = 32;
    var n = series[0].values.length - 1 || 1;
    var peak = Math.max.apply(null, series.reduce(function (a, s) { return a.concat(s.values); }, [1]));
    var tick = niceStep(peak / 4), ticks = Math.ceil(peak / tick), max = tick * ticks;
    function X(i) { return L + i * (W - L - R) / n; }
    function Y(v) { return H - B - v / max * (H - B - T); }
    var svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': o.label });
    var compact = new Intl.NumberFormat(api.locale(), { style: 'currency', currency: 'EUR', notation: 'compact', maximumFractionDigits: 1 });
    for (var g = 0; g <= ticks; g++) {
      svg.appendChild(S('line', { x1: L, x2: W - R, y1: Y(tick * g), y2: Y(tick * g), class: 'chart-grid' }));
      svg.appendChild(S('text', { x: L - 8, y: Y(tick * g) + 4, 'text-anchor': 'end', class: 'chart-label' }, compact.format(tick * g)));
    }
    var stepX = n > 30 ? 10 : 5;
    for (var yr = 0; yr <= n; yr += stepX) svg.appendChild(S('text', { x: X(yr), y: H - 10, 'text-anchor': 'middle', class: 'chart-label' }, String(yr)));
    if (o.gapBetween) {
      var a = series[0].values, b = series[1].values, d = 'M' + X(0) + ',' + Y(a[0]);
      for (var i = 1; i <= n; i++) d += ' L' + X(i).toFixed(1) + ',' + Y(a[i]).toFixed(1);
      for (var j = n; j >= 0; j--) d += ' L' + X(j).toFixed(1) + ',' + Y(b[j]).toFixed(1);
      svg.appendChild(S('path', { d: d + ' Z', class: 'chart-gap' }));
    }
    series.forEach(function (s) {
      svg.appendChild(S('polyline', { points: s.values.map(function (v, i) { return X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' '), class: s.cls }));
    });
    var guide = S('line', { y1: T, y2: H - B, class: 'chart-guide', opacity: 0 });
    var tipG = S('g', { opacity: 0 }), tipBg = S('rect', { rx: 8, class: 'chart-tip', width: 176, height: 18 + series.length * 18 });
    tipG.appendChild(tipBg);
    var lines = [S('text', { x: 10, y: 17, class: 'chart-tip-text', 'font-weight': 700 })].concat(series.map(function (s, k) { return S('text', { x: 10, y: 35 + k * 18, class: 'chart-tip-text' }); }));
    lines.forEach(function (l) { tipG.appendChild(l); });
    svg.appendChild(guide); svg.appendChild(tipG);
    svg.addEventListener('pointermove', function (e) {
      var r = svg.getBoundingClientRect(), px = (e.clientX - r.left) / r.width * W;
      var i = clamp(Math.round((px - L) / (W - L - R) * n), 0, n), x = X(i);
      guide.setAttribute('x1', x); guide.setAttribute('x2', x); guide.setAttribute('opacity', 1);
      lines[0].textContent = o.xLabel(i);
      series.forEach(function (s, k) { lines[k + 1].textContent = s.label + ': ' + api.money(s.values[i]); });
      var tx = x + 12 + 176 > W ? Math.max(4, x - 188) : x + 12;
      tipG.setAttribute('transform', 'translate(' + tx + ',' + T + ')'); tipG.setAttribute('opacity', 1);
    });
    svg.addEventListener('pointerleave', function () { guide.setAttribute('opacity', 0); tipG.setAttribute('opacity', 0); });
    box.replaceChildren(svg);
  }
  function onResize(node, fn) {
    var timer = null;
    function h() { if (!node.isConnected) { window.removeEventListener('resize', h); return; } clearTimeout(timer); timer = setTimeout(fn, 120); }
    window.addEventListener('resize', h);
  }

  /* ---------- Reto: ¿sube o baja? ---------- */
  function randomSeries(n) {
    // Paseo aleatorio sin tendencia: a propósito, el futuro no se puede deducir del pasado
    var out = [], p = 100, vol = 0.016;
    for (var i = 0; i < n; i++) {
      var o = p * (1 + gauss(Math.random) * vol * 0.25);
      var c = o * (1 + gauss(Math.random) * vol);
      var h = Math.max(o, c) * (1 + Math.abs(gauss(Math.random)) * vol * 0.45);
      var l = Math.min(o, c) * (1 - Math.abs(gauss(Math.random)) * vol * 0.45);
      out.push({ o: o, h: h, l: l, c: c }); p = c;
    }
    return out;
  }
  function challenge(host, api) {
    var t = api.t, el = api.el, icon = api.icon, ROUNDS = 10, HIST = 30, FUT = 5;
    var st = { round: 0, score: 0, results: [], series: null, answered: false };
    var panel = el('div', { class: 'panel tool-panel ch' });
    host.appendChild(toolHead(api, t('ui.lab.challenge.h'), t('ui.lab.challenge.p')));
    host.appendChild(panel);

    function dots() {
      var d = el('div', { class: 'ch-dots', 'aria-hidden': 'true' });
      for (var i = 0; i < ROUNDS; i++) d.appendChild(el('i', { class: st.results[i] === true ? 'ok' : st.results[i] === false ? 'ko' : i === st.round ? 'cur' : null }));
      return d;
    }
    function drawChart(reveal) {
      var data = st.series, W = 600, H = 270, P = 16, all = reveal ? data : data.slice(0, HIST);
      var lo = Math.min.apply(null, data.map(function (d) { return d.l; })), hi = Math.max.apply(null, data.map(function (d) { return d.h; }));
      var pad = (hi - lo) * 0.08; lo -= pad; hi += pad;
      var step = (W - 2 * P) / (HIST + FUT);
      function X(i) { return P + i * step + step / 2; }
      function Y(v) { return H - P - (v - lo) / (hi - lo) * (H - 2 * P); }
      var svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'ch-svg', role: 'img', 'aria-label': t('ui.lab.challenge.chartLabel') });
      svg.appendChild(S('rect', { x: X(HIST) - step / 2, y: 0, width: W - (X(HIST) - step / 2), height: H, class: 'ch-future' }));
      if (!reveal) svg.appendChild(S('text', { x: (X(HIST) - step / 2 + W) / 2, y: H / 2 + 14, 'text-anchor': 'middle', class: 'ch-q' }, '?'));
      var nowX = X(HIST - 1) + step / 2;
      svg.appendChild(S('line', { x1: nowX, x2: nowX, y1: 6, y2: H - 6, class: 'ch-now' }));
      svg.appendChild(S('text', { x: nowX - 6, y: 16, 'text-anchor': 'end', class: 'chart-label' }, t('ui.lab.challenge.now')));
      svg.appendChild(S('line', { x1: P, x2: W - P, y1: Y(data[HIST - 1].c), y2: Y(data[HIST - 1].c), class: 'ch-ref' }));
      all.forEach(function (d, i) {
        var cls = d.c >= d.o ? 'chart-bull' : 'chart-bear', g = S('g', { class: i >= HIST ? 'ch-new' : null });
        if (i >= HIST) g.style.animationDelay = ((i - HIST) * 0.12) + 's';
        g.appendChild(S('line', { x1: X(i), x2: X(i), y1: Y(d.h), y2: Y(d.l), class: cls, 'stroke-width': 1.4 }));
        var top = Y(Math.max(d.o, d.c)), bot = Y(Math.min(d.o, d.c));
        g.appendChild(S('rect', { x: X(i) - step * 0.32, y: top, width: step * 0.64, height: Math.max(1.5, bot - top), rx: 1.5, class: cls }));
        svg.appendChild(g);
      });
      return el('div', { class: 'ch-frame' }, svg);
    }
    function intro() {
      panel.replaceChildren(el('div', { class: 'ch-intro' },
        el('span', { class: 'ch-intro-icon' }, icon('dice')),
        el('p', { text: t('ui.lab.challenge.intro') }),
        el('button', { class: 'btn btn-primary', type: 'button', onclick: function () { st = { round: 0, score: 0, results: [], series: randomSeries(HIST + FUT), answered: false }; play(); } }, icon('play'), t('ui.lab.challenge.start'))));
    }
    function play(feedback) {
      var head = el('div', { class: 'ch-head' },
        el('b', { text: t('ui.lab.challenge.round', { n: st.round + 1, total: ROUNDS }) }), dots(),
        el('span', { class: 'ch-score', text: t('ui.lab.challenge.score', { n: st.score }) }));
      var actions;
      if (!st.answered) {
        actions = el('div', { class: 'ch-actions' },
          el('button', { class: 'btn ch-up', type: 'button', onclick: function () { answer(true); } }, icon('up'), t('ui.lab.challenge.up')),
          el('button', { class: 'btn ch-down', type: 'button', onclick: function () { answer(false); } }, icon('down'), t('ui.lab.challenge.down')));
      } else {
        var last = st.round === ROUNDS - 1;
        actions = el('div', { class: 'ch-actions' },
          feedback,
          el('button', { class: 'btn btn-primary', type: 'button', onclick: function () {
            if (last) return done();
            st.round++; st.answered = false; st.series = randomSeries(HIST + FUT); play();
          } }, last ? t('ui.lab.challenge.seeResult') : t('ui.lab.challenge.next'), icon('right')));
      }
      panel.replaceChildren(head, drawChart(st.answered), actions);
      var first = panel.querySelector('.ch-actions button'); if (first && !feedback) first.focus({ preventScroll: true });
    }
    function answer(saysUp) {
      var d = st.series, now = d[HIST - 1].c, fut = d[HIST + FUT - 1].c, wentUp = fut >= now, right = saysUp === wentUp;
      if (right) st.score++;
      st.results[st.round] = right; st.answered = true;
      var p = fmtPct(api, Math.abs(fut / now - 1), 1);
      var key = (right ? 'right' : 'wrong') + (wentUp ? 'Up' : 'Down');
      play(el('p', { class: 'ch-feedback ' + (right ? 'is-ok' : 'is-ko'), role: 'status' }, icon(right ? 'check' : 'x'), t('ui.lab.challenge.' + key, { p: p })));
    }
    function done() {
      var n = st.score, verdict = n >= 8 ? 'verdictHigh' : n <= 2 ? 'verdictLow' : 'verdictMid';
      panel.replaceChildren(el('div', { class: 'ch-done' },
        el('div', { class: 'ch-big' }, el('b', { text: String(n) }), el('span', { text: '/ ' + ROUNDS })),
        el('h3', { text: t('ui.lab.challenge.doneTitle', { n: n, total: ROUNDS }) }), dots(),
        el('p', { class: 'ch-verdict', text: t('ui.lab.challenge.' + verdict) }),
        el('div', { class: 'callout' }, icon('spark'), el('p', null, el('b', { text: t('ui.lab.challenge.reveal') }), ' ' + t('ui.lab.challenge.lesson'))),
        el('button', { class: 'btn btn-primary', type: 'button', onclick: intro }, icon('refresh'), t('ui.lab.challenge.again'))));
    }
    intro();
  }

  /* ---------- Coste de las comisiones ---------- */
  function fees(host, api) {
    var t = api.t, el = api.el;
    var v = { initial: 10000, monthly: 200, years: 30, gross: 7, feeA: 0.2, feeB: 1.5 };
    var pctF = function (x) { return fmtNum(api, x, 2) + ' %'; };
    var fields = [
      slider(api, { id: 'fe-initial', label: t('ui.lab.fees.initial'), min: 0, max: 100000, step: 500, value: v.initial, fmt: api.money, onInput: function (x) { v.initial = x; update(); } }),
      slider(api, { id: 'fe-monthly', label: t('ui.lab.fees.monthly'), min: 0, max: 2000, step: 10, value: v.monthly, fmt: api.money, onInput: function (x) { v.monthly = x; update(); } }),
      slider(api, { id: 'fe-years', label: t('ui.lab.fees.years'), min: 1, max: 45, step: 1, value: v.years, fmt: function (x) { return String(x); }, onInput: function (x) { v.years = x; update(); } }),
      slider(api, { id: 'fe-gross', label: t('ui.lab.fees.gross'), min: 0, max: 12, step: 0.5, value: v.gross, fmt: function (x) { return fmtNum(api, x, 1) + ' %'; }, onInput: function (x) { v.gross = x; update(); } }),
      slider(api, { id: 'fe-a', label: t('ui.lab.fees.feeA'), min: 0, max: 3, step: 0.05, value: v.feeA, fmt: pctF, hint: t('ui.lab.fees.hintA'), onInput: function (x) { v.feeA = x; update(); } }),
      slider(api, { id: 'fe-b', label: t('ui.lab.fees.feeB'), min: 0, max: 3, step: 0.05, value: v.feeB, fmt: pctF, hint: t('ui.lab.fees.hintB'), onInput: function (x) { v.feeB = x; update(); } })
    ];
    var kA = kpi(api, t('ui.lab.fees.finalA')), kB = kpi(api, t('ui.lab.fees.finalB')), kD = kpi(api, t('ui.lab.fees.diff'), 'total');
    var box = el('div', { class: 'figure-frame sim-chart' }), summary = el('p', { class: 'fee-summary' });
    var legend = el('div', { class: 'legend' });
    host.appendChild(toolHead(api, t('ui.lab.fees.h'), t('ui.lab.fees.p')));
    host.appendChild(el('div', { class: 'panel' }, el('div', { class: 'sim-grid' },
      el('div', { class: 'sim-controls' }, fields.map(function (f) { return f.node; })),
      el('div', { class: 'sim-output' }, el('div', { class: 'kpis' }, kA.node, kB.node, kD.node), summary,
        el('figure', { class: 'figure' }, box, legend), el('p', { class: 'sim-note', text: t('ui.lab.fees.note') })))));
    var last = null;
    function run(fee) {
      var r = (v.gross - fee) / 100 / 12, bal = v.initial, arr = [bal];
      for (var m = 1; m <= v.years * 12; m++) { bal = bal * (1 + r) + v.monthly; if (m % 12 === 0) arr.push(bal); }
      return arr;
    }
    function draw() {
      if (!last) return;
      lineChart(box, [{ values: last[0], cls: 'chart-line', label: t('ui.lab.fees.legendA') }, { values: last[1], cls: 'chart-line-bear', label: t('ui.lab.fees.legendB') }], api,
        { label: t('ui.lab.fees.chartLabel'), gapBetween: true, xLabel: function (i) { return t('ui.sim.tipYear', { n: i }); } });
    }
    function update() {
      var a = run(v.feeA), b = run(v.feeB), fa = a[a.length - 1], fb = b[b.length - 1], diff = fa - fb;
      kA.value.textContent = api.money(fa); kB.value.textContent = api.money(fb); kD.value.textContent = api.money(Math.abs(diff));
      summary.textContent = diff > 0 && fa > 0 ? t('ui.lab.fees.summary', { amount: api.money(diff), p: fmtPct(api, diff / fa, 0), d: fmtNum(api, v.feeB - v.feeA, 2) }) : '';
      legend.replaceChildren(el('span', null, el('i', { class: 'l-cobalt' }), t('ui.lab.fees.legendA') + ' (' + pctF(v.feeA) + ')'),
        el('span', null, el('i', { class: 'l-bear' }), t('ui.lab.fees.legendB') + ' (' + pctF(v.feeB) + ')'));
      last = [a, b]; draw();
    }
    update(); requestAnimationFrame(draw); onResize(box, draw);
  }

  /* ---------- Diseña tu cartera ---------- */
  var ASSETS = ['equity', 'bonds', 'cash', 'gold'];
  var MU = { equity: 0.07, bonds: 0.03, cash: 0.02, gold: 0.04 }, SIG = { equity: 0.16, bonds: 0.06, cash: 0.01, gold: 0.15 };
  var RHO = { 'equity-bonds': 0.1, 'equity-cash': 0, 'equity-gold': 0.05, 'bonds-cash': 0.1, 'bonds-gold': 0.2, 'cash-gold': 0 };
  function portfolioStats(w) {
    var mu = 0, v = 0;
    ASSETS.forEach(function (a) { mu += w[a] / 100 * MU[a]; });
    ASSETS.forEach(function (a) {
      ASSETS.forEach(function (b) {
        var r = a === b ? 1 : (RHO[a + '-' + b] !== undefined ? RHO[a + '-' + b] : RHO[b + '-' + a]);
        v += (w[a] / 100) * (w[b] / 100) * SIG[a] * SIG[b] * r;
      });
    });
    var sd = Math.sqrt(v), level = sd < 0.03 ? 1 : sd < 0.07 ? 2 : sd < 0.11 ? 3 : sd < 0.15 ? 4 : 5;
    return { mu: mu, sd: sd, bad: mu - 2 * sd, good: mu + 2 * sd, level: level };
  }
  function rebalance(w, changed, value) {
    // Ajusta el resto de activos en proporción para que la suma sea siempre 100
    var others = ASSETS.filter(function (a) { return a !== changed; }), rest = 100 - value;
    var sum = others.reduce(function (s, a) { return s + w[a]; }, 0), out = {}, raw = {};
    out[changed] = value;
    others.forEach(function (a) { raw[a] = sum > 0 ? w[a] / sum * rest : rest / others.length; out[a] = Math.floor(raw[a]); });
    var left = 100 - ASSETS.reduce(function (s, a) { return s + out[a]; }, 0);
    others.slice().sort(function (a, b) { return (raw[b] - out[b]) - (raw[a] - out[a]); }).forEach(function (a) { if (left > 0) { out[a]++; left--; } });
    return out;
  }
  function portfolio(host, api) {
    var t = api.t, el = api.el, icon = api.icon;
    var w = { equity: 50, bonds: 40, cash: 5, gold: 5 };
    var PRESETS = [[20, 60, 15, 5], [50, 40, 5, 5], [80, 15, 0, 5], [100, 0, 0, 0]];
    var fields = {};
    ASSETS.forEach(function (a) {
      fields[a] = slider(api, { id: 'pf-' + a, label: t('ui.lab.portfolio.' + a), min: 0, max: 100, step: 5, value: w[a], fmt: function (x) { return x + ' %'; },
        onInput: function (x) { w = rebalance(w, a, x); sync(a); update(); } });
      fields[a].node.classList.add('pf-field', 'pf-' + a);
    });
    function sync(except) { ASSETS.forEach(function (a) { if (a !== except) fields[a].set(w[a]); }); }
    var presets = el('div', { class: 'presets', role: 'group', 'aria-label': t('ui.lab.portfolio.presetsLabel') }, t('ui.lab.portfolio.presets').map(function (name, i) {
      return el('button', { class: 'chip', type: 'button', onclick: function () { ASSETS.forEach(function (a, k) { w[a] = PRESETS[i][k]; }); sync(); update(); } }, name);
    }));
    var bar = el('div', { class: 'pf-bar', 'aria-hidden': 'true' });
    var kR = kpi(api, t('ui.lab.portfolio.expReturn')), kV = kpi(api, t('ui.lab.portfolio.vol')), kB = kpi(api, t('ui.lab.portfolio.badYear'), 'total');
    var riskBox = el('div', { class: 'pf-risk' }), range = el('div', { class: 'pf-range' }), badNote = el('p', { class: 'fee-summary' });
    host.appendChild(toolHead(api, t('ui.lab.portfolio.h'), t('ui.lab.portfolio.p')));
    host.appendChild(el('div', { class: 'panel' }, el('div', { class: 'sim-grid' },
      el('div', { class: 'sim-controls' }, el('p', { class: 'field hint', text: t('ui.lab.portfolio.presetsLabel') }), presets,
        ASSETS.map(function (a) { return fields[a].node; }), el('p', { class: 'field-hint', text: t('ui.lab.portfolio.autoHint') })),
      el('div', { class: 'sim-output' }, bar, el('div', { class: 'kpis' }, kR.node, kV.node, kB.node), badNote, riskBox,
        el('figure', { class: 'figure' }, el('figcaption', { class: 'pf-range-title', text: t('ui.lab.portfolio.rangeLabel') }), range),
        el('p', { class: 'ps-msg is-warn' }, api.icon('alert'), t('ui.lab.portfolio.tails')),
        el('p', { class: 'sim-note', text: t('ui.lab.portfolio.assumptions') }),
        el('p', { class: 'sim-note' }, icon('info'), ' ' + t('ui.lab.portfolio.note'))))));
    function update() {
      var s = portfolioStats(w);
      bar.replaceChildren.apply(bar, ASSETS.filter(function (a) { return w[a] > 0; }).map(function (a) {
        var seg = el('span', { class: 'pf-seg pf-' + a, title: t('ui.lab.portfolio.' + a) + ' ' + w[a] + ' %' }, w[a] >= 10 ? w[a] + ' %' : '');
        seg.style.width = w[a] + '%'; return seg;
      }));
      kR.value.textContent = fmtPct(api, s.mu, 1); kV.value.textContent = fmtPct(api, s.sd, 1); kB.value.textContent = fmtPct(api, s.bad, 1);
      badNote.textContent = t('ui.lab.portfolio.badYearNote', { amount: api.money(10000 * (1 + s.bad)) });
      var meter = el('span', { class: 'risk-meter risk-' + s.level, role: 'img', 'aria-label': t('ui.level.riskLabel', { n: s.level }) });
      for (var k = 1; k <= 5; k++) meter.appendChild(el('i', { class: k <= s.level ? 'on' : null }));
      riskBox.replaceChildren(el('span', { text: t('ui.lab.portfolio.riskLevel') }), meter, el('b', { text: t('ui.lab.portfolio.riskNames')[s.level - 1] }));
      // Abanico de resultados en un año: de -40 % a +40 %
      var W = 600, H = 92, P = 26;
      function X(x) { return P + (clamp(x, -0.4, 0.4) + 0.4) / 0.8 * (W - 2 * P); }
      var svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': t('ui.lab.portfolio.rangeLabel') + ': ' + fmtPct(api, s.bad, 1) + ' / ' + fmtPct(api, s.good, 1) });
      svg.appendChild(S('line', { x1: P, x2: W - P, y1: 44, y2: 44, class: 'chart-axis' }));
      [-0.4, -0.2, 0, 0.2, 0.4].forEach(function (x) {
        svg.appendChild(S('line', { x1: X(x), x2: X(x), y1: 40, y2: 48, class: 'chart-axis' }));
        svg.appendChild(S('text', { x: X(x), y: 64, 'text-anchor': 'middle', class: 'chart-label' }, fmtPct(api, x, 0)));
      });
      svg.appendChild(S('rect', { x: X(s.bad), y: 34, width: Math.max(2, X(s.good) - X(s.bad)), height: 20, rx: 10, class: 'pf-band' }));
      svg.appendChild(S('rect', { x: X(0) - 1, y: 28, width: 2, height: 32, class: 'pf-zero' }));
      svg.appendChild(S('circle', { cx: X(s.mu), cy: 44, r: 7, class: 'chart-dot' }));
      svg.appendChild(S('text', { x: X(s.bad), y: 24, 'text-anchor': 'middle', class: 'chart-label-strong pf-bad' }, t('ui.lab.portfolio.rangeBad') + ' ' + fmtPct(api, s.bad, 0)));
      svg.appendChild(S('text', { x: X(s.good), y: 24, 'text-anchor': 'middle', class: 'chart-label-strong pf-good' }, t('ui.lab.portfolio.rangeGood') + ' ' + fmtPct(api, s.good, 0)));
      svg.appendChild(S('text', { x: X(s.mu), y: 84, 'text-anchor': 'middle', class: 'chart-label' }, t('ui.lab.portfolio.rangeExp') + ' ' + fmtPct(api, s.mu, 1)));
      range.replaceChildren(svg);
    }
    update();
  }

  /* ---------- Tamaño de posición ---------- */
  function position(host, api) {
    var t = api.t, el = api.el, icon = api.icon;
    var v = { capital: 10000, risk: 1, entry: 50, stop: 47, target: 59 };
    function numField(key, label, step) {
      var id = 'ps-' + key;
      var input = el('input', { class: 'input', type: 'number', id: id, inputmode: 'decimal', min: '0', step: String(step), value: String(v[key]) });
      input.addEventListener('input', function () { var x = parseFloat(String(input.value).replace(',', '.')); v[key] = isFinite(x) && x >= 0 ? Math.min(x, 1e9) : 0; update(); });
      return el('div', { class: 'field' }, el('label', { for: id, text: label }), input);
    }
    var risk = slider(api, { id: 'ps-risk', label: t('ui.lab.position.risk'), min: 0.25, max: 5, step: 0.25, value: v.risk, fmt: function (x) { return fmtNum(api, x, 2) + ' %'; }, onInput: function (x) { v.risk = x; update(); } });
    var kS = kpi(api, t('ui.lab.position.shares'), 'total'), kI = kpi(api, t('ui.lab.position.invest')), kL = kpi(api, t('ui.lab.position.riskAmt'));
    var kRR = kpi(api, t('ui.lab.position.rr'));
    var msgs = el('div', { class: 'ps-msgs', 'aria-live': 'polite' }), ladder = el('div', { class: 'ps-ladder' }), be = el('p', { class: 'fee-summary' }), sub = el('p', { class: 'ps-sub' });
    host.appendChild(toolHead(api, t('ui.lab.position.h'), t('ui.lab.position.p')));
    host.appendChild(el('div', { class: 'panel' }, el('div', { class: 'sim-grid' },
      el('div', { class: 'sim-controls' }, numField('capital', t('ui.lab.position.capital'), 100), risk.node,
        el('div', { class: 'ps-prices' }, numField('entry', t('ui.lab.position.entry'), 0.01), numField('stop', t('ui.lab.position.stop'), 0.01), numField('target', t('ui.lab.position.target'), 0.01))),
      el('div', { class: 'sim-output' }, msgs, el('div', { class: 'kpis ps-kpis' }, kS.node, kI.node, kL.node, kRR.node), sub, be, ladder,
        el('p', { class: 'sim-note' }, icon('info'), ' ' + t('ui.lab.position.note'))))));
    function update() {
      var errs = [], warns = [], perShare = v.entry - v.stop, riskAmt = v.capital * v.risk / 100;
      if (!(perShare > 0)) errs.push(t('ui.lab.position.errStop'));
      var hasTarget = v.target > v.entry;
      if (!hasTarget) errs.push(t('ui.lab.position.errTarget'));
      var shares = perShare > 0 ? Math.floor(riskAmt / perShare) : 0, value = shares * v.entry, loss = shares * Math.max(0, perShare);
      var rr = perShare > 0 && hasTarget ? (v.target - v.entry) / perShare : null;
      if (value > v.capital && shares > 0) warns.push(t('ui.lab.position.warnSize'));
      if (v.risk > 2) warns.push(t('ui.lab.position.warnRisk'));
      msgs.replaceChildren.apply(msgs, errs.map(function (m) { return el('p', { class: 'ps-msg is-err' }, icon('alert'), m); })
        .concat(warns.map(function (m) { return el('p', { class: 'ps-msg is-warn' }, icon('alert'), m); })));
      kS.value.textContent = fmtNum(api, shares); kI.value.textContent = api.money(value); kL.value.textContent = api.money(loss);
      kRR.value.textContent = rr === null ? '—' : t('ui.lab.position.rrVal', { n: fmtNum(api, rr, 1) });
      sub.textContent = v.capital > 0 ? t('ui.lab.position.ofCapital', { p: fmtPct(api, value / v.capital, 0) }) : '';
      be.textContent = rr === null ? '' : t('ui.lab.position.breakevenNote', { p: fmtPct(api, 1 / (1 + rr), 0) });
      drawLadder(shares, hasTarget, perShare > 0);
    }
    function drawLadder(shares, hasTarget, okStop) {
      if (!okStop) { ladder.replaceChildren(); return; }
      var W = 600, H = 190, P = 20, top = hasTarget ? v.target : v.entry + (v.entry - v.stop), bot = v.stop, span = top - bot || 1;
      function Y(p) { return P + (top - p) / span * (H - 2 * P); }
      var priceF = new Intl.NumberFormat(api.locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      var svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': t('ui.lab.position.chartLabel') });
      if (hasTarget) svg.appendChild(S('rect', { x: 150, y: Y(v.target), width: 300, height: Y(v.entry) - Y(v.target), class: 'ps-win' }));
      svg.appendChild(S('rect', { x: 150, y: Y(v.entry), width: 300, height: Y(v.stop) - Y(v.entry), class: 'ps-loss' }));
      function lvl(p, cls, label, amount) {
        svg.appendChild(S('line', { x1: 150, x2: 450, y1: Y(p), y2: Y(p), class: cls }));
        svg.appendChild(S('text', { x: 140, y: Y(p) + 4, 'text-anchor': 'end', class: 'chart-label-strong' }, label));
        svg.appendChild(S('text', { x: 460, y: Y(p) + 4, class: 'chart-label' }, priceF.format(p) + (amount ? '  ' + amount : '')));
      }
      if (hasTarget) lvl(v.target, 'chart-dash-bull', t('ui.lab.position.target').split(' (')[0], '+' + api.money(shares * (v.target - v.entry)));
      lvl(v.entry, 'chart-dash-cobalt', t('ui.lab.position.entry'), '');
      lvl(v.stop, 'chart-dash-bear', t('ui.lab.position.stop'), '−' + api.money(shares * (v.entry - v.stop)));
      ladder.replaceChildren(svg);
    }
    update();
  }

  window.Interactive = { heroChart: heroChart, challenge: challenge, fees: fees, portfolio: portfolio, position: position,
    classify: classify, portfolioStats: portfolioStats, rebalance: rebalance };
})();
