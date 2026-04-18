import Link from "next/link";
import { PLACES } from "@/lib/data";
import DayItemRow from "@/components/DayItemRow";

// Соответствие даты локации (из dates "9–13 июня" -> диапазон)
// Упрощённый подход: ищем все дни и определяем "сегодня" в контексте тура.
// Для демо показываем все дни списком с группировкой по локациям.

export default function TodayPage() {
  const allDays = PLACES.flatMap((p) =>
    p.days.map((d) => ({ ...d, placeSlug: p.slug, placeName: p.name, placeEmoji: p.emoji }))
  );

  const today = new Date();
  const isTripDay = today >= new Date("2026-06-09") && today <= new Date("2026-07-08");

  return (
    <div className="pb-6">
      <header className="px-4 pt-6 pb-3">
        <h1 className="text-3xl font-bold">📅 Таймлайн</h1>
        <div className="text-sm text-ink2 mt-1">
          {isTripDay ? "Сейчас в туре" : "До старта: " + daysUntil() + " дн."}
        </div>
      </header>

      <div className="px-4 space-y-3">
        {allDays.map((day, i) => (
          <div
            key={`${day.placeSlug}-${day.date}`}
            className={`rounded-xl p-3 shadow-card ${
              day.isWeekend ? "bg-gold/10 border border-gold/30" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{day.date}</span>
                <span className="text-xs text-ink2 uppercase">{day.weekday}</span>
                {day.isWeekend && (
                  <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-gold/30 text-[#6e5410] rounded">
                    🎯
                  </span>
                )}
              </div>
              <Link
                href={`/place/${day.placeSlug}`}
                className="text-xs text-jungle font-semibold"
              >
                {day.placeEmoji} {day.placeName} →
              </Link>
            </div>
            {day.title && (
              <div className="text-sm font-semibold text-ink mb-1">{day.title}</div>
            )}
            <div>
              {day.items.map((it, j) => (
                <DayItemRow key={j} item={it} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function daysUntil() {
  const start = new Date("2026-06-09");
  const now = new Date();
  return Math.max(0, Math.floor((start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
}
