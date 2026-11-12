// Baut dist/home-live-card.js aus src/ (reine Verkettung, keine Abhängigkeiten)
import { readFileSync, writeFileSync } from "node:fs";
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));
const parts = ["src/i18n.js", "src/card.js", "src/controls.js", "src/editor.js"].map(f => readFileSync(new URL(f, import.meta.url), "utf8").trimEnd());
const banner = `/*! home-live-card v${pkg.version} | MIT License | https://github.com/RomanM78/home-live-card */`;
const out = [banner, `window.HOME_LIVE_VERSION = "${pkg.version}";`, ...parts].join("\n\n") + "\n";
writeFileSync(new URL("./dist/home-live-card.js", import.meta.url), out);
console.log(`dist/home-live-card.js ${out.length} Bytes, v${pkg.version}`);
