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
:host([lq]) .app{background:var(--lqw) center/var(--lqs,100% 100%) no-repeat fixed!important}
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
:host([lq]) .side .rl{position:relative;z-index:1}
:host([lq]) .lqd{position:sticky;top:0;display:block;pointer-events:none;z-index:6;overflow:hidden}
:host([lq]) .lqd canvas{position:absolute;inset:0;width:100%;height:100%}
:host([lq]) .lqh{position:absolute;left:0;top:0;border-radius:50%;pointer-events:auto;touch-action:none;cursor:grab;display:grid;place-content:center;text-align:center;color:#fff;text-shadow:0 2px 14px rgba(0,10,30,.6);-webkit-user-select:none;user-select:none}
:host([lq]) .lqn .lqh b{font-size:19px}:host([lq]) .lqn .lqh small{font-size:10px}
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
  // ---------- wallpaper: always a picture behind the glass (own picture, house photo or the bundled default); also the texture of the drop
  _lqWallSrc() {
    const c = this._c, b = c.background_image, night = !this._isDay(), o = c.overview || {};
    if (b === "none" || b === false) return null;
    if (b && b !== "synthwave") return String(b);
    const own = (night ? o.hero_night : o.hero_day) || o.hero_image; if (own) return String(own);
    const v = window.HOME_LIVE_VERSION; return `https://cdn.jsdelivr.net/gh/RomanM78/home-live-card@${v ? "v" + v : "main"}/docs/bg/liquid-${night ? "night" : "day"}.webp`;
  },
  // load a picture so it can be drawn into a canvas: fetch as blob first (works through the HA service worker and on any same-origin path), then a plain <img> as last resort
  _lqImg(src, cb) {
    const I = this._lqImgs || (this._lqImgs = {}); let e = I[src]; if (e) { if (!e.done) e.cbs.push(cb); return e; }
    e = I[src] = { im: null, ok: false, taint: false, done: false, cbs: [cb] }; const fin = () => { e.done = true; e.cbs.forEach((f) => f && f()); e.cbs = []; };
    const plain = () => { const im = new Image(); im.onload = () => { e.im = im; e.ok = true; e.taint = true; fin(); }; im.onerror = () => fin(); im.src = src; };
    const viaImg = (u, cors) => new Promise((res, rej) => { const im = new Image(); if (cors) im.crossOrigin = "anonymous"; im.onload = () => res(im); im.onerror = rej; im.src = u; });
    const alt = /cdn\.jsdelivr\.net/.test(src) && !/@main\//.test(src) ? src.replace(/@[^/]+\//, "@main/") : null;
    const get = (u) => fetch(u, { credentials: "same-origin" }).then((r) => { if (!r.ok) throw new Error(r.status); return r.blob(); }).then((b) => viaImg(URL.createObjectURL(b)));
    get(src).catch(() => (alt ? get(alt) : Promise.reject())).catch(() => viaImg(src, true)).then((im) => { e.im = im; e.ok = true; fin(); }, plain);
    return e;
  },
  _lqWall() {
    const W = Math.max(320, Math.min(innerWidth || 1280, 2400)), H = Math.max(320, Math.min(innerHeight || 800, 1600)), night = !this._isDay(), src = this._lqWallSrc(), key = W + "x" + H + night + src; if (this._lqWk === key) return;
    const e = src ? this._lqImg(src, () => { this._lqWk = null; this._lqWall(); }) : null, im = e && e.ok && !e.taint ? e.im : null, wait = e && !e.done;
    if (wait && this._lqWk === "") return; this._lqWk = wait ? "" : key; const ok = !!im;
    const c = this._lqCv || (this._lqCv = document.createElement("canvas")); c.width = W; c.height = H; const g = c.getContext("2d");
    if (ok) { const s = Math.max(W / im.naturalWidth, H / im.naturalHeight), dw = im.naturalWidth * s, dh = im.naturalHeight * s; g.drawImage(im, (W - dw) / 2, (H - dh) / 2, dw, dh);
      // light veil so text on the glass stays readable on busy photos
      g.fillStyle = night ? "rgba(6,14,34,.26)" : "rgba(16,28,58,.2)"; g.fillRect(0, 0, W, H);
    } else {
      const P = night ? ["#12243f", "#22406a", "#4b4a7a", "#8a6276"] : ["#6f93bb", "#93b2d2", "#b9b7d4", "#e2b9ab"], B = night ? ["rgba(70,150,190,.35)", "rgba(200,120,110,.3)", "rgba(110,120,230,.3)"] : ["rgba(150,215,240,.55)", "rgba(255,190,160,.5)", "rgba(170,180,255,.4)"];
      const gr = g.createLinearGradient(0, 0, W * .4, H); P.forEach((p, i) => gr.addColorStop(i / 3, p)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
      const m = Math.max(W, H), blob = (x, y, r, col) => { const q = g.createRadialGradient(x, y, 0, x, y, r); q.addColorStop(0, col); q.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = q; g.fillRect(0, 0, W, H); };
      blob(W * .15, H * .2, m * .5, B[0]); blob(W * .9, H * .78, m * .55, B[1]); blob(W * .7, H * .08, m * .4, B[2]);
      g.lineWidth = 1; for (const [cx, cy, a] of [[W * .2, H * .32, night ? .2 : .3], [W * .85, H * .8, night ? .16 : .24]]) for (let i = 1; i < 46; i++) { const r = i * m / 38; g.strokeStyle = `rgba(255,255,255,${(a * (1 - i / 60)).toFixed(3)})`; g.beginPath(); for (let k = 0; k <= 120; k++) { const t = k / 120 * 6.2832, rr = r * (1 + .07 * Math.sin(t * 3 + i * .35) + .04 * Math.sin(t * 5 - i * .2)), x = cx + Math.cos(t) * rr, y = cy + Math.sin(t) * rr * .82; k ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
    }
    let u; try { u = c.toDataURL("image/jpeg", .9); } catch (e) { u = ""; }
    const tn = e && e.ok && e.taint; this.style.setProperty("--lqw", tn ? `url("${src}")` : u ? `url(${u})` : "none"); this.style.setProperty("--lqs", tn ? "cover" : "100% 100%"); this._lqWv = (this._lqWv || 0) + 1;
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
  // ---------- glass drops: several free drops float over every page and refract the picture behind it
  _lqHost() {
    const A = this._appEl, v = this._view, q = (x) => A.querySelector(x), E = this._c.energy || {}, num = (x) => (x ? this._num(x) : null), lab = (b, sm) => ({ b, sm, aria: `${sm} ${b}` });
    const H = { kind: v, lab: null, photo: null, tint: null };
    if (v === "overview") { const w = num(E.home); if (w != null) H.lab = Math.abs(w) >= 1000 ? lab(this._fmt(w / 1000, 1), "kW " + T("Haus")) : lab(this._fmt(w, 0), "W " + T("Haus")); }
    else if (v === "room" || v === "home") { const r = (this._c.rooms || []).find((x) => x.id === this._room) || (this._c.rooms || [])[0]; let t = r && r.temp ? num(r.temp) : null;
      if (r && t == null) { const cl = (r.devices || []).find((d) => this._dom(d.entity) === "climate"), s = cl && this._st(cl.entity); if (s && typeof s.attributes.current_temperature === "number") t = s.attributes.current_temperature; }
      if (t != null) H.lab = lab(this._fmt(t) + "°", T("Raum"));
      const st = q(".view.room .scene.ph style"), mu = st && (st.textContent.match(/url\("([^"]+)"\)/) || [])[1];
      if (mu) { const rg = [...st.textContent.matchAll(/rgba\(([\d.]+),([\d.]+),([\d.]+),([\d.]+)\)/g)].slice(0, 2).map((m) => m.slice(1).map(Number)); H.photo = mu; H.tint = rg.length ? [rg[0][0] / 255, rg[0][1] / 255, rg[0][2] / 255, rg.reduce((x, m) => x + m[3], 0) / rg.length] : null; } }
    else if (v === "sec") { const t = ((q(".slist .oh small") || {}).textContent || "").trim(), m = t.match(/^(\d+)\s*(.*)$/); if (m) H.lab = lab(m[1], m[2]); }
    else if (v === "energy") { const b = q(".fchips span b"); if (b) H.lab = lab(b.textContent.trim(), T("autark")); }
    return H;
  },
  _lqDrop() {
    const main = this._appEl.querySelector(".main");
    if (this._c.liquid_drop === false || !main) { if (this._lqD) this._lqD.el.remove(); return; }
    if (!this._lqD) this._lqDInit();
    const D = this._lqD, H = this._lqHost(); if (D.el.parentElement !== main) { main.prepend(D.el); D.w = 0; }
    const cs = getComputedStyle(main); D.el.style.marginLeft = `-${cs.paddingLeft}`; D.el.style.marginRight = `-${cs.paddingRight}`;
    if (D.kind !== H.kind) { D.kind = H.kind; D.w = 0; } D.tint = H.tint || [0, 0, 0, 0]; D.photo = null;
    if (H.photo) { const pe = this._lqImg(H.photo, null); D.photo = pe; D.fixed = getComputedStyle(main, "::before").position === "fixed"; D.main = main; }
    const d0 = D.drops[0].el; d0.innerHTML = H.lab ? `<b>${esc(H.lab.b)}</b><small>${esc(H.lab.sm)}</small>` : ""; d0.setAttribute("aria-label", H.lab ? H.lab.aria : T("Tropfen"));
    this._lqDHomes(); this._lqKick();
  },
  _lqDInit() {
    const el = document.createElement("div"); el.className = "lqd"; el.innerHTML = '<canvas aria-hidden="true"></canvas>' + '<div class="lqh" tabindex="0" role="button"></div>'.repeat(6);
    const cv = el.querySelector("canvas"), gl = cv.getContext("webgl", { premultipliedAlpha: true, antialias: true }), D = this._lqD = { el, cv, gl, drops: [...el.querySelectorAll(".lqh")].map((h) => ({ el: h, x: 0, y: 0, vx: 0, vy: 0, hx: 0, hy: 0, r: 0, s: 1, ca: 1, sa: 0, amp: 0, ph: 0, drag: null, tx: 0, ty: 0, init: false })), near: false };
    if (gl) {
      const sh = (ty, src) => { const o = gl.createShader(ty); gl.shaderSource(o, src); gl.compileShader(o); return o; }, p = gl.createProgram();
      gl.attachShader(p, sh(gl.VERTEX_SHADER, "attribute vec2 a;varying vec2 v;void main(){v=a*.5+.5;gl_Position=vec4(a,0.,1.);}"));
      gl.attachShader(p, sh(gl.FRAGMENT_SHADER, `precision highp float;varying vec2 v;uniform sampler2D T;uniform vec4 R;uniform vec4 V;uniform vec4 K;uniform float t;uniform vec4 D[6];uniform vec4 E[6];
float fld(vec2 p,out float re){float F=0.;float wr=0.;for(int i=0;i<6;i++){if(D[i].z<=0.)continue;vec2 q=p-D[i].xy;vec2 e=E[i].xy;q=vec2(q.x*e.x+q.y*e.y,-q.x*e.y+q.y*e.x);q.x/=E[i].z;q.y*=E[i].z;float an=atan(q.y,q.x);float rad=D[i].z*(1.+D[i].w*cos(2.*an)*sin(E[i].w)+.5*D[i].w*cos(3.*an+1.)*sin(E[i].w*1.6)+.012*sin(an*3.+t*.8+float(i)*2.));float d=length(q)/rad;float f=1./(d*d*d*d+1e-4);F+=f;wr+=f*D[i].z;}re=wr/max(F,1e-6);return F;}
float hgt(float F){return sqrt(max(0.,1.-inversesqrt(F)));}
vec3 smp(vec3 N,float ior,vec2 css,float re){vec3 r=refract(vec3(0.,0.,-1.),N,1./ior);return texture2D(T,clamp((css+r.xy*re*.8-V.xy)/V.zw,0.,1.)).rgb;}
void main(){vec2 l=vec2(v.x,1.-v.y)*R.zw;float re;float F=fld(l,re);float a=smoothstep(1.,1.12,F);if(a<=0.){gl_FragColor=vec4(0.);return;}
float z=hgt(F);float r2;float zx=hgt(fld(l+vec2(1.,0.),r2));float zy=hgt(fld(l+vec2(0.,1.),r2));vec3 N=normalize(vec3(-(zx-z)*re,-(zy-z)*re,1.));
vec2 css=R.xy+l;vec3 c=vec3(smp(N,1.38,css,re).r,smp(N,1.5,css,re).g,smp(N,1.64,css,re).b);c=mix(c,K.rgb,K.a);
float f=pow(1.-N.z,2.2);c=mix(c,c*vec3(.72,1.,.96),.22);c+=f*.3*(.5+.5*cos(6.2832*(f*1.4+vec3(0.,.33,.67))+t*.6));c=mix(c,vec3(.86,.95,1.),f*.38);
vec3 M=vec3(N.x,-N.y,N.z);vec3 L=normalize(vec3(-.55,.65,.55));float s=pow(max(dot(reflect(-L,M),vec3(0.,0.,1.)),0.),48.);float s2=pow(max(dot(reflect(-normalize(vec3(.6,-.5,.5)),M),vec3(0.,0.,1.)),0.),20.);c+=s*.95+s2*.18;c=c*(.96+.1*M.y)*1.12+.03;
gl_FragColor=vec4(c*a,a);}`));
      gl.linkProgram(p); gl.useProgram(p); const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW); const loc = gl.getAttribLocation(p, "a"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      D.U = {}; for (const k of ["T", "R", "V", "K", "t", "D", "E"]) D.U[k] = gl.getUniformLocation(p, k); D.tex = gl.createTexture(); D.tk = "";
    }
    const kick = (d, a) => { d.amp = Math.min(.22, d.amp + a); };
    D.drops.forEach((d) => { const h = d.el;
      h.addEventListener("pointerdown", (e) => { const c = el.getBoundingClientRect(); d.drag = { ox: e.clientX - c.left - d.x, oy: e.clientY - c.top - d.y, moved: 0 }; d.tx = d.x; d.ty = d.y; h.setPointerCapture(e.pointerId); kick(d, .07); d.touch = performance.now() + 1e9; this._lqKick(); e.preventDefault(); e.stopPropagation(); });
      h.addEventListener("pointermove", (e) => { if (!d.drag) return; const c = el.getBoundingClientRect(), nx = e.clientX - c.left - d.drag.ox, ny = e.clientY - c.top - d.drag.oy; d.drag.moved += Math.abs(nx - d.tx) + Math.abs(ny - d.ty); d.tx = nx; d.ty = ny; });
      const up = () => { if (!d.drag) return; d.touch = performance.now(); kick(d, d.drag.moved < 6 ? .12 : Math.min(.16, Math.hypot(d.vx, d.vy) / 4000 + .05)); d.drag = null; };
      h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up); h.addEventListener("click", (e) => e.stopPropagation());
      h.addEventListener("keydown", (e) => { const k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (k) { d.vx += k[0] * 500; d.vy += k[1] * 500; kick(d, .06); e.preventDefault(); } else if (e.key === "Enter" || e.key === " ") { kick(d, .14); e.preventDefault(); } this._lqKick(); });
    });
    D.kick = kick;
  },
  _lqDHomes() {
    const D = this._lqD, el = D.el, H = Math.round(innerHeight || 800); el.style.height = H + "px"; el.style.marginBottom = -H + "px";
    const W = el.clientWidth; if (!W) return; const wide = W >= 700, n = 2, R = Math.max(34, Math.min(72, Math.min(W, H) * (wide ? .095 : .13)));
    const HM = wide ? [[.84, .78], [.73, .86]] : [[.78, .74], [.6, .82]], F = [1, .55];
    D.n = n; D.drops.forEach((d, i) => { const on = i < n; d.el.style.display = on ? "" : "none"; if (!on) { d.r = 0; return; }
      d.r = R * F[i]; d.hx = (d.uf ? d.uf[0] : HM[i][0]) * W; d.hy = (d.uf ? d.uf[1] : HM[i][1]) * H; d.f1 = .09 + i * .023; d.f2 = .07 + i * .019; d.p0 = i * 1.7;
      if (!d.init || D.w === 0) { d.x = d.hx; d.y = d.hy; d.vx = d.vy = 0; d.init = true; } d.el.style.width = d.el.style.height = d.r * 2 + "px"; });
    D.w = W; D.h = H; el.classList.toggle("lqn", !wide);
  },
  _lqDropStep(dt, ms) {
    const D = this._lqD; if (!D || !D.el.isConnected) return false; const W = D.el.clientWidth, H = D.h; if (!W || !H) return false;
    if (D.w !== W || Math.abs(H - (innerHeight || H)) > 40) this._lqDHomes();
    const ds = D.drops.slice(0, D.n), p = ms / 1000, rm = RM();
    for (let s = 0; s < 2; s++) { const h = dt / 2;
      for (const d of ds) { let tx = d.hx, ty = d.hy;
        if (d.drag) { tx = d.tx; ty = d.ty; }
        const m = d.r * 1.05; tx = Math.max(m, Math.min(W - m, tx)); ty = Math.max(m, Math.min(H - m, ty));
        const k = d.drag ? 260 : 0, c = d.drag ? 22 : 3.2; d.vx += ((tx - d.x) * k - d.vx * c) * h; d.vy += ((ty - d.y) * k - d.vy * c) * h; }
      // touching drops wobble when they flow together or tear apart
      for (let i = 0; i < ds.length; i++) for (let j = i + 1; j < ds.length; j++) { const a = ds[i], b = ds[j], key = i * 8 + j, near = Math.hypot(a.x - b.x, a.y - b.y) < (a.r + b.r) * 1.15; D.nr = D.nr || {}; if (near !== !!D.nr[key]) { D.nr[key] = near; D.kick(a, .05); D.kick(b, .09); } }
      for (const d of ds) { d.x += d.vx * h; d.y += d.vy * h; const m = d.r * .9;
        for (const [ax, lo, hi] of [["x", m, W - m], ["y", m, H - m]]) { const v = "v" + ax; if (d[ax] < lo) { d[ax] = lo; if (d[v] < 0) { D.kick(d, Math.min(.14, -d[v] / 3000)); d[v] *= -.45; } } else if (d[ax] > hi) { d[ax] = hi; if (d[v] > 0) { D.kick(d, Math.min(.14, d[v] / 3000)); d[v] *= -.45; } } }
        const sp = Math.hypot(d.vx, d.vy), ts = 1 + Math.min(.32, sp / 1500); d.s += (ts - d.s) * Math.min(1, h * 14); if (sp > 20) { const q = Math.min(1, h * 16); d.ca += (d.vx / sp - d.ca) * q; d.sa += (d.vy / sp - d.sa) * q; const nn = Math.hypot(d.ca, d.sa) || 1; d.ca /= nn; d.sa /= nn; }
        d.amp *= Math.exp(-2.6 * h); d.ph += h * 15; } }
    for (const d of ds) if (!d.drag && Math.hypot(d.vx, d.vy) < 4) d.uf = [d.x / W, d.y / H];
    for (const d of ds) d.el.style.transform = `translate(${(d.x - d.r).toFixed(1)}px,${(d.y - d.r).toFixed(1)}px)`;
    const gl = D.gl; if (gl) { const cv = D.cv, r = cv.getBoundingClientRect(); let pr = Math.min(1.5, devicePixelRatio || 1); if (r.width * r.height * pr * pr > 1.6e6) pr = Math.sqrt(1.6e6 / (r.width * r.height)); const w = Math.round(r.width * pr), hh = Math.round(r.height * pr); if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh; }
      // texture: the room photo when the page shows one, else the wallpaper
      let src = this._lqCv, tk = "w" + this._lqWv, TR = [0, 0, innerWidth, innerHeight], K = [0, 0, 0, 0]; const pe = D.photo, im = pe && pe.ok && !pe.taint && !pe.bad ? pe.im : null;
      if (im) { const br = D.fixed || !D.main ? { left: 0, top: 0, width: innerWidth, height: innerHeight } : D.main.getBoundingClientRect(), s = Math.max(br.width / im.naturalWidth, br.height / im.naturalHeight), dw = im.naturalWidth * s, dh = im.naturalHeight * s;
        src = im; tk = "p" + pe.im.src; K = D.tint; TR = [br.left + (br.width - dw) / 2, br.top + (br.height - dh) / 2, dw, dh]; }
      if (src && D.tk !== tk) { gl.bindTexture(gl.TEXTURE_2D, D.tex); try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src); D.tk = tk; } catch (e) { if (src === im) pe.bad = true; } for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v); }
      if (w && hh) { const U = D.U; gl.viewport(0, 0, w, hh); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform1i(U.T, 0); gl.uniform4f(U.R, r.left, r.top, r.width, r.height); gl.uniform4f(U.V, TR[0], TR[1], TR[2], TR[3]); gl.uniform4f(U.K, K[0], K[1], K[2], K[3]); gl.uniform1f(U.t, rm ? 1.5 : ms / 1000);
        const DD = [], EE = []; for (let i = 0; i < 6; i++) { const q = D.drops[i]; if (i < D.n) { DD.push(q.x, q.y, q.r, q.amp); EE.push(q.ca, q.sa, q.s, q.ph); } else { DD.push(0, 0, 0, 0); EE.push(1, 0, 1, 0); } }
        gl.uniform4fv(U.D, DD); gl.uniform4fv(U.E, EE); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }
    return true;
  }
};
customElements.whenDefined("home-live-card").then(() => { const C = customElements.get("home-live-card"); Object.assign(C.prototype, M); });
})();
