"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Маршрут", icon: "🗺" },
  { href: "/map", label: "Карта", icon: "📍" },
  { href: "/today", label: "Сегодня", icon: "📅" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-line z-50 safe-bottom">
      <div className="max-w-2xl mx-auto flex">
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 py-3 flex flex-col items-center gap-0.5 text-xs transition-colors ${
                active ? "text-jungle font-semibold" : "text-ink2"
              }`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
