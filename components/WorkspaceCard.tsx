import type { Workspace } from "@/lib/types";
import { mapsSearchUrl } from "@/lib/maps";

const typeColor: Record<string, string> = {
  "Коворкинг": "bg-jungle/15 text-jungle",
  "Кафе-коворкинг": "bg-ocean/15 text-ocean",
  "Кафе с wifi": "bg-gold/20 text-[#8a6a1e]",
};

function formatReviews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return `${n}`;
}

export default function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-card">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold text-ink leading-tight">{workspace.name}</span>
        <span className={`text-[10px] uppercase tracking-wide font-bold px-1.5 py-0.5 rounded ${typeColor[workspace.type] ?? "bg-jungle/10 text-jungle"}`}>
          💻 {workspace.type}
        </span>
        {workspace.rating !== undefined && (
          <span className="text-xs font-semibold text-[#8a6a1e] bg-gold/15 px-1.5 py-0.5 rounded">
            ★ {workspace.rating}
            {workspace.reviews !== undefined && (
              <span className="text-ink2 font-normal ml-1">({formatReviews(workspace.reviews)})</span>
            )}
          </span>
        )}
      </div>
      <div className="text-xs text-ink2 mt-1">{workspace.equipment}</div>
      <div className="text-sm text-ink mt-1 leading-snug">{workspace.desc}</div>
      {workspace.price && (
        <div className="text-xs text-ink2 mt-1">
          💰 <span className="font-medium text-ink">{workspace.price}</span>
        </div>
      )}
      <a
        href={mapsSearchUrl(workspace.mapQuery)}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-xs text-ocean font-semibold"
      >
        📍 Открыть в Google Maps →
      </a>
    </div>
  );
}
