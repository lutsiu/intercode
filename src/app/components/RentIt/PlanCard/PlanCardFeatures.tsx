import { LaunchPlanType } from "@/app/types/LaunchPlanType";
import { Icon } from "@iconify/react";
import { CSSProperties } from "react";

export default function PlanCardFeatures({
  features,
  popular,
  marginTop,
}: LaunchPlanType & { marginTop: number }) {
  return (
      <ul
        className={[
          "flex flex-col",
          popular ? "gap-[1.1rem] sm:gap-[2.3rem]" : "gap-[1.1rem] sm:gap-[1.6rem]",
          "mt-[2.1rem] sm:mt-[var(--mt)]",
        ].join(" ")}
        style={{ "--mt": `${marginTop}rem` } as CSSProperties}
      >
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-[1.4rem]">
          <div
            className={`
              flex items-center justify-center
              ${popular ? "bg-white" : "bg-black"}
              rounded-full min-w-[2.6rem] max-w-[2.6rem] h-[2.6rem]`}
          >
            <Icon
              icon="ic:round-check"
              width="20"
              height="20"
              className={popular ? "text-black" : "text-white"}
            />
          </div> 
          <span className="text-[1.4rem] sm:text-[1.6rem] font-medium">{f}</span>
        </li>
      ))}
    </ul>
  );
}
