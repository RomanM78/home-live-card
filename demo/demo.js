// Neutral demo: invented rooms, names and values. No personal data, no photos.
window.DEMO_CFG = {
  type: "custom:home-live-card", language: "en", load_font: true, default_room: "living", start_view: "overview", energy_path: "/energy",
  rooms: [
    { id: "living", name: "Living room", floor: "Ground floor", type: "living", temp: "sensor.living_temp", hum: "sensor.living_hum", power: ["sensor.tv_power"], media: "media_player.living", image: false,
      devices: [{ entity: "light.living_floor_lamp", name: "Floor lamp" }, { entity: "light.living_ceiling", name: "Ceiling" }, { entity: "climate.living", name: "Heating" }, { entity: "switch.tv", name: "TV", icon: "tv", power: "sensor.tv_power" }, { entity: "cover.living_blind", name: "Blind" }, { entity: "media_player.living", name: "Speaker" }],
      sensors: [{ entity: "binary_sensor.patio_door", name: "Patio door" }, { entity: "binary_sensor.living_window", name: "Window" }] },
    { id: "kitchen", name: "Kitchen", floor: "Ground floor", type: "kitchen", image: false,
      devices: [{ entity: "light.kitchen", name: "Ceiling" }, { entity: "climate.kitchen", name: "Heating" }, { entity: "cover.kitchen_blind", name: "Blind" }, { entity: "switch.dishwasher", name: "Dishwasher", icon: "dish", confirm: true }],
      sensors: [{ entity: "binary_sensor.kitchen_window", name: "Window" }], info: [{ entity: "sensor.fridge_temp", name: "Fridge", unit: "°C" }] },
    { id: "dining", name: "Dining room", floor: "Ground floor", type: "dining", image: false,
      devices: [{ entity: "light.dining", name: "Pendant" }, { entity: "cover.dining_blind", name: "Blind" }] },
    { id: "office", name: "Office", floor: "Ground floor", type: "office", image: false,
      devices: [{ entity: "light.office", name: "Desk lamp" }, { entity: "climate.office", name: "Heating" }, { entity: "switch.pc", name: "PC", icon: "pc", confirm: true }] },
    { id: "hall", name: "Hallway", floor: "Ground floor", type: "hall", image: false,
      devices: [{ entity: "light.hall", name: "Ceiling" }], sensors: [{ entity: "binary_sensor.front_door", name: "Front door" }] },
    { id: "bedroom", name: "Bedroom", floor: "Upper floor", type: "bed", temp: "sensor.bedroom_temp", image: false,
      devices: [{ entity: "light.bedroom", name: "Bedside" }, { entity: "cover.bedroom_blind", name: "Blind" }, { entity: "climate.bedroom_ac", name: "Air conditioning" }] },
    { id: "kids", name: "Kids' room", floor: "Upper floor", type: "kids", image: false,
      devices: [{ entity: "light.kids", name: "Ceiling" }, { entity: "cover.kids_blind", name: "Blind" }] },
    { id: "bath", name: "Bathroom", floor: "Upper floor", type: "bath", image: false,
      devices: [{ entity: "climate.bath", name: "Heating" }, { entity: "cover.bath_blind", name: "Blind" }] },
    { id: "garden", name: "Garden", floor: "Outside", type: "outdoor", temp: "sensor.outdoor_temp", temp_label: "Outside", image: false,
      devices: [{ entity: "light.garden", name: "Path lights" }, { entity: "light.terrace", name: "Terrace" }] },
    { id: "garage", name: "Garage", floor: "Outside", type: "garage", image: false,
      devices: [{ entity: "switch.garage_light", name: "Light", icon: "bulb" }, { entity: "script.garage_door", name: "Garage door", icon: "gate" }] }
  ],
  overview: {
    hero_image: "house.webp", persons: ["person.alex", "person.sam"], alarm: "alarm_control_panel.home", weather: "weather.home", climate: "climate.living", climate_name: "Living room",
    lights: [{ entity: "light.living_floor_lamp", name: "Floor lamp", room: "living" }, { entity: "light.kitchen", name: "Kitchen", room: "kitchen" }, { entity: "light.dining", name: "Dining", room: "dining" }, { entity: "light.garden", name: "Garden", room: "garden" }],
    doors: [{ entity: "binary_sensor.front_door", name: "Front door" }, { entity: "binary_sensor.patio_door", name: "Patio door" }, { entity: "binary_sensor.garage_door", name: "Garage" }],
    media: ["media_player.living"], devices: [{ entity: "switch.tv", name: "TV", icon: "tv" }],
    actions: [{ entity: "script.garage_door", name: "Garage door", icon: "gate" }]
  },
  energy: {
    solar: "sensor.pv_power", battery: "sensor.battery_power", battery_soc: "sensor.battery_level", grid: "sensor.grid_power", home: "sensor.home_power",
    solar_today: "sensor.pv_today", consumption_today: "sensor.home_today", import_today: "sensor.import_today", export_today: "sensor.export_today",
    forecast_today: "sensor.forecast_today", forecast_tomorrow: "sensor.forecast_tomorrow", outdoor_temp: "sensor.outdoor_temp",
    consumers: [{ name: "Dishwasher", entity: "sensor.dishwasher_power" }, { name: "TV", entity: "sensor.tv_power" }, { name: "Fridge", entity: "sensor.fridge_power" }],
    water_temp: "sensor.hot_water_temp", water_heater: "water_heater.hot_water"
  },
  security: {
    alarm: "alarm_control_panel.home",
    groups: [{ name: "Ground floor", items: ["binary_sensor.front_door", "binary_sensor.patio_door", "binary_sensor.living_window", "binary_sensor.kitchen_window"] }]
  }
};
(() => {
  const ST = {}, now = Date.now(), ago = (m) => new Date(now - m * 60000).toISOString();
  const S = (id, state, a, lc) => { ST[id] = { entity_id: id, state: String(state), attributes: Object.assign({ friendly_name: id.split(".")[1].replace(/_/g, " ") }, a || {}), last_changed: lc || ago(95), last_updated: lc || ago(95) }; };
  const dim = { supported_color_modes: ["brightness"], color_mode: "brightness" };
  S("light.living_floor_lamp", "on", Object.assign({ brightness: 166 }, dim)); S("light.living_ceiling", "off", dim); S("light.kitchen", "on", Object.assign({ brightness: 230 }, dim));
  S("light.dining", "on", Object.assign({ brightness: 102 }, dim)); S("light.office", "off", dim); S("light.hall", "off", { supported_color_modes: ["onoff"] });
  S("light.bedroom", "off", dim); S("light.kids", "off", dim); S("light.garden", "off", { supported_color_modes: ["onoff"] }); S("light.terrace", "off", dim);
  S("switch.tv", "on"); S("switch.dishwasher", "on"); S("switch.pc", "off"); S("switch.garage_light", "off"); S("script.garage_door", "off");
  const cov = (p) => ({ current_position: p, supported_features: 15 });
  S("cover.living_blind", "open", cov(100)); S("cover.kitchen_blind", "open", cov(70)); S("cover.dining_blind", "open", cov(100)); S("cover.bedroom_blind", "closed", cov(0)); S("cover.kids_blind", "open", cov(40)); S("cover.bath_blind", "open", cov(100));
  const th = (t, c) => ({ hvac_modes: ["heat", "off"], hvac_action: "heating", temperature: t, current_temperature: c, min_temp: 7, max_temp: 35, target_temp_step: 0.5 });
  S("climate.living", "heat", th(21.5, 21.0)); S("climate.kitchen", "heat", th(20, 20.5)); S("climate.office", "heat", th(21, 20.5)); S("climate.bath", "heat", th(23, 22.5));
  S("climate.bedroom_ac", "off", { hvac_modes: ["off", "heat", "cool", "dry", "fan_only", "heat_cool"], current_temperature: 19.5, temperature: 20, min_temp: 16, max_temp: 31, target_temp_step: 0.5 });
  S("sensor.living_temp", "21.0", { unit_of_measurement: "°C" }); S("sensor.living_hum", "46", { unit_of_measurement: "%" }); S("sensor.bedroom_temp", "19.5"); S("sensor.outdoor_temp", "11.4");
  S("sensor.fridge_temp", "4.5"); S("sensor.tv_power", "92.4"); S("sensor.dishwasher_power", "1840"); S("sensor.fridge_power", "61");
  S("media_player.living", "playing", { volume_level: 0.32, media_title: "Morning Light", media_artist: "Demo Artist", source_list: ["Radio", "TV"], source: "Radio" });
  ["binary_sensor.patio_door", "binary_sensor.front_door", "binary_sensor.living_window", "binary_sensor.garage_door"].forEach((i) => S(i, "off", {}, ago(300)));
  S("binary_sensor.kitchen_window", "on", {}, ago(25));
  S("person.alex", "home", { friendly_name: "Alex" }); S("person.sam", "not_home", { friendly_name: "Sam" });
  S("alarm_control_panel.home", "disarmed", { friendly_name: "Alarm system", supported_features: 3, code_format: "number" }, ago(600));
  S("weather.home", "partlycloudy", { temperature: 11.4, humidity: 72, wind_speed: 9.5 });
  S("sensor.pv_power", "2840"); S("sensor.battery_power", "620"); S("sensor.battery_level", "68"); S("sensor.grid_power", "-1310"); S("sensor.home_power", "910");
  S("sensor.pv_today", "11.6"); S("sensor.home_today", "7.9"); S("sensor.import_today", "1.2"); S("sensor.export_today", "4.1"); S("sensor.forecast_today", "13.2"); S("sensor.forecast_tomorrow", "9.8");
  S("sensor.hot_water_temp", "52.5"); S("water_heater.hot_water", "auto", { temperature: 55, operation_list: ["auto", "off"] });
  S("sun.sun", "above_horizon");
  window.DEMO_ST = ST;
})();
