import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlace, PLACES } from "@/lib/data";
import SpotCard from "@/components/SpotCard";
import CafeCard from "@/components/CafeCard";
import WorkspaceCard from "@/components/WorkspaceCard";
import HotelCard from "@/components/HotelCard";
import ArrivalBanner from "@/components/ArrivalBanner";
import DayItemRow from "@/components/DayItemRow";
import { mapsSearchUrl } from "@/lib/maps";

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

const gradMap: Record<string, string> = {
  jungle: "from-jungle to-[#4CA37A]",
  ocean: "from-ocean to-[#4A95B8]",
  sunset: "from-sunset to-[#F0955F]",
};

type Tab = "plan" | "spots" | "cafes" | "work";

export default async function PlacePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { slug } = await params;
  const { tab } = await searchParams;
  const place = getPlace(slug);
  if (!place) notFound();

  const currentTab: Tab = (tab as Tab) ?? "plan";
  const grad = gradMap[place.color] ?? gradMap.jungle;

  return (
    <div className="pb-6">
      {/* Шапка с градиентом */}
      <header className={`bg-gradient-to-br ${grad} px-4 pt-6 pb-6 text-white`}>
        <div className="flex items-center justify-between mb-3">
          <Link href="/" className="text-sm opacity-90">
            ← Маршрут
          </Link>
          <a
            href={mapsSearchUrl(`${place.name} Bali`)}
            target="_blank"
            rel="noreferrer"
            className="text-sm opacity-90"
          >
            📍 На карте
          </a>
        </div>
        <div className="text-3xl font-bold">
          {place.emoji} {place.name}
        </div>
        <div className="flex items-center gap-3 mt-1 text-sm opacity-90">
          <span>{place.dates}</span>
          <span>·</span>
          <span>{place.nights} ночей</span>
        </div>
        <div className="text-sm mt-2 opacity-95">{place.summary}</div>
      </header>

      {/* Отель(и) + как добираться */}
      <div className="px-4 pt-4 space-y-2.5">
        {place.hotels.map((h) => (
          <HotelCard key={h.name} hotel={h} />
        ))}
        {place.arriveFrom && <ArrivalBanner toSlug={place.slug} />}
      </div>

      {/* Вкладки */}
      <div className="sticky top-0 z-10 bg-bg/95 backdrop-blur border-b border-line">
        <div className="flex px-2 noscrollbar overflow-x-auto">
          <TabLink slug={slug} tab="plan" current={currentTab} label="План" count={place.days.length} />
          <TabLink slug={slug} tab="spots" current={currentTab} label="Места" count={place.spots.length} />
          <TabLink slug={slug} tab="cafes" current={currentTab} label="Кафе" count={place.cafes.length} />
          <TabLink slug={slug} tab="work" current={currentTab} label="💻 Работа" count={place.workspaces.length} />
        </div>
      </div>

      <div className="px-4 pt-4">
        {currentTab === "plan" && (
          <div className="space-y-3">
            {place.days.map((day) => (
              <div
                key={day.date}
                className={`rounded-xl p-3 shadow-card ${
                  day.isWeekend ? "bg-gold/10 border border-gold/30" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-semibold text-ink">
                    {day.date}
                    <span className="text-xs text-ink2 ml-2 uppercase">{day.weekday}</span>
                    {day.isWeekend && (
                      <span className="ml-2 text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-gold/30 text-[#6e5410] rounded">
                        🎯 Выходной
                      </span>
                    )}
                  </div>
                </div>
                {day.title && (
                  <div className="text-sm font-semibold text-ink mb-1">{day.title}</div>
                )}
                <div>
                  {day.items.map((it, i) => (
                    <DayItemRow key={i} item={it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {currentTab === "spots" && (
          <div className="space-y-2.5">
            {place.spots.map((s) => (
              <SpotCard key={s.name} spot={s} />
            ))}
          </div>
        )}

        {currentTab === "cafes" && (
          <div className="space-y-2.5">
            {place.cafes.map((c) => (
              <CafeCard key={c.name} cafe={c} />
            ))}
          </div>
        )}

        {currentTab === "work" && (
          <div className="space-y-2.5">
            {place.workNote && (
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-3 text-sm text-[#6e5410] leading-snug">
                ℹ️ {place.workNote}
              </div>
            )}
            {place.workspaces.length === 0 && !place.workNote && (
              <div className="bg-white rounded-xl p-4 text-sm text-ink2 text-center">
                В этой локации нет специальных мест для работы. Работай из отеля.
              </div>
            )}
            {place.workspaces.map((w) => (
              <WorkspaceCard key={w.name} workspace={w} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TabLink({
  slug,
  tab,
  current,
  label,
  count,
}: {
  slug: string;
  tab: Tab;
  current: Tab;
  label: string;
  count: number;
}) {
  const active = tab === current;
  return (
    <Link
      href={`/place/${slug}?tab=${tab}`}
      scroll={false}
      className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-colors ${
        active ? "border-jungle text-jungle" : "border-transparent text-ink2"
      }`}
    >
      {label}{" "}
      <span className={`text-xs ${active ? "text-jungle" : "text-ink2"}`}>({count})</span>
    </Link>
  );
}
