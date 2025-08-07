'use client';

import SectionTitle from "../components/Common/SectionTitle";
import PlansSection from "../components/RentIt/PlansSection";
import TemplatesSection from "../components/RentIt/TemplatesSection";
export default function RentItPage() {

  return (
    <section aria-label="Rent an IT Solution" className="px-[8rem] pt-[7rem] pb-[11rem]">
      <div className="flex flex-col items-center gap-[3rem]">
        <SectionTitle title="Rent an IT Solution" paddingBottom={0}/>
        <h3 className="font-medium text-[2.4rem]">Не купуй. Візьми в оренду. Як сайт, так і рішення.</h3>
        <div className="text-center text-[1.6rem]">
          <h5>Хочеш запуститись за 3 дні — без розробки з нуля? Орендуй готовий сайт усім під ключ: дизайн, логіка, підтримка.</h5>
          <h5>👀 Обери шаблон, ⚙️ ми налаштуємо, 🚀 і вперед.</h5>
        </div>
      </div>

      <TemplatesSection />
      <PlansSection />

    </section>
  );
}
