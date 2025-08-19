"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  icon: string;
  title: string;    // either "items.web.title" OR "servicesPage.items.web.title"
  subtitle: string; // same as above
  onClick: () => void;
}

export default function ServicePageCard({ icon, title, subtitle, onClick }: Props) {
  const tRoot = useTranslations();
  const tScoped = useTranslations("servicesPage");

  const resolve = (key: string, fallback: string) => {
    const fullPrefix = "servicesPage.";
    if (key.startsWith(fullPrefix)) {
      return tRoot(key as string, { default: fallback });
    }
    return tScoped(key as string, { default: fallback });
  };

  const titleText = resolve(title, title);
  const subtitleText = resolve(subtitle, subtitle);
  
  const t = useTranslations("servicesPage");

  return (
    <article
      className="w-full h-full flex flex-col px-[2rem] md:px-[3.5rem] xl:px-[4.6rem]
                 pt-[3.5rem] md:pt-[4.6rem] pb-[3.5rem] md:pb-[5.6rem]
                 bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] rounded-[4rem]
                 text-center md:text-left items-center md:items-start relative z-0 overflow-hidden"
    >
      <div className="flex-1 flex flex-col items-center md:items-start">
        <Image src={icon} alt={titleText} width={80} height={80} />
        <div className="flex flex-col gap-[1.6rem] md:gap-[2.5rem] mt-[3.2rem] sm:mt-[6rem] lg:mt-[8rem]">
          <h3 className="text-white text-[2.4rem] font-bold">{titleText}</h3>
          <p className="text-[1.6rem] leading-[2.4rem] text-white max-w-[51.4rem]">
            {subtitleText}
          </p>
        </div>
      </div>

      <button
        className="font-extrabold text-[1.8rem] h-[6.6rem] rounded-full w-[18.6rem] border-[1px] border-black
                   cursor-pointer hover:opacity-80 duration-200 mt-[3.2rem] md:mt-[4rem]"
        style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        onClick={onClick}
      >
        {t("details")}
      </button>
    </article>
  );
}
