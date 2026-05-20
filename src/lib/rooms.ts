import "server-only";
import fs from "fs";
import path from "path";

export type RoomSlug =
  | "aile-odasi"
  | "deniz-manzarali-balkonsuz"
  | "deniz-manzarali-balkonlu"
  | "standart-oda"
  | "bir-arti-bir-oda"
  | "suit-oda";

export type Room = {
  slug: RoomSlug;
  name: string;
  priceFrom: number;
  cover: string;
  gallery: string[];
  isAvailable: boolean;
  availabilityLabel: string;
  specs: { area: string; bed: string; view: string };
  hero: string;
  split1: { imageLeft: string; textRight: string };
  split2: { textLeft: string; imageRight: string };
  amenities: { label: string; icon: string }[];
  amenitiesBanner: {
    banner: string;
    thumb1: string;
    thumb2: string;
    title: string;
    text: string;
  };
};

const preferredRoomOrder: RoomSlug[] = [
  "bir-arti-bir-oda",
  "deniz-manzarali-balkonsuz",
  "deniz-manzarali-balkonlu",
  "standart-oda",
  "aile-odasi",
  "suit-oda",
];

const baseAmenities = [
  { label: "Wi-Fi", icon: "wifi" },
  { label: "Klima", icon: "air" },
  { label: "Duş", icon: "shower" },
  { label: "Çift Kişilik Yatak", icon: "bed" },
  { label: "Sessiz Oda", icon: "quiet" },
  { label: "Manzara", icon: "view" },
];

const roomImage = (folder: RoomSlug, file: string) => `/rooms/${folder}/${file}`;
const roomHero = (folder: RoomSlug) => roomImage(folder, "hero.jpg");
const fallbackRoomImage = "/hero/rooms/140-DSCF5085.jpg";
const roomFileExists = (folder: RoomSlug, file: string) =>
  fs.existsSync(path.join(process.cwd(), "public", "rooms", folder, file));
const roomGallery = (folder: RoomSlug) =>
  [1, 2, 3, 4, 5, 6]
    .map((number) => `${number}.jpg`)
    .filter((file) => roomFileExists(folder, file))
    .map((file) => roomImage(folder, file));
const buildRoomImages = (folder: RoomSlug) => {
  const heroExists = roomFileExists(folder, "hero.jpg");
  const gallery = roomGallery(folder);
  const isAvailable = heroExists && gallery.length > 0;
  const cover = heroExists ? roomHero(folder) : fallbackRoomImage;

  return {
    cover,
    hero: cover,
    gallery,
    isAvailable,
    availabilityLabel: isAvailable ? "" : "Yakında",
    split1: gallery[0] ?? cover,
    split2: gallery[1] ?? cover,
    banner: gallery[2] ?? cover,
    thumb1: gallery[3] ?? cover,
    thumb2: gallery[4] ?? cover,
  };
};

const aileOdasiImages = buildRoomImages("aile-odasi");
const denizManzaraliBalkonsuzImages = buildRoomImages("deniz-manzarali-balkonsuz");
const denizManzaraliBalkonluImages = buildRoomImages("deniz-manzarali-balkonlu");
const standartOdaImages = buildRoomImages("standart-oda");
const birArtiBirOdaImages = buildRoomImages("bir-arti-bir-oda");
const suitOdaImages = buildRoomImages("suit-oda");

