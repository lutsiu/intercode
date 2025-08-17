"use client";

import Image from "next/image";
import { useState } from "react";

export default function TemplatePopupGallery() {
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false]);

  return (
    <div className="flex flex-col items-center gap-[2.4rem] md:gap-[3.2rem]">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="w-full min-h-[16rem] sm:h-[30rem] lg:h-[38.4rem] relative overflow-hidden rounded-[1.5rem]"
        >
          {/* skeleton */}
          {!loaded[i] && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-zinc-100 to-zinc-200" />
          )}

          <Image
            src="/cat.png"
            alt={`Preview ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-300 ${
              loaded[i] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() =>
              setLoaded((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              })
            }
          />
        </div>
      ))}
    </div>
  );
}
