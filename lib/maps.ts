// Хелперы для Google Maps ссылок

export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Ссылка для построения маршрута через все waypoints */
export function mapsDirectionsUrl(points: string[]): string {
  if (points.length < 2) return mapsSearchUrl(points[0] ?? "Bali");
  const origin = encodeURIComponent(points[0]);
  const destination = encodeURIComponent(points[points.length - 1]);
  const waypoints = points
    .slice(1, -1)
    .map((p) => encodeURIComponent(p))
    .join("|");
  const wp = waypoints ? `&waypoints=${waypoints}` : "";
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${wp}&travelmode=driving`;
}

/** Embed URL для iframe (без API key, через public embed) */
export function mapsEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

/** Embed с маршрутом через saddr/daddr (через несколько точек) */
export function mapsEmbedDirections(points: string[]): string {
  if (points.length < 2) return mapsEmbedUrl(points[0] ?? "Bali");
  const saddr = encodeURIComponent(points[0]);
  const daddr = points.slice(1).map(encodeURIComponent).join("+to:");
  return `https://maps.google.com/maps?saddr=${saddr}&daddr=${daddr}&ie=UTF8&t=&z=10&output=embed`;
}

/**
 * OpenStreetMap embed iframe — работает без ключа и без X-Frame блокировок.
 * bbox формат: west,south,east,north
 */
export function osmEmbedUrl(bbox: string, markerLatLon?: string): string {
  const m = markerLatLon ? `&marker=${markerLatLon}` : "";
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik${m}`;
}
