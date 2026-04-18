import Link from "next/link";
import { PLACES, ROUTE_POINTS } from "@/lib/data";
import { mapsDirectionsUrl, mapsSearchUrl } from "@/lib/maps";
import RouteMap from "@/components/RouteMap";
import routeGeometry from "@/lib/route-geometry.json";

export default function MapPage() {
  const dirUrl = mapsDirectionsUrl(ROUTE_POINTS);

  return (
    <div className="pb-6">
      <header className="px-4 pt-6 pb-3">
        <Link href="/" className="text-sm text-ink2">
          ← Маршрут
        </Link>
        <h1 className="text-3xl font-bold mt-2">🗺 Карта маршрута</h1>
        <div className="text-sm text-ink2 mt-1">
          9 точек по острову, против часовой стрелки
        </div>
        <div className="flex gap-2 mt-3 text-xs">
          <span className="bg-jungle/10 text-jungle font-semibold px-2 py-1 rounded">
            🛵 {routeGeometry.distanceKm} км
          </span>
          <span className="bg-ocean/10 text-ocean font-semibold px-2 py-1 rounded">
            ⏱ {routeGeometry.durationHours} ч в пути
          </span>
          <span className="bg-sunset/10 text-sunset font-semibold px-2 py-1 rounded">
            📍 {PLACES.length} точек
          </span>
        </div>
      </header>

      {/* Карта с маршрутом */}
      <div className="px-4">
        <RouteMap />

        <a
          href={dirUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 block bg-ocean text-white rounded-xl py-3 text-center font-semibold shadow-card"
        >
          🧭 Построить маршрут в Google Maps
        </a>
        <div className="text-[11px] text-ink2 text-center mt-1.5 px-4">
          Откроет приложение Google Maps с навигацией через все 9 точек
        </div>
      </div>

      {/* Список точек с прямыми ссылками */}
      <section className="px-4 mt-6">
        <div className="text-xs uppercase tracking-widest text-ink2 font-semibold mb-2">
          Точки маршрута
        </div>
        <div className="bg-white rounded-xl shadow-card divide-y divide-line">
          {PLACES.map((place, i) => (
            <div key={place.slug} className="flex items-center gap-3 p-3">
              <div className="w-8 h-8 rounded-full bg-jungle/10 text-jungle font-bold flex items-center justify-center text-sm shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-ink">
                  {place.emoji} {place.name}
                </div>
                <div className="text-xs text-ink2">
                  {place.dates} · {place.nights} ночей
                </div>
              </div>
              <a
                href={mapsSearchUrl(`${place.name} Bali`)}
                target="_blank"
                rel="noreferrer"
                className="text-ocean text-sm font-semibold"
              >
                📍
              </a>
              <Link
                href={`/place/${place.slug}`}
                className="text-jungle text-sm font-semibold"
              >
                →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
