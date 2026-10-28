import type { Spot } from "@/lib/types";
import { mapsSearchUrl } from "@/lib/maps";

function formatReviews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return `${n}`;
}

export default function SpotCard({ spot }: { spot: Spot }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-ink leading-tight">{spot.name}</span>
            {spot.rating !== undefined && (
              <span className="text-xs font-semibold text-[#8a6a1e] bg-gold/15 px-1.5 py-0.5 rounded">
                ★ {spot.rating}
                {spot.reviews !== undefined && (
                  <span className="text-ink2 font-normal ml-1">({formatReviews(spot.reviews)})</span>
                )}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {spot.tag && (
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-jungle/10 text-jungle rounded">
                {spot.tag}
              </span>
            )}
            {spot.time && (
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-ocean/10 text-ocean rounded">
                ⏰ {spot.time}
              </span>
            )}
            {spot.cost && (
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-gold/15 text-[#8a6a1e] rounded">
                💰 {spot.cost}
              </span>
            )}
          </div>
          <div className="text-sm text-ink2 mt-1.5 leading-snug space-y-2">
            {spot.desc.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
      <a
        href={spot.mapUrl ?? mapsSearchUrl(spot.mapQuery)}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-xs text-ocean font-semibold"
      >
        📍 Открыть в Google Maps →
      </a>
    </div>
  );
}
