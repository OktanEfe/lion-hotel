// src/app/lion-teras/page.tsx
import Image from "next/image";
import Link from "next/link";

const BRAND = {
  ink: "#0A0A0A",
  purple: "#A000FF",
  cyan: "#4FE0E0",
  blue: "#4FA8FF",
  pink: "#FF4FD8",
};

const features = [
  { icon: "🎧", title: "Canlı DJ / Akustik", desc: "Haftanın 5 gecesi DJ set, seçili günlerde akustik performans." },
  { icon: "🍸", title: "İmza Kokteyller",   desc: "Merdiven’e özel neon dokunuşlu, dengeli tatlar." },
  { icon: "🥂", title: "Geniş Bar",         desc: "Seçkin şaraplar, craft bira ve premium distile içkiler." },
  { icon: "🌆", title: "Manzara",           desc: "Altın ışıklar, şehir silüeti ve sıcak ambiyans." },
];

export const metadata = {
  title: "Merdiven Bar & Lounge | Lion Teras",
  description: "Canlı müzik, imza kokteyller ve geceye uygun atmosfer.",
};

export default function LionTerasPage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      {/* HERO */}
      <section
        className="relative h-[92vh] min-h-[640px] w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(160,0,255,.35), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(79,168,255,.25), transparent 60%)",
        }}
      >
        <Image
          src="/lion-teras/hero.jpg"
          alt="Merdiven Bar & Lounge"
          fill
          className="object-cover opacity-[.22]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,rgba(0,0,0,.65)_60%,rgba(0,0,0,.85)_100%)]" />

        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-sm tracking-[0.28em] text-white/70">
              <span>MERDİVEN</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND.purple }} />
              <span>BAR & LOUNGE</span>
            </div>

            <h1
              className="mt-3 text-[58px] leading-[1.02] md:text-[96px] font-normal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lion Teras
            </h1>

            <p className="mt-5 max-w-2xl text-white/85">
              Canlı müzik ve imza kokteyllerle, geceleri neon bir ritme taşıyoruz.
              Gün batımında manzarayı, geceleri altın‑siyah atmosferi keşfet.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lion-teras/menu"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[12px] tracking-[0.22em] border transition-transform hover:scale-[1.04] hover:shadow-lg"
                style={{
                  borderColor: BRAND.purple,
                  background: "linear-gradient(90deg, rgba(160,0,255,.15), rgba(79,168,255,.15))",
                }}
              >
                QR MENÜ
              </Link>

              <a
                href="#lineup"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[12px] tracking-[0.22em] border border-white/30 hover:bg-white hover:text-black transition-all hover:scale-[1.04] hover:shadow-lg"
              >
                LINE‑UP
              </a>
            </div>
          </div>

          {/* logo */}
          <div className="ml-auto hidden md:block">
            <div
              className="relative w-[140px] h-[140px] rounded-full grid place-items-center"
              style={{
                boxShadow: `0 0 0 2px ${BRAND.purple}`,
                background: "linear-gradient(145deg, rgba(79,224,224,.08), rgba(255,79,216,.06))",
              }}
            >
              <Image src="/lion-teras/logo.png" alt="Merdiven Logo" width={110} height={110} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP (koyu) */}
      <section className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 bg-[rgba(255,255,255,.03)] hover:bg-[rgba(255,255,255,.06)] transition"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}
            >
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-3 font-medium">{f.title}</div>
              <p className="mt-1 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SPLIT (koyu) */}
      <section className="container mx-auto px-6 pb-8 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/lion-teras/story-1.jpg"
            alt="Ambiyans"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
          <div
            className="absolute -right-6 -bottom-6 w-40 h-40 rounded-xl"
            style={{
              background: "linear-gradient(135deg, rgba(79,224,224,.25), rgba(160,0,255,.25))",
              filter: "blur(18px)",
            }}
          />
        </div>

        <div>
          <p className="text-xs tracking-[0.28em] text-white/70">HİKAYE</p>
          <h2
            className="mt-2 text-[42px] md:text-[64px] leading-[1.04]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Şehrin üstünde neon bir gece
          </h2>
          <p className="mt-4 text-white/85">
            Merdiven; imza kokteyller, seçilmiş müzik ve iyi hissettiren bir ritim.
            Her yudumda denge, her notada sıcaklık.
          </p>
          <ul className="mt-5 space-y-2 text-white/80 text-sm">
            <li>• İmza kokteyller (neon dokunuşlu)</li>
            <li>• DJ set / akustik performans geceleri</li>
            <li>• Geceye uygun modern servis & sunum</li>
          </ul>
        </div>
      </section>

      {/* LINE‑UP & ETKİNLİKLER — bg BEYAZ + neon vurgular */}
      <section id="lineup" className="bg-white text-black">
        <div className="container mx-auto px-6 py-14 md:py-20">
          {/* Üst bilgilendirme bandı */}
          <div className="mb-8 md:mb-10 inline-flex items-center gap-3 rounded-full pl-3 pr-4 py-2"
               style={{ background: "linear-gradient(90deg, rgba(160,0,255,.12), rgba(79,168,255,.12))" }}>
            <span className="h-2 w-2 rounded-full" style={{ background: BRAND.purple }} />
            <span className="text-xs tracking-[0.22em] font-medium text-black/80">
              CUMA & CUMARTESİ: CANLI MÜZİK
            </span>
          </div>

          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h3
              className="text-[34px] md:text-[48px] leading-[1.04]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Line‑Up & Etkinlikler
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-full text-[12px] tracking-[0.22em] border transition-all hover:scale-[1.04]"
              style={{ borderColor: BRAND.blue }}
            >
              REZERVASYON
            </a>
          </div>

          {/* Kategori kartları */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Partiler",
                desc: "DJ Set — Nu Disco, House Classics. Gece 22:00 sonrası yükselen tempo.",
                glow: BRAND.pink,
              },
              {
                title: "Üniversite Partileri",
                desc: "Sezon boyunca kampüs temalı özel geceler, sürpriz line‑up’lar.",
                glow: BRAND.blue,
              },
              {
                title: "Morning",
                desc: "Pazar sabahı chill sesler; sakin kahvaltı & erken kokteyl eşliği.",
                glow: BRAND.cyan,
              },
            ].map((k) => (
              <div
                key={k.title}
                className="relative rounded-2xl p-6 md:p-7 bg-white border border-black/10 hover:shadow-xl transition"
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl"
                  style={{
                    boxShadow: `0 0 0 1px rgba(0,0,0,.05), 0 10px 40px ${k.glow}30`,
                  }}
                />
                <h4
                  className="text-[22px] md:text-[26px]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {k.title}
                </h4>
                <p className="mt-2 text-[15px] text-black/70">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND — “Neon’da Buluşalım” (TEKRAR SİYAH) */}
      <section className="relative bg-[#0A0A0A]">
        <div className="container mx-auto px-6 py-12 md:py-16 text-center">
          <h4
            className="text-[28px] md:text-[40px] text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Neon’da Buluşalım
          </h4>
          <p className="mt-2 text-white/80">
            QR menüye göz at, gönlünü çelen kokteyli keşfet.
          </p>

          <div className="mt-6 flex gap-3 justify-center">
            <Link
              href="/lion-teras/menu"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full text-[12px] tracking-[0.22em] border border-white/70 hover:bg-white hover:text-black transition-all hover:scale-[1.04] hover:shadow-lg"
            >
              QR MENÜ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full text-[12px] tracking-[0.22em] transition-transform hover:scale-[1.04] hover:shadow-lg"
              style={{
                background: "linear-gradient(90deg, rgba(160,0,255,.9), rgba(79,168,255,.9))",
              }}
            >
              REZERVASYON
            </Link>
          </div>
        </div>

        {/* üstten alttaki köşeye neon dalga */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-10 h-[280px] w-[420px] blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(600px 260px at 10% 20%, rgba(160,0,255,.75), transparent 60%), radial-gradient(400px 240px at 90% 80%, rgba(79,168,255,.6), transparent 60%)",
          }}
        />
      </section>
    </main>
  );
}