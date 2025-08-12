"use client";

import caseStudies from "@/app/data/CaseStudies";
import { NextButton, PrevButton } from "./CarouselButtons";
import CaseStudyCard from "./CaseStudyCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function CaseStudyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [perView, setPerView] = useState(3); // <sm=1, sm–lg=2, xl+=3

  // update selected index
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // detect breakpoint → perView
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1280 ? 3 : w >= 640 ? 2 : 1); // xl+=3, sm–lg=2, <sm=1
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("resize", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mt-[4.2rem] sm:mt-[5.6rem] px-[3rem]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch -ml-6 xl:-ml-8">
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className="
                pl-6 xl:pl-8
                basis-full sm:basis-1/2 lg:basis-1/3  /* 1 / 2 / 3 per view */
                shrink-0 min-w-0
              "
            >
              <div className="w-full h-full">
                <CaseStudyCard {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton embla={emblaApi} />
  
      <NextButton embla={emblaApi} />

      {/* progress bar uses dynamic perView */}
      <div className="w-[20.2rem] sm:w-[31.2rem] mt-[6.4rem] lg:mt-[9.7rem] mx-auto h-[3px] bg-[#E4E5E5] relative overflow-hidden rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-700 rounded-full"
          style={{
            width: `${((selectedIndex + perView) * 100) / caseStudies.length}%`,
          }}
        />
      </div>
    </div>
  );
}
