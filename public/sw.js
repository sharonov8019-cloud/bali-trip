/*
 * Service worker гида по Бали — offline-first.
 * ВНИМАНИЕ: этот файл — шаблон. Реальный public/sw.js генерируется при сборке
 * скриптом scripts/gen-sw.mjs (он подставляет версию кеша, список ассетов,
 * роутов и обзорных тайлов карты). Руками public/sw.js не редактировать.
 *
 * Стратегии:
 *  - навигация (HTML страниц)      → stale-while-revalidate: мгновенно из кеша,
 *                                    свежак подтягивается в фоне. Это и даёт
 *                                    «открывается мгновенно даже при слабом интернете».
 *  - статика билда /_next, иконки  → cache-first (файлы неизменяемые, хеш в имени)
 *  - Leaflet (CDN) и тайлы OSM      → cache-first: что один раз загрузилось — лежит офлайн
 *  - всё прочее со своего домена    → stale-while-revalidate
 */

const CACHE = "bali-19378e98fb";

// Неизменяемая статика билда (точные пути с хешами — генерируются при сборке)
const PRECACHE_ASSETS = [
  "/_next/static/4hky4CfCVlvV_Oiavz6uo/_buildManifest.js",
  "/_next/static/4hky4CfCVlvV_Oiavz6uo/_clientMiddlewareManifest.js",
  "/_next/static/4hky4CfCVlvV_Oiavz6uo/_ssgManifest.js",
  "/_next/static/chunks/00gq-v0e07i1q.js",
  "/_next/static/chunks/01xlw8hd842-c.js",
  "/_next/static/chunks/0257pdz1-imal.js",
  "/_next/static/chunks/02fom~_-fdyeu.js",
  "/_next/static/chunks/03~yq9q893hmn.js",
  "/_next/static/chunks/0721j9wfpn9-..js",
  "/_next/static/chunks/0d3shmwh5_nmn.js",
  "/_next/static/chunks/0n~dq4kpx9xxx.js",
  "/_next/static/chunks/0ojdca_7sczw1.css",
  "/_next/static/chunks/0pqt~8bl3ukh4.js",
  "/_next/static/chunks/0ucda50~~fei-.js",
  "/_next/static/chunks/14ixwwdpm~qkz.js",
  "/_next/static/chunks/turbopack-184q9f1zvtbok.js",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// HTML-страницы приложения: главная, карта, таймлайн, все локации и их вкладки
const PRECACHE_ROUTES = [
  "/",
  "/map",
  "/today",
  "/place/ubud",
  "/place/ubud?tab=cafes",
  "/place/ubud?tab=work",
  "/place/sidemen",
  "/place/sidemen?tab=cafes",
  "/place/sidemen?tab=work",
  "/place/kintamani",
  "/place/kintamani?tab=cafes",
  "/place/kintamani?tab=work",
  "/place/amed",
  "/place/amed?tab=cafes",
  "/place/amed?tab=work",
  "/place/lovina",
  "/place/lovina?tab=cafes",
  "/place/lovina?tab=work",
  "/place/pemuteran",
  "/place/pemuteran?tab=cafes",
  "/place/pemuteran?tab=work",
  "/place/munduk",
  "/place/munduk?tab=cafes",
  "/place/munduk?tab=work",
  "/place/bukit",
  "/place/bukit?tab=cafes",
  "/place/bukit?tab=work"
];

// Внешние ресурсы карты (Leaflet с CDN)
const EXTERNAL_ASSETS = [
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

// Обзорные тайлы карты Бали (низкие зумы) — чтобы карта-обзор открывалась офлайн
const TILE_URLS = [
  "https://tile.openstreetmap.org/10/837/534.png",
  "https://tile.openstreetmap.org/10/837/535.png",
  "https://tile.openstreetmap.org/10/837/536.png",
  "https://tile.openstreetmap.org/10/837/537.png",
  "https://tile.openstreetmap.org/10/838/534.png",
  "https://tile.openstreetmap.org/10/838/535.png",
  "https://tile.openstreetmap.org/10/838/536.png",
  "https://tile.openstreetmap.org/10/838/537.png",
  "https://tile.openstreetmap.org/10/839/534.png",
  "https://tile.openstreetmap.org/10/839/535.png",
  "https://tile.openstreetmap.org/10/839/536.png",
  "https://tile.openstreetmap.org/10/839/537.png",
  "https://tile.openstreetmap.org/10/840/534.png",
  "https://tile.openstreetmap.org/10/840/535.png",
  "https://tile.openstreetmap.org/10/840/536.png",
  "https://tile.openstreetmap.org/10/840/537.png",
  "https://tile.openstreetmap.org/10/841/534.png",
  "https://tile.openstreetmap.org/10/841/535.png",
  "https://tile.openstreetmap.org/10/841/536.png",
  "https://tile.openstreetmap.org/10/841/537.png",
  "https://tile.openstreetmap.org/11/1675/1069.png",
  "https://tile.openstreetmap.org/11/1675/1070.png",
  "https://tile.openstreetmap.org/11/1675/1071.png",
  "https://tile.openstreetmap.org/11/1675/1072.png",
  "https://tile.openstreetmap.org/11/1675/1073.png",
  "https://tile.openstreetmap.org/11/1675/1074.png",
  "https://tile.openstreetmap.org/11/1676/1069.png",
  "https://tile.openstreetmap.org/11/1676/1070.png",
  "https://tile.openstreetmap.org/11/1676/1071.png",
  "https://tile.openstreetmap.org/11/1676/1072.png",
  "https://tile.openstreetmap.org/11/1676/1073.png",
  "https://tile.openstreetmap.org/11/1676/1074.png",
  "https://tile.openstreetmap.org/11/1677/1069.png",
  "https://tile.openstreetmap.org/11/1677/1070.png",
  "https://tile.openstreetmap.org/11/1677/1071.png",
  "https://tile.openstreetmap.org/11/1677/1072.png",
  "https://tile.openstreetmap.org/11/1677/1073.png",
  "https://tile.openstreetmap.org/11/1677/1074.png",
  "https://tile.openstreetmap.org/11/1678/1069.png",
  "https://tile.openstreetmap.org/11/1678/1070.png",
  "https://tile.openstreetmap.org/11/1678/1071.png",
  "https://tile.openstreetmap.org/11/1678/1072.png",
  "https://tile.openstreetmap.org/11/1678/1073.png",
  "https://tile.openstreetmap.org/11/1678/1074.png",
  "https://tile.openstreetmap.org/11/1679/1069.png",
  "https://tile.openstreetmap.org/11/1679/1070.png",
  "https://tile.openstreetmap.org/11/1679/1071.png",
  "https://tile.openstreetmap.org/11/1679/1072.png",
  "https://tile.openstreetmap.org/11/1679/1073.png",
  "https://tile.openstreetmap.org/11/1679/1074.png",
  "https://tile.openstreetmap.org/11/1680/1069.png",
  "https://tile.openstreetmap.org/11/1680/1070.png",
  "https://tile.openstreetmap.org/11/1680/1071.png",
  "https://tile.openstreetmap.org/11/1680/1072.png",
  "https://tile.openstreetmap.org/11/1680/1073.png",
  "https://tile.openstreetmap.org/11/1680/1074.png",
  "https://tile.openstreetmap.org/11/1681/1069.png",
  "https://tile.openstreetmap.org/11/1681/1070.png",
  "https://tile.openstreetmap.org/11/1681/1071.png",
  "https://tile.openstreetmap.org/11/1681/1072.png",
  "https://tile.openstreetmap.org/11/1681/1073.png",
  "https://tile.openstreetmap.org/11/1681/1074.png",
  "https://tile.openstreetmap.org/11/1682/1069.png",
  "https://tile.openstreetmap.org/11/1682/1070.png",
  "https://tile.openstreetmap.org/11/1682/1071.png",
  "https://tile.openstreetmap.org/11/1682/1072.png",
  "https://tile.openstreetmap.org/11/1682/1073.png",
  "https://tile.openstreetmap.org/11/1682/1074.png"
];

async function notify(type, extra) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true, type: "window" });
  for (const c of clients) c.postMessage({ source: "bali-sw", type, ...(extra || {}) });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await notify("precache-start");

      // Статика + страницы + Leaflet — толерантно, по одному.
      // Один недокачанный файл не должен обнулять весь офлайн-кеш.
      await Promise.allSettled(
        [...PRECACHE_ASSETS, ...PRECACHE_ROUTES, ...EXTERNAL_ASSETS].map(async (url) => {
          try {
            const res = await fetch(url, { credentials: "same-origin" });
            if (res.ok || res.type === "opaque") await cache.put(url, res.clone());
          } catch (_) {}
        })
      );

      // Приложение уже работает офлайн — сообщаем пользователю «готово»
      await notify("precache-done");

      // 3. Обзорные тайлы карты — самый низкий приоритет, докачиваются следом
      await Promise.allSettled(
        TILE_URLS.map(async (url) => {
          try {
            const res = await fetch(url, { mode: "no-cors" });
            await cache.put(url, res);
          } catch (_) {}
        })
      );

      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

