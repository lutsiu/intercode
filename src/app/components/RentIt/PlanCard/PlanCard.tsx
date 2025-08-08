'use client';

import { LaunchPlanType } from "@/app/types/LaunchPlanType";
import PlanCardHeader from "./PlanCardHeader";
import PlanCardDivider from "./PlanCardDivider";
import PlanCardFeatures from "./PlanCardFeatures";
import PlanCardButton from "./PlanCardButton";

export default function PlanCard(props: LaunchPlanType) {
  const { popular, featuresMarginTop } = props;

  return (
    <article
      className={`
        px-[4rem] 
        pt-[4.8rem] 
        pb-[5.6rem] 
        min-h-[49.3rem] max-h-[49.3rem] sm:max-h-[66.7rem] sm:min-h-[66.7rem] 
        max-w-[30.8rem] sm:max-w-[38.8rem] w-full 
        flex-1  border-[1px] rounded-[3rem]
        flex flex-col shadow-[0px_4px_4px_rgba(0,0,0,0.15)]
        ${popular
          ? "bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] text-white"
          : "bg-white border-[#D4D2E3] text-black"}
      `}
    >
      <div className="flex flex-col flex-1">
        <PlanCardHeader {...props} />
        <PlanCardDivider popular={popular} />
        <PlanCardFeatures {...props} marginTop={featuresMarginTop} />
      </div>
      <PlanCardButton />
    </article>
  );
}
