# Roadmap

## v0.1 – merge (done)
- [x] Main card and controls module in one file (`dist/home-live-card.js`)
- [x] Personal embedded pictures removed
- [x] Runs with a minimal configuration (rooms only)

## v0.2 – make it generic (done)
- [x] All texts through a translation table (de, en); `language: auto` follows the HA user language
- [x] Dates and numbers in the user's locale; °F when Home Assistant uses imperial units
- [x] Room photo folder configurable (`image_path`, default `/local/home-live/rooms/`)
- [x] "Details" button only when an `energy` block or `energy_path` is set
- [x] Covers without position control use open/close
- [x] Hot water: boost switch and automation are optional (was already the case)
- [x] Battery/grid sign configurable (`battery_invert`, `grid_invert`, was already the case)

## v0.2.x – still open
- [ ] Thermostats with two setpoints (`target_temp_low/high`) on the dial
- [ ] Card version shown in the browser console
- [ ] More languages (translation file is `src/i18n.js`)

## v0.3 – editor (done)
- [x] Starter configuration from Home Assistant areas and floors when the card is added
- [x] Visual editor: general options, rooms (order, type, sensors), devices, door/window contacts, energy
- [x] "Import Home Assistant areas" button for rooms added later
- [x] `load_font: false` to avoid loading the font from Google

## v0.4 – look (done)
- [x] Second colour scheme `palette: graphite` (cool charcoal, orange accent), selectable in the editor
- [x] Dimmable light tiles tall enough for the brightness ruler
- [x] Decimal point in the dot-matrix digits (English number format)

## v0.5 – editor, part 2
- [ ] Overview, security, hot water and waste calendar in the visual editor
- [ ] Pin positions on the house picture set by tapping

## v1.0 – publish
- [ ] Screenshots with neutral demo pictures
- [ ] Submission to the default catalog
