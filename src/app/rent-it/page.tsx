'use client';

import SectionTitle from "../components/Common/SectionTitle";
import PlansSection from "../components/RentIt/PlansSection";
import TemplatesSection from "../components/RentIt/TemplatesSection";
export default function RentItPage() {

  return (
    <section
       aria-label="Rent an IT Solution" 
      className="
        px-[1.8rem] sm:px-[4rem] lg:px-[8rem]
        pt-[4.8rem] lg:pt-[7rem] 
        pb-[3.9rem] sm:pb-[5rem] lg:pb-[11rem]"
    >
      <div className="flex flex-col items-center gap-[1.6rem] sm:gap-[2rem] lg:gap-[3rem] mx-auto">
        <SectionTitle title="Rent an IT Solution" paddingBottom={0}/>
        <h3 className="font-medium text-[1.4rem] 
                      sm:text-[1.9rem] lg:text-[2.4rem] leading-[2.4rem] text-center ">
            Не купуй. Візьми в оренду. <br className="block sm:hidden" /> Як сайт, так і рішення.
        </h3>
        <div className="text-center text-[1.2rem] sm:text-[1.6rem] leading-[2.4rem] max-w-[32.2rem] sm:max-w-full">
          <h5>Хочеш запуститись за 3 дні — без розробки з нуля? Орендуй готовий сайт усім під ключ: дизайн, логіка, підтримка.</h5>
          <h5>👀 Обери шаблон, ⚙️ ми налаштуємо, 🚀 і вперед.</h5>
        </div>
      </div>

      <TemplatesSection />
      <PlansSection />

    </section>
  );
}
