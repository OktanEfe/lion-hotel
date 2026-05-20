import { WHATSAPP_LINK } from "@/components/contact/contact-data";

export default function ContactReservationLinks() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center justify-center rounded-full bg-[#FAF9F6] px-8 text-[11px] font-medium tracking-[0.20em] text-[#111111] transition-all duration-300 hover:bg-transparent hover:text-[#FAF9F6] hover:border hover:border-[#FAF9F6] md:h-12"
      >
        WHATSAPP HATTI
      </a>
      <a
        href="tel:+905319713134"
        className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-transparent px-8 text-[11px] font-medium tracking-[0.20em] text-[#FAF9F6] transition-all duration-300 hover:bg-[#FAF9F6] hover:text-[#111111] md:h-12"
      >
        HEMEN ARA
      </a>
    </div>
  );
}