export const ROOMS: Room[] = [
  {
    slug: "aile-odasi",
    name: "Triple Oda",
    priceFrom: 299,
    cover: aileOdasiImages.cover,
    gallery: aileOdasiImages.gallery,
    isAvailable: aileOdasiImages.isAvailable,
    availabilityLabel: aileOdasiImages.availabilityLabel,
    specs: { area: "17-25 m²", bed: "1 Double + 1 Single", view: "Şehir / Avlu" },
    hero: aileOdasiImages.hero,
    split1: {
      imageLeft: aileOdasiImages.split1,
      textRight: "Üç kişilik konaklamalar için dengeli, ferah ve kullanışlı bir plan.",
    },
    split2: {
      textLeft: "Yumuşak malzemeler, sade mobilyalar ve pratik kullanım alanları.",
      imageRight: aileOdasiImages.split2,
    },
    amenities: baseAmenities,
    amenitiesBanner: {
      banner: aileOdasiImages.banner,
      thumb1: aileOdasiImages.thumb1,
      thumb2: aileOdasiImages.thumb2,
      title: "Üç Kişilik Konfor",
      text: "Birlikte konaklayan misafirler için sakin ve dengeli bir oda atmosferi.",
    },
  },
  {
    slug: "deniz-manzarali-balkonsuz",
    name: "Deniz Manzaralı Balkonsuz Oda",
    priceFrom: 189,
    cover: denizManzaraliBalkonsuzImages.cover,
    gallery: denizManzaraliBalkonsuzImages.gallery,
    isAvailable: denizManzaraliBalkonsuzImages.isAvailable,
    availabilityLabel: denizManzaraliBalkonsuzImages.availabilityLabel,
    specs: { area: "15-20 m²", bed: "Queen / Twin", view: "Deniz Manzarası" },
    hero: denizManzaraliBalkonsuzImages.hero,
    split1: {
      imageLeft: denizManzaraliBalkonsuzImages.split1,
      textRight:
        "Sade çizgiler, ferah bir plan ve gün ışığını içeri alan deniz manzaralı bir atmosfer.",
    },
    split2: {
      textLeft: "Kısa tatiller ve iş seyahatleri için konforlu, sakin ve kullanışlı bir oda.",
      imageRight: denizManzaraliBalkonsuzImages.split2,
    },
    amenities: baseAmenities,
    amenitiesBanner: {
      banner: denizManzaraliBalkonsuzImages.banner,
      thumb1: denizManzaraliBalkonsuzImages.thumb1,
      thumb2: denizManzaraliBalkonsuzImages.thumb2,
      title: "Denize Bakan Sakinlik",
      text: "Rahat yataklar, sade detaylar ve manzarayı öne çıkaran dingin bir oda düzeni.",
    },
  },
  {
    slug: "deniz-manzarali-balkonlu",
    name: "Deniz Manzaralı Balkonlu Oda",
    priceFrom: 229,
    cover: denizManzaraliBalkonluImages.cover,
    gallery: denizManzaraliBalkonluImages.gallery,
    isAvailable: denizManzaraliBalkonluImages.isAvailable,
    availabilityLabel: denizManzaraliBalkonluImages.availabilityLabel,
    specs: { area: "20-25 m²", bed: "Queen / King", view: "Deniz Manzarası / Balkon" },
    hero: denizManzaraliBalkonluImages.hero,
    split1: {
      imageLeft: denizManzaraliBalkonluImages.split1,
      textRight: "Geniş balkon; sabah kahvesi ve akşam esintisi için açık hava.",
    },
    split2: {
      textLeft: "İçeride sıcak dokular, dışarıda esintili manzara; akışkan plan.",
      imageRight: denizManzaraliBalkonluImages.split2,
    },
    amenities: baseAmenities,
    amenitiesBanner: {
      banner: denizManzaraliBalkonluImages.banner,
      thumb1: denizManzaraliBalkonluImages.thumb1,
      thumb2: denizManzaraliBalkonluImages.thumb2,
      title: "Balkon Keyfi",
      text: "Balkonda gün doğumu, odada huzurlu atmosfer.",
    },
  },
  {
    slug: "standart-oda",
    name: "Standart Oda",
    priceFrom: 169,
    cover: standartOdaImages.cover,
    gallery: standartOdaImages.gallery,
    isAvailable: standartOdaImages.isAvailable,
    availabilityLabel: standartOdaImages.availabilityLabel,
    specs: { area: "12-15 m²", bed: "Queen / Twin", view: "Şehir / Avlu" },
    hero: standartOdaImages.hero,
    split1: {
      imageLeft: standartOdaImages.split1,
      textRight: "Minimal ve fonksiyonel; kısa konaklamalar için ideal.",
    },
    split2: {
      textLeft: "Doğal ışık, akıllı depolama ve ergonomik yerleşim.",
      imageRight: standartOdaImages.split2,
    },
    amenities: baseAmenities,
    amenitiesBanner: {
      banner: standartOdaImages.banner,
      thumb1: standartOdaImages.thumb1,
      thumb2: standartOdaImages.thumb2,
      title: "Sade ve Kullanışlı",
      text: "Sade çizgiler, temiz detaylar ve rahat bir konaklama.",
    },
  },
  {
    slug: "bir-arti-bir-oda",
    name: "1+1 Oda",
    priceFrom: 279,
    cover: birArtiBirOdaImages.cover,
    gallery: birArtiBirOdaImages.gallery,
    isAvailable: birArtiBirOdaImages.isAvailable,
    availabilityLabel: birArtiBirOdaImages.availabilityLabel,
    specs: { area: "25-35 m²", bed: "King + Kanepe", view: "Avlu / Şehir" },
    hero: birArtiBirOdaImages.hero,
    split1: {
      imageLeft: birArtiBirOdaImages.split1,
      textRight: "Ayrı yatak odası ve oturma alanı; aileler ve uzun kalışlar için ideal.",
    },
    split2: {
      textLeft: "Aydınlık mekanlar, yumuşak dokular ve işlevsel mobilyalar.",
      imageRight: birArtiBirOdaImages.split2,
    },
    amenities: baseAmenities,
    amenitiesBanner: {
      banner: birArtiBirOdaImages.banner,
      thumb1: birArtiBirOdaImages.thumb1,
      thumb2: birArtiBirOdaImages.thumb2,
      title: "Uzun Kalış Konforu",
      text: "Günün temposuna göre şekillenen esnek bir konfor deneyimi.",
    },
  },
  {
    slug: "suit-oda",
    name: "Suite Oda",
    priceFrom: 259,
    cover: suitOdaImages.cover,
    gallery: suitOdaImages.gallery,
    isAvailable: suitOdaImages.isAvailable,
    availabilityLabel: suitOdaImages.availabilityLabel,
    specs: { area: "25-30 m²", bed: "King-size", view: "Şehir / Kısmi Deniz" },
    hero: suitOdaImages.hero,
    split1: {
      imageLeft: suitOdaImages.split1,
      textRight: "Geniş yaşam alanı ve ayrı oturma bölümü ile uzun konaklamalara uygun.",
    },
    split2: {
      textLeft: "Çalışma ve dinlenme alanları dengeli; sessiz ve verimli bir gün.",
      imageRight: suitOdaImages.split2,
    },
    amenities: baseAmenities,
    amenitiesBanner: {
      banner: suitOdaImages.banner,
      thumb1: suitOdaImages.thumb1,
      thumb2: suitOdaImages.thumb2,
      title: "Geniş ve Rahat",
      text: "Zarif oturma alanı ve ev konforuna yaklaşan kullanışlı detaylar.",
    },
  },
];

export const SORTED_ROOMS: Room[] = [...ROOMS].sort((firstRoom, secondRoom) => {
  if (firstRoom.slug === "bir-arti-bir-oda") return -1;
  if (secondRoom.slug === "bir-arti-bir-oda") return 1;
  if (firstRoom.isAvailable !== secondRoom.isAvailable) {
    return firstRoom.isAvailable ? -1 : 1;
  }

  return (
    preferredRoomOrder.indexOf(firstRoom.slug) -
    preferredRoomOrder.indexOf(secondRoom.slug)
  );
});

export const ROOMS_ORDER: RoomSlug[] = SORTED_ROOMS.map((room) => room.slug);

export const findRoom = (slug: RoomSlug) => ROOMS.find((room) => room.slug === slug);
