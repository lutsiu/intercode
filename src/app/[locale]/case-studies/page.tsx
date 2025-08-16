'use client';

import SectionTitle from "../../components/Common/SectionTitle";
import { caseStudiesPageCards } from "../../data/CaseStudies";
import CaseStudyPageCard from "../../components/CaseStudies/CaseStudyPageCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { NextButton, PrevButton } from "../../components/CaseStudies/CaseStudiesPageButtons";
import CarouselProgress from "../../components/Common/CarouselProgress";

export default function CaseStudiesPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      aria-label="Case Studies page"
      className="pt-[4.8rem] lg:pt-[7rem] pb-[5.6rem] lg:pb-[8rem]"
    >
      <SectionTitle title="Case studies" paddingBottom={0} />

      <div className="flex items-center gap-[2.4rem] mt-[3.2rem] sm:mt-[5rem] lg:mt-[11.6rem] px-[1.8rem] sm:px-[4rem] lg:px-[8rem] ">
        <PrevButton embla={emblaApi} />

        <div className="overflow-hidden flex-1 touch-pan-y" ref={emblaRef}>
          <div className="flex items-center gap-[3.2rem] cursor-grab active:cursor-grabbing">
            {caseStudiesPageCards.map((item, i) => (
              <div className="flex-[0_0_100%]" key={i}>
                <CaseStudyPageCard {...item} />
              </div>
            ))}
          </div>
        </div>


        <NextButton embla={emblaApi} />
      </div>

      <CarouselProgress
        current={selectedIndex}
        total={caseStudiesPageCards.length}
        perView={1}
        className="mt-[9.7rem]"
        durationMs={1000}
      />
    </section>
  );
}
