import Image from "next/image";

export default function AboutGallery() {
  const pics = [
    { src: "/about-g1.jpg", alt: "Lobby" },
    { src: "/about-g2.jpg", alt: "Room Detail" },
    { src: "/about-g3.jpg", alt: "Lion Teras" },
  ];
  return (
    <section className="bg-[#efdfcf]">
      <div className="container pb-16 md:pb-24">
        <h3
          className="text-[24px] md:text-[32px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Otelden Kareler
        </h3>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pics.map((p) => (
            <div key={p.src} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={p.src} alt={p.alt} fill className="object-cover"
                sizes="(max-width:1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}