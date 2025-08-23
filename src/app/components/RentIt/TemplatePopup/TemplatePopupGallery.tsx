// TemplatePopupGallery.tsx
"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageSkeleton from "../../Common/ImageSkeleton";

type Props = {
  images: (string | StaticImageData)[];
};

export default function TemplatePopupGallery({ images }: Props) {
  const [loaded, setLoaded] = useState<boolean[]>(
    () => Array(images.length).fill(false)
  );

  useEffect(() => {
    setLoaded(Array(images.length).fill(false));
  }, [images]);

  const markLoaded = (i: number) =>
    setLoaded((prev) => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });

  if (!images?.length) return null;

  return (
    <div className="flex flex-col items-center gap-[2.4rem] md:gap-[3.2rem]">
      {images.map((src, i) => (
        <div
          key={i}
          className="w-full min-h-[16rem] sm:h-[30rem] lg:h-[38.4rem]
                     relative overflow-hidden rounded-[1.5rem]"
        >
          {!loaded[i] && (
            <ImageSkeleton/>
          )}

          <Image
            src={src}
            alt={`Preview ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-300 ${
              loaded[i] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => markLoaded(i)}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
