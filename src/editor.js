// Home Live Card – visual editor and starter configuration
(() => {
const ROOM_TYPES = ["living", "dining", "kitchen", "office", "bath", "hall", "utility", "bed", "closet", "kids", "outdoor", "garage"];
const DEV_DOMAINS = ["light", "switch", "cover", "climate", "media_player", "script", "fan"];
const ED = {
  de: { general: "Allgemein", language: "Sprache", theme: "Darstellung", palette: "Farbschema", amber: "Amber (warm)", graphite: "Graphit (kühl, orange)", neon: "Neon Sunset (Synthwave)", animation: "Hintergrund-Animation", an_off: "Aus", an_city: "Stadtlichter (Neon-Stadtbild)", an_weather: "Wetter (Regen, Schnee, Wolken)", an_daycycle: "Tageslauf (Sonnenstand)", background_image: "Hintergrundbild (URL, leer = Standard, none = keins)", start_view: "Startansicht", default_room: "Startraum", image_path: "Ordner der Raumfotos", energy_path: "Ziel des Knopfs „Details“", load_font: "Schrift Manrope von Google laden",
    rooms: "Räume", add_room: "Raum hinzufügen", from_areas: "Aus Home-Assistant-Bereichen übernehmen", from_areas_done: "{n} Räume übernommen", from_areas_none: "Keine neuen Bereiche gefunden",
    name: "Name", id: "Kennung (für Fotos)", floor: "Etage", type: "Raumtyp", temp: "Temperatursensor", hum: "Feuchtesensor", image: "Fotoname (leer = Kennung)",
    devices: "Geräte", add_device: "Gerät hinzufügen", entity: "Entität", confirm: "Nachfragen vor dem Schalten", sensors: "Fenster und Türen", add_sensor: "Kontakt hinzufügen",
    energy: "Energie", solar: "PV-Leistung (W)", battery: "Akku-Leistung (W)", battery_soc: "Akku-Ladestand (%)", grid: "Netz-Leistung (W)", solar_today: "PV-Ertrag heute (kWh)", consumption_today: "Verbrauch heute (kWh)", import_today: "Netzbezug heute (kWh)", export_today: "Einspeisung heute (kWh)", outdoor_temp: "Außentemperatur", home: "Hausverbrauch (W)", forecast_today: "PV-Prognose heute (kWh)", forecast_tomorrow: "PV-Prognose morgen (kWh)", consumers: "Großverbraucher (Leistung in W)", water_temp: "Warmwasser-Temperatur", water_heater: "Warmwasser-Gerät", battery_invert: "Akku-Vorzeichen umkehren", grid_invert: "Netz-Vorzeichen umkehren",
    more: "Übersicht, Sicherheit und Müllkalender richtest du im Code-Editor ein (Beispiele im README).", up: "Nach oben", down: "Nach unten", remove: "Entfernen", edit: "Bearbeiten",
    auto: "Automatisch", day: "Tag", night: "Abend", overview: "Übersicht", room: "Räume", sec: "Sicherheit", none: "–",
    t_living: "Wohnzimmer", t_dining: "Esszimmer", t_kitchen: "Küche", t_office: "Arbeitszimmer", t_bath: "Bad", t_hall: "Flur", t_utility: "Hauswirtschaft", t_bed: "Schlafzimmer", t_closet: "Ankleide", t_kids: "Kinderzimmer", t_outdoor: "Außen", t_garage: "Garage" },
  en: { general: "General", language: "Language", theme: "Appearance", palette: "Colour scheme", amber: "Amber (warm)", graphite: "Graphite (cool, orange)", neon: "Neon Sunset (synthwave)", animation: "Background animation", an_off: "Off", an_city: "City lights (neon city picture)", an_weather: "Weather (rain, snow, clouds)", an_daycycle: "Day cycle (sun position)", background_image: "Background picture (URL, empty = default, none = no picture)", start_view: "Start view", default_room: "Start room", image_path: "Room photo folder", energy_path: "Target of the “Details” button", load_font: "Load the Manrope font from Google",
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
      { name: "palette", selector: this._sel([{ value: "amber", label: L("amber") }, { value: "graphite", label: L("graphite") }, { value: "neon", label: L("neon") }]) },
      { name: "animation", selector: this._sel(((window.HOME_LIVE_ANIMS || {})[c.palette || "amber"] || ["off"]).map((a) => ({ value: a, label: L("an_" + a) }))) },
      { name: "background_image", selector: { text: {} } },
      { name: "start_view", selector: this._sel([{ value: "room", label: L("room") }, { value: "overview", label: L("overview") }]) },
      { name: "default_room", selector: this._sel([{ value: "", label: L("none") }, ...c.rooms.map((r) => ({ value: r.id, label: r.name || r.id }))]) },
      { name: "image_path", selector: { text: {} } },
      { name: "energy_path", selector: { text: {} } },
      { name: "load_font", selector: { boolean: {} } }
    ], { language: c.language || "auto", theme: c.theme || "auto", palette: c.palette || "amber", animation: (() => { const al = (window.HOME_LIVE_ANIMS || {})[c.palette || "amber"] || ["off"], a = typeof c.animation === "object" && c.animation ? c.animation[c.palette || "amber"] : c.animation; return al.includes(a) ? a : "off"; })(), background_image: c.background_image || "", start_view: c.start_view || "room", default_room: c.default_room || "", image_path: c.image_path || "", energy_path: c.energy_path || "", load_font: c.load_font !== false },
    (v) => { const pp = c.palette || "amber"; Object.assign(c, v); if (v.load_font === true) delete c.load_font; if (c.palette === "amber") delete c.palette; const np = c.palette || "amber", al = (window.HOME_LIVE_ANIMS || {})[np] || ["off"]; if (np !== pp && !al.includes(c.animation)) c.animation = "off"; if (c.animation === "off") delete c.animation; if (!c.background_image) delete c.background_image; this._clean(c); this._emit(); if (np !== pp) setTimeout(() => this._build(), 0); }));
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
