"use client";

import { showCaseGalleryData } from "@/app/data/CaseStudies";
import useClosePopupOnEscape from "@/app/hooks/useClosePopupOnEscape";
import { useCaseStudyGalleryStore } from "@/app/store/caseStudyGalleryStore";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import GalleryViewport from "./GalleryViewport";
import ArrowButton from "./ArrowButton";
import MobileControls from "./MobileControls";

export default function CaseStudyGallery() {
  const { close, activeId } = useCaseStudyGalleryStore();
  useClosePopupOnEscape(close);

  const galleryToShow = showCaseGalleryData.find((gal) => gal.id === activeId);
  const images = galleryToShow?.images ?? [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback((api?: EmblaCarouselType | null) => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => updateButtons(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, updateButtons]);

  return (
    <div className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center">
      {/* Close */}
      <button
        onClick={close}
        aria-label="Close"
        className="absolute top-[2.4rem] sm:top-[2.6rem] right-[2.4rem] sm:right-[3.7rem] text-white"
      >
        <Icon className="w-[2.4rem] h-[2.4rem]" icon="clarity:close-line" />
      </button>

      <GalleryViewport images={images} emblaRef={emblaRef} />

      <ArrowButton
        side="left"
        className="hidden lg:inline-flex absolute left-[10rem] top-1/2 -translate-y-1/2"
        disabled={!canPrev}
        onClick={() => emblaApi?.scrollPrev()}
      />
      <ArrowButton
        side="right"
        className="hidden lg:inline-flex absolute right-[10rem] top-1/2 -translate-y-1/2"
        disabled={!canNext}
        onClick={() => emblaApi?.scrollNext()}
      />

      {/* Bottom controls (<lg) */}
      <MobileControls
        className="mt-[4rem] lg:hidden"
        canPrev={canPrev}
        canNext={canNext}
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
      />
    </div>
  );
}
