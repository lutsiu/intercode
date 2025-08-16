import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  icon: StaticImageData | string; 
  fixedWidth?: boolean;           
  className?: string;
};

export default function IndustryCard({ title, icon, fixedWidth = false, className = "" }: Props) {
  const widthClass = fixedWidth ? "w-[41.6rem]" : "w-full";

  const t = useTranslations("");
  return (
    <article
      className={`${widthClass} px-[4.5rem] py-[1.9rem] rounded-full
                  flex items-center justify-center gap-[0.7rem] md:gap-[2.4rem]
                  bg-gradient-to-b from-[#B9EDFF] to-[#2C95E0] cursor-pointer ${className}`}
    >
      <Image src={icon} alt={title} width={50} height={50} className="w-[3.2rem] h-[3.2rem] md:w-[5rem] md:h-[5rem]" />
      <p className="font-bold text-[1.6rem] lg:text-[2.4rem] text-nowrap">{t(title)}</p>
    </article>
  );
}
