'use client';

import Image from "next/image";
import serviceCardData from "../../../data/ServiceCardsData";
import { useTranslations } from "next-intl";

export default function ServicesMobileCard() {
  const t = useTranslations();

  return (
    <ul
      className="
        rounded-[3rem] py-[3.2rem] px-[1.6rem]
        w-[33.9rem] h-[48.2rem]
        sm:hidden flex flex-col gap-[3.2rem]
        bg-gradient-to-b from-[#9BC3FF] to-[#186AE5]
      "
    >
      {serviceCardData.map((card, i) => {
        const title = t(card.title);
        const duration = t(card.duration);
        return (
          <li key={i} className="flex items-center gap-[0.8rem]">
            <div>
              <Image src={card.icon} alt={title} width={44} height={44} />
            </div>
            <div className="flex flex-col justify-between">
              <h5 className="text-white text-[2.4rem] font-bold">{title}</h5>
              <h5 className="text-[1.4rem] font-bold text-[#C7CEF9]">{duration}</h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
