"use client";

import { useState } from "react";
import { FAQS } from "@/components/contact/contact-data";
import Reveal from "@/components/shared/Reveal";

export default function ContactFAQ() {
  return (
    <Reveal as="section" className="bg-[#F7F5F0] text-[#111111] py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid gap-12 md:grid-cols-[1.5fr_2fr]">
        <div>
          <p className="text-[10px] font-medium tracking-[0.3em] text-[#6E6A63] uppercase mb-2">
            DETAYLI BİLGİ
          </p>
          <h2
            className="text-[32px] font-light leading-tight tracking-tight text-[#111111] sm:text-[46px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sıkça Sorulan Sorular
          </h2>
        </div>
        <LinedAccordion items={FAQS} />
      </div>
    </Reveal>
  );
}

function LinedAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[#111111]/15">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q} className="border-b border-[#111111]/15">
            <button
              className="flex w-full items-center justify-between gap-6 py-6 text-left group"
              onClick={() => setOpen(active ? null : index)}
              aria-expanded={active}
            >
              <span className="text-[16px] font-light tracking-wide text-[#111111] transition-colors duration-300 group-hover:text-[#7A1E1E] md:text-[18px]">
                {item.q}
              </span>
              <span
                className={[
                  "inline-grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#111111]/20 text-[14px] font-light transition-transform duration-300",
                  active ? "rotate-45 bg-[#111111] text-[#FAF9F6] border-transparent" : "text-[#111111]",
                ].join(" ")}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className={[
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <div className="min-h-0">
                <p className="pb-6 text-sm font-light leading-relaxed text-[#6E6A63] max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}