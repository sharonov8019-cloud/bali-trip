import Link from "next/link";
import type { Place } from "@/lib/types";

const colorMap: Record<string, string> = {
  jungle: "from-jungle to-[#4CA37A]",
  ocean: "from-ocean to-[#4A95B8]",
  sunset: "from-sunset to-[#F0955F]",
};

export default function PlaceCard({ place, index }: { place: Place; index: number }) {
  const grad = colorMap[place.color] ?? "from-jungle to-[#4CA37A]";
  return (
    <Link
      href={`/place/${place.slug}`}
      className="block rounded-2xl overflow-hidden shadow-card bg-white active:scale-[0.99] transition-transform"
    >
      <div className={`bg-gradient-to-br ${grad} p-4 text-white`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs opacity-80">Этап {index + 1}</div>
            <div className="text-2xl font-bold mt-0.5">
              {place.emoji} {place.name}
            </div>
            <div className="text-sm opacity-90 mt-0.5">{place.dates}</div>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-80">ночей</div>
            <div className="text-3xl font-bold leading-none">{place.nights}</div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="text-sm text-ink leading-snug">{place.summary}</div>
        <div className="flex items-center gap-3 mt-2 text-xs text-ink2">
          <span>📍 {place.spots.length} мест</span>
          <span>🍽 {place.cafes.length} кафе</span>
        </div>
      </div>
    </Link>
  );
}
