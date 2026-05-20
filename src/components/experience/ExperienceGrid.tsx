import { EXPERIENCE_ITEMS } from "@/components/experience/experience-data";
import ExperienceCard from "@/components/experience/ExperienceCard";
import Reveal from "@/components/shared/Reveal";

export default function ExperienceGrid() {
  const featuredItems = EXPERIENCE_ITEMS.slice(0, 4);
  const quietItems = EXPERIENCE_ITEMS.slice(4);

  return (
    <>
      <Reveal as="section" className="experience-reveal bg-[#FAF9F6] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#6E1B1F]">
                EDITORIAL COLLECTION
              </p>
              <h2
                className="mt-5 text-[38px] font-light leading-[1.04] tracking-normal text-[#111111] sm:text-[52px] md:text-[64px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sade görünen, uzun kalan anlar.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-[15px] font-light leading-8 text-[#6E6A63]">
                Lion Hotel deneyimi, kalabalık bir aktivite programı değil; iyi seçilmiş ritüeller, sahile yakınlık, sessiz odalar ve şehirle dengeli bir temas üzerine kurulur.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="bg-white py-6 md:py-12">
        <div className="container space-y-20 md:space-y-28">
          {featuredItems.map((item, index) => (
            <Reveal as="div" className="experience-reveal" key={item.title}>
              <ExperienceCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="experience-reveal bg-[#111111] py-20 text-[#FAF9F6] md:py-28">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E7DED3]/55">
                ATMOSFER
              </p>
              <h2
                className="mt-5 text-[40px] font-light leading-[1.03] tracking-normal sm:text-[58px] md:text-[72px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Konaklamadan fazlası, gösterişten azı.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[15px] font-light leading-8 text-[#E7DED3]/72">
                Günün her saatinde aynı şeyi hedefler: daha az gürültü, daha iyi ışık, daha doğru mesafe.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/12 pt-8">
                {[
                  ["07", "sakin sabah"],
                  ["04", "seçilmiş rota"],
                  ["01", "merkezi adres"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p
                      className="text-[30px] font-light leading-none text-white"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {value}
                    </p>
                    <p className="mt-3 text-[10px] uppercase leading-5 tracking-[0.22em] text-[#E7DED3]/52">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="bg-[#F7F5F0] py-20 md:py-28">
        <div className="container">
          <Reveal as="div" className="experience-reveal mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#6E1B1F]">
              PRIVATE MOMENTS
            </p>
            <h2
              className="mt-5 text-[36px] font-light leading-[1.05] tracking-normal text-[#111111] sm:text-[48px] md:text-[62px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kendinize ait küçük lüksler.
            </h2>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-3">
            {quietItems.map((item, offset) => (
              <Reveal as="div" className="experience-reveal" key={item.title}>
                <div className={offset === 1 ? "md:pt-16" : ""}>
                  <ExperienceCard
                    item={item}
                    index={offset + featuredItems.length}
                    variant="compact"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="experience-reveal bg-white py-20 md:py-28">
        <div className="container">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p
              className="text-[34px] font-light leading-[1.12] tracking-normal text-[#111111] sm:text-[48px] md:text-[64px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              “Lüks, burada fazlalıkta değil; doğru anda geri çekilen detaylarda.”
            </p>
            <footer className="mt-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#6E6A63]">
              LION HOTEL CINARCIK
            </footer>
          </blockquote>
        </div>
      </Reveal>
    </>
  );
}
