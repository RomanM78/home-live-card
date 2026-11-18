// Home Live Card – main card (rooms, overview, energy, security)
const P = {
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/>',
  blind: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M4 12h16"/>',
  power: '<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',
  back: '<path d="m15 6-6 6 6 6"/>', next: '<path d="m9 6 6 6-6 6"/>',
  up: '<path d="m6 15 6-6 6 6"/>', down: '<path d="m6 9 6 6 6-6"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  home: '<path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  speaker: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
  thermo: '<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/>',
  snow: '<path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18"/>', sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>', fan: '<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7s2 5-2 7M14 12c4 0 7 1 7 4s-5 2-7-2M12 14c0 4-1 7-4 7s-2-5 2-7M10 12c-4 0-7-1-7-4s5-2 7 2"/>',
  auto: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0z"/><path d="M12 18v4"/>',
  pc: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  gate: '<path d="M3 21V8l9-5 9 5v13"/><path d="M7 21v-9h10v9M7 15h10M7 18h10"/>',
  washer: '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6h.01M11 6h2"/>',
  dish: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 7h16M9 4.5h6"/>',
  play: '<path d="M7 4v16l13-8z"/>', pause: '<path d="M8 5v14M16 5v14"/>',
  prev: '<path d="M19 5 9 12l10 7zM5 5v14"/>', nextt: '<path d="M5 5l10 7-10 7zM19 5v14"/>',
  house: '<path d="M3 12 12 4l9 8v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  tower: '<path d="M8 22 12 2l4 20M6 10h12M7 16h10M4 6h16"/>',
  battery: '<rect x="6" y="4" width="12" height="18" rx="2"/><path d="M10 2h4"/>',
  dash: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  cloud: '<path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z"/>',
  rain: '<path d="M7 15h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 8a3.5 3.5 0 0 0 1 7z"/><path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  door: '<path d="M13 4h3a2 2 0 0 1 2 2v14M2 20h3M13 20h9M10 12v.01M13 4.6v16.6L6 20V5.5z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  cam: '<path d="m16 10 6-4v12l-6-4"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 9-1-1-2-2-2-4-2 2-1 5-1 7 0 4 3 7 7 7z"/>',
  robot: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
  car: '<path d="M5 17h14M6 17l1.5-6h9L18 17M7 17v2M17 17v2"/>',
  vol: '<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  unlock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
  motion: '<circle cx="13" cy="4" r="2"/><path d="m9 20 3-6 3 3v4M6 12l3-4 4 1 3 3 3 1"/>',
  win: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 3v18M4 12h16"/>'
};
const IMG = {};
const IMGX = () => Object.assign({}, IMG, window.HOME_LIVE_IMG || {});
const WX = { "clear-night": ["moon", "Klar"], cloudy: ["cloud", "Bewölkt"], fog: ["cloud", "Nebel"], hail: ["rain", "Hagel"], lightning: ["rain", "Gewitter"], "lightning-rainy": ["rain", "Gewitter"], partlycloudy: ["cloud", "Teilweise bewölkt"], pouring: ["rain", "Starkregen"], rainy: ["rain", "Regen"], snowy: ["snow", "Schnee"], "snowy-rainy": ["rain", "Schneeregen"], sunny: ["sun", "Sonnig"], windy: ["cloud", "Windig"], "windy-variant": ["cloud", "Windig"], exceptional: ["rain", "Unwetter"] };
const ALARM = { disarmed: ["Unscharf", ""], armed_home: ["Scharf · Zuhause", "g"], armed_away: ["Scharf · Abwesend", "g"], armed_night: ["Scharf · Nacht", "g"], armed_vacation: ["Scharf · Urlaub", "g"], armed_custom_bypass: ["Scharf", "g"], arming: ["Wird scharf …", "w"], pending: ["Verzögerung …", "w"], disarming: ["Wird entschärft …", "w"], triggered: ["ALARM ausgelöst", "r"] };
const ic = (n, s = 20, w = 1.8) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.plug}</svg>`;
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const TX = (a, i) => { if (!a) return a; const b = a.slice(); b[i] = T(b[i]); return b; };
const HVAC = { off: ["power", "Aus"], cool: ["snow", "Kühlen"], heat: ["sun", "Heizen"], dry: ["drop", "Trocknen"], fan_only: ["fan", "Lüften"], heat_cool: ["auto", "Auto"], auto: ["auto", "Auto"] };

const CSS = `
:host{display:block;font-family:Manrope,system-ui,sans-serif;container-type:inline-size;container-name:app;background:#0D0A08;min-height:calc(100vh - var(--off,0px));--card:#15100C;--card2:#1E1712;--line:#241B14;--line2:#2E241C;--tx:#F3ECE4;--mu:#9C9086;--mu2:#B9ADA2;--ac:#F28A3C;--acbg:#24170F;--acln:#5A3418;--warn:#F2B183;--cold:#8FB8D8;--inv:#15100C}
*{box-sizing:border-box}
button{font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;color:inherit}
.app{color:var(--tx);font-family:Manrope,system-ui,sans-serif;min-height:calc(100vh - var(--off,0px))}
.side{display:none}
.main{max-width:480px;margin:0 auto;padding:20px 20px 112px}
.view{display:flex;flex-direction:column;gap:14px}.colL,.colR{display:contents}.view.room .hdr{order:1}.view.room .tabs{order:2}.view.room .scene{order:3}.view.room .grid{order:4}.view.room .chips{order:5}
.view.room .ttl{align-items:flex-start;text-align:left}
.hdr{display:flex;align-items:center;justify-content:space-between;min-height:48px;gap:8px}
.rbtn{width:44px;height:44px;flex:none;border-radius:50%;border:1px solid var(--line2);background:var(--card);display:flex;align-items:center;justify-content:center}
.ttl{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:0;text-align:center}.ttl b{font-size:18px;font-weight:600}.ttl small{font-size:12px;color:var(--mu)}
.tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -20px;padding:0 20px}.tabs::-webkit-scrollbar{display:none}
.tabs button{padding:8px 14px;border-radius:999px;border:1px solid var(--line2);background:none;color:var(--mu2);font-size:13px;white-space:nowrap;min-height:38px}.tabs button.on{background:var(--tx);color:var(--inv);border-color:var(--tx);font-weight:600}
.scene{height:232px;border-radius:28px;overflow:hidden;position:relative;background:#140F0B;border:1px solid var(--line)}
.scene>svg{position:absolute;inset:0;width:100%;height:100%}
.gauges{position:absolute;left:14px;top:14px;display:flex;gap:8px}
.ring{width:76px;height:76px;border-radius:50%;background:rgba(13,10,8,.62);position:relative;display:flex;align-items:center;justify-content:center;border:none;padding:0}
.ring svg{position:absolute;inset:0;transform:rotate(-90deg)}
.ring .v{display:flex;flex-direction:column;align-items:center;position:relative}.ring .v b{font-size:15px;font-weight:600}.ring .v small{font-size:10px;color:var(--mu2)}.ring .v small.w{color:var(--warn)}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.dev{min-height:116px;padding:14px;border-radius:22px;display:flex;flex-direction:column;justify-content:space-between;gap:10px;background:var(--card);border:1px solid var(--line);transition:background .25s,border-color .25s}
.dev.on{background:var(--acbg);border-color:var(--acln)}.dev.off{opacity:.55}
.dev .top,.dev .bot{display:flex;justify-content:space-between;gap:8px}.dev .top{align-items:flex-start}.dev .bot{align-items:flex-end}
.ico{width:40px;height:40px;flex:none;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#241B15;color:var(--mu2)}.dev.on .ico{background:var(--ac);color:#1A0F07}
.sw{width:48px;height:28px;flex:none;border-radius:14px;border:none;padding:3px;display:flex;background:#33281F;justify-content:flex-start;transition:all .25s}.sw.on{background:var(--ac);justify-content:flex-end}.sw i{width:22px;height:22px;border-radius:50%;background:var(--tx);display:block}
.trig{height:32px;padding:0 12px;border-radius:16px;border:1px solid var(--acln);background:var(--acbg);color:var(--warn);font-size:12px;font-weight:600}
.nm{display:flex;flex-direction:column;gap:2px;min-width:0}.nm b{font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nm small{font-size:12px;color:var(--mu2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.go{width:36px;height:36px;flex:none;border-radius:50%;border:1px solid #3A2E25;background:none;display:flex;align-items:center;justify-content:center}
.chips{display:flex;gap:8px;flex-wrap:wrap}.chip{flex:1 1 30%;min-width:96px;padding:10px 12px;border-radius:16px;background:var(--card);border:1px solid var(--line);display:flex;flex-direction:column;gap:2px;text-align:left;min-height:48px}.chip small{font-size:11px;color:var(--mu)}.chip b{font-size:13px;font-weight:600}.chip.alert{border-color:var(--acln)}.chip.alert b{color:var(--warn)}
.empty{padding:16px;border-radius:20px;border:1px dashed var(--line2);color:var(--mu);font-size:13px;text-align:center}
.navw{position:fixed;left:0;right:0;bottom:max(16px,env(safe-area-inset-bottom));display:flex;justify-content:center;z-index:5;pointer-events:none}
.nav{--nw:78px;pointer-events:auto;position:relative;display:flex;gap:4px;padding:8px;border-radius:999px;background:rgba(36,23,15,.62);backdrop-filter:blur(18px) saturate(170%);-webkit-backdrop-filter:blur(18px) saturate(170%);border:1px solid rgba(255,194,138,.28);box-shadow:inset 0 1px 0 rgba(255,194,138,.35),0 20px 50px rgba(0,0,0,.45);touch-action:none}
.nitem{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:4px;width:var(--nw,84px);padding:10px 0;color:var(--tx);font-size:12px;font-weight:500;border:none;background:none;user-select:none}
.nitem svg{transition:opacity .2s}.nitem.on{color:#FFC28A}.nitem.under svg{opacity:0}
.nitem:focus-visible{outline:2px solid #FFC28A;outline-offset:-2px;border-radius:999px}
.bub{position:absolute;left:0;top:0;z-index:3;width:64px;height:64px;border-radius:50%;pointer-events:none;display:flex;align-items:center;justify-content:center;opacity:0;color:#fff;background:linear-gradient(180deg,rgba(255,194,138,.6),rgba(242,138,60,.2));backdrop-filter:blur(10px) saturate(180%);-webkit-backdrop-filter:blur(10px) saturate(180%);border:1px solid rgba(255,194,138,.9);box-shadow:0 0 22px rgba(242,138,60,.55),inset 0 2px 2px rgba(255,255,255,.6);will-change:transform}
.ndot{position:absolute;left:0;bottom:4px;width:5px;height:5px;border-radius:50%;background:#FFC28A;will-change:transform}
.vis{position:relative;height:330px;border-radius:28px;overflow:hidden;background:#140F0B;border:1px solid var(--line)}
.vis>svg.bg{position:absolute;inset:0;width:100%;height:100%}
.dialbox{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.dialbox svg{width:330px;height:280px}
.dval{position:absolute;left:0;right:0;top:50%;transform:translateY(-38%);display:flex;flex-direction:column;align-items:center;gap:4px;pointer-events:none}
.dval b{font-size:60px;font-weight:200;letter-spacing:-.03em;line-height:1}.dval b span{font-size:24px;font-weight:300}.dval small{font-size:13px;color:var(--mu2);text-align:center;padding:0 24px}
.ctlcol{display:flex;flex-direction:column;gap:14px}
.ctl{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.ctl button{width:60px;height:60px;border-radius:50%;border:1px solid var(--line2);background:var(--card);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:300}.ctl button.pri{background:var(--tx);color:var(--inv);border:none}.ctl button.on{background:var(--ac);color:#1A0F07;border:none}
.bigbtn{width:108px;height:108px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #3A2E25;background:#1A140F;transition:all .3s;margin:0 auto}
.bigbtn.on{border:none;background:var(--ac);color:#1A0F07;box-shadow:0 0 50px rgba(242,138,60,.5)}
.hint{font-size:13px;color:var(--mu);text-align:center}
.seg{display:flex;gap:4px;padding:4px;border-radius:999px;background:var(--card);border:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.seg button{flex:1;min-height:44px;padding:0 14px;border-radius:999px;border:none;font-size:14px;font-weight:600;background:transparent;color:var(--mu2);white-space:nowrap}.seg button.on{background:var(--tx);color:var(--inv)}
.modes{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}.modes button{width:56px;height:56px;border-radius:50%;border:1px solid var(--line2);background:var(--card);display:flex;align-items:center;justify-content:center}.modes button.on{background:var(--ac);color:#1A0F07;border:none}
.lbl{font-size:13px;color:var(--mu)}
.three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.three button{min-height:52px;border-radius:18px;border:1px solid var(--line);background:var(--card);font-size:14px;font-weight:500}
.meta{display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center}.meta b{font-size:16px}.meta small{font-size:13px;color:var(--mu2)}
.busy{opacity:.6}
.ovl{position:fixed;inset:0;background:rgba(5,4,3,.72);display:flex;align-items:center;justify-content:center;z-index:20;padding:24px}
.dlg{width:min(360px,100%);background:#1A140F;border:1px solid var(--line2);border-radius:28px;padding:24px;display:flex;flex-direction:column;gap:18px;text-align:center}.dlg b{font-size:18px}.dlg p{margin:0;color:var(--mu2);font-size:14px}
.dlg .row{display:flex;gap:10px}.dlg .row button{flex:1;min-height:52px;border-radius:18px;border:1px solid var(--line2);background:var(--card);font-size:15px;font-weight:600}.dlg .row button.ok{background:var(--ac);color:#1A0F07;border:none}
.flow{position:relative;border-radius:28px;background:#140F0B;border:1px solid var(--line);overflow:hidden}
.flow svg{display:block;width:100%;height:auto}
@keyframes hlflow{to{stroke-dashoffset:-24}}
.fl{stroke-dasharray:4 8;animation:hlflow var(--sp,1.2s) linear infinite}
.flow .fchips{display:flex;gap:8px;padding:0 14px 14px}
.flow .fchips span{flex:1;padding:8px 10px;border-radius:14px;background:#1A140F;font-size:11px;color:var(--mu);display:flex;flex-direction:column}.flow .fchips b{font-size:15px;color:var(--tx)}
.today{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.stat{border-radius:20px;background:var(--card);border:1px solid var(--line);padding:14px;display:flex;flex-direction:column;justify-content:space-between;gap:4px;text-align:left}.stat small{font-size:12px;color:var(--mu)}.stat b{font-size:24px;font-weight:300}.stat b span{font-size:13px;font-weight:400}.stat em{font-style:normal;font-size:11px;color:var(--mu)}.stat em.hi{color:var(--warn)}
.panel{border-radius:24px;background:var(--card);border:1px solid var(--line);padding:16px;display:flex;flex-direction:column;gap:12px}
.panel>.ph{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--mu)}
.bar{display:flex;flex-direction:column;gap:5px;background:none;border:none;padding:0;text-align:left;width:100%}.bar .bl{display:flex;justify-content:space-between;font-size:14px}.bar .bl b{font-weight:700}.bar.zero .bl{color:var(--mu)}.bar .bt{height:6px;border-radius:3px;background:#241B15;overflow:hidden}.bar .bt i{display:block;height:100%;border-radius:3px;background:var(--ac)}
.ww{display:flex;align-items:center;gap:16px}.ww .wr{width:92px;height:92px;flex:none;position:relative;display:flex;align-items:center;justify-content:center;border:none;background:none;padding:0}.ww .wr svg{position:absolute;inset:0;transform:rotate(-90deg)}.ww .wr span{display:flex;flex-direction:column;align-items:center;position:relative}.ww .wr b{font-size:20px;font-weight:600}.ww .wr small{font-size:10px;color:var(--mu)}
.ww .wc{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.boost{min-height:44px;border-radius:14px;font-size:14px;font-weight:600;border:1px solid #3A2E25;background:var(--card2)}.boost.on{border:none;background:var(--ac);color:#1A0F07}
.row{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13px}.row span{color:var(--mu2)}
.tday{display:flex;gap:12px;align-items:flex-start}.tdate{width:56px;flex:none;border-radius:16px;background:#1A140F;padding:8px 0;display:flex;flex-direction:column;align-items:center}.tdate small{font-size:11px;color:var(--mu)}.tdate b{font-size:21px;font-weight:600}.tday.next .tdate{background:var(--acbg);border:1px solid var(--acln)}.tday.next .tdate small:first-child{color:var(--warn)}
.bins{display:flex;flex-wrap:wrap;gap:6px}.bin{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;background:var(--card2);font-size:12px}.bin i{width:8px;height:8px;border-radius:50%;display:block}
.ehdr small{font-size:12px;color:var(--mu)}
.rl.en{gap:10px}
.view.ov{display:flex;flex-direction:column;gap:14px}
.oc{position:relative;overflow:hidden;border-radius:22px;background:linear-gradient(160deg,#1C1612,#110D0A 70%);border:1px solid rgba(255,194,138,.14);box-shadow:inset 0 1px 0 rgba(255,194,138,.08),0 10px 30px rgba(0,0,0,.35),0 6px 14px -8px rgba(242,138,60,.35);padding:16px;display:flex;flex-direction:column;gap:12px;min-width:0}
.oh{display:flex;align-items:center;gap:10px;white-space:nowrap;min-height:24px;background:none;border:none;padding:0;text-align:left;width:100%;color:var(--tx)}.oh .oi{color:var(--ac);display:flex}.oh b{font-size:16px;font-weight:600}.oh small{flex:1;font-size:12px;color:var(--mu);overflow:hidden;text-overflow:ellipsis}.oh .mo{color:var(--mu);display:flex}
.hero{min-height:190px;padding:20px}.hero>img{position:absolute;right:0;top:0;height:100%;width:100%;object-fit:cover;-webkit-mask-image:linear-gradient(90deg,transparent 0,rgba(0,0,0,.55) 60%,#000);mask-image:linear-gradient(90deg,transparent 0,rgba(0,0,0,.55) 60%,#000)}
.hero .hc{position:relative;display:flex;flex-direction:column;gap:4px;flex:1}.hero .hi{color:var(--ac)}.hero h2{margin:0;font-size:26px;font-weight:700;letter-spacing:-.02em}.hero p{margin:0;font-size:14px;color:var(--mu2)}
.pills{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:12px}.pill{display:flex;align-items:center;gap:8px;padding:7px 12px;border-radius:999px;background:rgba(23,17,13,.85);border:1px solid #2A2019;font-size:12px;color:var(--tx)}.pill>span:last-child{display:flex;flex-direction:column;text-align:left}.pill small{color:var(--mu);font-size:11px}
.g{color:#4CC38A}.wn{color:var(--warn)}.rd{color:#E5484D}
.wx .wn2{display:flex;align-items:center;gap:12px}.wx .wn2>span:first-child{color:#F2B183;display:flex}.wx .wt{display:flex;flex-direction:column}.wx .wt b{font-size:38px;font-weight:300;line-height:1}.wx .wt small{font-size:13px;color:var(--mu2)}
.wx .wm{display:flex;justify-content:space-between;font-size:12px;color:var(--mu)}.wx .wm b{color:var(--tx)}
.fc{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid #221A14;padding-top:10px;text-align:center;font-size:12px;color:var(--mu)}.fc>span{display:flex;flex-direction:column;align-items:center;gap:3px}.fc>span>span{color:#F2B183;display:flex}.fc b{color:var(--tx);font-weight:500}
.lb2{display:grid;grid-template-columns:1fr 1fr;gap:8px}.lb2 button{height:40px;border-radius:12px;border:1px solid #2A2019;background:#17110D;color:#D9CFC6;font-size:13px;display:flex;align-items:center;justify-content:center;gap:8px}.lb2 button.pri{border-color:rgba(242,138,60,.6);background:rgba(242,138,60,.16);color:#FFC28A}
.lts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
.lt{position:relative;aspect-ratio:3/4;border-radius:16px;overflow:hidden;border:1px solid #2A2019;padding:0;background:#120D0A;text-align:left;color:var(--tx);transition:border-color .3s}.lt.on{border-color:rgba(242,138,60,.7);box-shadow:0 0 18px -6px rgba(242,138,60,.6)}
.lt>img,.lt>svg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.lt>img{filter:brightness(.45) saturate(.6);transition:filter .3s}.lt.on>img{filter:none}
.lt .sh{position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,10,8,0) 35%,rgba(13,10,8,.92) 80%)}
.lt .lx{position:absolute;left:8px;right:8px;bottom:8px;display:flex;flex-direction:column;gap:3px}.lt .lx b{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lt .lx>span{display:flex;align-items:center;justify-content:space-between}.lt .lx small{font-size:11px;color:var(--mu)}.lt.on .lx small{color:var(--warn)}
.ms{width:30px;height:17px;border-radius:999px;padding:2px;display:flex;background:#3A2E25;justify-content:flex-start}.ms i{width:13px;height:13px;border-radius:50%;display:block;background:#7A6E64}.lt.on .ms{background:var(--ac);justify-content:flex-end}.lt.on .ms i{background:#fff}
.cl{display:flex;align-items:center;justify-content:center;gap:12px;flex:1}.gau{position:relative;width:140px;height:140px;flex:none}.gau svg{display:block}.gau>span{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.gau b{font-size:32px;font-weight:300}.gau small{font-size:11px;color:var(--mu)}
.pm{display:flex;flex-direction:column;gap:10px}.pm button{width:42px;height:42px;border-radius:50%;border:1px solid #3A2E25;background:#17110D;font-size:20px;display:flex;align-items:center;justify-content:center}
.md3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.md3 button{height:38px;border-radius:12px;font-size:12px;display:flex;align-items:center;justify-content:center;gap:6px;border:1px solid #2A2019;background:#17110D;color:#D9CFC6}.md3 button.on{border-color:rgba(242,138,60,.7);background:rgba(242,138,60,.16);color:#FFC28A}
.sc{display:flex;flex-direction:column;align-items:center;gap:2px;padding:2px 0;background:none;border:none;color:var(--tx)}.sc b{font-size:15px}.sc small{font-size:12px;color:var(--mu)}
.drs{display:flex;flex-direction:column;border-radius:12px;background:#15100C;border:1px solid #221A14}.drs button{display:flex;align-items:center;gap:10px;padding:8px 10px;font-size:13px;border:none;border-bottom:1px solid #221A14;background:none;text-align:left}.drs button:last-child{border-bottom:none}.drs button>span:first-child{color:var(--mu);display:flex}.drs button>span:nth-child(2){flex:1}.drs em{font-style:normal;color:var(--mu)}.drs em.wn{color:var(--warn)}
.mp{display:flex;gap:12px;align-items:center}.mp .cv{width:76px;height:76px;flex:none;border-radius:14px;background:linear-gradient(135deg,#7A3E14,#2A170C);display:flex;align-items:center;justify-content:center;color:#FFC28A;overflow:hidden}.mp .cv img{width:100%;height:100%;object-fit:cover}.mp>span:last-child{display:flex;flex-direction:column;gap:2px;min-width:0}.mp b{font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mp small{font-size:12px;color:var(--mu);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mc{display:flex;align-items:center;justify-content:center;gap:18px;flex:1}.mc button{border:none;background:none;color:#D9CFC6;display:flex;padding:6px}.mc button.pp{width:54px;height:54px;border-radius:50%;background:var(--ac);color:#1A0F07;align-items:center;justify-content:center}
.vl{display:flex;align-items:center;gap:8px;color:var(--mu)}.vl button{width:30px;height:30px;border-radius:50%;border:1px solid #2A2019;background:#17110D;font-size:16px;display:flex;align-items:center;justify-content:center;padding:0}.vl>span{flex:1;height:5px;border-radius:3px;background:#2A2019;position:relative}.vl>span i{position:absolute;left:0;top:0;bottom:0;border-radius:3px;background:var(--ac)}.vl small{font-size:11px;width:34px;text-align:right}
.eg{display:flex;align-items:baseline;gap:8px}.eg b{font-size:40px;font-weight:300;line-height:1}.eg span{font-size:16px;color:var(--mu2)}.esub{font-size:12px;color:var(--mu)}.esub b{color:var(--tx)}
.spk{flex:1;min-height:40px;display:flex}.spk svg{width:100%;height:100%;display:block}
.e3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.e3>span{border-radius:12px;background:#17110D;padding:10px;display:flex;flex-direction:column;gap:2px;font-size:11px;color:var(--mu)}.e3>span>span{display:flex}.e3 b{font-size:15px;color:var(--tx)}
.dv6{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;flex:1}.dv6 button{min-height:72px;border-radius:14px;background:#17110D;border:1px solid #2A2019;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:11px;color:#D9CFC6;white-space:nowrap;padding:4px}.dv6 button span{color:var(--tx)}.dv6 button small{font-size:10px;color:#7A6E64}.dv6 button.on{background:rgba(242,138,60,.12);border-color:rgba(242,138,60,.45);color:#FFC28A}.dv6 button.on small{color:var(--warn)}.dv6 button.off{opacity:.55}
.cam{flex:1;min-height:170px;border-radius:14px;overflow:hidden;position:relative;background:#120E0B;border:1px solid #2A2019;padding:0;display:flex;align-items:center;justify-content:center;color:#7A6E64;font-size:12px}.cam img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.cam em{position:absolute;right:8px;bottom:8px;font-style:normal;font-size:11px;padding:4px 8px;border-radius:999px;background:rgba(13,10,8,.75);color:var(--mu2)}
.qa{display:flex;flex-direction:column;gap:6px;flex:1;justify-content:space-between}.qa button{display:flex;align-items:center;gap:12px;padding:0 14px;min-height:40px;border-radius:12px;background:#17110D;border:1px solid #2A2019;font-size:13px;text-align:left}.qa button>span{color:var(--ac);display:flex}.qa button.on{border-color:rgba(242,138,60,.5)}
.rl.ovb{gap:10px}
.view.sec{display:flex;flex-direction:column;gap:14px}
.shero{gap:14px}.shr{display:flex;align-items:center;gap:16px}.sbig{width:88px;height:88px;flex:none;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--mu2);border:1px solid var(--line2)}.sbig.g{color:#4CC38A;background:radial-gradient(circle,rgba(76,195,138,.18),rgba(76,195,138,.02) 70%);border-color:rgba(76,195,138,.35);box-shadow:0 0 40px rgba(76,195,138,.18)}.sbig.wn{color:var(--warn)}.sbig.rd{color:#E5484D;border-color:#E5484D;box-shadow:0 0 40px rgba(229,72,77,.35)}
.sht{display:flex;flex-direction:column;gap:4px;min-width:0}.sht small{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mu)}.sht b{font-size:24px;font-weight:700;letter-spacing:-.02em}.sht span{font-size:13px;color:var(--mu2)}
.spills{display:flex;gap:8px;flex-wrap:wrap}.spills .pill{white-space:nowrap}
.amodes{display:flex;gap:8px}.amodes button{flex:1;min-height:46px;border-radius:14px;border:1px solid #2A2019;background:#17110D;color:#D9CFC6;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px}.amodes button.on{border-color:rgba(242,138,60,.7);background:rgba(242,138,60,.16);color:#FFC28A;cursor:default}
.grow{display:flex;align-items:center;gap:12px;padding:12px;border-radius:16px;background:#17110D;border:1px solid #2A2019}.gi{width:42px;height:42px;flex:none;border-radius:50%;background:#241B15;color:#D9CFC6;display:flex;align-items:center;justify-content:center}.gi.on{background:var(--ac);color:#1A0F07}.gt{flex:1;display:flex;flex-direction:column;min-width:0}.gt b{font-size:15px;font-weight:600}.gt small{font-size:12px;color:var(--mu)}.gt small.wn{color:var(--warn)}.grow button{height:38px;padding:0 16px;border-radius:999px;border:1px solid var(--acln);background:var(--acbg);color:var(--warn);font-size:13px;font-weight:600}
.cgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ccell{min-height:0;width:100%;aspect-ratio:16/10}.ccell>svg{color:#4A3A2E}.ctag{position:absolute;left:8px;top:8px;display:flex;align-items:center;gap:6px;padding:4px 9px;border-radius:999px;background:rgba(13,10,8,.7);font-size:11px;color:#F3ECE4}.ctag i{width:7px;height:7px;border-radius:50%;background:#4CC38A;display:block}.ctag.mv i{background:#F28A3C}.cname{position:absolute;left:0;right:0;bottom:0;padding:22px 10px 8px;background:linear-gradient(180deg,transparent,rgba(13,10,8,.9));display:flex;flex-direction:column;text-align:left;color:#F3ECE4}.cname b{font-size:13px;font-weight:600}.cname small{font-size:11px;color:#B9ADA2}
.sscroll{display:flex;flex-direction:column}.sgh{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mu);padding:10px 4px 2px}
.srow{display:flex;align-items:center;gap:10px;padding:8px 4px;border:none;border-bottom:1px solid #221A14;background:none;font-size:13px;text-align:left;width:100%}.srow>span:first-child{color:var(--mu);display:flex}.srow>span:nth-child(2){flex:1}.srow small{font-size:11px;color:#7A6E64}.srow b{font-size:12px;font-weight:600;color:#4CC38A;min-width:24px;text-align:right}.srow.op b,.srow.op>span:first-child{color:var(--warn)}
.pin .pdots{display:flex;justify-content:center;gap:12px}.pin .pdots i{width:12px;height:12px;border-radius:50%;border:1.5px solid var(--mu2);display:block}.pin .pdots i.f{background:var(--ac);border-color:var(--ac)}
.pin .pkeys{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.pin .pkeys button{min-height:58px;border-radius:18px;border:1px solid var(--line2);background:var(--card);font-size:22px;font-weight:500}.pin .pkeys button.ok{background:var(--ac);color:#1A0F07;border:none;font-size:16px;font-weight:700}.pin .pkeys button:disabled{opacity:.4}
.thb{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;height:32px;padding:0 12px;border-radius:999px;border:1px solid var(--line2);background:var(--card);color:var(--mu2);font-size:12px;font-weight:600;margin:0 6px 10px}
.thh{position:absolute;right:0;top:0;margin:0;background:rgba(23,17,13,.85)}
@container app (min-width: 900px){
  .app{display:grid;grid-template-columns:250px minmax(0,1fr);height:calc(100vh - var(--off,0px));min-height:0;overflow:hidden}
  .side{display:flex;flex-direction:column;gap:6px;padding:24px 14px 18px 20px;border-right:1px solid var(--line);overflow-y:auto;scrollbar-width:none}
  .clock{padding:0 6px 14px}.clock b{display:block;font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.clock small{font-size:13px;color:var(--mu)}
  .floor{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mu);padding:10px 8px 2px}
  .rl{display:flex;align-items:center;gap:10px;min-height:40px;padding:0 10px;border-radius:14px;border:none;background:none;color:var(--mu2);font-size:14px;text-align:left}
  .rl.on{background:var(--tx);color:var(--inv);font-weight:600}.rl em{margin-left:auto;font-style:normal;font-size:11px;min-width:22px;height:22px;border-radius:11px;background:var(--ac);color:#1A0F07;display:flex;align-items:center;justify-content:center;font-weight:700}
  .sidenav{margin-top:auto;display:flex;gap:8px;padding-top:14px}.sidenav button{flex:1;min-height:46px;border-radius:14px;border:1px solid var(--line2);background:var(--card);display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:var(--mu2)}
  .main{max-width:none;margin:0;padding:24px 28px;height:100%;min-height:0;overflow:hidden}
  .navw,.tabs{display:none}
  .view.room{display:grid;height:100%;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:24px}
  .view.room .colL,.view.room .colR{display:flex;flex-direction:column;gap:16px;min-height:0;grid-row:1}.view.room .colL{grid-column:1}.view.room .colR{grid-column:2}
  .view.room .scene{height:auto;aspect-ratio:1/1;max-height:calc(100% - 90px);flex:none}
  .view.room .grid{overflow-y:auto;scrollbar-width:none;align-content:start;min-height:0;flex:1}
  .view.room .ttl b{font-size:26px}
  .view.det{display:grid;height:100%;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);grid-template-areas:"hdr hdr" "vis ctl";column-gap:24px;row-gap:16px}
  .view.det .dialbox svg{width:min(92%,480px);height:auto}.view.det .dval b{font-size:84px}
  .view.det .hdr{grid-area:hdr}.view.det .vis{grid-area:vis;height:auto}.view.det .ctlcol{grid-area:ctl;justify-content:center;overflow-y:auto}
  .grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .view.energy{display:grid;height:100%;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1.2fr) minmax(0,1fr);gap:16px}
  .view.energy .hdr{grid-column:1/-1}.view.energy .flow{grid-column:1/3;display:flex;flex-direction:column;justify-content:center;min-height:0}.view.energy .flow svg{flex:1;min-height:0;width:100%}
  .view.energy .today{grid-template-rows:repeat(2,minmax(0,1fr))}.view.energy .today .stat b{font-size:30px;font-weight:200}
  .view.energy .panel{min-height:0;overflow:hidden}
  .view.ov{display:grid;height:100%;grid-template-columns:minmax(0,1.9fr) repeat(3,minmax(0,1fr));grid-template-rows:minmax(0,.72fr) minmax(0,1.1fr) minmax(0,.88fr);gap:14px}
  .view.ov .hero{grid-column:1/3;min-height:0}.view.ov .hero>img{width:62%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 35%);mask-image:linear-gradient(90deg,transparent,#000 35%)}.view.ov .wx{grid-column:3/5}
  .view.ov .oc{min-height:0}
  .view.ov .lts{flex:1;min-height:0}.view.ov .lt{aspect-ratio:auto;height:100%}
  .view.ov .cam{min-height:0}
  .view.ov .dv6 button{min-height:0}
  .view.ov .wx{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);grid-template-rows:auto minmax(0,1fr) auto;column-gap:18px;row-gap:8px}
  .view.ov .wx .oh{grid-column:1/-1}.view.ov .wx .wn2{grid-column:1}.view.ov .wx .wm{grid-column:1;flex-direction:column;gap:4px}
  .view.ov .wx .fc{grid-column:2;grid-row:2/4;border-top:none;border-left:1px solid #221A14;padding:0 0 0 14px;align-items:center}
  .view.ov .spk{min-height:0}.view.ov .e3>span{padding:7px 8px}.view.ov .e3 b{font-size:14px}.view.ov .eg b{font-size:34px}
  .view.ov .mp .cv{width:56px;height:56px}
  .view.sec{display:grid;height:100%;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:16px}
  .view.sec .colL,.view.sec .colR{display:flex;flex-direction:column;gap:16px;min-height:0}
  .view.sec .scams,.view.sec .slist{flex:1;min-height:0}.view.sec .cgrid{flex:1;min-height:0;grid-template-rows:1fr 1fr}.view.sec .ccell{aspect-ratio:auto;min-height:0}
  .view.sec .sscroll{flex:1;min-height:0;overflow-y:auto;scrollbar-width:none}.view.sec .sbig{width:110px;height:110px}.view.sec .sht b{font-size:30px}
}
.aor{color:#F28A3C}.pill.trh{border-color:#3A2E25}.pill.trh.urg{border-color:#F28A3C}.trh .tbins{display:flex;gap:1px}.trh i{display:flex}.trh.urg small{color:#F28A3C}
`;
const DAYC = {"#0D0A08":"#F2EBE2","#0A0806":"#F2EBE2","#15100C":"#FFFCF8","#1E1712":"#F6EEE4","#241B14":"#E8DDD0","#2E241C":"#DDD0C0","#F3ECE4":"#2A1D14","#9C9086":"#8A7A6C","#B9ADA2":"#6E5F52","#F28A3C":"#E07A2E","#24170F":"#FBE6D2","#5A3418":"#E6B88E","#F2B183":"#B85A16","#8FB8D8":"#3F7FB0","#140F0B":"#EFE6DB","#241B15":"#EFE5D9","#33281F":"#DCCFBF","#3A2E25":"#D8CBBB","#1A140F":"#F3ECE3","#FFC28A":"#B85A16","#1C1612":"#FFFFFF","#110D0A":"#FBF7F1","#2A2019":"#E2D6C6","#17110D":"#F3ECE3","#D9CFC6":"#5E5045","#221A14":"#EDE4D8","#120D0A":"#EFE6DB","#7A6E64":"#A39385","#4CC38A":"#2F9E6B","#7A3E14":"#F3C79F","#2A170C":"#F7D9BC","#120E0B":"#EFE6DB","#1B140F":"#F7F1E9","#0F0B08":"#E9DFD2","#6A5E52":"#9A8A7B","#1F2630":"#C4D8E8","#4A3A2E":"#A8927A","#0B0806":"#DED1C1","#3A2C21":"#BEA992","#4A3020":"#DDB58C","#33261C":"#CDBBA6","#3E2F24":"#B59E86","#5A463A":"#9C846C","#0C0D12":"#D3E3F0","#1A1D16":"#CBDABA","#0A0B08":"#D9E4CB","#7A4A2C":"#C48E60","#6A4020":"#CC9D6F","#3E4A5A":"#A3B8CC","#4A5A3E":"#A0B888","#3A4A5A":"#AABDD0","#1E2630":"#C6D8E7"};
const DAYR = {"rgba(255,194,138,.14)":"rgba(122,62,20,.10)","rgba(255,194,138,.08)":"rgba(255,255,255,.9)","rgba(0,0,0,.35)":"rgba(90,60,30,.10)","rgba(242,138,60,.35)":"rgba(224,122,46,.18)","rgba(23,17,13,.85)":"rgba(255,252,247,.9)","rgba(36,23,15,.62)":"rgba(255,250,244,.78)","rgba(0,0,0,.45)":"rgba(90,60,30,.18)","rgba(13,10,8,.62)":"rgba(255,252,247,.78)","rgba(5,4,3,.72)":"rgba(60,40,25,.35)","rgba(255,194,138,.28)":"rgba(122,62,20,.14)","rgba(255,194,138,.35)":"rgba(255,255,255,.9)"};
const GRC = {"#0D0A08":"#0E1014","#0A0806":"#0B0D11","#15100C":"#181B21","#1E1712":"#20242B","#241B14":"#2A2F37","#2E241C":"#343A44","#F3ECE4":"#F2F4F7","#9C9086":"#8C94A1","#B9ADA2":"#B4BBC6","#F28A3C":"#FF7A1F","#24170F":"#2A1C12","#5A3418":"#6B3A16","#F2B183":"#FFB074","#8FB8D8":"#8FB8E8","#140F0B":"#121419","#241B15":"#252A32","#33281F":"#333944","#3A2E25":"#3A414C","#1A140F":"#1A1D23","#FFC28A":"#FFB57A","#1C1612":"#1E2128","#110D0A":"#101217","#2A2019":"#2B3038","#17110D":"#171A1F","#D9CFC6":"#D3D8E0","#221A14":"#22262D","#120D0A":"#111317","#7A6E64":"#6E7684","#4CC38A":"#3DDC84","#7A3E14":"#8A4214","#2A170C":"#2D1A0D","#120E0B":"#111318","#1B140F":"#1B1E24","#0F0B08":"#0F1115","#6A5E52":"#636B78","#4A3A2E":"#464E5A","#0B0806":"#0A0C0F","#3A2C21":"#384049","#33261C":"#30363F","#3E2F24":"#3C434D","#5A463A":"#545C68"};
const GRR = {"rgba(255,194,138,.14)":"rgba(255,140,60,.22)","rgba(255,194,138,.08)":"rgba(255,255,255,.05)","rgba(23,17,13,.85)":"rgba(20,22,27,.85)","rgba(36,23,15,.62)":"rgba(24,27,33,.62)","rgba(13,10,8,.62)":"rgba(14,16,20,.62)","rgba(255,194,138,.28)":"rgba(255,140,60,.30)","rgba(255,194,138,.35)":"rgba(255,255,255,.10)"};
const grMap = (t) => t.replace(/#[0-9A-Fa-f]{6}\b/g, (c) => GRC[c.toUpperCase()] || c).replace(/rgba\(242,\s*138,\s*60,/g, "rgba(255,122,31,").replace(/rgba\([^)]*\)/g, (c) => GRR[c] || c);
// graphite palette: cool charcoal surfaces, vivid orange accent, cards outlined with a warm glow
const CSS_GR_X = `
:host{background:#0E1014}
.oc,.dev{border-color:rgba(255,140,60,.22);box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 12px 32px rgba(0,0,0,.45),0 8px 22px -12px rgba(255,122,31,.45)}
.oc{background:linear-gradient(165deg,#1E2128,#121419 75%)}
.dev{background:linear-gradient(165deg,#1C1F26,#15171C 80%)}
.dev.on,.ltile.on{border-color:rgba(255,122,31,.45)}
`;

// neon palette: synthwave sunset scene behind glass cards, pink/cyan neon, chrome numbers.
// Colours of the amber base are recoloured by rule (warm neutrals -> violet, orange accents -> pink).
const NEX = { "#F2B183": "#FFB347", "#8FB8D8": "#5CF3FF", "#8FB8E8": "#5CF3FF", "#F2C14E": "#FFE27A", "#4CC38A": "#3DF5A6", "#0D0A08": "#12021E" };
const _nec = new Map();
const neRGB = (r, g, b) => {
  const k = r + "," + g + "," + b; if (_nec.has(k)) return _nec.get(k);
  const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), L = (mx + mn) / 2, d = mx - mn;
  let h = 0, S = 0;
  if (d) { S = L > .5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === R ? ((G - B) / d + (G < B ? 6 : 0)) : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; h *= 60; }
  let out = [r, g, b];
  const warm = h >= 0 && h < 52 && d > 0.01;
  if (warm || !d) {
    let H, SS;
    if (warm && S >= .45 && L > .25) { H = 326; SS = Math.min(1, S + .1); }
    else if (L > .62) { H = 318; SS = .45; }
    else { H = 282; SS = Math.min(.62, S + .28); }
    if (!d && L > .9) { H = 0; SS = 0; }
    const q = L < .5 ? L * (1 + SS) : L + SS - L * SS, p2 = 2 * L - q, hk = H / 360;
    const f = (t) => { t = t < 0 ? t + 1 : t > 1 ? t - 1 : t; return t < 1 / 6 ? p2 + (q - p2) * 6 * t : t < .5 ? q : t < 2 / 3 ? p2 + (q - p2) * (2 / 3 - t) * 6 : p2; };
    out = [f(hk + 1 / 3), f(hk), f(hk - 1 / 3)].map((x) => Math.round(x * 255));
  }
  _nec.set(k, out); return out;
};
const neMap = (t) => t.replace(/#[0-9A-Fa-f]{6}\b/g, (c) => { const u = c.toUpperCase(); if (NEX[u]) return NEX[u]; const [r, g, b] = neRGB(parseInt(u.slice(1, 3), 16), parseInt(u.slice(3, 5), 16), parseInt(u.slice(5, 7), 16)); return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("").toUpperCase(); })
  .replace(/rgba\((\d+),\s*(\d+),\s*(\d+),/g, (m, r, g, b) => { if (+r === 0 && +g === 0 && +b === 0 || +r === 255 && +g === 255 && +b === 255) return m; const o = neRGB(+r, +g, +b); return `rgba(${o[0]},${o[1]},${o[2]},`; });
const NE_SCENE = (() => {
const palmB=(x,h,s,flip,c)=>{const f=flip?-1:1;return `<g transform="translate(${x} 600) scale(${f*s} ${s})"><path d="M0 0 C 10 -90 6 -180 26 -${h}" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round"/><g transform="translate(26 -${h})" fill="${c}"><path d="M0 0 C 45 -27 90 -15 120 18 C 82 0 45 0 0 6Z"/><path d="M0 0 C -45 -27 -93 -12 -117 24 C -78 3 -42 3 0 6Z"/><path d="M0 0 C 27 -45 69 -57 99 -45 C 60 -36 30 -21 0 3Z"/><path d="M0 0 C -24 -48 -63 -63 -96 -51 C -57 -39 -27 -21 0 3Z"/><path d="M0 0 C 6 -39 30 -69 54 -81 C 33 -60 15 -30 0 0Z"/><path d="M0 0 C 50 -6 96 12 112 52 C 84 22 46 12 0 8Z"/></g></g>`;};
return "data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF07A"/><stop offset=".45" stop-color="#FF9D4D"/><stop offset="1" stop-color="#FF2E88"/></linearGradient>
<mask id="m"><rect width="1600" height="600" fill="#fff"/>${[330,352,372,390,406,420,432,442].map((y,i)=>`<rect y="${y}" width="1600" height="${4+i*1.8}" fill="#000"/>`).join('')}</mask>
<linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF3CAC" stop-opacity=".9"/><stop offset="1" stop-color="#FF3CAC" stop-opacity=".15"/></linearGradient></defs>
<circle cx="1180" cy="300" r="230" fill="url(#s)" mask="url(#m)"/>
<rect y="450" width="1600" height="150" fill="#14021f"/>
${[450,458,470,486,508,536,570,600].map(y=>`<path d="M0 ${y}H1600" stroke="url(#g)" stroke-width="1.6"/>`).join('')}
${Array.from({length:41},(_,i)=>`<path d="M${800+(i-20)*14} 450L${800+(i-20)*110} 600" stroke="#FF3CAC" stroke-opacity=".55" stroke-width="1.4"/>`).join('')}
${palmB(90,330,1,false,'#0c0114')}${palmB(190,250,.85,true,'#0c0114')}${palmB(1480,360,1.05,true,'#0c0114')}${palmB(1560,270,.8,false,'#0c0114')}
</svg>`);

})();
const CSS_NE_X = `
:host{background:#12021E!important;--card:rgba(24,6,40,.55);--card2:rgba(40,10,60,.55);--line:rgba(255,255,255,.10);--line2:rgba(255,255,255,.16);--tx:#FFF2FA;--mu:#D3A6D8;--mu2:#F2C9EE;--ac:#FF3CAC;--acbg:rgba(255,60,172,.18);--acln:rgba(255,60,172,.55);--warn:#FFB347;--cold:#5CF3FF;--inv:#12021E;font-family:Rajdhani,Manrope,system-ui,sans-serif!important;font-weight:600}
.app{background:url("${NE_SCENE}") center bottom/100% auto no-repeat fixed,linear-gradient(180deg,#0E0120 0%,#2A0646 28%,#6B1A7A 50%,#D23C86 66%,#FF7A59 76%,#14021f 76.1%)!important;background-attachment:fixed!important}
.side{background:rgba(14,1,28,.55)!important;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-right:1px solid rgba(255,60,172,.35)!important}
.clock b{font-family:Monoton,sans-serif!important;font-weight:400!important;font-size:44px!important;color:#FF8AD8!important;text-shadow:0 0 6px #FF3CAC,0 0 18px #FF3CAC,0 0 40px rgba(255,60,172,.7)}
.clock small{color:#FFD27A!important;letter-spacing:.12em;text-transform:uppercase;font-size:12px!important}
.rl,.ovb{font-family:Rajdhani,sans-serif!important;font-weight:700!important;font-size:17px!important;letter-spacing:.04em}
.rl.on,.ovb.on{background:linear-gradient(90deg,#FF3CAC,#FF7A59 60%,#FFB347)!important;color:#1A0326!important;box-shadow:0 0 22px rgba(255,60,172,.65)!important;transform:skewX(-8deg)}
.floor{color:#5CF3FF!important;letter-spacing:.3em!important;text-shadow:0 0 8px rgba(92,243,255,.7)}
.oc,.dev{background:linear-gradient(160deg,rgba(40,8,64,.62),rgba(16,3,30,.66))!important;backdrop-filter:blur(16px) saturate(1.5);-webkit-backdrop-filter:blur(16px) saturate(1.5);border:1px solid rgba(255,255,255,.12)!important;box-shadow:0 18px 40px rgba(8,0,20,.55),inset 0 1px 0 rgba(255,255,255,.12)!important;position:relative}
.oc::before{content:"";position:absolute;left:18px;right:18px;top:0;height:2px;border-radius:2px;background:linear-gradient(90deg,#5CF3FF,#FF3CAC 50%,#FFB347);box-shadow:0 0 12px #FF3CAC;z-index:5}
.oh b,.oh h3,.oh span:first-of-type{font-family:Bungee,sans-serif!important;font-weight:400!important;text-transform:uppercase;letter-spacing:.06em;font-size:15px!important;background:linear-gradient(90deg,#FFF07A,#FF7A59 45%,#FF3CAC);-webkit-background-clip:text;background-clip:text;color:transparent!important}
.oh .ic,.oh svg{color:#5CF3FF!important;filter:drop-shadow(0 0 6px #5CF3FF)}
.hero{background:transparent!important;border:2px solid rgba(255,60,172,.6)!important;box-shadow:0 0 30px rgba(255,60,172,.45),inset 0 0 40px rgba(255,60,172,.2)!important;overflow:hidden}
.hero>img{position:absolute!important;inset:0;width:100%!important;height:100%!important;object-fit:cover;filter:grayscale(1) contrast(1.3) brightness(.85);mix-blend-mode:screen;opacity:.75;-webkit-mask-image:linear-gradient(90deg,transparent 15%,#000 60%)!important;mask-image:linear-gradient(90deg,transparent 15%,#000 60%)!important}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,60,172,.35),rgba(255,122,89,.25) 60%,rgba(255,179,71,.2)),repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px);mix-blend-mode:color;pointer-events:none;z-index:1}
.hc{position:relative;z-index:4}
.hero h2{font-family:Yellowtail,cursive!important;font-weight:400!important;font-size:58px!important;letter-spacing:0!important;line-height:1!important;color:#FFF!important;transform:rotate(-5deg);transform-origin:left;margin:6px 0 10px!important;text-shadow:0 0 4px #fff,0 0 12px #FF3CAC,0 0 26px #FF3CAC,0 0 48px rgba(255,60,172,.8)}
.hero .hi{color:#5CF3FF!important;filter:drop-shadow(0 0 8px #5CF3FF)}
.pill{background:rgba(14,1,28,.7)!important;border:1px solid rgba(92,243,255,.45)!important;box-shadow:0 0 14px rgba(92,243,255,.3)!important}
.wt,.eg b,.eg strong,.eg big{font-family:Bungee,sans-serif!important;font-weight:400!important;background:linear-gradient(180deg,#FFF07A 10%,#FF7A59 55%,#FF3CAC 90%);-webkit-background-clip:text;background-clip:text;color:transparent!important;filter:drop-shadow(0 2px 10px rgba(255,60,172,.5))}
.dev.on,.lt.on{border-color:#FF3CAC!important;box-shadow:0 0 18px rgba(255,60,172,.6),inset 0 0 18px rgba(255,60,172,.18)!important}
.lt>img{filter:grayscale(.6) sepia(.5) hue-rotate(280deg) saturate(2.2) contrast(1.1)!important}
.nav,.navw nav{background:rgba(14,1,28,.72)!important;backdrop-filter:blur(18px);border:1px solid rgba(255,60,172,.5)!important;box-shadow:0 0 30px rgba(255,60,172,.35)!important}
.nitem.on{color:#FF8AD8!important;text-shadow:0 0 10px #FF3CAC}
.flow,.stat,.panel,.dlg,.ltile,.ldev{background:linear-gradient(160deg,rgba(40,8,64,.62),rgba(16,3,30,.70))!important;backdrop-filter:blur(16px) saturate(1.5);-webkit-backdrop-filter:blur(16px) saturate(1.5);border:1px solid rgba(255,255,255,.12)!important;box-shadow:0 18px 40px rgba(8,0,20,.5),inset 0 1px 0 rgba(255,255,255,.1)!important}
.stat b,.stat strong{font-family:Bungee,sans-serif;font-weight:400;background:linear-gradient(180deg,#FFF07A 10%,#FF7A59 55%,#FF3CAC 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hdr h1,.hdr h2{font-family:Bungee,sans-serif;font-weight:400;letter-spacing:.04em;background:linear-gradient(90deg,#FFF07A,#FF7A59 45%,#FF3CAC);-webkit-background-clip:text;background-clip:text;color:transparent}
.thb,.pill small{color:#F2C9EE!important}
`;

const dayMap = (t) => t.replace(/#[0-9A-Fa-f]{6}\b/g, (c) => DAYC[c.toUpperCase()] || c).replace(/rgba\([^)]*\)/g, (c) => DAYR[c] || c);
const CSS_DAY_X = `
:host{--inv:#FFF8F0}
.lt{color:#2A1D14}.lt .sh{background:linear-gradient(180deg,rgba(255,250,244,0) 40%,rgba(255,250,244,.94) 82%)}.lt .lx small{color:#6E5F52}
.lt>img{filter:brightness(.92) saturate(.9)}.lt.on>img{filter:none}
.hero>img{-webkit-mask-image:linear-gradient(90deg,transparent 0,rgba(0,0,0,.35) 55%,#000);mask-image:linear-gradient(90deg,transparent 0,rgba(0,0,0,.35) 55%,#000)}
.nitem.on{color:#B85A16}.bub{color:#fff}
.sw i{background:#fff}
.cname{color:#fff}.cname small{color:#E6DCCF}.ctag{color:#fff}
`;

// ---------- Szenen (viewBox 400x300) ----------
function scene(type, lit, pos, hasCover, uid) {
  const L = lit, wall = `<defs><radialGradient id="g${uid}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#F59A4A" stop-opacity=".78"/><stop offset=".35" stop-color="#C8662A" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient><linearGradient id="w${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B140F"/><stop offset="1" stop-color="#0F0B08"/></linearGradient></defs>`;
  const glow = (x, y, r = 160) => (L ? `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#g${uid})"/>` : "");
  const f1 = "#2A2019", f2 = L ? "#4A3020" : "#33261C", lampc = L ? "#FFC98A" : "#4A3A2E";
  let win = "";
  if (hasCover || ["living", "dining", "kitchen", "office", "bed", "bath", "kids", "closet"].includes(type)) {
    const p = pos == null ? 100 : pos, bh = Math.round(140 * (1 - p / 100));
    let sl = ""; for (let y = 58; y < 50 + bh; y += 9) sl += `M262 ${y}H338`;
    win = `<rect x="260" y="50" width="80" height="140" rx="6" fill="#1F2630" stroke="#2E241C"/>${bh > 0 ? `<rect x="260" y="50" width="80" height="${bh}" rx="6" fill="#2A2019"/><path d="${sl || "M0 0"}" stroke="#3A2C21" stroke-width="2"/>` : ""}`;
  }
  const floor = `<rect y="240" width="400" height="60" fill="#0B0806"/>`;
  let art = "";
  switch (type) {
    case "living": art = glow(110, 70) + `<path d="M70 240V70Q70 42 108 46" stroke="#4A3A2E" stroke-width="3" fill="none"/><path d="M94 48L122 48L116 64L100 64Z" fill="${lampc}"/><rect x="110" y="178" width="150" height="46" rx="14" fill="${f1}"/><rect x="100" y="198" width="170" height="36" rx="12" fill="${f2}"/>`; break;
    case "dining": art = glow(170, 105) + `<path d="M170 0V88" stroke="#4A3A2E" stroke-width="2"/><path d="M146 104L194 104L184 88L156 88Z" fill="${lampc}"/><rect x="95" y="190" width="150" height="8" rx="3" fill="${f2}"/><path d="M110 198V240M230 198V240" stroke="${f1}" stroke-width="5"/><rect x="70" y="170" width="26" height="70" rx="6" fill="${f1}"/><rect x="244" y="170" width="26" height="70" rx="6" fill="${f1}"/>`; break;
    case "kitchen": art = glow(135, 110, 150) + `<rect x="30" y="50" width="210" height="50" rx="4" fill="${f1}"/><path d="M100 50V100M170 50V100" stroke="#1B140F" stroke-width="2"/><rect x="30" y="102" width="210" height="4" fill="${lampc}"/><rect x="30" y="178" width="210" height="62" rx="3" fill="${f2}"/><rect x="30" y="172" width="210" height="8" fill="#3E2F24"/>`; break;
    case "office": art = glow(92, 150, 130) + `<rect x="60" y="182" width="190" height="8" rx="3" fill="${f2}"/><path d="M75 190V240M235 190V240" stroke="${f1}" stroke-width="5"/><rect x="125" y="118" width="80" height="54" rx="4" fill="${L ? "#3A4A5A" : "#1E2630"}" stroke="#3A2E25"/><path d="M165 172V182" stroke="#3A2E25" stroke-width="4"/><path d="M80 182L92 150L104 152" stroke="#5A463A" stroke-width="3" fill="none"/><path d="M96 144L114 150L106 160Z" fill="${lampc}"/>`; break;
    case "bed": art = glow(78, 120, 140) + `<rect x="50" y="150" width="200" height="40" rx="10" fill="${f1}"/><rect x="50" y="186" width="200" height="40" rx="10" fill="${f2}"/><rect x="66" y="172" width="54" height="22" rx="10" fill="${L ? "#7A4A2C" : "#3E2F24"}"/><rect x="128" y="172" width="54" height="22" rx="10" fill="${L ? "#7A4A2C" : "#3E2F24"}"/><path d="M60 226V240M240 226V240" stroke="${f1}" stroke-width="5"/><path d="M70 118L86 118L82 106L74 106Z" fill="${lampc}"/>`; break;
    case "bath": art = glow(150, 60, 140) + `<rect x="115" y="75" width="70" height="80" rx="30" fill="#1F2630" stroke="#3A2E25" stroke-width="3"/><rect x="120" y="54" width="60" height="6" rx="3" fill="${lampc}"/><path d="M50 190H245V215A20 20 0 0 1 225 235H70A20 20 0 0 1 50 215Z" fill="${f2}"/><rect x="44" y="184" width="207" height="8" rx="4" fill="#3E2F24"/>`; break;
    case "hall": art = glow(150, 40, 150) + `<rect x="120" y="22" width="60" height="8" rx="4" fill="${lampc}"/><rect x="60" y="95" width="70" height="145" rx="4" fill="${f1}"/><circle cx="118" cy="170" r="4" fill="#5A463A"/><path d="M160 240H190V215H215V190H240V165H265V140H290V240Z" fill="${f2}"/>`; win = ""; break;
    case "kids": art = glow(140, 90, 130) + `<rect x="60" y="196" width="160" height="34" rx="10" fill="${f2}"/><rect x="60" y="170" width="16" height="70" rx="4" fill="${f1}"/><rect x="80" y="110" width="110" height="6" fill="${f1}"/><rect x="90" y="88" width="10" height="22" fill="#5A3418"/><rect x="104" y="92" width="10" height="18" fill="#3E4A5A"/><rect x="118" y="86" width="10" height="24" fill="#4A5A3E"/><path d="M152 70l4 9 10 1-8 6 3 10-9-6-9 6 3-10-8-6 10-1z" fill="${lampc}"/>`; break;
    case "utility": art = glow(120, 70, 130) + `<rect x="70" y="160" width="80" height="80" rx="6" fill="${f2}"/><circle cx="110" cy="205" r="24" fill="#1F2630" stroke="#3A2E25" stroke-width="4"/><rect x="160" y="160" width="80" height="80" rx="6" fill="${f1}"/><rect x="60" y="100" width="190" height="6" fill="${f1}"/><rect x="100" y="54" width="40" height="6" rx="3" fill="${lampc}"/>`; break;
    case "closet": art = glow(140, 50, 130) + `<rect x="50" y="60" width="180" height="180" rx="6" fill="${f1}"/><path d="M110 60V240M170 60V240" stroke="#1B140F" stroke-width="3"/><path d="M104 140V160M116 140V160M164 140V160M176 140V160" stroke="#5A463A" stroke-width="3"/><rect x="110" y="30" width="60" height="6" rx="3" fill="${lampc}"/>`; break;
    case "garage": art = glow(200, 50, 170) + `<rect x="80" y="80" width="240" height="160" rx="6" fill="${f1}"/><path d="M80 112H320M80 144H320M80 176H320M80 208H320" stroke="#1B140F" stroke-width="3"/><rect x="180" y="44" width="40" height="10" rx="5" fill="${lampc}"/>`; win = ""; break;
    case "outdoor": default: {
      const stars = [[40, 30], [90, 60], [150, 25], [220, 50], [300, 30], [360, 70], [330, 110], [20, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#6A5E52"/>`).join("");
      art = `<rect width="400" height="300" fill="#0C0D12"/>${stars}` + glow(120, 205, 120) + glow(270, 205, 90) + `<path d="M40 240V150L140 95L240 150V240Z" fill="${f1}"/><rect x="80" y="170" width="34" height="34" fill="${L ? "#6A4020" : "#1F2630"}"/><rect x="160" y="190" width="40" height="50" fill="#1B140F"/><path d="M330 240V170" stroke="#2A2019" stroke-width="10"/><circle cx="330" cy="140" r="42" fill="#1A1D16"/><path d="M120 240V214M270 240V214" stroke="#4A3A2E" stroke-width="3"/><circle cx="120" cy="210" r="6" fill="${lampc}"/><circle cx="270" cy="210" r="6" fill="${lampc}"/>`;
      win = ""; return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Szene">${wall}${art}<rect y="240" width="400" height="60" fill="#0A0B08"/></svg>`;
    }
  }
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Szene"><rect width="400" height="300" fill="url(#w${uid})"/>${wall}${win}${art}${floor}</svg>`;
}

class HausLiveCard extends HTMLElement {
  setConfig(c) {
    if (!c || !Array.isArray(c.rooms) || !c.rooms.length) throw new Error("home-live-card: add at least one room (rooms)");
    this._c = c; this._pend = this._pend || {}; this._uid = 0;
    let saved = null; try { saved = localStorage.getItem("home-live-room"); } catch (e) {}
    if (!this._room || !c.rooms.find((r) => r.id === this._room)) this._room = (saved && c.rooms.find((r) => r.id === saved)) ? saved : (c.default_room || c.rooms[0].id);
    let sv = null; try { sv = localStorage.getItem("home-live-view"); } catch (e) {}
    this._view = this._view || (c.overview && c.start_view === "overview" ? "overview" : sv === "energy" && c.energy ? "energy" : sv === "overview" && c.overview ? "overview" : sv === "sec" && c.security ? "sec" : "room");
    this._ids = null;
  }
  getCardSize() { return 14; }
  connectedCallback() {
    if (this._c && this._c.load_font !== false && !document.getElementById("wz-manrope")) {
      const l = document.createElement("link"); l.id = "wz-manrope"; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap";
      document.head.appendChild(l);
    }
    if (this._c && this._c.palette === "neon" && this._c.load_font !== false && !document.getElementById("wz-neon")) {
      const l = document.createElement("link"); l.id = "wz-neon"; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Bungee&family=Monoton&family=Rajdhani:wght@500;600;700&family=Yellowtail&display=swap";
      document.head.appendChild(l);
    }
    this._tick = setInterval(() => { this._clock(); if (this._dayOn !== null && this._dayEff() !== this._dayB) this._render(); }, 20000);
    if (!this._imgL) { this._imgL = () => this._render(); window.addEventListener("home-live-img", this._imgL); }
    if (!this._ro && window.ResizeObserver) { this._ro = new ResizeObserver(() => { const w = (this.clientWidth || 0) >= 900; if (w !== this._wide) { this._wide = w; this._render(); } }); this._ro.observe(this); }
  }
  disconnectedCallback() { clearInterval(this._tick); if (this._fcSub && this._fcSub.then) { this._fcSub.then((u) => { try { u(); } catch (x) {} }).catch(() => {}); } this._fcSub = null; }

  set hass(h) {
    this._hass = h; setLang(this._c, h);
    if (!this.shadowRoot) { this.attachShadow({ mode: "open" }); this.shadowRoot.addEventListener("click", (e) => this._click(e)); for (const [ev, fn] of [["pointerdown", "_tdDown"], ["pointermove", "_tdMove"], ["pointerup", "_tdUp"], ["pointercancel", "_tdUp"]]) this.shadowRoot.addEventListener(ev, (e) => this[fn] && this[fn](e, ev === "pointercancel")); }
    if (!this._ids) {
      const s = new Set();
      for (const r of this._c.rooms) {
        for (const d of r.devices || []) { s.add(d.entity); if (d.power) s.add(d.power); }
        for (const k of ["temp", "hum"]) if (r[k]) s.add(r[k]);
        for (const x of [...(r.sensors || []), ...(r.info || [])]) s.add(x.entity);
        for (const p of r.power || []) s.add(p);
      }
      const e = this._c.energy;
      if (e) { for (const k in e) if (typeof e[k] === "string" && e[k].includes(".")) s.add(e[k]); for (const x of e.consumers || []) s.add(x.entity); }
      const o = this._c.overview;
      if (o) { for (const k of ["alarm", "weather", "climate", "camera"]) if (o[k]) s.add(o[k]); for (const k of ["persons", "media"]) for (const x of o[k] || []) s.add(x); for (const k of ["lights", "extra_lights", "doors", "devices", "actions"]) for (const x of o[k] || []) s.add(typeof x === "string" ? x : x.entity); }
      const sc = this._c.security;
      if (sc) { if (sc.alarm) s.add(sc.alarm); for (const g of sc.groups || []) for (const it of g.items || []) s.add(typeof it === "string" ? it : it.entity); for (const g of sc.gates || []) { if (g.sensor) s.add(g.sensor); if (g.action) s.add(g.action); } for (const c of sc.cameras || []) { s.add(c.entity); if (c.motion) s.add(c.motion); } }
      s.add("sun.sun");
      this._ids = [...s];
    }
    const sig = this._ids.map((i) => { const x = h.states[i]; return x ? x.last_updated + x.state : "-"; }).join("|");
    if (sig !== this._sig) { this._sig = sig; if (this._td) this._tdDirty = true; else this._render(); }
    this._fetchTrash();
    this._ovData();
  }
  _ovData() {
    const o = this._c.overview, h = this._hass; if (!o || !h) return;
    if (o.weather && !this._fcSub && h.connection && h.connection.subscribeMessage) {
      this._fcSub = h.connection.subscribeMessage((m) => { this._fc = (m && m.forecast) || []; if (this._view === "overview") this._render(); }, { type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: o.weather });
      this._fcSub.catch(() => { this._fc = null; });
    }
    const hid = this._c.energy && this._c.energy.home, now = Date.now();
    if (hid && h.callWS && !this._histBusy && (!this._histAt || now - this._histAt > 10 * 60000)) {
      this._histBusy = true;
      h.callWS({ type: "history/history_during_period", start_time: new Date(now - 12 * 3600000).toISOString(), entity_ids: [hid], minimal_response: true, no_attributes: true, significant_changes_only: false })
        .then((r) => { const a = (r && r[hid]) || []; const pts = a.map((x) => [((x.lu || x.last_updated || 0) * (typeof (x.lu || x.last_updated) === "number" ? 1000 : 1)) || Date.parse(x.last_updated || x.last_changed), parseFloat(x.s != null ? x.s : x.state)]).filter((x) => !isNaN(x[1]) && x[0]); this._hist = pts; this._histAt = Date.now(); this._histBusy = false; if (this._view === "overview") this._render(); })
        .catch(() => { this._histAt = Date.now(); this._histBusy = false; });
    }
  }
  _fetchTrash() {
    const t = this._c.energy && this._c.energy.trash; if (!t || !t.calendar || !this._hass.callApi) return;
    const now = Date.now(); if (this._trashBusy || (this._trashAt && now - this._trashAt < 30 * 60000)) return;
    this._trashBusy = true;
    const st = new Date(); st.setHours(0, 0, 0, 0); const en = new Date(st.getTime() + (t.days || 14) * 86400000);
    this._hass.callApi("GET", `calendars/${t.calendar}?start=${encodeURIComponent(st.toISOString())}&end=${encodeURIComponent(en.toISOString())}`)
      .then((ev) => { this._trash = Array.isArray(ev) ? ev : []; this._trashAt = Date.now(); this._trashBusy = false; if (this._view === "energy" || this._view === "overview") this._render(); })
      .catch(() => { this._trashAt = Date.now(); this._trashBusy = false; this._trash = null; });
  }

  // ---------- Daten ----------
  _st(id) { return this._hass && this._hass.states[id]; }
  _ok(id) { const s = this._st(id); return !!s && s.state !== "unavailable" && s.state !== "unknown"; }
  _on(id) { const s = this._st(id); return !!s && s.state === "on"; }
  _num(id) { return this._ok(id) ? parseFloat(this._st(id).state) : null; }
  _fmt(v, d = 1) { return v == null || isNaN(v) ? "–" : Number(v).toLocaleString(LOC, { maximumFractionDigits: d }); }
  _dom(id) { return id.split(".")[0]; }
  _roomObj(id) { return this._c.rooms.find((r) => r.id === (id || this._room)); }
  _isOn(d) {
    const s = this._st(d.entity); if (!s) return false;
    const dm = this._dom(d.entity);
    if (dm === "cover") { const p = this._pos(d.entity); return p != null && p > 5; }
    if (dm === "climate") return s.state !== "off" && s.state !== "unavailable";
    if (dm === "media_player") return s.state === "playing";
    if (dm === "script") return s.state === "on";
    return s.state === "on";
  }
  _pos(id) {
    if (this._pend[id] != null) return this._pend[id];
    const s = this._st(id); if (!s || s.state === "unavailable") return null;
    const p = s.attributes.current_position; if (typeof p === "number") return p;
    return s.state === "closed" ? 0 : 100;
  }
  _posLabel(p) { return p == null ? T("offline") : p >= 100 ? T("Offen") : p <= 0 ? T("Geschlossen") : T("{n} % offen", { n: p }); }
  _icon(d) {
    if (d.icon) return d.icon;
    return { light: "bulb", cover: "blind", climate: "thermo", media_player: "speaker", script: "gate" }[this._dom(d.entity)] || "plug";
  }
  _stateText(d) {
    const s = this._st(d.entity), dm = this._dom(d.entity);
    if (!s || s.state === "unavailable") return T("offline");
    if (dm === "cover") { const m = s.state === "opening" ? T("fährt hoch") : s.state === "closing" ? T("fährt runter") : null; return m || this._posLabel(this._pos(d.entity)); }
    if (dm === "climate") { const a = s.attributes; const m = (TX(HVAC[s.state], 1) || [0, s.state])[1]; return s.state === "off" ? T("Aus") : (typeof a.temperature === "number" ? `${m} · ${this._fmt(a.temperature)} ${TU}` : m); }
    if (dm === "media_player") { const a = s.attributes; if (s.state === "playing") return a.media_title || a.media_channel || T("spielt"); return { paused: T("Pausiert"), idle: T("Bereit"), off: T("Aus") }[s.state] || s.state; }
    if (dm === "script") return s.state === "on" ? T("läuft") : T("bereit");
    if (dm === "light" && s.state === "on" && typeof s.attributes.brightness === "number") return `${T("An")} · ${Math.round(s.attributes.brightness / 2.55)} %`;
    const pw = d.power ? this._num(d.power) : null;
    return s.state === "on" ? (pw != null ? `${T("An")} · ${this._fmt(pw)} W` : T("An")) : T("Aus");
  }
  _hasDetail(d) {
    const dm = this._dom(d.entity), s = this._st(d.entity);
    if (dm === "cover" || dm === "climate" || dm === "media_player") return true;
    if (dm === "light") return true;
    if (dm === "switch") return !!d.power;
    return false;
  }
  _roomCount(r) { return (r.devices || []).filter((d) => ["light", "switch"].includes(this._dom(d.entity)) && this._isOn(d)).length; }
  _roomLit(r) { return (r.devices || []).some((d) => this._dom(d.entity) === "light" && this._isOn(d)); }
  _firstCover(r) { const d = (r.devices || []).find((x) => this._dom(x.entity) === "cover"); return d ? this._pos(d.entity) : null; }

  // ---------- Aktionen ----------
  _call(d, s, data) { return this._hass.callService(d, s, data); }
  _ask(text, sub, fn) { this._confirm = { text, sub, fn }; this._render(); }
  _pendSet(id, v) { this._pend[id] = v; clearTimeout(this["_t" + id]); this["_t" + id] = setTimeout(() => { delete this._pend[id]; this._render(); }, 4500); }
  _toggle(d) {
    const dm = this._dom(d.entity), on = this._isOn(d), id = d.entity;
    const run = () => {
      if (dm === "cover") return this._setPos(id, on ? 0 : 100);
      if (dm === "climate") return this._call("climate", on ? "turn_off" : "turn_on", { entity_id: id });
      if (dm === "media_player") return this._call("media_player", "media_play_pause", { entity_id: id });
      if (dm === "script") return this._call("script", "turn_on", { entity_id: id });
      return this._call(dm === "light" ? "light" : dm === "switch" ? "switch" : "homeassistant", "toggle", { entity_id: id });
    };
    if (dm === "script") return this._ask(T("{n} auslösen?", { n: d.name }), T("Die Aktion wird sofort ausgeführt."), run);
    if (d.confirm && on) return this._ask(T("{n} ausschalten?", { n: d.name }), T("Das Gerät wird stromlos geschaltet."), run);
    run();
  }
  _setPos(id, v) { v = Math.max(0, Math.min(100, Math.round(v))); const s = this._st(id), sp = !!s && ((s.attributes.supported_features || 0) & 4) !== 0; if (!sp) v = v >= 50 ? 100 : 0; this._pendSet(id, v); this._render(); if (sp) this._call("cover", "set_cover_position", { entity_id: id, position: v }); else this._call("cover", v ? "open_cover" : "close_cover", { entity_id: id }); }
  _moreInfo(id) { this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: id }, bubbles: true, composed: true })); }
  _nav(path) { history.pushState(null, "", path); window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } })); }

  _click(e) {
    const el = e.target.closest("[data-a]"); if (!el) return;
    const a = el.dataset.a, v = el.dataset.v, r = this._roomObj();
    if (a === "lset" && this._lset) { const [i, x] = v.split("|"); this._lset(i, +x); return; }
    const dev = () => (r.devices || []).find((x) => x.entity === v) || { entity: v, name: v };
    switch (a) {
      case "room": this._room = v; this._view = "room"; try { localStorage.setItem("home-live-room", v); localStorage.setItem("home-live-view", "room"); } catch (x) {} this._render(); break;
      case "home": this._view = "room"; try { localStorage.setItem("home-live-view", "room"); } catch (x) {} this._render(); break;
      case "energy": this._view = "energy"; try { localStorage.setItem("home-live-view", "energy"); } catch (x) {} this._render(); break;
      case "theme": { const m = this._themeMode(), nx = m === "auto" ? (this._isDay() ? "night" : "day") : m === "day" ? "night" : "auto"; try { if (nx === "auto") localStorage.removeItem("home-live-theme"); else localStorage.setItem("home-live-theme", nx); } catch (x) {} this._render(); break; }
      case "sec": this._view = "sec"; try { localStorage.setItem("home-live-view", "sec"); } catch (x) {} this._render(); break;
      case "pin": { const [svc, lbl] = v.split("|"); this._pin = { svc, title: svc === "alarm_disarm" ? T("Alarmanlage unscharf schalten") : `${T("Scharf schalten")}: ${lbl}`, code: "" }; this._render(); break; }
      case "pk": if (this._pin && this._pin.code.length < 12) { this._pin.code += v; this._pin.err = ""; this._render(); } break;
      case "pdel": if (this._pin) { this._pin.code = this._pin.code.slice(0, -1); this._render(); } break;
      case "pcancel": this._pin = null; this._render(); break;
      case "pok": { const p = this._pin, al = this._c.security && this._c.security.alarm; if (!p || !al || !p.code) break; this._pin = null; this._render();
        this._call("alarm_control_panel", p.svc, { entity_id: al, code: p.code }).catch((e) => { this._pin = { svc: p.svc, title: p.title, code: "", err: T("Nicht ausgeführt") + ": " + ((e && e.message) || T("Code falsch?")) }; this._render(); }); break; }
      case "ov": this._view = "overview"; try { localStorage.setItem("home-live-view", "overview"); } catch (x) {} this._render(); break;
      case "otog": this._toggle(this._ovDef(v)); break;
      case "lall": { const o = this._c.overview, ids = [...(o.lights || []), ...(o.extra_lights || [])].map((x) => (typeof x === "string" ? x : x.entity)); if (ids.length) this._call("light", v === "on" ? "turn_on" : "turn_off", { entity_id: ids }); break; }
      case "otstep": { const [id, dv] = v.split("|"); const s = this._st(id); if (!s) break; const at = s.attributes, st = at.target_temp_step || 0.5; const cur = this._pend[id] != null ? this._pend[id] : at.temperature; if (typeof cur !== "number") break; const nv = Math.max(at.min_temp, Math.min(at.max_temp, Math.round((cur + st * +dv) / st) * st)); this._pendSet(id, nv); this._render(); this._call("climate", "set_temperature", { entity_id: id, temperature: nv }); break; }
      case "ohvac": { const [id, m] = v.split("|"); this._call("climate", "set_hvac_mode", { entity_id: id, hvac_mode: m }); break; }
      case "omcmd": { const [id, m] = v.split("|"); this._call("media_player", m, { entity_id: id }); break; }
      case "ovol": { const [id, dv] = v.split("|"); const s = this._st(id); if (!s) break; const cur = this._pend[id] != null ? this._pend[id] : Math.round((s.attributes.volume_level || 0) * 100); const nv = Math.max(0, Math.min(100, cur + +dv)); this._pendSet(id, nv); this._render(); this._call("media_player", "volume_set", { entity_id: id, volume_level: nv / 100 }); break; }
      case "det": this._view = "det"; this._det = v; this._render(); if (this.scrollIntoView) this.scrollIntoView({ block: "start" }); break;
      case "tog": this._toggle(dev()); break;
      case "info": this._moreInfo(v); break;
      case "nav": this._nav(v); break;
      case "ok": { const f = this._confirm && this._confirm.fn; this._confirm = null; this._render(); if (f) f(); break; }
      case "cancel": this._confirm = null; this._render(); break;
      // Rolladen
      case "csel": this._det = v; this._render(); break;
      case "cpos": this._setPos(this._det, +v); break;
      case "cstep": this._setPos(this._det, (this._pos(this._det) || 0) + +v); break;
      case "cstop": delete this._pend[this._det]; this._call("cover", "stop_cover", { entity_id: this._det }); break;
      case "call": (r.devices || []).filter((x) => this._dom(x.entity) === "cover").forEach((x) => this._setPos(x.entity, +v)); break;
      // Licht
      case "bstep": { const s = this._st(this._det); const cur = this._pend[this._det] != null ? this._pend[this._det] : (s && s.state === "on" ? Math.round((s.attributes.brightness || 0) / 2.55) : 0); const nv = Math.max(0, Math.min(100, cur + +v)); this._pendSet(this._det, nv); this._render(); this._call("light", nv > 0 ? "turn_on" : "turn_off", nv > 0 ? { entity_id: this._det, brightness_pct: nv } : { entity_id: this._det }); break; }
      // Klima
      case "tstep": { const s = this._st(this._det); if (!s) break; const at = s.attributes, st = at.target_temp_step || 0.5; const cur = this._pend[this._det] != null ? this._pend[this._det] : at.temperature; const nv = Math.max(at.min_temp, Math.min(at.max_temp, Math.round((cur + st * +v) / st) * st)); this._pendSet(this._det, nv); this._render(); this._call("climate", "set_temperature", { entity_id: this._det, temperature: nv }); break; }
      case "hvac": this._call("climate", "set_hvac_mode", { entity_id: this._det, hvac_mode: v }); break;
      // Medien
      case "mcmd": this._call("media_player", v, { entity_id: this._det }); break;
      case "vstep": { const s = this._st(this._det); if (!s) break; const cur = this._pend[this._det] != null ? this._pend[this._det] : Math.round((s.attributes.volume_level || 0) * 100); const nv = Math.max(0, Math.min(100, cur + +v)); this._pendSet(this._det, nv); this._render(); this._call("media_player", "volume_set", { entity_id: this._det, volume_level: nv / 100 }); break; }
      case "etog": { const dm = this._dom(v); this._call(dm, "toggle", { entity_id: v }); break; }
      case "src": this._call("media_player", "select_source", { entity_id: this._det, source: v }); break;
    }
  }

  // ---------- Rendering ----------
  _ring(r, frac) {
    const c = 2 * Math.PI * r, s = 2 * r + 10;
    return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" aria-hidden="true"><circle cx="${s / 2}" cy="${s / 2}" r="${r}" fill="none" stroke="#3A2E25" stroke-width="3"/>${frac > 0 ? `<circle cx="${s / 2}" cy="${s / 2}" r="${r}" fill="none" stroke="#F28A3C" stroke-width="3" stroke-linecap="round" stroke-dasharray="${(c * Math.min(frac, 1)).toFixed(1)} ${c.toFixed(1)}"/>` : ""}</svg>`;
  }
  _dial(frac, color) {
    const cx = 165, cy = 150, N = 60, a0 = 150, sw = 240; frac = Math.max(0, Math.min(1, frac || 0));
    let all = "", on = "";
    for (let i = 0; i <= N; i++) {
      const a = (a0 + sw * i / N) * Math.PI / 180, r2 = i % 5 === 0 ? 116 : 124;
      const seg = `M${(cx + 138 * Math.cos(a)).toFixed(1)} ${(cy + 138 * Math.sin(a)).toFixed(1)}L${(cx + r2 * Math.cos(a)).toFixed(1)} ${(cy + r2 * Math.sin(a)).toFixed(1)}`;
      all += seg; if (frac > 0 && i / N <= frac + 1e-9) on += seg;
    }
    const ka = (a0 + sw * frac) * Math.PI / 180, kx = (cx + 104 * Math.cos(ka)).toFixed(1), ky = (cy + 104 * Math.sin(ka)).toFixed(1);
    const col = color || "#F28A3C";
    return `<svg viewBox="0 0 330 280" aria-hidden="true"><path d="${all}" stroke="#3A2E25" stroke-width="2.4" stroke-linecap="round"/>${on ? `<path d="${on}" stroke="${col}" stroke-width="2.4" stroke-linecap="round"/>` : ""}<circle cx="${kx}" cy="${ky}" r="9" fill="${col}"/><circle cx="${kx}" cy="${ky}" r="3.5" fill="#1A0F07"/></svg>`;
  }
  _dialGlow(color) { return `<svg class="bg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="dg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${color}" stop-opacity=".2"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="150" r="150" fill="url(#dg)"/></svg>`; }

  _clock() {
    const el = this.shadowRoot && this.shadowRoot.getElementById("clk"); if (!el) return;
    const d = new Date();
    el.innerHTML = `<b>${d.toLocaleTimeString(LOC, { hour: "2-digit", minute: "2-digit" })}</b><small>${d.toLocaleDateString(LOC, { weekday: "long", day: "numeric", month: "long" })}</small>`;
  }

  _themeMode() { let m = null; try { m = localStorage.getItem("home-live-theme"); } catch (x) {} return m === "day" || m === "night" ? m : (this._c.theme === "day" || this._c.theme === "night" ? this._c.theme : "auto"); }
  _dayEff() { return this._c.palette !== "neon" && this._isDay(); }
  _isDay() {
    const m = this._themeMode(); if (m !== "auto") return m === "day";
    const sun = this._st("sun.sun"); if (sun && sun.state !== "unavailable") return sun.state === "above_horizon";
    const h = new Date().getHours(); return h >= 7 && h < 19;
  }
  _themeBtn(cls) { if (this._c.palette === "neon") return ""; const m = this._themeMode(), d = this._isDay(); return `<button class="${cls}" data-a="theme" aria-label="${T("Darstellung")}: ${m === "auto" ? T("automatisch") : m === "day" ? T("Tag") : T("Abend")}">${ic(d ? "sun" : "moon", 16, 2)}<span>${m === "auto" ? T("Auto") : m === "day" ? T("Tag") : T("Abend")}</span></button>`; }
  _render() {
    if (!this.shadowRoot || !this._hass) return;
    const r = this._roomObj();
    let body;
    try { body = this._view === "overview" && this._c.overview ? this._overView() : this._view === "sec" && this._c.security ? this._secView() : this._view === "energy" && this._c.energy ? this._energyView() : this._view === "det" && this._det ? this._detail(r) : this._roomView(r); }
    catch (err) { body = `<div class="empty">Fehler: ${esc(err.message)}</div>`; }
    const floors = [];
    for (const x of this._c.rooms) { const f = x.floor || ""; let g = floors.find((y) => y.f === f); if (!g) floors.push(g = { f, rs: [] }); g.rs.push(x); }
    const en = !!this._c.energy, ov = this._view === "overview" && !!this._c.overview, sv = this._view === "sec" && !!this._c.security, ev = this._view === "energy" || ov || sv;
    const side = `<aside class="side"><div class="clock" id="clk"></div>${this._themeBtn("thb")}${this._c.overview ? `<button class="rl ovb ${ov ? "on" : ""}" data-a="ov">${ic("dash", 16, 2)}${T("Übersicht")}</button>` : ""}${this._c.security ? `<button class="rl ovb ${sv ? "on" : ""}" data-a="sec">${ic("shield", 16, 2)}${T("Sicherheit")}</button>` : ""}${en ? `<button class="rl en ${this._view === "energy" ? "on" : ""}" data-a="energy">${ic("bolt", 16, 2)}${T("Energie")}</button>` : ""}${floors.map((g) => `${g.f ? `<div class="floor">${esc(g.f)}</div>` : ""}${g.rs.map((x) => { const n = this._roomCount(x); return `<button class="rl ${!ev && x.id === this._room ? "on" : ""}" data-a="room" data-v="${x.id}">${esc(x.name)}${n ? `<em>${n}</em>` : ""}</button>`; }).join("")}`).join("")}
      <div class="sidenav">${this._c.home_path ? `<button data-a="nav" data-v="${esc(this._c.home_path)}">${ic("dash", 16)}${T("Zuhause")}</button>` : ""}${this._c.energy || this._c.energy_path ? `<button data-a="nav" data-v="${esc(this._c.energy_path || "/energy")}">${ic("bolt", 16)}${T("Details")}</button>` : ""}</div></aside>`;
    const dlg = this._pin ? this._pinDlg() : this._confirm ? `<div class="ovl"><div class="dlg" role="dialog"><b>${esc(this._confirm.text)}</b><p>${esc(this._confirm.sub)}</p><div class="row"><button data-a="cancel">${T("Abbrechen")}</button><button class="ok" data-a="ok">${T("Ja")}</button></div></div></div>` : "";
    if (!this._appEl) {
      this.shadowRoot.innerHTML = `<style></style><div class="app"></div><div class="navw"></div><div class="dlgw"></div>`;
      this._appEl = this.shadowRoot.querySelector(".app"); this._dlgEl = this.shadowRoot.querySelector(".dlgw"); this._styEl = this.shadowRoot.querySelector("style"); this._dayOn = null;
      this._buildNav(this.shadowRoot.querySelector(".navw"));
    }
    const day = this._dayEff();
    const ne = this._c.palette === "neon", gr = !day && this._c.palette === "graphite", mk = ne ? "ne" : day ? "day" : gr ? "gr" : "amber"; this._dayB = day;
    const pm = ne ? neMap : day ? dayMap : gr ? grMap : (x) => x;
    if (mk !== this._dayOn) { this._dayOn = mk; this._styEl.textContent = ne ? neMap(CSS) + CSS_NE_X : day ? dayMap(CSS) + CSS_DAY_X : gr ? grMap(CSS) + CSS_GR_X : CSS; this.toggleAttribute("day", day); this.style.background = ne ? "#12021E" : day ? "#F2EBE2" : gr ? "#0E1014" : ""; }
    const html = `${side}<div class="main">${body}</div>`;
    this._appEl.innerHTML = pm(html);
    this._dlgEl.innerHTML = pm(dlg);
    this._navSync();
    this._clock();
    requestAnimationFrame(() => { try { const t = Math.max(0, Math.round(this.getBoundingClientRect().top + (window.scrollY || 0))); if (t !== this._off) { this._off = t; this.style.setProperty("--off", t + "px"); } const tb = this.shadowRoot.querySelector(".tabs"), on = tb && tb.querySelector(".on"); if (on) tb.scrollLeft = Math.max(0, on.offsetLeft - 20); } catch (x) {} });
  }

  // ---------- Bounce-Navigation ----------
  _buildNav(host) {
    const c = this._c, defs = [];
    if (c.overview) defs.push({ k: "overview", label: T("Übersicht"), icon: "dash" });
    defs.push(c.energy ? { k: "energy", label: T("Energie"), icon: "bolt" } : { k: "url", url: c.energy_path || "/energy", label: T("Energie"), icon: "bolt" });
    if (c.security) defs.splice(c.overview ? 1 : 0, 0, { k: "sec", label: T("Sicherheit"), icon: "shield" });
    defs.push({ k: "rooms", label: T("Räume"), icon: "home" });
    if (!c.security) defs.push(c.home_path ? { k: "url", url: c.home_path, label: c.home_label || T("Zuhause"), icon: c.overview ? "house" : "dash" } : { k: "url", url: "/config", label: T("System"), icon: "gear" });
    const nav = document.createElement("nav"); nav.className = "nav"; nav.setAttribute("aria-label", "Navigation");
    nav.innerHTML = defs.map((d, i) => `<button class="nitem" type="button" data-i="${i}">${ic(d.icon, 22, 1.7)}${esc(d.label)}</button>`).join("");
    host.appendChild(nav);
    const items = [...nav.querySelectorAll(".nitem")];
    const st = items.map((_, i) => { const b = document.createElement("div"); b.className = "bub"; b.innerHTML = ic(defs[i].icon, 28, 1.8); nav.appendChild(b); return { b, y: 0, vy: 0, s: 0.45, vs: 0 }; });
    const dot = document.createElement("div"); dot.className = "ndot"; nav.appendChild(dot);
    const a0 = this._navIdx(defs);
    const N = this._nv = { nav, items, st, dot, defs, act: a0, x: 0, v: 0, target: 0, hover: false, near: a0, raf: 0, reduce: !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) };
    const cx = (i) => items[i].offsetLeft + items[i].offsetWidth / 2;
    const nearest = (px) => items.reduce((b, _, j) => (Math.abs(cx(j) - px) < Math.abs(cx(b) - px) ? j : b), 0);
    const pos = (e) => e.clientX - nav.getBoundingClientRect().left;
    const choose = (i) => {
      const d = defs[i]; if (!d) return;
      if (d.k === "sec") { this._view = "sec"; try { localStorage.setItem("home-live-view", "sec"); } catch (x) {} this._render(); }
      else if (d.k === "overview") { this._view = "overview"; try { localStorage.setItem("home-live-view", "overview"); } catch (x) {} this._render(); }
      else if (d.k === "energy") { this._view = "energy"; try { localStorage.setItem("home-live-view", "energy"); } catch (x) {} this._render(); }
      else if (d.k === "rooms") { this._view = "room"; try { localStorage.setItem("home-live-view", "room"); } catch (x) {} this._render(); }
      else this._nav(d.url);
    };
    N.cx = cx;
    nav.addEventListener("pointermove", (e) => { if (e.pointerType === "mouse" && !e.buttons && !N.hover && e.type !== "pointermove") return; N.hover = true; N.near = nearest(pos(e)); N.target = cx(N.near); this._navKick(); });
    nav.addEventListener("pointerdown", (e) => { try { nav.setPointerCapture(e.pointerId); } catch (x) {} N.hover = true; N.near = nearest(pos(e)); N.target = cx(N.near); this._navKick(); });
    const leave = () => { N.hover = false; N.near = N.act; N.target = cx(N.act); this._navKick(); };
    nav.addEventListener("pointerleave", leave);
    nav.addEventListener("pointercancel", leave);
    nav.addEventListener("pointerup", (e) => { const i = nearest(pos(e)); leave(); choose(i); });
    nav.addEventListener("click", (e) => { if (e.detail !== 0) return; const b = e.target.closest(".nitem"); if (b) choose(+b.dataset.i); });
    requestAnimationFrame(() => { N.x = N.target = cx(N.act); this._navKick(); });
  }
  _navIdx(defs) {
    const k = this._view === "overview" && this._c.overview ? "overview" : this._view === "sec" && this._c.security ? "sec" : this._view === "energy" && this._c.energy ? "energy" : "rooms";
    const i = defs.findIndex((d) => d.k === k); return i < 0 ? 0 : i;
  }
  _navSync() {
    const N = this._nv; if (!N) return;
    const a = this._navIdx(N.defs);
    N.items.forEach((e, j) => { e.classList.toggle("on", j === a); e.setAttribute("aria-current", j === a ? "page" : "false"); });
    if (a !== N.act) { N.act = a; if (!N.hover) { N.near = a; N.target = N.cx(a); } this._navKick(); }
  }
  _navKick() {
    const N = this._nv; if (!N || N.raf) return;
    const step = () => {
      N.raf = 0;
      if (!N.nav.isConnected || !N.nav.offsetWidth) return;
      if (!N.hover) N.target = N.cx(N.act);
      if (N.reduce) { N.x = N.target; N.v = 0; } else { const k = N.hover ? 0.16 : 0.12, d = N.hover ? 0.72 : 0.68; N.v = (N.v + (N.target - N.x) * k) * d; N.x += N.v; }
      const sel = N.hover ? N.near : N.act, h = N.nav.offsetHeight; let moving = Math.abs(N.target - N.x) > 0.3 || Math.abs(N.v) > 0.05;
      N.st.forEach((o, j) => {
        const up = j === sel, ty = up ? -78 : 0, ts = up ? 1 : 0.45;
        if (N.reduce) { o.y = ty; o.vy = 0; o.s = ts; o.vs = 0; }
        else { o.vy = (o.vy + (ty - o.y) * 0.11) * 0.8; o.y += o.vy; o.vs = (o.vs + (ts - o.s) * 0.14) * 0.72; o.s += o.vs; }
        if (Math.abs(ty - o.y) > 0.3 || Math.abs(o.vy) > 0.05 || Math.abs(ts - o.s) > 0.004) moving = true;
        const sq = Math.max(-0.22, Math.min(0.22, o.vy / 30)), vis = Math.min(1, Math.max(0, -o.y / 30));
        o.b.style.opacity = vis;
        o.b.style.transform = `translate(${N.cx(j) - 32}px,${o.y + h / 2 - 40}px) scale(${o.s * (1 + sq * 0.6)},${o.s * (1 - sq)})`;
        N.items[j].classList.toggle("under", vis > 0.35);
      });
      N.dot.style.transform = `translateX(${N.x - 2.5}px)`;
      if (moving || N.hover) N.raf = requestAnimationFrame(step);
    };
    N.raf = requestAnimationFrame(step);
  }

  _roomView(r) {
    const devs = r.devices || [];
    const lit = this._roomLit(r);
    let temp = r.temp ? this._num(r.temp) : null, tSrc = r.temp;
    if (temp == null) { const cl = devs.find((d) => this._dom(d.entity) === "climate"); const s = cl && this._st(cl.entity); if (s && typeof s.attributes.current_temperature === "number") { temp = s.attributes.current_temperature; tSrc = cl.entity; } }
    const hum = r.hum ? this._num(r.hum) : null;
    const pw = (r.power || []).reduce((a, p) => a + (this._num(p) || 0), 0);
    const rings = [];
    if (r.temp || tSrc) rings.push(`<button class="ring" data-a="info" data-v="${esc(tSrc || r.temp)}" aria-label="${T("Temperatur")}">${this._ring(33, 0)}<span class="v"><b>${this._fmt(temp)} ${TU}</b>${temp == null ? `<small class="w">${T("offline")}</small>` : `<small>${esc(r.temp_label || T("Raum"))}</small>`}</span></button>`);
    if (r.hum) rings.push(`<button class="ring" data-a="info" data-v="${esc(r.hum)}" aria-label="${T("Luftfeuchte")}">${this._ring(33, hum != null ? hum / 100 : 0)}<span class="v"><b>${this._fmt(hum, 0)} %</b>${hum == null ? `<small class="w">${T("offline")}</small>` : `<small>${T("Feuchte")}</small>`}</span></button>`);
    if ((r.power || []).length) rings.push(`<button class="ring" data-a="info" data-v="${esc(r.power[0])}" aria-label="${T("Verbrauch")}">${this._ring(33, pw / 100)}<span class="v"><b>${this._fmt(pw)} W</b><small>${T("Verbrauch")}</small></span></button>`);
    const tiles = devs.map((d) => {
      if (this._ltTile && this._dom(d.entity) === "light") return this._ltTile(d);
      if (this._tdTile && this._dom(d.entity) === "climate" && this._st(d.entity) && this._st(d.entity).attributes.temperature !== undefined) return this._tdTile(d);
      const on = this._isOn(d), dm = this._dom(d.entity), off = !this._ok(d.entity) && dm !== "script";
      const ctrl = dm === "script" ? `<button class="trig" data-a="tog" data-v="${esc(d.entity)}">${T("Auslösen")}</button>` : `<button class="sw ${on ? "on" : ""}" data-a="tog" data-v="${esc(d.entity)}" aria-label="${T("{n} schalten", { n: esc(d.name) })}" ${off ? "disabled" : ""}><i></i></button>`;
      return `<div class="dev ${on ? "on" : ""} ${off ? "off" : ""}"><div class="top"><span class="ico">${ic(this._icon(d))}</span>${ctrl}</div>
        <div class="bot"><div class="nm"><b>${esc(d.name)}</b><small>${esc(this._stateText(d))}</small></div>${this._hasDetail(d) ? `<button class="go" data-a="det" data-v="${esc(d.entity)}" aria-label="${esc(d.name)} Details">${ic("next", 14, 2.2)}</button>` : ""}</div></div>`;
    }).join("");
    const chips = [...(r.sensors || []).map((x) => {
      const s = this._st(x.entity); let t, al = false;
      if (!s || s.state === "unavailable") { t = T("offline"); al = true; } else if (s.state === "on") { t = x.on || T("Offen"); al = true; } else t = x.off || T("Zu");
      return `<button class="chip ${al ? "alert" : ""}" data-a="info" data-v="${esc(x.entity)}"><small>${esc(x.name)}</small><b>${esc(t)}</b></button>`;
    }), ...(r.info || []).map((x) => { const v = this._num(x.entity); return `<button class="chip ${v == null ? "alert" : ""}" data-a="info" data-v="${esc(x.entity)}"><small>${esc(x.name)}</small><b>${v == null ? T("offline") : this._fmt(v) + " " + esc(x.unit || "")}</b></button>`; })].join("");
    const on = this._roomCount(r);
    return `<div class="view room"><div class="colR">
      <header class="hdr"><div class="ttl"><b>${esc(r.name)}</b><small>${devs.length ? T(on === 1 ? "{n} Gerät an" : "{n} Geräte an", { n: on }) : T("nur Status")}</small></div>${r.media ? `<button class="rbtn" data-a="det" data-v="${esc(r.media)}" aria-label="${T("Musik")}">${ic("speaker", 18, 2)}</button>` : ""}</header>
      <nav class="tabs" aria-label="${T("Räume")}">${this._c.rooms.map((x) => `<button class="${x.id === r.id ? "on" : ""}" data-a="room" data-v="${x.id}">${esc(x.name)}</button>`).join("")}</nav>
      <div class="grid">${tiles || `<div class="empty" style="grid-column:1/-1">${T("Keine steuerbaren Geräte in diesem Raum")}</div>`}</div></div>
      <div class="colL">${(() => { const ph = this._roomImg ? this._roomImg(r, lit) : ""; return ph ? `<div class="scene ph">${ph}` : `<div class="scene">${scene(r.type || "living", lit, this._firstCover(r), devs.some((d) => this._dom(d.entity) === "cover"), "s")}`; })()}<div class="gauges">${rings.join("")}</div></div>
      <div class="chips">${chips}</div></div>
    </div>`;
  }

  // ---------- Übersicht ----------
  _ovDef(id) {
    const o = this._c.overview || {};
    const gs = ((this._c.security || {}).gates || []).find((g) => g.action === id); if (gs) return { entity: gs.action, name: gs.name, confirm: true };
    for (const k of ["lights", "devices", "actions", "extra_lights"]) { const d = (o[k] || []).find((x) => (typeof x === "string" ? x : x.entity) === id); if (d) return typeof d === "string" ? { entity: d, name: id } : d; }
    return { entity: id, name: (this._st(id) && this._st(id).attributes.friendly_name) || id };
  }
  _spark() {
    const pts = this._hist; if (!pts || pts.length < 2) return "";
    const now = Date.now(), t0 = now - 12 * 3600000, N = 48, step = (now - t0) / N, vals = [];
    let i = 0, last = null;
    const sorted = pts.slice().sort((a, b) => a[0] - b[0]);
    for (let b = 0; b <= N; b++) { const tb = t0 + b * step; while (i < sorted.length && sorted[i][0] <= tb) { last = sorted[i][1]; i++; } vals.push(last); }
    const v = vals.filter((x) => x != null); if (v.length < 2) return "";
    const mx = Math.max(...v, 1), W = 300, H = 60;
    let d = "", first = null;
    vals.forEach((y, k) => { if (y == null) return; const x = (k / N) * W, yy = H - 4 - (y / mx) * (H - 10); if (first == null) { first = x; d += `M${x.toFixed(1)} ${yy.toFixed(1)}`; } else d += `L${x.toFixed(1)} ${yy.toFixed(1)}`; });
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-label="${T("Hausverbrauch der letzten 12 Stunden")}"><defs><linearGradient id="spg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F28A3C" stop-opacity=".45"/><stop offset="1" stop-color="#F28A3C" stop-opacity="0"/></linearGradient></defs><path d="${d}L${W} ${H}L${first.toFixed(1)} ${H}Z" fill="url(#spg)"/><path d="${d}" fill="none" stroke="#F28A3C" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>`;
  }
  _trashHero() {
    const t = this._c.energy && this._c.energy.trash; if (!t || !Array.isArray(this._trash)) return "";
    const pats = t.patterns || [], d0 = new Date(); d0.setHours(0, 0, 0, 0); const days = {};
    for (const ev of this._trash) { const d = ((ev.start && (ev.start.date || ev.start.dateTime)) || "").slice(0, 10); if (!d) continue; const p = pats.find((q) => (ev.summary || "").toLowerCase().includes(q.match.toLowerCase())); (days[d] = days[d] || {})[p ? p.name : ev.summary] = p ? p.color : "#9C9086"; }
    const k = Object.keys(days).sort().find((d) => new Date(d + "T00:00:00") >= d0); if (!k) return "";
    const dd = Math.round((new Date(k + "T00:00:00") - d0) / 86400000); if (dd > (t.hero_days != null ? t.hero_days : 2)) return "";
    const b = Object.entries(days[k]), wd = new Date(k + "T12:00:00").toLocaleDateString(LOC, { weekday: "long" });
    const sub = dd === 0 ? T("Wird heute abgeholt") : dd === 1 ? T("Heute Abend rausstellen") : T("Am {d}abend rausstellen", { d: new Date(new Date(k + "T12:00:00").getTime() - 86400000).toLocaleDateString(LOC, { weekday: "long" }) });
    const bin = (c) => `<i style="color:${c}"><svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true"><path d="M2 4h12l-1.2 12.2a1.5 1.5 0 0 1-1.5 1.3H4.7a1.5 1.5 0 0 1-1.5-1.3z" fill="currentColor"/><rect x="1" y="1.6" width="14" height="2.2" rx="1" fill="currentColor"/></svg></i>`;
    return `<span class="pill trh ${dd <= 1 ? "urg" : ""}"><span class="tbins">${b.map(([, c]) => bin(c)).join("")}</span><span><b>${dd === 0 ? T("Heute") : dd === 1 ? T("Morgen") : esc(wd)}: ${esc(b.map(([l]) => l).join(", "))}</b><small>${esc(sub)}</small></span></span>`;
  }
  _overView() {
    const o = this._c.overview, e = this._c.energy || {}, f = (v, d) => this._fmt(v, d), n = (id) => (id ? this._num(id) : null);
    const st = (id) => this._st(id), fn = (id) => { const s = st(id); return (s && s.attributes.friendly_name) || id; };
    const hd = (i, t, sub, a, v) => `<${a ? `button data-a="${a}"${v ? ` data-v="${esc(v)}"` : ""}` : "div"} class="oh"><span class="oi">${ic(i, 20, 2)}</span><b>${esc(t)}</b><small>${esc(sub || "")}</small>${a ? `<span class="mo">${ic("next", 16, 2)}</span>` : ""}</${a ? "button" : "div"}>`;
    // Kopf
    const hr = new Date().getHours(), greet = hr < 5 ? T("Gute Nacht") : hr < 11 ? T("Guten Morgen") : hr < 17 ? T("Guten Tag") : hr < 22 ? T("Guten Abend") : T("Gute Nacht");
    const uname = this._hass.user && this._hass.user.name ? String(this._hass.user.name).split(" ")[0] : "";
    const ppl = (o.persons || []).map((id) => ({ id, s: st(id) })).filter((x) => x.s);
    const home = ppl.filter((x) => x.s.state === "home").map((x) => String(x.s.attributes.friendly_name || x.id).split(" ")[0]);
    const presTxt = home.length ? T(home.length > 1 ? "{n} sind zu Hause" : "{n} ist zu Hause", { n: home.join(" & ") }) : T("Gerade ist niemand zu Hause.");
    const al = o.alarm && st(o.alarm), alm = al ? (TX(ALARM[al.state], 0) || [al.state === "unavailable" ? T("offline") : al.state, "wn"]) : null;
    const alCls = !al ? "" : al.state === "disarmed" ? "g" : al.state === "armed_home" ? "aor" : al.state.startsWith("armed") || al.state === "triggered" ? "rd" : "wn";
    const solar = n(e.solar), soc = n(e.battery_soc), homeW = n(e.home), grid = n(e.grid);
    const pills = [];
    if (alm) pills.push(`<button class="pill" data-a="info" data-v="${esc(o.alarm)}"><span class="${alCls}">${ic("shield", 18, 2)}</span><span><b>${al.state.startsWith("armed") ? T("Alarm scharf") : al.state === "disarmed" ? T("Alarm unscharf") : T("Alarm")}</b><small>${esc(alm[0].replace(/^Scharf · /, ""))}</small></span></button>`);
    const trp = this._trashHero(); if (trp) pills.unshift(trp);
    if (solar != null) pills.push(`<button class="pill" data-a="energy"><span class="g">${ic("leaf", 18, 2)}</span><span><b>PV ${f(solar, 0)} W</b><small>${soc != null ? `${T("Batterie")} ${f(soc, 0)} %` : T("Solar")}</small></span></button>`);
    const hero = `<div class="oc hero">${(() => { const dy = this._dayEff(), hs = (dy ? o.hero_day : o.hero_night) || o.hero_image || IMGX()[dy ? "hero_day" : "hero_night"] || IMGX().hero; return o.hero !== false && hs ? `<img src="${esc(hs)}" alt="">` : ""; })()}<div class="hc"><span class="hi">${ic("house", 30, 2)}</span>${this._themeBtn("thb thh")}<h2>${esc(greet)}${uname ? `, ${esc(uname)}` : ""}!</h2><div class="pills">${pills.join("")}</div></div></div>`;
    // Wetter
    let wx = "";
    const w = o.weather && st(o.weather);
    if (w) {
      const wm = TX(WX[w.state], 1) || ["cloud", w.state], a = w.attributes;
      const days = (this._fc || []).slice(0, 3).map((d) => { const dt = new Date(d.datetime); const wd = WX[d.condition] || ["cloud", ""]; return `<span><small>${esc(dt.toLocaleDateString(LOC, { weekday: "short" }))}</small><span>${ic(wd[0], 20, 1.8)}</span><b>${typeof d.templow === "number" ? f(d.templow, 0) + "° / " : ""}${f(d.temperature, 0)}°</b></span>`; }).join("");
      wx = `<button class="oc wx" data-a="info" data-v="${esc(o.weather)}" style="text-align:left;color:inherit"><div class="oh"><span class="oi">${ic(wm[0], 20, 2)}</span><b>${T("Wetter")}</b><small></small></div><div class="wn2"><span>${ic(wm[0], 52, 1.4)}</span><span class="wt"><b>${f(a.temperature)}°</b><small>${esc(wm[1])}</small></span></div><div class="wm"><span>${T("Feuchte")} <b>${f(a.humidity, 0)} %</b></span><span>Wind <b>${f(a.wind_speed, 0)} km/h</b></span></div>${days ? `<div class="fc">${days}</div>` : ""}</button>`;
    }
    // Licht
    const lts = (o.lights || []).map((l, k) => {
      const s = st(l.entity), on = !!s && s.state === "on", off = !s || s.state === "unavailable";
      const room = l.room ? this._roomObj(l.room) : null;
      const dy = this._dayEff(), im = l.image && (dy ? IMGX()[l.image + "_day"] : IMGX()[l.image]);
      const pic = im ? `<img src="${im}" alt="">` : scene(l.type || (room && room.type) || "living", on, room ? this._firstCover(room) : null, true, "ov" + k);
      return `<button class="lt ${on ? "on" : ""}" data-a="otog" data-v="${esc(l.entity)}" aria-pressed="${on}" ${off ? "disabled" : ""}>${pic}<span class="sh"></span><span class="lx"><b>${esc(l.name)}</b><span><small>${off ? T("offline") : on ? T("An") : T("Aus")}</small><span class="ms"><i></i></span></span></span></button>`;
    }).join("");
    const lightsOn = [...(o.lights || []), ...(o.extra_lights || [])].filter((x) => this._on(typeof x === "string" ? x : x.entity)).length;
    const light = `<div class="oc">${hd("bulb", T("Beleuchtung"), lightsOn ? T("{n} an", { n: lightsOn }) : T("alle aus"))}<div class="lb2"><button class="pri" data-a="lall" data-v="on">${ic("sun", 18, 2)}${T("Alles an")}</button><button data-a="lall" data-v="off">${ic("moon", 18, 2)}${T("Alles aus")}</button></div><div class="lts">${lts}</div></div>`;
    // Klima
    let clim = "";
    const c = o.climate && st(o.climate);
    if (c) {
      const a = c.attributes, tgt = this._pend[o.climate] != null ? this._pend[o.climate] : a.temperature, mn = a.min_temp || 16, mx = a.max_temp || 31;
      const R = 58, C = 2 * Math.PI * R, arc = C * 0.75, fr = typeof tgt === "number" ? Math.max(0, Math.min(1, (tgt - mn) / (mx - mn))) : 0;
      const on = c.state !== "off" && c.state !== "unavailable";
      const modes = ["heat", "cool", "off"].filter((m) => (a.hvac_modes || []).includes(m));
      const mi = { heat: ["flame", T("Heizen")], cool: ["snow", T("Kühlen")], off: ["power", T("Aus")] };
      clim = `<div class="oc">${hd("thermo", T("Klima"), o.climate_name || fn(o.climate), "info", o.climate)}<div class="cl"><div class="gau"><svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true"><defs><linearGradient id="ovg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7A3E14"/><stop offset="1" stop-color="#F28A3C"/></linearGradient></defs><g transform="rotate(135 70 70)"><circle cx="70" cy="70" r="${R}" fill="none" stroke="#2A2019" stroke-width="10" stroke-linecap="round" stroke-dasharray="${arc.toFixed(1)} ${C.toFixed(1)}"/>${fr > 0 ? `<circle cx="70" cy="70" r="${R}" fill="none" stroke="${on ? "url(#ovg)" : "#5A463A"}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(arc * fr).toFixed(1)} ${C.toFixed(1)}"/>` : ""}</g></svg><span><b>${typeof tgt === "number" ? f(tgt) + "°" : "–"}</b><small>${typeof a.current_temperature === "number" ? `${T("Ist")} ${f(a.current_temperature)}°` : (TX(HVAC[c.state], 1) || [0, c.state])[1]}</small></span></div><div class="pm"><button data-a="otstep" data-v="${esc(o.climate)}|1" aria-label="${T("Wärmer")}">+</button><button data-a="otstep" data-v="${esc(o.climate)}|-1" aria-label="${T("Kälter")}">–</button></div></div><div class="md3">${modes.map((m) => `<button class="${c.state === m ? "on" : ""}" data-a="ohvac" data-v="${esc(o.climate)}|${m}">${ic(mi[m][0], 16, 2)}${mi[m][1]}</button>`).join("")}</div></div>`;
    }
    // Sicherheit
    const drs = (o.doors || []).map((d) => { const s = st(d.entity), op = s && s.state === "on", off = !s || s.state === "unavailable"; return { d, op, off }; });
    const nOpen = drs.filter((x) => x.op).length;
    const sec = `<div class="oc">${hd("shield", T("Sicherheit"), "", this._c.security ? "sec" : o.alarm ? "info" : "", this._c.security ? "" : o.alarm)}<div class="sc"><span class="${nOpen ? "wn" : alCls || "g"}">${ic("shield", 44, 1.6)}</span><b>${esc(alm ? alm[0] : T("Kein Alarm"))}</b><small>${nOpen ? T("{n} offen", { n: nOpen }) : T("Alle Türen zu")}</small></div><div class="drs">${drs.map((x) => `<button data-a="info" data-v="${esc(x.d.entity)}"><span>${ic("door", 16, 1.8)}</span><span>${esc(x.d.name)}</span><em class="${x.op || x.off ? "wn" : ""}">${x.off ? T("offline") : x.op ? T("Offen") : T("Zu")}</em></button>`).join("")}</div></div>`;
    // Medien
    let med = "";
    const mps = (o.media || []).map((id) => ({ id, s: st(id) })).filter((x) => x.s && x.s.state !== "unavailable");
    const mp = mps.find((x) => x.s.state === "playing") || mps.find((x) => x.s.state === "paused") || mps[0];
    if (mp) {
      const a = mp.s.attributes, pl = mp.s.state === "playing", vol = this._pend[mp.id] != null ? this._pend[mp.id] : Math.round((a.volume_level || 0) * 100);
      const title = a.media_title || a.media_channel || (pl ? T("Spielt") : { paused: T("Pausiert"), idle: T("Bereit"), off: T("Aus") }[mp.s.state] || mp.s.state);
      med = `<div class="oc">${hd("music", T("Medien"), a.friendly_name || mp.id, "info", mp.id)}<div class="mp"><span class="cv">${a.entity_picture ? `<img src="${esc(a.entity_picture)}" alt="">` : ic("music", 30, 1.6)}</span><span><b>${esc(title)}</b><small>${esc(a.media_artist || "")}</small><small>${pl ? T("Spielt") : { paused: T("Pausiert"), idle: T("Bereit"), off: T("Aus") }[mp.s.state] || ""}</small></span></div><div class="mc"><button data-a="omcmd" data-v="${esc(mp.id)}|media_previous_track" aria-label="${T("Zurück")}">${ic("prev", 22, 2)}</button><button class="pp" data-a="omcmd" data-v="${esc(mp.id)}|media_play_pause" aria-label="${pl ? T("Pause") : T("Abspielen")}">${ic(pl ? "pause" : "play", 24, 2.2)}</button><button data-a="omcmd" data-v="${esc(mp.id)}|media_next_track" aria-label="${T("Weiter")}">${ic("nextt", 22, 2)}</button></div><div class="vl"><button data-a="ovol" data-v="${esc(mp.id)}|-5" aria-label="${T("Leiser")}">–</button><span><i style="width:${vol}%"></i></span><button data-a="ovol" data-v="${esc(mp.id)}|5" aria-label="${T("Lauter")}">+</button><small>${vol} %</small></div></div>`;
    } else med = `<div class="oc">${hd("music", T("Medien"), "")}<div class="empty">${T("Kein Player erreichbar")}</div></div>`;
    // Energie
    const sp = this._spark();
    const en = `<div class="oc">${hd("bolt", T("Energie"), sp ? T("letzte 12 h") : "", "energy")}<div class="eg"><b>${f(homeW, 0)}</b><span>W ${T("Haus")}</span></div>${e.solar_today ? `<span class="esub">${T("PV-Ertrag heute")} <b>${f(n(e.solar_today))} kWh</b></span>` : ""}${sp ? `<div class="spk">${sp}</div>` : ""}<div class="e3"><span><span style="color:#F2C14E">${ic("sun", 18, 2)}</span>${T("Solar")}<b>${f(solar, 0)} W</b></span><span><span>${ic("tower", 18, 2)}</span>${T("Netz")}<b>${f(grid, 0)} W</b></span><span><span style="color:#E8735A">${ic("battery", 18, 2)}</span>${T("Batterie")}<b>${f(soc, 0)} %</b></span></div></div>`;
    // Geräte
    const dv = `<div class="oc">${hd("dash", T("Geräte"), "")}<div class="dv6">${(o.devices || []).map((d) => { const s = st(d.entity), off = !s || s.state === "unavailable", on = !off && this._isOn(d); return `<button class="${on ? "on" : ""} ${off ? "off" : ""}" data-a="otog" data-v="${esc(d.entity)}" ${off ? "disabled" : ""}>${ic(d.icon || this._icon(d), 22, 1.7)}<span>${esc(d.name)}</span><small>${off ? T("offline") : on ? T("An") : T("Aus")}</small></button>`; }).join("")}</div></div>`;
    // Kamera
    let cam = "";
    if (o.camera) {
      const cs = st(o.camera), pic = cs && cs.attributes.entity_picture;
      cam = `<div class="oc">${hd("cam", T("Kamera"), o.camera_name || fn(o.camera))}<button class="cam" data-a="info" data-v="${esc(o.camera)}">${pic ? `<img src="${esc(pic)}" alt="${T("Kamerabild")} ${esc(o.camera_name || "")}"><em>${T("Letztes Bild · Antippen für Live")}</em>` : `${ic("cam", 30, 1.5)} ${T("Kamera offline")}`}</button></div>`;
    }
    // Schnellaktionen
    const qa = `<div class="oc">${hd("star", T("Schnellaktionen"), "")}<div class="qa">${(o.actions || []).map((d) => { const on = this._dom(d.entity) !== "script" && this._isOn(d); return `<button class="${on ? "on" : ""}" data-a="otog" data-v="${esc(d.entity)}"><span>${ic(d.icon || this._icon(d), 18, 2)}</span>${esc(d.name)}${on ? ` <small style="margin-left:auto;color:var(--warn)">${T("An")}</small>` : ""}</button>`; }).join("")}</div></div>`;
    return `<div class="view ov">${hero}${wx}${light}${clim}${sec}${med}${en}${dv}${cam}${qa}</div>`;
  }

  // ---------- Sicherheit ----------
  _when(ts) {
    const d = new Date(ts); if (isNaN(d)) return "";
    const now = new Date(), t = d.toLocaleTimeString(LOC, { hour: "2-digit", minute: "2-digit" });
    const day0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime(), dd = (day0 - new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()) / 86400000;
    if (dd <= 0) return t; if (dd === 1) return T("gestern") + " " + t;
    if (dd < 6) return d.toLocaleDateString(LOC, { weekday: "short" }) + " " + t;
    return d.toLocaleDateString(LOC, { day: "2-digit", month: "2-digit" }) + (LANG === "de" ? "." : "");
  }
  _secData() {
    const sc = this._c.security || {}, st = (id) => this._st(id);
    const items = []; for (const g of sc.groups || []) for (const i0 of g.items || []) { const it = typeof i0 === "string" ? { entity: i0 } : Object.assign({}, i0), s = st(it.entity); if (!it.name) it.name = (s && s.attributes.friendly_name) || it.entity; items.push({ g: g.name, it, s, open: !!s && s.state === "on", off: !s || s.state === "unavailable" }); }
    const cams = (sc.cameras || []).map((c) => ({ c, s: st(c.entity), m: c.motion ? st(c.motion) : null }));
    return { sc, items, nOpen: items.filter((x) => x.open).length, motion: cams.some((x) => x.m && x.m.state === "on"), cams, al: sc.alarm ? st(sc.alarm) : null };
  }
  _secView() {
    const D = this._secData(), sc = D.sc, al = D.al;
    const alm = al ? (TX(ALARM[al.state], 0) || [al.state === "unavailable" ? T("offline") : al.state, "wn"]) : [T("Keine Alarmanlage"), ""];
    const col = { g: "g", w: "wn", r: "rd" }[alm[1]] || (al && al.state === "disarmed" ? "" : "");
    const armed = al && al.state.startsWith("armed");
    const sub = [al ? (al.state === "unavailable" ? T("nicht erreichbar") : T("seit {t}", { t: this._when(al.last_changed) })) : "", D.nOpen ? T("{n} offen", { n: D.nOpen }) : T("alle {n} Fenster und Türen zu", { n: D.items.length }), D.motion ? T("Bewegung erkannt") : T("keine Bewegung")].filter(Boolean).join(" · ");
    const sf = al ? al.attributes.supported_features || 0 : 0;
    const modes = [];
    if (al) { if (sf & 1) modes.push(["alarm_arm_home", "armed_home", T("Zuhause"), "home"]); if (sf & 2) modes.push(["alarm_arm_away", "armed_away", T("Abwesend"), "lock"]); if (sf & 4) modes.push(["alarm_arm_night", "armed_night", T("Nacht"), "moon"]); modes.push(["alarm_disarm", "disarmed", T("Unscharf"), "unlock"]); }
    const hero = `<div class="oc shero"><div class="shr"><span class="sbig ${col}">${ic("shield", 56, 1.5)}</span><div class="sht"><small>${esc(al ? al.attributes.friendly_name || "Alarmanlage" : "Alarmanlage")}</small><b>${esc(alm[0])}</b><span>${esc(sub)}</span></div></div>
      <div class="spills"><span class="pill"><span class="${D.nOpen ? "wn" : "g"}">${ic("lock", 16, 2)}</span><span><b>${T("{a} von {b} zu", { a: D.items.length - D.nOpen, b: D.items.length })}</b></span></span><span class="pill"><span class="${D.motion ? "wn" : "g"}">${ic("motion", 16, 2)}</span><span><b>${D.motion ? T("Bewegung") : T("Keine Bewegung")}</b></span></span>${D.cams.length ? `<span class="pill"><span class="wn">${ic("cam", 16, 2)}</span><span><b>${D.cams.filter((x) => x.s && x.s.state !== "unavailable").length} ${T("Kameras")}</b></span></span>` : ""}</div>
      ${al && al.state !== "unavailable" ? `<div class="amodes">${modes.map(([svc, stt, lbl, i]) => `<button class="${al.state === stt ? "on" : ""}" data-a="pin" data-v="${svc}|${esc(lbl)}" ${al.state === stt ? "disabled" : ""}>${ic(i, 18, 2)}${lbl}</button>`).join("")}</div>` : ""}</div>`;
    const gates = (sc.gates || []).length ? `<div class="oc sgate">${`<div class="oh"><span class="oi">${ic("gate", 20, 2)}</span><b>${T("Tore")}</b><small></small></div>`}${sc.gates.map((g) => { const s = g.sensor ? this._st(g.sensor) : null; const op = !g.note && !!s && s.state === "on"; const txt = g.note ? g.note : !s ? T("kein Status") : s.state === "unavailable" ? T("Sensor offline") : op ? T("Offen · seit {t}", { t: this._when(s.last_changed) }) : T("Geschlossen"); return `<div class="grow"><span class="gi ${op ? "on" : ""}">${ic(g.icon || "gate", 20, 1.8)}</span><span class="gt"><b>${esc(g.name)}</b><small class="${g.note || op ? "wn" : ""}">${esc(txt)}</small></span><button data-a="otog" data-v="${esc(g.action)}">${T("Auslösen")}</button></div>`; }).join("")}</div>` : "";
    const cams = D.cams.length ? `<div class="oc scams"><div class="oh"><span class="oi">${ic("cam", 20, 2)}</span><b>${T("Kameras")}</b><small>${T("Antippen für Live-Bild")}</small></div><div class="cgrid">${D.cams.map(({ c, s, m }) => { const pic = s && s.attributes.entity_picture; const mv = m && m.state === "on"; return `<button class="cam ccell" data-a="info" data-v="${esc(c.entity)}">${pic ? `<img src="${esc(pic)}" alt="${T("Kamera")} ${esc(c.name)}">` : ic("cam", 30, 1.4)}<span class="ctag ${mv ? "mv" : ""}"><i></i>${mv ? T("Bewegung") : s && s.state !== "unavailable" ? T("Letztes Bild") : T("offline")}</span><span class="cname"><b>${esc(c.name)}</b>${m ? `<small>${mv ? T("Bewegung jetzt") : T("Bewegung zuletzt {t}", { t: this._when(m.last_changed) })}</small>` : ""}</span></button>`; }).join("")}</div></div>` : "";
    const grpHtml = (sc.groups || []).map((g) => { const its = D.items.filter((x) => x.g === g.name).sort((a, b) => (b.open - a.open)); return `<span class="sgh">${esc(g.name)} · ${its.length}</span>${its.map((x) => `<button class="srow ${x.open ? "op" : ""}" data-a="info" data-v="${esc(x.it.entity)}"><span>${ic(x.it.icon === "win" ? "win" : "door", 16, 1.8)}</span><span>${esc(x.it.name)}</span><small>${((w) => w ? T("seit {t}", { t: w }) : "")(x.s ? this._when(x.s.last_changed) : "")}</small><b>${x.off ? T("offline") : x.open ? T("Offen") : T("Zu")}</b></button>`).join("")}`; }).join("");
    const list = `<div class="oc slist"><div class="oh"><span class="oi">${ic("door", 20, 2)}</span><b>${T("Fenster &amp; Türen")}</b><small>${D.nOpen ? T("{n} offen", { n: D.nOpen }) : T("alle zu")}</small></div><div class="sscroll">${grpHtml}</div></div>`;
    return `<div class="view sec"><div class="colL">${hero}${cams}</div><div class="colR">${gates}${list}</div></div>`;
  }
  _pinDlg() {
    const p = this._pin; if (!p) return "";
    const dots = Array.from({ length: Math.max(4, p.code.length) }, (_, i) => `<i class="${i < p.code.length ? "f" : ""}"></i>`).join("");
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "del", "0", "ok"].map((k) => k === "del" ? `<button data-a="pdel" aria-label="${T("Löschen")}">⌫</button>` : k === "ok" ? `<button class="ok" data-a="pok" ${p.code.length ? "" : "disabled"}>OK</button>` : `<button data-a="pk" data-v="${k}">${k}</button>`).join("");
    return `<div class="ovl"><div class="dlg pin" role="dialog" aria-label="${T("Code eingeben")}"><b>${esc(p.title)}</b><p>${esc(p.err || T("Code der Alarmanlage eingeben"))}</p><div class="pdots">${dots}</div><div class="pkeys">${keys}</div><div class="row"><button data-a="pcancel">${T("Abbrechen")}</button></div></div></div>`;
  }

  _energyView() {
    const e = this._c.energy, n = (id) => (id ? this._num(id) : null), f = (v, d) => this._fmt(v, d);
    const solar = n(e.solar), bat = n(e.battery), grid = n(e.grid), home = n(e.home), soc = n(e.battery_soc);
    const sgn = (v, inv) => (v == null ? null : inv ? -v : v);
    const batV = sgn(bat, e.battery_invert), gridV = sgn(grid, e.grid_invert);
    const act = (v) => v != null && Math.abs(v) > 5;
    const sp = (v) => Math.max(0.35, 2.4 - Math.min(Math.abs(v || 0), 3000) / 1500).toFixed(2) + "s";
    const consT = n(e.consumption_today), impT = n(e.import_today), expT = n(e.export_today), pvT = n(e.solar_today);
    const fcT = n(e.forecast_today), fcM = n(e.forecast_tomorrow), outT = n(e.outdoor_temp);
    const aut = consT != null && consT > 0 && impT != null ? Math.max(0, Math.min(100, Math.round((1 - impT / consT) * 100))) : null;
    let sub = T("Live");
    if (act(batV) && batV < 0) sub += " · " + T("Batterie versorgt das Haus"); else if (act(solar)) sub += " · " + T("Solar liefert"); else if (act(gridV) && gridV > 0) sub += " · " + T("Strom aus dem Netz");
    const line = (d, v, col, w) => `<path d="${d}" stroke="#2E241C" stroke-width="3"/>${act(v) ? `<path class="fl" style="--sp:${sp(v)}" d="${d}" stroke="${col}" stroke-width="${w || 3}" stroke-linecap="round"/>` : ""}`;
    const wide = (this.clientWidth || 0) >= 900;
    const L = wide ? { vb: "0 0 560 300", S: [280, 44, 32], G: [116, 160], B: [444, 160], H: [280, 160, 48], st: [326, 40, "start"], hv: 246, hl: 268, hs: 34 }
                   : { vb: "0 0 350 285", S: [175, 46, 30], G: [52, 168], B: [298, 168], H: [175, 168, 42], st: [214, 40, "start"], hv: 246, hl: 266, hs: 30 };
    const [Sx, Sy, Sr] = L.S, [Gx, Gy] = L.G, [Bx, By] = L.B, [Hx, Hy, Hr] = L.H;
    const pSolar = `M${Hx} ${Sy + Sr} V${Hy - Hr}`;
    const pGrid = gridV > 0 ? `M${Gx + 34} ${Gy} H${Hx - Hr}` : `M${Hx - Hr} ${Gy} H${Gx + 34}`;
    const pBat = batV < 0 ? `M${Bx - 34} ${By} H${Hx + Hr}` : `M${Hx + Hr} ${By} H${Bx - 34}`;
    const c34 = 2 * Math.PI * 34;
    const txt = (x, y, t, col, sz, w, anc) => `<text x="${x}" y="${y}" ${anc ? `text-anchor="${anc}"` : ""} fill="${col}" font-size="${sz}" ${w ? `font-weight="${w}"` : ""} font-family="Manrope,system-ui,sans-serif">${esc(t)}</text>`;
    const flow = `<svg viewBox="${L.vb}" role="img" aria-label="Energiefluss"><defs><radialGradient id="ehg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#F28A3C" stop-opacity=".25"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
      <circle cx="${Hx}" cy="${Hy}" r="${wide ? 140 : 120}" fill="url(#ehg)"/>
      ${line(pSolar, solar, "#F2C14E")}${line(pGrid, gridV, "#8FB8D8", 2.5)}${line(pBat, batV, "#F28A3C")}
      <circle cx="${Sx}" cy="${Sy}" r="${Sr}" fill="#1A140F" stroke="${act(solar) ? "#F2C14E" : "#3A2E25"}" stroke-width="2"/><g transform="translate(${Sx - 12} ${Sy - 12})" stroke="${act(solar) ? "#F2C14E" : "#6A5E52"}" stroke-width="1.8" fill="none" stroke-linecap="round">${P.sun}</g>
      ${txt(L.st[0], L.st[1], T("Solar") + " " + f(solar, 0) + " W", "#F3ECE4", 16, 600)}${txt(L.st[0], L.st[1] + 18, T("heute") + " " + f(pvT, 1) + " kWh", "#9C9086", 12)}
      <circle cx="${Gx}" cy="${Gy}" r="34" fill="#1A140F" stroke="#3A2E25" stroke-width="2"/><g transform="translate(${Gx - 12} ${Gy - 12})" stroke="#8FB8D8" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">${P.tower}</g>
      ${txt(Gx, Gy + 56, T("Netz"), "#9C9086", 12, 0, "middle")}${txt(Gx, Gy + 74, gridV == null ? T("offline") : f(Math.abs(gridV), 0) + " W", "#8FB8D8", 15, 600, "middle")}${act(gridV) ? txt(Gx, Gy + 90, gridV > 0 ? T("Bezug") : T("Einspeisung"), "#8FB8D8", 11, 0, "middle") : ""}
      <circle cx="${Bx}" cy="${By}" r="34" fill="#1A140F" stroke="#3A2E25" stroke-width="2"/>${soc != null ? `<circle cx="${Bx}" cy="${By}" r="34" fill="none" stroke="#F28A3C" stroke-width="3" stroke-linecap="round" stroke-dasharray="${(c34 * soc / 100).toFixed(1)} ${c34.toFixed(1)}" transform="rotate(-90 ${Bx} ${By})"/>` : ""}<g transform="translate(${Bx - 12} ${By - 12})" stroke="#F3ECE4" stroke-width="1.8" fill="none" stroke-linecap="round">${P.battery}</g>
      ${txt(Bx, By + 56, T("Batterie") + " " + f(soc, 0) + " %", "#9C9086", 12, 0, "middle")}${txt(Bx, By + 74, batV == null ? T("offline") : f(Math.abs(batV), 0) + " W", "#F28A3C", 15, 600, "middle")}${act(batV) ? txt(Bx, By + 90, batV < 0 ? T("Entladung") : T("Ladung"), "#F28A3C", 11, 0, "middle") : ""}
      <circle cx="${Hx}" cy="${Hy}" r="${Hr}" fill="#24170F" stroke="#5A3418" stroke-width="2"/><g transform="translate(${Hx - 12} ${Hy - 12})" stroke="#F28A3C" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${P.house}</g>
      ${txt(Hx, L.hv, f(home, 0) + " W", "#F3ECE4", L.hs, 200, "middle")}${txt(Hx, L.hl, T("Hausverbrauch jetzt"), "#9C9086", 12, 0, "middle")}</svg>`;
    const stat = (id, lbl, v, d, note, hi) => `<button class="stat" data-a="info" data-v="${esc(id || "")}"><small>${lbl}</small><b>${f(v, d)} <span>kWh</span></b>${note ? `<em class="${hi ? "hi" : ""}">${esc(note)}</em>` : ""}</button>`;
    const cons = (e.consumers || []).map((x) => ({ ...x, v: n(x.entity) }));
    const mx = Math.max(100, ...cons.map((x) => x.v || 0));
    const bars = cons.map((x) => `<button class="bar ${!x.v ? "zero" : ""}" data-a="info" data-v="${esc(x.entity)}"><span class="bl"><span>${esc(x.name)}</span>${x.v == null ? "<span>offline</span>" : x.v ? `<b>${f(x.v, 1)} W</b>` : "<span>0 W</span>"}</span>${x.v ? `<span class="bt"><i style="width:${Math.max(3, Math.round(x.v / mx * 100))}%"></i></span>` : ""}</button>`).join("");
    // Warmwasser
    let ww = "";
    if (e.water_temp || e.water_heater) {
      const wh = e.water_heater && this._st(e.water_heater), wa = (wh && wh.attributes) || {};
      const wt = n(e.water_temp) != null ? n(e.water_temp) : wa.current_temperature;
      const mn = wa.min_temp || 30, mxT = wa.max_temp || 70, c40 = 2 * Math.PI * 40;
      const fr = wt != null ? Math.max(0, Math.min(1, (wt - mn) / (mxT - mn))) : 0;
      const boost = e.water_boost && this._on(e.water_boost), auto = e.water_automation && this._st(e.water_automation);
      const lt = auto && auto.attributes.last_triggered ? new Date(auto.attributes.last_triggered).toLocaleDateString(LOC, { day: "2-digit", month: "2-digit" }) : null;
      ww = `<section class="panel"><div class="ph"><span>${T("Warmwasser")}</span><span>${wh ? T("Modus") + " " + esc(wh.state) : ""}</span></div><div class="ww">
        <button class="wr" data-a="info" data-v="${esc(e.water_heater || e.water_temp)}" aria-label="${T("Warmwasser Details")}"><svg width="92" height="92" viewBox="0 0 92 92" aria-hidden="true"><circle cx="46" cy="46" r="40" fill="none" stroke="#2E241C" stroke-width="5"/>${fr > 0 ? `<circle cx="46" cy="46" r="40" fill="none" stroke="#F28A3C" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(c40 * fr).toFixed(1)} ${c40.toFixed(1)}"/>` : ""}</svg><span><b>${f(wt, 1)}°</b>${typeof wa.temperature === "number" ? `<small>${T("Ziel")} ${f(wa.temperature, 0)}°</small>` : ""}</span></button>
        <div class="wc">${e.water_boost ? `<button class="boost ${boost ? "on" : ""}" data-a="etog" data-v="${esc(e.water_boost)}">${boost ? T("Boost läuft · beenden") : T("Wasser jetzt aufheizen")}</button>` : ""}
          ${auto ? `<div class="row"><span>${T("Solar-Automation")}</span><button class="sw ${auto.state === "on" ? "on" : ""}" data-a="etog" data-v="${esc(e.water_automation)}" aria-label="${T("Warmwasser-Automation schalten")}"><i></i></button></div>${lt ? `<span class="hint" style="text-align:left;font-size:11px">${T("Zuletzt ausgelöst")} ${lt}</span>` : ""}` : ""}</div></div></section>`;
    }
    // Müll
    let trash = "";
    if (e.trash) {
      const pats = e.trash.patterns || [];
      let body = "";
      if (this._trash == null) body = `<span class="hint" style="text-align:left">${this._trashAt ? T("Kalender nicht erreichbar") : T("Lädt …")}</span>`;
      else {
        const days = {};
        for (const evn of this._trash) {
          const d = (evn.start && (evn.start.date || evn.start.dateTime) || "").slice(0, 10); if (!d) continue;
          const p = pats.find((q) => (evn.summary || "").toLowerCase().includes(q.match.toLowerCase()));
          const lbl = p ? p.name : evn.summary, col = p ? p.color : "#9C9086";
          (days[d] = days[d] || {})[lbl] = col;
        }
        const keys = Object.keys(days).sort().slice(0, e.trash.max_days || 3);
        body = keys.length ? keys.map((d, i) => { const dt = new Date(d + "T12:00:00"); return `<div class="tday ${i === 0 ? "next" : ""}"><div class="tdate"><small>${dt.toLocaleDateString(LOC, { weekday: "short" }).replace(".", "")}</small><b>${dt.getDate()}.</b><small>${dt.toLocaleDateString(LOC, { month: "short" }).replace(".", "")}</small></div><div class="bins">${Object.entries(days[d]).map(([l, c]) => `<span class="bin"><i style="background:${c}"></i>${esc(l)}</span>`).join("")}</div></div>`; }).join("") : `<span class="hint" style="text-align:left">${T("Keine Termine in den nächsten {n} Tagen", { n: e.trash.days || 14 })}</span>`;
      }
      trash = `<section class="panel"><div class="ph"><span>${T("Müllabfuhr")}</span></div>${body}</section>`;
    }
    return `<div class="view energy">
      <header class="hdr ehdr"><div class="ttl" style="align-items:flex-start;text-align:left"><b style="font-size:24px">${T("Energie")}</b><small>${esc(sub)}${outT != null ? " · " + T("Außen") + " " + f(outT, 1) + " " + TU : ""}</small></div>${e.details_path ? `<button class="rbtn" data-a="nav" data-v="${esc(e.details_path)}" aria-label="${T("Energie-Details")}">${ic("more", 18, 2)}</button>` : ""}</header>
      <section class="flow">${flow}<div class="fchips">${aut != null ? `<span>${T("Autarkie heute")}<b>${aut} %</b></span>` : ""}${fcM != null ? `<span>${T("Prognose morgen")}<b>${f(fcM, 1)} kWh</b></span>` : ""}</div></section>
      <div class="today">${stat(e.solar_today, T("PV-Ertrag heute"), pvT, 1, fcT != null ? `${T("Prognose")} ${f(fcT, 1)}` : "", pvT != null && fcT != null && pvT > fcT)}${stat(e.consumption_today, T("Verbrauch heute"), consT, 1, T("Haus gesamt"))}${stat(e.import_today, T("Netzbezug"), impT, 2)}${stat(e.export_today, T("Einspeisung"), expT, 2)}</div>
      ${cons.length ? `<section class="panel"><div class="ph"><span>${T("Großverbraucher jetzt")}</span></div>${bars}</section>` : ""}
      ${ww}${trash}
    </div>`;
  }

  _detail(r) {
    const id = this._det, d = (r.devices || []).find((x) => x.entity === id) || { entity: id, name: id }, dm = this._dom(id);
    const hdr = (t) => `<header class="hdr"><button class="rbtn" data-a="home" aria-label="${T("Zurück")}">${ic("back", 18, 2)}</button><div class="ttl"><b>${esc(t)}</b><small>${esc(r.name)}</small></div><button class="rbtn" data-a="info" data-v="${esc(id)}" aria-label="${T("Mehr")}">${ic("more", 18, 2)}</button></header>`;
    const s = this._st(id);
    if (dm === "light" && this._ltView) return this._ltView(r, d, s, hdr);
    if (dm === "cover") {
      const covers = (r.devices || []).filter((x) => this._dom(x.entity) === "cover");
      const v = this._pos(id), canStop = s && (s.attributes.supported_features & 8);
      const moving = s && (s.state === "opening" || s.state === "closing");
      return `<div class="view det">${hdr(T("Rolläden"))}
        <div class="vis ${this._pend[id] != null ? "busy" : ""}">${this._dialGlow("#F28A3C")}<div class="dialbox">${this._dial((v || 0) / 100)}</div><div class="dval"><b>${v == null ? "–" : v}<span> %</span></b><small>${esc(d.name)} · ${moving ? (s.state === "opening" ? T("fährt hoch") : T("fährt runter")) : this._posLabel(v)}</small></div></div>
        <div class="ctlcol">
          ${covers.length > 1 ? `<div class="seg" role="tablist">${covers.map((c) => `<button role="tab" class="${c.entity === id ? "on" : ""}" data-a="csel" data-v="${esc(c.entity)}">${esc(c.short || c.name)}</button>`).join("")}</div>` : ""}
          <div class="ctl"><button data-a="cpos" data-v="0" aria-label="${T("Schließen")}">${ic("down", 22, 2)}</button><button data-a="cstep" data-v="-10" aria-label="${T("10 Prozent zu")}">−</button>${canStop ? `<button class="pri" data-a="cstop" aria-label="${T("Stopp")}"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg></button>` : ""}<button data-a="cstep" data-v="10" aria-label="${T("10 Prozent auf")}">+</button><button data-a="cpos" data-v="100" aria-label="${T("Öffnen")}">${ic("up", 22, 2)}</button></div>
          ${covers.length > 1 ? `<span class="lbl">${T("Alle im Raum")}</span><div class="three"><button data-a="call" data-v="100">${T("Alle auf")}</button><button data-a="call" data-v="50">${T("Halb")}</button><button data-a="call" data-v="0">${T("Alle zu")}</button></div>` : `<div class="three"><button data-a="cpos" data-v="100">${T("Auf")}</button><button data-a="cpos" data-v="50">${T("Halb")}</button><button data-a="cpos" data-v="0">${T("Zu")}</button></div>`}
        </div></div>`;
    }
    if (dm === "climate") {
      const a = (s && s.attributes) || {}, hasT = !!(a.supported_features & 1) && typeof a.temperature === "number";
      const t = this._pend[id] != null ? this._pend[id] : a.temperature;
      const mode = s ? s.state : "off", cold = mode === "cool" || mode === "dry";
      const col = mode === "off" ? "#6A5E52" : cold ? "#8FB8D8" : "#F28A3C";
      const vis = hasT
        ? `<div class="vis ${this._pend[id] != null ? "busy" : ""}">${this._dialGlow(col)}<div class="dialbox">${this._dial((t - a.min_temp) / (a.max_temp - a.min_temp), col)}</div><div class="dval"><b>${this._fmt(t)}<span> ${TU}</span></b><small>${T("Ziel")} · ${T("Raum")} ${this._fmt(a.current_temperature)} ${TU} · ${esc((TX(HVAC[mode], 1) || [0, mode])[1])}</small></div></div>`
        : `<div class="vis">${this._dialGlow(col)}<div class="dialbox" style="flex-direction:column;gap:14px"><button class="bigbtn ${mode !== "off" ? "on" : ""}" data-a="tog" data-v="${esc(id)}" aria-label="${T("Ein/Aus")}">${ic("power", 34, 2)}</button><span class="hint">${mode === "off" ? T("Aus") : T("Ein") + " · " + esc((TX(HVAC[mode], 1) || [0, mode])[1])}<br>${T("Nur Ein/Aus steuerbar")}</span></div></div>`;
      const modes = (a.hvac_modes || []).map((m) => { const h = TX(HVAC[m], 1) || ["auto", m]; return `<button class="${m === mode ? "on" : ""}" data-a="hvac" data-v="${esc(m)}" aria-label="${esc(h[1])}">${ic(h[0], 22, 2)}</button>`; }).join("");
      return `<div class="view det">${hdr(d.name)}${vis}<div class="ctlcol">
        ${hasT ? `<div class="ctl"><button data-a="tstep" data-v="-1" aria-label="${T("Kälter")}">−</button><button data-a="tstep" data-v="1" aria-label="${T("Wärmer")}">+</button></div>` : ""}
        ${(a.hvac_modes || []).length > 2 ? `<span class="lbl" style="text-align:center">${T("Modus")}</span><div class="modes">${modes}</div>` : ""}
        ${a.fan_mode ? `<div class="chips"><button class="chip" data-a="info" data-v="${esc(id)}"><small>${T("Lüfter")}</small><b>${esc(a.fan_mode)}</b></button><button class="chip" data-a="info" data-v="${esc(id)}"><small>${T("Lamellen")}</small><b>${esc(a.swing_mode || "–")}</b></button></div>` : ""}
      </div></div>`;
    }
    if (dm === "media_player") {
      const a = (s && s.attributes) || {}, vol = this._pend[id] != null ? this._pend[id] : Math.round((a.volume_level || 0) * 100);
      const playing = s && s.state === "playing";
      return `<div class="view det">${hdr(d.name || T("Musik"))}
        <div class="vis ${this._pend[id] != null ? "busy" : ""}">${this._dialGlow("#F28A3C")}<div class="dialbox">${this._dial(vol / 100)}</div><div class="dval"><b>${vol}<span> %</span></b><small>${T("Lautstärke")}</small></div></div>
        <div class="ctlcol"><div class="meta"><b>${esc(a.media_title || (s ? ({ idle: T("Bereit"), paused: T("Pausiert"), off: T("Aus"), unavailable: T("offline") }[s.state] || s.state) : T("offline")))}</b><small>${esc(a.media_artist || a.media_channel || "")}</small></div>
          <div class="ctl"><button data-a="mcmd" data-v="media_previous_track" aria-label="${T("Zurück")}">${ic("prev", 20, 2)}</button><button class="${playing ? "on" : "pri"}" data-a="mcmd" data-v="media_play_pause" aria-label="${T("Wiedergabe")}">${ic(playing ? "pause" : "play", 22, 2.2)}</button><button data-a="mcmd" data-v="media_next_track" aria-label="${T("Weiter")}">${ic("nextt", 20, 2)}</button></div>
          <div class="ctl"><button data-a="vstep" data-v="-5" aria-label="${T("Leiser")}">−</button><button data-a="vstep" data-v="5" aria-label="${T("Lauter")}">+</button></div>
          ${(a.source_list || []).length ? `<span class="lbl" style="text-align:center">${T("Quelle")}</span><div class="seg">${a.source_list.map((x) => `<button class="${x === a.source ? "on" : ""}" data-a="src" data-v="${esc(x)}">${esc(x)}</button>`).join("")}</div>` : ""}
        </div></div>`;
    }
    // Licht / Schalter
    const on = this._isOn(d), a = (s && s.attributes) || {};
    const dim = dm === "light" && (a.supported_color_modes || []).some((m) => m !== "onoff");
    const pw = d.power ? this._num(d.power) : null;
    if (dim) {
      const b = this._pend[id] != null ? this._pend[id] : (on ? Math.round((a.brightness || 0) / 2.55) : 0);
      return `<div class="view det">${hdr(d.name)}
        <div class="vis ${this._pend[id] != null ? "busy" : ""}">${scene(r.type, on, this._firstCover(r), false, "d")}<div class="dialbox" style="background:rgba(13,10,8,.45)">${this._dial(b / 100)}</div><div class="dval"><b>${b}<span> %</span></b><small>${T("Helligkeit")}</small></div></div>
        <div class="ctlcol"><button class="bigbtn ${on ? "on" : ""}" data-a="tog" data-v="${esc(id)}" aria-label="${T("Schalten")}">${ic("power", 34, 2)}</button><span class="hint">${on ? T("An") : T("Aus")}</span>
          <div class="ctl"><button data-a="bstep" data-v="-10" aria-label="Dunkler">−</button><button data-a="bstep" data-v="10" aria-label="Heller">+</button></div>
          ${d.power ? `<div class="chips"><button class="chip" data-a="info" data-v="${esc(d.power)}"><small>${T("Leistung")}</small><b>${this._fmt(pw)} W</b></button></div>` : ""}</div></div>`;
    }
    return `<div class="view det">${hdr(d.name)}
      <div class="vis">${scene(r.type, dm === "light" ? on : this._roomLit(r), this._firstCover(r), false, "d")}<div class="gauges">${d.power ? `<button class="ring" data-a="info" data-v="${esc(d.power)}">${this._ring(33, on ? Math.min((pw || 0) / 100, 1) || 1 : 0)}<span class="v"><b>${this._fmt(pw)} W</b><small>${T("Leistung")}</small></span></button>` : ""}</div></div>
      <div class="ctlcol"><button class="bigbtn ${on ? "on" : ""}" data-a="tog" data-v="${esc(id)}" aria-label="${T("Schalten")}">${ic(this._icon(d) === "bulb" ? "power" : this._icon(d), 34, 2)}</button><span class="hint">${on ? "An · tippen zum Ausschalten" : "Aus · tippen zum Einschalten"}</span>
        ${dm === "light" ? `<div class="chips"><div class="chip"><small>${T("Typ")}</small><b>${T("Nur Ein/Aus")}</b></div></div>` : ""}</div></div>`;
  }
}

if (!customElements.get("home-live-card")) customElements.define("home-live-card", HausLiveCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "home-live-card", name: "Home Live Card", description: "Full-screen home dashboard: rooms, lights, heating, energy and security" });
