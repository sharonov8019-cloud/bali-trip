export type Price = "$" | "$$" | "$$$";

export interface Spot {
  name: string;
  desc: string;
  mapQuery: string; // строка для поиска в Google Maps (fallback)
  mapUrl?: string;  // прямая короткая ссылка maps.app.goo.gl/... (если есть — приоритет над mapQuery)
  tag?: string;     // храм / водопад / вода / спа/сауна / бар / другое
  time?: string;    // когда лучше идти
  cost?: string;    // вход, цена
  rating?: number;  // Google Maps rating (например 4.7)
  reviews?: number; // количество отзывов (например 2800)
}

export interface Cafe {
  name: string;
  price: Price;
  kitchen: string;    // кухня / стиль
  desc: string;       // короткое описание + ключевые блюда/цены
  mapQuery: string;
  rating?: number;    // Google Maps rating (например 4.6)
  reviews?: number;   // количество отзывов (например 2800)
  instagram?: string;
  menuUrl?: string;
}

export interface DayItem {
  time?: string;
  text: string;
  emoji?: string;
  highlight?: boolean;
}

export interface Day {
  date: string;          // "9 июня"
  weekday: string;       // "вт"
  title?: string;        // "Приезд в Убуд"
  items: DayItem[];
  isWeekend?: boolean;
}

export type WorkspaceType = "Коворкинг" | "Кафе-коворкинг" | "Кафе с wifi";

export interface Workspace {
  name: string;
  type: WorkspaceType;
  equipment: string;  // "Быстрый wifi, розетки, AC" — короткое описание условий
  desc: string;       // что внутри, часы работы, цена
  mapQuery: string;
  rating?: number;
  reviews?: number;
  price?: string;     // "150k IDR/день" или "бесплатно" или средний чек
}

export interface Hotel {
  name: string;            // "Ubud Jungle Stay - Mahari"
  mapUrl: string;          // ссылка на Google Maps (короткая maps.app.goo.gl/...)
  bookingUrl: string;      // ссылка на бронь (Booking / Airbnb)
  bookingProvider: "Booking" | "Airbnb"; // для иконки/цвета кнопки
  nights?: string;         // "ночи 1–2" если в локации несколько отелей
}

export interface RouteStop {
  time?: string;       // "10:00" или "10:00 → 14:00" для длинных интервалов
  emoji?: string;      // эмодзи рядом с временем (например 🛵, 💦, 🌾)
  name: string;        // "Suwat Waterfall"
  desc?: string;       // короткое пояснение, что делаем
  mapUrl?: string;     // прямая ссылка maps.app.goo.gl/...
  mapQuery?: string;   // строка для поиска в Maps (fallback)
  duration?: string;   // "1.5 ч"
  cost?: string;       // "20k IDR" / "минимум 350k"
}

export interface RouteDay {
  title: string;       // "Будний день" / "Пятница" / "Суббота"
  emoji: string;       // "🐒" / "💦" / "🌅"
  hours: string;       // "10:00 → 14:00"
  subtitle?: string;   // "после церемонии" / "полный день"
  stops: RouteStop[];
}

export interface Place {
  slug: string;
  name: string;
  nights: number;
  dates: string;         // "9–13 июня"
  summary: string;
  emoji: string;
  color: string;         // tailwind class hint
  hotels: Hotel[];       // забронированные отели в локации (может быть несколько)
  arriveFrom?: string;   // slug предыдущей локации (для отображения "откуда приехали")
  spots: Spot[];
  cafes: Cafe[];
  workspaces: Workspace[];
  workNote?: string;
  days: Day[];
  routes?: RouteDay[];   // маршруты по дням (вкладка «Маршрут»)
}
