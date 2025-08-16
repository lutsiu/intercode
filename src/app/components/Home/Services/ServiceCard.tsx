'use client';

import { ServiceCardType } from "@/app/types/ServiceCardType";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServiceCard({ icon, title, duration }: ServiceCardType) {
  const t = useTranslations();
  const titleText = t(title);
  const durationText = t(duration);

  const [firstWord, ...rest] = titleText.split(" ");
  const secondLine = rest.join(" ");

  return (
    <article className="w-[65%] lg:w-full 2xl:w-[40.2rem] h-[36rem] rounded-[4rem] 
                    py-[2.4rem] lg:pl-[2.7rem]
                    bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] 
                    flex flex-col items-center lg:items-start justify-between">
      <div className="flex flex-col items-center lg:items-start">
        <Image
          src={icon}
          alt={titleText}
          height={80}
          width={80}
        />
        <h4 className="text-[3.6rem] text-white font-extrabold text-center lg:text-left mt-[6.5rem] leading-[4rem]">
          {firstWord}
          {secondLine && (
            <>
              <br />
              {secondLine}
            </>
          )}
        </h4>
      </div>

      <p className="text-[1.6rem] font-bold text-[#C7CEF9]">{durationText}</p>
    </article>
  );
}
