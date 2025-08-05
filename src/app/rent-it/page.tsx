'use client';

import { useState } from "react";
import SectionTitle from "../components/Common/SectionTitle";
import RentItTemplate from "../components/RentIt/RentItTemplate";
import PlanButton from "../components/RentIt/PlanButton";
import { rentItTemplates } from "../data/RentItTemplatesData";
import PlanCard from "../components/RentIt/PlanCard";
import { launchPlans } from "../data/LaunchPlanData";

export default function RentItPage() {
  const [plan, setPlan] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      aria-label="Case Studies page"
      className="px-[8rem] pt-[7rem] pb-[11rem]"
    > 
      <div className="flex flex-col items-center gap-[3rem]">
        <SectionTitle title="Rent an IT Solution" paddingBottom={0}/>
        <h3 className="font-medium text-[2.4rem]">Не купуй. Візьми в оренду. Як сайт, так і рішення.</h3>
        <div className="text-center text-[1.6rem]">
          <h5>Хочеш запуститись за 3 дні — без розробки з нуля? Орендуй готовий сайт усім під ключ: дизайн, логіка, підтримка.</h5>
          <h5>👀 Обери шаблон, ⚙️ ми налаштуємо, 🚀 і вперед.</h5>
        </div>
      </div>

      <div className="flex gap-[7.6rem] mt-[6.4rem] justify-center">
        {rentItTemplates.map((r, i) => (
          <RentItTemplate key={i} {...r} />
        ))}
      </div>

      <div className="mt-[7rem] flex flex-col items-center gap-[4rem]">
        <SectionTitle title="Вартість запуску" paddingBottom={0} />
        
        <div className="flex gap-[1.5rem]">
          <PlanButton title="Monthly plan" isActive={plan === "monthly"} onClick={() => setPlan("monthly")} />
          <PlanButton title="Annual plan" isActive={plan === "annual"} onClick={() => setPlan("annual")} />
        </div>

        <div className="flex justify-center gap-[2.8rem]">
          {launchPlans.slice(3,6).map((lp, i) => {
            return <PlanCard key={i} {...lp}/>
          })}
        </div>
      </div>
    </section>
  );
}
