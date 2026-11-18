// Home Live Card – controls (thermostat dial, light rulers, room photos)
(() => {
const PX = 14, KA = 1.8, VIS = 20;
const FONT = { "0": "01110100011000110001100011000101110", "1": "00100011000010000100001000010001110", "2": "01110100010000100010001000100011111", "3": "11110000010000101110000010000111110", "4": "00010001100101010010111110001000010", "5": "11111100001111000001000011000101110", "6": "00110010001000011110100011000101110", "7": "11111000010001000100010000100001000", "8": "01110100011000101110100011000101110", "9": "01110100011000101111000010001001100", "C": "01110100011000010000100001000101110", ",": "00000000000000000000000000100010000", ".": "00000000000000000000000000000010000", "-": "00000000000000011111000000000000000", "°": "01000101000100000000000000000000000", "%": "11001110100001000100010000101110011", "A": "01110100011000111111100011000110001", "N": "10001110011010110011100011000110001", "U": "10001100011000110001100011000101110", "S": "01111100001000001110000010000111110", "O": "01110100011000110001100011000101110", "F": "11111100001000011110100001000010000" };
const W = { ",": 2, "°": 3, ".": 2 };
const dots = (txt, h, cls) => { let x = 0, c = ""; for (const ch of txt) { const g = FONT[ch]; if (!g) { x += 3; continue; } const w = W[ch] || 5; for (let r = 0; r < 7; r++) for (let k = 0; k < w; k++) if (g[r * 5 + k] === "1") c += `<circle cx="${x + k * 1 + 0.5}" cy="${r + 0.5}" r=".36"/>`; x += w + 1; } x -= 1; return `<svg class="${cls}" viewBox="0 0 ${x} 7" style="height:${h}px;width:${(h * x / 7).toFixed(1)}px" aria-hidden="true">${c}</svg>`; };
const TDCSS = `.dev.clim{grid-column:1/-1;min-height:470px;gap:0;justify-content:flex-start;background:radial-gradient(ellipse 70% 55% at 50% 38%,rgba(242,138,60,.10),transparent 70%),var(--card);overflow:hidden}.dev.clim .top{align-items:center}.dev.clim .top .nm{flex:1;min-width:0}.dev.clim .nm b,.dev.clim .nm small{display:block}
.tgau{position:relative;width:100%;max-width:340px;margin:2px auto 0;aspect-ratio:300/185;flex:none}.tgau>svg{position:absolute;inset:0;width:100%;height:100%}
.tgau .tk{stroke:#F28A3C;stroke-width:2.2;stroke-linecap:round;opacity:.2}.tgau .tk.on{opacity:.9}.tgau .tk.rm{stroke:#F3ECE4;opacity:1}.tgau .mk{stroke:#F28A3C;stroke-width:11;stroke-linecap:round}.tgau .md{fill:#F28A3C}.tgau .cap{fill:#F28A3C}.tgau .cap.dim{opacity:.3}.tgau .lb{fill:#9C9086;font-size:11px;font-weight:500;font-family:inherit}
.tgau .tc{position:absolute;left:0;right:0;top:36%;display:flex;flex-direction:column;align-items:center;gap:10px;pointer-events:none}.tgau .dm{fill:#F3ECE4}.tgau .tc small{font-size:12px;letter-spacing:.04em;color:var(--mu2)}
.dev.clim.idle .tk,.dev.clim.idle .mk,.dev.clim.idle .md,.dev.clim.idle .cap{stroke:#7A6E64;fill:#7A6E64}.dev.clim.idle .dm{fill:#7A6E64}
.tmod{flex:none;display:flex;justify-content:center;gap:14px;margin:6px 0 10px}.tmod button{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #2E241C;background:#1E1712;color:#9C9086;box-shadow:inset 0 1px 0 rgba(255,194,138,.08)}.tmod button.on{background:#33281F;border-color:#3A2E25;color:#F28A3C}
.trw{flex:none;display:flex;flex-direction:column;align-items:center;gap:2px}.trw .rl{display:flex;align-items:flex-end;gap:7px;color:var(--mu2);font-size:12px}.trw .rl .dm{fill:#B9ADA2}.trw .rl em{font-style:normal;font-size:11px;color:var(--mu)}
.trul{position:relative;flex:none;width:calc(100% + 28px);margin:0 -14px -14px;height:96px;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:grab}.trul.drag{cursor:grabbing}.trul svg{position:absolute;left:50%;top:0;width:340px;height:96px;margin-left:-170px;overflow:visible}
.trul:before{content:"";position:absolute;left:8%;right:8%;top:58px;bottom:0;background-image:radial-gradient(circle,rgba(255,194,138,.28) 1px,transparent 1.4px);background-size:9px 9px;-webkit-mask-image:radial-gradient(ellipse 55% 100% at 50% 0,#000,transparent 75%);mask-image:radial-gradient(ellipse 55% 100% at 50% 0,#000,transparent 75%);pointer-events:none}
.trul .rt{stroke:#B9ADA2;stroke-width:1.6;stroke-linecap:round}.trul .rt.mj{stroke-width:2.2;stroke:#F3ECE4}.trul .rlb{fill:#9C9086;font-size:9px;font-family:inherit;text-anchor:middle}.trul .ptr{fill:#F28A3C}.trul .gl{fill:none;stroke:url(#tglw);stroke-width:2.4}.trul .gk{fill:#1E1712;stroke:#F28A3C;stroke-width:2}
.dev.clim.idle .trul{cursor:default;opacity:.4}
@container app (max-width: 899px){.dev.clim{min-height:436px}}`;
const LTCSS = `.view.det.lt{display:flex;flex-direction:column;gap:12px;width:100%;min-height:100%}.ltb{display:flex;flex-direction:column;gap:6px;flex:1;min-height:0}
.lvis{position:relative;display:flex;flex-direction:column;align-items:center;padding:6px 0 4px}.lvis .lglow{position:absolute;left:50%;top:-10px;width:320px;height:320px;margin-left:-160px;border-radius:50%;background:radial-gradient(circle,rgba(255,194,138,.55),rgba(242,138,60,.18) 38%,transparent 68%);pointer-events:none;transition:opacity .3s}
.lvis .lamp{position:relative;width:150px;height:150px}.lvis .lamp .cd{stroke:#5A4A3E;stroke-width:2}.lvis .lamp .sh{fill:#2A2019;stroke:#3A2E25;stroke-width:1.5}.lvis .lamp .bl{fill:#3A2E25}.lvis.on .lamp .bl{fill:#FFE2C2}.lvis.on .lamp .sh{fill:#33281F}.lvis .lamp .bm{fill:url(#lbeam);opacity:0}.lvis.on .lamp .bm{opacity:1}
.lvis .lvw{position:relative;margin-top:6px}.lvis .dm{fill:#F3ECE4}.lvis:not(.on) .dm{fill:#7A6E64}.lvis small{position:relative;font-size:12px;letter-spacing:.04em;color:var(--mu2);margin-top:8px}
.lpre{display:flex;justify-content:center;gap:14px;margin:8px 0 2px}.lpre button{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #2E241C;background:#1E1712;color:#9C9086;font-size:12px;font-weight:600;box-shadow:inset 0 1px 0 rgba(255,194,138,.08)}.lpre button.on{border:2px solid #F28A3C;color:#F3ECE4;background:#24170F}.lpre button.pw.on{background:#F28A3C;color:#1A0F07;border-color:#F28A3C}
.lbig{display:flex;justify-content:center;margin:10px 0}.lbig button{width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #2E241C;background:#1E1712;color:#9C9086;box-shadow:inset 0 1px 0 rgba(255,194,138,.08)}.lbig button.on{background:#F28A3C;border-color:#F28A3C;color:#1A0F07;box-shadow:0 0 40px rgba(242,138,60,.45)}
.ltb .trw{margin-top:4px}.ltb .trul{width:100%;margin:0}.ltb.off .trul{opacity:.55}
@container app (min-width: 900px){.ltb{flex-direction:row;align-items:center;gap:24px}.ltb>.lvis{flex:1}.ltb>.lctl{flex:1;min-width:360px;display:flex;flex-direction:column;align-items:center;gap:6px}.ltb .lpre{gap:10px}.ltb .trw{width:100%}.lvis .lamp{width:190px;height:190px}.lvis .lglow{width:420px;height:420px;margin-left:-210px}}
.ltile{position:relative;overflow:hidden;cursor:pointer}.ltile .lgl{position:absolute;right:-40px;top:-40px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(255,194,138,.45),rgba(242,138,60,.12) 45%,transparent 70%);pointer-events:none;transition:opacity .3s}.ltile .lic{position:relative;width:40px;height:40px;flex:none;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#241B15;color:#9C9086}.ltile.on .lic{background:#F28A3C;color:#1A0F07;box-shadow:0 0 18px rgba(242,138,60,.55)}
.ltile .lst{position:relative;display:flex;align-items:center}.ltile .dm{fill:#F3ECE4}.ltile:not(.on) .dm{fill:#7A6E64}.ltile .bot .nm b{position:relative}
.ltile.dim{grid-column:1/-1;gap:6px;min-height:214px;justify-content:flex-start}.ltile.dim .lmid{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;position:relative}.ltile.dim .lmid .bot{flex:1 1 140px}.ltile.dim .lpre{margin:0;gap:8px}.ltile.dim .lpre button{width:40px;height:40px;font-size:11px}.ltile.dim .trul{width:calc(100% + 28px);margin:0 -14px -14px;height:84px}`;
const cssUrl = (u) => String(u).replace(/["'()\\<>\s]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const HVAC = { off: "Aus", cool: "Kühlen", heat: "Heizen", dry: "Trocknen", fan_only: "Lüften", heat_cool: "Auto", auto: "Auto" };
const SV = (p, w) => `<svg width="${w || 20}" height="${w || 20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const IC = { heat: SV('<path d="M12 3c2 3 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5.5C10 10 11 11 12 11c0-3 0-5.5 0-8z"/>'), cool: SV('<path d="M12 2v20M4.9 6l14.2 12M4.9 18L19.1 6"/>'), auto: SV('<path d="M4 20 12 4l8 16M7.5 13h9"/>'), heat_cool: SV('<path d="M4 20 12 4l8 16M7.5 13h9"/>'), dry: SV('<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>'), fan_only: SV('<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 2 3-1 5M14 12c4 0 7 1 7 4 0 2-3 2-5-1M12 14c0 4-1 7-4 7-2 0-2-3 1-5M10 12c-4 0-7-1-7-4 0-2 3-2 5 1"/>'), off: SV('<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>') };
const TH = SV('<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/>', 20);
const M = {
  _f1(v) { return Number(v).toLocaleString(LOC, { minimumFractionDigits: 1, maximumFractionDigits: 1 }); },
  _tdRange(at) { const F = TU === "°F", lo = Math.max(typeof at.min_temp === "number" ? at.min_temp : (F ? 45 : 7), F ? 54 : 12), hi = Math.min(typeof at.max_temp === "number" ? at.max_temp : (F ? 95 : 35), F ? 86 : 30); return [lo, Math.max(hi, lo + 1)]; },
  _tdGauge(v, lo, hi, cur) {
    const N = 66, cx = 150, cy = 128, A0 = 160, SW = 220, f = typeof v === "number" ? (v - lo) / (hi - lo) : -1, fr = typeof cur === "number" ? Math.round(((cur - lo) / (hi - lo)) * N) : -1;
    const P = (deg, r) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)], n = (a) => a.map((q) => q.toFixed(1));
    let t = "";
    for (let i = 1; i < N; i++) { const a = A0 + SW * i / N, mj = i % 6 === 0, [x1, y1] = n(P(a, 124)), [x2, y2] = n(P(a, mj ? 106 : 112)); t += `<line class="tk ${i / N <= f + 1e-9 ? "on" : ""} ${i === fr ? "rm" : ""}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; }
    const av = A0 + SW * Math.max(0, Math.min(1, f)), [m1x, m1y] = n(P(av, 127)), [m2x, m2y] = n(P(av, 108)), [dx, dy] = n(P(av, 96)), [ax, ay] = n(P(A0, 116)), [bx, by] = n(P(A0 + SW, 116)), [lx, ly] = n(P(A0 + 9, 90)), [rx, ry] = n(P(A0 + SW - 9, 90));
    const cap = (x, y, deg, dim) => `<path class="cap ${dim ? "dim" : ""}" transform="translate(${x} ${y}) rotate(${deg + 90})" d="M-9 0a9 9 0 0 0 18 0z"/>`;
    return `<svg viewBox="0 0 300 185" aria-hidden="true">${t}${cap(ax, ay, A0, false)}${cap(bx, by, A0 + SW, f < 1)}${f >= 0 ? `<line class="mk" x1="${m1x}" y1="${m1y}" x2="${m2x}" y2="${m2y}"/><circle class="md" cx="${dx}" cy="${dy}" r="3"/>` : ""}<text class="lb" x="${lx}" y="${ly}" text-anchor="middle">${lo}</text><text class="lb" x="${rx}" y="${ry}" text-anchor="middle">${hi}</text></svg>`;
  },
  _tdRuler(v, lo, hi, st, lbs, mjs) {
    const cx = 170, cy = 520, R = 470, P = (deg, r) => [(cx + r * Math.cos(deg * Math.PI / 180)).toFixed(1), (cy + r * Math.sin(deg * Math.PI / 180)).toFixed(1)];
    let t = "";
    for (let w = lo; w <= hi + 1e-9; w = +(w + st).toFixed(2)) { const d = ((w - v) / st) * KA; if (Math.abs(d) > VIS) continue; const a = -90 + d, mj = mjs ? Math.abs(w / mjs - Math.round(w / mjs)) < 1e-6 : Math.abs(w - Math.round(w)) < 1e-6, op = Math.max(0, 1 - Math.pow(Math.abs(d) / VIS, 1.6)), [x1, y1] = P(a, R), [x2, y2] = P(a, R + (mj ? 18 : 10)); t += `<line class="rt ${mj ? "mj" : ""}" style="opacity:${op.toFixed(2)}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; if (mj && Math.round(w) % (lbs || 2) === 0) { const [tx, ty] = P(a, R + 28); t += `<text class="rlb" style="opacity:${op.toFixed(2)}" x="${tx}" y="${(+ty + 3).toFixed(1)}">${Math.round(w)}</text>`; } }
    const [gx0, gy0] = P(-90 - VIS, R - 7), [gx1, gy1] = P(-90 + VIS, R - 7);
    return `<svg viewBox="0 0 340 96" aria-hidden="true"><defs><linearGradient id="tglw" x1="0" x2="1"><stop offset="0" stop-color="#F28A3C" stop-opacity="0"/><stop offset=".5" stop-color="#F28A3C"/><stop offset="1" stop-color="#F28A3C" stop-opacity="0"/></linearGradient></defs><path class="ptr" d="M164 4h12l-6 8z"/>${t}<path class="gl" d="M${gx0} ${gy0}A${R - 7} ${R - 7} 0 0 1 ${gx1} ${gy1}"/><circle class="gk" cx="170" cy="${(cy - R + 7).toFixed(1)}" r="5"/></svg>`;
  },
  _tdTile(d) {
    const s = this._st(d.entity), at = s.attributes, off = s.state === "off", na = s.state === "unavailable", st = at.target_temp_step || 0.5;
    const [lo, hi] = this._tdRange(at), tgt = this._pend[d.entity] != null ? this._pend[d.entity] : at.temperature, cur = at.current_temperature;
    const modes = [...(at.hvac_modes || []).filter((m) => m !== "off"), "off"], tv = typeof tgt === "number" ? Math.max(lo, Math.min(hi, tgt)) : lo;
    const mb = na ? "" : `<div class="tmod">${modes.map((m) => `<button class="${s.state === m ? "on" : ""}" data-a="ohvac" data-v="${esc(d.entity)}|${esc(m)}" aria-label="${esc(T(HVAC[m] || m))}" title="${esc(T(HVAC[m] || m))}">${IC[m] || IC.heat}</button>`).join("")}</div>`;
    return `<style>${TDCSS}</style><div class="dev clim ${off || na ? "idle" : "on"} ${na ? "off" : ""}" data-id="${esc(d.entity)}" data-lo="${lo}" data-hi="${hi}" data-st="${st}"><div class="top"><span class="ico">${TH}</span><div class="nm"><b>${esc(d.name)}</b><small>${na ? T("offline") : off ? T("Aus") : esc(T(HVAC[s.state] || s.state))}</small></div></div>
      <div class="tgau">${this._tdGauge(typeof tgt === "number" ? tv : null, lo, hi, cur)}<div class="tc"><span class="tvw">${dots(typeof tgt === "number" ? this._f1(tgt) + TU : "--", 40, "dm")}</span><small>${T("Solltemperatur")}</small></div></div>${mb}
      <div class="trw">${typeof cur === "number" ? `<span class="rl">${T("Raum")} ${dots(this._f1(cur) + TU, 14, "dm")}</span>` : ""}<div class="trul" aria-label="${T("Temperatur wischen")}">${this._tdRuler(tv, lo, hi, st)}</div></div></div>`;
  },
  _ltView(r, d, s, hdr) {
    const id = d.entity, na = !s || s.state === "unavailable", on = !!s && s.state === "on", dim = !!s && (s.attributes.supported_color_modes || []).some((m) => m !== "onoff");
    const pct = this._pend[id] != null ? this._pend[id] : on ? (dim ? Math.round((s.attributes.brightness || 0) / 2.55) : 100) : 0, lvl = on ? (dim ? pct / 100 : 1) : 0;
    const lamp = `<svg class="lamp" viewBox="0 0 150 150" aria-hidden="true"><defs><linearGradient id="lbeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC28A" stop-opacity=".55"/><stop offset="1" stop-color="#FFC28A" stop-opacity="0"/></linearGradient></defs><line class="cd" x1="75" y1="0" x2="75" y2="44"/><path class="bm" d="M52 86 L20 150 H130 L98 86Z"/><path class="sh" d="M60 44h30l20 42H40z"/><circle class="bl" cx="75" cy="88" r="11"/></svg>`;
    const vis = `<div class="lvis ${on ? "on" : ""}"><span class="lglow" style="opacity:${(0.15 + 0.85 * lvl).toFixed(2) * (on ? 1 : 0)}"></span>${lamp}<span class="lvw">${dots(na ? "--" : dim ? pct + "%" : on ? T("AN") : T("AUS"), 40, "dm")}</span><small>${na ? T("offline") : dim ? T("Helligkeit") : esc(d.name)}</small></div>`;
    let ctl;
    if (na) ctl = "";
    else if (dim) ctl = `<div class="lpre">${[25, 50, 75, 100].map((v) => `<button class="${on && Math.abs(pct - v) < 3 ? "on" : ""}" data-a="lset" data-v="${esc(id)}|${v}" aria-label="${v} ${T("Prozent")}">${v}</button>`).join("")}<button class="pw ${on ? "on" : ""}" data-a="lset" data-v="${esc(id)}|${on ? 0 : 100}" aria-label="${on ? T("Ausschalten") : T("Einschalten")}">${IC.off}</button></div><div class="trw"><span class="rl">${T("Wischen zum Dimmen")}</span><div class="trul" data-rk="l" data-id="${esc(id)}" data-lo="0" data-hi="100" data-st="5">${this._tdRuler(pct, 0, 100, 5, 20, 10)}</div></div>`;
    else ctl = `<div class="lbig"><button class="${on ? "on" : ""}" data-a="lset" data-v="${esc(id)}|${on ? 0 : 100}" aria-label="${on ? T("Ausschalten") : T("Einschalten")}">${SV('<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>', 36)}</button></div>`;
    return `<style>${TDCSS}${LTCSS}</style><div class="view det lt">${hdr(d.name)}<div class="ltb ${on ? "" : "off"}">${vis}<div class="lctl">${ctl}</div></div></div>`;
  },
  _ltTile(d) {
    const id = d.entity, s = this._st(id), na = !s || s.state === "unavailable", on = !!s && s.state === "on", dim = !!s && (s.attributes.supported_color_modes || []).some((m) => m !== "onoff");
    const pct = this._pend[id] != null ? this._pend[id] : on ? (dim ? Math.round((s.attributes.brightness || 0) / 2.55) : 100) : 0, g = on ? (dim ? 0.25 + 0.75 * pct / 100 : 1) : 0;
    const bulb = SV('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>', 20);
    const head = `<span class="lgl" style="opacity:${g.toFixed(2)}"></span><div class="top"><span class="lic">${bulb}</span><span class="lst lvw">${na ? "" : dots(dim ? (on ? pct : 0) + "%" : on ? T("AN") : T("AUS"), 18, "dm")}</span></div>`;
    const nm = `<div class="bot"><div class="nm"><b>${esc(d.name)}</b><small>${na ? T("offline") : on ? (dim ? T("An") + " · " + pct + " %" : T("An")) : T("Aus")}</small></div></div>`;
    if (!dim || na) return `<style>${TDCSS}${LTCSS}</style><button class="dev ltile ${on ? "on" : ""} ${na ? "off" : ""}" data-a="tog" data-v="${esc(id)}" ${na ? "disabled" : ""} style="text-align:left;color:inherit;font:inherit">${head}${nm}</button>`;
    return `<style>${TDCSS}${LTCSS}</style><div class="dev ltile dim ${on ? "on" : ""}">${head}<div class="lmid">${nm}<div class="lpre">${[25, 50, 75, 100].map((v) => `<button class="${on && Math.abs(pct - v) < 3 ? "on" : ""}" data-a="lset" data-v="${esc(id)}|${v}" aria-label="${v} ${T("Prozent")}">${v}</button>`).join("")}<button class="pw ${on ? "on" : ""}" data-a="lset" data-v="${esc(id)}|${on ? 0 : 100}" aria-label="${on ? T("Ausschalten") : T("Einschalten")}">${IC.off}</button></div></div><div class="trul" data-rk="l" data-id="${esc(id)}" aria-label="Helligkeit wischen">${this._tdRuler(pct, 0, 100, 5, 20, 10)}</div></div>`;
  },
  _roomImg(r, lit) {
    const I = window.HOME_LIVE_IMG || {}, dy = this._dayEff(), k = dy ? "day" : "night";
    let u = I[`room_${r.id}_${k}`] || (r.image !== false ? `${String(this._c.image_path || "/local/home-live/rooms/").replace(/\/?$/, "/")}${r.image || r.id}_${k}.webp` : "");
    if (!u) return ""; const C = (window.__hlImg = window.__hlImg || {});
    if (u.startsWith("/")) { if (C[u] === undefined) { C[u] = null; const im = new Image(); im.onload = () => { C[u] = true; this._render(); }; im.onerror = () => { C[u] = false; }; im.src = u; } if (C[u] !== true) return ""; }
    const ov = dy ? "linear-gradient(180deg,rgba(242,235,226,.22),rgba(242,235,226,.5))" : !lit ? "linear-gradient(180deg,rgba(13,10,8,.55),rgba(13,10,8,.8))" : "linear-gradient(180deg,rgba(13,10,8,.2),rgba(13,10,8,.6))";
    const g = dy ? "rgba(255,252,247,.62)" : "rgba(21,16,12,.52)", gl = dy ? "rgba(90,60,30,.12)" : "rgba(255,255,255,.10)", gon = dy ? "rgba(251,230,210,.72)" : "rgba(36,23,15,.62)";
    return `<style>.main{position:relative;isolation:isolate}.main:before{content:"";position:fixed;inset:0;z-index:-1;background:${ov},url("${cssUrl(u)}") center/cover no-repeat}
@container app (min-width: 900px){.main:before{position:absolute}}
.scene.ph{background:none;border:none;height:auto;min-height:0;aspect-ratio:auto!important;overflow:visible}.scene.ph .gauges{position:relative;inset:auto;padding:0}
.view.room .dev,.view.room .chip,.view.room .tabs button:not(.on),.view.room .rbtn{background:${g};border-color:${gl};-webkit-backdrop-filter:blur(14px) saturate(1.2);backdrop-filter:blur(14px) saturate(1.2)}
.view.room .dev.on{background:${gon};border-color:rgba(242,138,60,.45)}.view.room .dev.clim{background:radial-gradient(ellipse 70% 55% at 50% 38%,rgba(242,138,60,.10),transparent 70%),${g}}
.view.room .ring{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:50%}.view.room .hdr .ttl b,.view.room .hdr .ttl small{text-shadow:0 1px 10px ${dy ? "rgba(255,255,255,.6)" : "rgba(0,0,0,.5)"}}</style>`;
  },
  _lset(id, v) { v = Math.max(0, Math.min(100, Math.round(v))); this._pendSet(id, v); this._render(); return this._call("light", v > 0 ? "turn_on" : "turn_off", v > 0 ? { entity_id: id, brightness_pct: v } : { entity_id: id }); },
  _tdShow(t, v, raw) {
    const el = t.el, lo = +el.dataset.lo, hi = +el.dataset.hi, st = +el.dataset.st, s = this._st(t.id);
    if (v != null) { el.querySelector(".tgau>svg").outerHTML = this._tdGauge(v, lo, hi, s && s.attributes.current_temperature); el.querySelector(".tvw").innerHTML = dots(this._f1(v) + TU, 40, "dm"); }
    t.r.querySelector("svg").outerHTML = this._tdRuler(raw, lo, hi, st);
  },
  _tdDown(e) {
    const r = e.target.closest && e.target.closest(".trul"); if (!r) return;
    if (r.dataset.rk === "l") { if (e.button !== undefined && e.button !== 0) return; const s = this._st(r.dataset.id), on = s && s.state === "on", v0 = this._pend[r.dataset.id] != null ? this._pend[r.dataset.id] : on ? Math.round((s.attributes.brightness || 0) / 2.55) : 0; this._td = { lt: true, el: r, r, id: r.dataset.id, x0: e.clientX, v0, v: v0, pid: e.pointerId, mv: false }; try { r.setPointerCapture(e.pointerId); } catch (x) {} return; }
    const el = r.closest(".dev.clim"); if (!el || el.classList.contains("idle")) return;
    if (e.button !== undefined && e.button !== 0) return;
    const s = this._st(el.dataset.id), lo = +el.dataset.lo, hi = +el.dataset.hi, v0 = this._pend[el.dataset.id] != null ? this._pend[el.dataset.id] : s && s.attributes.temperature;
    this._td = { el, r, id: el.dataset.id, x0: e.clientX, v0: typeof v0 === "number" ? Math.max(lo, Math.min(hi, v0)) : lo, pid: e.pointerId, mv: false }; this._td.v = this._td.v0;
    try { r.setPointerCapture(e.pointerId); } catch (x) {} r.classList.add("drag");
  },
  _tdMove(e) {
    const t = this._td; if (!t || e.pointerId !== t.pid) return; const dx = e.clientX - t.x0; if (!t.mv && Math.abs(dx) < 4) return; t.mv = true; e.preventDefault();
    if (t.lt) { const raw = Math.max(0, Math.min(100, t.v0 - (dx / PX) * 5)), v = Math.round(raw); t.r.querySelector("svg").outerHTML = this._tdRuler(raw, 0, 100, 5, 20, 10); if (v !== t.v) { t.v = v; const w = t.r.closest(".ltile") || t.r.closest(".view"), lv = w && w.querySelector(".lvw"), g = w && w.querySelector(".lglow"); const tl = w && w.classList.contains("ltile"); if (lv) lv.innerHTML = dots(v + "%", tl ? 18 : 40, "dm"); const gg = w && w.querySelector(tl ? ".lgl" : ".lglow"); if (gg) gg.style.opacity = v > 0 ? ((tl ? 0.25 : 0.15) + (tl ? 0.75 : 0.85) * v / 100).toFixed(2) : 0; } return; }
    const lo = +t.el.dataset.lo, hi = +t.el.dataset.hi, st = +t.el.dataset.st, raw = Math.max(lo, Math.min(hi, t.v0 - (dx / PX) * st)), v = Math.round(raw / st) * st;
    this._tdShow(t, v !== t.v ? v : null, raw); t.v = v;
  },
  _tdUp(e, cancel) {
    const t = this._td; if (!t || e.pointerId !== t.pid) return; this._td = null;
    try { t.r.releasePointerCapture(e.pointerId); } catch (x) {}
    if (t.lt) { if (!cancel && t.mv) this._lset(t.id, t.v); else this._render(); return; }
    const s = this._st(t.id);
    if (!cancel && t.mv && s && t.v !== s.attributes.temperature) { this._pendSet(t.id, t.v); this._call("climate", "set_temperature", { entity_id: t.id, temperature: t.v }); }
    this._tdDirty = false; this._render();
  },
};
customElements.whenDefined("home-live-card").then(() => { const C = customElements.get("home-live-card"); Object.assign(C.prototype, M); });
})();
