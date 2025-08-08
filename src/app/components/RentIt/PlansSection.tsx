'use client';

import { useState } from "react";
import PlanSwitcher from "./PlanSwitcher";
import PlanSlider from "./PlanSlider";
import SectionTitle from "../Common/SectionTitle";

export default function PlansSection() {
  const [plan, setPlan] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="mt-[5.6rem] md:mt-[7rem] flex flex-col items-center gap-[3.2rem] md:gap-[4rem]">
      <SectionTitle title="Вартість запуску" paddingBottom={0} />
      <PlanSwitcher plan={plan} setPlan={setPlan} />
      <PlanSlider plan={plan} />
    </div>
  );
}
