import { ROOMS } from "@/lib/rooms";
import Reveal from "@/components/shared/Reveal";
import RoomsCard from "@/components/rooms/RoomsCard";

export default function RoomsGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal as="div" className="experience-reveal mb-14 grid gap-10 border-b border-black/[.08] pb-10 md:mb-18 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#6E1B1F]">
              ROOM COLLECTION
            </p>
            <h2 
              className="mt-5 text-[38px] font-light leading-[1.04] tracking-normal text-[#111111] sm:text-[52px] md:text-[64px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Her konaklama için farklı bir sessizlik.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[15px] font-light leading-8 text-[#666666]">
              Büyük vaatler yerine doğru ölçek, temiz ışık ve kullanışlı detaylar. Oda seçkisi; kısa kaçamaklar, uzun kalışlar ve aile konaklamaları için dengeli bir deneyim sunar.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {ROOMS.map((room) => (
            <Reveal as="div" className="experience-reveal" key={room.slug}>
              <RoomsCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
