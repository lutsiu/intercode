"use client";

import SectionTitle from "@/app/components/Common/SectionTitle";
import useEmblaCarousel from "embla-carousel-react";
import caseStudies from "@/app/data/CaseStudies";
import CaseStudyCard from "@/app/components/Home/CaseStudy/CaseStudyCard";
import { NextButton, PrevButton } from "@/app/components/Home/CaseStudy/CarouselButtons";
import { useCallback, useEffect, useState } from "react";

export default function CaseStudies() {

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, align: "start", slidesToScroll: 1});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // run once on init
  }, [emblaApi, onSelect]);
  return (
    <section
      aria-label="Case studies"
      className="pt-[11rem] px-[8rem] "
    >
      <SectionTitle title="Case studies" paddingBottom={30} />
      <h5 className="font-medium text-[2.4rem] text-center">Менше слів — більше кейсів. Результати — найкращий аргумент</h5>

      <div className="relative mt-[5.6rem] px-[6rem]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-[7.6rem]">
            {caseStudies.map((item, i) => (
              <div className="flex-[0_0_calc(100%/3-5rem)] min-w-[28rem]" key={i}>
                <CaseStudyCard {...item} />
              </div>
            ))}
          </div>
        </div>

        
        <PrevButton embla={emblaApi} />
        <NextButton embla={emblaApi} />

        {/* Progress Bar */}
        <div className="w-[31.2rem] mt-[9.7rem] mx-auto h-[3px] bg-[#E4E5E5] relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-1000 rounded-full"
            style={{ width: `${(selectedIndex + 3) * (100 /  caseStudies.length)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
