// Home Live Card – background picture and background animations (city lights, weather, day cycle)
(() => {
const CITY = "docs/bg/neon-city.webp";
const cdn = (ref) => `https://cdn.jsdelivr.net/gh/RomanM78/home-live-card@${ref}/${CITY}`;
// animations offered per colour scheme
const ANIMS = { neon: ["off", "city", "weather"], amber: ["off", "weather", "daycycle"], graphite: ["off", "weather", "daycycle"], glass: ["off", "weather", "daycycle"] };
const rnd = (seed) => { let s = seed; return (a, b) => { s = (s * 16807) % 2147483647; return a + ((s - 1) / 2147483646) * (b - a); }; };
const pct = (v) => v.toFixed(2) + "%";

const FXCSS = `
:host([bgfx]){position:relative}
:host([bgfx]) .app{position:relative;z-index:1;background:transparent!important}
.bgfx,.fxf{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.fxf{z-index:2}
.bgfx .vp,.fxf .vp{position:sticky;top:0;height:calc(100vh - var(--off,0px));overflow:hidden}
.vp>*{position:absolute}
.pic{left:50%;top:50%;width:max(100%,calc((100vh - var(--off,0px))*1.7914));aspect-ratio:1920/1072;transform:translate(-50%,-50%)}
.kb{position:absolute;inset:0;background:center/100% 100% no-repeat}
.kb.mv{animation:hk 40s ease-in-out infinite alternate;transform-origin:42% 40%}
@keyframes hk{from{transform:scale(1)}to{transform:scale(1.035)}}
.kb>*{position:absolute}
.shade{inset:0;background:linear-gradient(180deg,rgba(10,2,24,0) 0%,rgba(10,2,24,0) 38%,rgba(10,2,24,.55) 58%,rgba(10,2,24,.88) 80%)}
.synth{inset:0;background-position:center bottom;background-size:100% auto;background-repeat:no-repeat}
/* city lights */
.sunh{left:24.2%;top:38.5%;width:22%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(255,240,190,.55) 0,rgba(255,190,110,.25) 25%,rgba(255,150,90,0) 60%);animation:hsun 8s ease-in-out infinite}
@keyframes hsun{0%,100%{opacity:.55;transform:translate(-50%,-50%) scale(.95)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.05)}}
.sgl{height:.28%;border-radius:4px;background:rgba(255,236,190,.9);transform:translateX(-50%);animation:hgl ease-in-out infinite}
@keyframes hgl{0%,100%{opacity:.1;transform:translateX(-50%) scaleX(.5)}50%{opacity:.9;transform:translateX(-50%) scaleX(1)}}
.sp{width:.22%;aspect-ratio:1;border-radius:50%;background:#fff3d0;box-shadow:0 0 6px 2px rgba(255,220,160,.8);animation:hpo ease-in-out infinite}
@keyframes hpo{0%,100%{opacity:0}50%{opacity:1}}
.win{width:.18%;aspect-ratio:1;background:#ffe2a8;box-shadow:0 0 4px rgba(255,210,140,.9);animation:hwi ease-in-out infinite}
@keyframes hwi{0%,100%{opacity:.15}50%{opacity:1}}
.neo{border-radius:2px;animation:hne ease-in-out infinite}
@keyframes hne{0%,100%{opacity:.35}45%{opacity:1}48%{opacity:.4}51%{opacity:1}}
.car{width:.32%;aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%)}
.car.w{background:#fff;box-shadow:0 0 8px 3px rgba(255,240,200,.9)}
.car.r{background:#ff3a3a;box-shadow:0 0 8px 3px rgba(255,60,60,.85)}
.boat{width:.3%;aspect-ratio:1;border-radius:50%;background:#fff;box-shadow:0 0 8px 3px rgba(255,255,255,.7);animation:hbo 60s linear infinite}
@keyframes hbo{from{left:89%;top:61.2%}to{left:70%;top:63.5%}}
.wisp{height:2.2%;border-radius:50%;filter:blur(6px);animation:hwp linear infinite alternate}
@keyframes hwp{from{transform:translateX(-8vw)}to{transform:translateX(8vw)}}
/* weather */
.cld{border-radius:50%;filter:blur(30px);animation:hcl linear infinite}
@keyframes hcl{from{transform:translateX(-40vw)}to{transform:translateX(140vw)}}
.fog{left:-20%;width:140%;height:16%;filter:blur(24px);animation:hfo ease-in-out infinite alternate}
@keyframes hfo{from{transform:translateX(-6%)}to{transform:translateX(6%)}}
.drop{top:-12%;width:1.5px;height:9%;animation:hdr linear infinite}
@keyframes hdr{from{transform:translateY(0) rotate(8deg)}to{transform:translateY(125vh) rotate(8deg)}}
.spl{width:14px;height:4px;border-radius:50%;border:1px solid;opacity:0;animation:hsl 1.1s ease-out infinite}
@keyframes hsl{0%{transform:scale(.2);opacity:.9}100%{transform:scale(1.6);opacity:0}}
.flk{top:-4%;border-radius:50%;background:#fff;animation:hfl linear infinite}
@keyframes hfl{0%{transform:translate(0,0)}25%{transform:translate(1.5vw,27vh)}50%{transform:translate(-1vw,54vh)}75%{transform:translate(1.2vw,81vh)}100%{transform:translate(0,110vh)}}
.flash{inset:0;background:rgba(220,225,255,.5);opacity:0;animation:hfx 17s linear infinite}
@keyframes hfx{0%,93%,95.5%,100%{opacity:0}93.6%{opacity:.6}94.2%{opacity:.08}94.8%{opacity:.45}}
.star{width:2px;height:2px;border-radius:50%;background:#fff;box-shadow:0 0 5px #fff;animation:hst 3.6s ease-in-out infinite}
@keyframes hst{0%,100%{opacity:.2}50%{opacity:1}}
.rays{left:55%;top:-30%;width:90%;height:120%;background:conic-gradient(from 200deg at 50% 0%,transparent 0deg,rgba(255,230,170,.10) 8deg,transparent 16deg,rgba(255,230,170,.08) 26deg,transparent 34deg,rgba(255,230,170,.10) 46deg,transparent 56deg);animation:hry 14s ease-in-out infinite alternate;transform-origin:50% 0}
@keyframes hry{from{transform:rotate(-4deg);opacity:.6}to{transform:rotate(4deg);opacity:1}}
/* day cycle */
.sky{inset:0;transition:background 2s}
.dsun{width:10vw;aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,#fff6d0 0,#ffd27a 45%,rgba(255,180,90,0) 70%);animation:hds 9s ease-in-out infinite}
@keyframes hds{0%,100%{filter:brightness(.92)}50%{filter:brightness(1.08)}}
.hill{left:0;right:0;bottom:0;height:22%;background:rgba(10,12,16,.85);clip-path:polygon(0 60%,15% 40%,32% 55%,50% 30%,68% 50%,84% 35%,100% 52%,100% 100%,0 100%)}
@media (prefers-reduced-motion: reduce){.bgfx *,.fxf *{animation:none!important}}
`;
// neon with the city picture: free upper third ("postcard"), lighter glass
const POSTCSS = `
.oc.hero,.hero{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.oc.hero::before,.oc.hero::after,.hero::before,.hero::after{display:none!important}.hero>img{display:none!important}
.oc.hero h2,.hero h2{text-shadow:0 0 4px #fff,0 0 12px #FF3CAC,0 0 26px #FF3CAC,0 2px 22px rgba(0,0,0,.6)!important}
.oc,.dev{background:linear-gradient(160deg,rgba(40,8,64,.36),rgba(16,3,30,.44))!important;backdrop-filter:blur(7px) saturate(1.4)!important;-webkit-backdrop-filter:blur(7px) saturate(1.4)!important}
.side{background:linear-gradient(90deg,rgba(14,1,28,.62),rgba(14,1,28,.36))!important;backdrop-filter:blur(8px)!important;-webkit-backdrop-filter:blur(8px)!important}
/*end*/@container app (min-width: 900px){.view.ov{grid-template-rows:minmax(0,.9fr) minmax(0,1.1fr) minmax(0,.88fr)!important}}
`;

const M = {
  _anim() {
    const c = this._c, pal = c.palette || "amber"; let a = c.animation;
    if (a && typeof a === "object") a = a[pal];
    a = String(a || "off");
    return (ANIMS[pal] || ANIMS.amber).includes(a) ? a : "off";
  },
  _bgImg() {
    const c = this._c, pal = c.palette || "amber", b = c.background_image;
    if (b === "none" || b === "synthwave") return null;
    if (b) return { url: String(b), city: false };
    if (pal !== "neon") return null;
    return { url: this._cityUrl(), city: true };
  },
  _cityUrl() {
    const v = window.HOME_LIVE_VERSION, C = (window.__hlCity = window.__hlCity || {});
    if (C.url) return C.url;
    const tag = v ? cdn("v" + v) : cdn("main");
    if (!C.probe) {
      C.probe = true; C.url = null;
      const im = new Image();
      im.onload = () => { C.url = tag; window.dispatchEvent(new Event("home-live-bg")); };
      im.onerror = () => { C.url = cdn("main"); window.dispatchEvent(new Event("home-live-bg")); };
      im.src = tag;
    }
    return C.url || tag;
  },
  _bgSync() {
    const root = this.shadowRoot; if (!root || !this._appEl) return;
    const c = this._c, pal = c.palette || "amber", anim = c.animate === false ? "off" : this._anim(), img = this._bgImg();
    const neSyn = pal === "neon" && !img;
    const on = !!img || anim !== "off";
    if (!this._bgL) { this._bgL = () => { this._bgKey = null; this._bgSync(); }; window.addEventListener("home-live-bg", this._bgL); }
    if (!on) {
      if (this._fxB) { this._fxB.remove(); this._fxF.remove(); this._fxS.remove(); this._fxB = this._fxF = this._fxS = null; }
      this.removeAttribute("bgfx"); this._bgKey = null; return;
    }
    if (!this._fxB || !this._fxB.isConnected) {
      this._fxS = document.createElement("style"); this._fxB = document.createElement("div"); this._fxB.className = "bgfx"; this._fxF = document.createElement("div"); this._fxF.className = "fxf";
      root.insertBefore(this._fxS, this._appEl); root.insertBefore(this._fxB, this._appEl); this._appEl.after(this._fxF);
      this._bgKey = null;
    }
    this.toggleAttribute("bgfx", true);
    const st = this._hass && this._hass.states, sun = st && st["sun.sun"];
    const wid = (c.overview && c.overview.weather) || c.weather, w = wid && st && st[wid], cond = w ? w.state : "";
    const night = sun ? sun.state === "below_horizon" : false;
    const el = sun && sun.attributes ? Number(sun.attributes.elevation) : NaN, az = sun && sun.attributes ? Number(sun.attributes.azimuth) : NaN, rising = !!(sun && sun.attributes && sun.attributes.rising);
    const imgUrl = img ? (img.city ? this._cityUrl() : img.url) : "";
    const key = [pal, anim, imgUrl, anim === "weather" ? cond + night : "", anim === "daycycle" ? Math.round(el / 2) + "|" + Math.round(az / 5) + rising : ""].join("|");
    if (key === this._bgKey) return;
    this._bgKey = key;
    this._fxS.textContent = FXCSS + (pal === "neon" && img && img.city ? POSTCSS : "");
    const R = rnd(7), back = [], front = [];
    // base: picture or synthwave scene
    if (img) {
      let k = "";
      if (img.city && anim === "city") k = this._cityFx(R);
      back.push(`<div class="pic"><div class="kb${anim !== "off" ? " mv" : ""}" style="background-image:url(&quot;${String(imgUrl).replace(/["'&\\<>()\s]/g, (ch) => "%" + ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"))}&quot;)">${k}</div></div>`);
      if (img.city) back.push(`<div class="shade"></div>`);
    } else if (neSyn) {
      back.push(`<div class="synth" style="background-image:url(&quot;${NE_SCENE}&quot;),linear-gradient(180deg,#0E0120 0%,#2A0646 28%,#6B1A7A 50%,#D23C86 66%,#FF7A59 76%,#14021f 76.1%)"></div>`);
    }
    if (anim === "weather") this._weatherFx(R, cond, night, pal, back, front);
    if (anim === "daycycle") this._dayFx(R, el, az, rising, back);
    this._fxB.innerHTML = `<div class="vp">${back.join("")}</div>`;
    this._fxF.innerHTML = front.length ? `<div class="vp">${front.join("")}</div>` : "";
  },
  _cityFx(R) {
    let k = `<i class="sunh"></i>`;
    [[30, 9, 24, "rgba(255,140,170,.35)", 80], [55, 15, 30, "rgba(255,170,120,.3)", 100], [12, 22, 26, "rgba(255,190,140,.35)", 90], [66, 26, 22, "rgba(200,120,220,.3)", 110]].forEach(([l, t, w, col, d]) => { k += `<i class="wisp" style="left:${l}%;top:${t}%;width:${w}%;background:${col};animation-duration:${d}s;animation-delay:-${d / 2}s"></i>`; });
    for (let j = 0; j < 14; j++) { const y = 41.2 + j * 0.75 + j * j * 0.02; k += `<i class="sgl" style="left:${pct(24.2 + R(-0.4, 0.4))};top:${pct(y)};width:${pct(1.4 + j * 0.35)};animation-duration:${R(2.5, 4.5).toFixed(2)}s;animation-delay:-${R(0, 4).toFixed(2)}s"></i>`; }
    for (let j = 0; j < 26; j++) { const y = R(42, 72), x = R(2, 34 - (y - 42) * 0.3); k += `<i class="sp" style="left:${pct(x)};top:${pct(y)};animation-duration:${R(2, 5).toFixed(2)}s;animation-delay:-${R(0, 5).toFixed(2)}s"></i>`; }
    for (let j = 0; j < 16; j++) k += `<i class="sp" style="left:${pct(R(60, 95))};top:${pct(R(49, 58))};animation-duration:${R(2, 5).toFixed(2)}s;animation-delay:-${R(0, 5).toFixed(2)}s"></i>`;
    const TW = [[48.6, 49.8, 35, 45], [54.6, 56.3, 35, 44], [57.4, 58.6, 35, 44], [60.3, 62.6, 33, 45], [63.8, 65.6, 29, 45], [68.2, 70.3, 33, 45], [71.6, 72.9, 34, 45], [76.3, 78.3, 33, 45], [82.5, 84.8, 39, 46]];
    for (let j = 0; j < 72; j++) { const t = TW[j % TW.length]; k += `<i class="win" style="left:${pct(R(t[0], t[1]))};top:${pct(R(t[2], t[3]))};animation-duration:${R(4, 9).toFixed(2)}s;animation-delay:-${R(0, 9).toFixed(2)}s"></i>`; }
    [[56.1, 37, 1.3, 6.5, "rgba(255,80,200,.55)"], [72.6, 36, 1, 6, "rgba(70,230,255,.6)"], [76.4, 35, 0.8, 6, "rgba(70,230,255,.5)"], [28.8, 59.5, 0.35, 8, "rgba(200,120,255,.7)"], [31.8, 59.5, 0.35, 8, "rgba(200,120,255,.7)"], [57.6, 44, 3, 0.6, "rgba(70,230,255,.7)"]].forEach(([l, t, w, h, col]) => { k += `<i class="neo" style="left:${l}%;top:${t}%;width:${w}%;height:${h}%;background:${col};box-shadow:0 0 14px ${col};animation-duration:${R(5, 9).toFixed(2)}s;animation-delay:-${R(0, 5).toFixed(2)}s"></i>`; });
    const path = (pts) => pts.map(([x, y], i) => `${(i / (pts.length - 1) * 100).toFixed(1)}%{left:${x}%;top:${y}%}`).join("");
    const av = [[47.2, 45.5], [47.6, 52], [48.1, 60], [48.7, 68], [49.3, 76], [49.8, 82]];
    const avU = av.map(([x, y]) => [+(x + 0.45 + (y - 45) * 0.008).toFixed(2), y]), avD = av.map(([x, y]) => [+(x - 0.2).toFixed(2), y]);
    const hw = [[54.5, 50], [57, 51.3], [60, 53.5], [62, 56.5], [63.5, 60], [65.5, 64], [68, 67.5], [71, 70.5], [74.5, 72.5]];
    const hwB = hw.map(([x, y]) => [x + 0.5, +(y - 0.2).toFixed(2)]);
    const br = [[62, 54.6], [66, 54.2], [70, 53.8], [74, 53.4], [79, 53]];
    k += `<style>@keyframes cad{${path(avD)}}@keyframes cau{${path(avU.slice().reverse())}}@keyframes cha{${path(hw)}}@keyframes chb{${path(hwB.slice().reverse())}}@keyframes cba{${path(br)}}@keyframes cbb{${path(br.slice().reverse().map(([x, y]) => [x, +(y - 0.35).toFixed(2)]))}}</style>`;
    const cars = (n, an, cls, dur) => { for (let j = 0; j < n; j++) k += `<i class="car ${cls}" style="animation:${an} ${dur}s linear infinite;animation-delay:-${(j * dur / n + R(0, dur / n * 0.6)).toFixed(2)}s"></i>`; };
    cars(6, "cad", "w", 22); cars(6, "cau", "r", 24); cars(4, "cha", "r", 18); cars(4, "chb", "w", 20); cars(3, "cba", "w", 16); cars(3, "cbb", "r", 17);
    return k + `<i class="boat"></i>`;
  },
  _weatherFx(R, cond, night, pal, back, front) {
    const drop = pal === "graphite" ? "rgba(205,218,238,.36)" : pal === "neon" ? "rgba(255,200,235,.4)" : "rgba(255,225,190,.38)";
    const cloudC = pal === "graphite" ? "rgba(140,150,165,.20)" : pal === "neon" ? "rgba(170,90,190,.22)" : "rgba(120,110,100,.22)";
    const clouds = (n) => { for (let i = 0; i < n; i++) { const d = R(70, 120); back.push(`<i class="cld" style="left:0;top:${pct(R(-10, 32))};width:${pct(R(35, 60))};height:${pct(R(14, 24))};background:${cloudC};animation-duration:${d.toFixed(1)}s;animation-delay:-${R(0, d).toFixed(1)}s"></i>`); } };
    const stars = (n) => { for (let i = 0; i < n; i++) back.push(`<i class="star" style="left:${pct(R(0, 100))};top:${pct(R(0, 55))};animation-delay:-${R(0, 3.6).toFixed(2)}s"></i>`); };
    const rain = (n) => {
      for (let i = 0; i < n; i++) front.push(`<i class="drop" style="left:${pct(R(-10, 105))};background:linear-gradient(180deg,transparent,${drop});animation-duration:${R(0.55, 0.9).toFixed(2)}s;animation-delay:-${R(0, 1).toFixed(2)}s;opacity:${R(0.4, 1).toFixed(2)}"></i>`);
      for (let i = 0; i < 18; i++) front.push(`<i class="spl" style="left:${pct(R(0, 100))};bottom:${pct(R(1, 8))};border-color:${drop};animation-delay:-${R(0, 1.1).toFixed(2)}s"></i>`);
    };
    if (["rainy", "pouring", "lightning-rainy", "snowy-rainy"].includes(cond)) { clouds(4); rain(cond === "pouring" ? 110 : cond === "snowy-rainy" ? 50 : 75); if (cond === "lightning-rainy") back.push(`<i class="flash"></i>`); }
    else if (cond === "lightning") { clouds(5); back.push(`<i class="flash"></i>`); }
    else if (cond === "snowy") { clouds(3); for (let i = 0; i < 60; i++) { const s = R(2, 5); front.push(`<i class="flk" style="left:${pct(R(-5, 100))};width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;opacity:${R(0.35, 0.9).toFixed(2)};animation-duration:${R(9, 16).toFixed(1)}s;animation-delay:-${R(0, 16).toFixed(1)}s"></i>`); } }
    else if (cond === "fog") { for (let i = 0; i < 4; i++) back.push(`<i class="fog" style="top:${pct(10 + i * 20)};background:${cloudC.replace(/[\d.]+\)$/, ".35)")};animation-duration:${R(18, 30).toFixed(1)}s;animation-delay:-${R(0, 20).toFixed(1)}s"></i>`); }
    else if (["cloudy", "partlycloudy", "windy", "windy-variant"].includes(cond)) { clouds(cond === "partlycloudy" ? 3 : 5); if (night) stars(cond === "partlycloudy" ? 30 : 10); }
    else if (cond === "clear-night" || (night && cond === "sunny")) stars(70);
    else if (cond === "sunny") back.push(`<i class="rays"></i>`);
  },
  _dayFx(R, el, az, rising, back) {
    const e = isNaN(el) ? -20 : el;
    const sky = e < -12 ? ["#0b1020", "#151a33"] : e < -4 ? ["#1b2142", "#3a3560"] : e < 8 ? (rising ? ["#232347", "#8a4b52"] : ["#2a2148", "#94502f"]) : ["#1f3c5a", "#4f7393"];
    back.push(`<div class="sky" style="background:linear-gradient(180deg,${sky[0]},${sky[1]})"></div>`);
    const so = e < -6 ? 1 : e < 0 ? (-e) / 6 : 0;
    if (so > 0) { let s = ""; for (let i = 0; i < 70; i++) s += `<i class="star" style="left:${pct(R(0, 100))};top:${pct(R(0, 60))};animation-delay:-${R(0, 3.6).toFixed(2)}s"></i>`; back.push(`<div style="position:absolute;inset:0;opacity:${so.toFixed(2)}">${s}</div>`); }
    if (e > -3 && !isNaN(az)) { const x = Math.max(4, Math.min(96, ((az - 60) / 240) * 92 + 4)), y = Math.max(8, Math.min(84, 84 - (e / 60) * 74)); back.push(`<i class="dsun" style="left:${pct(x)};top:${pct(y)}"></i>`); }
    const cc = e > 8 ? "rgba(210,220,235,.16)" : "rgba(200,150,170,.14)";
    for (let i = 0; i < 3; i++) { const d = R(90, 140); back.push(`<i class="cld" style="left:0;top:${pct(R(0, 30))};width:${pct(R(30, 50))};height:${pct(R(10, 18))};background:${cc};animation-duration:${d.toFixed(1)}s;animation-delay:-${R(0, d).toFixed(1)}s"></i>`); }
    back.push(`<div class="hill"></div>`);
    if (e > -4) back.push(`<style>.side{background:linear-gradient(90deg,rgba(10,12,18,.55),rgba(10,12,18,.25))!important}</style>`);
  }
};
window.HOME_LIVE_ANIMS = ANIMS;
customElements.whenDefined("home-live-card").then(() => { const C = customElements.get("home-live-card"); Object.assign(C.prototype, M); });
})();
