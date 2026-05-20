type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  invert?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  invert = false,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className={`text-[11px] tracking-[0.28em] ${invert ? "text-white/65" : "text-[var(--muted)]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-2 text-[36px] leading-[1.04] md:text-[64px]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-2xl ${invert ? "text-white/80" : "text-[var(--muted)]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
