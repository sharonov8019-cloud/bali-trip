import type { RouteDay } from "./types";

// Метаданные поездки в Сингапур
export const SG_META = {
  start: "среда",
  end: "суббота",
  fullDays: 3, // среда, четверг, пятница (+ суббота до вылета)
  travelers: 2,
};

// База — отель
export const SG_HOTEL = {
  name: "Hotel 81 - Gold",
  address: "20 Lor 20 Geylang, Singapore 398738",
  note: "Рядом MRT Aljunied, ~15 мин пешком",
  mapUrl: "https://maps.google.com/?cid=10928909690553131332",
  lat: 1.3119605,
  lon: 103.8811106,
};

// Транспорт по городу (система SimplyGo)
export const SG_TRANSPORT = {
  title: "Транспорт по городу",
  emoji: "🚇",
  summary:
    "Прикладывать контактную Visa/Mastercard или телефон (SimplyGo). Проездной НЕ нужен — окупается только при 6–8 поездках в день.",
  notes: [
    "За иностранную карту +S$0.60/день",
    "Карта без комиссии за конвертацию валют",
    "Вход и выход прикладывать одним и тем же устройством",
  ],
};

// План по дням. Переиспользуем структуру RouteDay из основного приложения.
export const SG_DAYS: RouteDay[] = [
  {
    title: "День 1 · Среда",
    emoji: "🌸",
    hours: "10:00 → ночь",
    subtitle: "Прилёт · отель · Gardens by the Bay · Marina Bay",
    stops: [
      {
        time: "10:00",
        emoji: "🛬",
        name: "Прилёт в Changi (T2)",
        desc: "Паспортный контроль, багаж, таможня — заложить ~1–1.5 ч. Jewel и водопад смотрим в субботу перед вылетом, сегодня едем в город.",
      },
      {
        time: "11:30",
        emoji: "🚇",
        name: "Трансфер в отель",
        desc: "Changi → MRT Aljunied, ~30 мин.",
      },
      {
        time: "12:00",
        emoji: "🏨",
        name: "Hotel 81 - Gold",
        desc: "Оставить вещи и освежиться. Ранний заезд не гарантирован — если номер не готов, сдать чемоданы на ресепшене (bag drop).",
        mapUrl: "https://maps.google.com/?cid=10928909690553131332",
      },
      {
        time: "12:45",
        emoji: "🍜",
        name: "Обед",
        desc: "Быстро поесть в Geylang (район славится едой) или по пути в центр.",
      },
      {
        time: "14:00",
        emoji: "🌸",
        name: "Gardens by the Bay",
        desc: "Оранжереи Cloud Forest (туман, водопад в помещении) + Flower Dome — комбо-билет, в прохладе. Дальше Supertree Grove.\n\n⚠️ С 22 июня по 16 июля 2026 Supertree Grove частично перекрыт (Singapore Garden Festival): проход к оранжереям и Supertrees перенаправлен через Serene Garden, шоу идёт как обычно — сверьтесь с gardensbythebay.com.sg.",
        duration: "2.5 ч",
        cost: "комбо-билет",
        mapUrl: "https://maps.google.com/?cid=14516408273722441878",
      },
      {
        time: "16:30",
        emoji: "🦁",
        name: "Прогулка по Marina Bay",
        desc: "Merlion Park, набережная, Helix Bridge, ArtScience Museum снаружи. Символ Сингапура и виды на залив.",
        mapQuery: "Merlion Park Singapore",
      },
      {
        time: "18:00",
        emoji: "🌇",
        name: "SkyPark на Marina Bay Sands (небоскрёб)",
        desc: "Смотровая на 56 этаже, закат ~19:00 — весь залив сверху.",
        cost: "~S$32",
        mapUrl: "https://maps.google.com/?cid=588707449624412211",
      },
      {
        time: "19:45",
        emoji: "🌳",
        name: "Supertree Grove — Garden Rhapsody",
        desc: "Бесплатное свето-музыкальное шоу среди деревьев. Сеансы 19:45 и 20:45.",
        cost: "бесплатно",
        mapQuery: "Supertree Grove Gardens by the Bay Singapore",
      },
      {
        time: "20:15",
        emoji: "🍢",
        name: "Ужин",
        desc: "Satay by the Bay рядом с садами или Lau Pa Sat в CBD.",
        mapQuery: "Satay by the Bay Singapore",
      },
      {
        time: "21:00",
        emoji: "🎆",
        name: "Spectra у Marina Bay Sands",
        desc: "Бесплатное свето-водное шоу на Event Plaza. Финал первого дня у воды.",
        cost: "бесплатно",
        mapQuery: "Marina Bay Sands Event Plaza Spectra Singapore",
      },
    ],
  },
  {
    title: "День 2 · Четверг",
    emoji: "🎢",
    hours: "09:00 → вечер",
    subtitle: "Сентоза · Universal Studios",
    stops: [
      {
        time: "09:00",
        emoji: "🚇",
        name: "Выезд на Сентозу",
        desc: "MRT до HarbourFront → VivoCity (ур. 3) → Sentosa Express до Waterfront. Билеты в Universal купить онлайн заранее.",
      },
      {
        time: "10:00",
        emoji: "🎢",
        name: "Universal Studios Singapore",
        desc: "К открытию: сразу Minion Land или Sci-Fi City, пока нет очередей. На парк — весь день.",
        duration: "6–8 ч",
        cost: "от ~S$83, Express ~S$90",
        mapUrl: "https://maps.google.com/?cid=3500426646667023007",
      },
      {
        time: "18:00",
        emoji: "🍔",
        name: "Ужин",
        desc: "На Сентозе или в VivoCity после парка.",
      },
      {
        time: "19:40",
        emoji: "🌅",
        name: "Wings of Time (опционально)",
        desc: "Лазерно-водное шоу на пляже Сентозы. Сеансы ~19:40 и 20:40 — сверьтесь с расписанием.",
        cost: "~S$18",
        mapQuery: "Wings of Time Sentosa Singapore",
      },
    ],
  },
  {
    title: "День 3 · Пятница",
    emoji: "🛕",
    hours: "10:00 → вечер",
    subtitle: "Chinatown · Little India · Kampong Glam · Orchard",
    stops: [
      {
        time: "10:00",
        emoji: "🍜",
        name: "Chinatown",
        desc: "Храм и музей Зуба Будды, торговые улочки, красные фонари. Обед в Maxwell Food Centre — легендарный Tian Tian chicken rice. Наличными дешевле.",
        duration: "2 ч",
        mapUrl: "https://maps.google.com/?cid=14879639582559932586",
      },
      {
        time: "12:30",
        emoji: "🛕",
        name: "Little India",
        desc: "Храм Sri Veeramakaliamman, рынок Tekka, цветной дом Tan Teng Niah, специи и гирлянды. Совсем другой мир.",
        duration: "1.5 ч",
        mapQuery: "Little India Singapore",
      },
      {
        time: "14:30",
        emoji: "🕌",
        name: "Kampong Glam + Haji Lane",
        desc: "Мечеть Султана, стрит-арт, бутики и кофейни на узкой Haji Lane, арабская/малайская кухня на Arab Street.",
        duration: "2 ч",
        mapQuery: "Kampong Glam Haji Lane Singapore",
      },
      {
        time: "16:30",
        emoji: "🛍",
        name: "Orchard Road",
        desc: "Главная торговая улица: ION Orchard, Takashimaya, бутики. Шопинг перед вылетом.",
        duration: "2 ч",
        mapQuery: "Orchard Road Singapore",
      },
      {
        time: "19:00",
        emoji: "🚤",
        name: "Clarke Quay",
        desc: "Ужин на набережной Singapore River, огни, бары. По желанию — прогулка на бумботе по реке.",
        mapQuery: "Clarke Quay Singapore",
      },
    ],
  },
  {
    title: "День 4 · Суббота",
    emoji: "🛫",
    hours: "утро → вылет 19:15",
    subtitle: "Jewel Changi · аэропорт · вылет из T4",
    stops: [
      {
        time: "10:00",
        emoji: "🧳",
        name: "Выезд из отеля в аэропорт",
        desc: "Выселение, забрать вещи. MRT Aljunied → Changi Airport, ~30 мин.",
        mapUrl: "https://maps.google.com/?cid=10928909690553131332",
      },
      {
        time: "10:45",
        emoji: "🔒",
        name: "Сдать чемоданы в камеру хранения",
        desc: "Baggage Storage (Smarte Carte) работает 24/7 — удобная стойка на Level 1 Jewel. Дальше гуляем налегке.",
      },
      {
        time: "11:00",
        emoji: "💧",
        name: "Jewel — водопад Rain Vortex",
        desc: "Крупнейший в мире крытый водопад (40 м) и лес Shiseido Forest Valley. Днём — без светового шоу (оно вечером), но сам водопад впечатляет.",
        cost: "бесплатно",
        mapUrl: "https://maps.google.com/?cid=13261360313192835779",
      },
      {
        time: "12:00",
        emoji: "🌉",
        name: "Canopy Park (Jewel, Level 5)",
        desc: "Подвесные сетки Sky Nets, зеркальный и живой лабиринты, топиари, стеклянный Canopy Bridge над водопадом.",
        cost: "от ~S$10",
        mapQuery: "Canopy Park Jewel Changi Singapore",
      },
      {
        time: "13:00",
        emoji: "🍽",
        name: "Обед в Jewel",
        desc: "Огромный выбор фудкортов и ресторанов прямо в Jewel.",
      },
      {
        time: "14:00",
        emoji: "🦋",
        name: "Достопримечательности терминалов",
        desc: "Butterfly Garden (T3), кинетический дождь Kinetic Rain (T1), цифровой водопад Wonderfall и сад Dreamscape (T2).",
      },
      {
        time: "16:00",
        emoji: "🛫",
        name: "В Terminal 4 на регистрацию",
        desc: "Забрать чемоданы. T4 — отдельный терминал: от T2 идёт бесплатный шаттл-бас (~15–20 мин), заложите время. Регистрация и контроль минимум за 3 ч до вылета.",
        mapQuery: "Changi Airport Terminal 4 Singapore",
      },
      {
        time: "19:15",
        emoji: "✈️",
        name: "Вылет из Сингапура (T4)",
        desc: "Приятного полёта!",
      },
    ],
  },
];
