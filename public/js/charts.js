/* Gráficos SVG propios de Monibas Capital.
   Cada función recibe las etiquetas traducidas del idioma activo y devuelve
   { svg, legend } donde svg es una cadena y legend una lista opcional.
   Todas las etiquetas se escapan antes de insertarse. */
(function () {
  'use strict';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function svg(w, h, body, label) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(label || '') + '">' + body + '</svg>';
  }
  function text(x, y, s, cls, anchor) {
    return '<text x="' + x + '" y="' + y + '" class="' + (cls || 'chart-label') + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + '>' + esc(s) + '</text>';
  }
  function pts(arr) { return arr.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); }

  var Charts = {};

  /* Poder de compra: dinero parado frente a invertido */
  Charts.inflation = function (L, fmt) {
    var W = 640, H = 300, base = 250, top = 40, years = [0, 5, 10, 15, 20];
    var max = 2300, out = '';
    out += '<line x1="40" y1="' + base + '" x2="620" y2="' + base + '" class="chart-axis"/>';
    years.forEach(function (y, i) {
      var idle = 1000 / Math.pow(1.03, y);
      var inv = 1000 * Math.pow(1.07, y) / Math.pow(1.03, y);
      var cx = 80 + i * 120;
      var hA = (idle / max) * (base - top), hB = (inv / max) * (base - top);
      out += '<rect class="chart-bar-a" x="' + (cx - 34) + '" y="' + (base - hA) + '" width="30" height="' + hA + '" rx="4"/>';
      out += '<rect class="chart-bar-b" x="' + (cx + 4) + '" y="' + (base - hB) + '" width="30" height="' + hB + '" rx="4"/>';
      out += text(cx - 19, base - hA - 8, fmt(idle), 'chart-label', 'middle');
      out += text(cx + 19, base - hB - 8, fmt(inv), 'chart-label-strong', 'middle');
      out += text(cx, base + 22, L.year.replace('{n}', y), 'chart-label', 'middle');
    });
    out += text(40, 22, L.note, 'chart-label');
    return { svg: svg(W, H, out, L.note), legend: [{ cls: 'l-muted', label: L.idle }, { cls: 'l-bull', label: L.invested }] };
  };

  /* Tendencia con soporte y resistencia */
  Charts.line = function (L) {
    var out = '';
    out += '<line x1="50" y1="20" x2="50" y2="220" class="chart-axis"/><line x1="50" y1="220" x2="610" y2="220" class="chart-axis"/>';
    out += text(56, 30, L.price) + text(604, 240, L.time, 'chart-label', 'end');
    out += '<line x1="60" y1="118" x2="600" y2="118" class="chart-dash-bear"/>' + text(596, 110, L.resistance, 'chart-label-strong', 'end');
    out += '<line x1="60" y1="190" x2="600" y2="190" class="chart-dash-bull"/>' + text(596, 208, L.support, 'chart-label-strong', 'end');
    var p = [[60, 196], [105, 168], [145, 192], [190, 146], [230, 188], [275, 122], [320, 160], [360, 118], [405, 150], [450, 96], [500, 128], [550, 74], [600, 104]];
    out += '<polyline points="' + pts(p) + '" class="chart-line"/>';
    out += '<circle cx="600" cy="104" r="5" class="chart-dot"/>';
    return { svg: svg(640, 250, out, L.resistance + ' / ' + L.support) };
  };

  /* Anatomía de las velas japonesas */
  Charts.candle = function (L) {
    var out = '';
    out += '<line x1="120" y1="40" x2="120" y2="230" class="chart-bull" stroke-width="2"/>';
    out += '<rect x="98" y="88" width="44" height="86" rx="3" class="chart-bull"/>';
    [[60, L.high], [88, L.close], [174, L.open], [230, L.low]].forEach(function (d) {
      out += '<line x1="146" y1="' + d[0] + '" x2="178" y2="' + d[0] + '" class="chart-axis"/>';
      out += text(184, d[0] + 4, d[1], 'chart-label-strong');
    });
    out += '<line x1="120" y1="40" x2="146" y2="60" class="chart-axis"/>';
    out += text(120, 262, L.bull, 'chart-label-strong', 'middle');

    out += '<line x1="330" y1="46" x2="330" y2="224" class="chart-bear" stroke-width="2"/>';
    out += '<rect x="308" y="80" width="44" height="80" rx="3" class="chart-bear"/>';
    out += text(362, 86, L.open, 'chart-label');
    out += text(362, 164, L.close, 'chart-label');
    out += text(330, 262, L.bear, 'chart-label-strong', 'middle');

    var seq = [[0, 170, 210, 180, 200, 1], [36, 150, 196, 170, 186, 0], [72, 120, 176, 130, 164, 1], [108, 96, 140, 104, 130, 1], [144, 84, 128, 100, 118, 0], [180, 60, 110, 70, 100, 1], [216, 44, 92, 50, 82, 1]];
    seq.forEach(function (c) {
      var x = 440 + c[0], cls = c[5] ? 'chart-bull' : 'chart-bear';
      out += '<line x1="' + (x + 9) + '" y1="' + c[1] + '" x2="' + (x + 9) + '" y2="' + c[2] + '" class="' + cls + '" stroke-width="1.6"/>';
      out += '<rect x="' + x + '" y="' + c[3] + '" width="18" height="' + (c[4] - c[3]) + '" rx="2" class="' + cls + '"/>';
    });
    out += text(530, 262, L.sequence, 'chart-label', 'middle');
    return { svg: svg(640, 275, out, L.bull + ' / ' + L.bear) };
  };

  /* Precio y media móvil */
  Charts.ma = function (L) {
    var n = 60, price = [], ma = [], out = '';
    for (var i = 0; i < n; i++) {
      var dip = (i > 30 && i < 48) ? -12 * Math.sin((i - 30) / 18 * Math.PI) : 0;
      var v = 100 + i * 0.8 + Math.sin(i / 3.1) * 6 + Math.sin(i / 1.3) * 3 + dip;
      price.push(v);
    }
    for (var j = 0; j < n; j++) {
      var s = 0, k = 0;
      for (var m = Math.max(0, j - 9); m <= j; m++) { s += price[m]; k++; }
      ma.push(s / k);
    }
    var min = Math.min.apply(null, price) - 4, max = Math.max.apply(null, price) + 4;
    function xy(arr) { return arr.map(function (v, i) { return [50 + i * (550 / (n - 1)), 210 - (v - min) / (max - min) * 180]; }); }
    out += '<line x1="50" y1="220" x2="610" y2="220" class="chart-axis"/>';
    out += '<polyline points="' + pts(xy(price)) + '" class="chart-thin"/>';
    out += '<polyline points="' + pts(xy(ma)) + '" class="chart-line-2"/>';
    return { svg: svg(640, 235, out, L.price + ' / ' + L.ma), legend: [{ cls: 'l-muted', label: L.price }, { cls: 'l-amber', label: L.ma }] };
  };

  /* Mapa de riesgo y rentabilidad (ilustrativo) */
  Charts.risk = function (L) {
    var out = '', X0 = 60, Y0 = 290, Wd = 540, Hd = 250;
    out += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + (X0 + Wd) + '" y2="' + Y0 + '" class="chart-axis"/>';
    out += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + (Y0 - Hd) + '" class="chart-axis"/>';
    out += text(X0 + Wd, Y0 + 24, L.x, 'chart-label', 'end');
    out += '<text x="22" y="' + (Y0 - Hd) + '" class="chart-label" transform="rotate(-90 22 ' + (Y0 - Hd) + ')" text-anchor="end">' + esc(L.y) + '</text>';
    out += text(X0 + 12, 26, L.note, 'chart-label', 'start');
    // [x, y, radio, nivel de riesgo 1-5]: el color va de verde (bajo) a rojo (muy alto)
    var pos = [[0.07, 0.1, 16, 1], [0.24, 0.28, 20, 2], [0.47, 0.55, 26, 3], [0.72, 0.7, 24, 4], [0.62, 0.42, 22, 4], [0.9, 0.84, 30, 5]];
    pos.forEach(function (p, i) {
      var cx = X0 + p[0] * Wd, cy = Y0 - p[1] * Hd;
      out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + p[2] + '" class="chart-bubble risk-' + p[3] + '"/>';
      if (p[0] > 0.8) out += text(cx, cy - p[2] - 10, L.items[i], 'chart-label-strong', 'middle');
      else out += text(cx + p[2] + 8, cy + 5, L.items[i], 'chart-label-strong', 'start');
    });
    return { svg: svg(640, 320, out, L.x + ' / ' + L.y) };
  };

  /* Órdenes respecto al precio */
  Charts.orders = function (L) {
    var out = '';
    var p = [[40, 170], [90, 150], [130, 162], [180, 132], [230, 146], [280, 118], [330, 130], [370, 124]];
    out += '<polyline points="' + pts(p) + '" class="chart-line"/>';
    out += '<circle cx="370" cy="124" r="6" class="chart-dot"/>';
    function lvl(y, cls, label) {
      return '<line x1="380" y1="' + y + '" x2="600" y2="' + y + '" class="' + cls + '"/>' + text(600, y - 8, label, 'chart-label-strong', 'end');
    }
    out += lvl(56, 'chart-dash-bull', L.take);
    out += lvl(124, 'chart-dash-cobalt', L.current);
    out += lvl(176, 'chart-dash-cobalt', L.limitBuy);
    out += lvl(222, 'chart-dash-bear', L.stop);
    return { svg: svg(640, 240, out, L.current) };
  };

  /* Cartera de ejemplo (donut) */
  Charts.donut = function (L) {
    var vals = [60, 30, 5, 5], cx = 150, cy = 140, r = 100, ri = 62, a0 = -Math.PI / 2, out = '', legend = [];
    var cls = ['l-cobalt', 'l-bull', 'l-amber', 'l-bear'];
    vals.forEach(function (v, i) {
      var a1 = a0 + (v / 100) * Math.PI * 2, large = v > 50 ? 1 : 0;
      var p = [cx + r * Math.cos(a0), cy + r * Math.sin(a0), cx + r * Math.cos(a1), cy + r * Math.sin(a1), cx + ri * Math.cos(a1), cy + ri * Math.sin(a1), cx + ri * Math.cos(a0), cy + ri * Math.sin(a0)];
      out += '<path class="chart-seg-' + i + '" d="M' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' + p[2].toFixed(1) + ' ' + p[3].toFixed(1) + ' L' + p[4].toFixed(1) + ' ' + p[5].toFixed(1) + ' A' + ri + ' ' + ri + ' 0 ' + large + ' 0 ' + p[6].toFixed(1) + ' ' + p[7].toFixed(1) + 'Z"/>';
      legend.push({ cls: cls[i], label: v + ' % · ' + L.items[i] });
      a0 = a1;
    });
    out += text(cx, cy + 6, L.center, 'chart-label-strong', 'middle');
    vals.forEach(function (v, i) {
      out += '<rect x="300" y="' + (72 + i * 40) + '" width="16" height="16" rx="4" class="chart-seg-' + i + '"/>';
      out += text(326, 85 + i * 40, v + ' %  ' + L.items[i], 'chart-label-strong');
    });
    return { svg: svg(640, 280, out, L.center) };
  };

  function wave(x0, x1, yMid, amp, periods, phase) {
    var arr = [];
    for (var x = x0; x <= x1; x += 4) {
      arr.push([x, yMid - amp * Math.sin(((x - x0) / (x1 - x0)) * periods * Math.PI * 2 + phase)]);
    }
    return arr;
  }

  /* Ciclo económico */
  Charts.cycle = function (L) {
    var out = '<line x1="30" y1="140" x2="610" y2="140" class="chart-grid"/>';
    var w = wave(30, 610, 140, 80, 1.5, -Math.PI / 2);
    out += '<polyline points="' + pts(w) + '" class="chart-line"/>';
    var labels = [[90, 150, 3, 'end'], [150, 80, 0, 'end'], [223, 44, 1, 'middle'], [332, 118, 2, 'start'], [417, 248, 4, 'middle']];
    labels.forEach(function (l) { out += text(l[0], l[1], L.phases[l[2]], 'chart-label-strong', l[3]); });
    out += '<circle cx="223" cy="60" r="5" class="chart-dot"/><circle cx="417" cy="220" r="5" class="chart-dot"/>';
    return { svg: svg(640, 260, out, L.phases.join(', ')) };
  };

  /* Ciclo emocional del inversor */
  Charts.emotion = function (L) {
    var p = [[30, 220], [90, 190], [150, 130], [205, 70], [240, 58], [275, 72], [320, 120], [360, 180], [400, 228], [440, 240], [490, 214], [540, 176], [610, 140]];
    var out = '<polyline points="' + pts(p) + '" class="chart-line"/>';
    var lab = [[120, 150, 0, 'end'], [240, 44, 1, 'middle'], [290, 70, 2, 'start'], [330, 132, 3, 'start'], [372, 196, 4, 'start'], [440, 262, 5, 'middle'], [500, 204, 6, 'end'], [560, 160, 7, 'end']];
    lab.forEach(function (l) { out += text(l[0], l[1], L.phases[l[2]], 'chart-label-strong', l[3]); });
    out += '<circle cx="240" cy="58" r="6" class="chart-bear"/><circle cx="440" cy="240" r="6" class="chart-bull"/>';
    out += text(40, 30, '▲ ' + L.top, 'chart-label');
    out += text(40, 50, '▼ ' + L.bottom, 'chart-label');
    return { svg: svg(640, 280, out, L.top + ' / ' + L.bottom) };
  };

  /* Ilustración animada de la portada */
  Charts.hero = function () {
    var out = '', n = 22, v = 120, candles = [], seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    for (var g = 0; g < 5; g++) out += '<line x1="0" y1="' + (40 + g * 55) + '" x2="560" y2="' + (40 + g * 55) + '" class="chart-hero-grid"/>';
    for (var i = 0; i < n; i++) {
      var open = v, close = v + (rnd() - 0.35) * 18;
      var hi = Math.max(open, close) + rnd() * 8, lo = Math.min(open, close) - rnd() * 8;
      candles.push([open, close, hi, lo]);
      v = close;
    }
    var min = Math.min.apply(null, candles.map(function (c) { return c[3]; })) - 6;
    var max = Math.max.apply(null, candles.map(function (c) { return c[2]; })) + 6;
    function Y(val) { return 270 - (val - min) / (max - min) * 240; }
    var line = [];
    candles.forEach(function (c, i) {
      var x = 16 + i * 25, up = c[1] >= c[0], cls = up ? 'chart-hero-bull' : 'chart-hero-bear';
      out += '<g class="hero-candle"><line x1="' + (x + 6) + '" y1="' + Y(c[2]).toFixed(1) + '" x2="' + (x + 6) + '" y2="' + Y(c[3]).toFixed(1) + '" class="' + cls + '" stroke-width="1.5"/>';
      var yTop = Y(Math.max(c[0], c[1])), yBot = Y(Math.min(c[0], c[1]));
      out += '<rect x="' + x + '" y="' + yTop.toFixed(1) + '" width="12" height="' + Math.max(2, yBot - yTop).toFixed(1) + '" rx="2" class="' + cls + '"/></g>';
      line.push([x + 6, Y((c[0] + c[1]) / 2)]);
    });
    out += '<polyline points="' + pts(line) + '" class="chart-hero-line hero-line"/>';
    return svg(560, 290, out, '');
  };

  window.Charts = Charts;
})();
