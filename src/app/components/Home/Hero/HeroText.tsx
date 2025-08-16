"use client";

import ContactUsButton from "@/app/components/Common/ContactUsButton";
import {useTranslations} from "next-intl";

export default function HeroText() {
  const t = useTranslations("homepage.hero");

  return (
    <div className="pt-[8rem] lg:pt-[20rem] 2xl:pt-[35rem] lg:pl-[10.4rem] mx-auto lg:mx-0 text-center lg:text-left z-100">
      <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5.2rem] font-extrabold">
        {t("title")}
      </h1>

      <p className="text-[1.2rem] sm:text-[1.7rem] xl:text-[1.8rem] font-normal lg:font-semibold mt-[1.8rem] sm:mt-[2.4rem] leading-[2.4rem]">
        {t("subtitle.p1")} <br className="block lg:hidden" /> {t("subtitle.p2")} <br className="lg:block hidden" /> {t("subtitle.p3")}
      </p>

      <div className="mx-auto lg:mx-0 mt-[2.7rem] sm:mt-[3.2rem] w-[17.6rem] sm:w-[20rem] lg:w-full">
        <ContactUsButton />
      </div>
    </div>
  );
}
