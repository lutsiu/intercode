'use client';

import { useEffect, useState } from "react";
import SectionTitle from "../components/Common/SectionTitle";
import ServicePopup from "../components/Services/Popup/Popup";
import ServicePageCards from "../components/Services/ServicePageCards";
import { ServicePageItemType } from "../types/ServicePageItemType";

export default function ServicesPage() {
  const [activePopup, setActivePopup] = useState<ServicePageItemType | null>(null);

  useEffect(() => {
    if (activePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activePopup]);

  return (
    <section 
      aria-label="Services page" 
      className="px-[8rem] pt-[7rem] pb-[8rem]"
    >
      <SectionTitle title="Послуги, які працюють" paddingBottom={20}/>
      <h4 className="text-[2.4rem] font-medium text-center">
        Мінімум “можемо зробити все”. Максимум — що справді потрібно твоєму бізнесу.
      </h4>

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
