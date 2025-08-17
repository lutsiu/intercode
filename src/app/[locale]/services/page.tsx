'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "../../components/Common/SectionTitle";
import ServicePopup from "../../components/Services/Popup/Popup";
import ServicePageCards from "../../components/Services/ServicePageCards";
import { ServicePageItemType } from "../../types/ServicePageItemType";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";


export default function ServicesPage() {
  const [activePopup, setActivePopup] = useState<ServicePageItemType | null>(null);
  const t = useTranslations("servicesPage");

  useLockBodyScroll(!!activePopup);

  return (
    <section
      aria-label="Services page"
      className="px-[1.8rem] sm:px-[4rem] lg:px-[8rem] pt-[4.8rem] lg:pt-[7rem] pb-[1.9rem] sm:pb-[4rem] lg:pb-[8rem]"
    >
      <div className="px-[1.6rem] sm:px-[0]">
        <SectionTitle title={t("title")} paddingBottom={20} />
        <h4 className="text-[1.4rem] sm:text-[1.9rem] lg:text-[2.4rem] font-medium text-center">
          {t("tagline")}
        </h4>
      </div>

      <ServicePageCards setActivePopup={setActivePopup} />

      {activePopup && (
        <ServicePopup
          item={activePopup}
          onClose={() => setActivePopup(null)}
        />
      )}
    </section>
  );
}
