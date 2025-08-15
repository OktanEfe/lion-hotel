// src/lib/teras-menu.ts
export type MenuItem = { id: string; name: string; desc?: string; price: number; badge?: string };
export type MenuCategory = { key: string; title: string; items: MenuItem[] };

export const TERAS_MENU: MenuCategory[] = [
  {
    key: "signature",
    title: "İmza Kokteyller",
    items: [
      { id: "sig-1", name: "Golden Negroni", desc: "Altın bitter, London dry gin, vermut", price: 360, badge: "popular" },
      { id: "sig-2", name: "Lion Sour", desc: "Bourbon, limon, yumurta akı, altın şurup", price: 340 },
    ],
  },
  {
    key: "classics",
    title: "Klasikler",
    items: [
      { id: "cls-1", name: "Old Fashioned", price: 320 },
      { id: "cls-2", name: "Negroni", price: 320 },
      { id: "cls-3", name: "Margarita", price: 310 },
    ],
  },
  {
    key: "wine",
    title: "Şaraplar",
    items: [
      { id: "w-1", name: "Şiraz Kadeh", price: 280 },
      { id: "w-2", name: "Sauvignon Blanc Kadeh", price: 280 },
    ],
  },
  {
    key: "beer",
    title: "Bira",
    items: [
      { id: "b-1", name: "Craft Lager", price: 220 },
      { id: "b-2", name: "IPA", price: 240 },
    ],
  },
  {
    key: "nonalc",
    title: "Alkolsüz",
    items: [
      { id: "n-1", name: "Ev Yapımı Limonata", price: 160 },
      { id: "n-2", name: "Cold Brew", price: 170 },
    ],
  },
];