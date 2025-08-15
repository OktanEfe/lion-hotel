// lib/rooms.ts
export type RoomSlug =
  | "deniz-manzarali-standart-oda"
  | "suite-oda"
  | "bir-arti-bir-oda"
  | "deniz-manzarali-balkonlu-oda"
  | "aile-odasi"
  | "standart-oda";

export type Room = {
  slug: RoomSlug;
  name: string;
  priceFrom: number;          // kart üstünde gösterim için (₺ veya $; istediğinde değiştirirsin)
  cover: string;              // kart görseli
  specs: { area: string; bed: string; view: string };
  hero: string;
  split1: { imageLeft: string; textRight: string };
  split2: { textLeft: string; imageRight: string };
  amenities: { label: string; icon: string }[];
  amenitiesBanner: {
    banner: string; thumb1: string; thumb2: string; title: string; text: string;
  };
  offers: {
    left: { image: string; title: string; href: string };
    right: { image: string; title: string; href: string };
  };
};

const baseAmenities = [
  { label: "Mountain View", icon: "⛰️" },
  { label: "King Bed", icon: "🛏️" },
  { label: "Shower Cabin", icon: "🚿" },
  { label: "Air Conditioning", icon: "❄️" },
  { label: "Wifi", icon: "📶" },
  { label: "No Smoking", icon: "🚭" },
] as const;

const offersCommon = {
  left: { image: "/rooms/offers/work-travel.jpg", title: "Work & Travel Offer", href: "#" },
  right: { image: "/rooms/offers/wedding.jpg",     title: "Wedding & Events",    href: "#" },
};

