import Link from "next/link";

const BG = "/hero.jpg"; // /public/hero.jpg içine kahraman görselini koy

export default function Hero() {
  return (
    <section
      className="relative w-full h-[82vh] sm:h-[88vh] md:h-[92vh] min-h-[560px] bg-center bg-cover"
      style={{ backgroundImage: `url('${BG}')` }}
      aria-label="Hero"
    >
      {/* Üst-alt yumuşak karartma + kenarlara hafif vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45)_0%,rgba(0,0,0,.25)_45%,rgba(0,0,0,.40)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,transparent_0%,rgba(0,0,0,.20)_70%,rgba(0,0,0,.35)_100%)]" />
      </div>

      {/* İçerik */}
      <div className="relative h-full container flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="text-[11px] sm:text-xs tracking-[0.28em] text-white/80 mb-2">
            LION HOTEL
          </p>

          <h1
            className="font-normal leading-[1.02] text-[40px] sm:text-[52px] md:text-[88px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lion Hotel’e<br className="hidden sm:block" /> Hoş Geldiniz
          </h1>

          <p className="mt-4 sm:mt-5 max-w-2xl text-[15px] sm:text-[16px] md:text-[18px] text-white/90">
            Doğanın kalbinde, zarif detaylarla örülü konfor. İster romantik bir
            kaçamak, ister aile tatili ya da iş seyahati… Her anınızı özel kılan
            dingin bir deneyim sizi bekliyor.
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3">
            <Link
              href="/rooms"
              className="inline-flex h-11 sm:h-12 items-center justify-center px-8 sm:px-10 rounded-full border border-white/85 bg-white/10 text-white backdrop-blur-[2px] hover:bg-white hover:text-black transition-colors text-[12px] tracking-[0.20em]"
            >
              ODALARI GÖR
            </Link>

            <Link
              href="/lion-teras"
              className="inline-flex h-11 sm:h-12 items-center justify-center px-8 sm:px-10 rounded-full border border-white/60 text-white/95 hover:bg-white/90 hover:text-black transition-colors text-[12px] tracking-[0.20em]"
            >
              MERDİVEN LOUNGE
            </Link>
          </div>
        </div>
      </div>

      {/* Aşağı kaydır ipucu */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 text-white/70 text-[11px] tracking-[0.25em]">
        <span className="inline-block animate-bounce">↓ AŞAĞI KAYDIR</span>
      </div>
    </section>
  );
}