import type { RouteDay, RouteStop } from "@/lib/types";
import { mapsSearchUrl } from "@/lib/maps";

export default function RouteDayCard({ day }: { day: RouteDay }) {
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      {/* Шапка дня */}
      <div className="bg-jungle/10 px-3 py-2.5 border-b border-jungle/15">
        <div className="flex items-center gap-2">
          <span className="text-xl">{day.emoji}</span>
          <span className="font-semibold text-ink leading-tight">{day.title}</span>
          <span className="text-xs text-ink2 ml-auto whitespace-nowrap">{day.hours}</span>
        </div>
        {day.subtitle && (
          <div className="text-xs text-ink2 mt-0.5 ml-7">{day.subtitle}</div>
        )}
      </div>

      {/* Список точек */}
      <div className="px-3 py-2">
        {day.stops.map((stop, i) => (
          <RouteStopRow key={i} stop={stop} isLast={i === day.stops.length - 1} />
        ))}
      </div>
    </div>
  );
}

function RouteStopRow({ stop, isLast }: { stop: RouteStop; isLast: boolean }) {
  const href = stop.mapUrl ?? (stop.mapQuery ? mapsSearchUrl(stop.mapQuery) : null);
  const hasLink = Boolean(href);

  return (
    <div className={`flex gap-3 py-2 ${!isLast ? "border-b border-line" : ""}`}>
      {/* Время */}
      <div className="text-xs font-semibold text-ink2 w-12 flex-shrink-0 pt-0.5 tabular-nums">
        {stop.time ?? ""}
      </div>

      {/* Контент */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          {stop.emoji && <span className="text-base leading-none">{stop.emoji}</span>}
          {hasLink ? (
            <a
              href={href!}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink leading-snug underline decoration-jungle/30 underline-offset-2 hover:decoration-jungle"
            >
              {stop.name}
            </a>
          ) : (
            <span className="font-semibold text-ink leading-snug">{stop.name}</span>
          )}
        </div>

        {/* Чипсы (длительность, цена) */}
        {(stop.duration || stop.cost) && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {stop.duration && (
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-ocean/10 text-ocean rounded">
                ⏱ {stop.duration}
              </span>
            )}
            {stop.cost && (
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-gold/15 text-[#8a6a1e] rounded">
                💰 {stop.cost}
              </span>
            )}
          </div>
        )}

        {/* Описание */}
        {stop.desc && (
          <div className="text-sm text-ink2 mt-1 leading-snug">{stop.desc}</div>
        )}
      </div>
    </div>
  );
}
