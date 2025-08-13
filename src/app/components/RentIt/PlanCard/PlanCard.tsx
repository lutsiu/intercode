'use client';

import { LaunchPlanType } from "@/app/types/LaunchPlanType";
import PlanCardHeader from "./PlanCardHeader";
import PlanCardDivider from "./PlanCardDivider";
import PlanCardFeatures from "./PlanCardFeatures";
import PlanCardButton from "./PlanCardButton";

export default function PlanCard({card, period}: {card:LaunchPlanType, period: "monthly" | "annual"}) {
  const { popular, featuresMarginTop } = card;

  return (
    <article
      className={`
        mx-auto
        px-[3.2rem] sm:px-[4rem] 
        pt-[3.1rem] sm:pt-[4.8rem] 
        pb-[3.2rem] sm:pb-[5.6rem] 
        ${period === "monthly" ? "min-h-[51.3rem] max-h-[51.3rem]": "min-h-[57.3rem] max-h-[57.3rem]"}
         sm:max-h-[66.7rem] sm:min-h-[66.7rem] 
        max-w-[30.8rem] sm:max-w-[38.8rem] w-full 
        flex-1  border-[1px] rounded-[4rem] sm:rounded-[3rem]
        flex flex-col shadow-[0px_4px_4px_rgba(0,0,0,0.15)]
        ${popular
          ? "bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] text-white"
          : "bg-white border-[#D4D2E3] text-black"}
      `}
    >
      <div className="flex flex-col flex-1">
        <PlanCardHeader {...card} />
        <PlanCardDivider popular={popular} />
        <PlanCardFeatures {...card} marginTop={featuresMarginTop} />
      </div>
      <PlanCardButton />
    </article>
  );
}
