import { useTranslations } from "next-intl";

type Props = {
  title: string;
  fixedWidth?: boolean;           
  className?: string;
};

export default function IndustryCard({ title, fixedWidth = false, className = "" }: Props) {
  const widthClass = fixedWidth ? "w-[41.6rem]" : "w-full";

  const t = useTranslations("");
  const emoji = t(title).slice(0,3);
  const text = t(title).slice(2);
  return (
    <article
      className={`${widthClass} px-[4.5rem] py-[1.6rem] md:py-[1.9rem]  rounded-full h-[6.4rem] md:h-[8.8rem]
                  flex items-center justify-center gap-[0.7rem] md:gap-[2.4rem]
                  bg-gradient-to-b from-[#B9EDFF] to-[#2C95E0] cursor-pointer ${className}`}
    >
      <span className="text-[3.2rem] md:text-[5rem] ">{emoji}</span>
      <p className="font-bold text-[1.8rem] lg:text-[2.4rem] text-nowrap">{text}</p>
    </article>
  );
}
