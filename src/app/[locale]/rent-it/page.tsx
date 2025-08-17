'use client';

import { pageMeta } from "@/app/lib/pageMeta";
import SectionTitle from "../../components/Common/SectionTitle";
import PlansSection from "../../components/RentIt/PlansSection";
import TemplatesSection from "../../components/RentIt/TemplatesSection";
import { useTranslations } from "next-intl";
import { Metadata } from "next";


export default function RentItPage() {
  const t = useTranslations("rentIt");

  return (
    <section
      aria-label="Rent an IT Solution"
      className="px-[3.3rem] sm:px-[4rem] lg:px-[8rem] pt-[4.8rem] lg:pt-[7rem] pb-[3.9rem] sm:pb-[5rem] lg:pb-[11rem]"
    >
      <div className="flex flex-col items-center gap-[1.6rem] sm:gap-[2rem] lg:gap-[3rem] mx-auto">
        <SectionTitle title={t("title")} paddingBottom={0} />
        <h3 className="font-medium text-[1.4rem] sm:text-[1.9rem] lg:text-[2.4rem] leading-[2.4rem] text-center">
          {t("hero.tagline.p1")} <br className="block sm:hidden" /> {t("hero.tagline.p2")}
        </h3>
        <div className="text-center text-[1.2rem] sm:text-[1.6rem] leading-[2.4rem] max-w-[32.2rem] sm:max-w-full">
          <h5>{t("hero.intro.p1")}</h5>
          <h5>{t("hero.intro.p2")}</h5>
        </div>
      </div>

      <TemplatesSection />
      <PlansSection />
    </section>
  );
}
