"use client";

import {useTranslations} from "next-intl";
import ContactUsImage from "./ContactUsImage";

export default function ContactUsPitch() {
  const t = useTranslations("homepage.contact.pitch");

  return (
    <div className="text-white lg:mt-[2.8rem] lg:w-[60%] xl:w-full text-left">
      <h4 className="font-bold lg:font-extrabold text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] 2xl:text-[3.6rem]">
        {t("title.p1")} <br className="block sm:hidden" /> {t("title.p2")}
      </h4>

      <h6 className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.8rem] font-normal lg:font-bold leading-[2.4rem] mt-[2.8rem] sm:mt-[1.6rem]">
        {t("subtitle.p1")} <br /> {t("subtitle.p2")}
      </h6>

      <div className="hidden lg:block">
        <ContactUsImage />
      </div>
    </div>
  );
}
