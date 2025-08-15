"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { launchPlans } from "@/app/data/LaunchPlanData";
import PlanCard from "./PlanCard/PlanCard";
import CarouselProgress from "../Common/CarouselProgress";

type PlanType = "monthly" | "annual";

export default function PlanSlider({ plan }: { plan: PlanType }) {
  const monthly = launchPlans.slice(0, 3);
  const annual = launchPlans.slice(3, 6);
  const data = plan === "monthly" ? monthly : annual;

  // Embla for <sm only
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  // Track selected index (for progress)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("resize", onSelect);
    onSelect();
    return () => {
      // optional cleanup if you want:
      // emblaApi.off("select", onSelect);
      // emblaApi.off("reInit", onSelect);
      // emblaApi.off("resize", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reset to first slide when plan changes (mobile)
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
  }, [plan, emblaApi]);

  const renderGroup = (items: typeof launchPlans) =>
    items.map((lp, i) => <PlanCard key={i} card={lp} period={plan} />);

  return (
    <div className="w-full">
      {/* 2xl+ — horizontal slider (unchanged) */}
      <div className="hidden 2xl:block overflow-x-hidden w-full max-w-[122rem] py-[1rem] mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: plan === "monthly" ? "translateX(0%)" : "translateX(-100%)" }}
        >
          <div className="flex gap-[2.8rem] w-full shrink-0 justify-center">{renderGroup(monthly)}</div>
          <div className="flex gap-[2.8rem] w-full shrink-0 justify-center">{renderGroup(annual)}</div>
        </div>
      </div>

      {/* sm–xl — vertical stack (unchanged) */}
      <div className="hidden sm:block 2xl:hidden w-full mx-auto py-[1rem]">
        <div key={plan} className="flex flex-col gap-[2.8rem] items-center">
          {renderGroup(data)}
        </div>
      </div>

      {/* <sm — Embla + progress */}
      <div className="sm:hidden w-full py-[1rem]" aria-roledescription="carousel" aria-label={`${plan} plans`}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((lp, i) => (
              <div key={i} className="flex-[0_0_100%] px-[1rem] snap-center">
                <div className="flex justify-center">
                  <div className="w-full max-w-[36rem]">
                    <PlanCard card={lp} period={plan} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mx-auto w-[20rem]">
          <CarouselProgress
            current={selectedIndex}
            total={data.length}
            perView={1}
            className="mt-[6rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}
