// Home Live Card – palette "liquid": glass with refraction, elastic surfaces, a glass drop and tinted on-states
(() => {
// colours for switched-on tiles: [light tint, deep tint, icon colour]
const TINTS = { amber: ["255,214,110", "255,150,50", "90,55,0"], blue: ["150,215,255", "60,140,255", "10,45,100"], violet: ["205,170,255", "140,90,255", "45,20,100"], green: ["150,240,180", "40,190,110", "5,70,35"], rose: ["255,180,210", "240,90,150", "100,15,50"], cyan: ["150,245,240", "30,190,200", "0,70,75"], orange: ["255,196,150", "255,110,50", "100,35,0"] };
const kindOf = (id, icon) => { const d = String(id || "").split(".")[0], i = icon || ""; if (d === "light" || i === "bulb") return "amber"; if (i === "tv" || d === "media_player") return "violet"; if (d === "fan" || i === "fan") return "cyan"; if (d === "climate" || d === "water_heater") return "orange"; if (d === "cover" || i === "gate" || i === "car") return "green"; if (d === "script" || d === "scene" || i === "robot") return "rose"; return "blue"; };
// refraction (SVG displacement on backdrop) works in Chromium-based browsers only
const UA = navigator.userAgent, REFRACT = /Chrome\/|Chromium\//.test(UA) && !/Firefox\//.test(UA);
const RM = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const LEAF = ".acc,.hchip,.rl,.dev,.ltile,.stat,.qa.ap button,.md3 button,.lpre button,.tmod button,.amodes button,.allb";
const BOX = ".oc,.panel,.flow";
const PRESS = ".acc,.hchip,.rl,.qa.ap button,.md3 button,.lpre button,.tmod button,.amodes button,.allb,.pm button,.mc button";
const LQCSS = `
:host([lq]) .app{background:var(--lqw) 0 0/100% 100% no-repeat fixed!important}
:host([lq]) .oc,:host([lq]) .panel,:host([lq]) .flow{background:transparent!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;isolation:isolate}
:host([lq]) .lqg{position:absolute;inset:0;border-radius:inherit;z-index:-1;pointer-events:none;background:linear-gradient(160deg,rgba(255,255,255,.22),rgba(255,255,255,.06) 55%,rgba(255,255,255,.12));-webkit-backdrop-filter:blur(16px) saturate(1.3);backdrop-filter:blur(16px) saturate(1.3)}
:host([lq][gln]) .lqg{background:linear-gradient(160deg,rgba(255,255,255,.14),rgba(255,255,255,.04) 55%,rgba(255,255,255,.08))}
:host([lq]) .acc.on,:host([lq]) .dv6.ap .acc.on,:host([lq]) .dev.on:not(.clim):not(.dim),:host([lq]) .ltile.on,:host([lq]) .qa.ap button.on{background:linear-gradient(160deg,rgba(var(--t1,255,214,110),.6),rgba(var(--t2,255,150,50),.38))!important;color:#fff!important;text-shadow:0 1px 8px rgba(0,15,40,.55)!important;box-shadow:0 14px 32px -12px rgba(var(--t2,255,150,50),.8),inset 0 0 24px rgba(var(--t1,255,214,110),.55),inset 0 1px 0 rgba(255,255,255,.65)!important}
:host([lq]) .acc.on small,:host([lq]) .dv6.ap .acc.on small,:host([lq]) .dev.on:not(.clim):not(.dim) small,:host([lq]) .ltile.on small,:host([lq]) .dev.on:not(.clim):not(.dim) b,:host([lq]) .dev.on:not(.clim):not(.dim) .nm{color:rgba(255,255,255,.92)!important}
:host([lq]) .acc.on .i,:host([lq]) .dv6.ap .acc.on .i,:host([lq]) .dev.on:not(.clim):not(.dim) .ico,:host([lq]) .ltile.on .lic,:host([lq]) .qa.ap button.on>span{background:rgb(var(--t1,255,214,110))!important;color:rgb(var(--ti,90,55,0))!important;box-shadow:0 0 20px rgba(var(--t1,255,214,110),.95)!important}
:host([lq]) .ltile.on:not(.dim) .dtx{color:#fff}
:host([lq]) .rl.on,:host([lq]) .ovb.on{background:transparent!important;color:#fff!important;text-shadow:0 1px 8px rgba(0,15,40,.5)}
:host([lq]) .rl.on *{color:inherit!important}
:host([lq]) .side{position:relative}
:host([lq]) .lqi{position:absolute;left:0;top:0;border-radius:999px;pointer-events:none;background:linear-gradient(160deg,rgba(255,255,255,.62),rgba(255,255,255,.34));box-shadow:0 10px 24px -10px rgba(10,30,70,.45),inset 0 1px 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.5);transform-origin:50% 0;z-index:0}
:host([lq][gln]) .lqi{background:linear-gradient(160deg,rgba(255,255,255,.34),rgba(255,255,255,.16))}
:host([lq]) .hero.ap.lqn .hc>h2,:host([lq]) .hero.ap.lqn .hc>p{padding-right:86px}
:host([lq]) .side .rl{position:relative;z-index:1}
:host([lq]) .lqd{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:2}
:host([lq]) .lqd canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:inherit}
:host([lq]) .lqh{position:absolute;left:0;top:0;border-radius:50%;pointer-events:auto;touch-action:none;cursor:grab;display:grid;place-content:center;text-align:center;color:#fff;text-shadow:0 2px 14px rgba(0,10,30,.6);-webkit-user-select:none;user-select:none}
:host([lq]) .lqn .lqh b{font-size:17px}:host([lq]) .lqn .lqh small{font-size:9.5px}
:host([lq]) .lqh b{font-size:26px;font-weight:300;letter-spacing:-.04em;font-variant-numeric:tabular-nums}:host([lq]) .lqh small{font-size:11.5px;font-weight:600;opacity:.85}
:host([lq]) .lqh:focus-visible{outline:2px solid #fff;outline-offset:2px}
`;
const M = {
  _lqOn() { return this._c && this._c.palette === "liquid"; },
  // ---------- called after every render
  _lqSync() {
    const on = this._lqOn(); this.toggleAttribute("lq", on);
    if (!on) { if (this._lqStyle) { this._lqStyle.remove(); this._lqStyle = null; } if (this._lqRaf) cancelAnimationFrame(this._lqRaf); this._lqRaf = 0; return; }
    const R = this.shadowRoot;
    if (!this._lqStyle || !this._lqStyle.isConnected) { this._lqStyle = document.createElement("style"); this._lqStyle.textContent = LQCSS; R.appendChild(this._lqStyle); }
    if (!this._lqSvg || !this._lqSvg.isConnected) { this._lqSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); this._lqSvg.setAttribute("width", "0"); this._lqSvg.setAttribute("height", "0"); this._lqSvg.style.position = "absolute"; this._lqSvg.innerHTML = "<defs></defs>"; R.appendChild(this._lqSvg); this._lqMaps = new Map(); }
    if (!this._lqBound) { this._lqBound = true; this._lqEvents(); }
    this._lqWall();
    const app = this._appEl; if (!app) return;
    // layers for containers, tints for switched-on tiles
    app.querySelectorAll(BOX).forEach((el) => { if (!el.querySelector(":scope>.lqg")) el.insertAdjacentHTML("afterbegin", '<i class="lqg"></i>'); });
    const fixed = this._c.on_color && this._c.on_color !== "auto" && TINTS[this._c.on_color] ? this._c.on_color : null, icons = this._lqIcons();
    app.querySelectorAll(".acc.on,.dev.on,.ltile.on,.qa.ap button.on").forEach((el) => { const id = el.dataset.v || el.dataset.id || (el.querySelector("[data-v]") || {}).dataset?.v || ""; const t = TINTS[fixed || kindOf(id, icons[id])]; el.style.setProperty("--t1", t[0]); el.style.setProperty("--t2", t[1]); el.style.setProperty("--ti", t[2]); });
    // sliding glass drop behind the active entry of the side bar
    const side = app.querySelector(".side"); if (side) { const ind = document.createElement("i"); ind.className = "lqi"; side.prepend(ind); this._lqInd = ind; }
    this._lqDrop();
    // springs survive the re-render: hand them to the new elements
    if (this._lqJ) for (const [old, q] of [...this._lqJ]) { if (old.isConnected) continue; this._lqJ.delete(old); const n = q.key && app.querySelector(q.key); if (n) this._lqJ.set(n, q); }
    cancelAnimationFrame(this._lqGT); this._lqGT = requestAnimationFrame(() => this._lqGlass());
    if (!this._lqRaf) { this._lqLast = 0; this._lqRaf = requestAnimationFrame((t) => this._lqFrame(t)); }
  },
  _lqIcons() { if (this._lqIc && this._lqIc.c === this._c) return this._lqIc.m; const m = {}, add = (x) => { if (x && typeof x === "object" && x.entity && x.icon) m[x.entity] = x.icon; }; const o = this._c.overview || {}; [...(o.lights || []), ...(o.devices || []), ...(o.actions || [])].forEach(add); (this._c.rooms || []).forEach((r) => (r.devices || []).forEach(add)); this._lqIc = { c: this._c, m }; return m; },
  // ---------- wallpaper with contour lines (drawn here, also the texture of the drop)
  _lqWall() {
    const W = Math.max(320, Math.min(innerWidth || 1280, 2400)), H = Math.max(320, Math.min(innerHeight || 800, 1600)), night = !this._isDay(), key = W + "x" + H + night; if (this._lqWk === key) return; this._lqWk = key;
    const c = this._lqCv || (this._lqCv = document.createElement("canvas")); c.width = W; c.height = H; const g = c.getContext("2d");
    const P = night ? ["#12243f", "#22406a", "#4b4a7a", "#8a6276"] : ["#6f93bb", "#93b2d2", "#b9b7d4", "#e2b9ab"], B = night ? ["rgba(70,150,190,.35)", "rgba(200,120,110,.3)", "rgba(110,120,230,.3)"] : ["rgba(150,215,240,.55)", "rgba(255,190,160,.5)", "rgba(170,180,255,.4)"];
    const gr = g.createLinearGradient(0, 0, W * .4, H); P.forEach((p, i) => gr.addColorStop(i / 3, p)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    const m = Math.max(W, H), blob = (x, y, r, col) => { const q = g.createRadialGradient(x, y, 0, x, y, r); q.addColorStop(0, col); q.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = q; g.fillRect(0, 0, W, H); };
    blob(W * .15, H * .2, m * .5, B[0]); blob(W * .9, H * .78, m * .55, B[1]); blob(W * .7, H * .08, m * .4, B[2]);
    g.lineWidth = 1; for (const [cx, cy, a] of [[W * .2, H * .32, night ? .2 : .3], [W * .85, H * .8, night ? .16 : .24]]) for (let i = 1; i < 46; i++) { const r = i * m / 38; g.strokeStyle = `rgba(255,255,255,${(a * (1 - i / 60)).toFixed(3)})`; g.beginPath(); for (let k = 0; k <= 120; k++) { const t = k / 120 * 6.2832, rr = r * (1 + .07 * Math.sin(t * 3 + i * .35) + .04 * Math.sin(t * 5 - i * .2)), x = cx + Math.cos(t) * rr, y = cy + Math.sin(t) * rr * .82; k ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
    this.style.setProperty("--lqw", `url(${c.toDataURL("image/jpeg", .88)})`); this._lqTex = true;
  },
  // ---------- refraction: one displacement map per element size, shared between elements of the same size
  _lqMap(w, h, rad, bez) {
    const c = document.createElement("canvas"); c.width = w; c.height = h; const g = c.getContext("2d"), id = g.createImageData(w, h), d = id.data, hx = w / 2, hy = h / 2, r = Math.min(rad, hx, hy);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const px = x + .5 - hx, py = y + .5 - hy, qx = Math.abs(px) - (hx - r), qy = Math.abs(py) - (hy - r); let dist, nx, ny;
      if (qx > 0 && qy > 0) { const l = Math.hypot(qx, qy) || 1; dist = l - r; nx = qx / l * Math.sign(px); ny = qy / l * Math.sign(py); } else if (qx > qy) { dist = qx - r; nx = Math.sign(px); ny = 0; } else { dist = qy - r; nx = 0; ny = Math.sign(py); }
      const t = Math.max(0, 1 + dist / bez), m = t * t * (3 - 2 * t) * t, i = (y * w + x) * 4; d[i] = 128 - nx * m * 127; d[i + 1] = 128 - ny * m * 127; d[i + 2] = 128; d[i + 3] = 255; }
    g.putImageData(id, 0, 0); return c.toDataURL();
  },
  _lqFilter(w, h, rad) {
    const small = Math.min(w, h) < 70, key = `${w}x${h}x${Math.round(rad)}`; let id = this._lqMaps.get(key); if (id) return id;
    id = "lqf" + this._lqMaps.size; const bez = small ? Math.min(w, h) * .42 : 26, S = small ? 30 : 56, f = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    for (const [k, v] of Object.entries({ id, x: 0, y: 0, width: w, height: h, filterUnits: "userSpaceOnUse", primitiveUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" })) f.setAttribute(k, v);
    const ch = (n, s, mx) => `<feDisplacementMap in="b" in2="m" scale="${s}" xChannelSelector="R" yChannelSelector="G" result="d${n}"/><feColorMatrix in="d${n}" type="matrix" values="${mx}" result="c${n}"/>`;
    f.innerHTML = `<feGaussianBlur in="SourceGraphic" stdDeviation="${small ? .6 : 1.4}" result="b"/><feImage href="${this._lqMap(w, h, rad, bez)}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="m"/>` + ch("r", S, "1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0") + ch("g", S * 1.1, "0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0") + ch("b", S * 1.2, "0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0") + `<feBlend in="cr" in2="cg" mode="screen" result="rg"/><feBlend in="rg" in2="cb" mode="screen"/>`;
    this._lqSvg.firstChild.appendChild(f); this._lqMaps.set(key, id); return id;
  },
  _lqGlass() {
    if (!this._lqOn() || !this._appEl || !REFRACT || this._c.refraction === false) return;
    const els = [...this._appEl.querySelectorAll(LEAF), ...this._appEl.querySelectorAll(".lqg")];
    for (const el of els) { const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight); if (!w || !h || w * h > 900000) continue; const k = w + "x" + h; if (el._lqk === k) continue; el._lqk = k;
      const rad = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, v = `url(#${this._lqFilter(w, h, rad)}) saturate(1.25) brightness(1.04)`; el.style.setProperty("backdrop-filter", v, "important"); el.style.setProperty("-webkit-backdrop-filter", v, "important"); }
  },
  // ---------- touch: elastic surfaces and the drop
  _lqEvents() {
    const R = this.shadowRoot; this._lqJ = new Map();
    const keyOf = (el) => { if (el.dataset.a) return `[data-a="${window.CSS.escape(el.dataset.a)}"]${el.dataset.v ? `[data-v="${window.CSS.escape(el.dataset.v)}"]` : ""}`; if (el.classList.contains("oc")) { const i = [...el.parentElement.children].filter((x) => x.classList.contains("oc")).indexOf(el); return `.main .oc:nth-of-type(${i + 1})`; } return null; };
    const jst = (el) => { let q = this._lqJ.get(el); if (!q) { q = { v: [1, 0, 0, 0], d: [0, 0, 0, 0], t: [1, 0, 0, 0], soft: el.classList.contains("oc"), key: keyOf(el) }; this._lqJ.set(el, q); } return q; };
    R.addEventListener("pointerdown", (e) => { if (!this._lqOn() || e.target.closest(".lqh")) return; let el = e.target.closest(PRESS); if (!el) { if (e.target.closest("button,[data-a],input,.trul,.tgau,.dialbox,.vl")) return; el = e.target.closest(".oc"); } if (!el) return;
      this._lqP = el; const q = jst(el), r = el.getBoundingClientRect(); q.cx = r.left + r.width / 2; q.cy = r.top + r.height / 2; q.t[0] = q.soft ? .988 : .95; if (!RM()) q.d[1] += q.soft ? .12 : .45; this._lqKick(); });
    R.addEventListener("pointermove", (e) => { const el = this._lqP; if (!el || !this._lqJ.has(el)) return; const q = this._lqJ.get(el), m = q.soft ? 3 : 8, cl = (v) => Math.max(-m, Math.min(m, v)); q.t[2] = cl((e.clientX - q.cx) * .14); q.t[3] = cl((e.clientY - q.cy) * .14); });
    const up = () => { const el = this._lqP; if (!el) return; this._lqP = null; const q = this._lqJ.get(el); if (q) { q.t = [1, 0, 0, 0]; if (!RM()) q.d[1] -= q.soft ? .2 : 1.1; } };
    window.addEventListener("pointerup", up); window.addEventListener("pointercancel", up);
    addEventListener("resize", () => { if (this._lqOn()) { this._lqWall(); cancelAnimationFrame(this._lqGT); this._lqGT = requestAnimationFrame(() => this._lqGlass()); } });
  },
  _lqKick() { if (!this._lqRaf && this._lqOn()) { this._lqLast = 0; this._lqRaf = requestAnimationFrame((t) => this._lqFrame(t)); } },
  _lqSprings(dt) {
    for (const [el, q] of this._lqJ) { let e = 0; const k = q.soft ? 300 : 420, c = RM() ? 60 : q.soft ? 18 : 13; for (let i = 0; i < 4; i++) { q.d[i] += ((q.t[i] - q.v[i]) * k - q.d[i] * c) * dt; q.v[i] += q.d[i] * dt; e += (Math.abs(q.t[i] - q.v[i]) + Math.abs(q.d[i]) * .05) * (i < 2 ? 100 : 1); }
      if (e < .03 && el !== this._lqP) { el.style.transform = ""; this._lqJ.delete(el); } else if (el.isConnected) el.style.transform = `translate(${q.v[2].toFixed(2)}px,${q.v[3].toFixed(2)}px) scale(${(q.v[0] + q.v[1]).toFixed(4)},${(q.v[0] - q.v[1]).toFixed(4)})`; }
  },
  _lqIndStep(dt) {
    const ind = this._lqInd; if (!ind || !ind.isConnected) return false; const side = ind.parentElement, on = side.querySelector(".rl.on"); if (!on) { ind.style.opacity = 0; return false; } ind.style.opacity = 1;
    const ty = on.offsetTop, th = on.offsetHeight, tx = on.offsetLeft, tw = on.offsetWidth, N = this._lqN || (this._lqN = { y: ty, v: 0, h: th });
    const c = RM() ? 40 : 15; N.v += ((ty - N.y) * 230 - N.v * c) * dt; N.y += N.v * dt; N.h += (th - N.h) * Math.min(1, dt * 12);
    const st = Math.min(.5, Math.abs(N.v) / 1200); ind.style.width = tw + "px"; ind.style.height = N.h + "px"; ind.style.transform = `translate(${tx}px,${(N.y - N.h * st * .5).toFixed(2)}px) scale(${(1 - st * .25).toFixed(4)},${(1 + st).toFixed(4)})`;
    return Math.abs(ty - N.y) > .3 || Math.abs(N.v) > .5;
  },
  _lqFrame(t) {
    this._lqRaf = 0; if (!this._lqOn() || !this.isConnected) return;
    const dt = Math.min(.033, this._lqLast ? (t - this._lqLast) / 1000 : .016); this._lqLast = t;
    this._lqSprings(dt / 2); this._lqSprings(dt / 2); const nav = this._lqIndStep(dt); const drop = this._lqDropStep(dt, t);
    if (this._lqJ.size || nav || drop || this._lqP) this._lqRaf = requestAnimationFrame((x) => this._lqFrame(x));
  },
  // ---------- glass drop in the greeting tile: shows the house consumption, can be dragged and tapped
  _lqDrop() {
    const hero = this._appEl.querySelector(".hero.ap"), want = hero && this._c.liquid_drop !== false && (this._c.energy || {}).home;
    if (!want) { if (this._lqD) this._lqD.el.remove(); return; }
    if (!this._lqD) this._lqDInit();
    const D = this._lqD; if (D.el.parentElement !== hero) { hero.appendChild(D.el); D.w = 0; }
    const s = this._hass.states[this._c.energy.home], w = s ? parseFloat(s.state) : NaN, lab = isNaN(w) ? "–" : Math.abs(w) >= 1000 ? this._fmt(w / 1000, 1) : this._fmt(w, 0), u = isNaN(w) ? "" : Math.abs(w) >= 1000 ? "kW" : "W";
    D.drops[0].el.innerHTML = `<b>${lab}</b><small>${u} ${T("Haus")}</small>`; D.drops[0].el.setAttribute("aria-label", `${T("Haus")} ${lab} ${u}`);
    this._lqDHomes(); D.vis = true; this._lqKick();
  },
  _lqDInit() {
    const el = document.createElement("div"); el.className = "lqd"; el.innerHTML = '<canvas aria-hidden="true"></canvas><div class="lqh" tabindex="0" role="button"></div><div class="lqh" tabindex="0" role="button" aria-label="Tropfen"></div>';
    const cv = el.querySelector("canvas"), gl = cv.getContext("webgl", { premultipliedAlpha: true, antialias: true }), D = this._lqD = { el, cv, gl, drops: [...el.querySelectorAll(".lqh")].map((h) => ({ el: h, x: 0, y: 0, vx: 0, vy: 0, hx: 0, hy: 0, r: 0, s: 1, ca: 1, sa: 0, amp: 0, ph: 0, drag: null, tx: 0, ty: 0, init: false })), near: false };
    if (gl) {
      const sh = (ty, src) => { const o = gl.createShader(ty); gl.shaderSource(o, src); gl.compileShader(o); return o; }, p = gl.createProgram();
      gl.attachShader(p, sh(gl.VERTEX_SHADER, "attribute vec2 a;varying vec2 v;void main(){v=a*.5+.5;gl_Position=vec4(a,0.,1.);}"));
      gl.attachShader(p, sh(gl.FRAGMENT_SHADER, `precision highp float;varying vec2 v;uniform sampler2D T;uniform vec4 R;uniform vec2 V;uniform float t;uniform vec4 D[2];uniform vec4 E[2];
float fld(vec2 p,out float re){float F=0.;float wr=0.;for(int i=0;i<2;i++){vec2 q=p-D[i].xy;vec2 e=E[i].xy;q=vec2(q.x*e.x+q.y*e.y,-q.x*e.y+q.y*e.x);q.x/=E[i].z;q.y*=E[i].z;float an=atan(q.y,q.x);float rad=D[i].z*(1.+D[i].w*cos(2.*an)*sin(E[i].w)+.5*D[i].w*cos(3.*an+1.)*sin(E[i].w*1.6)+.012*sin(an*3.+t*.8+float(i)*2.));float d=length(q)/rad;float f=1./(d*d*d*d+1e-4);F+=f;wr+=f*D[i].z;}re=wr/F;return F;}
float hgt(float F){return sqrt(max(0.,1.-inversesqrt(F)));}
vec3 smp(vec3 N,float ior,vec2 css,float re){vec3 r=refract(vec3(0.,0.,-1.),N,1./ior);return texture2D(T,clamp((css+r.xy*re*.8)/V,0.,1.)).rgb;}
void main(){vec2 l=vec2(v.x,1.-v.y)*R.zw;float re;float F=fld(l,re);float a=smoothstep(1.,1.12,F);if(a<=0.){gl_FragColor=vec4(0.);return;}
float z=hgt(F);float r2;float zx=hgt(fld(l+vec2(1.,0.),r2));float zy=hgt(fld(l+vec2(0.,1.),r2));vec3 N=normalize(vec3(-(zx-z)*re,-(zy-z)*re,1.));
vec2 css=R.xy+l;vec3 c=vec3(smp(N,1.38,css,re).r,smp(N,1.5,css,re).g,smp(N,1.64,css,re).b);
float f=pow(1.-N.z,2.2);c=mix(c,c*vec3(.72,1.,.96),.22);c+=f*.3*(.5+.5*cos(6.2832*(f*1.4+vec3(0.,.33,.67))+t*.6));c=mix(c,vec3(.86,.95,1.),f*.38);
vec3 M=vec3(N.x,-N.y,N.z);vec3 L=normalize(vec3(-.55,.65,.55));float s=pow(max(dot(reflect(-L,M),vec3(0.,0.,1.)),0.),48.);float s2=pow(max(dot(reflect(-normalize(vec3(.6,-.5,.5)),M),vec3(0.,0.,1.)),0.),20.);c+=s*.95+s2*.18;c=c*(.96+.1*M.y)*1.12+.03;
gl_FragColor=vec4(c*a,a);}`));
      gl.linkProgram(p); gl.useProgram(p); const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW); const loc = gl.getAttribLocation(p, "a"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      D.U = {}; for (const k of ["T", "R", "V", "t", "D", "E"]) D.U[k] = gl.getUniformLocation(p, k); D.tex = gl.createTexture(); this._lqTex = true;
    }
    const kick = (d, a) => { d.amp = Math.min(.22, d.amp + a); };
    D.drops.forEach((d) => { const h = d.el;
      h.addEventListener("pointerdown", (e) => { const c = el.getBoundingClientRect(); d.drag = { ox: e.clientX - c.left - d.x, oy: e.clientY - c.top - d.y, moved: 0 }; d.tx = d.x; d.ty = d.y; h.setPointerCapture(e.pointerId); kick(d, .07); this._lqKick(); e.preventDefault(); e.stopPropagation(); });
      h.addEventListener("pointermove", (e) => { if (!d.drag) return; const c = el.getBoundingClientRect(), nx = e.clientX - c.left - d.drag.ox, ny = e.clientY - c.top - d.drag.oy; d.drag.moved += Math.abs(nx - d.tx) + Math.abs(ny - d.ty); d.tx = nx; d.ty = ny; });
      const up = () => { if (!d.drag) return; kick(d, d.drag.moved < 6 ? .12 : Math.min(.16, Math.hypot(d.vx, d.vy) / 4000 + .05)); d.drag = null; };
      h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up); h.addEventListener("click", (e) => e.stopPropagation());
      h.addEventListener("keydown", (e) => { const k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (k) { d.vx += k[0] * 500; d.vy += k[1] * 500; kick(d, .06); e.preventDefault(); } else if (e.key === "Enter" || e.key === " ") { kick(d, .14); e.preventDefault(); } this._lqKick(); });
    });
    D.kick = kick;
  },
  _lqDHomes() {
    const D = this._lqD, W = D.el.clientWidth, H = D.el.clientHeight; if (!W || !H) return; const a = D.drops[0], b = D.drops[1], narrow = W < 560;
    a.r = narrow ? Math.min(36, W * .11) : Math.max(30, Math.min(H * .36, 88)); a.hx = W - a.r - (narrow ? 12 : 34); a.hy = narrow ? a.r + 14 : H / 2; b.r = Math.max(10, a.r * .3); b.hx = a.hx - a.r * .7; b.hy = a.hy + a.r * 1.05; D.el.parentElement && D.el.parentElement.classList.toggle("lqn", narrow);
    for (const d of D.drops) { if (!d.init) { d.x = d.hx; d.y = d.hy; d.init = true; } d.el.style.width = d.el.style.height = d.r * 2 + "px"; }
  },
  _lqDropStep(dt, ms) {
    const D = this._lqD; if (!D || !D.el.isConnected) return false; const W = D.el.clientWidth, H = D.el.clientHeight; if (!W || !H) return false;
    if (D.w !== W || D.h !== H) { D.w = W; D.h = H; this._lqDHomes(); }
    let moving = false; const [a, b] = D.drops;
    for (let n = 0; n < 2; n++) { const h = dt / 2;
      for (const d of D.drops) { const tx = d.drag ? d.tx : d.hx, ty = d.drag ? d.ty : d.hy, k = d.drag ? 260 : 46, c = d.drag ? 22 : 7.5; d.vx += ((tx - d.x) * k - d.vx * c) * h; d.vy += ((ty - d.y) * k - d.vy * c) * h; }
      const dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy) || 1, reach = (a.r + b.r) * 1.25, near = dist < reach;
      if (near) { const f = (1 - dist / reach) * 900; for (const [d, sg, m] of [[a, -1, .25], [b, 1, 1]]) if (!d.drag) { d.vx += sg * dx / dist * f * m * h; d.vy += sg * dy / dist * f * m * h; } }
      if (near !== D.near) { D.near = near; D.kick(a, .05); D.kick(b, .1); }
      for (const d of D.drops) { d.x += d.vx * h; d.y += d.vy * h; const m = d.r * .55;
        for (const [ax, lo, hi] of [["x", m, W - m], ["y", m, H - m]]) { const v = "v" + ax; if (d[ax] < lo) { d[ax] = lo; if (d[v] < 0) { D.kick(d, Math.min(.14, -d[v] / 3000)); d[v] *= -.45; } } else if (d[ax] > hi) { d[ax] = hi; if (d[v] > 0) { D.kick(d, Math.min(.14, d[v] / 3000)); d[v] *= -.45; } } }
        const sp = Math.hypot(d.vx, d.vy), ts = 1 + Math.min(.32, sp / 1500); d.s += (ts - d.s) * Math.min(1, h * 14); if (sp > 20) { const q = Math.min(1, h * 16); d.ca += (d.vx / sp - d.ca) * q; d.sa += (d.vy / sp - d.sa) * q; const nn = Math.hypot(d.ca, d.sa) || 1; d.ca /= nn; d.sa /= nn; }
        d.amp *= Math.exp(-2.6 * h); d.ph += h * 15; } }
    for (const d of D.drops) { d.el.style.transform = `translate(${(d.x - d.r).toFixed(1)}px,${(d.y - d.r).toFixed(1)}px)`; if (d.drag || d.amp > .004 || Math.hypot(d.vx, d.vy) > 2 || Math.hypot(d.x - d.hx, d.y - d.hy) > .5) moving = true; }
    const gl = D.gl; if (gl) { const cv = D.cv, r = cv.getBoundingClientRect(), pr = Math.min(2, devicePixelRatio || 1), w = Math.round(r.width * pr), hh = Math.round(r.height * pr); if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh; }
      if (this._lqTex && this._lqCv) { gl.bindTexture(gl.TEXTURE_2D, D.tex); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._lqCv); for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v); this._lqTex = false; }
      if (w && hh && r.bottom > 0 && r.top < innerHeight) { const U = D.U; gl.viewport(0, 0, w, hh); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform1i(U.T, 0); gl.uniform4f(U.R, r.left, r.top, r.width, r.height); gl.uniform2f(U.V, innerWidth, innerHeight); gl.uniform1f(U.t, RM() ? 1.5 : ms / 1000);
        gl.uniform4fv(U.D, D.drops.flatMap((q) => [q.x, q.y, q.r, q.amp])); gl.uniform4fv(U.E, D.drops.flatMap((q) => [q.ca, q.sa, q.s, q.ph])); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }
    // the gentle wobble of the surface keeps running while the drop is visible (paused with reduced motion)
    return moving || !RM();
  }
};
customElements.whenDefined("home-live-card").then(() => { const C = customElements.get("home-live-card"); Object.assign(C.prototype, M); });
})();
