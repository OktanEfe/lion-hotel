import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "dark",
  className = "",
}: CTAButtonProps) {
  const styles =
    variant === "light"
      ? "border-white/45 text-white hover:bg-[var(--color-surface)] hover:text-black"
      : "border-black/40 text-[var(--foreground)] hover:bg-black hover:text-white";

  return (
    <Link
      href={href}
      className={[
        "inline-flex h-11 items-center justify-center rounded-full border px-8 text-[12px] tracking-[0.18em] transition md:h-12",
        styles,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Link>
  );
}
