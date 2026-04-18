import type { DayItem } from "@/lib/types";

export default function DayItemRow({ item }: { item: DayItem }) {
  return (
    <div className={`flex gap-3 py-1.5 ${item.highlight ? "font-semibold" : ""}`}>
      <div className="w-14 shrink-0 text-xs text-ink2 tabular-nums pt-0.5">
        {item.time || ""}
      </div>
      <div className="flex-1 text-sm text-ink leading-snug">
        {item.emoji && <span className="mr-1">{item.emoji}</span>}
        {item.text}
      </div>
    </div>
  );
}
