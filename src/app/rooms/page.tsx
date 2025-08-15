// src/app/rooms/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ROOMS } from "@/lib/rooms";
import { useState } from "react";
import ReserveModal from "@/components/ReserveModal";

export default function RoomsPage() {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative">
        <div className="relative w-full aspect-[16/7] md:aspect-[16/5] overflow-hidden">
          <Image
            src="/rooms/hero.jpg" // /public/rooms/hero.jpg
            alt="Odalarımızı Keşfedin"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,rgba(0,0,0,.15)_35%,rgba(0,0,0,.35)_100%)]" />
          <div className="absolute inset-0">
            <div className="container h-full px-4 sm:px-6 lg:px-8 flex items-end pb-8 md:pb-10">
              <div className="text-white">
                <p className="text-[11px] tracking-[0.28em] opacity-85">ROOMS</p>
                <h1
                  className="mt-2 text-[36px] sm:text-[44px] md:text-[72px] leading-[1.02]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Odalarımızı Keşfedin
                </h1>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-white/90">
                  Farklı ihtiyaçlara uygun 6 oda tipimiz var. Detayları inceleyin,
                  fotoğraflara göz atın ve size en uygun konforu seçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID (6 kart, fiyat yok) */}
      <section>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((r) => (
              <Link
                key={r.slug}
                href={`/rooms/${r.slug}`}
                className="group block rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,.08)] transition"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={r.cover}
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-[20px] sm:text-[22px]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {r.name}
                  </h3>
                  <p className="mt-1 text-sm text-black/65">
                    {r.specs?.area} · {r.specs?.bed}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Rezervasyon CTA → Modal */}
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={() => setReserveOpen(true)}
              className="inline-flex h-11 md:h-12 items-center justify-center px-8 rounded-full border border-black/40 text-[12px] tracking-[0.18em] hover:bg-black hover:text-white transition"
            >
              REZERVASYON İÇİN TIKLAYIN
            </button>
          </div>
        </div>
      </section>

      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </main>
  );
}