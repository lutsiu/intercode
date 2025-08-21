"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageSkeleton from "@/app/components/Common/ImageSkeleton";

type Props = {
  images: (string | StaticImageData)[];
  emblaRef: (node: HTMLDivElement | null) => void; // from useEmblaCarousel
};

export default function GalleryViewport({ images, emblaRef }: Props) {

  const [loaded, setLoaded] = useState<boolean[]>(() => Array(images.length).fill(false));
  useEffect(() => setLoaded(Array(images.length).fill(false)), [images]);

  const markLoaded = (idx: number) =>
    setLoaded((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });

  return (
    <div className="relative w-[80vw] sm:w-[60vw] h-[40rem] 2xl:h-[50rem]">
      <div className="overflow-hidden w-full h-full rounded-[1.6rem]" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="relative h-full flex-[0_0_100%]">
              {/* skeleton overlay — same behavior as CaseStudyCard */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  loaded[i] ? "opacity-0" : "opacity-100"
                }`}
              >
                <ImageSkeleton className="w-full h-full" />
              </div>

              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className={` object-contain transition-opacity duration-300 ${
                  loaded[i] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => markLoaded(i)}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
