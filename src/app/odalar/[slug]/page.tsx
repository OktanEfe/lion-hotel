import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROOMS_ORDER, findRoom, type RoomSlug } from "@/lib/rooms";
import RoomAmenities from "@/components/room-detail/RoomAmenities";
import RoomDetailHero from "@/components/room-detail/RoomDetailHero";
// import RoomDetailIntro from "@/components/room-detail/RoomDetailIntro";
import RoomNextLink from "@/components/room-detail/RoomNextLink";
import RoomReservationCTA from "@/components/room-detail/RoomReservationCTA";

export function generateStaticParams() {
  return ROOMS_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: RoomSlug }> }
): Promise<Metadata> {
  const { slug } = await params;
  const room = findRoom(slug);
  if (!room) return { title: "Oda | Lion Hotel" };
  const title = `${room.name} | Lion Hotel`;
  const description = `${room.name} oda detayları, görselleri ve Lion Hotel Çınarcık konaklama bilgileri.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [room.hero || "/hero/rooms/140-DSCF5085.jpg"],
    },
  };
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

  const gallery = room.gallery;

  return (
    <>
      <RoomDetailHero room={room} />
      {/* <RoomDetailIntro room={room} /> */}
      <RoomAmenities room={room} />
      <RoomReservationCTA gallery={gallery} />
      <RoomNextLink nextSlug={nextSlug} nextTitle={nextTitle} />
    </>
  );
}
