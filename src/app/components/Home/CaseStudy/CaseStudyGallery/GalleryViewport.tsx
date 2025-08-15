"use client";

import Image, { StaticImageData } from "next/image";

type Props = {
  images: (string | StaticImageData)[];
  emblaRef: (node: HTMLDivElement | null) => void; // from useEmblaCarousel
};

export default function GalleryViewport({ images, emblaRef }: Props) {
  return (
    <div className="relative w-[80vw] sm:w-[60vw] h-[40rem] 2xl:h-[50rem]">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="relative h-full flex-[0_0_100%]">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
