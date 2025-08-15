export default function AboutHighlights() {
    const items = [
      { title: "Zamansız Tasarım", text: "Sade formlar, doğal dokular ve sıcak ışık." },
      { title: "Konfor Önceliği", text: "Yüksek kaliteli yatak & yastık menüsü, sessiz odalar." },
      { title: "Lion Teras", text: "Canlı müzik, imza kokteyller ve gün batımı manzarası." },
    ];
    return (
      <section className="bg-[#efdfcf]">
        <div className="container py-14 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {items.map((i) => (
              <div key={i.title} className="p-6 md:p-7 rounded-xl bg-white/50 ring-1 ring-black/5">
                <h4
                  className="text-[20px] md:text-[22px]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {i.title}
                </h4>
                <p className="mt-2 text-sm md:text-base text-black/70">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }