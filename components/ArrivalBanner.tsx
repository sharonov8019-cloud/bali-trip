import routeGeometry from "@/lib/route-geometry.json";

type Seg = {
  from: string;
  to: string;
  fromName: string;
  toName: string;
  distanceKm: number;
  durationMin: number;
  googleDrivingMin?: number;
  via?: string;
  viaMin?: number;
  viaKm?: number;
  afterMin?: number;
  afterKm?: number;
};

function fmtDuration(min: number): string {
  if (min < 60) return `${min} мин`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} ч` : `${h} ч ${m} мин`;
}

function findArrivalSegments(toSlug: string): Seg[] {
  const segs = routeGeometry.segments as Seg[];
  if (toSlug === "munduk") {
    return segs.filter((s) => s.to === "munduk1" || s.to === "munduk2");
  }
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
        🛵 Как добираться на мопеде
      </div>
      <div className="mt-1.5 space-y-2">
        {segs.map((s, i) => (
          <div key={i} className="text-sm leading-snug">
            <div>
              <span className="text-ink2">{s.fromName}</span>
              <span className="text-ink2 mx-1.5">→</span>
              <span className="font-semibold">{s.toName}</span>
            </div>
            <div className="text-xs text-ink2">
              {s.distanceKm} км · <span className="font-semibold text-ink">{fmtDuration(s.durationMin)}</span>
            </div>
            {s.via && s.viaMin && s.afterMin && (
              <div className="text-[11px] text-ink2 mt-0.5 pl-2 border-l-2 border-gold/40">
                Остановка в Джатилувих (UNESCO террасы, 1–2 ч):<br/>
                → {s.via}: {s.viaKm} км · {fmtDuration(s.viaMin)}<br/>
                → {s.toName}: {s.afterKm} км · {fmtDuration(s.afterMin)}
              </div>
            )}
          </div>
        ))}
        {segs.length > 1 && (
          <div className="text-xs text-ink2 pt-1 border-t border-line mt-1.5">
            Итого: <span className="font-semibold text-ink">{totalKm.toFixed(1)} км · {fmtDuration(totalMin)}</span>
          </div>
        )}
      </div>
      <div className="text-[10px] text-ink2 mt-2 italic">
        Данные Google Maps с поправкой −18% на мопед (2-wheeler)
      </div>
    </div>
  );
}
