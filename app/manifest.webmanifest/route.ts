import { NextResponse } from "next/server";

export function GET() {
  const manifest = {
    name: "Бали 2026",
    short_name: "Бали",
    description: "Маршрут по Бали: 29 ночей, места, кафе и карта",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EE",
    theme_color: "#2F6F4F",
    orientation: "portrait",
    lang: "ru",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
    ],
  };
  return NextResponse.json(manifest, {
    headers: { "Content-Type": "application/manifest+json" },
  });
}
