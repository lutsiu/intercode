"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GtagPageView() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!GA_ID || typeof window === "undefined" || !(window as any).gtag) return;
    const url = pathname + (search?.toString() ? `?${search}` : "");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("config", GA_ID, { page_path: url });
  }, [pathname, search]);

  return null;
}
