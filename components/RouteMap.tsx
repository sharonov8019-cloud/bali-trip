"use client";
import { useEffect, useRef } from "react";
import { PLACES, PLACE_COORDS } from "@/lib/data";
import routeGeometry from "@/lib/route-geometry.json";

// Leaflet через CDN — не тянем в бандл лишний пакет
const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

declare global {
  interface Window {
    L?: any;
    __leafletLoading?: Promise<any>;
  }
}

function loadLeaflet(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject("ssr");
  if (window.L) return Promise.resolve(window.L);
  if (window.__leafletLoading) return window.__leafletLoading;
  window.__leafletLoading = new Promise((resolve, reject) => {
    // CSS
    if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = LEAFLET_CSS;
      document.head.appendChild(link);
    }
    // JS
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${LEAFLET_JS}"]`);
    const script = existing ?? document.createElement("script");
    script.src = LEAFLET_JS;
    script.async = true;
    script.onload = () => resolve(window.L);
    script.onerror = () => reject(new Error("leaflet load failed"));
    if (!existing) document.head.appendChild(script);
  });
  return window.__leafletLoading;
}

export default function RouteMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    loadLeaflet()
      .then((L) => {
        if (cancelled || !ref.current || mapRef.current) return;
        const map = L.map(ref.current, {
          zoomControl: true,
          scrollWheelZoom: false,
          attributionControl: true,
        });
        mapRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap",
          maxZoom: 19,
        }).addTo(map);

        const order = PLACES.map((p) => p.slug);
        const latlngs = order.map((slug) => {
          const c = PLACE_COORDS[slug];
          return [c.lat, c.lon] as [number, number];
        });

        // Реальный маршрут по дорогам (OSRM geometry, preсчитан при сборке)
        const routePts = routeGeometry.points as [number, number][];
        L.polyline(routePts, {
          color: "#E0653A",
          weight: 4,
          opacity: 0.9,
        }).addTo(map);

        // Пины с номерами
        PLACES.forEach((place, i) => {
          const c = PLACE_COORDS[place.slug];
          const icon = L.divIcon({
            className: "",
            html: `<div style="
              width:30px;height:30px;border-radius:50%;
              background:#fff;border:3px solid #2F6F4F;
              display:flex;align-items:center;justify-content:center;
              font-weight:700;color:#2F6F4F;font-size:13px;
              box-shadow:0 2px 6px rgba(0,0,0,0.25);
            ">${i + 1}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });
          L.marker([c.lat, c.lon], { icon })
            .addTo(map)
            .bindPopup(`<b>${place.emoji} ${place.name}</b><br>${place.dates} · ${place.nights} ноч.`);
        });

        // Вписать все точки
        const bounds = L.latLngBounds(latlngs);
        map.fitBounds(bounds, { padding: [12, 12], maxZoom: 11 });
      })
      .catch(() => {
        // тихо игнорируем — показывается fallback текст
      });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="relative bg-[#aad3df] rounded-xl overflow-hidden shadow-card"
      style={{ aspectRatio: "3 / 2" }}
    >
      <div ref={ref} style={{ position: "absolute", inset: 0 }} />
    </div>
  );
}
