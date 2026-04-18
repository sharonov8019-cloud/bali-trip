import type { Cafe } from "@/lib/types";
import { mapsSearchUrl } from "@/lib/maps";

const priceColor: Record<string, string> = {
  "$": "bg-jungle/10 text-jungle",
  "$$": "bg-ocean/10 text-ocean",
  "$$$": "bg-sunset/10 text-sunset",
};

export default function CafeCard({ cafe }: { cafe: Cafe }) {
  const mapUrl = mapsSearchUrl(cafe.mapQuery);
  // "Меню" — открываем Google Maps place, где видны фото блюд и цены/отзывы
  const menuUrl = cafe.menuUrl ?? `${mapUrl}`;
  return (
    <div className="bg-white rounded-xl p-3 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-ink leading-tight">{cafe.name}</span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${priceColor[cafe.price]}`}>
              {cafe.price}
            </span>
          </div>
          <div className="text-xs text-ink2 mt-0.5">{cafe.kitchen}</div>
          <div className="text-sm text-ink mt-1 leading-snug">{cafe.desc}</div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-xs text-ocean font-semibold py-1.5 bg-ocean/10 rounded-lg text-center"
        >
          📍 На карте
        </a>
        <a
          href={menuUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-xs text-sunset font-semibold py-1.5 bg-sunset/10 rounded-lg text-center"
        >
          📖 Меню и фото
        </a>
      </div>
    </div>
  );
}
