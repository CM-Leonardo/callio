(function () {
  const poly = (fn, n = 160) => { let d = ''; for (let k = 0; k <= n; k++) { const t = 2 * Math.PI * k / n; const r = fn(t); d += (k ? 'L' : 'M') + (100 + r * Math.cos(t - Math.PI / 2)).toFixed(2) + ' ' + (100 + r * Math.sin(t - Math.PI / 2)).toFixed(2); } return d + 'Z'; };
  const softstar = s => poly(t => s * (80 + 7 * Math.cos(7 * t + Math.PI)));
  const hex = s => { let d = ''; for (let k = 0; k < 6; k++) { const a = Math.PI / 3 * k; d += (k ? 'L' : 'M') + (100 + s * 84 * Math.sin(a)).toFixed(2) + ' ' + (100 - s * 84 * Math.cos(a)).toFixed(2); } return d + 'Z'; };
  const SH = { hex1: hex(1), hex8: hex(.8), ss1: softstar(1.02), ss8: softstar(.82), ss9: softstar(.92) };

  const G = {
    book: '<path d="M50 30 C40 24 26 23 14 26 V74 C26 71 40 72 50 79 Z"/><path d="M50 30 C60 24 74 23 86 26 V74 C74 71 60 72 50 79 Z"/>',
    flame: '<path d="M50 10 C58 30 78 40 78 61 C78 78 65 90 50 90 C35 90 22 78 22 61 C22 46 32 38 37 27 C40 38 44 44 50 46 C52 33 47 23 50 10Z"/>',
    hourglass: '<path d="M28 12 H72 V20 C72 36 60 44 55 50 C60 56 72 64 72 80 V88 H28 V80 C28 64 40 56 45 50 C40 44 28 36 28 20Z"/>',
    sunrise: '<path d="M24 66 A26 26 0 0 1 76 66 Z"/><rect x="12" y="70" width="76" height="9" rx="4.5"/><rect x="46" y="18" width="8" height="18" rx="4"/><rect x="17" y="34" width="8" height="18" rx="4" transform="rotate(-45 21 43)"/><rect x="75" y="34" width="8" height="18" rx="4" transform="rotate(45 79 43)"/>',
    bookmark: '<path d="M30 12 H70 Q74 12 74 16 V88 L50 72 L26 88 V16 Q26 12 30 12Z"/>',
    stack: '<rect x="16" y="64" width="68" height="16" rx="4"/><rect x="24" y="44" width="58" height="16" rx="4"/><rect x="18" y="24" width="54" height="16" rx="4"/>',
    calendar: '<rect x="14" y="20" width="72" height="66" rx="10"/><rect x="28" y="10" width="9" height="18" rx="4.5"/><rect x="63" y="10" width="9" height="18" rx="4.5"/><path d="M32 56 L45 69 L70 42" fill="none" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>',
    compass: '<circle cx="50" cy="50" r="38"/><path d="M50 18 L60 50 L50 82 L40 50 Z" fill="#2c1d4c" fill-opacity=".35" stroke-width="2.5"/>',
    people: '<circle cx="34" cy="34" r="13"/><circle cx="66" cy="34" r="13"/><path d="M12 82 C12 62 22 54 34 54 C46 54 56 62 56 82 Z"/><path d="M44 82 C44 62 54 54 66 54 C78 54 88 62 88 82 Z"/>',
    scroll: '<path d="M30 14 H80 Q86 14 86 20 V76 H30 Z"/><circle cx="24" cy="22" r="10"/><rect x="12" y="72" width="80" height="18" rx="9"/><path d="M98 22 C84 22 70 34 64 52 L68 56 C86 50 98 38 98 22 Z"/>',
  };
  const INK = '#2c1d4c';
  // key -> glyph or number
  const CAT = {
    maratona: { n: '30', u: 'MIN', en: 'p', g: 'hourglass' },
    sete: { g: 'flame', en: 'p' },
    voltou: { g: 'bookmark', en: 'b' },
    madrugadora: { g: 'sunrise', en: 'y' },
    p100: { n: '100', u: 'PÁGINAS', en: 'y', g: 'book' },
    p1000: { n: '1.000', u: 'PÁGINAS', en: 'p', g: 'book' },
    livros10: { n: '10', u: 'LIVROS', en: 'b', g: 'stack' },
    chamas: { g: 'flame', en: 'y' },
    review: { g: 'scroll', en: 'b' },
    tresdias: { g: 'calendar', en: 'b' },
    sessao20: { n: '20', u: 'MIN', en: 'p', g: 'hourglass' },
    termine: { g: 'book', en: 'y' },
    maratonista: { n: '2H', u: 'NA SEMANA', en: 'p', g: 'hourglass' },
    cartografo: { g: 'compass', en: 'b' },
    fundador: { g: 'people', en: 'y' },
  };
  const TINT = { p: '#62449a', y: '#e9c55a', b: '#7fb2ea' };
  const ORB = { p: '#f5de8a', y: '#9682bb', b: '#9682bb' };

  const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="cb-m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".28" stop-color="#e4def2"/><stop offset=".5" stop-color="#8f86a8"/><stop offset=".62" stop-color="#f6f3fc"/><stop offset=".85" stop-color="#c9c1dc"/><stop offset="1" stop-color="#8f86a8"/></linearGradient>
<linearGradient id="cb-md" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f6788"/><stop offset="1" stop-color="#3a3450"/></linearGradient>
<linearGradient id="cb-holo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfe6ff"/><stop offset=".18" stop-color="#b9a4f0"/><stop offset=".36" stop-color="#ffd6f0"/><stop offset=".52" stop-color="#fff2b0"/><stop offset=".68" stop-color="#a9f0e6"/><stop offset=".84" stop-color="#9c86e0"/><stop offset="1" stop-color="#bbdafd"/></linearGradient>
<linearGradient id="cb-holo2" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".45" stop-color="#fff" stop-opacity=".55"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient>
<linearGradient id="cb-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<filter id="cb-bevel" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="b"/><feSpecularLighting in="b" surfaceScale="5" specularConstant="1.2" specularExponent="24" lighting-color="#fff" result="s"><feDistantLight azimuth="225" elevation="42"/></feSpecularLighting><feComposite in="s" in2="SourceAlpha" operator="in" result="s2"/><feComposite in="SourceGraphic" in2="s2" operator="arithmetic" k1="0" k2="1" k3=".9" k4="0"/></filter>
<filter id="cb-bevel-soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="b"/><feSpecularLighting in="b" surfaceScale="3" specularConstant=".8" specularExponent="16" lighting-color="#fff" result="s"><feDistantLight azimuth="225" elevation="50"/></feSpecularLighting><feComposite in="s" in2="SourceAlpha" operator="in" result="s2"/><feComposite in="SourceGraphic" in2="s2" operator="arithmetic" k1="0" k2="1" k3=".55" k4="0"/></filter>
<filter id="cb-inset" x="-5%" y="-5%" width="110%" height="110%"><feOffset dy="4"/><feGaussianBlur stdDeviation="4" result="o"/><feComposite in="SourceAlpha" in2="o" operator="out" result="i"/><feFlood flood-color="#000" flood-opacity=".55"/><feComposite in2="i" operator="in" result="sh"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="sh"/></feMerge></filter>
<filter id="cb-drop" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#000" flood-opacity=".5"/></filter>
<filter id="cb-gray"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope=".5"/><feFuncG type="linear" slope=".5"/><feFuncB type="linear" slope=".5"/></feComponentTransfer></filter>
</defs></svg>`;

  const spark = (x, y, s, c = '#fff') => `<path d="M${x} ${y - s} C${x + s * .15} ${y - s * .15} ${x + s * .15} ${y - s * .15} ${x + s} ${y} C${x + s * .15} ${y + s * .15} ${x + s * .15} ${y + s * .15} ${x} ${y + s} C${x - s * .15} ${y + s * .15} ${x - s * .15} ${y + s * .15} ${x - s} ${y} C${x - s * .15} ${y - s * .15} ${x - s * .15} ${y - s * .15} ${x} ${y - s}Z" fill="${c}"/>`;
  const lock = `<g transform="translate(152 152)"><circle r="24" fill="#1e1e1e" stroke="#555" stroke-width="2"/><rect x="-10" y="-3" width="20" height="15" rx="3" fill="#bdbdbd"/><path d="M-6 -3 V-8 A6 6 0 0 1 6 -8 V-3" fill="none" stroke="#bdbdbd" stroke-width="3.5"/></g>`;
  let uid = 0;

  const content = (c, on, vb) => {
    const fs = c.n ? (c.n.length > 3 ? 40 : c.n.length > 2 ? 50 : 64) : 0;
    return c.n
      ? `<text x="100" y="${vb + 12}" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="800" font-size="${fs}" letter-spacing="-2" fill="url(#cb-m)" stroke="${INK}" stroke-width="2" paint-order="stroke" filter="url(#cb-bevel)">${c.n}</text><text x="100" y="${vb + 34}" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="800" font-size="12" letter-spacing="2" fill="${on ? '#fff' : '#ccc'}" stroke="${INK}" stroke-width="3" paint-order="stroke">${c.u}</text>`
      : `<g transform="translate(60 56) scale(.8)" fill="url(#cb-m)" stroke="${INK}" stroke-width="2.5" filter="url(#cb-bevel)">${G[c.g]}</g>`;
  };

  function metalGlass(c, on) {
    const id = 'cbc' + (uid++); const ishex = ['flame', 'hourglass', 'stack'].includes(c.g) && !c.n;
    const shape = ishex ? SH.hex1 : SH.ss1, inner = ishex ? SH.hex8 : SH.ss8; const oc = ORB[c.en];
    return `<path d="M8 168 A92 24 -12 0 1 192 128" fill="none" stroke="${oc}" stroke-width="8" stroke-linecap="round" filter="url(#cb-bevel-soft)"/>
<g filter="url(#cb-drop)"><path d="${shape}" transform="translate(0 8)" fill="url(#cb-md)"/><path d="${shape}" fill="url(#cb-m)" filter="url(#cb-bevel)" stroke="url(#cb-m)" stroke-width="6" stroke-linejoin="round"/></g>
<defs><clipPath id="${id}"><path d="${inner}"/></clipPath></defs>
<path d="${inner}" fill="url(#cb-holo)" filter="url(#cb-inset)"/>
<g clip-path="url(#${id})"><rect width="200" height="200" fill="${TINT[c.en]}" opacity=".62"/><rect width="200" height="200" fill="url(#cb-holo2)"/><rect width="200" height="200" fill="url(#cb-glass)"/></g>
<path d="${inner}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/>
${content(c, on, 100)}
<path d="M192 128 A92 24 -12 0 1 8 168" fill="none" stroke="${oc}" stroke-width="8" stroke-linecap="round" filter="url(#cb-bevel-soft)"/>
${on ? spark(190, 128, 8) + spark(12, 166, 5, '#f5de8a') + spark(46, 60, 6) : ''}`;
  }
  function holo(c, on) {
    const id = 'cbc' + (uid++); const sh = SH.ss9;
    return `<path d="M22 162 A80 22 -10 0 1 178 132" fill="none" stroke="#9682bb" stroke-width="9" stroke-linecap="round" filter="url(#cb-bevel-soft)"/>
<defs><clipPath id="${id}"><path d="${sh}"/></clipPath></defs>
<g filter="url(#cb-drop)"><path d="${sh}" fill="url(#cb-holo)"/></g>
<g clip-path="url(#${id})"><rect width="200" height="200" fill="url(#cb-holo2)"/><rect width="200" height="200" fill="url(#cb-glass)"/><path d="M0 70 C60 40 140 40 200 70 V0 H0Z" fill="#fff" opacity=".12"/></g>
<path d="${sh}" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2.5"/>
${content(c, on, 100)}
<path d="M178 132 A80 22 -10 0 1 22 162" fill="none" stroke="#9682bb" stroke-width="9" stroke-linecap="round" filter="url(#cb-bevel-soft)"/>
${on ? spark(178, 132, 9) + spark(24, 160, 6, '#f5de8a') + spark(60, 52, 6) : ''}`;
  }

  function svg(key, style, on, size) {
    const c = CAT[key] || CAT.sete;
    const prog = on === 'progress'; const lit = on === true;
    const body = style === '2b' ? holo(c, lit) : metalGlass(c, lit);
    return `<svg viewBox="0 0 200 200" width="${size}" height="${size}" style="display:block;overflow:visible" role="img"><g${lit ? '' : ' filter="url(#cb-gray)"'}${prog ? ' opacity=".9"' : ''}>${body}</g>${lit || prog ? '' : lock}</svg>`;
  }

  function inject() { if (document.getElementById('cb-defs')) return; const d = document.createElement('div'); d.id = 'cb-defs'; d.innerHTML = DEFS; document.body.appendChild(d); }
  if (document.body) inject(); else document.addEventListener('DOMContentLoaded', inject);
  window.CallioBadges = { svg, inject };
  window.dispatchEvent(new Event('callio-badges-ready'));
})();
