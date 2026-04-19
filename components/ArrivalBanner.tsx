import routeGeometry from "@/lib/route-geometry.json";

type Seg = {
  from: string;
  to: string;
  fromName: string;
  toName: string;
  distanceKm: number;
  durationMin: number;
};

function fmtDuration(min: number): string {
  if (min < 60) return `${min} мин`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} ч` : `${h} ч ${m} мин`;
}

// Находит все сегменты которые приводят в данную локацию.
// Для Мундука (munduk1 → munduk2) возвращает комбинированный сегмент.
function findArrivalSegments(toSlug: string): Seg[] {
  const segs = routeGeometry.segments as Seg[];
  // Мундук: сначала pemuteran→munduk1, потом munduk1→munduk2
  if (toSlug === "munduk") {
    return segs.filter((s) => s.to === "munduk1" || s.to === "munduk2");
  }
  // Букит: munduk2→bukit (через Джатилувих)
  if (toSlug === "bukit") {
    return segs.filter((s) => s.to === "bukit");
  }
  return segs.filter((s) => s.to === toSlug);
}

export default function ArrivalBanner({ toSlug }: { toSlug: string }) {
  const segs = findArrivalSegments(toSlug);
  if (segs.length === 0) return null;

  const totalKm = segs.reduce((a, s) => a + s.distanceKm, 0);
  const totalMin = segs.reduce((a, s) => a + s.durationMin, 0);

  return (
    <div className="bg-white/90 rounded-xl p-3 shadow-card text-ink">
      <div className="text-[10px] uppercase tracking-wider text-ink2 font-semibold">
        🛵 Как добираться
      </div>
      <div className="mt-1.5 space-y-1">
        {segs.map((s, i) => (
          <div key={i} className="text-sm leading-snug">
            <span className="text-ink2">{s.fromName}</span>
            <span className="text-ink2 mx-1.5">→</span>
            <span className="font-semibold">{s.toName}</span>
            <span className="text-ink2 ml-2 text-xs">
              {s.distanceKm} км · {fmtDuration(s.durationMin)}
            </span>
          </div>
        ))}
        {segs.length > 1 && (
          <div className="text-xs text-ink2 pt-1 border-t border-line mt-1.5">
            Итого: <span className="font-semibold text-ink">{totalKm.toFixed(1)} км · {fmtDuration(totalMin)}</span>
          </div>
        )}
      </div>
      {toSlug === "bukit" && (
        <div className="text-[11px] text-ink2 mt-2">
          🌾 По пути — остановка в Джатилувих (UNESCO рисовые террасы), ~1–2 часа.
        </div>
      )}
    </div>
  );
}
