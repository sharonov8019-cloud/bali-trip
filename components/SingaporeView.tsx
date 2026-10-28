import RouteDayCard from "@/components/RouteDayCard";
import { SG_DAYS, SG_HOTEL, SG_META, SG_TRANSPORT } from "@/lib/singapore";

export default function SingaporeView() {
  return (
    <div>
      {/* Шапка */}
      <header className="mb-5">
        <div className="text-xs uppercase tracking-widest text-ocean font-semibold">
          Город-государство
        </div>
        <h1 className="text-3xl font-bold mt-1">Сингапур 2026</h1>
        <div className="text-sm text-ink2 mt-1">
          {SG_META.start} — {SG_META.end} · {SG_META.fullDays} полных дня
        </div>
      </header>

      {/* База — отель */}
      <a
        href={SG_HOTEL.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="block bg-gradient-to-br from-ocean to-[#4A95B8] rounded-2xl p-4 text-white shadow-card mb-3"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-widest opacity-80">База · отель</div>
            <div className="text-lg font-bold mt-0.5">{SG_HOTEL.name}</div>
            <div className="text-xs opacity-90 mt-0.5">{SG_HOTEL.address}</div>
            <div className="text-xs opacity-90 mt-0.5">{SG_HOTEL.note}</div>
          </div>
          <div className="text-3xl">🏨</div>
        </div>
      </a>

      {/* Транспорт */}
      <section className="bg-white rounded-xl p-4 shadow-card mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xl">{SG_TRANSPORT.emoji}</span>
          <span className="font-semibold text-ink">{SG_TRANSPORT.title}</span>
        </div>
        <div className="text-sm text-ink2 leading-snug">{SG_TRANSPORT.summary}</div>
        <ul className="mt-2 space-y-1">
          {SG_TRANSPORT.notes.map((n, i) => (
            <li key={i} className="text-xs text-ink2 flex gap-1.5 leading-snug">
              <span className="text-ocean">•</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* План по дням */}
      <section>
        <div className="text-xs uppercase tracking-widest text-ink2 font-semibold mb-3">
          План по дням
        </div>
        <div className="space-y-3">
          {SG_DAYS.map((day, i) => (
            <RouteDayCard key={i} day={day} />
          ))}
        </div>
      </section>
    </div>
  );
}
