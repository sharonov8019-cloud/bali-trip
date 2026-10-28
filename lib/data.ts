import type { Place } from "./types";

export const TRIP_META = {
  start: "9 июня 2026",
  end: "8 июля 2026",
  totalNights: 29,
  travelers: 2,
  workingHours: "с 14:00 до ночи по будням",
};

// Главные точки маршрута (для карты) — Убуд → … → Букит (Улувату).
// Джатилувих — транзит на пути Мундук → Букит (не самостоятельная локация, pin нет).
export const ROUTE_POINTS = [
  "Ubud, Bali, Indonesia",
  "Sidemen, Karangasem, Bali, Indonesia",
  "Kintamani, Bangli, Bali, Indonesia",
  "Amed, Karangasem, Bali, Indonesia",
  "Lovina Beach, Buleleng, Bali, Indonesia",
  "Pemuteran, Buleleng, Bali, Indonesia",
  "Munduk, Buleleng, Bali, Indonesia",
  "Jatiluwih, Tabanan, Bali, Indonesia",
  "Uluwatu, Bali, Indonesia",
];

// Координаты каждой локации (lat, lon) — это координаты забронированного отеля.
// Pin на карте и маршрут строятся между отелями.
export const PLACE_COORDS: Record<string, { lat: number; lon: number }> = {
  ubud:      { lat: -8.5255244, lon: 115.2771499 },  // Ubud Jungle Stay - Mahari
  sidemen:   { lat: -8.4649148, lon: 115.4326117 },  // Lumbung uma nadi villas
  kintamani: { lat: -8.2417298, lon: 115.3849591 },  // KAMARU VILLA
  amed:      { lat: -8.3360486, lon: 115.6478447 },  // Qchen Cuan Amed
  lovina:    { lat: -8.1554967, lon: 115.034491  },  // Villa Jepun Lovina
  pemuteran: { lat: -8.1437668, lon: 114.6532036 },  // Mango Tree Inn
  munduk:    { lat: -8.2796735, lon: 115.0510606 },  // Clovehigh Cabin (первый отель)
  bukit:     { lat: -8.8431071, lon: 115.1777908 },  // Manik Pandawa Villa
};

// Bounding box Бали (для OSM embed)
export const BALI_BBOX = "114.40,-8.87,115.72,-8.03";

