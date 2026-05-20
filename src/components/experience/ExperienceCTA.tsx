import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function ExperienceCTA() {
  return (
    <Reveal as="section" className="relative bg-[#111111] text-[#FAF9F6] py-24 md:py-32 overflow-hidden">
      {/* Arka Planda Çok Hafif Soyut Geometrik Doku */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-6 text-center sm:px-8 lg:px-16 relative z-10">
        <p className="text-[10px] font-medium tracking-[0.4em] text-[#E7DED3]/60 uppercase mb-3">
          HİKAYEYE DAHİL OLUN
        </p>
        
        <h2 
          className="text-[36px] font-light leading-tight tracking-tight text-[#FAF9F6] sm:text-[48px] md:text-[60px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Bu Deneyimi Yerinde Yaşayın
        </h2>
        
        <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-[#E7DED3]/70 md:text-base">
          Çınarcık&apos;ın en rafine noktasında, konfor ve sükunetin bir araya geldiği özel anlar için şimdiden yerinizi ayırtın.
        </p>

        <div className="mt-10">
          <Link
            href="/iletisim"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#FAF9F6] bg-[#FAF9F6] px-10 text-[11px] font-medium tracking-[0.20em] text-[#111111] transition-all duration-300 hover:bg-transparent hover:text-[#FAF9F6]"
          >
            REZERVASYON İÇİN İLETİŞİME GEÇİN
          </Link>
        </div>
      </div>
    </Reveal>
  );
}