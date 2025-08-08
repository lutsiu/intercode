"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { launchPlans } from "@/app/data/LaunchPlanData";
import PlanCard from "./PlanCard/PlanCard";

type PlanType = "monthly" | "annual";

export default function PlanSlider({ plan }: { plan: PlanType }) {
  const monthly = launchPlans.slice(0, 3);
  const annual = launchPlans.slice(3, 6);
  const data = plan === "monthly" ? monthly : annual;

  // Embla for <sm
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  // Reset to first slide when plan changes (mobile)
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
  }, [plan, emblaApi]);

  const renderGroup = (items: typeof launchPlans) =>
    items.map((lp, i) => <PlanCard key={i} {...lp} />);

  return (
    <div className="w-full">
      {/* ===== Desktop (2xl+) — horizontal slider ===== */}
      <div className="hidden 2xl:block overflow-x-hidden w-full max-w-[122rem] py-[1rem] mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            transform: plan === "monthly" ? "translateX(0%)" : "translateX(-100%)",
          }}
        >
          <div className="flex gap-[2.8rem] w-full shrink-0 justify-center">
            {renderGroup(monthly)}
          </div>
          <div className="flex gap-[2.8rem] w-full shrink-0 justify-center">
            {renderGroup(annual)}
          </div>
        </div>
      </div>

      {/* ===== sm–xl — vertical stack (no slider) ===== */}
      <div className="hidden sm:block 2xl:hidden w-full mx-auto py-[1rem]">
        <div key={plan} className="flex flex-col gap-[2.8rem] items-center">
          {renderGroup(data)}
        </div>
      </div>

      {/* ===== <sm — Embla: one card per slide, swipe only ===== */}
      <div className="sm:hidden w-full py-[1rem]" aria-roledescription="carousel" aria-label={`${plan} plans`}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((lp, i) => (
              <div key={i} className="flex-[0_0_100%] px-[1rem] snap-center">
                <div className="flex justify-center">
                  <div className="w-full max-w-[36rem]">
                    <PlanCard {...lp} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </div>
  );
}
