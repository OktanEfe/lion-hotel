// src/components/LionTerasStory.tsx
import Link from "next/link";
import Image from "next/image";

export default function LionTerasStory() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Merdiven Lounge Deneyimi"
    >
      {/* ===== Arka Plan: gece kulübü paleti + animasyonlu dalga/ışık ===== */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b0b1a_0%,#12122a_40%,#1a1040_70%,#0a2347_100%)]" />

      {/* Parlak mor/indigo “dalga” – yumuşak blur + diagonal drift */}
      <div className="pointer-events-none absolute -top-1/3 -left-1/3 h-[120vmin] w-[120vmin] rounded-full blur-[70px] opacity-[.45] animate-[drift_16s_linear_infinite] bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,.55),transparent_55%),radial-gradient(circle_at_65%_60%,rgba(96,165,250,.45),transparent_60%)]" />
      {/* İkinci katman: daha koyu dalga, farklı hız */}
      <div className="pointer-events-none absolute top-1/4 -right-1/3 h-[120vmin] w-[120vmin] rounded-full blur-[90px] opacity-[.35] animate-[driftSlow_26s_linear_infinite] bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,.45),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,.40),transparent_65%)]" />

      {/* İnce tarama/ışık çizgileri */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[.08] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg,rgba(255,255,255,.18)_0px,rgba(255,255,255,.18)_1px,transparent_1px,transparent_9px)",
        }}
      />

      {/* ===== İçerik ===== */}
      <div className="relative container py-16 sm:py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Sol: METİN */}
          <div className="order-1 md:order-none">
            {/* Rozet */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span className="text-[11px] tracking-[0.22em] text-white/80">
                MERDİVEN&nbsp;LOUNGE
              </span>
            </div>

            {/* Başlık */}
            <h2
              className="mt-4 text-3xl sm:text-4xl md:text-[64px] leading-[1.08] text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Gece Mora Karışır,
              <br />
              Ritim Şehre Yayılır
            </h2>

            {/* İnce vurgu çizgisi */}
            <div className="mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400" />

            {/* Tanıtım paragrafı */}
            <p className="mt-5 text-[15px] sm:text-base md:text-lg text-white/85 max-w-xl">
              Morun enerjisi, indigonun derinliği ve mavinin serinliği bir araya
              geliyor. Canlı müzik geceleri, imza kokteyller ve şehir ışıklarına
              karşı uzayan sohbetler… Merdiven Lounge’da gece akarken ritim size
              eşlik eder.
            </p>

            {/* Öne çıkanlar */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-2xl">
              <Feature title="İmza Kokteyller" text="Mora dokunuşlu, dengeli tatlar." />
              <Feature title="Canlı Müzik" text="DJ set & akustik geceler." />
              <Feature title="Şehir Işıkları" text="Yumuşak ışık, derin ambiyans." />
            </div>

            {/* Mini bilgi şeridi */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px]">
              <Badge>Her gün 18:00–01:00</Badge>
              <Badge>Rezervasyon Önerilir</Badge>
              <Badge>18+ Bar Alanı</Badge>
            </div>

            {/* CTA butonları */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lion-teras"
                className="inline-flex h-11 items-center justify-center px-7 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 text-white text-[12px] tracking-[0.18em] hover:brightness-110 transition"
              >
                LOUNGE’U KEŞFET
              </Link>
              <Link
                href="/lion-teras#qr"
                className="inline-flex h-11 items-center justify-center px-7 rounded-full border border-white/30 text-white/85 text-[12px] tracking-[0.18em] hover:bg-white/10 transition"
              >
                QR MENÜ
              </Link>
            </div>
          </div>

          {/* Sağ: GÖRSELLER (değiştirmedik) */}
          <div className="order-2 md:order-none relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.35)] ring-1 ring-white/10">
              <Image
                src="/teras-1.jpg"
                alt="Merdiven Lounge manzara"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="hidden md:block">
              <div className="absolute -left-10 -bottom-10 w-40 lg:w-48 h-56 lg:h-64 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
                <Image src="/teras-2.jpg" alt="İmza kokteyller" fill className="object-cover" />
              </div>

              <div className="absolute -right-8 -top-12 w-44 lg:w-56 h-28 lg:h-36 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
                <Image src="/teras-3.jpg" alt="Canlı müzik" fill className="object-cover" />
              </div>

              <div className="absolute right-8 lg:right-14 -bottom-14 w-32 lg:w-40 h-32 lg:h-40 rounded-full overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
                <Image src="/teras-4.jpg" alt="Ambiyans" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animasyon anahtarları */}
      <style jsx>{`
        @keyframes drift {
          0%   { transform: translate(-10%, -10%) rotate(0deg); }
          50%  { transform: translate(35%, 25%) rotate(15deg); }
          100% { transform: translate(110%, 90%) rotate(35deg); }
        }
        @keyframes driftSlow {
          0%   { transform: translate(10%, -5%) rotate(0deg) scale(1); }
          50%  { transform: translate(-25%, 20%) rotate(-10deg) scale(1.05); }
          100% { transform: translate(-60%, 60%) rotate(-20deg) scale(1.1); }
        }
      `}</style>
    </section>
  );
}

/* Küçük yardımcı bileşenler */
function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white/10 border border-white/15 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
        <h3
          className="text-[14px] font-medium text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
      </div>
      <p className="mt-1 text-[13px] leading-6 text-white/75">{text}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/85 backdrop-blur-sm">
      {children}
    </span>
  );
}