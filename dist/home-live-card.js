/*! home-live-card v0.9.0 | MIT License | https://github.com/RomanM78/home-live-card */

window.HOME_LIVE_VERSION = "0.9.0";

// Home Live Card – translations. Keys are the German source texts; {x} are placeholders.
const EN = {
  "10 Prozent auf": "10 percent up", "10 Prozent zu": "10 percent down", "ALARM ausgelöst": "ALARM triggered",
  "AN": "ON", "AUS": "OFF", "Abbrechen": "Cancel", "Abend": "Evening", "Abspielen": "Play", "Abwesend": "Away",
  "Alarm": "Alarm", "Alarm scharf": "Alarm armed", "Alarm unscharf": "Alarm disarmed",
  "Alarmanlage unscharf schalten": "Disarm alarm", "Alle Türen zu": "All doors closed", "Alle auf": "All open",
  "Alle im Raum": "Whole room", "Alle zu": "All closed", "Alles an": "All on", "Alles aus": "All off",
  "Am {d}abend rausstellen": "Put out on {d} evening", "An": "On", "Antippen für Live-Bild": "Tap for live view",
  "Auf": "Open", "Aus": "Off", "Auslösen": "Run", "Ausschalten": "Turn off", "Autarkie heute": "Self-sufficiency today",
  "Auto": "Auto", "Außen": "Outside", "Batterie": "Battery", "Batterie versorgt das Haus": "battery supplies the house",
  "Beleuchtung": "Lights", "Bereit": "Ready", "Bewegung": "Motion", "Bewegung erkannt": "motion detected",
  "Bewegung jetzt": "Motion now", "Bewegung zuletzt {t}": "Last motion {t}", "Bewölkt": "Cloudy", "Bezug": "Import",
  "Boost läuft · beenden": "Boost running · stop", "Code der Alarmanlage eingeben": "Enter alarm code",
  "Code eingeben": "Enter code", "Code falsch?": "Wrong code?", "Darstellung": "Appearance",
  "Das Gerät wird stromlos geschaltet.": "The device will be switched off.", "Details": "Details",
  "Die Aktion wird sofort ausgeführt.": "The action runs immediately.", "Ein": "On", "Ein/Aus": "On/off",
  "Einschalten": "Turn on", "Einspeisung": "Export", "Energie": "Energy", "Energie-Details": "Energy details",
  "Entladung": "Discharging", "Fenster &amp; Türen": "Windows &amp; doors", "Feuchte": "Humidity",
  "Gerade ist niemand zu Hause.": "Nobody is home right now.", "Geräte": "Devices", "Geschlossen": "Closed",
  "Gewitter": "Thunderstorm", "Großverbraucher jetzt": "Largest consumers now", "Gute Nacht": "Good night",
  "Guten Abend": "Good evening", "Guten Morgen": "Good morning", "Guten Tag": "Good afternoon", "Hagel": "Hail",
  "Halb": "Half", "Haus": "home", "Haus gesamt": "Whole house",
  "Hausverbrauch der letzten 12 Stunden": "Home consumption, last 12 hours", "Hausverbrauch jetzt": "Home consumption now",
  "Heizen": "Heat", "Helligkeit": "Brightness", "Heute": "Today", "Heute Abend rausstellen": "Put out this evening",
  "Ist": "Now", "Ja": "Yes", "Kalender nicht erreichbar": "Calendar not reachable", "Kamera": "Camera",
  "Kamera offline": "Camera offline", "Kamerabild": "Camera image", "Kameras": "Cameras", "Kein Alarm": "No alarm",
  "Kein Player erreichbar": "No player reachable", "Keine Alarmanlage": "No alarm system", "Keine Bewegung": "No motion",
  "Keine Termine in den nächsten {n} Tagen": "No collections in the next {n} days",
  "Keine steuerbaren Geräte in diesem Raum": "No controllable devices in this room", "Klar": "Clear", "Klima": "Climate",
  "Kälter": "Cooler", "Kühlen": "Cool", "Ladung": "Charging", "Lamellen": "Swing", "Lauter": "Louder",
  "Lautstärke": "Volume", "Leiser": "Quieter", "Leistung": "Power", "Letztes Bild": "Last image",
  "Letztes Bild · Antippen für Live": "Last image · tap for live", "Live": "Live", "Luftfeuchte": "Humidity",
  "Lädt …": "Loading …", "Löschen": "Delete", "Lüften": "Fan", "Lüfter": "Fan", "Medien": "Media", "Mehr": "More",
  "Modus": "Mode", "Morgen": "Tomorrow", "Musik": "Music", "Müllabfuhr": "Waste collection", "Nacht": "Night",
  "Nebel": "Fog", "Netz": "Grid", "Netzbezug": "Grid import", "Nicht ausgeführt": "Not done",
  "Nur Ein/Aus": "On/off only", "Nur Ein/Aus steuerbar": "On/off control only", "Offen": "Open",
  "Offen · seit {t}": "Open · since {t}", "PV-Ertrag heute": "Solar today", "Pause": "Pause", "Pausiert": "Paused",
  "Prognose": "Forecast", "Prognose morgen": "Forecast tomorrow", "Prozent": "percent", "Quelle": "Source",
  "Raum": "Room", "autark": "self-sufficient", "Tropfen": "Drop", "Regen": "Rain", "Rolläden": "Blinds", "Räume": "Rooms", "Schalten": "Toggle", "Scharf": "Armed",
  "Scharf schalten": "Arm", "Scharf · Abwesend": "Armed · away", "Scharf · Nacht": "Armed · night",
  "Scharf · Urlaub": "Armed · vacation", "Scharf · Zuhause": "Armed · home", "Schließen": "Close", "Schnee": "Snow",
  "Schneeregen": "Sleet", "Schnellaktionen": "Quick actions", "Sensor offline": "Sensor offline",
  "Sicherheit": "Security", "Solar": "Solar", "Solar liefert": "solar supplying", "Solar-Automation": "Solar automation",
  "Solltemperatur": "Target temperature", "Sonnig": "Sunny", "Spielt": "Playing", "Starkregen": "Heavy rain",
  "Stopp": "Stop", "Strom aus dem Netz": "power from the grid", "System": "System", "Tag": "Day",
  "Teilweise bewölkt": "Partly cloudy", "Temperatur": "Temperature", "Temperatur wischen": "Swipe to set temperature",
  "Tore": "Gates", "Trocknen": "Dry", "Typ": "Type", "Unscharf": "Disarmed", "Unwetter": "Severe weather",
  "Verbrauch": "Consumption", "Verbrauch heute": "Consumption today", "Verzögerung …": "Delay …",
  "Warmwasser": "Hot water", "Warmwasser Details": "Hot water details",
  "Warmwasser-Automation schalten": "Toggle hot water automation", "Wasser jetzt aufheizen": "Heat water now",
  "Weiter": "Next", "Wetter": "Weather", "Wiedergabe": "Playback", "Windig": "Windy",
  "Wird entschärft …": "Disarming …", "Wird heute abgeholt": "Collected today", "Wird scharf …": "Arming …",
  "Wischen zum Dimmen": "Swipe to dim", "Wärmer": "Warmer", "Ziel": "Target", "Zu": "Closed", "Zuhause": "Home",
  "Zuletzt ausgelöst": "Last run", "Zurück": "Back", "alle aus": "all off", "alle zu": "all closed",
  "alle {n} Fenster und Türen zu": "all {n} windows and doors closed", "automatisch": "automatic", "bereit": "ready",
  "fährt hoch": "opening", "fährt runter": "closing", "heute": "today", "kein Status": "no status",
  "keine Bewegung": "no motion", "letzte 12 h": "last 12 h", "läuft": "running", "nicht erreichbar": "not reachable",
  "nur Status": "status only", "offline": "offline", "seit {t}": "since {t}", "spielt": "playing",
  "{a} von {b} zu": "{a} of {b} closed", "{n} an": "{n} on", "{n} auslösen?": "Run {n}?",
  "{n} ausschalten?": "Turn off {n}?", "{n} offen": "{n} open", "{n} schalten": "Toggle {n}", "Öffnen": "Open",
  "Übersicht": "Overview", "{n} Gerät an": "{n} device on", "{n} Geräte an": "{n} devices on",
  "{n} ist zu Hause": "{n} is home", "{n} % offen": "{n} % open", "gestern": "yesterday", "{n} sind zu Hause": "{n} are home",
  "{n} Lichter an": "{n} lights on", "{n} Licht an": "{n} light on", "Alle Lichter aus": "All lights off", "Akku": "Battery",
  "Innen": "Inside", "Heizung aus": "Heating off", "Draußen {t}° · {w}": "Outside {t}° · {w}", "Haus verbraucht gerade {w} W": "House is using {w} W", "Szenen": "Scenes"
};
let LANG = "de", LOC = "de-DE", TU = "°C";
const T = (s, v) => {
  let r = LANG === "de" ? s : (EN[s] !== undefined ? EN[s] : s);
  if (v) for (const k in v) r = r.split("{" + k + "}").join(v[k]);
  return r;
};
// language: "auto" (default) follows the Home Assistant user language; German for de-*, English otherwise
const setLang = (cfg, hass) => {
  const want = cfg && cfg.language && cfg.language !== "auto" ? String(cfg.language) : ((hass && ((hass.locale && hass.locale.language) || hass.language)) || "en");
  LANG = want.toLowerCase().startsWith("de") ? "de" : "en";
  LOC = LANG === "de" ? "de-DE" : (want.toLowerCase().startsWith("en") ? want : "en-GB");
  TU = (hass && hass.config && hass.config.unit_system && hass.config.unit_system.temperature) || "°C";
};

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
const safeCol = (c) => { const v = String(c == null ? "" : c).trim(); return /^#[0-9a-f]{3,8}$/i.test(v) || /^[a-z]{3,20}$/i.test(v) || /^(rgb|hsl)a?\([\d\s.,%/+-]+\)$/i.test(v) ? v : "#9C9086"; };
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

// glass palette ("sky glass"): light liquid-glass cards on a soft pastel wallpaper, white type, Inter font.
// Starts from the graphite colours; dark surfaces are replaced by glass in CSS_GL_X.
const glHex = (c) => {
  const r = parseInt(c.slice(1, 3), 16) / 255, g = parseInt(c.slice(3, 5), 16) / 255, b = parseInt(c.slice(5, 7), 16) / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), L = (mx + mn) / 2, S = mx === mn ? 0 : (L > .5 ? (mx - mn) / (2 - mx - mn) : (mx - mn) / (mx + mn));
  if (S > .3 && L > .2) return c;
  return L < .3 ? "#FFFFFF24" : L < .45 ? "#FFFFFF4D" : L < .78 ? "#FFFFFFD1" : "#FFFFFF";
};
const glTx = (t) => t.replace(/([^-]|^)color:\s*#A6F05A/gi, "$1color:var(--actx)").replace(/([^-]|^)color:\s*var\(--ac\)/g, "$1color:var(--actx)").replace(/([^-]|^)color:\s*var\(--warn\)/g, "$1color:var(--wntx)").replace(/([^-]|^)color:\s*#FFD27A/gi, "$1color:var(--wntx)").replace(/([^-]|^)color:\s*#3DDC84/gi, "$1color:var(--actx)").replace(/([^-]|^)color:\s*#F2C14E/gi, "$1color:var(--wntx)");
const glAcc = (t) => glTx(grMap(t).replace(/#FF7A1F\b/gi, "#A6F05A").replace(/rgba\(255,122,31,/g, "rgba(166,240,90,"));
const glMap = (t) => glTx(grMap(t).replace(/#FF7A1F\b/gi, "#A6F05A").replace(/#FFB074\b/gi, "#FFFFFF").replace(/#FFB57A\b/gi, "#FFFFFF").replace(/#[0-9A-Fa-f]{6}\b/g, glHex)
  .replace(/rgba\(255,122,31,/g, "rgba(166,240,90,").replace(/rgba\(255,140,60,/g, "rgba(255,255,255,")
  .replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/g, (m, r, g, b, a) => (+r + +g + +b === 0) || Math.max(+r, +g, +b) > 80 ? m : `rgba(255,255,255,${Math.min(.3, +a * .3).toFixed(2)})`));
const GL_WALL = "radial-gradient(38% 42% at 14% 18%,#a8cbef 0,transparent 70%),radial-gradient(32% 40% at 78% 12%,#c9d9ea 0,transparent 70%),radial-gradient(40% 46% at 82% 82%,#f2c3a8 0,transparent 70%),radial-gradient(36% 40% at 30% 85%,#e9b7c3 0,transparent 70%),radial-gradient(30% 30% at 52% 48%,#8fb3d6 0,transparent 70%),linear-gradient(160deg,#6f8fb0,#9db1c4 50%,#c4a9a8)";
const GL_WALL_N = "radial-gradient(38% 42% at 14% 18%,#3d5a86 0,transparent 70%),radial-gradient(32% 40% at 78% 12%,#4a5f80 0,transparent 70%),radial-gradient(40% 46% at 82% 82%,#7a5670 0,transparent 70%),radial-gradient(36% 40% at 30% 85%,#6a4a6e 0,transparent 70%),radial-gradient(30% 30% at 52% 48%,#33507a 0,transparent 70%),linear-gradient(160deg,#1d2a44,#2c3a58 50%,#46354d)";
const GLASS = "linear-gradient(160deg,rgba(255,255,255,.34),rgba(255,255,255,.10) 55%,rgba(255,255,255,.18))";
const CSS_GL_X = `
:host{background:#7f97ad!important;--card:rgba(255,255,255,.16);--card2:rgba(255,255,255,.22);--line:rgba(255,255,255,.28);--line2:rgba(255,255,255,.4);--tx:#FFFFFF;--mu:rgba(255,255,255,.82);--mu2:rgba(255,255,255,.9);--ac:#A6F05A;--acbg:rgba(255,255,255,.22);--acln:rgba(255,255,255,.6);--warn:#FFD27A;--cold:#9AD4FF;--inv:#2F4A66;font-family:Inter,Manrope,system-ui,sans-serif!important;letter-spacing:-.01em}
:host{--actx:#17692C;--wntx:#9A5200}
text[fill="#3DDC84" i],text[fill="#A6F05A" i],tspan[fill="#3DDC84" i],tspan[fill="#A6F05A" i]{fill:var(--actx)}
text[fill="#FFD27A" i],text[fill="#F2C14E" i]{fill:var(--wntx)}
:host([gln]){background:#24324d!important;--actx:#B8F57A;--wntx:#FFD27A}
.app{background:${GL_WALL}!important;background-attachment:fixed!important;color:#fff;text-shadow:0 1px 3px rgba(20,40,70,.28)}
:host([gln]) .app{background:${GL_WALL_N}!important;background-attachment:fixed!important}
.side{background:linear-gradient(90deg,rgba(255,255,255,.16),rgba(255,255,255,.06))!important;border-right:1px solid rgba(255,255,255,.3)!important;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.clock b{font-weight:200!important;letter-spacing:-.04em;color:#fff!important}
.rl.on,.ovb.on{background:linear-gradient(180deg,#fff,#e7eef5)!important;color:#2F4A66!important;text-shadow:none!important;box-shadow:0 10px 20px -8px rgba(20,35,60,.45),inset 0 -2px 3px rgba(20,40,70,.1)!important}
.rl.on *,.ovb.on *{color:#2F4A66!important}
.floor{color:rgba(255,255,255,.75)!important}
.oc,.dev,.flow,.stat,.panel,.ltile,.ldev{background:${GLASS}!important;backdrop-filter:blur(18px) saturate(1.6);-webkit-backdrop-filter:blur(18px) saturate(1.6);border:1px solid rgba(255,255,255,.42)!important;border-radius:28px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.6),inset 0 -10px 24px -14px rgba(20,40,70,.35),0 14px 28px -10px rgba(20,35,60,.32),0 40px 70px -30px rgba(20,35,60,.42)!important;position:relative}
.oc::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(120% 60% at 30% -10%,rgba(255,255,255,.32),rgba(255,255,255,0) 60%);z-index:0}
.dlg{background:rgba(70,95,125,.86)!important;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.4)!important;border-radius:28px!important}
.hero{background:transparent!important;border:none!important;box-shadow:none!important}
.hero::after,.hero::before{display:none!important}
.hero>img{-webkit-mask-image:linear-gradient(90deg,transparent 10%,rgba(0,0,0,.85) 60%)!important;mask-image:linear-gradient(90deg,transparent 10%,rgba(0,0,0,.85) 60%)!important;border-radius:28px;opacity:.9}
.hero h2{font-weight:700!important;letter-spacing:-.03em!important;color:#fff!important;text-shadow:0 2px 12px rgba(20,40,70,.35)!important}
.pill{background:linear-gradient(180deg,rgba(255,255,255,.38),rgba(255,255,255,.14))!important;border:1px solid rgba(255,255,255,.5)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 6px 14px -6px rgba(20,35,60,.35)!important;backdrop-filter:blur(14px)}
.wt,.eg b,.eg strong,.eg big,.stat b,.stat strong{font-weight:300!important;letter-spacing:-.04em!important;color:#fff!important}
.dev.on,.lt.on{border-color:rgba(255,255,255,.85)!important;box-shadow:0 0 0 1px rgba(255,255,255,.6),0 14px 28px -10px rgba(20,35,60,.4),inset 0 0 22px rgba(255,255,255,.25)!important}
.lt{border-radius:22px!important;border-color:rgba(255,255,255,.35)!important}
.nav,.navw nav{background:${GLASS}!important;backdrop-filter:blur(20px) saturate(1.6);-webkit-backdrop-filter:blur(20px) saturate(1.6);border:1px solid rgba(255,255,255,.45)!important;box-shadow:0 20px 40px -14px rgba(20,35,60,.5)!important}
.nitem.on{color:#2F4A66!important;text-shadow:none}
circle[fill="#1A1D23"],circle[fill="#2A1C12"]{fill:rgba(255,255,255,.28)}
button.pw,.lic{background:rgba(255,255,255,.26)!important;color:#fff!important}
.rl em,.bub{color:#22381F!important;text-shadow:none!important;box-shadow:0 2px 6px rgba(20,35,60,.3)}
.ltile .ln,.lt .lx,.lt .lx small{text-shadow:0 1px 4px rgba(0,0,0,.6)}
button.ok,.btn.on{background:linear-gradient(180deg,#fff,#e7eef5)!important;color:#2F4A66!important;text-shadow:none!important}
/* Grosse Kacheln (glass) */
.view.ov>.oc{background:${GLASS}!important}
.hero.ap .hc{justify-content:center;gap:4px}.hero.ap h2{font-size:30px!important}
.hero.ap p{color:rgba(255,255,255,.94)!important;font-size:14px;font-weight:500}
.hchips{display:grid;grid-template-columns:repeat(2,minmax(0,max-content));gap:8px;margin-top:12px}.hchip b,.hchip small{max-width:none!important}
.hchip{display:inline-flex;align-items:center;gap:9px;padding:6px 13px 6px 7px;border-radius:999px;font:inherit;font-size:12.5px;max-width:100%;font-weight:600;background:rgba(255,255,255,.24);border:none;color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.6),0 8px 16px -8px rgba(20,35,60,.4);text-align:left;cursor:pointer}
div.hchip{cursor:default}
.hchip .d{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;color:#fff;flex:none;box-shadow:0 3px 8px -2px rgba(20,35,60,.35)}
.hchip>span:last-child{display:flex;flex-direction:column;line-height:1.25;min-width:0}.hchip b,.hchip small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}.hchip small{font-size:11.5px;font-weight:500;opacity:.92}
.oh .allb{flex:none;height:28px;padding:0 12px;border-radius:999px;border:none;background:rgba(255,255,255,.24);color:#fff;font:inherit;font-size:12px;font-weight:600;box-shadow:inset 0 1px 0 rgba(255,255,255,.55);cursor:pointer}
.oh small{color:rgba(255,255,255,.9)!important;font-size:13px!important;font-weight:500}
.lts.ap{display:grid;gap:10px;grid-auto-rows:minmax(0,1fr);flex:1;min-height:0;margin-top:4px}
.acc{position:relative;border:none;border-radius:20px;padding:12px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:8px;text-align:left;background:rgba(255,255,255,.18);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 6px 14px -8px rgba(20,35,60,.35);font:inherit;min-height:0;min-width:0;cursor:pointer;transition:background .25s,color .25s}
.acc .i{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.25);flex:none;transition:background .25s,box-shadow .25s}
.acc>span:last-child{display:flex;flex-direction:column;min-width:0;max-width:100%}
.acc b{font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.acc small{font-size:12px;font-weight:500;opacity:.9}
.acc.on{background:linear-gradient(180deg,#fff,#eef3f8);color:#1f2f42;text-shadow:none;box-shadow:0 12px 22px -10px rgba(20,35,60,.5),inset 0 -2px 3px rgba(20,40,70,.08)}
.acc.on .i{background:#FFD45A;color:#5a3d00;box-shadow:0 0 16px rgba(255,212,90,.85)}
.acc.on small{color:#4d5f73;opacity:1}
.acc.off{opacity:.55;cursor:default}
.acc.row{flex-direction:row;align-items:center;justify-content:flex-start;gap:12px;padding:8px 12px;flex:none}
.dv6.ap .acc{background:rgba(255,255,255,.18)!important;border:none!important;min-height:0!important;padding:8px 12px!important;font-size:inherit!important;white-space:nowrap;color:#fff!important;align-items:center!important}
.dv6.ap .acc span{color:inherit!important}.dv6.ap .acc small{color:inherit!important;font-size:12px!important;opacity:.9}
.dv6.ap .acc.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;text-shadow:none}
.dv6.ap .acc.on .i{color:#5a3d00!important}.dv6.ap .acc.on small{color:#4d5f73!important;opacity:1}
.dv6.ap{display:flex!important;flex-direction:column;gap:8px;overflow:auto;margin-top:4px}
.view.ov .gau{width:132px;height:132px}.gau svg{width:100%;height:100%}.gau .knob{filter:drop-shadow(0 3px 5px rgba(20,35,60,.45))}
.gau b{font-weight:300!important;font-size:34px!important;letter-spacing:-.04em;color:#fff!important}.gau small{color:rgba(255,255,255,.92)!important;font-size:12.5px!important}
.pm button{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#22384f!important;border:none!important;text-shadow:none;box-shadow:0 10px 20px -8px rgba(20,35,60,.5);width:38px!important;height:38px!important}
.md3 button{border:none!important;background:rgba(255,255,255,.2)!important;color:#fff!important;border-radius:16px!important;font-weight:600;box-shadow:inset 0 1px 0 rgba(255,255,255,.5)}
.md3 button.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#a3480c!important;text-shadow:none;box-shadow:0 8px 16px -8px rgba(20,35,60,.45)}
.md3 button.on[data-v$="|cool"]{color:#1b62c4!important}.md3 button.on[data-v$="|off"]{color:#2F4A66!important}
.sc.ap{flex-direction:row;align-items:center;gap:12px;padding:8px 0 6px}
.sc.ap .sb{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;color:#fff!important;flex:none;box-shadow:0 10px 20px -6px rgba(20,35,60,.45)}
.sc.ap>span:last-child{display:flex;flex-direction:column;text-align:left;min-width:0}.sc.ap b{font-size:18px;font-weight:700}.sc.ap small{color:rgba(255,255,255,.92)!important;font-size:12.5px!important}
.drs.ap{background:none!important;border:none!important;border-radius:0;overflow:auto}
.drs.ap button{border-bottom:none!important;border-top:1px solid rgba(255,255,255,.25)!important;padding:9px 2px;color:#fff!important;font-weight:500}
.drs.ap button>span:first-child{color:#fff!important}
.drs.ap em{background:rgba(255,255,255,.9)!important;color:#1f6b2f!important;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600;text-shadow:none;font-style:normal}
.drs.ap em.wn{color:#9A5200!important}
.apm .mp .cv{background:#fff!important;color:#2F4A66!important;box-shadow:0 10px 18px -8px rgba(20,35,60,.5)}
.apm .mp b{font-size:15px;font-weight:700}.apm .mp small{color:rgba(255,255,255,.9)!important}
.prg{height:4px;border-radius:2px;background:rgba(255,255,255,.3);margin:2px 2px 0}.prg i{display:block;height:100%;border-radius:2px;background:#fff}
.mc button{color:#fff!important}
.mc button.pp{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#22384f!important;box-shadow:0 10px 20px -8px rgba(20,35,60,.5)}
.vl{color:rgba(255,255,255,.9)!important}.vl button{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important}.vl>span{background:rgba(255,255,255,.3)!important;height:4px!important}.vl>span i{background:#fff!important}
.view.ov .eg b{font-size:38px!important}.view.ov .spk{min-height:34px!important}
.e3>span{display:grid!important;grid-template-columns:auto 1fr;align-items:center;column-gap:6px;row-gap:1px;padding:7px 10px!important;background:rgba(255,255,255,.2)!important;border-radius:14px!important;color:#fff!important;font-weight:600;font-size:12px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5);border:none!important}
.e3 b{grid-column:1/-1;font-size:15px!important;font-weight:700!important;color:#fff!important}
.esub{color:rgba(255,255,255,.9)!important}
.camap{padding:0!important;overflow:hidden;display:flex!important;align-items:stretch!important;text-align:left;color:#fff;min-height:170px;font:inherit;cursor:pointer}
.camap>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:inherit}
.camap .cs{position:absolute;inset:0;border-radius:inherit;background:linear-gradient(180deg,rgba(10,20,35,.42),transparent 38%,transparent 58%,rgba(10,20,35,.55))}
.camap .ct{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:space-between;padding:16px 18px;width:100%;box-sizing:border-box;flex:1}
.camap .ct small{font-size:12.5px;font-weight:500;text-shadow:0 1px 4px rgba(0,0,0,.5)}
.camap .oi{color:#fff!important}
.qa.ap{gap:8px}
.qa.ap button{text-shadow:0 1px 4px rgba(20,40,70,.5);border:none!important;background:rgba(255,255,255,.2)!important;border-radius:18px!important;font-weight:600;color:#fff!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5);padding:0 12px 0 8px;gap:10px;min-height:44px}
.qa.ap button>span{width:30px;height:30px;border-radius:50%;display:grid!important;place-items:center;background:#fff;color:#22384f!important;box-shadow:0 4px 8px -3px rgba(20,35,60,.4);flex:none}
.qa.ap button.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;text-shadow:none}
.qa.ap button.on>span{background:#FFD45A;color:#5a3d00!important}.qa.ap button small{color:#9A5200!important}
.rl .rtp,.rl .ron{margin-left:auto;font-style:normal;font-size:12px;font-weight:600;opacity:.9}
.rl .ron{display:inline-flex;align-items:center;gap:6px;opacity:1}
.rl .ron::before{content:"";width:7px;height:7px;border-radius:50%;background:#FFD45A;box-shadow:0 0 8px #FFD45A}
/* Glass-Stil auf allen Seiten */
.dtx{display:inline-block;font-weight:300;letter-spacing:-.03em;line-height:1;color:#fff;font-variant-numeric:tabular-nums}
.ltile:not(.on) .dtx,.lvis:not(.on) .dtx{color:rgba(255,255,255,.7)}
text[fill="#8C94A1" i],text[fill="#6E7684" i]{fill:rgba(255,255,255,.9)}text[fill="#8FB8E8" i]{fill:#fff}g[stroke="#8FB8E8" i]{stroke:#fff}text[font-family]{font-family:Inter,system-ui,sans-serif}
path[stroke="#343A44" i],circle[stroke="#343A44" i],path[stroke="#3A414C" i],circle[stroke="#3A414C" i],circle[stroke="#6B3A16" i]{stroke:rgba(255,255,255,.4)}
circle[fill="#2B3038" i],circle[fill="#20242B" i]{fill:rgba(255,255,255,.28)}circle[fill="#1A0F07" i]{fill:#fff}
.ring{background:rgba(255,255,255,.22)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 8px 16px -8px rgba(20,35,60,.4);color:#fff}
.ico{background:rgba(255,255,255,.25)!important;color:#fff!important}
.dev.on:not(.clim):not(.dim){background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;text-shadow:none!important}
.dev.on:not(.clim):not(.dim) small,.dev.on:not(.clim):not(.dim) b,.dev.on:not(.clim):not(.dim) .nm{color:inherit!important}.dev.on:not(.clim):not(.dim) small{color:#4d5f73!important}
.dev.on:not(.clim):not(.dim) .ico,.ltile.on .lic{background:#FFD45A!important;color:#5a3d00!important;box-shadow:0 0 16px rgba(255,212,90,.85)!important}
.ltile .lic{background:rgba(255,255,255,.25)!important;color:#fff!important}
.ltile .lgl{background:radial-gradient(circle,rgba(255,240,190,.75),rgba(255,212,90,.22) 45%,transparent 70%)!important}
.ltile.on:not(.dim) .dtx{color:#1f2f42}
.lpre button{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 6px 12px -8px rgba(20,35,60,.4)}
.lpre button.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;text-shadow:none}
.lpre button.pw.on,.lbig button.on{background:#FFD45A!important;color:#5a3d00!important;box-shadow:0 0 24px rgba(255,212,90,.7)!important}
.lbig button{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important}
.trul:before{display:none!important}
.trul .rt{stroke:rgba(255,255,255,.7)!important}.trul .rt.mj{stroke:#fff!important}.trul .rlb{fill:rgba(255,255,255,.9)!important}
.trul .gl{stroke:rgba(255,255,255,.55)!important}.trul .gk{fill:#fff!important;stroke:#fff!important;filter:drop-shadow(0 2px 4px rgba(20,35,60,.45))}
.trul .ptr{fill:#FFD45A!important}.dev.clim .trul .ptr{fill:#FF9F45!important}.dev.clim.m-cool .trul .ptr{fill:#4FA8FF!important}
.lvis .lglow{background:radial-gradient(circle,rgba(255,240,190,.8),rgba(255,212,90,.25) 38%,transparent 68%)!important}
.lvis .lamp .sh{fill:rgba(255,255,255,.4)!important;stroke:rgba(255,255,255,.7)!important}.lvis .lamp .cd{stroke:rgba(255,255,255,.7)!important}.lvis .lamp .bl{fill:rgba(255,255,255,.5)!important}.lvis.on .lamp .bl{fill:#FFF3C4!important}
.lvis small,.trw .rl,.trw .rl em{color:rgba(255,255,255,.92)!important}
.dev.clim{background:${GLASS}!important}
.dev.clim .ico{background:rgba(255,255,255,.25)!important;color:#fff!important}
.dev.clim.on .ico{background:#FF9F0A!important;color:#fff!important;box-shadow:0 6px 14px -4px rgba(255,140,40,.6)!important}.dev.clim.m-cool .ico{background:#0A84FF!important;box-shadow:0 6px 14px -4px rgba(10,132,255,.6)!important}
.tgau .tk{stroke:#fff!important;opacity:.35!important}.tgau .tk.on{stroke:#FF9F45!important;opacity:1!important}.dev.clim.m-cool .tgau .tk.on{stroke:#4FA8FF!important}.dev.clim.idle .tgau .tk.on{stroke:#fff!important;opacity:.7!important}
.tgau .tk.rm{stroke:#fff!important;opacity:1!important}
.tgau .mk{stroke:#fff!important;filter:drop-shadow(0 2px 4px rgba(20,35,60,.45))}.tgau .md,.tgau .cap{fill:#fff!important}.tgau .cap.dim{opacity:.4}.tgau .lb{fill:rgba(255,255,255,.9)!important}
.tgau .tc small{color:rgba(255,255,255,.92)!important}
.tmod button{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 6px 12px -8px rgba(20,35,60,.4)!important}
.tmod button.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#E8590C!important}.tmod button.on[data-v$="|cool"]{color:#1b62c4!important}.tmod button.on[data-v$="|off"]{color:#2F4A66!important}
.ctl button,.modes button,.three button,.rbtn,.tabs button:not(.on){background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 8px 16px -10px rgba(20,35,60,.45)}
.ctl button.pri,.ctl button.on,.modes button.on,.seg button.on,.tabs button.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;text-shadow:none!important}
.seg{background:rgba(255,255,255,.18)!important;border:none!important}.seg button{color:#fff}
.bigbtn{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 14px 26px -12px rgba(20,35,60,.5)!important}
.bigbtn.on{background:#FFD45A!important;color:#5a3d00!important;box-shadow:0 0 40px rgba(255,212,90,.65)!important}
.dialbox{background:none!important}.dialbox path[stroke="#A6F05A" i]{stroke:#fff}.dialbox circle[fill="#A6F05A" i]{fill:#fff;filter:drop-shadow(0 2px 5px rgba(20,35,60,.45))}.dialbox circle[fill="#fff"]+circle,.dialbox circle[fill="#A6F05A" i]+circle{fill:#FF9F45}.dval b{font-weight:200!important;letter-spacing:-.04em;color:#fff!important}.dval small,.hint{color:rgba(255,255,255,.9)!important}
.sbig{border:none!important;color:#fff!important;background:rgba(255,255,255,.3)!important;box-shadow:0 14px 28px -10px rgba(20,35,60,.5)}
.sbig.g{background:#34C759!important}.sbig.wn{background:#FF9F0A!important}.sbig.rd{background:#FF3B30!important}
.sht small,.sht span{color:rgba(255,255,255,.92)!important}.sht b{font-weight:700!important;letter-spacing:-.03em;color:#fff!important}
.amodes button{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important;border-radius:16px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5)}
.amodes button.on{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;opacity:1!important;text-shadow:none}
.sgh{color:rgba(255,255,255,.85)!important;font-weight:700}
.srow{border-bottom:none!important;border-top:1px solid rgba(255,255,255,.25)!important;color:#fff!important;padding:9px 4px!important}
.srow>span{color:#fff!important}.srow small{color:rgba(255,255,255,.85)!important}
.srow b{background:rgba(255,255,255,.9)!important;color:#1f6b2f!important;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600;text-shadow:none}.srow.op b{color:#9A5200!important}
.grow .gi{background:rgba(255,255,255,.25)!important;color:#fff!important}.grow button{background:linear-gradient(180deg,#fff,#eef3f8)!important;color:#1f2f42!important;border:none!important;text-shadow:none}
.flow .fchips span{background:rgba(255,255,255,.2)!important;color:rgba(255,255,255,.9)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5)}
.stat small,.stat em{color:rgba(255,255,255,.9)!important}.ph{color:rgba(255,255,255,.95)!important}
.bar .bt{background:rgba(255,255,255,.25)!important}.bar .bt i{background:#fff!important}
.boost{background:rgba(255,255,255,.22)!important;border:none!important;color:#fff!important}.boost.on{background:#FF9F0A!important}
@media (prefers-reduced-transparency: reduce){.oc,.dev,.flow,.stat,.panel,.ltile,.ldev,.nav,.navw nav,.side,.pill{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}}
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
    this._ids = null; this._sig = null; this._dayOn = null; this._bgKey = null;
    if (this._hass && this.shadowRoot) this.hass = this._hass;
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
    if (this._c && /^(glass|liquid)$/.test(this._c.palette) && this._c.load_font !== false && !document.getElementById("wz-glass")) {
      const l = document.createElement("link"); l.id = "wz-glass"; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap";
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
  _roomTemp(r) { let t = r.temp ? this._num(r.temp) : null; if (t == null) { const cl = (r.devices || []).find((d) => this._dom(d.entity) === "climate"); const s = cl && this._st(cl.entity); if (s && typeof s.attributes.current_temperature === "number") t = s.attributes.current_temperature; } return t; }
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
  _dayEff() { return this._c.palette !== "neon" && !/^(glass|liquid)$/.test(this._c.palette) && this._isDay(); }
  _isDay() {
    const m = this._themeMode(); if (m !== "auto") return m === "day";
    const sun = this._st("sun.sun"); if (sun && sun.state !== "unavailable") return sun.state === "above_horizon";
    const h = new Date().getHours(); return h >= 7 && h < 19;
  }
  _themeBtn(cls) { if (this._c.palette === "neon" || /^(glass|liquid)$/.test(this._c.palette)) return ""; const m = this._themeMode(), d = this._isDay(); return `<button class="${cls}" data-a="theme" aria-label="${T("Darstellung")}: ${m === "auto" ? T("automatisch") : m === "day" ? T("Tag") : T("Abend")}">${ic(d ? "sun" : "moon", 16, 2)}<span>${m === "auto" ? T("Auto") : m === "day" ? T("Tag") : T("Abend")}</span></button>`; }
  _render() {
    if (!this.shadowRoot || !this._hass) return;
    const r = this._roomObj();
    let body;
    try { body = this._view === "overview" && this._c.overview ? this._overView() : this._view === "sec" && this._c.security ? this._secView() : this._view === "energy" && this._c.energy ? this._energyView() : this._view === "det" && this._det ? this._detail(r) : this._roomView(r); }
    catch (err) { body = `<div class="empty">Fehler: ${esc(err.message)}</div>`; }
    const floors = [];
    for (const x of this._c.rooms) { const f = x.floor || ""; let g = floors.find((y) => y.f === f); if (!g) floors.push(g = { f, rs: [] }); g.rs.push(x); }
    const en = !!this._c.energy, ov = this._view === "overview" && !!this._c.overview, sv = this._view === "sec" && !!this._c.security, ev = this._view === "energy" || ov || sv;
    const side = `<aside class="side"><div class="clock" id="clk"></div>${this._themeBtn("thb")}${this._c.overview ? `<button class="rl ovb ${ov ? "on" : ""}" data-a="ov">${ic("dash", 16, 2)}${T("Übersicht")}</button>` : ""}${this._c.security ? `<button class="rl ovb ${sv ? "on" : ""}" data-a="sec">${ic("shield", 16, 2)}${T("Sicherheit")}</button>` : ""}${en ? `<button class="rl en ${this._view === "energy" ? "on" : ""}" data-a="energy">${ic("bolt", 16, 2)}${T("Energie")}</button>` : ""}${floors.map((g) => `${g.f ? `<div class="floor">${esc(g.f)}</div>` : ""}${g.rs.map((x) => { const n = this._roomCount(x); let badge = n ? `<em>${n}</em>` : ""; if (/^(glass|liquid)$/.test(this._c.palette)) { const tp = this._roomTemp(x); badge = n ? `<i class="ron">${T("{n} an", { n })}</i>` : tp != null ? `<i class="rtp">${this._fmt(tp, 0)}°</i>` : ""; } return `<button class="rl ${!ev && x.id === this._room ? "on" : ""}" data-a="room" data-v="${esc(x.id)}">${esc(x.name)}${badge}</button>`; }).join("")}`).join("")}
      <div class="sidenav">${this._c.home_path ? `<button data-a="nav" data-v="${esc(this._c.home_path)}">${ic("dash", 16)}${T("Zuhause")}</button>` : ""}${this._c.energy || this._c.energy_path ? `<button data-a="nav" data-v="${esc(this._c.energy_path || "/energy")}">${ic("bolt", 16)}${T("Details")}</button>` : ""}</div></aside>`;
    const dlg = this._pin ? this._pinDlg() : this._confirm ? `<div class="ovl"><div class="dlg" role="dialog"><b>${esc(this._confirm.text)}</b><p>${esc(this._confirm.sub)}</p><div class="row"><button data-a="cancel">${T("Abbrechen")}</button><button class="ok" data-a="ok">${T("Ja")}</button></div></div></div>` : "";
    if (!this._appEl) {
      this.shadowRoot.innerHTML = `<style></style><div class="app"></div><div class="navw"></div><div class="dlgw"></div>`;
      this._appEl = this.shadowRoot.querySelector(".app"); this._dlgEl = this.shadowRoot.querySelector(".dlgw"); this._styEl = this.shadowRoot.querySelector("style"); this._dayOn = null;
      this._buildNav(this.shadowRoot.querySelector(".navw"));
    }
    const day = this._dayEff();
    const ne = this._c.palette === "neon", gl = /^(glass|liquid)$/.test(this._c.palette), gr = !day && this._c.palette === "graphite", mk = ne ? "ne" : gl ? "gl" : day ? "day" : gr ? "gr" : "amber"; this._dayB = day;
    const pm = ne ? neMap : gl ? glAcc : day ? dayMap : gr ? grMap : (x) => x;
    if (gl) this.toggleAttribute("gln", !this._isDay()); else this.removeAttribute("gln");
    if (mk !== this._dayOn) { this._dayOn = mk; this._styEl.textContent = ne ? neMap(CSS) + CSS_NE_X : gl ? glMap(CSS) + CSS_GR_X.replace(/:host\{[^}]*\}/, "") + CSS_GL_X : day ? dayMap(CSS) + CSS_DAY_X : gr ? grMap(CSS) + CSS_GR_X : CSS; this.toggleAttribute("day", day); this.style.background = ne ? "#12021E" : gl ? "" : day ? "#F2EBE2" : gr ? "#0E1014" : ""; }
    const html = `${side}<div class="main">${body}</div>`;
    this._appEl.innerHTML = pm(html);
    this._dlgEl.innerHTML = pm(dlg);
    this._navSync();
    this._clock();
    if (this._bgSync) this._bgSync();
    if (this._lqSync) this._lqSync();
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
      <nav class="tabs" aria-label="${T("Räume")}">${this._c.rooms.map((x) => `<button class="${x.id === r.id ? "on" : ""}" data-a="room" data-v="${esc(x.id)}">${esc(x.name)}</button>`).join("")}</nav>
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
  _spark(smooth) {
    const pts = this._hist; if (!pts || pts.length < 2) return "";
    const now = Date.now(), t0 = now - 12 * 3600000, N = 48, step = (now - t0) / N, vals = [];
    let i = 0, last = null;
    const sorted = pts.slice().sort((a, b) => a[0] - b[0]);
    for (let b = 0; b <= N; b++) { const tb = t0 + b * step; while (i < sorted.length && sorted[i][0] <= tb) { last = sorted[i][1]; i++; } vals.push(last); }
    const v = vals.filter((x) => x != null); if (v.length < 2) return "";
    const mx = Math.max(...v, 1), W = 300, H = 60;
    let d = "", first = null;
    let px = null, py = null, lx = 0, ly = 0;
    vals.forEach((y, k) => { if (y == null) return; const x = (k / N) * W, yy = H - 4 - (y / mx) * (H - 10); if (first == null) { first = x; d += `M${x.toFixed(1)} ${yy.toFixed(1)}`; } else if (smooth) { const m = (px + x) / 2; d += `C${m.toFixed(1)} ${py.toFixed(1)} ${m.toFixed(1)} ${yy.toFixed(1)} ${x.toFixed(1)} ${yy.toFixed(1)}`; } else d += `L${x.toFixed(1)} ${yy.toFixed(1)}`; px = x; py = yy; lx = x; ly = yy; });
    if (smooth) return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-label="${T("Hausverbrauch der letzten 12 Stunden")}"><defs><linearGradient id="spg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD08A" stop-opacity=".6"/><stop offset="1" stop-color="#FFD08A" stop-opacity="0"/></linearGradient></defs><path d="${d}L${W} ${H}L${first.toFixed(1)} ${H}Z" fill="url(#spg)"/><path d="${d}" fill="none" stroke="#FFB24A" stroke-width="2.6" vector-effect="non-scaling-stroke" stroke-linecap="round"/></svg>`;
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-label="${T("Hausverbrauch der letzten 12 Stunden")}"><defs><linearGradient id="spg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F28A3C" stop-opacity=".45"/><stop offset="1" stop-color="#F28A3C" stop-opacity="0"/></linearGradient></defs><path d="${d}L${W} ${H}L${first.toFixed(1)} ${H}Z" fill="url(#spg)"/><path d="${d}" fill="none" stroke="#F28A3C" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>`;
  }
  _trashHero() {
    const t = this._c.energy && this._c.energy.trash; if (!t || !Array.isArray(this._trash)) return "";
    const pats = t.patterns || [], d0 = new Date(); d0.setHours(0, 0, 0, 0); const days = {};
    for (const ev of this._trash) { const d = ((ev.start && (ev.start.date || ev.start.dateTime)) || "").slice(0, 10); if (!d) continue; const p = pats.find((q) => (ev.summary || "").toLowerCase().includes(q.match.toLowerCase())); (days[d] = days[d] || {})[p ? p.name : ev.summary] = p ? safeCol(p.color) : "#9C9086"; }
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
    const ap = /^(glass|liquid)$/.test(this._c.palette);
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
    let hero = `<div class="oc hero">${(() => { const dy = this._dayEff(), hs = (dy ? o.hero_day : o.hero_night) || o.hero_image || IMGX()[dy ? "hero_day" : "hero_night"] || IMGX().hero; return o.hero !== false && hs ? `<img src="${esc(hs)}" alt="">` : ""; })()}<div class="hc"><span class="hi">${ic("house", 30, 2)}</span>${this._themeBtn("thb thh")}<h2>${esc(greet)}${uname ? `, ${esc(uname)}` : ""}!</h2><div class="pills">${pills.join("")}</div></div></div>`;
    const drs = (o.doors || []).map((d) => { const s = st(d.entity), op = s && s.state === "on", off = !s || s.state === "unavailable"; return { d, op, off }; });
    const nOpen = drs.filter((x) => x.op).length;
    const wst = o.weather && st(o.weather);
    if (ap) {
      const chip = (bg, i, b, sm, a, v) => `<${a ? `button data-a="${a}"${v ? ` data-v="${esc(v)}"` : ""}` : "div"} class="hchip"><span class="d" style="background:${bg}">${ic(i, 15, 2.2)}</span><span><b>${esc(b)}</b><small>${esc(sm)}</small></span></${a ? "button" : "div"}>`;
      const ch = [];
      if (trp) ch.push(trp);
      if (alm) ch.push(chip({ g: "#34C759", aor: "#FF9F0A", rd: "#FF3B30" }[alCls] || "#FF9F0A", "shield", al.state.startsWith("armed") ? T("Alarm scharf") : al.state === "disarmed" ? T("Alarm unscharf") : T("Alarm"), [alm[0].includes(" · ") ? alm[0].split(" · ").slice(1).join(" · ") : "", o.doors && o.doors.length ? (nOpen ? T("{n} offen", { n: nOpen }) : T("Alle Türen zu")) : ""].filter(Boolean).join(" · ") || alm[0], "info", o.alarm));
      const tps = (this._c.rooms || []).map((r) => this._roomTemp(r)).filter((v) => v != null);
      const cs = o.climate && st(o.climate);
      if (tps.length) { const a = Math.min(...tps), b = Math.max(...tps); ch.push(chip("#FF9F0A", "thermo", Math.round(a) === Math.round(b) ? `${f(a, 0)}°` : `${f(a, 0)}–${f(b, 0)}°`, T("Innen") + (cs ? " · " + (cs.state === "off" ? T("Heizung aus") : (TX(HVAC[cs.state], 1) || [0, cs.state])[1]) : ""))); }
      const lon = [...(o.lights || []), ...(o.extra_lights || [])].map((x) => (typeof x === "string" ? { entity: x } : x)).filter((x) => this._on(x.entity));
      if ((o.lights || []).length) ch.push(chip(lon.length ? "#FFD45A" : "rgba(255,255,255,.35)", "bulb", lon.length ? T(lon.length > 1 ? "{n} Lichter an" : "{n} Licht an", { n: lon.length }) : T("Alle Lichter aus"), lon.length ? lon.slice(0, 2).map((x) => x.name || fn(x.entity)).join(", ") + (lon.length > 2 ? " …" : "") : T("Beleuchtung")));
      if (soc != null) ch.push(chip("#0A84FF", "battery", `${T("Akku")} ${f(soc, 0)} %`, solar != null ? `PV ${f(solar, 0)} W` : T("Batterie"), "energy"));
      else if (solar != null) ch.push(chip("#34C759", "leaf", `PV ${f(solar, 0)} W`, T("Solar"), "energy"));
      const sub = [];
      if (wst && typeof wst.attributes.temperature === "number") sub.push(T("Draußen {t}° · {w}", { t: f(wst.attributes.temperature), w: (TX(WX[wst.state], 1) || [0, wst.state])[1] }));
      if (homeW != null) sub.push(T("Haus verbraucht gerade {w} W", { w: f(homeW, 0) }));
      hero = `<div class="oc hero ap"><div class="hc"><h2>${esc(greet)}${uname ? `, ${esc(uname)}` : ""}</h2>${sub.length ? `<p>${esc(sub.join(" · "))}</p>` : ""}<div class="hchips">${ch.join("")}</div></div></div>`;
    }
    // Wetter
    let wx = "";
    const w = o.weather && st(o.weather);
    if (w) {
      const wm = TX(WX[w.state], 1) || ["cloud", w.state], a = w.attributes;
      const days = (this._fc || []).slice(0, 3).map((d) => { const dt = new Date(d.datetime); const wd = WX[d.condition] || ["cloud", ""]; return `<span><small>${esc(dt.toLocaleDateString(LOC, { weekday: "short" }))}</small><span>${ic(wd[0], 20, 1.8)}</span><b>${typeof d.templow === "number" ? f(d.templow, 0) + "° / " : ""}${f(d.temperature, 0)}°</b></span>`; }).join("");
      wx = `<button class="oc wx" data-a="info" data-v="${esc(o.weather)}" style="text-align:left;color:inherit"><div class="oh"><span class="oi">${ic(wm[0], 20, 2)}</span><b>${T("Wetter")}</b><small></small></div><div class="wn2"><span>${ic(wm[0], 52, 1.4)}</span><span class="wt"><b>${f(a.temperature)}°</b><small>${esc(wm[1])}</small></span></div><div class="wm"><span>${T("Feuchte")} <b>${f(a.humidity, 0)} %</b></span><span>Wind <b>${f(a.wind_speed, 0)} km/h</b></span></div>${days ? `<div class="fc">${days}</div>` : ""}</button>`;
    }
    // Licht
    const lts = ap ? (o.lights || []).map((l) => {
      const s = st(l.entity), on = !!s && s.state === "on", off = !s || s.state === "unavailable", br = on && typeof s.attributes.brightness === "number" ? Math.round(s.attributes.brightness / 2.55) : null;
      return `<button class="acc ${on ? "on" : ""}" data-a="otog" data-v="${esc(l.entity)}" aria-pressed="${on}" ${off ? "disabled" : ""}><span class="i">${ic(l.icon || "bulb", 19, 2)}</span><span><b>${esc(l.name)}</b><small>${off ? T("offline") : on ? (br != null ? `${T("An")} · ${br} %` : T("An")) : T("Aus")}</small></span></button>`;
    }).join("") : (o.lights || []).map((l, k) => {
      const s = st(l.entity), on = !!s && s.state === "on", off = !s || s.state === "unavailable";
      const room = l.room ? this._roomObj(l.room) : null;
      const dy = this._dayEff(), im = l.image && (dy ? IMGX()[l.image + "_day"] : IMGX()[l.image]);
      const pic = im ? `<img src="${esc(im)}" alt="">` : scene(l.type || (room && room.type) || "living", on, room ? this._firstCover(room) : null, true, "ov" + k);
      return `<button class="lt ${on ? "on" : ""}" data-a="otog" data-v="${esc(l.entity)}" aria-pressed="${on}" ${off ? "disabled" : ""}>${pic}<span class="sh"></span><span class="lx"><b>${esc(l.name)}</b><span><small>${off ? T("offline") : on ? T("An") : T("Aus")}</small><span class="ms"><i></i></span></span></span></button>`;
    }).join("");
    const lightsOn = [...(o.lights || []), ...(o.extra_lights || [])].filter((x) => this._on(typeof x === "string" ? x : x.entity)).length;
    const light = ap ? `<div class="oc"><div class="oh"><span class="oi">${ic("bulb", 20, 2)}</span><b>${T("Beleuchtung")}</b><small>${lightsOn ? T("{n} an", { n: lightsOn }) : T("alle aus")}</small><button class="allb" data-a="lall" data-v="${lightsOn ? "off" : "on"}">${lightsOn ? T("Alles aus") : T("Alles an")}</button></div><div class="lts ap" style="grid-template-columns:repeat(${(o.lights || []).length > 4 ? 3 : 2},minmax(0,1fr))">${lts}</div></div>` : `<div class="oc">${hd("bulb", T("Beleuchtung"), lightsOn ? T("{n} an", { n: lightsOn }) : T("alle aus"))}<div class="lb2"><button class="pri" data-a="lall" data-v="on">${ic("sun", 18, 2)}${T("Alles an")}</button><button data-a="lall" data-v="off">${ic("moon", 18, 2)}${T("Alles aus")}</button></div><div class="lts">${lts}</div></div>`;
    // Klima
    let clim = "";
    const c = o.climate && st(o.climate);
    if (c) {
      const a = c.attributes, tgt = this._pend[o.climate] != null ? this._pend[o.climate] : a.temperature, mn = a.min_temp || 16, mx = a.max_temp || 31;
      const R = 58, C = 2 * Math.PI * R, arc = C * 0.75, fr = typeof tgt === "number" ? Math.max(0, Math.min(1, (tgt - mn) / (mx - mn))) : 0;
      const on = c.state !== "off" && c.state !== "unavailable";
      const modes = ["heat", "cool", "off"].filter((m) => (a.hvac_modes || []).includes(m));
      const mi = { heat: ["flame", T("Heizen")], cool: ["snow", T("Kühlen")], off: ["power", T("Aus")] };
      const apG = () => {
        const S = 150, r = S / 2 - 10, cc = S / 2, a0 = 135, sw = 270, Pt = (a, rr) => [cc + rr * Math.cos(a * Math.PI / 180), cc + rr * Math.sin(a * Math.PI / 180)];
        const arcD = (fa, ta, rr) => { const [x0, y0] = Pt(fa, rr), [x1, y1] = Pt(ta, rr); return `M${x0.toFixed(1)} ${y0.toFixed(1)}A${rr} ${rr} 0 ${ta - fa > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`; };
        const gc = c.state === "cool" ? ["#8AD8FF", "#2F8CFF"] : c.state === "heat" ? ["#FFB24A", "#FF6A3D"] : on ? ["#8AD8FF", "#FF8F4A"] : ["#E6EBF0", "#C9D1DA"];
        const e = a0 + sw * fr, [kx, ky] = Pt(e, r); let tk = "";
        for (let k = 0; k <= 40; k++) { const a = a0 + sw * k / 40, [x0, y0] = Pt(a, r - 15), [x1, y1] = Pt(a, r - (k % 5 ? 19 : 23)); tk += `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="rgba(255,255,255,${k / 40 <= fr ? .9 : .4})" stroke-width="1.4" stroke-linecap="round"/>`; }
        return `<svg width="${S}" height="${S}" viewBox="0 0 ${S} ${S}" aria-hidden="true" style="overflow:visible"><defs><linearGradient id="apg" x1="0" x2="1"><stop offset="0" stop-color="${gc[0]}"/><stop offset="1" stop-color="${gc[1]}"/></linearGradient></defs><path d="${arcD(a0, a0 + sw, r)}" stroke="rgba(255,255,255,.28)" stroke-width="12" fill="none" stroke-linecap="round"/>${fr > 0.005 ? `<path d="${arcD(a0, e, r)}" stroke="url(#apg)" stroke-width="12" fill="none" stroke-linecap="round"/>` : ""}${tk}<circle cx="${kx.toFixed(1)}" cy="${ky.toFixed(1)}" r="10" fill="#FFFFFF" class="knob"/></svg>`;
      };
      clim = `<div class="oc">${hd("thermo", T("Klima"), o.climate_name || fn(o.climate), "info", o.climate)}<div class="cl"><div class="gau">${ap ? apG() + "<!--" : ""}<svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true"><defs><linearGradient id="ovg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7A3E14"/><stop offset="1" stop-color="#F28A3C"/></linearGradient></defs><g transform="rotate(135 70 70)"><circle cx="70" cy="70" r="${R}" fill="none" stroke="#2A2019" stroke-width="10" stroke-linecap="round" stroke-dasharray="${arc.toFixed(1)} ${C.toFixed(1)}"/>${fr > 0 ? `<circle cx="70" cy="70" r="${R}" fill="none" stroke="${on ? "url(#ovg)" : "#5A463A"}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(arc * fr).toFixed(1)} ${C.toFixed(1)}"/>` : ""}</g></svg>${ap ? "-->" : ""}<span><b>${typeof tgt === "number" ? f(tgt) + "°" : "–"}</b><small>${typeof a.current_temperature === "number" ? `${T("Ist")} ${f(a.current_temperature)}°` : (TX(HVAC[c.state], 1) || [0, c.state])[1]}</small></span></div><div class="pm"><button data-a="otstep" data-v="${esc(o.climate)}|1" aria-label="${T("Wärmer")}">+</button><button data-a="otstep" data-v="${esc(o.climate)}|-1" aria-label="${T("Kälter")}">–</button></div></div><div class="md3">${modes.map((m) => `<button class="${c.state === m ? "on" : ""}" data-a="ohvac" data-v="${esc(o.climate)}|${m}">${ic(mi[m][0], 16, 2)}${mi[m][1]}</button>`).join("")}</div></div>`;
    }
    // Sicherheit
    const sec = ap ? `<div class="oc">${hd("shield", T("Sicherheit"), "", this._c.security ? "sec" : o.alarm ? "info" : "", this._c.security ? "" : o.alarm)}<div class="sc ap"><span class="sb" style="background:${nOpen ? "#FF9F0A" : { g: "#34C759", aor: "#FF9F0A", rd: "#FF3B30" }[alCls] || "#34C759"}">${ic("shield", 26, 2)}</span><span><b>${esc(alm ? alm[0].split(" · ")[0] : T("Kein Alarm"))}</b><small>${esc((alm && alm[0].includes(" · ") ? alm[0].split(" · ").slice(1).join(" · ") + " · " : "") + (nOpen ? T("{n} offen", { n: nOpen }) : T("Alle Türen zu")))}</small></span></div><div class="drs ap">${drs.map((x) => `<button data-a="info" data-v="${esc(x.d.entity)}"><span>${ic("door", 16, 1.8)}</span><span>${esc(x.d.name)}</span><em class="${x.op || x.off ? "wn" : ""}">${x.off ? T("offline") : x.op ? T("Offen") : T("Zu")}</em></button>`).join("")}</div></div>` : `<div class="oc">${hd("shield", T("Sicherheit"), "", this._c.security ? "sec" : o.alarm ? "info" : "", this._c.security ? "" : o.alarm)}<div class="sc"><span class="${nOpen ? "wn" : alCls || "g"}">${ic("shield", 44, 1.6)}</span><b>${esc(alm ? alm[0] : T("Kein Alarm"))}</b><small>${nOpen ? T("{n} offen", { n: nOpen }) : T("Alle Türen zu")}</small></div><div class="drs">${drs.map((x) => `<button data-a="info" data-v="${esc(x.d.entity)}"><span>${ic("door", 16, 1.8)}</span><span>${esc(x.d.name)}</span><em class="${x.op || x.off ? "wn" : ""}">${x.off ? T("offline") : x.op ? T("Offen") : T("Zu")}</em></button>`).join("")}</div></div>`;
    // Medien
    let med = "";
    const mps = (o.media || []).map((id) => ({ id, s: st(id) })).filter((x) => x.s && x.s.state !== "unavailable");
    const mp = mps.find((x) => x.s.state === "playing") || mps.find((x) => x.s.state === "paused") || mps[0];
    if (mp) {
      const a = mp.s.attributes, pl = mp.s.state === "playing", vol = this._pend[mp.id] != null ? this._pend[mp.id] : Math.round((a.volume_level || 0) * 100);
      const title = a.media_title || a.media_channel || (pl ? T("Spielt") : { paused: T("Pausiert"), idle: T("Bereit"), off: T("Aus") }[mp.s.state] || mp.s.state);
      const dur = a.media_duration, pos0 = a.media_position, upd = a.media_position_updated_at;
      const pos = typeof pos0 === "number" ? pos0 + (pl && upd ? (Date.now() - new Date(upd).getTime()) / 1000 : 0) : null;
      const prog = ap && typeof dur === "number" && dur > 0 && pos != null ? `<div class="prg"><i style="width:${Math.max(0, Math.min(100, pos / dur * 100)).toFixed(1)}%"></i></div>` : "";
      med = `<div class="oc ${ap ? "apm" : ""}">${hd("music", T("Medien"), a.friendly_name || mp.id, "info", mp.id)}<div class="mp"><span class="cv">${a.entity_picture ? `<img src="${esc(a.entity_picture)}" alt="">` : ic("music", 30, 1.6)}</span><span><b>${esc(title)}</b><small>${esc(a.media_artist || "")}</small><small>${pl ? T("Spielt") : { paused: T("Pausiert"), idle: T("Bereit"), off: T("Aus") }[mp.s.state] || ""}</small></span></div>${prog}<div class="mc"><button data-a="omcmd" data-v="${esc(mp.id)}|media_previous_track" aria-label="${T("Zurück")}">${ic("prev", 22, 2)}</button><button class="pp" data-a="omcmd" data-v="${esc(mp.id)}|media_play_pause" aria-label="${pl ? T("Pause") : T("Abspielen")}">${ic(pl ? "pause" : "play", 24, 2.2)}</button><button data-a="omcmd" data-v="${esc(mp.id)}|media_next_track" aria-label="${T("Weiter")}">${ic("nextt", 22, 2)}</button></div><div class="vl"><button data-a="ovol" data-v="${esc(mp.id)}|-5" aria-label="${T("Leiser")}">–</button><span><i style="width:${vol}%"></i></span><button data-a="ovol" data-v="${esc(mp.id)}|5" aria-label="${T("Lauter")}">+</button><small>${vol} %</small></div></div>`;
    } else med = `<div class="oc">${hd("music", T("Medien"), "")}<div class="empty">${T("Kein Player erreichbar")}</div></div>`;
    // Energie
    const sp = this._spark(ap);
    const en = `<div class="oc">${hd("bolt", T("Energie"), sp ? T("letzte 12 h") : "", "energy")}<div class="eg"><b>${f(homeW, 0)}</b><span>W ${T("Haus")}</span></div>${e.solar_today ? `<span class="esub">${T("PV-Ertrag heute")} <b>${f(n(e.solar_today))} kWh</b></span>` : ""}${sp ? `<div class="spk">${sp}</div>` : ""}<div class="e3"><span><span style="color:#F2C14E">${ic("sun", 18, 2)}</span>${T("Solar")}<b>${f(solar, 0)} W</b></span><span><span>${ic("tower", 18, 2)}</span>${T("Netz")}<b>${f(grid, 0)} W</b></span><span><span style="color:#E8735A">${ic("battery", 18, 2)}</span>${T("Batterie")}<b>${f(soc, 0)} %</b></span></div></div>`;
    // Geräte
    const dv = `<div class="oc">${hd("dash", T("Geräte"), "")}<div class="dv6 ${ap ? "ap" : ""}">${(o.devices || []).map((d) => { const s = st(d.entity), off = !s || s.state === "unavailable", on = !off && this._isOn(d); return ap ? `<button class="acc row ${on ? "on" : ""} ${off ? "off" : ""}" data-a="otog" data-v="${esc(d.entity)}" ${off ? "disabled" : ""}><span class="i">${ic(d.icon || this._icon(d), 19, 2)}</span><span><b>${esc(d.name)}</b><small>${off ? T("offline") : on ? T("An") : T("Aus")}</small></span></button>` : `<button class="${on ? "on" : ""} ${off ? "off" : ""}" data-a="otog" data-v="${esc(d.entity)}" ${off ? "disabled" : ""}>${ic(d.icon || this._icon(d), 22, 1.7)}<span>${esc(d.name)}</span><small>${off ? T("offline") : on ? T("An") : T("Aus")}</small></button>`; }).join("")}</div></div>`;
    // Kamera
    let cam = "";
    if (o.camera) {
      const cs = st(o.camera), pic = cs && cs.attributes.entity_picture;
      if (ap) cam = `<button class="oc camap" data-a="info" data-v="${esc(o.camera)}">${pic ? `<img src="${esc(pic)}" alt="${T("Kamerabild")} ${esc(o.camera_name || "")}">` : ""}<span class="cs"></span><span class="ct"><span class="oh"><span class="oi">${ic("cam", 20, 2)}</span><b>${esc(o.camera_name || fn(o.camera))}</b></span><small>${pic ? T("Letztes Bild · Antippen für Live") : T("Kamera offline")}</small></span></button>`;
      else cam = `<div class="oc">${hd("cam", T("Kamera"), o.camera_name || fn(o.camera))}<button class="cam" data-a="info" data-v="${esc(o.camera)}">${pic ? `<img src="${esc(pic)}" alt="${T("Kamerabild")} ${esc(o.camera_name || "")}"><em>${T("Letztes Bild · Antippen für Live")}</em>` : `${ic("cam", 30, 1.5)} ${T("Kamera offline")}`}</button></div>`;
    }
    // Schnellaktionen
    const qa = `<div class="oc">${hd("star", ap ? T("Szenen") : T("Schnellaktionen"), "")}<div class="qa ${ap ? "ap" : ""}">${(o.actions || []).map((d) => { const on = this._dom(d.entity) !== "script" && this._isOn(d); return `<button class="${on ? "on" : ""}" data-a="otog" data-v="${esc(d.entity)}"><span>${ic(d.icon || this._icon(d), 18, 2)}</span>${esc(d.name)}${on ? ` <small style="margin-left:auto;color:var(--warn)">${T("An")}</small>` : ""}</button>`; }).join("")}</div></div>`;
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
          const lbl = p ? p.name : evn.summary, col = p ? safeCol(p.color) : "#9C9086";
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

// Home Live Card – controls (thermostat dial, light rulers, room photos)
(() => {
const PX = 14, KA = 1.8, VIS = 20;
const FONT = { "0": "01110100011000110001100011000101110", "1": "00100011000010000100001000010001110", "2": "01110100010000100010001000100011111", "3": "11110000010000101110000010000111110", "4": "00010001100101010010111110001000010", "5": "11111100001111000001000011000101110", "6": "00110010001000011110100011000101110", "7": "11111000010001000100010000100001000", "8": "01110100011000101110100011000101110", "9": "01110100011000101111000010001001100", "C": "01110100011000010000100001000101110", ",": "00000000000000000000000000100010000", ".": "00000000000000000000000000000010000", "-": "00000000000000011111000000000000000", "°": "01000101000100000000000000000000000", "%": "11001110100001000100010000101110011", "A": "01110100011000111111100011000110001", "N": "10001110011010110011100011000110001", "U": "10001100011000110001100011000101110", "S": "01111100001000001110000010000111110", "O": "01110100011000110001100011000101110", "F": "11111100001000011110100001000010000" };
const W = { ",": 2, "°": 3, ".": 2 };
let GLX = false;
const dots = (txt, h, cls) => { if (GLX) return `<span class="${cls} dtx" style="font-size:${Math.round(h * 1.05)}px">${esc(txt)}</span>`; let x = 0, c = ""; for (const ch of txt) { const g = FONT[ch]; if (!g) { x += 3; continue; } const w = W[ch] || 5; for (let r = 0; r < 7; r++) for (let k = 0; k < w; k++) if (g[r * 5 + k] === "1") c += `<circle cx="${x + k * 1 + 0.5}" cy="${r + 0.5}" r=".36"/>`; x += w + 1; } x -= 1; return `<svg class="${cls}" viewBox="0 0 ${x} 7" style="height:${h}px;width:${(h * x / 7).toFixed(1)}px" aria-hidden="true">${c}</svg>`; };
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
    GLX = /^(glass|liquid)$/.test(this._c.palette);
    const s = this._st(d.entity), at = s.attributes, off = s.state === "off", na = s.state === "unavailable", st = at.target_temp_step || 0.5;
    const [lo, hi] = this._tdRange(at), tgt = this._pend[d.entity] != null ? this._pend[d.entity] : at.temperature, cur = at.current_temperature;
    const modes = [...(at.hvac_modes || []).filter((m) => m !== "off"), "off"], tv = typeof tgt === "number" ? Math.max(lo, Math.min(hi, tgt)) : lo;
    const mb = na ? "" : `<div class="tmod">${modes.map((m) => `<button class="${s.state === m ? "on" : ""}" data-a="ohvac" data-v="${esc(d.entity)}|${esc(m)}" aria-label="${esc(T(HVAC[m] || m))}" title="${esc(T(HVAC[m] || m))}">${IC[m] || IC.heat}</button>`).join("")}</div>`;
    return `<style>${TDCSS}</style><div class="dev clim m-${esc(s.state)} ${off || na ? "idle" : "on"} ${na ? "off" : ""}" data-id="${esc(d.entity)}" data-lo="${lo}" data-hi="${hi}" data-st="${st}"><div class="top"><span class="ico">${TH}</span><div class="nm"><b>${esc(d.name)}</b><small>${na ? T("offline") : off ? T("Aus") : esc(T(HVAC[s.state] || s.state))}</small></div></div>
      <div class="tgau">${this._tdGauge(typeof tgt === "number" ? tv : null, lo, hi, cur)}<div class="tc"><span class="tvw">${dots(typeof tgt === "number" ? this._f1(tgt) + TU : "--", 40, "dm")}</span><small>${T("Solltemperatur")}</small></div></div>${mb}
      <div class="trw">${typeof cur === "number" ? `<span class="rl">${T("Raum")} ${dots(this._f1(cur) + TU, 14, "dm")}</span>` : ""}<div class="trul" aria-label="${T("Temperatur wischen")}">${this._tdRuler(tv, lo, hi, st)}</div></div></div>`;
  },
  _ltView(r, d, s, hdr) {
    GLX = /^(glass|liquid)$/.test(this._c.palette);
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
    GLX = /^(glass|liquid)$/.test(this._c.palette);
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
    GLX = /^(glass|liquid)$/.test(this._c.palette);
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
    GLX = /^(glass|liquid)$/.test(this._c.palette);
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

// Home Live Card – background picture and background animations (city lights, weather, day cycle)
(() => {
const CITY = "docs/bg/neon-city.webp";
const cdn = (ref) => `https://cdn.jsdelivr.net/gh/RomanM78/home-live-card@${ref}/${CITY}`;
// animations offered per colour scheme
const ANIMS = { neon: ["off", "city", "weather"], amber: ["off", "weather", "daycycle"], graphite: ["off", "weather", "daycycle"], glass: ["off", "weather", "daycycle"], liquid: ["off", "weather", "daycycle"] };
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
  _lqWall() {
    const W = Math.max(320, Math.min(innerWidth || 1280, 2400)), H = Math.max(320, Math.min(innerHeight || 800, 1600)), night = !this._isDay(), src = this._lqWallSrc(), key = W + "x" + H + night + src; if (this._lqWk === key) return;
    const I = this._lqImgs || (this._lqImgs = {}); let im = src && I[src];
    if (src && !im) { im = I[src] = new Image(); im.crossOrigin = "anonymous"; im.decoding = "async"; const alt = /cdn\.jsdelivr\.net/.test(src) && !/@main\//.test(src) ? src.replace(/@[^/]+\//, "@main/") : null;
      im.onload = () => { this._lqWk = null; this._lqWall(); }; im.onerror = () => { if (alt && im.src !== alt) { im.src = alt; return; } im.bad = true; this._lqWk = null; this._lqWall(); }; im.src = src; }
    const ok = im && im.complete && im.naturalWidth && !im.bad, wait = src && !ok && !(im && im.bad);
    if (wait && this._lqWk) return; this._lqWk = wait ? "" : key;
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
    this.style.setProperty("--lqw", u ? `url(${u})` : "none"); this._lqWv = (this._lqWv || 0) + 1;
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
    if (H.photo) { const I = this._lqImgs || (this._lqImgs = {}); let im = I[H.photo]; if (!im) { im = I[H.photo] = new Image(); im.crossOrigin = "anonymous"; im.onerror = () => (im.bad = true); im.src = H.photo; } D.photo = im; D.fixed = getComputedStyle(main, "::before").position === "fixed"; D.main = main; }
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
    const W = el.clientWidth; if (!W) return; const wide = W >= 700, n = wide ? 5 : 3, R = Math.max(34, Math.min(72, Math.min(W, H) * (wide ? .095 : .13)));
    const HM = wide ? [[.82, .22], [.34, .74], [.62, .86], [.14, .4], [.93, .64]] : [[.8, .2], [.24, .6], [.72, .84]], F = [1, .78, .64, .54, .46];
    D.n = n; D.drops.forEach((d, i) => { const on = i < n; d.el.style.display = on ? "" : "none"; if (!on) { d.r = 0; return; }
      d.r = R * F[i]; d.hx = HM[i][0] * W; d.hy = HM[i][1] * H; d.f1 = .09 + i * .023; d.f2 = .07 + i * .019; d.p0 = i * 1.7;
      if (!d.init || D.w === 0) { d.x = d.hx; d.y = d.hy; d.vx = d.vy = 0; d.init = true; } d.el.style.width = d.el.style.height = d.r * 2 + "px"; });
    D.w = W; D.h = H; el.classList.toggle("lqn", !wide);
  },
  _lqDropStep(dt, ms) {
    const D = this._lqD; if (!D || !D.el.isConnected) return false; const W = D.el.clientWidth, H = D.h; if (!W || !H) return false;
    if (D.w !== W || Math.abs(H - (innerHeight || H)) > 40) this._lqDHomes();
    const ds = D.drops.slice(0, D.n), p = ms / 1000, rm = RM();
    for (let s = 0; s < 2; s++) { const h = dt / 2;
      for (const d of ds) { let tx = d.hx, ty = d.hy;
        if (d.drag) { tx = d.tx; ty = d.ty; } else if (!rm && ms - (d.touch || 0) > 2500) { tx += Math.sin(p * d.f1 + d.p0) * W * .13 + Math.sin(p * d.f2 * 2.3 + d.p0) * W * .03; ty += Math.cos(p * d.f2 + d.p0 * 1.3) * H * .11; }
        const m = d.r * 1.05; tx = Math.max(m, Math.min(W - m, tx)); ty = Math.max(m, Math.min(H - m, ty));
        const k = d.drag ? 260 : 9, c = d.drag ? 22 : 4.2; d.vx += ((tx - d.x) * k - d.vx * c) * h; d.vy += ((ty - d.y) * k - d.vy * c) * h; }
      // touching drops wobble when they flow together or tear apart
      for (let i = 0; i < ds.length; i++) for (let j = i + 1; j < ds.length; j++) { const a = ds[i], b = ds[j], key = i * 8 + j, near = Math.hypot(a.x - b.x, a.y - b.y) < (a.r + b.r) * 1.15; D.nr = D.nr || {}; if (near !== !!D.nr[key]) { D.nr[key] = near; D.kick(a, .05); D.kick(b, .09); } }
      for (const d of ds) { d.x += d.vx * h; d.y += d.vy * h; const m = d.r * .9;
        for (const [ax, lo, hi] of [["x", m, W - m], ["y", m, H - m]]) { const v = "v" + ax; if (d[ax] < lo) { d[ax] = lo; if (d[v] < 0) { D.kick(d, Math.min(.14, -d[v] / 3000)); d[v] *= -.45; } } else if (d[ax] > hi) { d[ax] = hi; if (d[v] > 0) { D.kick(d, Math.min(.14, d[v] / 3000)); d[v] *= -.45; } } }
        const sp = Math.hypot(d.vx, d.vy), ts = 1 + Math.min(.32, sp / 1500); d.s += (ts - d.s) * Math.min(1, h * 14); if (sp > 20) { const q = Math.min(1, h * 16); d.ca += (d.vx / sp - d.ca) * q; d.sa += (d.vy / sp - d.sa) * q; const nn = Math.hypot(d.ca, d.sa) || 1; d.ca /= nn; d.sa /= nn; }
        d.amp *= Math.exp(-2.6 * h); d.ph += h * 15; } }
    for (const d of ds) d.el.style.transform = `translate(${(d.x - d.r).toFixed(1)}px,${(d.y - d.r).toFixed(1)}px)`;
    const gl = D.gl; if (gl) { const cv = D.cv, r = cv.getBoundingClientRect(); let pr = Math.min(1.5, devicePixelRatio || 1); if (r.width * r.height * pr * pr > 1.6e6) pr = Math.sqrt(1.6e6 / (r.width * r.height)); const w = Math.round(r.width * pr), hh = Math.round(r.height * pr); if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh; }
      // texture: the room photo when the page shows one, else the wallpaper
      let src = this._lqCv, tk = "w" + this._lqWv, TR = [0, 0, innerWidth, innerHeight], K = [0, 0, 0, 0]; const im = D.photo;
      if (im && im.complete && im.naturalWidth && !im.bad) { const br = D.fixed || !D.main ? { left: 0, top: 0, width: innerWidth, height: innerHeight } : D.main.getBoundingClientRect(), s = Math.max(br.width / im.naturalWidth, br.height / im.naturalHeight), dw = im.naturalWidth * s, dh = im.naturalHeight * s;
        src = im; tk = "p" + im.src; K = D.tint; TR = [br.left + (br.width - dw) / 2, br.top + (br.height - dh) / 2, dw, dh]; }
      if (src && D.tk !== tk) { gl.bindTexture(gl.TEXTURE_2D, D.tex); try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src); D.tk = tk; } catch (e) { if (src === im) im.bad = true; } for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v); }
      if (w && hh) { const U = D.U; gl.viewport(0, 0, w, hh); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform1i(U.T, 0); gl.uniform4f(U.R, r.left, r.top, r.width, r.height); gl.uniform4f(U.V, TR[0], TR[1], TR[2], TR[3]); gl.uniform4f(U.K, K[0], K[1], K[2], K[3]); gl.uniform1f(U.t, rm ? 1.5 : ms / 1000);
        const DD = [], EE = []; for (let i = 0; i < 6; i++) { const q = D.drops[i]; if (i < D.n) { DD.push(q.x, q.y, q.r, q.amp); EE.push(q.ca, q.sa, q.s, q.ph); } else { DD.push(0, 0, 0, 0); EE.push(1, 0, 1, 0); } }
        gl.uniform4fv(U.D, DD); gl.uniform4fv(U.E, EE); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }
    return true;
  }
};
customElements.whenDefined("home-live-card").then(() => { const C = customElements.get("home-live-card"); Object.assign(C.prototype, M); });
})();

// Home Live Card – visual editor and starter configuration
(() => {
const ROOM_TYPES = ["living", "dining", "kitchen", "office", "bath", "hall", "utility", "bed", "closet", "kids", "outdoor", "garage"];
const DEV_DOMAINS = ["light", "switch", "cover", "climate", "media_player", "script", "fan"];
const ED = {
  de: { general: "Allgemein", language: "Sprache", theme: "Darstellung", palette: "Farbschema", amber: "Amber (warm)", graphite: "Graphit (kühl, orange)", neon: "Neon Sunset (Synthwave)", glass: "Himmelglas (hell)", liquid: "Flüssigglas (Lichtbrechung, elastisch)", on_color: "Farbe bei „An“ (Flüssigglas)", oc_auto: "Je Gerätetyp", oc_amber: "Bernstein", oc_blue: "Blau", oc_violet: "Violett", oc_green: "Grün", oc_rose: "Rosa", oc_cyan: "Türkis", oc_orange: "Orange", liquid_drop: "Glastropfen mit Hausverbrauch (Flüssigglas)", refraction: "Lichtbrechung (Flüssigglas, nur Chrome-Browser)", animation: "Hintergrund-Animation", an_off: "Aus", an_city: "Stadtlichter (Neon-Stadtbild)", an_weather: "Wetter (Regen, Schnee, Wolken)", an_daycycle: "Tageslauf (Sonnenstand)", background_image: "Hintergrundbild (URL, leer = Standard, none = keins)", start_view: "Startansicht", default_room: "Startraum", image_path: "Ordner der Raumfotos", energy_path: "Ziel des Knopfs „Details“", load_font: "Schrift Manrope von Google laden",
    rooms: "Räume", add_room: "Raum hinzufügen", from_areas: "Aus Home-Assistant-Bereichen übernehmen", from_areas_done: "{n} Räume übernommen", from_areas_none: "Keine neuen Bereiche gefunden",
    name: "Name", id: "Kennung (für Fotos)", floor: "Etage", type: "Raumtyp", temp: "Temperatursensor", hum: "Feuchtesensor", image: "Fotoname (leer = Kennung)",
    devices: "Geräte", add_device: "Gerät hinzufügen", entity: "Entität", confirm: "Nachfragen vor dem Schalten", sensors: "Fenster und Türen", add_sensor: "Kontakt hinzufügen",
    energy: "Energie", solar: "PV-Leistung (W)", battery: "Akku-Leistung (W)", battery_soc: "Akku-Ladestand (%)", grid: "Netz-Leistung (W)", solar_today: "PV-Ertrag heute (kWh)", consumption_today: "Verbrauch heute (kWh)", import_today: "Netzbezug heute (kWh)", export_today: "Einspeisung heute (kWh)", outdoor_temp: "Außentemperatur", home: "Hausverbrauch (W)", forecast_today: "PV-Prognose heute (kWh)", forecast_tomorrow: "PV-Prognose morgen (kWh)", consumers: "Großverbraucher (Leistung in W)", water_temp: "Warmwasser-Temperatur", water_heater: "Warmwasser-Gerät", battery_invert: "Akku-Vorzeichen umkehren", grid_invert: "Netz-Vorzeichen umkehren",
    more: "Übersicht, Sicherheit und Müllkalender richtest du im Code-Editor ein (Beispiele im README).", up: "Nach oben", down: "Nach unten", remove: "Entfernen", edit: "Bearbeiten",
    auto: "Automatisch", day: "Tag", night: "Abend", overview: "Übersicht", room: "Räume", sec: "Sicherheit", none: "–",
    t_living: "Wohnzimmer", t_dining: "Esszimmer", t_kitchen: "Küche", t_office: "Arbeitszimmer", t_bath: "Bad", t_hall: "Flur", t_utility: "Hauswirtschaft", t_bed: "Schlafzimmer", t_closet: "Ankleide", t_kids: "Kinderzimmer", t_outdoor: "Außen", t_garage: "Garage" },
  en: { general: "General", language: "Language", theme: "Appearance", palette: "Colour scheme", amber: "Amber (warm)", graphite: "Graphite (cool, orange)", neon: "Neon Sunset (synthwave)", glass: "Sky glass (light)", liquid: "Liquid (refraction, elastic)", on_color: "Colour when on (liquid)", oc_auto: "By device type", oc_amber: "Amber", oc_blue: "Blue", oc_violet: "Violet", oc_green: "Green", oc_rose: "Rose", oc_cyan: "Teal", oc_orange: "Orange", liquid_drop: "Glass drop with home consumption (liquid)", refraction: "Refraction (liquid, Chrome-based browsers only)", animation: "Background animation", an_off: "Off", an_city: "City lights (neon city picture)", an_weather: "Weather (rain, snow, clouds)", an_daycycle: "Day cycle (sun position)", background_image: "Background picture (URL, empty = default, none = no picture)", start_view: "Start view", default_room: "Start room", image_path: "Room photo folder", energy_path: "Target of the “Details” button", load_font: "Load the Manrope font from Google",
    rooms: "Rooms", add_room: "Add room", from_areas: "Import Home Assistant areas", from_areas_done: "{n} rooms imported", from_areas_none: "No new areas found",
    name: "Name", id: "ID (used for photos)", floor: "Floor", type: "Room type", temp: "Temperature sensor", hum: "Humidity sensor", image: "Photo name (empty = ID)",
    devices: "Devices", add_device: "Add device", entity: "Entity", confirm: "Ask before switching", sensors: "Windows and doors", add_sensor: "Add contact",
    energy: "Energy", solar: "Solar power (W)", battery: "Battery power (W)", battery_soc: "Battery level (%)", grid: "Grid power (W)", solar_today: "Solar today (kWh)", consumption_today: "Consumption today (kWh)", import_today: "Grid import today (kWh)", export_today: "Export today (kWh)", outdoor_temp: "Outdoor temperature", home: "Home consumption (W)", forecast_today: "Solar forecast today (kWh)", forecast_tomorrow: "Solar forecast tomorrow (kWh)", consumers: "Largest consumers (power in W)", water_temp: "Hot water temperature", water_heater: "Hot water heater", battery_invert: "Invert battery sign", grid_invert: "Invert grid sign",
    more: "Overview, security and the waste calendar are set up in the code editor (examples in the README).", up: "Move up", down: "Move down", remove: "Remove", edit: "Edit",
    auto: "Automatic", day: "Day", night: "Evening", overview: "Overview", room: "Rooms", sec: "Security", none: "–",
    t_living: "Living room", t_dining: "Dining room", t_kitchen: "Kitchen", t_office: "Office", t_bath: "Bathroom", t_hall: "Hallway", t_utility: "Utility room", t_bed: "Bedroom", t_closet: "Dressing room", t_kids: "Kids' room", t_outdoor: "Outdoor", t_garage: "Garage" }
};
let EL = "en";
const L = (k, v) => { let s = (ED[EL] || ED.en)[k] || ED.en[k] || k; if (v) for (const x in v) s = s.split("{" + x + "}").join(v[x]); return s; };
const e = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const slug = (s) => String(s || "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "room";
const guessType = (n) => { const s = String(n || "").toLowerCase();
  const m = [["kitchen", /küche|kueche|kitchen/], ["dining", /ess|dining/], ["bath", /bad|wc|bath|toilet/], ["bed", /schlaf|bed/], ["kids", /kind|kids|child|baby/], ["office", /büro|buero|arbeit|office|study/], ["hall", /flur|diele|treppe|hall|stair|entr/], ["utility", /hwr|hauswirt|keller|wasch|utility|laundry|basement/], ["closet", /ankleide|closet|wardrobe/], ["garage", /garage|carport/], ["outdoor", /garten|terrasse|balkon|außen|aussen|einfahrt|garden|patio|outdoor|yard|drive/], ["living", /wohn|living|lounge/]];
  for (const [t, r] of m) if (r.test(s)) return t; return "living"; };

// Starter configuration built from the Home Assistant areas, so a newly added card shows something useful at once.
const stubFromAreas = (hass, skip) => {
  const areas = (hass && hass.areas) || {}, ents = (hass && hass.entities) || {}, devs = (hass && hass.devices) || {}, floors = (hass && hass.floors) || {}, st = (hass && hass.states) || {};
  const have = new Set(skip || []), by = {};
  for (const id in ents) {
    const en = ents[id]; if (!en || en.hidden || en.entity_category || !st[id]) continue;
    const area = en.area_id || (en.device_id && devs[en.device_id] && devs[en.device_id].area_id); if (!area || !areas[area]) continue;
    (by[area] = by[area] || []).push(id);
  }
  const rooms = [];
  const order = Object.keys(areas).sort((a, b) => { const fa = floors[areas[a].floor_id], fb = floors[areas[b].floor_id]; return ((fa && fa.level) || 0) - ((fb && fb.level) || 0) || String(areas[a].name).localeCompare(String(areas[b].name)); });
  for (const a of order) {
    const ids = by[a] || [], rid = slug(a); if (have.has(rid)) continue;
    const pre = new RegExp("^" + String(areas[a].name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*", "i"), nm = (i) => { const f = st[i].attributes.friendly_name || i; return f.replace(pre, "") || f; };
    const devices = ids.filter((i) => DEV_DOMAINS.includes(i.split(".")[0])).sort().slice(0, 12).map((i) => ({ entity: i, name: nm(i) }));
    const dc = (c) => ids.find((i) => i.startsWith("sensor.") && st[i].attributes.device_class === c);
    const sensors = ids.filter((i) => i.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(st[i].attributes.device_class)).slice(0, 6).map((i) => ({ entity: i, name: nm(i) }));
    if (!devices.length && !sensors.length && !dc("temperature")) continue;
    const r = { id: rid, name: areas[a].name || rid, type: guessType(areas[a].name) };
    const fl = floors[areas[a].floor_id]; if (fl && fl.name) r.floor = fl.name;
    if (dc("temperature")) r.temp = dc("temperature"); if (dc("humidity")) r.hum = dc("humidity");
    r.devices = devices; if (sensors.length) r.sensors = sensors;
    rooms.push(r);
  }
  return rooms;
};

const CSS = `:host{display:block}.sec{border:1px solid var(--divider-color,#e0e0e0);border-radius:12px;margin:0 0 14px;overflow:hidden}
.sh{display:flex;align-items:center;gap:8px;padding:12px 14px;font-weight:500;background:var(--secondary-background-color,#f5f5f5)}.sh span{flex:1}
.bd{padding:12px 14px;display:flex;flex-direction:column;gap:10px}.row{display:flex;gap:8px;align-items:center}.row>.grow{flex:1;min-width:0}
.room{border:1px solid var(--divider-color,#e0e0e0);border-radius:10px}.room .sh{background:none;padding:8px 10px}.room .sh small{color:var(--secondary-text-color,#777);font-weight:400;margin-left:6px}
button.ib{border:0;background:none;cursor:pointer;width:32px;height:32px;border-radius:16px;color:var(--secondary-text-color,#666);font-size:16px;line-height:32px;padding:0}button.ib:hover{background:var(--secondary-background-color,#eee)}
button.tx{border:1px solid var(--divider-color,#ccc);background:none;cursor:pointer;border-radius:18px;padding:7px 14px;color:var(--primary-color,#03a9f4);font:inherit}
.hint{color:var(--secondary-text-color,#777);font-size:13px;line-height:1.4}.lbl{font-size:13px;font-weight:500;margin-top:4px}
input.fb,select.fb{width:100%;box-sizing:border-box;padding:8px;border:1px solid var(--divider-color,#ccc);border-radius:6px;font:inherit;background:var(--card-background-color,#fff);color:var(--primary-text-color,#222)}
label.fbl{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--secondary-text-color,#666)}label.chk{flex-direction:row;align-items:center;gap:6px}`;

class HomeLiveCardEditor extends HTMLElement {
  setConfig(c) { if (this._self && this._c) { this._self = false; return; } this._self = false; this._c = JSON.parse(JSON.stringify(c || {})); if (!Array.isArray(this._c.rooms)) this._c.rooms = []; this._build(); }
  set hass(h) { this._h = h; const lg = String((h && ((h.locale && h.locale.language) || h.language)) || "en").toLowerCase(), nl = lg.startsWith("de") ? "de" : "en"; if (nl !== EL) { EL = nl; if (this._built) this._build(); } this.shadowRoot && this.shadowRoot.querySelectorAll("ha-form,ha-selector").forEach((f) => { f.hass = h; }); if (!this._built && this._c) this._build(); }
  _emit() { this._self = true; this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: JSON.parse(JSON.stringify(this._c)) }, bubbles: true, composed: true })); }
  _clean(o) { for (const k of Object.keys(o)) if (o[k] === "" || o[k] == null || (Array.isArray(o[k]) && !o[k].length && k !== "rooms" && k !== "devices")) delete o[k]; return o; }
  // one form = HA's ha-form when available, plain inputs otherwise
  _form(schema, data, onChange) {
    const wrap = document.createElement("div");
    if (customElements.get("ha-form")) {
      const f = document.createElement("ha-form"); f.hass = this._h; f.schema = schema; f.data = data;
      f.computeLabel = (s) => L(s.name); f.addEventListener("value-changed", (ev) => { ev.stopPropagation(); f.data = ev.detail.value; onChange(Object.assign({}, ev.detail.value)); });
      wrap.appendChild(f); return wrap;
    }
    const cur = Object.assign({}, data);
    for (const s of schema) {
      const sel = s.selector || {}, lab = document.createElement("label"); lab.className = "fbl" + (sel.boolean ? " chk" : "");
      let inp;
      if (sel.select) { inp = document.createElement("select"); inp.className = "fb"; inp.innerHTML = sel.select.options.map((o) => `<option value="${e(o.value)}">${e(o.label)}</option>`).join(""); inp.value = cur[s.name] == null ? "" : cur[s.name]; }
      else if (sel.boolean) { inp = document.createElement("input"); inp.type = "checkbox"; inp.checked = !!cur[s.name]; }
      else { inp = document.createElement("input"); inp.className = "fb"; inp.value = cur[s.name] == null ? "" : cur[s.name]; if (sel.entity) { inp.setAttribute("list", "hlc-ents"); inp.placeholder = "sensor.…"; } }
      inp.dataset.k = s.name;
      inp.addEventListener("change", () => { cur[s.name] = sel.boolean ? inp.checked : inp.value; onChange(Object.assign({}, cur)); });
      if (sel.boolean) { lab.appendChild(inp); lab.appendChild(document.createTextNode(L(s.name))); } else { lab.appendChild(document.createTextNode(L(s.name))); lab.appendChild(inp); }
      wrap.appendChild(lab);
    }
    return wrap;
  }
  _sel(opts) { return { select: { mode: "dropdown", options: opts.map((v) => (typeof v === "string" ? { value: v, label: L(v) } : v)) } }; }
  _build() {
    if (!this._c) return; this._built = true;
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const R = this.shadowRoot; R.innerHTML = `<style>${CSS}</style>`;
    if (!customElements.get("ha-form") && this._h) { const dl = document.createElement("datalist"); dl.id = "hlc-ents"; dl.innerHTML = Object.keys(this._h.states).sort().map((i) => `<option value="${e(i)}">`).join(""); R.appendChild(dl); }
    const c = this._c;
    // general
    const g = this._section(L("general"));
    g.appendChild(this._form([
      { name: "language", selector: this._sel([{ value: "auto", label: L("auto") }, { value: "de", label: "Deutsch" }, { value: "en", label: "English" }]) },
      { name: "theme", selector: this._sel([{ value: "auto", label: L("auto") }, { value: "day", label: L("day") }, { value: "night", label: L("night") }]) },
      { name: "palette", selector: this._sel([{ value: "amber", label: L("amber") }, { value: "graphite", label: L("graphite") }, { value: "neon", label: L("neon") }, { value: "glass", label: L("glass") }, { value: "liquid", label: L("liquid") }]) },
      { name: "on_color", selector: this._sel(["auto", "amber", "blue", "violet", "green", "rose", "cyan", "orange"].map((v) => ({ value: v, label: L("oc_" + v) }))) },
      { name: "liquid_drop", selector: { boolean: {} } },
      { name: "refraction", selector: { boolean: {} } },
      { name: "animation", selector: this._sel(((window.HOME_LIVE_ANIMS || {})[c.palette || "amber"] || ["off"]).map((a) => ({ value: a, label: L("an_" + a) }))) },
      { name: "background_image", selector: { text: {} } },
      { name: "start_view", selector: this._sel([{ value: "room", label: L("room") }, { value: "overview", label: L("overview") }]) },
      { name: "default_room", selector: this._sel([{ value: "", label: L("none") }, ...c.rooms.map((r) => ({ value: r.id, label: r.name || r.id }))]) },
      { name: "image_path", selector: { text: {} } },
      { name: "energy_path", selector: { text: {} } },
      { name: "load_font", selector: { boolean: {} } }
    ], { language: c.language || "auto", theme: c.theme || "auto", palette: c.palette || "amber", animation: (() => { const al = (window.HOME_LIVE_ANIMS || {})[c.palette || "amber"] || ["off"], a = typeof c.animation === "object" && c.animation ? c.animation[c.palette || "amber"] : c.animation; return al.includes(a) ? a : "off"; })(), background_image: c.background_image || "", start_view: c.start_view || "room", default_room: c.default_room || "", image_path: c.image_path || "", energy_path: c.energy_path || "", load_font: c.load_font !== false, on_color: c.on_color || "auto", liquid_drop: c.liquid_drop !== false, refraction: c.refraction !== false },
    (v) => { const pp = c.palette || "amber"; Object.assign(c, v); if (v.load_font === true) delete c.load_font; if (c.on_color === "auto") delete c.on_color; if (v.liquid_drop === true) delete c.liquid_drop; if (v.refraction === true) delete c.refraction; if (c.palette === "amber") delete c.palette; const np = c.palette || "amber", al = (window.HOME_LIVE_ANIMS || {})[np] || ["off"]; if (np !== pp && !al.includes(c.animation)) c.animation = "off"; if (c.animation === "off") delete c.animation; if (!c.background_image) delete c.background_image; this._clean(c); this._emit(); if (np !== pp) setTimeout(() => this._build(), 0); }));
    R.appendChild(g.parentNode);
    // rooms
    const rs = this._section(L("rooms"));
    c.rooms.forEach((r, i) => rs.appendChild(this._room(r, i)));
    const act = document.createElement("div"); act.className = "row";
    act.innerHTML = `<button class="tx" data-x="add">${e(L("add_room"))}</button><button class="tx" data-x="areas">${e(L("from_areas"))}</button><span class="hint" id="amsg"></span>`;
    act.querySelector('[data-x="add"]').onclick = () => { const n = c.rooms.length + 1; let id = "room_" + n; while (c.rooms.some((r) => r.id === id)) id += "_"; c.rooms.push({ id, name: L("t_living") + " " + n, type: "living", devices: [] }); this._open = id; this._emit(); this._build(); };
    act.querySelector('[data-x="areas"]').onclick = () => { const add = stubFromAreas(this._h, c.rooms.map((r) => r.id)); c.rooms.push(...add); this._emit(); this._build(); const m = this.shadowRoot.getElementById("amsg"); if (m) m.textContent = add.length ? L("from_areas_done", { n: add.length }) : L("from_areas_none"); };
    rs.appendChild(act);
    R.appendChild(rs.parentNode);
    // energy
    // No device_class filter: many integrations (e.g. battery level or forecast sensors) do not set one, and the picker would then show nothing.
    const en = this._section(L("energy")), ec = c.energy || {}, ent = (dom) => ({ entity: { filter: { domain: dom || "sensor" } } });
    const ed = Object.assign({}, ec, { consumers: (ec.consumers || []).map((x) => x.entity).filter(Boolean) });
    en.appendChild(this._form([
      { name: "solar", selector: ent() }, { name: "battery", selector: ent() }, { name: "battery_soc", selector: ent() }, { name: "grid", selector: ent() }, { name: "home", selector: ent() },
      { name: "solar_today", selector: ent() }, { name: "consumption_today", selector: ent() }, { name: "import_today", selector: ent() }, { name: "export_today", selector: ent() },
      { name: "forecast_today", selector: ent() }, { name: "forecast_tomorrow", selector: ent() }, { name: "outdoor_temp", selector: ent() },
      { name: "consumers", selector: { entity: { multiple: true, filter: { domain: "sensor" } } } },
      { name: "water_temp", selector: ent() }, { name: "water_heater", selector: ent("water_heater") },
      { name: "battery_invert", selector: { boolean: {} } }, { name: "grid_invert", selector: { boolean: {} } }
    ], ed, (v) => {
      if ("consumers" in v) { const old = (c.energy && c.energy.consumers) || [], list = Array.isArray(v.consumers) ? v.consumers : String(v.consumers || "").split(",").map((x) => x.trim()).filter(Boolean);
        v.consumers = list.map((id) => old.find((o) => o.entity === id) || { entity: id, name: (this._h && this._h.states[id] && this._h.states[id].attributes.friendly_name) || id }); if (!v.consumers.length) delete v.consumers; }
      const n = this._clean(Object.assign({}, c.energy || {}, v)); if (!v.consumers) delete n.consumers; if (n.battery_invert === false) delete n.battery_invert; if (n.grid_invert === false) delete n.grid_invert; if (Object.keys(n).length) c.energy = n; else delete c.energy; this._emit(); }));
    R.appendChild(en.parentNode);
    const h = document.createElement("p"); h.className = "hint"; h.textContent = L("more"); R.appendChild(h);
  }
  _section(title) { const s = document.createElement("div"); s.className = "sec"; s.innerHTML = `<div class="sh"><span>${e(title)}</span></div>`; const b = document.createElement("div"); b.className = "bd"; s.appendChild(b); return b; }
  _room(r, i) {
    const c = this._c, box = document.createElement("div"); box.className = "room"; const open = this._open === r.id;
    box.innerHTML = `<div class="sh"><span>${e(r.name || r.id)}<small>${(r.devices || []).length} · ${e(r.floor || "")}</small></span><button class="ib" data-x="up" title="${e(L("up"))}" ${i ? "" : "disabled"}>↑</button><button class="ib" data-x="dn" title="${e(L("down"))}" ${i < c.rooms.length - 1 ? "" : "disabled"}>↓</button><button class="ib" data-x="ed" title="${e(L("edit"))}">${open ? "▴" : "▾"}</button><button class="ib" data-x="rm" title="${e(L("remove"))}">✕</button></div>`;
    const mv = (d) => { const j = i + d; [c.rooms[i], c.rooms[j]] = [c.rooms[j], c.rooms[i]]; this._emit(); this._build(); };
    box.querySelector('[data-x="up"]').onclick = () => mv(-1); box.querySelector('[data-x="dn"]').onclick = () => mv(1);
    box.querySelector('[data-x="ed"]').onclick = () => { this._open = open ? null : r.id; this._build(); };
    box.querySelector('[data-x="rm"]').onclick = () => { if (c.rooms.length < 2) return; c.rooms.splice(i, 1); if (c.default_room === r.id) delete c.default_room; this._emit(); this._build(); };
    if (!open) return box;
    const bd = document.createElement("div"); bd.className = "bd";
    bd.appendChild(this._form([
      { name: "name", selector: { text: {} } }, { name: "id", selector: { text: {} } }, { name: "floor", selector: { text: {} } },
      { name: "type", selector: this._sel(ROOM_TYPES.map((t) => ({ value: t, label: L("t_" + t) }))) },
      { name: "temp", selector: { entity: { filter: { domain: "sensor", device_class: "temperature" } } } },
      { name: "hum", selector: { entity: { filter: { domain: "sensor", device_class: "humidity" } } } },
      { name: "image", selector: { text: {} } }
    ], { name: r.name, id: r.id, floor: r.floor, type: r.type || "living", temp: r.temp, hum: r.hum, image: typeof r.image === "string" ? r.image : "" },
    (v) => { const old = r.id; Object.assign(r, v); r.id = slug(r.id || r.name); this._clean(r); if (!r.devices) r.devices = []; if (old !== r.id) { if (c.default_room === old) c.default_room = r.id; this._open = r.id; } this._emit(); }));
    bd.appendChild(this._list(L("devices"), r, "devices", { entity: { filter: { domain: DEV_DOMAINS } } }, L("add_device"), true));
    bd.appendChild(this._list(L("sensors"), r, "sensors", { entity: { filter: { domain: "binary_sensor" } } }, L("add_sensor"), false));
    box.appendChild(bd); return box;
  }
  _list(title, r, key, entSel, addLabel, withConfirm) {
    const w = document.createElement("div"), arr = r[key] || [];
    w.innerHTML = `<div class="lbl">${e(title)}</div>`;
    arr.forEach((d, j) => {
      const row = document.createElement("div"); row.className = "row";
      const f = this._form([{ name: "entity", selector: entSel }, { name: "name", selector: { text: {} } }, ...(withConfirm ? [{ name: "confirm", selector: { boolean: {} } }] : [])], { entity: d.entity, name: d.name, confirm: !!d.confirm },
        (v) => { if (v.entity && v.entity !== d.entity && (!d.name || d.name === (this._fn(d.entity)))) v.name = this._fn(v.entity); Object.assign(d, v); if (!d.confirm) delete d.confirm; this._clean(d); this._emit(); if (v.name !== undefined) { const fb = f.querySelector('input[data-k="name"]'); if (fb) fb.value = d.name || ""; } });
      f.className = "grow"; row.appendChild(f);
      const rm = document.createElement("button"); rm.className = "ib"; rm.title = L("remove"); rm.textContent = "✕"; rm.onclick = () => { arr.splice(j, 1); r[key] = arr; if (!arr.length && key !== "devices") delete r[key]; this._emit(); this._build(); };
      row.appendChild(rm); w.appendChild(row);
    });
    const add = document.createElement("button"); add.className = "tx"; add.textContent = addLabel; add.onclick = () => { (r[key] = arr).push({ entity: "", name: "" }); this._emit(); this._build(); };
    w.appendChild(add); return w;
  }
  _fn(id) { const s = this._h && id && this._h.states[id]; return (s && s.attributes.friendly_name) || ""; }
}
if (!customElements.get("home-live-card-editor")) customElements.define("home-live-card-editor", HomeLiveCardEditor);
HausLiveCard.getConfigElement = () => document.createElement("home-live-card-editor");
HausLiveCard.getStubConfig = (hass) => {
  const rooms = stubFromAreas(hass);
  return { rooms: rooms.length ? rooms : [{ id: "living", name: "Living room", type: "living", devices: [] }] };
};
})();
