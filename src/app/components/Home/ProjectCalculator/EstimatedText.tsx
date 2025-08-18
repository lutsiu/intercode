"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";
import { useTranslations } from "next-intl";

export default function EstimatedText() {
  const { open } = useContactPopupStore();
  const t = useTranslations("homepage.calculator");

  return (
    <div className="mt-[2rem] lg:mt-[19.3rem] flex flex-col items-center lg:items-start">
      <p className="text-[2.4rem] lg:text-[2.85rem] 2xl:text-[3.6rem] font-extrabold leading-[2.4rem] lg:leading-[4rem] text-center lg:text-left mb-[6.3rem] lg:mb-[3.2rem]">
        {t("subtitle.p1")} <br className="lg:hidden" /> {t("subtitle.p2")} <br /> {t("subtitle.p3")}
      </p>
      <button
        className="bg-black hover:bg-white hover:text-black duration-300 text-white cursor-pointer rounded-full flex justify-center items-center text-wrap sm:text-nowrap w-[19.3rem] sm:w-[27.6rem] h-[8.3rem] sm:h-[6.6rem] py-[0.9rem] lg:py-[2.1rem] px-[3.6rem] text-[1.8rem] font-bold"
        onClick={() => open()}
      >
        {t("cta")}
      </button>
    </div>
  );
}
