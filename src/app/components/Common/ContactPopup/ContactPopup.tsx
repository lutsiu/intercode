"use client";

import { Icon } from "@iconify/react";
import SectionTitle from "../SectionTitle";
import { useContactPopupStore } from "@/app/store/contactPopupStore";
import ContactPopupForm from "./ContactPopupForm";
import useClosePopupOnEscape from "@/app/hooks/useClosePopupOnEscape";
import { useTranslations } from "next-intl";

export default function ContactUsPopup() {
  const t = useTranslations("contactPopup");
  const close = useContactPopupStore((state) => state.close);
  useClosePopupOnEscape(close);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-start py-[2.5rem] justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className="bg-white rounded-[2.5rem] relative
                    w-[90%] sm:w-[85%] xl:w-[69.5%]
                    px-[2.4rem] sm:px-[4rem] md:px-[8rem] xl:px-[12rem]
                    pb-[3.2rem] sm:pb-[4rem] lg:pb-[6.8rem]
                    pt-[3.2rem] sm:pt-[5rem] xl:pt-[10.4rem]
                    flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon
          icon="clarity:close-line"
          width={24}
          height={24}
          className="absolute top-[1.4rem] sm:top-[2.4rem] right-[2.4rem] cursor-pointer"
          onClick={close}
        />

        <div className="max-w-[30.8rem] sm:max-w-full mx-auto">
          <SectionTitle title={t("title")} paddingBottom={0} />
        </div>

        <div className="max-w-[30.8rem] sm:max-w-full mx-auto text-center leading-[2.1rem] text-black md:text-[#A09F9F]
                        mt-[2.4rem] md:mt-[3.6rem]"
        >
          <h4 className="text-[1.4rem] font-medium lg:font-light leading-[2.4rem] md:leading-[2.1rem]">
            {t("subtitle.p1")}
          </h4>
          <h4 className="text-[1.4rem] font-medium lg:font-light leading-[2.4rem] md:leading-[2.1rem]">
            {t("subtitle.p2")}
          </h4>
        </div>

        <ContactPopupForm containerPx />
      </div>
    </div>
  );
}
