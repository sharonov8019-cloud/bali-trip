"use client";
import { useEffect, useState } from "react";

/**
 * Ненавязчивый тост о статусе офлайн-кеша.
 * Service worker шлёт сообщения precache-start / precache-done — показываем их,
 * чтобы было видно: «гид сохранён, можно без интернета».
 */
export default function OfflineReady() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const onMsg = (e: MessageEvent) => {
      const data = e.data;
      if (!data || data.source !== "bali-sw") return;

      const firstTime = !localStorage.getItem("bali-offline-ready");

      if (data.type === "precache-start" && firstTime) {
        setMsg("⏳ Сохраняю гид для офлайна…");
      }
      if (data.type === "precache-done") {
        localStorage.setItem("bali-offline-ready", "1");
        setMsg("✓ Готово — работает без интернета");
        window.setTimeout(() => setMsg(null), 3500);
      }
    };

    navigator.serviceWorker.addEventListener("message", onMsg);
    return () => navigator.serviceWorker.removeEventListener("message", onMsg);
  }, []);

  if (!msg) return null;

  return (
    <div
      className="fixed top-3 left-1/2 -translate-x-1/2 z-[60] px-4 py-2 rounded-full
                 bg-jungle text-white text-sm font-semibold shadow-card
                 max-w-[92vw] text-center safe-top"
      role="status"
    >
      {msg}
    </div>
  );
}
