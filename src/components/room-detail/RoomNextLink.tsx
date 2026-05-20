import Link from "next/link";
import type { RoomSlug } from "@/lib/rooms";
import Reveal from "@/components/shared/Reveal";

type RoomNextLinkProps = {
  nextSlug: RoomSlug;
  nextTitle: string;
};

export default function RoomNextLink({ nextSlug, nextTitle }: RoomNextLinkProps) {
  return (
    <Reveal as="section" className="experience-reveal bg-[#F7F7F5]">
      <div className="container py-10 md:py-12">
        <Link
          href={`/odalar/${nextSlug}`}
          className="group flex flex-col gap-4 border-t border-black/[.08] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#6E1B1F]">
              Sonraki Oda
            </p>
            <p
              className="mt-2 text-[28px] font-light leading-[1.05] tracking-normal text-[#111111] sm:text-[34px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {nextTitle}
            </p>
          </div>
          <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]">
            <span>Odayı Gör</span>
            <span className="text-[#6E1B1F] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </Reveal>
  );
}
