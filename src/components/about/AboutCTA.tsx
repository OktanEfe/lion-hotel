import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function AboutCTA() {
  return (
    <Reveal as="section" className="bg-[#111111] text-[#FAF9F6] py-24 md:py-36 border-b border-[#FAF9F6]/5">
      <div className="container mx-auto px-6 text-center sm:px-8 lg:px-16">
        
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[1px] w-6 bg-[#7A1E1E]" />
          <p className="text-[10px] font-medium tracking-[0.35em] text-[#FAF9F6]/60 uppercase sm:text-xs">
            Rezervasyon & Ayrıcalıklar
          </p>
          <span className="h-[1px] w-6 bg-[#7A1E1E]" />
        </div>

        <h2
          className="text-[36px] font-light leading-[1.1] tracking-tight sm:text-[48px] md:text-[64px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Lion Hotel Deneyimini <br />
          <span className="italic font-normal text-[#E7DED3]">Şimdiden Planlayın</span>
        </h2>
        
        <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-[#FAF9F6]/70 md:text-base">
          Çınarcık&apos;ta huzur, konfor ve şıklığın bir arada sunduğu bu benzersiz kaçamakta yerinizi ayırtın. Ekibimiz her anınızı kusursuz kılmak için hazır.
        </p>
        
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/odalar"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#FAF9F6] bg-[#FAF9F6] px-8 text-[11px] font-medium tracking-[0.20em] text-[#111111] transition-all duration-300 hover:bg-transparent hover:text-[#FAF9F6] md:h-12 md:px-10"
          >
            ODALARI İNCELE
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#FAF9F6]/20 bg-transparent px-8 text-[11px] font-medium tracking-[0.20em] text-[#FAF9F6] transition-all duration-300 hover:border-[#FAF9F6] hover:bg-[#FAF9F6]/5 md:h-12 md:px-10"
          >
            İLETİŞİME GEÇİN
          </Link>
        </div>

      </div>
    </Reveal>
  );
}