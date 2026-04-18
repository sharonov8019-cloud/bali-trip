import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { PLACES, TRIP_META } from "@/lib/data";

export default function HomePage() {
  const totalSpots = PLACES.reduce((a, p) => a + p.spots.length, 0);
  const totalCafes = PLACES.reduce((a, p) => a + p.cafes.length, 0);

  return (
    <div className="px-4 pt-6 pb-6">
      {/* Шапка */}
      <header className="mb-5">
        <div className="text-xs uppercase tracking-widest text-jungle font-semibold">
          Тур по острову
        </div>
        <h1 className="text-3xl font-bold mt-1">Бали 2026</h1>
        <div className="text-sm text-ink2 mt-1">
          {TRIP_META.start} — {TRIP_META.end} · {TRIP_META.totalNights} ночей
        </div>
      </header>

      {/* Сводка */}
      <section className="grid grid-cols-3 gap-2 mb-5">
        <div className="bg-white rounded-xl p-3 shadow-card text-center">
          <div className="text-2xl font-bold text-jungle">{PLACES.length}</div>
          <div className="text-xs text-ink2">локаций</div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-card text-center">
          <div className="text-2xl font-bold text-ocean">{totalSpots}</div>
          <div className="text-xs text-ink2">мест</div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-card text-center">
          <div className="text-2xl font-bold text-sunset">{totalCafes}</div>
          <div className="text-xs text-ink2">кафе</div>
        </div>
      </section>

      {/* CTA карта */}
      <Link
        href="/map"
        className="block bg-gradient-to-br from-ocean to-[#4A95B8] rounded-2xl p-4 text-white shadow-card mb-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest opacity-80">Маршрут</div>
            <div className="text-lg font-bold mt-0.5">Весь маршрут на карте</div>
            <div className="text-xs opacity-90 mt-0.5">Google Maps, 9 точек, против часовой</div>
          </div>
          <div className="text-4xl">🗺</div>
        </div>
      </Link>

      {/* Лента локаций */}
      <section>
        <div className="text-xs uppercase tracking-widest text-ink2 font-semibold mb-3">
          Локации по порядку
        </div>
        <div className="space-y-3">
          {PLACES.map((place, i) => (
            <PlaceCard key={place.slug} place={place} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
