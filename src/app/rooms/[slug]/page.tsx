import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROOMS_ORDER, findRoom, type RoomSlug } from "@/lib/rooms";
import RoomGalleryClient from "./RoomGalleryClient"; // Client slider (lightbox + kenar oklar)

// --- Static Params ---
export function generateStaticParams() {
  return ROOMS_ORDER.map((slug) => ({ slug }));
}

// --- Dynamic Metadata (Next.js 15: params bir Promise) ---
export async function generateMetadata(
  { params }: { params: Promise<{ slug: RoomSlug }> }
): Promise<Metadata> {
  const { slug } = await params;
  const room = findRoom(slug);
  if (!room) return { title: "Room | Lion Hotel" };
  const title = `${room.name} | Lion Hotel`;
  return { title, openGraph: { title, images: [room.hero] } };
}

export default async function RoomPage(
  { params }: { params: Promise<{ slug: RoomSlug }> }
) {
  const { slug } = await params;

  const room = findRoom(slug);
  if (!room) return notFound();

  const i = ROOMS_ORDER.indexOf(slug);
  const nextSlug = ROOMS_ORDER[(i + 1) % ROOMS_ORDER.length];
  const nextTitle = findRoom(nextSlug)!.name;

  // Galeri kaynağı: varsa room.gallery kullan, yoksa fallback
  const galleryFromRoom = (room as Partial<{ gallery: string[] }>).gallery;
  const gallery: string[] =
    Array.isArray(galleryFromRoom) && galleryFromRoom.length > 0
      ? galleryFromRoom
      : [
          room.split1.imageLeft,
          room.split2.imageRight,
          room.amenitiesBanner.banner,
          room.amenitiesBanner.thumb1,
          room.amenitiesBanner.thumb2,
          room.hero,
        ].filter(Boolean) as string[];

  return (
    <div className="bg-[#efdfcf] text-neutral-900">
      {/* HERO */}
      <section className="relative">
        <div className="relative w-full h-[60vh] min-h-[480px]">
          <Image src={room.hero} alt={room.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0">
            <div className="container h-full flex items-center">
              <h1
                className="text-white text-[40px] md:text-[88px] leading-[1.02]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {room.name}
              </h1>
              <div className="ml-auto hidden md:block text-white/90 text-sm space-y-4">
                <div><div className="opacity-80">Average area</div><div>{room.specs.area}</div></div>
                <div><div className="opacity-80">Bed type</div><div>{room.specs.bed}</div></div>
                <div><div className="opacity-80">View</div><div>{room.specs.view}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Koyu split #1 */}
      <section className="bg-[#121212] text-white">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={room.split1.imageLeft} alt="" fill className="object-cover" />
          </div>
          <p className="text-white/85 text-sm md:text-base">{room.split1.textRight}</p>
        </div>
      </section>

      {/* Koyu split #2 */}
      <section className="bg-[#121212] text-white">
        <div className="container pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <p className="text-white/85 text-sm md:text-base">{room.split2.textLeft}</p>
          <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={room.split2.imageRight} alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ÖZELLİK ŞERİDİ (monokrom SVG) + BEJ BANNER */}
      <section className="bg-[#efdfcf]">
        {/* Monokrom ikonlu özellik şeridi */}
        <div className="container py-10 md:py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {room.amenities.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-2">
              <AmenityIcon label={a.label} className="h-9 w-9 md:h-11 md:w-11" />
              <div className="text-xs md:text-sm text-black/70">{a.label}</div>
            </div>
          ))}
        </div>

        {/* Bej banner */}
        <div className="container pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image src={room.amenitiesBanner.banner} alt="" fill className="object-cover" />
          </div>

          <div>
            <h3
              className="text-[36px] md:text-[60px] leading-[1.06]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {room.amenitiesBanner.title}
            </h3>
            <p className="mt-3 text-black/75 text-sm md:text-base">
              {room.amenitiesBanner.text}
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex h-11 items-center justify-center px-6 rounded-full border border-black/40 text-[12px] tracking-[0.18em] hover:bg-black hover:text-white transition"
            >
              REZERVASYON İÇİN İLETİŞİME GEÇİN
            </Link>

            <div className="mt-6 flex gap-4">
              <div className="relative w-40 h-28 md:w-44 md:h-32 rounded-xl overflow-hidden">
                <Image src={room.amenitiesBanner.thumb1} alt="" fill className="object-cover" />
              </div>
              <div className="relative w-40 h-28 md:w-44 md:h-32 rounded-xl overflow-hidden">
                <Image src={room.amenitiesBanner.thumb2} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ODA GALERİSİ + CTA (tek siyah bölüm, kenar oklar geniş + lightbox) */}
      <section className="relative bg-[#0f0f0f] text-white">
        <div className="container pt-14 md:pt-20">
          <h3
            className="text-[28px] md:text-[40px] leading-[1.06]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Oda Galerisi
          </h3>
        </div>

        {/* Full-bleed slider */}
        <div className="mt-4">
          <RoomGalleryClient images={gallery} />
        </div>

        {/* CTA aynı bölümde */}
        <div className="container pb-16 md:pb-24 pt-8 md:pt-12 text-center">
          <h2
            className="text-[34px] md:text-[56px] leading-[1.04]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Hazır mısınız?
          </h2>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Konforlu ve unutulmaz bir konaklama için şimdi rezervasyon yapın.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-12 items-center justify-center px-8 rounded-full border border-white/40 text-[12px] tracking-[0.18em] hover:bg-white hover:text-black transition"
          >
            REZERVASYON YAP
          </Link>
        </div>
      </section>

      {/* NEXT ROOM */}
      <section className="bg-[#efdfcf]">
        <div className="container py-12 md:py-16">
          <Link
            href={`/rooms/${nextSlug}`}
            className="block text-center text-[36px] md:text-[60px] hover:opacity-80"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {nextTitle} →
          </Link>
        </div>
      </section>
    </div>
  );
}

/** Monokrom (bej palete uygun) outline SVG ikonlar */
function AmenityIcon({ label, className = "" }: { label: string; className?: string }) {
  const common = (d: string) => (
    <svg viewBox="0 0 24 24" className={`stroke-[1.6] stroke-black/85 fill-none ${className}`}>
      <path d={d} />
    </svg>
  );
  if (/wifi/i.test(label)) return common("M2 8.5C7-0.5 17-0.5 22 8.5M5 12c4-6 10-6 14 0M8.5 15.5c2.5-3 4.5-3 7 0M12 20h.01");
  if (/bed|king|queen|yatak/i.test(label)) return common("M3 10h18a3 3 0 0 1 3 3v7h-2v-3H2v3H0v-7a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v2h20v-2a1 1 0 0 0-1-1H3Z");
  if (/air|klima|condition/i.test(label)) return common("M3 12h18M12 3v18M6 6l12 12M6 18L18 6");
  if (/duş|shower/i.test(label)) return common("M4 6h8a4 4 0 0 1 4 4v4H4V6Zm13 0h3M5 18v2m4-2v2m4-2v2m4-2v2");
  if (/smok|sigara/i.test(label)) return common("M3 15h10m2 0h3a2 2 0 0 0 0-4h-3m-2-4h2a3 3 0 0 1 3 3v1");
  if (/view|manzara|mountain/i.test(label)) return common("M3 18l6-8 4 5 3-4 5 7H3Z");
  return common("M4 12h16M4 6h16M4 18h16");
}