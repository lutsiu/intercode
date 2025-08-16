// src/app/components/Home/CaseStudy/CaseStudyCard.tsx
"use client";

import { CaseStudyType } from "@/app/types/CaesStudyType";
import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "@/app/components/Common/ImageSkeleton";
import { useCaseStudyGalleryStore } from "@/app/store/caseStudyGalleryStore";
import { useTranslations } from "next-intl";

export default function CaseStudyCard({ id, image, title, subtitle }: CaseStudyType) {
  const [loaded, setLoaded] = useState(false);
  const { open } = useCaseStudyGalleryStore();
  const t = useTranslations();

  const titleText = t(title);
  const subtitleText = t(subtitle);

  return (
    <article
      className="flex flex-col border-[2px] rounded-[1.6rem] sm:rounded-none sm:border-none border-[#D4D2E3] sm:pt-0 pt-[1.6rem] sm:px-0 px-[1.6rem] sm:pb-0 pb-[3.2rem] shadow-[0_8px_12px_-6px_rgba(0,0,0,0.25)] sm:shadow-none"
      onClick={() => open(id)}
    >
      <div className="relative w-full aspect-[326/204] rounded-[1.6rem] overflow-hidden">
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${loaded ? "opacity-0" : "opacity-100"}`}>
          <ImageSkeleton className="w-full h-full" />
        </div>

        <Image
          src={image}
          alt={titleText}
          fill
          className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>

      <h5 className="text-[1.8rem] md:text-[2.4rem] font-extrabold text-center mt-[3.2rem] md:mt-[4rem]">
        {titleText}
      </h5>
      <h6 className="font-bold md:font-semibold text-[1.4rem] text-[#656565] text-center mt-[2rem] md:mt-[3.2rem]">
        {subtitleText}
      </h6>
    </article>
  );
}
