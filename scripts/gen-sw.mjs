/*
 * Генератор public/sw.js из scripts/sw.template.js.
 * Запускается после `next build` (см. package.json → build).
 *
 * Собирает в прекеш:
 *   - всю неизменяемую статику билда (.next/static)
 *   - все HTML-роуты приложения (главная, карта, таймлайн, локации + вкладки)
 *   - Leaflet с CDN
 *   - обзорные тайлы карты Бали (низкие зумы), чтобы карта-обзор работала офлайн
 * Версия кеша — хеш по содержимому статики: меняется только при реальном изменении сборки.
 */

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const STATIC_DIR = join(ROOT, ".next", "static");
const TEMPLATE = join(ROOT, "scripts", "sw.template.js");
const OUT = join(ROOT, "public", "sw.js");

// ── 1. Статика билда → /_next/static/... ──────────────────────────────
function walk(dir, base = "") {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = base ? `${base}/${entry}` : entry;
    if (statSync(full).isDirectory()) out.push(...walk(full, rel));
    else out.push(rel);
  }
  return out;
}

let staticFiles = [];
try {
  staticFiles = walk(STATIC_DIR);
} catch (e) {
  console.error("[gen-sw] Не найден .next/static — сначала нужен `next build`.");
  process.exit(1);
}

const assets = staticFiles
  .map((f) => `/_next/static/${f}`)
  // карты исходников и хот-апдейты в прекеше не нужны
  .filter((u) => !u.endsWith(".map") && !u.includes("/webpack/"));

// Иконки и манифест PWA — тоже в обязательный прекеш
const ownExtra = ["/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png"];
const precacheAssets = [...assets, ...ownExtra];

// ── 2. Роуты приложения ───────────────────────────────────────────────
// Слаги локаций берём прямо из lib/data.ts, чтобы не рассинхронизироваться
const dataTs = readFileSync(join(ROOT, "lib", "data.ts"), "utf8");
const slugs = [...new Set([...dataTs.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]))];

const staticRoutes = ["/", "/map", "/today"];
const placeRoutes = slugs.flatMap((s) => [
  `/place/${s}`,
  `/place/${s}?tab=cafes`,
  `/place/${s}?tab=work`,
]);
const routes = [...staticRoutes, ...placeRoutes];

// ── 3. Внешние ресурсы карты (Leaflet CDN) ────────────────────────────
const external = [
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
];

// ── 4. Обзорные тайлы Бали (низкие зумы) ──────────────────────────────
// bbox с запасом по всем 8 локациям маршрута
const BBOX = { west: 114.5, east: 115.75, north: -8.05, south: -8.9 };
const ZOOMS = [10, 11];
const TILE_LIMIT = 140; // вежливость к OSM: один разовый прогрев, не bulk-выгрузка

const lon2x = (lon, z) => Math.floor(((lon + 180) / 360) * 2 ** z);
const lat2y = (lat, z) => {
  const r = (lat * Math.PI) / 180;
  return Math.floor(((1 - Math.asinh(Math.tan(r)) / Math.PI) / 2) * 2 ** z);
};

const tiles = [];
for (const z of ZOOMS) {
  const x0 = lon2x(BBOX.west, z);
  const x1 = lon2x(BBOX.east, z);
  const y0 = lat2y(BBOX.north, z); // north = меньший y
  const y1 = lat2y(BBOX.south, z);
  for (let x = x0; x <= x1; x++) {
    for (let y = y0; y <= y1; y++) {
      tiles.push(`https://tile.openstreetmap.org/${z}/${x}/${y}.png`);
    }
  }
}
const tileUrls = tiles.slice(0, TILE_LIMIT);

// ── 5. Версия кеша = хеш содержимого статики ──────────────────────────
const hash = createHash("sha1");
for (const f of staticFiles.sort()) hash.update(f);
hash.update(routes.join("|"));
const version = `bali-${hash.digest("hex").slice(0, 10)}`;

// ── 6. Подстановка в шаблон ───────────────────────────────────────────
const tpl = readFileSync(TEMPLATE, "utf8");
const sw = tpl
  .replace("__CACHE__", version)
  .replace("__ASSETS__", JSON.stringify(precacheAssets, null, 2))
  .replace("__ROUTES__", JSON.stringify(routes, null, 2))
  .replace("__EXTERNAL__", JSON.stringify(external, null, 2))
  .replace("__TILES__", JSON.stringify(tileUrls, null, 2));

writeFileSync(OUT, sw);

console.log(
  `[gen-sw] ${version}\n` +
    `  ассетов: ${precacheAssets.length}\n` +
    `  роутов:  ${routes.length} (локаций: ${slugs.length})\n` +
    `  тайлов:  ${tileUrls.length}\n` +
    `  → ${OUT}`
);