function isTile(url) {
  return /(^|\.)tile\.openstreetmap\.org$/.test(url.hostname);
}
function isLeaflet(url) {
  return url.hostname === "unpkg.com";
}

// cache-first: сначала кеш, иначе сеть (и кладём в кеш)
function cacheFirst(request) {
  return caches.match(request).then((cached) => {
    if (cached) return cached;
    return fetch(request)
      .then((res) => {
        if (res && (res.ok || res.type === "opaque")) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
        }
        return res;
      })
      .catch(() => cached);
  });
}

// stale-while-revalidate: отдаём кеш сразу, в фоне обновляем
function staleWhileRevalidate(request, fallbackToRoot) {
  return caches.open(CACHE).then((cache) =>
    cache.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => {
          if (res && res.ok && res.type === "basic") cache.put(request, res.clone());
          return res;
        })
        .catch(() => cached || (fallbackToRoot ? cache.match("/") : undefined));
      return cached || network;
    })
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // API не трогаем
  if (url.pathname.startsWith("/api/")) return;

  // Карта: Leaflet и тайлы — cache-first (просмотренное остаётся офлайн)
  if (isLeaflet(url) || isTile(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Дальше — только свой домен
  if (url.origin !== self.location.origin) return;

  // Навигация по страницам — мгновенно из кеша, обновление в фоне
  if (request.mode === "navigate") {
    event.respondWith(staleWhileRevalidate(request, true));
    return;
  }

  // Неизменяемая статика билда и иконки — cache-first
  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/")) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Остальное со своего домена (manifest, RSC-запросы и т.п.) — SWR
  event.respondWith(staleWhileRevalidate(request, false));
});
