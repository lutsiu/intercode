"use client";

import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "../Common/ImageSkeleton";
import { RentItTemplateType } from "@/app/types/RentItType";
import { useTranslations } from "next-intl";

interface Props { item: RentItTemplateType; onClick: () => void; }

export default function RentItTemplate({ item, onClick }: Props) {
  const { title, image, description } = item;
  const [loaded, setLoaded] = useState(false);
  const t = useTranslations("rentIt");
  const titleText = t(title as string, { default: title });
  const descText = t(description as string, { default: description });
  const cta = t("cta", { default: "Детальніше" });

  return (
    <article
      className="w-full flex h-full flex-col md:gap-[4rem] items-center
                 px-[1.6rem] md:px-[0.8rem] pt-[1.6rem] md:pt-[0.8rem]
                 pb-[2.4rem] md:pb-[3.6rem]"
    >
      <div className="relative w-full aspect-[326/204] rounded-[2rem] overflow-hidden">
        {!loaded && <ImageSkeleton className="w-full h-full rounded-[2rem]" />}
        <Image
          src={image}
          alt={titleText}
          fill
          className={`object-cover rounded-[2rem] transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="mt-[3.2rem] md:mt-0 flex-1 flex flex-col gap-[1.6rem] mb-[1.6rem] text-center">
        <h5 className="text-[2.4rem] lg:text-[2rem] xl:text-[2.4rem] font-extrabold">{titleText}</h5>
        <p className="text-[1.4rem] text-[#656565]">{descText}</p>
      </div>

      <button
        onClick={onClick}
        className="mt-auto text-[1.8rem] font-bold border-[1px] border-black
                   flex items-center justify-center py-[2.4rem] px-[3.6rem]
                   rounded-full cursor-pointer h-[6.6rem]
                   hover:bg-black hover:text-white duration-300"
      >
        {cta}
      </button>
    </article>
  );
}
