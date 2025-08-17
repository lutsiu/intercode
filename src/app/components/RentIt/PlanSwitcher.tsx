import PlanButton from "./PlanButton";
import { useTranslations } from "next-intl";

export default function PlanSwitcher({
  plan,
  setPlan,
}: {
  plan: "monthly" | "annual";
  setPlan: (val: "monthly" | "annual") => void;
}) {
  const t = useTranslations("rentIt.pricing.plans");

  return (
    <div className="flex gap-[1.5rem]">
      <PlanButton
        title={t("monthly")}
        isActive={plan === "monthly"}
        onClick={() => setPlan("monthly")}
      />
      <PlanButton
        title={t("annual")}
        isActive={plan === "annual"}
        onClick={() => setPlan("annual")}
      />
    </div>
  );
}
