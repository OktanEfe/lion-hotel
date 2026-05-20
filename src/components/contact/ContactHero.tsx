import Reveal from "@/components/shared/Reveal";
import ContactReservationLinks from "@/components/contact/ContactReservationLinks";

export default function ContactHero() {
  return (
    <Reveal as="section" className="bg-[#111111] pt-32 pb-20 text-[#FAF9F6] md:pt-40 md:pb-28 border-b border-white/5">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[1px] w-6 bg-[#7A1E1E]" />
          <p className="text-[10px] font-medium tracking-[0.35em] text-[#E7DED3]/60 uppercase sm:text-xs">
            REZERVASYON & İLETİŞİM
          </p>
        </div>
        
        <h1
          className="text-[44px] font-light leading-[1.05] tracking-tight text-[#FAF9F6] sm:text-[60px] md:text-[80px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Bize Ulaşın
        </h1>
        
        <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#E7DED3]/80 md:text-base">
          Lion Hotel dünyasına adım atmak, oda müsaitliklerini öğrenmek veya özel taleplerinizi iletmek için ekibimizle doğrudan iletişime geçebilirsiniz.
        </p>

        <ContactReservationLinks />
      </div>
    </Reveal>
  );
}