export const PLACES: Place[] = [
  // =========================================================
  {
    slug: "ubud",
    name: "Убуд",
    nights: 5,
    dates: "9–14 июня",
    summary: "Лес обезьян, рисовые террасы, Cretya, водопады, йога",
    emoji: "🌿",
    color: "jungle",
    hotels: [
      { name: "Ubud Jungle Stay — Mahari", mapUrl: "https://maps.app.goo.gl/aAAEkabXriKNZjnz6", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=zoPLov1KPV6GLvIS;aid=304142;lang=ru;source=mytrips#manage-booking-quick-action", bookingProvider: "Booking" },
    ],
    spots: [
      { name: "Monkey Forest", desc: "Заповедник 12,5 га в центре Убуда: 1260+ макак и три индуистских храма среди джунглей. ⚠️ Макаки крадут очки, шляпы и телефоны — снимите всё лишнее. К открытию в 8:30, пока не приехали автобусы.", mapQuery: "Sacred Monkey Forest Sanctuary Ubud", mapUrl: "https://maps.app.goo.gl/KVPFMiE9YiiY7aoQ8", tag: "другое", time: "к 8:30", cost: "80k IDR", rating: 4.5, reviews: 57478 },
      { name: "Tegalalang Rice Terraces", desc: "Каскад рисовых террас с качелями и фотозонами — одна из главных открыточных локаций Бали. Ехать к 7:00–8:00, иначе пробка на подъезде и толпа на узких тропах.", mapQuery: "Tegalalang Rice Terrace", tag: "другое", time: "к 7:00", cost: "25k IDR", rating: 4.4, reviews: 52493 },
      { name: "Campuhan Ridge Walk", desc: "Бесплатная пешая тропа 2 км по гребню холма между двумя реками. В конце кафе. Выходить до 7:30 — после 9:00 жарко, душно и людно.", mapQuery: "Campuhan Ridge Walk Ubud", tag: "другое", time: "до 7:30", rating: 4.3, reviews: 17209 },
      { name: "Tibumana Waterfall", desc: "Узкий 20-метровый водопад в природном амфитеатре с чистым бассейном для купания. 40 минут от Убуда. К 10:00 уже толпы — приезжать к 7:00.", mapQuery: "Tibumana Waterfall", tag: "водопад", time: "к 7:00", cost: "20k IDR", rating: 4.6 },
      { name: "Tegenungan Waterfall", desc: "Мощный 15-метровый водопад в 25 минутах от Убуда. Лестница 200 ступеней, кафе у воды. Ехать до 9:00, иначе очередь в фотозонах.", mapQuery: "Tegenungan Waterfall", tag: "водопад", time: "до 9:00", cost: "20k IDR", rating: 4.4, reviews: 36982 },
      { name: "Cretya Ubud Day Club", desc: "Дорогой клуб с тремя бассейнами на склоне над террасами Тегалаланга. Диджей, западная кухня, тарзанка над долиной.\n\nЛежак бронировать за неделю. Минимальный заказ еды/напитков от 500k на двоих.", mapQuery: "Cretya Ubud", tag: "другое", time: "обед — закат", cost: "от 500k на двоих", rating: 4.5, reviews: 10380 },
      { name: "Saraswati Temple", desc: "Маленький храм в центре Убуда с прудом цветущих лотосов и резными воротами. Осмотр 15 минут — совмещать с ужином в Lotus рядом или вечерним танцем Кечак (~100k).", mapQuery: "Pura Taman Saraswati Ubud", tag: "храм", cost: "бесплатно", rating: 4.2, reviews: 5022 },
      { name: "Goa Gajah (Elephant Cave)", desc: "Археологический комплекс XI века с пещерой-«пастью демона» и купальнями. 15 минут от Убуда. Пещеру осматривают за 5 минут — ехать только по пути в Tirta Empul или Tegenungan.", mapQuery: "Goa Gajah Ubud", tag: "храм", cost: "50k IDR", rating: 4.2, reviews: 9826 },
      { name: "Tirta Empul", desc: "Действующий храм со священными источниками. Ритуал очищения мелукат под 30 каменными фонтанами. К 8:00 в купальнике под саронгом, сухую одежду с собой — к 10:00 в каждом фонтане очередь по 15 минут.", mapQuery: "Tirta Empul Temple", tag: "храм", time: "к 8:00", cost: "50k IDR", rating: 4.6, reviews: 29074 },
      { name: "Rice Fields Walk, Саян", desc: "Тихий маршрут по рисовым полям между Саяном и Пенестананом. Туристов почти нет. Идти в 6:30–8:00, на финише — завтрак в Yellow Flower или Alchemy.", mapQuery: "Sayan Rice Field Walk Ubud Penestanan", mapUrl: "https://maps.app.goo.gl/pzRQmZzFSNsoxi7t5", tag: "другое", time: "6:30–8:00", cost: "бесплатно" },
      { name: "Lumeria Yoga", desc: "Новый центр с йогой, сауной, бассейном и купелью с ледяной водой среди рисовых полей. Открылся в 2024, отзывов мало, но место хвалят. Разовое занятие ~150k.", mapQuery: "Lumeria Yoga Ubud", tag: "другое", time: "с 7:30", cost: "~150k за занятие" },
      { name: "Petulu Heron Bird Colony", desc: "Деревня в 10 минутах от центра. Каждый вечер около 17:30 сюда слетаются тысячи белых цапель ночевать на деревьях. Зонт обязателен — птицы по головам не стесняются.", mapQuery: "Petulu Heron Colony Ubud", tag: "другое", time: "к 17:30", cost: "бесплатно", rating: 4.2, reviews: 360 },
      { name: "Pura Gunung Kawi Sebatu", desc: "Уединённый храм XI века с прудами лотосов, рыбами кои и купальнями со священной водой. Намного тише Tirta Empul — можно спокойно пройти ритуал мелукат за пожертвование.", mapQuery: "Pura Gunung Kawi Sebatu Bali", mapUrl: "https://maps.app.goo.gl/u5R8pQ7XGCbiPeAy8", tag: "храм", cost: "30k IDR", rating: 4.7, reviews: 3207 },
      { name: "Рафтинг по реке Аюнг", desc: "Сплав 2–2.5 часа по реке через джунгли, водопады и резные скалы. Пороги несложные, подходят новичкам и детям от 7 лет.", mapQuery: "Ayung River Rafting Ubud", mapUrl: "https://maps.app.goo.gl/Ah6hWVWJ72v6Jgj17", tag: "вода", time: "с 9:00", cost: "350–500k с обедом", rating: 4.4, reviews: 85 },
      { name: "Sunset Bar, Bambu Indah", desc: "Бар в эко-резорте дизайнера Джона Хардии. Лифт по скале, тропа через пещеры — и смотровая над ущельем реки Аюнг. Бронировать за 2–3 дня.", mapQuery: "Bambu Indah Sunset Bar Ubud", tag: "бар", time: "к 18:15", cost: "минимум 350k", rating: 4.9, reviews: 532 },
      { name: "Lokal Bar", desc: "Бар на Monkey Forest Road с живой музыкой каждый вечер, авторскими коктейлями и садом. Вечером забито — приходить к 19:00.", mapQuery: "Lokal Bar Ubud", tag: "бар", time: "к 19:00", cost: "2 напитка за 200k до 20:00", rating: 4.9, reviews: 1225 },
      { name: "The Blue Door", desc: "Главное ночное место Убуда: бар, ресторан, клубный зал с диджеями до 3–4 ночи. Практически единственный вариант, если хочется потанцевать. Кухня средняя.", mapQuery: "The Blue Door Ubud", tag: "бар", time: "вечер → ночь", rating: 4.7, reviews: 1909 },
      { name: "Zen Sauna Ubud (Andong)", desc: "Новая корейская сауна на улице Андонг: горячая баня, холодный бассейн, парилка (формат jjimjilbang). Открылась в 2024, отзывов мало. Закрыта по средам.", mapQuery: "Zen Sauna Ubud Andong", tag: "спа/сауна", cost: "200–300k за сессию" },
      { name: "Onyx Sauna (Onyx Park Resort)", desc: "Сауна и хаммам при новом резорте с контрастной зоной, бассейнами и фитнес-клубом. Доступна для нерезидентов за отдельную плату. Новая и малолюдная.", mapQuery: "Onyx Sauna Onyx Park Resort Ubud", mapUrl: "https://maps.app.goo.gl/4mTKtuU5oxwxJqpo8", tag: "спа/сауна", time: "до 22:00", cost: "250–400k IDR" },
      { name: "Boreh Pijat", desc: "Балийский массаж-салон с традиционным скрабом боре (имбирь, куркума, 20 трав) и дровяной сауной за ~150k.\n\n⚠️ На TripAdvisor серьёзные жалобы посетительниц на поведение владельца. Женщинам не идти.", mapQuery: "Boreh Pijat Ubud", tag: "спа/сауна", cost: "~150k IDR", rating: 4.3, reviews: 280 },
      { name: "Hesa Wellness Spa", desc: "Лучший спа Убуда (5.0 на Google): корейский скраб, хаммам, контрастные купели, парилка. Две локации в центре. Записываться за 2–3 дня, можно зависнуть в купелях на весь день.", mapQuery: "Hesa Wellness Spa Ubud", tag: "спа/сауна", cost: "400–800k за процедуру", rating: 5.0, reviews: 3772 },
      { name: "Suwat Waterfall", desc: "Тихий малоизвестный водопад в 12 км от Убуда. Глубокий бассейн для купания, тарзанка над водой. Туристов почти нет — спуск 5 минут по оборудованной тропе.", mapQuery: "Suwat Waterfall Bali", tag: "водопад", cost: "40k IDR" },
      { name: "Sangeh Monkey Forest", desc: "Священный лес обезьян в 25 км к западу от Убуда: 700+ серых длиннохвостых макак, тропа через 60-метровые мускатные деревья. Тише и атмосфернее Monkey Forest в центре — обезьяны менее наглые, рядом всегда персонал. Открыт 8:00–17:00.", mapQuery: "Sangeh Monkey Forest Bali", tag: "другое", time: "8:00–17:00", cost: "30k IDR" },
    ],
    cafes: [
      // 🇷🇺 Русская / восточноевропейская еда
      { name: "Draniki Ubud", price: "$$", kitchen: "🇷🇺 Восточноевропейская", desc: "Драники, борщ, пельмени, котлеты. Открыто до 22:00.", mapQuery: "Draniki Ubud", rating: 4.7, reviews: 593 },
      { name: "Soul Kitchen", price: "$$", kitchen: "🇷🇺 Ресторан (постсоветский)", desc: "Большое ежедневное место с русскоязычной публикой. Стабильно высокий рейтинг. До 22:00.", mapQuery: "Soul Kitchen Ubud", rating: 4.6, reviews: 1402 },
      { name: "Bukhara Chaikhana Bali", price: "$$", kitchen: "🇷🇺 Узбекская чайхана", desc: "Плов, манты, шурпа, лагман, самса. Восточная атмосфера. До 22:00.", mapQuery: "Bukhara Chaikhana Bali Ubud", rating: 4.6, reviews: 309 },
      { name: "SkaZka Bali", price: "$$", kitchen: "🇷🇺 Ресторан", desc: "Домашняя русская кухня, русскоязычное меню. Отзывов мало (103), но рейтинг топ.", mapQuery: "SkaZka Bali Ubud", rating: 4.9, reviews: 103 },
      // Интернациональная еда
      { name: "Milk & Madu Ubud", price: "$$", kitchen: "Австралийский бранч, кафе", desc: "Классика Убуда: пицца, бургеры, бранч. Eggs benedict, burrito, будничные сеты.", mapQuery: "Milk and Madu Ubud", rating: 4.5, reviews: 5673 },
      { name: "Monsieur Spoon Ubud", price: "$$", kitchen: "Французская пекарня", desc: "Круассаны, pain au chocolat, quiche, багеты. Открывается с 06:30. Тихий сад.", mapQuery: "Monsieur Spoon Ubud", rating: 4.5, reviews: 2813 },
      { name: "Pizza Bagus", price: "$$", kitchen: "Пиццерия", desc: "Убудская классика с 1996. Пиццы и пасты 80–140k. Открыто до 22:30.", mapQuery: "Pizza Bagus Ubud", rating: 4.3, reviews: 2674 },
      { name: "Hujan Locale", price: "$$$", kitchen: "Современная индонезийская", desc: "Особый ужин. Шеф Will Meyrick — стрит-фуд Азии в упакованной подаче. Чек 250k+/чел. Бронь.", mapQuery: "Hujan Locale Ubud", rating: 4.6, reviews: 2300 },
      { name: "Warung Gauri", price: "$", kitchen: "Индийская / сатэ", desc: "Аутентичная индийская: тали, карри, дал, свежие роти. Бюджетно и ароматно.", mapQuery: "Warung Gauri Ubud", rating: 4.6, reviews: 2088 },
      { name: "Yellow Flower Café", price: "$$", kitchen: "Healthy кафе", desc: "Скрытый органик-кафе с видом на джунгли. Healthy завтраки. Откр. с 07:00.", mapQuery: "Yellow Flower Cafe Ubud", rating: 4.4, reviews: 1469 },
      { name: "La Luz Ubud", price: "$$", kitchen: "Мексиканская", desc: "Мексиканский ресторан. Открыто до 00:00 — один из самых поздних в Убуде. Высокий рейтинг.", mapQuery: "La Luz Ubud", rating: 4.8, reviews: 1200 },
      { name: "Melali Ubud", price: "$$", kitchen: "Ресторан, healthy", desc: "Завтраки весь день, тихая веранда. Работает до 23:00. Подальше от туристической суеты.", mapQuery: "Melali Ubud", rating: 4.7, reviews: 999 },
      { name: "ShamanaMama", price: "$$", kitchen: "Кафе, healthy/веган", desc: "Vegan-friendly кафе в джунглях. Smoothie bowls, боулы, супы. До 22:00.", mapQuery: "ShamanaMama Restaurant Ubud", rating: 4.6, reviews: 671 },
      { name: "Mango Cafe", price: "$$", kitchen: "Ресторан, бранч", desc: "Завтраки, смузи, сэндвичи, бургеры. Laid-back место на каждый день.", mapQuery: "Mango Cafe Ubud", rating: 4.6, reviews: 431 },
      { name: "Mana Kitchen", price: "$$", kitchen: "Healthy fusion", desc: "Healthy-кафе с азиатскими акцентами. Боулы, карри, салаты, соки.", mapQuery: "Mana Kitchen Ubud", rating: 4.4, reviews: 310 },
    ],
    workspaces: [
      { name: "Ubud.Space Coworking and Coffee", type: "Коворкинг", equipment: "Wifi, розетки, тихие зоны, кофе", desc: "Официальный коворкинг. Работает до 23:30 — подходит для работы допоздна.", mapQuery: "Ubud Space Coworking Coffee", rating: 4.7, reviews: 266, price: "~120k/день" },
      { name: "Ubud Co-Working", type: "Коворкинг", equipment: "Wifi, розетки, переговорки, AC", desc: "Классический коворкинг с дневными пропусками. Работает до 23:00. Отзывов пока немного.", mapQuery: "Ubud Co-Working", rating: 4.6, reviews: 67, price: "~150k/день" },
      { name: "Laduma Ubud", type: "Кафе-коворкинг", equipment: "Wifi, тихая атмосфера, кофе", desc: "Современное кафе с очень высоким рейтингом. Подходит для работы днём с ноутом.", mapQuery: "Laduma Ubud", rating: 4.8, reviews: 185, price: "средний чек" },
    ],
    days: [
      { date: "9 июня", weekday: "вт", title: "Приезд в Убуд", items: [
        { time: "10:00", text: "Выезд из Семиньяка", emoji: "🛵" },
        { time: "12:00", text: "Заселение, обед в Clear Café" },
        { time: "14:00", text: "Работа", emoji: "💻" },
        { time: "18:30", text: "Campuhan Ridge Walk на закат" },
      ]},
      { date: "10 июня", weekday: "ср", items: [
        { time: "9:30", text: "Подъём, завтрак в Milk & Madu" },
        { time: "10:30", text: "Seniman Coffee — работа с ноута" },
        { time: "13:00", text: "Обед в Watercress" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "11 июня", weekday: "чт", items: [
        { time: "9:00", text: "Monkey Forest к открытию", emoji: "🐒" },
        { time: "10:30", text: "Завтрак в Alchemy" },
        { time: "12:00", text: "Jalan Hanoman / Jalan Dewi Sita — магазины" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "12 июня", weekday: "пт", items: [
        { time: "8:30", text: "Tegalalang Rice Terraces — до толпы", emoji: "🌾" },
        { time: "10:00", text: "Завтрак в Tis Café" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "13 июня", weekday: "сб", title: "Cretya + водопад", isWeekend: true, items: [
        { time: "9:30", text: "Завтрак в Hujan Locale" },
        { time: "11:00", text: "Tibumana Waterfall", emoji: "💦" },
        { time: "14:00", text: "Обед в Bebek Tepi Sawah" },
        { time: "15:30", text: "Cretya Ubud Day Club до заката", emoji: "🎯", highlight: true },
        { time: "20:00", text: "Ужин в Locavore / Naughty Nuri's" },
      ]},
    ],
    routes: [
      {
        title: "Будний день",
        emoji: "🐒",
        hours: "10:00 → 14:00",
        subtitle: "лёгкий, одна точка",
        stops: [
          { time: "10:00", emoji: "🛵", name: "Выезд из отеля", desc: "50 мин на запад в сторону деревни Сангех" },
          { time: "10:50", emoji: "🐒", name: "Sangeh Monkey Forest", desc: "Прогулка через 60-метровые мускатные деревья, 700+ макак. Тише, чем Monkey Forest в центре.", duration: "1.5 ч", cost: "30k IDR", mapQuery: "Sangeh Monkey Forest Bali" },
          { time: "12:20", emoji: "🛵", name: "Возврат в Убуд", desc: "50 мин обратно, в центре — обед" },
          { time: "13:10", emoji: "🏠", name: "Дома" },
        ],
      },
      {
        title: "Пятница",
        emoji: "💦",
        hours: "10:00 → 18:00, потом NOVA",
        subtitle: "полный день — петля по водопадам + террасы",
        stops: [
          { time: "10:00", emoji: "🛵", name: "Выезд из отеля", desc: "25 мин на юго-восток" },
          { time: "10:25", emoji: "💦", name: "Suwat Waterfall", desc: "Тихий бассейн для купания и тарзанка над водой. Туристов почти нет.", duration: "1.5 ч", cost: "40k IDR", mapQuery: "Suwat Waterfall Bali" },
          { time: "12:15", emoji: "💦", name: "Tibumana Waterfall", desc: "Узкий 20-метровый водопад в природном амфитеатре с бассейном для купания.", duration: "1.5 ч", cost: "20k IDR", mapQuery: "Tibumana Waterfall" },
          { time: "14:30", emoji: "🍽", name: "Обед на склонах Tegalalang", desc: "Кафе с панорамой террас — Akasa Spice или D'Tukad", duration: "1.5 ч" },
          { time: "16:00", emoji: "🌾", name: "Tegalalang Rice Terraces", desc: "В золотой час: толпа спала, мягкий свет, террасы подсвечены. Качели, фото, тропа.", duration: "1.5 ч", cost: "25k IDR", mapQuery: "Tegalalang Rice Terrace" },
          { time: "17:30", emoji: "🛵", name: "В отель", desc: "30 минут на юг" },
          { time: "18:00", emoji: "🏊", name: "NOVA", desc: "Бассейн + тренировка", mapQuery: "NOVA Ubud" },
        ],
      },
      {
        title: "Суббота",
        emoji: "🌅",
        hours: "15:00 → закрытие Bambu Indah",
        subtitle: "после церемонии",
        stops: [
          { time: "15:00", emoji: "🧘", name: "Pranasanti Yoga", desc: "Старт после церемонии (Jl. A.A. Gede Rai, Mas)", mapUrl: "https://maps.app.goo.gl/QvQRNfqRDokmfY4V7" },
          { time: "15:20", emoji: "💦", name: "Tegenungan Waterfall", desc: "Мощный 15-метровый водопад, лестница 200 ступеней, можно искупаться.", duration: "1.5 ч", cost: "20k IDR", mapQuery: "Tegenungan Waterfall" },
          { time: "17:25", emoji: "🌅", name: "Sunset Bar, Bambu Indah", desc: "Закат в 18:15 над ущельем реки Аюнг, ужин, коктейли, сидим до закрытия.", cost: "минимум 350k, бронь", mapQuery: "Bambu Indah Sunset Bar Ubud" },
        ],
      },
    ],
  },

  // =========================================================
  {
    slug: "sidemen",
    name: "Сидемен",
    nights: 2,
    dates: "14–16 июня",
    summary: "Рисовые террасы без туристов, виды на Агунг, детокс",
    emoji: "🌾",
    color: "jungle",
    arriveFrom: "ubud",
    hotels: [
      { name: "Lumbung Uma Nadi Villas", mapUrl: "https://maps.app.goo.gl/gLnjUGkcC33wSiZ67", bookingUrl: "https://ru.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMPRTA9EXQ", bookingProvider: "Airbnb" },
    ],
    spots: [
      { name: "Sidemen Rice Field", desc: "Рисовые террасы в долине Сидемена. Тропы 3 км среди банановых деревьев, на горизонте — вулкан Агунг. Туристов меньше, чем в Тегалаланге. Идти ранним утром в закрытой обуви.", mapQuery: "Sidemen Rice Field", mapUrl: "https://maps.app.goo.gl/ovLZCsdTwqCpMk9q7", tag: "другое", cost: "25k IDR", rating: 4.7, reviews: 651 },
      { name: "Gembleng Waterfall", desc: "Каскад из трёх водопадов с природными бассейнами в скалах — вода уходит ровно за край, как джакузи над пропастью. У верхнего бассейна почти всегда очередь, приезжать до 9 утра.", mapQuery: "Gembleng Waterfall Sidemen", tag: "водопад", cost: "20–50k IDR", rating: 4.7, reviews: 2163 },
      { name: "Tukad Cepung Waterfall", desc: "Водопад в узком каньоне-пещере. В полдень сквозь расщелину в скале пробиваются солнечные лучи — главный вау-эффект. Идти к 10–11 утра ради лучей; тропа после ливней скользкая.", mapQuery: "Tukad Cepung Waterfall", tag: "водопад", time: "10–11:00 ради лучей", cost: "25k IDR", rating: 4.6, reviews: 4976 },
      { name: "Ananda Spa & Bathhouse", desc: "Спа и баня от резорта Samanvaya: сауна, хаммам, купели разной температуры над речной долиной. Только для взрослых. Процедуры бронировать заранее — место камерное.", mapQuery: "Ananda Spa Bathhouse Sidemen", tag: "спа/сауна", time: "10:00–21:00", rating: 5.0, reviews: 890 },
    ],
    cafes: [
      { name: "Sleeping Gajah Kitchen & Lounge", price: "$$$", kitchen: "Ресторан, азиатско-западный фьюжн", desc: "Самое раскрученное место Сидемена у экспатов. Бургеры, пасты, завтраки с беконом. Чек 250k+/чел.", mapQuery: "Sleeping Gajah Kitchen Sidemen", rating: 4.8, reviews: 687 },
      { name: "Warung Ume Anyar", price: "$", kitchen: "Балийская, семейный warung", desc: "Аутентичный семейный варунг. Наси кампур, свежие соки. Блюдо 25–50k, честные цены.", mapQuery: "Warung Ume Anyar Sidemen", rating: 4.6, reviews: 430 },
      { name: "The Sidemen Restaurant", price: "$$$", kitchen: "Ресторан, fine dining", desc: "Особый ужин. Рисовые террасы и лес вокруг. Высокий рейтинг, но отзывов мало (39).", mapQuery: "The Sidemen Restaurant", rating: 4.9, reviews: 39 },
    ],
    workspaces: [],
    workNote: "В Сидемене 0 мест для работы — все кафе open-air (жарко, москиты). Работа только из виллы с AC и надёжным wifi. Либо ехать в Клунгкунг (30 мин) в закрытую кофейню с кондиционером.",
    days: [
      { date: "14 июня", weekday: "вс", title: "Переезд и отдых", isWeekend: true, items: [
        { time: "11:00", text: "Выезд Убуд → Сидемен (52 мин на мопеде, 34 км)", emoji: "🛵" },
        { time: "13:00", text: "Заселение, обед" },
        { time: "16:00", text: "Прогулка по рисовым террасам" },
        { time: "19:00", text: "Ужин с видом на Агунг" },
      ]},
      { date: "15 июня", weekday: "пн", items: [
        { time: "9:30", text: "Подъём, завтрак в вилле / бассейн" },
        { time: "10:30", text: "Gembleng или Tukad Cepung", emoji: "💦" },
        { time: "13:00", text: "Обед" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
    ],
  },

  // =========================================================
  {
    slug: "kintamani",
    name: "Кинтамани",
    nights: 5,
    dates: "16–21 июня",
    summary: "🌋 Батур (сб), горячие источники, лава, клубника",
    emoji: "🌋",
    color: "ocean",
    arriveFrom: "sidemen",
    hotels: [
      { name: "KAMARU VILLA", mapUrl: "https://maps.app.goo.gl/mXzLWMdVPHZAtgd97", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=e4uvrTegtRQvncbL;aid=304142;lang=ru;source=mytrips", bookingProvider: "Booking" },
    ],
    spots: [
      { name: "Toya Devasya Hot Springs", desc: "Большой комплекс с горячими бассейнами на берегу озера Батур. Олимпийский бассейн, вид на вулкан. Идеально после восхождения на Батур. Из минусов — мухи и устаревшие раздевалки.", mapQuery: "Toya Devasya Hot Spring", tag: "спа/сауна", cost: "~200k IDR весь день", rating: 4.3 },
      { name: "Batur Natural Hot Spring", desc: "Бюджетная альтернатива Toya Devasya. Несколько вулканических бассейнов разной температуры у озера. Мухи, тесные душевые, плохая еда — еду брать с собой.", mapQuery: "Batur Natural Hot Spring", tag: "спа/сауна", cost: "125k IDR", rating: 4.1 },
      { name: "Black Lava Field", desc: "Поле застывшей чёрной лавы после извержений Батура 1965–1974. Рядом храм Пура Джати на берегу озера. Обычно заезжают вместе с джип-туром.", mapQuery: "Batur Black Lava Field Pura Jati", tag: "другое", cost: "бесплатно", rating: 4.6 },
      { name: "Pura Ulun Danu Batur", desc: "Второй по значимости храм Бали после Бесаких. 9 храмов и 285 святилищ на холме над озером. Минусы — агрессивные продавцы саронгов и навязчивые «пожертвования».", mapQuery: "Pura Ulun Danu Batur", mapUrl: "https://maps.app.goo.gl/pPUwgyQMZvc15qoB8", tag: "храм", cost: "50k", rating: 4.5 },
      { name: "Pura Puncak Penulisan", desc: "Самый высокогорный храм Бали (1745 м). 11 террас, мегалитические статуи, панорама Кинтамани. Наверх ~300 ступеней. Туристов почти нет.", mapQuery: "Pura Puncak Penulisan", tag: "храм", rating: 4.5 },
      { name: "Trunyan Village", desc: "Деревня балийских аборигенов Бали-Ага на восточном берегу озера. Знаменита «открытым» кладбищем — тела оставляют под священным деревом таруньян, запах которого маскирует разложение.\n\n⚠️ Местные жёстко разводят на «пожертвования», вокруг мусор. Добраться только на лодке.", mapQuery: "Trunyan Village", tag: "другое", rating: 3.4, reviews: 173 },
      { name: "Каноэ по озеру Батур (C.Bali)", desc: "Прокат надувных каноэ в деревне Кедисан. Сплав по «священному» озеру с рыбаками, на обед — свежая рыба из озера. Утром туман сходит к 8–9 часам.", mapQuery: "C.Bali Kintamani canoe", mapUrl: "https://maps.app.goo.gl/yvQLvtzMVemFP4fY7", tag: "вода", cost: "60k IDR / день", rating: 4.8 },
      { name: "Pura Ulun Danu Batur Songan", desc: "Древний храм на северном берегу озера в деревне Сонган. Тихо, без туристов. Обязателен саронг и пожертвование. Узкие подъездные дороги, местами разбитые тропы.", mapQuery: "Pura Ulun Danu Batur Songan", mapUrl: "https://maps.app.goo.gl/b9dbdgLeWPBC2yBn6", tag: "храм", rating: 4.6 },
      { name: "Джипы на Батур", desc: "Туры на открытых внедорожниках по лавовым полям и склонам Батура: рассвет, чёрный песок, остановки у кратера. В сухой сезон отличная видимость восхода над Агунгом.", mapQuery: "Batur Jeep Tour Kintamani", mapUrl: "https://maps.app.goo.gl/w1pf2uFweu47RAR77", tag: "другое", cost: "от 233k IDR / джип", rating: 4.9 },
    ],
    cafes: [
      { name: "AKASA", price: "$$", kitchen: "Кофейня, бранч", desc: "Стеклянные павильоны над обрывом к Батуру. Самый раскрученный кафе-кластер Кинтамани. Открыто до 22:00.", mapQuery: "AKASA Kintamani", rating: 4.5, reviews: 10316 },
      { name: "Montana Del Cafe", price: "$$", kitchen: "Индонезийская, бранч, панорама", desc: "Минималистичный кафе со стеклянными стенами и видом на Батур. Смузи-боулы, пасты, бенедикт.", mapQuery: "Montana Del Cafe Kintamani", rating: 4.7, reviews: 6324 },
      { name: "Ritatkala Cafe", price: "$$", kitchen: "Кафе с видом", desc: "Стеклянная стена на Батур. Batur Tea с корицей, завтраки, пиццы, пасты. Откр. с 5:30 к восходу.", mapQuery: "Ritatkala Cafe Kintamani", rating: 4.7, reviews: 3504 },
      { name: "Paperhills", price: "$$", kitchen: "Кофейня, бранч", desc: "Каскадная терраса над кратером в пастельной эстетике. Открывается в 5:30 для встречи восхода.", mapQuery: "Paperhills Kintamani", rating: 4.5, reviews: 3255 },
      { name: "Kintamani Coffee — Eco Bike", price: "$", kitchen: "Кофейня, farm-to-cup", desc: "Кофе делают на месте от сбора до обжарки. Простое меню, тосты, выпечка. Чек 50–75k.", mapQuery: "Kintamani Coffee Eco Bike", rating: 4.6, reviews: 2524 },
      { name: "Blue Mountains Bali", price: "$$", kitchen: "Ресторан, панорама", desc: "Ресторан с высоким рейтингом и видом на Батур. Индонезийская и интернациональная кухня.", mapQuery: "Blue Mountains Bali Kintamani", rating: 4.9, reviews: 1276 },
      { name: "Sisi Gege Restaurant", price: "$$", kitchen: "Кофейня/ресторан, виды", desc: "Смотровая над кальдерой. Работает до 23:00 — один из немногих поздних вариантов. Отзывов пока мало (25).", mapQuery: "Sisi Gege Restaurant Kintamani", rating: 4.8, reviews: 25 },
    ],
    workspaces: [
      { name: "Pahdi Specialty Coffee", type: "Кафе-коворкинг", equipment: "Wifi, розетки, просторный зал, кофе", desc: "Крупнейшая спешелти-кофейня района. Открыто до 22:00. Топ-вариант для работы днём и вечером.", mapQuery: "Pahdi Specialty Coffee Kintamani", rating: 4.6, reviews: 3807, price: "чек 50–100k" },
      { name: "Starbucks Kintamani Bali", type: "Кафе с wifi", equipment: "Wifi, розетки, AC, стандарт Starbucks", desc: "Starbucks с панорамой на Батур. Стабильный wifi, розетки, удобные столы. Открывается в 06:30.", mapQuery: "Starbucks Kintamani Bali", rating: 4.7, reviews: 901, price: "100–150k" },
    ],
    workNote: "Большинство кафе Кинтамани закрываются к 22:00. Для работы до поздней ночи — из отеля.",
    days: [
      { date: "16 июня", weekday: "вт", items: [
        { time: "10:00", text: "Выезд Сидемен → Кинтамани (1 ч 20 мин, 40 км)", emoji: "🛵" },
        { time: "11:30", text: "Заселение" },
        { time: "12:30", text: "Обед в Akasa с видом" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "17 июня", weekday: "ср", items: [
        { time: "9:30", text: "Завтрак в Hills Break" },
        { time: "10:30", text: "Toya Devasya Hot Springs (2 часа)", emoji: "♨️" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "18 июня", weekday: "чт", items: [
        { time: "9:30", text: "Подъём" },
        { time: "10:30", text: "Клубничная ферма — собрать клубнику", emoji: "🍓" },
        { time: "11:30", text: "Kintamani Coffee Plantation — дегустация" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "19 июня", weekday: "пт", title: "Подготовка к Батуру", items: [
        { time: "10:00", text: "Поздний подъём" },
        { time: "11:00", text: "Pura Ulun Danu Batur" },
        { time: "13:00", text: "Обед" },
        { time: "14:00", text: "Работа до 18:00", emoji: "💻" },
        { time: "19:00", text: "Плотный ужин" },
        { time: "20:00", text: "Лечь спать — ранний старт!" },
      ]},
      { date: "20 июня", weekday: "сб", title: "🌋 БАТУР + отдых", isWeekend: true, items: [
        { time: "02:00", text: "Подъём", emoji: "⏰" },
        { time: "03:00", text: "Старт восхождения на Батур 1717 м", emoji: "🌋", highlight: true },
        { time: "05:30", text: "Рассвет на вершине, завтрак из яиц с пара", highlight: true },
        { time: "07:00", text: "Спуск, обезьяны по пути" },
        { time: "10:00", text: "Возврат в отель, душ, спать" },
        { time: "14:00", text: "Поздний обед" },
        { time: "15:00", text: "Бассейн/спа, восстановление" },
        { time: "18:00", text: "Лёгкий ужин, ранний сон" },
      ]},
    ],
  },

  // =========================================================
  {
    slug: "amed",
    name: "Амед",
    nights: 5,
    dates: "21–26 июня",
    summary: "Дайвинг у корабля, массаж, йога, коворкинг, русская баня",
    emoji: "🌊",
    color: "ocean",
    arriveFrom: "kintamani",
    hotels: [
      { name: "Qchen Cuan Amed", mapUrl: "https://maps.app.goo.gl/V6FP7tkW3HRt9msy6", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=51eXFByt6w9Vtgml;aid=304142;lang=ru;source=mytrips", bookingProvider: "Booking" },
    ],
    spots: [
      { name: "USS Liberty Shipwreck (Tulamben)", desc: "Затонувший в 1942 году американский транспорт 130 м — самый известный дайв-сайт Бали. Лежит в 40 м от берега на глубине 5–30 м, вокруг 400+ видов морской живности. В июне видимость максимальная — можно и нырять, и плавать с маской с берега.", mapQuery: "USAT Liberty Shipwreck Tulamben", tag: "вода", time: "6:30 старт", cost: "1M IDR за 2 погружения" },
      { name: "Tirta Gangga Water Palace", desc: "Бывший королевский водный дворец 1948 года: пруды, фонтаны, каменные ступеньки в воде среди карпов кои. Приезжать к 7:00 — пока сады ухожены, а толп нет.", mapQuery: "Tirta Gangga Water Palace", mapUrl: "https://maps.app.goo.gl/yMpedM8W3sKjQpsY9", tag: "другое", time: "к 7:00", cost: "50k IDR + 30k парковка", rating: 4.6, reviews: 22315 },
      { name: "Japanese Shipwreck Banyuning", desc: "Небольшой японский корабль времён Второй мировой. Лежит в 15–20 м от пляжа на глубине 5–15 м — видно с маской прямо от берега. Корпус в кораллах, иногда попадаются карликовые морские коньки.", mapQuery: "Japanese Shipwreck Banyuning Amed", tag: "вода", cost: "бесплатно" },
      { name: "Blue Earth Village", desc: "Эко-комплекс из бамбука на склоне с видом на залив Джемелук. Ресторан с большим веганским меню, йога-зал, бассейн. Одна из лучших видовых точек побережья — ужин на закате около 18:00.", mapQuery: "Blue Earth Village Amed", tag: "другое", cost: "150k класс", rating: 4.5, reviews: 787 },
      { name: "Yogika Center (русская баня)", desc: "Русский комплекс с парной, виллами, йога-залом и рестораном. Главная фишка — огромное окно с видом на вулкан Агунг.\n\nОбщая баня пн/ср/сб 18:00–20:00 (100k), индивидуальная — 800k / 3 часа на компанию до 8 человек.", mapQuery: "Yogika Center Amed Bali", tag: "спа/сауна", time: "пн/ср/сб 18:00–20:00", cost: "100k общая / 800k индивид" },
      { name: "Jemeluk Beach Sunrise", desc: "Главная бухта Амеда: галечно-чёрный пляж, рыбацкие лодки джукунг и лучшие в районе кораллы. Черепахи и мурены — в 10 м от берега, видимость 20+ м.", mapQuery: "Jemeluk Beach Amed", mapUrl: "https://maps.app.goo.gl/qxUBZnhXHww5KU9C6", tag: "вода", time: "05:30 восход", rating: 4.4, reviews: 1061 },
      { name: "Apneista Freediving and Yoga School", desc: "Одна из старейших школ фридайвинга (ныряние без акваланга на задержке) на Бали. Курсы от первого знакомства до уровня инструктора. Утром — йога для фридайверов прямо у воды.", mapQuery: "Apneista Freediving and Yoga School Amed", mapUrl: "https://maps.app.goo.gl/ep7oRefDrrQkakpm8", tag: "вода", rating: 4.9, reviews: 552 },
      { name: "Underwater Temple (Jemeluk)", desc: "Подводный храмовый комплекс в правой части бухты Джемелук: ступа, статуи Будды, почтовый ящик (можно отправить настоящую открытку). Глубина 3–7 м — видно и с маской, и на акваланге.", mapQuery: "Underwater Temple Jemeluk Amed", mapUrl: "https://maps.app.goo.gl/5RF8dNewFcULMajL7", tag: "вода", cost: "бесплатно" },
      { name: "Lahangan Sweet", desc: "Видовая площадка на хребте в 40 минутах от Амеда. Почти круговая панорама — Агунг, океан и в ясную погоду Ломбок. Ехать к рассвету (5:30) застать Агунг без облаков.", mapQuery: "Lahangan Sweet Viewpoint", tag: "другое", time: "с 5:30 рассвет", rating: 4.6, reviews: 1903 },
    ],
    cafes: [
      { name: "BERINA RICE TERRACE", price: "$", kitchen: "Кафе, рисовые поля", desc: "Рейтинг 5.0 — абсолютный топ Амеда. Чек 25–50k. Откр. с 09:00.", mapQuery: "Berina Rice Terrace Amed", rating: 5.0, reviews: 2236 },
      { name: "Warung Sabar", price: "$", kitchen: "Балийская", desc: "Топовый семейный варунг, 4.9★. Душевная домашняя кухня по низким ценам.", mapQuery: "Warung Sabar Amed", rating: 4.9, reviews: 1447 },
      { name: "Good Stuff Cafe & Eco Store", price: "$$", kitchen: "Ресторан, healthy/веган", desc: "Eco-friendly, dog-friendly. Смузи-боулы, салаты, gluten-free. При кафе эко-магазин.", mapQuery: "Good Stuff Cafe Amed", rating: 4.8, reviews: 1032 },
      { name: "Gusto Resto & Cafe", price: "$$", kitchen: "Пиццерия", desc: "Итальянские блюда, пиццы, пасты. Один из стабильно лучших ресторанов Амеда.", mapQuery: "Gusto Resto Cafe Amed", rating: 4.8, reviews: 1284 },
      { name: "Warung Melasti", price: "$", kitchen: "Ресторан, пляжное", desc: "Пляжное кафе. Чек 50–75k. Завтраки, простые обеды, ноги в песке.", mapQuery: "Warung Melasti Amed", rating: 4.8, reviews: 208 },
      { name: "Food and friends", price: "$", kitchen: "Ресторан, бранч", desc: "Дружелюбная атмосфера. Чек 50–75k. Открывается с 08:00.", mapQuery: "Food and Friends Amed", rating: 4.8, reviews: 249 },
      { name: "Warung Enak and Bungalows", price: "$$", kitchen: "Гест-хаус + ресторан", desc: "Легенда Амеда. Индонезийская классика + пиццы/пасты. Честные цены, адекватное качество.", mapQuery: "Warung Enak Bungalows Amed", rating: 4.6, reviews: 1093 },
      { name: "Rimba Cafe", price: "$$", kitchen: "Ресторан, healthy", desc: "Smoothie bowls, wraps, бургеры, салаты. Витрина мороженого и кондитерской. Откр. с 07:00.", mapQuery: "Rimba Cafe Amed", rating: 4.6, reviews: 2135 },
      { name: "Small Time Cooks", price: "$$", kitchen: "Бургерная", desc: "Культовые бургеры и бао. Быстро, вкусно, много возвращающихся.", mapQuery: "Small Time Cooks Amed", rating: 4.6, reviews: 519 },
      { name: "Trattoria Amed", price: "$$", kitchen: "Итальянская", desc: "Лучшая пицца восточного Бали. Хэнд-мейд пасты, gnocchi, вино. До 22:30.", mapQuery: "Trattoria Amed", rating: 4.5, reviews: 987 },
      { name: "Meeting Point", price: "$", kitchen: "Кафе, бранч", desc: "Популярное кафе на главной улице. Бранчи, бургеры, индонезийская классика.", mapQuery: "Meeting Point Amed", rating: 4.6, reviews: 313 },
    ],
    workspaces: [
      { name: "La Timba", type: "Коворкинг", equipment: "Wifi, розетки, тихо, кофе", desc: "Специализированный коворкинг в Амеде. Работает до 23:00. Рейтинг 4.9, но отзывов пока мало (32).", mapQuery: "La Timba Amed", rating: 4.9, reviews: 32, price: "дневной/недельный пропуск" },
      { name: "Galang Kangin Bungalow & Restaurant", type: "Кафе с wifi", equipment: "Wifi, ресторан, тихо", desc: "Ресторан при гест-хаусе. Wifi, спокойная атмосфера для работы днём.", mapQuery: "Galang Kangin Bungalow Restaurant Amed", rating: 4.5, reviews: 70, price: "средний чек 100–150k" },
    ],
    days: [
      { date: "21 июня", weekday: "вс", title: "Переезд после Батура", isWeekend: true, items: [
        { time: "10:00", text: "Подъём, долгий завтрак" },
        { time: "12:00", text: "Выезд Кинтамани → Амед (1 ч 17 мин на мопеде, 72 км)", emoji: "🛵" },
        { time: "14:00", text: "Приехали, заселение" },
        { time: "18:00", text: "Лёгкий ужин у моря" },
      ]},
      { date: "22 июня", weekday: "пн", items: [
        { time: "10:00", text: "Массаж (Serenity / Putri)", emoji: "💆" },
        { time: "12:00", text: "Завтрак в Warung Vienna" },
        { time: "14:00", text: "Работа", emoji: "💻" },
        { time: "18:30", text: "Закат на Jemeluk Bay Viewpoint" },
      ]},
      { date: "23 июня", weekday: "вт", items: [
        { time: "9:00", text: "Йога с видом на Агунг (Blue Earth)", emoji: "🧘" },
        { time: "10:30", text: "Завтрак там же" },
        { time: "14:00", text: "Работа из коворкинга", emoji: "💻" },
      ]},
      { date: "24 июня", weekday: "ср", title: "🤿 Дайвинг Liberty", items: [
        { time: "6:30", text: "Подъём" },
        { time: "7:00", text: "Выезд на дайв-центр" },
        { time: "8:00", text: "Два погружения на USS Liberty", emoji: "🤿", highlight: true },
        { time: "11:30", text: "Возврат, обед в Warung Ocean View" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "25 июня", weekday: "чт", title: "🧖 Русская баня", items: [
        { time: "10:00", text: "Подъём" },
        { time: "11:00", text: "Русская баня со стеклянной стеной", emoji: "🧖", highlight: true },
        { time: "13:00", text: "Обед в Warung Bamboo" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
    ],
  },

  // =========================================================
  {
    slug: "lovina",
    name: "Ловина",
    nights: 3,
    dates: "26–29 июня",
    summary: "Дельфины, Aling-Aling с прыжками, планктон ночью",
    emoji: "🐬",
    color: "ocean",
    arriveFrom: "amed",
    hotels: [
      { name: "Villa Jepun Lovina", mapUrl: "https://maps.app.goo.gl/DSRQp9nMu8UJwSYy8", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=RvtbIuXp81TSYwhp;aid=304142;lang=ru;source=mytrips", bookingProvider: "Booking" },
    ],
    spots: [
      { name: "Aling-Aling Waterfall", desc: "Каскад водопадов в деревне Самбанган с природными горками и местами для прыжков с уступов (4, 7, 15 м) в голубые лагуны. Гид обязателен.", mapQuery: "Aling-Aling Waterfall", tag: "водопад", cost: "125k с гидом", rating: 4.6, reviews: 3388 },
      { name: "Gitgit Waterfall", desc: "35-метровый водопад в джунглях, самый доступный на севере Бали. Бетонная тропа 10 минут от парковки. Подходит как короткая остановка по пути.", mapQuery: "Gitgit Waterfall", tag: "водопад", cost: "20k", rating: 4.3, reviews: 3800 },
      { name: "Banjar Hot Springs", desc: "Горячие серные источники в тропическом саду. Три бассейна разной температуры и струи-водопады, под которыми можно подставить плечи как под массаж.", mapQuery: "Banjar Hot Spring", tag: "спа/сауна", cost: "20k", rating: 4.3, reviews: 4047 },
      { name: "Brahmavihara-Arama", desc: "Крупнейший буддийский монастырь Бали. Внутри миниатюрная копия индонезийского Боробудура, золотые ступы. С верхней террасы — панорама на побережье Ловины.", mapQuery: "Brahmavihara Arama Buleleng", tag: "храм", cost: "бесплатно", rating: 4.8, reviews: 2738 },
      { name: "Bioluminescent Plankton Tour (Lovina Beach)", desc: "Ночной тур на лодке к скоплениям светящегося планктона: вода вокруг лодки мерцает голубым при каждом движении руки или весла. Сезон май–август, конец июня — пик.", mapQuery: "Lovina Beach", mapUrl: "https://maps.app.goo.gl/vfVCx9FCFkfeiXM19", tag: "вода", time: "21:00+", cost: "~300k/чел" },
      { name: "Lovina Dolphin Adventure (Erik)", desc: "Утренний выход на лодке к стаям дельфинов плюс плавание с маской у рифа. Erik этичен — не гонится с толпой шумных лодок, а отвозит подальше. Дельфины активны на рассвете.", mapQuery: "Lovina Dolphin Adventure Erik Bali", mapUrl: "https://maps.app.goo.gl/HdDz1uuo9kiicPjUA", tag: "вода", time: "05:00–07:30", cost: "~250–350k/чел" },
      { name: "Sekumpul Waterfall", desc: "Группа из 6–7 водопадов в джунглях, многими признаётся самым красивым каскадом Бали. Спуск по 500+ ступеней с переходом реки вброд. В сухой сезон тропа удобная.", mapQuery: "Sekumpul Waterfall", tag: "водопад", cost: "125–150k IDR с гидом", rating: 4.3, reviews: 2156 },
      { name: "Pura Ponjok Batu", desc: "Старинный храм из чёрного вулканического камня на скалистом мысу. У моря — символическая каменная лодка (по легенде здесь разбился монах). Туристов почти нет.", mapQuery: "Pura Ponjok Batu Bali", tag: "храм", time: "закат", cost: "бесплатно" },
    ],
    cafes: [
      { name: "Tanda Pizza Restaurant", price: "$$", kitchen: "Пиццерия", desc: "Лучшая пицца в Ловине — рейтинг 4.9, 1600+ отзывов. Пиццы из дровяной печи, пасты, вино.", mapQuery: "Tanda Pizza Restaurant Lovina", rating: 4.9, reviews: 1623 },
      { name: "Buda Bakery & Resto", price: "$$", kitchen: "Ресторан, пекарня", desc: "Свежий хлеб, торты, выпечка. Обеды: карри, креветки, сэндвичи. Открывается с 08:00.", mapQuery: "Buda Bakery Resto Lovina", rating: 4.7, reviews: 1016 },
      { name: "Secret Garden Restaurant", price: "$$$", kitchen: "Ресторан, healthy", desc: "Уютный сад, healthy-меню. Чек 250k+/чел. Подходит для особого ужина.", mapQuery: "Secret Garden Restaurant Lovina", rating: 4.7, reviews: 646 },
      { name: "Semina Restaurant", price: "$$", kitchen: "Индонезийская", desc: "Айам бетуту, морская паста, сочные бургеры. Один из стабильно лучших ужинов. До 22:30.", mapQuery: "Semina Restaurant Lovina", rating: 4.6, reviews: 427 },
      { name: "Warung Bambu Pemaron", price: "$$", kitchen: "Индонезийская, балийский сет", desc: "Must-try. Сет из 12 балийских блюд, бамбуковый павильон. Открывается с 11:00.", mapQuery: "Warung Bambu Pemaron Lovina", rating: 4.6, reviews: 385 },
      { name: "Lemongrass Resto", price: "$$", kitchen: "Ресторан, тайская", desc: "Тайские и западные блюда. Стабильное место. Откр. с 11:00.", mapQuery: "Lemongrass Resto Lovina", rating: 4.8, reviews: 212 },
      { name: "COFFEENOSKY (Temporary Space)", price: "$$", kitchen: "Кафе, бранч", desc: "Приятная терраса. Круассаны, avo toast, eggs benedict, неплохой кофе.", mapQuery: "Coffeenosky Lovina", rating: 4.5, reviews: 906 },
    ],
    workspaces: [
      { name: "COFFEENOSKY (Temporary Space)", type: "Кафе-коворкинг", equipment: "Wifi, розетки, кофе, столы", desc: "Главное место Ловины для работы. Хороший wifi, комфортные столы, много отзывов.", mapQuery: "Coffeenosky Lovina", rating: 4.5, reviews: 906, price: "средний чек 100–150k" },
      { name: "Cafe Leo", type: "Кафе с wifi", equipment: "Wifi, столы, еда, кофе", desc: "Уютный cafe в центре туристической зоны с бесплатным wifi. Откр. с 07:00.", mapQuery: "Cafe Leo Lovina", rating: 4.7, reviews: 165, price: "70–120k" },
      { name: "Dari coffee & panini", type: "Кафе с wifi", equipment: "Wifi, кофе, panini", desc: "Европейское кафе со спешелти-кофе и panini. Хорошее место для работы на пару часов.", mapQuery: "Dari coffee panini Lovina", rating: 4.8, reviews: 87, price: "60–100k" },
    ],
    days: [
      { date: "26 июня", weekday: "пт", title: "Переезд из Амеда с остановками", items: [
        { time: "7:30", text: "Подъём, завтрак" },
        { time: "8:30", text: "Выезд Амед → Ловина (2 ч 12 мин, 86 км)", emoji: "🛵" },
        { time: "", text: "Остановки: Tejakula, Les Waterfall 60м, Air Sanih" },
        { time: "13:00", text: "Приехали, заселение, обед" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "27 июня", weekday: "сб", title: "🎯 Aling-Aling + планктон", isWeekend: true, items: [
        { time: "9:00", text: "Завтрак" },
        { time: "10:00", text: "Aling-Aling Waterfall — прыжки 5/10/15 м", emoji: "🎯", highlight: true },
        { time: "13:00", text: "По пути — Gitgit Waterfall" },
        { time: "14:30", text: "Обед в Secret Garden" },
        { time: "18:30", text: "Закат на Kalibukbuk Beach" },
        { time: "20:00", text: "Ужин в Nia Bar" },
        { time: "21:30", text: "Bioluminescent plankton tour", emoji: "🌙", highlight: true },
      ]},
      { date: "28 июня", weekday: "вс", title: "🐬 Дельфины + Banjar", isWeekend: true, items: [
        { time: "4:30", text: "Подъём", emoji: "⏰" },
        { time: "5:00", text: "Лодка на дельфинов", emoji: "🐬", highlight: true },
        { time: "7:00", text: "Завтрак в The Damai / Buddha Banana" },
        { time: "10:00", text: "Banjar Hot Springs", emoji: "♨️" },
        { time: "12:00", text: "Brahmavihara-Arama монастырь" },
        { time: "13:30", text: "Обед, отдых" },
      ]},
    ],
  },

  // =========================================================
  {
    slug: "pemuteran",
    name: "Пемутеран",
    nights: 2,
    dates: "29 июня – 1 июля",
    summary: "Menjangan Island snorkeling, Biorock, черепахи, тихо",
    emoji: "🐢",
    color: "ocean",
    arriveFrom: "lovina",
    hotels: [
      { name: "Mango Tree Inn", mapUrl: "https://maps.app.goo.gl/XnJRmWwpp9P6vxib8", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=VVF23pGfuo9M2F6J;aid=304142;lang=ru;source=mytrips", bookingProvider: "Booking" },
    ],
    spots: [
      { name: "Menjangan Island snorkel/dive", desc: "Остров в Западно-Балийском национальном парке. Нетронутые коралловые стены, видимость до 30 м, черепахи и рифовые акулы. Конец июня — пик видимости в году.", mapQuery: "Menjangan Island Bali", tag: "вода", cost: "400–600k/чел", rating: 4.7, reviews: 389 },
      { name: "Biorock Pemuteran", desc: "Крупнейший в мире проект восстановления коралловых рифов: металлические конструкции под слабым током стимулируют рост кораллов. Плавать с маской прямо у берега.", mapQuery: "Biorock Pemuteran Bay", tag: "вода", cost: "бесплатно", rating: 4.6, reviews: 334 },
      { name: "Reef Seen Turtle Project", desc: "Питомник морских черепах при дайв-резорте. Выкупают у рыбаков яйца, инкубируют, выпускают мальков в океан. Кормление и шанс поучаствовать в выпуске ежедневно в 16:30.", mapQuery: "Reef Seen Turtle Project Pemuteran", tag: "другое", cost: "~50k", time: "выпуск 16:30", rating: 4.4, reviews: 379 },
      { name: "West Bali National Park", desc: "Заповедник на западе острова: мангры, саванна, пешие маршруты с гидом. Можно увидеть редкого балийского скворца, оленей и обезьян. В сухой сезон тропы не размыты.", mapQuery: "West Bali National Park", tag: "другое", rating: 4.4, reviews: 3137 },
      { name: "Pemuteran Beach sunset", desc: "Тихий пляж с чёрно-жёлтым песком в спокойной бухте. Кафе у воды, закаты с силуэтами вулканов острова Ява на горизонте.", mapQuery: "Pemuteran Beach", tag: "вода", time: "закат", rating: 4.3, reviews: 346 },
      { name: "Pulaki Temple", desc: "Один из шести главных морских храмов Бали у подножия скалы с видом на Яванское море. Главные обитатели — сотни макак, охраняющих территорию. Удобно по пути на Менджанган.", mapQuery: "Pulaki Temple Bali", tag: "храм", cost: "бесплатно", rating: 4.7, reviews: 1802 },
      { name: "Banyuwedang Hot Spring", desc: "Самый горячий природный источник Бали (~45°C) с минеральной водой. Бассейны, джакузи и спа на территории курорта Mimpi. Особенно хорошо вечером после плавания на Менджангане.", mapQuery: "Banyuwedang Hot Spring", tag: "спа/сауна", cost: "~50k IDR", rating: 4.5, reviews: 1091 },
    ],
    cafes: [
      { name: "Quarry", price: "$$", kitchen: "Ресторан, бистро", desc: "Рейтинг 5.0. Современное бистро, стильная атмосфера, европейское меню.", mapQuery: "Quarry Pemuteran", rating: 5.0, reviews: 234 },
      { name: "Warung Sunset", price: "$", kitchen: "Ресторан, закатная атмосфера", desc: "Рейтинг 5.0. Чек 25–50k. Терраса с видом на закат, семейная атмосфера.", mapQuery: "Warung Sunset Pemuteran", rating: 5.0, reviews: 56 },
      { name: "Warung Bukit Pemuteran", price: "$", kitchen: "Балийская", desc: "Варунг с видом. Чек 50–75k. Рейтинг 4.9, аутентичная балийская кухня.", mapQuery: "Warung Bukit Pemuteran", rating: 4.9, reviews: 399 },
      { name: "Lakawi", price: "$", kitchen: "Ресторан", desc: "Рейтинг 4.9. Чек 75–100k. Завтраки, обеды, ужины с видом на океан.", mapQuery: "Lakawi Pemuteran", rating: 4.9, reviews: 453 },
      { name: "K&A Grill", price: "$$", kitchen: "Ресторан, гриль", desc: "Гриль, пасты, салаты, морепродукты. Уютная веранда, 4.8★.", mapQuery: "K&A Grill Pemuteran", rating: 4.8, reviews: 296 },
      { name: "MANTRA SARI RESTO", price: "$$", kitchen: "Индонезийская", desc: "Ресторан индонезийской кухни с высоким рейтингом. Подходит для ежедневного питания.", mapQuery: "Mantra Sari Resto Pemuteran", rating: 4.8, reviews: 268 },
      { name: "The Sage Bali", price: "$$", kitchen: "Ресторан, healthy/веган", desc: "Healthy-блюда с акцентом на веган/вегет. Открывается с 09:00.", mapQuery: "The Sage Bali Pemuteran", rating: 4.8, reviews: 451 },
      { name: "La Casa Kita", price: "$$", kitchen: "Пиццерия", desc: "Пицца из дровяной печи. Ухоженный газон, вечерняя лайв-музыка.", mapQuery: "La Casa Kita Pemuteran", rating: 4.4, reviews: 479 },
    ],
    workspaces: [
      { name: "Warung Bukit Pemuteran", type: "Кафе с wifi", equipment: "Wifi, вид, кофе", desc: "Рейтинг 4.9. Единственный адекватный вариант в Пемутеране для работы с ноутом. Вечером — из отеля.", mapQuery: "Warung Bukit Pemuteran", rating: 4.9, reviews: 399, price: "50–75k" },
    ],
    workNote: "В Пемутеране практически нет мест для серьёзной работы. Вечером — только из отеля (Matahari Beach, Taman Sari, Puri Ganesha).",
    days: [
      { date: "29 июня", weekday: "пн", items: [
        { time: "10:00", text: "Выезд Ловина → Пемутеран (1 ч 11 мин, 48 км)", emoji: "🛵" },
        { time: "11:30", text: "Заселение" },
        { time: "12:00", text: "Biorock — снорк у берега", emoji: "🐠" },
        { time: "12:30", text: "Reef Seen Turtle Project", emoji: "🐢" },
        { time: "13:30", text: "Обед в Warung Kayu Manis" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "30 июня", weekday: "вт", title: "🤿 Menjangan Island", items: [
        { time: "7:00", text: "Подъём, лёгкий завтрак" },
        { time: "7:30", text: "На пирсе, лодка в West Bali NP" },
        { time: "8:00", text: "Snorkel / dive Menjangan", emoji: "🤿", highlight: true },
        { time: "12:30", text: "Возврат, обед в Seasalt" },
        { time: "14:00", text: "Работа", emoji: "💻" },
        { time: "19:00", text: "Ужин в The Kawi" },
      ]},
    ],
  },

  // =========================================================
  {
    slug: "munduk",
    name: "Мундук",
    nights: 3,
    dates: "1–4 июля",
    summary: "Водопады, озёра Буян/Тамблинган, храм Ulun Danu Beratan",
    emoji: "⛰",
    color: "jungle",
    arriveFrom: "pemuteran",
    hotels: [
      { name: "Clovehigh Cabin and Homestay", mapUrl: "https://maps.app.goo.gl/iz1C6gd9Ghzefwcv8", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=3VCTMFQ1xC6fRBqn;aid=304142;lang=ru;source=mytrips", bookingProvider: "Booking", nights: "первые ночи" },
      { name: "Munduk Farmhouse", mapUrl: "https://maps.app.goo.gl/coqjRWdqCKrqHgJX8", bookingUrl: "https://secure.booking.com/confirmation.html?auth_key=UJujyEW8WHETn3LI;aid=304142;lang=ru;source=mytrips", bookingProvider: "Booking", nights: "последние ночи" },
    ],
    spots: [
      { name: "Munduk Waterfall", desc: "Главный водопад деревни Мундук, ~15 м. Спуск по лестнице через джунгли 10–15 минут. В сухой сезон поток чуть слабее, но всё равно зрелищно.", mapQuery: "Munduk Waterfall", tag: "водопад", cost: "20k", rating: 4.6, reviews: 308 },
      { name: "Melanting Waterfall", desc: "Самый высокий водопад района — около 50 метров. Стоит среди кофейных и гвоздичных плантаций, 20 минут пешком от парковки.", mapQuery: "Melanting Waterfall Munduk", mapUrl: "https://maps.app.goo.gl/QFqA63yZMdP6PCdM8", tag: "водопад", rating: 4.7, reviews: 582 },
      { name: "Red Coral Waterfall", desc: "Водопад в комплексе Мундук с мощным потоком и постоянным туманом из брызг. Спуск 10–15 минут. Бассейн у подножия мелкий и каменистый — не для купания, но смотрится зрелищно.", mapQuery: "Red Coral Waterfall Munduk", tag: "водопад", rating: 4.4, reviews: 543 },
      { name: "Banyumala Twin Waterfall", desc: "Двойной каскад в джунглях возле деревни Ванагири. Под ним кристально чистый природный бассейн для купания.", mapQuery: "Banyumala Twin Waterfall", tag: "водопад", cost: "30k", rating: 4.8, reviews: 5213 },
      { name: "Twin Lakes Viewpoint (Wanagiri)", desc: "Бесплатная смотровая на два озера — Буян и Тамблинган. Без качелей и платных фотозон, только природа и горный воздух.", mapQuery: "Twin Lake Viewpoint Munduk", tag: "другое", rating: 4.5, reviews: 142 },
      { name: "Pura Ulun Danu Beratan", desc: "Знаменитый «плавучий» индуистский храм XVII века на озере Братан — один из символов Бали (на банкноте 50 000 рупий). В сухой сезон — чистые отражения в озере.", mapQuery: "Ulun Danu Beratan Temple", mapUrl: "https://maps.app.goo.gl/v6QLuEcrEvuKBnz16", tag: "храм", time: "закат", cost: "75k", rating: 4.7, reviews: 938 },
      { name: "Bali Handara Gate", desc: "Знаменитые балийские ворота у входа в гольф-резорт Handara — самая инстаграмная точка региона. Рейтинг низкий из-за очередей за фото. Ехать к открытию в 7:00–8:00.", mapQuery: "Bali Handara Gate", mapUrl: "https://maps.app.goo.gl/zfq8PtiUnvWshXDMA", tag: "другое", cost: "50k", time: "7:00–8:00", rating: 3.8, reviews: 5233 },
      { name: "Banyu Wana Amertha Waterfalls", desc: "Комплекс из четырёх разных водопадов на одной несложной тропе. Пока не захвачен массовым туризмом — все четыре каскада сохраняют достойный поток.", mapQuery: "Banyu Wana Amertha Waterfall", tag: "водопад", cost: "30k за все 4", rating: 4.8, reviews: 1404 },
      { name: "Sunrise canoe Tamblingan", desc: "Рассветная прогулка на традиционном деревянном каноэ по горному озеру Тамблинган. Туман над водой, тишина джунглей. На рассвете в горах ~+18°C.", mapQuery: "Danau Tamblingan canoe sunrise", tag: "вода", time: "рассвет", cost: "~50k каноэ", rating: 4.7, reviews: 444 },
      { name: "Munduk Rice Terrace Loop", desc: "Кольцевой пеший маршрут ~3 км через действующие рисовые террасы и деревенские тропы. Виды на Яванское море и северные вулканы.", mapQuery: "Munduk Rice Terrace Loop", tag: "другое", cost: "бесплатно", rating: 4.6, reviews: 205 },
    ],
    cafes: [],
    workspaces: [],
    workNote: "Мундук — горная деревня. Еду и wifi ищи в отеле (Ngiring Ngewedang, Puri Lumbung и др.) либо перезагружайся тут без работы.",
    days: [
      { date: "1 июля", weekday: "ср", items: [
        { time: "9:00", text: "Выезд Пемутеран → Clovehigh (1 ч 22 мин, 55 км)", emoji: "🛵" },
        { time: "11:30", text: "Заселение" },
        { time: "12:00", text: "Обед в Ngiring Ngewedang" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "2 июля", weekday: "чт", title: "Водопады", items: [
        { time: "9:30", text: "Завтрак в Don Biyu" },
        { time: "10:30", text: "Munduk + Melanting водопады (1.5 ч)", emoji: "💦" },
        { time: "14:00", text: "Работа", emoji: "💻" },
      ]},
      { date: "3 июля", weekday: "пт", title: "Озёра + храм на закат", items: [
        { time: "9:00", text: "Подъём" },
        { time: "10:00", text: "Twin Lakes Viewpoint" },
        { time: "10:30", text: "Wanagiri Hidden Hills (20 мин)" },
        { time: "11:30", text: "Banyumala Twin Waterfall", emoji: "💦" },
        { time: "14:00", text: "Работа", emoji: "💻" },
        { time: "18:00", text: "Pura Ulun Danu Beratan на закате", emoji: "🏯", highlight: true },
      ]},
    ],
  },

  // =========================================================
  {
    slug: "bukit",
    name: "Букит",
    nights: 4,
    dates: "4–8 июля",
    summary: "Улувату, скалы, сёрф, закаты, Кечак-танец",
    emoji: "🌅",
    color: "sunset",
    arriveFrom: "munduk",
    hotels: [
      { name: "Manik Pandawa Villa", mapUrl: "https://maps.app.goo.gl/GRPeCtfP1vjRAqZh9", bookingUrl: "http://ru.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM95DA5HRD", bookingProvider: "Airbnb" },
    ],
    spots: [
      { name: "Pura Uluwatu", desc: "Индуистский храм на 70-метровом обрыве над океаном. На закате — традиционные танцы Кечак. ⚠️ Наглые макаки крадут очки и телефоны.", mapQuery: "Pura Uluwatu", tag: "храм", time: "к 17:00 закат", cost: "50k + Кечак 150k", rating: 4.6, reviews: 50866 },
      { name: "Padang Padang Beach", desc: "Маленький пляж в скальной расщелине. Прославлен фильмом «Ешь, молись, люби», у сёрферов знаменит мощной волной. Пятачок песка крошечный, с утра забит — приходить к 7–8 утра.", mapQuery: "Padang Padang Beach", tag: "вода", rating: 4.2, reviews: 8768 },
      { name: "Nyang Nyang Beach", desc: "Дикий километровый пляж под высоким обрывом. Спуск по крутой тропе минут 20. Почти пустой из-за сложного спуска и отсутствия туалетов. Купаться нельзя, но идеально для прогулки и фото.", mapQuery: "Nyang Nyang Beach", tag: "вода", rating: 4.5, reviews: 2262 },
      { name: "Bingin Beach", desc: "Узкий пляж под скалой с варунгами и сёрф-кафе. Место для сёрферов среднего и выше уровня.\n\n⚠️ Часть прибрежных кафе и хостелов снесли в 2025 — местами строительный мусор.", mapQuery: "Bingin Beach", tag: "вода", rating: 4.4, reviews: 1628 },
      { name: "Balangan Beach", desc: "Полукилометровая полоса золотого песка с волной для опытных сёрферов (лево-рифовая). Прибой сильный — новичкам в воду не лезть. На песке свободнее, чем на Падангe или Дримленде.", mapQuery: "Balangan Beach", tag: "вода", rating: 4.5, reviews: 2815 },
      { name: "Dreamland Beach", desc: "Широкий пляж с белым песком и волной для сёрферов среднего уровня. Инфраструктура запущенная — один грязный туалет на весь пляж.\n\n⚠️ Местные иногда незаконно собирают «плату за вход» — игнорировать.", mapQuery: "Dreamland Beach Bukit", tag: "вода", rating: 4.4, reviews: 7332 },
      { name: "Green Bowl Beach", desc: "Уединённая бухта внизу 300+ ступеней. Известна морскими звёздами в лужах отлива и обезьянами на тропе. Доступна только в отлив. Купаться опасно — течения и острые камни.", mapQuery: "Green Bowl Beach", tag: "вода", rating: 4.5, reviews: 2594 },
      { name: "Melasti Beach", desc: "Километровый пляж под известняковыми скалами с асфальтированным спуском, пляжными клубами и безопасным заходом в воду. Самый туристический пляж Букита — приезжать до 11:00 или после 16:00.", mapQuery: "Melasti Beach Bali", tag: "вода", rating: 4.8, reviews: 24339 },
      { name: "Pandawa Beach", desc: "Широкий семейный пляж за прорубленной в скалах дорогой со статуями героев Пандавов. Спокойная вода, каяки, зонтики. Днём туристические автобусы — ехать к 8–9 утра.", mapQuery: "Pandawa Beach", tag: "вода", cost: "15k", rating: 4.6, reviews: 10969 },
      { name: "Suluban Beach", desc: "Скрытая бухта через пещеру под скалой, прямо под Single Fin и культовой сёрф-волной Улувату. Волна мирового уровня, в воде плотная толпа сёрферов. Купаться нельзя — только зрелище и фото.", mapQuery: "Suluban Beach Uluwatu", tag: "вода", rating: 4.6, reviews: 1958 },
      { name: "Single Fin Uluwatu", desc: "Бар на скале над сёрф-волной Улувату. Главное закатное место Букита, особенно по средам и воскресеньям с диджеями. До 17:00 — иначе мест нет.", mapQuery: "Single Fin Uluwatu", tag: "бар", time: "к 17:00 закат", rating: 4.6, reviews: 12472 },
      { name: "The Rock Bar at Ayana", desc: "Бар на природных скалах в 14 метрах над океаном на территории резорта AYANA. Спускаться на фуникулёре. Столик бронировать заранее, не гостям отеля минимальный заказ ~350k.", mapQuery: "Rock Bar Ayana Bali", tag: "бар", time: "закат", cost: "минимум 350k", rating: 4.4, reviews: 8010 },
      { name: "Savaya Bali", desc: "Премиальный клуб-ресторан на 100-метровом обрыве с бассейном и вечеринками до 3 утра. Ехать именно на ивент — в обычный день половина территории закрыта. Вход ~€50 + минимальный заказ.", mapQuery: "Savaya Bali", tag: "бар", rating: 4.1, reviews: 5060 },
    ],
    cafes: [],
    workspaces: [],
    workNote: "Букит — финальные дни. Конкретные места не нужны, выбирай по настроению.",
    days: [
      { date: "4 июля", weekday: "пт", title: "Переезд Мундук → Букит через Джатилувих", items: [
        { time: "9:00", text: "Выезд Мундук → Джатилувих (52 мин, 37 км)", emoji: "🛵" },
        { time: "10:30", text: "Остановка в Джатилувих: UNESCO рисовые террасы, 1–2 часа", emoji: "🌾", highlight: true },
        { time: "12:30", text: "Обед в Gong Jatiluwih с панорамой" },
        { time: "14:00", text: "Выезд Джатилувих → Букит (1 ч 38 мин, 70 км)", emoji: "🛵" },
        { time: "17:00", text: "Заселение в Букит, пляж", emoji: "🏖" },
        { time: "20:00", text: "Ужин" },
      ]},
      { date: "5 июля", weekday: "сб", title: "День пляжей", isWeekend: true, items: [
        { time: "9:30", text: "Завтрак" },
        { time: "10:30", text: "Пляжи: Balangan / Dreamland / Melasti", emoji: "🏖" },
        { time: "13:00", text: "Обед у моря" },
        { time: "18:00", text: "Закат в Single Fin Uluwatu (субб-вс мощно)", emoji: "🌅", highlight: true },
      ]},
      { date: "6 июля", weekday: "вс", items: [
        { time: "9:30", text: "Завтрак, серф / пляж (Padang Padang / Bingin)" },
        { time: "13:00", text: "Обед" },
        { time: "14:00", text: "Работа", emoji: "💻" },
        { time: "18:00", text: "Закат в Rock Bar Ayana / Savaya", emoji: "🌅" },
      ]},
      { date: "7 июля", weekday: "пн", title: "Последний день на Бали", items: [
        { time: "9:30", text: "Бассейн / пляж (Nyang Nyang / Green Bowl)" },
        { time: "13:00", text: "Обед" },
        { time: "14:00", text: "Работа (последний день)", emoji: "💻" },
        { time: "18:00", text: "Прощальный закат на Букит", emoji: "🌅", highlight: true },
        { time: "20:30", text: "Прощальный ужин" },
      ]},
    ],
  },
];

export function getPlace(slug: string): Place | undefined {
  return PLACES.find((p) => p.slug === slug);
}
