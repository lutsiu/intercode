import PlanButton from "./PlanButton";

export default function PlanSwitcher({
  plan,
  setPlan,
}: {
  plan: "monthly" | "annual";
  setPlan: (val: "monthly" | "annual") => void;
}) {
  return (
    <div className="flex gap-[1.5rem]">
      <PlanButton title="Monthly plan" isActive={plan === "monthly"} onClick={() => setPlan("monthly")} />
      <PlanButton title="Annual plan" isActive={plan === "annual"} onClick={() => setPlan("annual")} />
    </div>
  );
}
