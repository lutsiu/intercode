import { launchPlans } from "@/app/data/LaunchPlanData";
import PlanCard from "./PlanCard/PlanCard";

export default function PlanSlider({ plan }: { plan: "monthly" | "annual" }) {
  return (
    <div className="overflow-x-hidden w-full max-w-[122rem] py-[1rem]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: plan === "monthly" ? "translateX(0%)" : "translateX(-100%)",
          width: "100%",
        }}
      >
        <div className="flex gap-[2.8rem] w-full justify-center">
          {launchPlans.slice(0, 3).map((lp, i) => (
            <PlanCard key={i} {...lp} />
          ))}
        </div>
        <div className="flex gap-[2.8rem] w-full justify-center">
          {launchPlans.slice(3, 6).map((lp, i) => (
            <PlanCard key={i + 3} {...lp} />
          ))}
        </div>
      </div>
    </div>
  );
}
