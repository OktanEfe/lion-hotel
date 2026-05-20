import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  className = "",
}: PageHeroProps) {
  if (image) {
    return (
      <Reveal as="section" className={["relative min-h-[560px] overflow-hidden", className].join(" ")}>
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative container flex min-h-[560px] items-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="text-[11px] tracking-[0.28em] text-white/75">{eyebrow}</p>
            <h1
              className="mt-3 text-[38px] leading-[1.05] sm:text-[48px] md:text-[72px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal as="section" className={["bg-[var(--color-ink)] pt-24 text-white md:pt-28", className].join(" ")}>
      <div className="container px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
        <p className="text-[11px] tracking-[0.28em] text-white/65">{eyebrow}</p>
        <h1
          className="mt-3 text-[40px] leading-[1.02] md:text-[78px]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        {description ? <p className="mt-4 max-w-2xl text-white/80">{description}</p> : null}
      </div>
    </Reveal>
  );
}
