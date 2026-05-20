"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Reveal<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: RevealProps<T>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={[className, "reveal", visible ? "is-visible" : ""].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
