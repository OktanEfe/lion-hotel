// src/app/lion-teras/menu/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import rawMenu from "@/lib/qr-menu.json";

/* ---------- Tipler ---------- */
type MenuItem = { name: string; price: string; image?: string; desc?: string; tag?: string };
type MenuCategory = { id: string; title: string; image?: string; items: MenuItem[] };
type MenuData = { categories: MenuCategory[] };

/* JSON'u tipe oturt */
const MENU: MenuData = rawMenu as MenuData;

/* ---------- Tema ---------- */
const UI = { ink: "#0B0B0B", paper: "#FFFFFF", beige: "#efdfcf", gold: "#CBA135" };

/* ---------- Çok hafif giriş animasyonu (stagger) ---------- */
function useEnter<T extends HTMLElement>(ref: React.RefObject<T | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // başlangıç durumunu güvene al
    el.classList.add("opacity-0", "translate-y-2");
    // raf + timeout ile gecikmeli görünür yap
    const id = window.setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-2");
      el.classList.add("opacity-100", "translate-y-0");
    }, delay);
    return () => window.clearTimeout(id);
  }, [ref, delay]);
}

/* Sadece bu sayfada Navbar/Footer gizle */
function useQrFlag() {
  useEffect(() => {
    document.body.classList.add("qr-menu");
    return () => document.body.classList.remove("qr-menu");
  }, []);
}

export default function MenuPage() {
  useQrFlag();

  const categories = MENU.categories;

  const [active, setActive] = useState<MenuCategory | null>(null);

  const items = useMemo(() => (active ? active.items : []), [active]);

  return (
    <main className="min-h-screen" style={{ background: UI.paper, color: UI.ink }}>
      <header className="qr-header sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <div className="container mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          {active ? (
            <>
              <button
                onClick={() => setActive(null)}
                className="h-9 px-4 rounded-full border text-xs tracking-[0.18em] hover:bg-black hover:text-white transition"
                style={{ borderColor: "rgba(0,0,0,.2)" }}
                aria-label="Kategorilere dön"
              >
                ← KATEGORİLERE DÖN
              </button>

              <div className="ml-auto text-sm md:text-base font-medium truncate">
                {active.title}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-base md:text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                QR Menü — Merdiven
              </h1>

              <div className="ml-auto" />

              <Link
                href="/"
                className="h-9 px-4 rounded-full border text-xs tracking-[0.18em] grid place-items-center hover:bg-black hover:text-white transition"
                style={{ borderColor: "rgba(0,0,0,.2)" }}
              >
                SİTEMİZİ ZİYARET EDİN
              </Link>
            </>
          )}
        </div>
      </header>

      <div className="h-3 sm:h-4" />

      {!active && (
        <section className="container mx-auto px-4 sm:px-6 pt-2 sm:pt-4 pb-8 sm:pb-12">
          <div className="mb-5 sm:mb-8">
            <h2
              className="text-[26px] sm:text-[32px] md:text-[40px] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kategoriler
            </h2>
            <p className="text-black/65 text-sm md:text-[15px]">
              İstediğiniz kategoriyi seçin; ürünleri detaylı görün.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
            {categories.map((c, idx) => (
              <CategoryCard key={c.id} c={c} onOpen={() => setActive(c)} idx={idx} />
            ))}
          </div>
        </section>
      )}

      {active && (
        <section className="container mx-auto px-4 sm:px-6 pt-2 sm:pt-4 pb-8 sm:pb-12">
          <div
            className="rounded-2xl p-2 md:p-3 ring-1"
            style={{ background: UI.beige, boxShadow: "0 10px 30px rgba(0,0,0,.06)", borderColor: "rgba(0,0,0,.06)" }}
          >
            <ul className="divide-y" style={{ borderColor: "rgba(0,0,0,.08)" }}>
              {items.map((i, idx) => (
                <ItemRow key={i.name} item={i} idx={idx} />
              ))}
              {items.length === 0 && (
                <li className="py-12 text-center text-black/55 text-sm">Bu kategoride ürün bulunamadı.</li>
              )}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

function CategoryCard({ c, onOpen, idx }: { c: MenuCategory; onOpen: () => void; idx: number }) {
  const ref = useRef<HTMLButtonElement | null>(null);
  useEnter(ref, Math.min(idx * 70, 300));

  return (
    <button
      ref={ref}
      onClick={onOpen}
      className="opacity-0 translate-y-2 transition duration-300 ease-out group relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-black/10 focus:outline-none"
      title={c.title}
    >
      {c.image ? (
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 45vw, (max-width:1024px) 30vw, 260px"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: UI.beige }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
        <div
          className="text-white text-[16px] sm:text-[18px] md:text-[20px] drop-shadow"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {c.title}
        </div>
        <div className="text-white/85 text-[11px] sm:text-xs">{c.items.length} ürün</div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/70 transition" />
    </button>
  );
}

function ItemRow({ item, idx }: { item: MenuItem; idx: number }) {
  const ref = useRef<HTMLLIElement | null>(null);
  useEnter(ref, Math.min(idx * 35, 250));

  return (
    <li
      ref={ref}
      className="opacity-0 translate-y-2 transition duration-300 ease-out grid grid-cols-[1fr_auto] gap-4 items-center py-4 md:py-5 px-2 md:px-3"
    >
      <div className="min-w-0">
        <div className="font-medium text-[18px] md:text-[19px] leading-[1.25]">{item.name}</div>
        {item.desc && (
          <div className="mt-1 text-black/70 text-[15px] md:text-[16px] leading-[1.5]">
            {item.desc}
          </div>
        )}
        {item.tag && (
          <span
            className="inline-block mt-2 text-[10px] tracking-widest rounded-full px-2 py-0.5 border"
            style={{ borderColor: UI.gold, color: UI.ink, background: "#f6eddc" }}
          >
            {item.tag.toUpperCase()}
          </span>
        )}
      </div>

      <div className="ml-auto pl-2 text-[16px] md:text-[18px] font-medium whitespace-nowrap">
        {item.price}
      </div>
    </li>
  );
}