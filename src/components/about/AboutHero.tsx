import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-[#efdfcf]">
      <div className="container pt-20 md:pt-28 pb-10 md:pb-14">
        <p className="text-xs tracking-[0.28em] text-black/60">ABOUT</p>
        <h1
          className="mt-2 text-[36px] leading-tight md:text-[68px] text-black"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Butik konfor, <br className="hidden sm:block" />
          zamansız tasarımla buluşuyor.
        </h1>
        
        <p className="mt-4 md:mt-5 max-w-2xl text-sm md:text-base text-black/75">
          Lion Hotel; sade lüks, sıcak misafirperverlik ve şehirle kurduğumuz bağla
          hatırlanan bir deneyim sunuyor. Oda tasarımlarımızdan Lion Teras’ın
          atmosferine kadar her detay, “az ama öz” yaklaşımıyla seçildi.
        </p>
      </div>

      {/* hero görseli */}
      <div className="container">
        <div className="relative w-full aspect-[16/8] md:aspect-[16/6] rounded-2xl overflow-hidden">
          <Image
            src="/about-hero.jpg" // /public/about-hero.jpg ekleyebilirsin
            alt="About Lion Hotel"
            fill
            className="object-cover"
            priority
            sizes="(max-width:768px) 100vw, 1120px"
          />
        </div>
      </div>
    </section>
  );
}