export const ROOMS: Room[] = [
  {
    slug: "deniz-manzarali-standart-oda",
    name: "Deniz Manzaralı Standart Oda",
    priceFrom: 189,
    cover: "/rooms/deniz-manzarali-standart-oda/card.jpg",
    specs: { area: "25–28 m²", bed: "Queen / Twin", view: "Sea View" },
    hero: "/rooms/deniz-manzarali-standart-oda/hero.jpg",
    split1: {
      imageLeft: "/rooms/deniz-manzarali-standart-oda/split-1-left.jpg",
      textRight: "Şık çizgiler ve sade bir plan. Gün batımında deniz manzarası, sabahları yumuşak ışıklar.",
    },
    split2: {
      textLeft: "Sessiz bir ritim, doğal malzemeler ve ferah bir akış.",
      imageRight: "/rooms/deniz-manzarali-standart-oda/split-2-right.jpg",
    },
    amenities: [...baseAmenities],
    amenitiesBanner: {
      banner: "/rooms/deniz-manzarali-standart-oda/amenities-banner.jpg",
      thumb1: "/rooms/deniz-manzarali-standart-oda/amenities-thumb-1.jpg",
      thumb2: "/rooms/deniz-manzarali-standart-oda/amenities-thumb-2.jpg",
      title: "Comfortable Stays",
      text: "Konforlu yataklar, zarif dokunuşlar ve nefes alan bir plan.",
    },
    offers: offersCommon,
  },
  {
    slug: "suite-oda",
    name: "Suite Oda",
    priceFrom: 259,
    cover: "/rooms/suite-oda/card.jpg",
    specs: { area: "40–45 m²", bed: "King-size", view: "City / Partial Sea" },
    hero: "/rooms/suite-oda/hero.jpg",
    split1: {
      imageLeft: "/rooms/suite-oda/split-1-left.jpg",
      textRight: "Geniş yaşam alanı ve ayrı oturma bölümü ile uzun konaklamalara uygun.",
    },
    split2: {
      textLeft: "Çalışma ve dinlenme alanları dengeli; sessiz ve verimli bir gün.",
      imageRight: "/rooms/suite-oda/split-2-right.jpg",
    },
    amenities: [...baseAmenities],
    amenitiesBanner: {
      banner: "/rooms/suite-oda/amenities-banner.jpg",
      thumb1: "/rooms/suite-oda/amenities-thumb-1.jpg",
      thumb2: "/rooms/suite-oda/amenities-thumb-2.jpg",
      title: "Comfortable Stays",
      text: "Zarif oturma alanı ve sofistike detaylar; ev konforunda.",
    },
    offers: offersCommon,
  },
  {
    slug: "bir-arti-bir-oda",
    name: "1+1 Oda",
    priceFrom: 279,
    cover: "/rooms/bir-arti-bir-oda/card.jpg",
    specs: { area: "45–52 m²", bed: "King + Sofa Bed", view: "Courtyard / City" },
    hero: "/rooms/bir-arti-bir-oda/hero.jpg",
    split1: {
      imageLeft: "/rooms/bir-arti-bir-oda/split-1-left.jpg",
      textRight: "Ayrı yatak odası ve oturma alanı; aileler ve uzun kalışlar için ideal.",
    },
    split2: {
      textLeft: "Aydınlık mekânlar, yumuşak dokular ve işlevsel mobilyalar.",
      imageRight: "/rooms/bir-arti-bir-oda/split-2-right.jpg",
    },
    amenities: [...baseAmenities],
    amenitiesBanner: {
      banner: "/rooms/bir-arti-bir-oda/amenities-banner.jpg",
      thumb1: "/rooms/bir-arti-bir-oda/amenities-thumb-1.jpg",
      thumb2: "/rooms/bir-arti-bir-oda/amenities-thumb-2.jpg",
      title: "Comfortable Stays",
      text: "Günün temposuna göre şekillenen esnek bir konfor deneyimi.",
    },
    offers: offersCommon,
  },
  {
    slug: "deniz-manzarali-balkonlu-oda",
    name: "Deniz Manzaralı Balkonlu Oda",
    priceFrom: 229,
    cover: "/rooms/deniz-manzarali-balkonlu-oda/card.jpg",
    specs: { area: "28–32 m²", bed: "Queen / King", view: "Sea View • Balcony" },
    hero: "/rooms/deniz-manzarali-balkonlu-oda/hero.jpg",
    split1: {
      imageLeft: "/rooms/deniz-manzarali-balkonlu-oda/split-1-left.jpg",
      textRight: "Geniş balkon; sabah kahvesi ve akşam kokteyli için açık hava.",
    },
    split2: {
      textLeft: "İçeride sıcak dokular, dışarıda esintili manzara; akışkan plan.",
      imageRight: "/rooms/deniz-manzarali-balkonlu-oda/split-2-right.jpg",
    },
    amenities: [...baseAmenities],
    amenitiesBanner: {
      banner: "/rooms/deniz-manzarali-balkonlu-oda/amenities-banner.jpg",
      thumb1: "/rooms/deniz-manzarali-balkonlu-oda/amenities-thumb-1.jpg",
      thumb2: "/rooms/deniz-manzarali-balkonlu-oda/amenities-thumb-2.jpg",
      title: "Comfortable Stays",
      text: "Balkonda gün doğumu, odada huzurlu atmosfer.",
    },
    offers: offersCommon,
  },
  {
    slug: "aile-odasi",
    name: "Aile Odası",
    priceFrom: 299,
    cover: "/rooms/aile-odasi/card.jpg",
    specs: { area: "40–48 m²", bed: "1 King + 2 Single", view: "City / Courtyard" },
    hero: "/rooms/aile-odasi/hero.jpg",
    split1: {
      imageLeft: "/rooms/aile-odasi/split-1-left.jpg",
      textRight: "Herkes için alan; çocuklar için güvenli, ebeveynler için ferah.",
    },
    split2: {
      textLeft: "Yumuşak malzemeler, sağlam mobilyalar ve kolay temizlenir yüzeyler.",
      imageRight: "/rooms/aile-odasi/split-2-right.jpg",
    },
    amenities: [...baseAmenities],
    amenitiesBanner: {
      banner: "/rooms/aile-odasi/amenities-banner.jpg",
      thumb1: "/rooms/aile-odasi/amenities-thumb-1.jpg",
      thumb2: "/rooms/aile-odasi/amenities-thumb-2.jpg",
      title: "Comfortable Stays",
      text: "Birlikte geçirilen zamanlara eşlik eden sıcak bir atmosfer.",
    },
    offers: offersCommon,
  },
  {
    slug: "standart-oda",
    name: "Standart Oda",
    priceFrom: 169,
    cover: "/rooms/standart-oda/card.jpg",
    specs: { area: "22–25 m²", bed: "Queen / Twin", view: "City / Courtyard" },
    hero: "/rooms/standart-oda/hero.jpg",
    split1: {
      imageLeft: "/rooms/standart-oda/split-1-left.jpg",
      textRight: "Minimal ve fonksiyonel; kısa konaklamalar için ideal.",
    },
    split2: {
      textLeft: "Doğal ışık, akıllı depolama ve ergonomik yerleşim.",
      imageRight: "/rooms/standart-oda/split-2-right.jpg",
    },
    amenities: [...baseAmenities],
    amenitiesBanner: {
      banner: "/rooms/standart-oda/amenities-banner.jpg",
      thumb1: "/rooms/standart-oda/amenities-thumb-1.jpg",
      thumb2: "/rooms/standart-oda/amenities-thumb-2.jpg",
      title: "Comfortable Stays",
      text: "Sade çizgiler ve yalın materyaller.",
    },
    offers: offersCommon,
  },
];

// kart sırası
export const ROOMS_ORDER: RoomSlug[] = ROOMS.map(r => r.slug);
export const findRoom = (slug: RoomSlug) => ROOMS.find(r => r.slug === slug);