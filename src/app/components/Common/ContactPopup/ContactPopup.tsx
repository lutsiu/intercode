"use client";

import { Icon } from "@iconify/react";
import SectionTitle from "../SectionTitle";
import { useContactPopupStore } from "@/app/store/contactPopupStore";
import ContactPopupForm from "./ContactPopupForm";
import useClosePopupOnEscape from "@/app/hooks/useClosePopupOnEscape";

export default function ContactUsPopup() {

  const close = useContactPopupStore((state) => state.close);
  useClosePopupOnEscape(close);
  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div 
        className="bg-white rounded-[2.5rem] w-[69.5%] relative px-[12rem] py-[6.8rem] flex flex-col gap-[3.6rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon 
          icon="clarity:close-line"
          width={24}
          height={24}
          className="absolute top-[1.6rem] right-[2.7rem] cursor-pointer"
          onClick={close}
        />

        <SectionTitle title={"Напиши нам — і ми включимось!"} paddingBottom={0} />

        <div className="text-center leading-[2.1rem] text-[#A09F9F]">
          <h4 className="text-[1.4rem] font-light">
            Реагуємо швидко. Без спаму. Без менеджерів з шаблонами.
          </h4>
          <h4 className="text-[1.4rem] font-light">
            Заповни коротку форму — і ми все скажемо по-людськи.
          </h4>
        </div>

        <ContactPopupForm/>
      </div>
    </div>
  );
}
