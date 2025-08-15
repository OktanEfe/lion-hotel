"use client";

import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

/** Navbar'ın görünmesini istemediğin rotaları buraya ekle */
const HIDE_ON = ["/lion-teras/menu"];

export default function HeaderVisibility({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const shouldHide = HIDE_ON.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  if (shouldHide) return null; // bu rotalarda Navbar'ı gizle
  return <>{children}</>;
}