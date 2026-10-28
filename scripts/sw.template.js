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

const CACHE = "__CACHE__";

// Неизменяемая статика билда (точные пути с хешами — генерируются при сборке)
const PRECACHE_ASSETS = __ASSETS__;

// HTML-страницы приложения: главная, карта, таймлайн, все локации и их вкладки
const PRECACHE_ROUTES = __ROUTES__;

// Внешние ресурсы карты (Leaflet с CDN)
const EXTERNAL_ASSETS = __EXTERNAL__;

// Обзорные тайлы карты Бали (низкие зумы) — чтобы карта-обзор открывалась офлайн
const TILE_URLS = __TILES__;

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
