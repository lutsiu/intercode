import { AboutUsCardType } from "@/app/types/AboutUsType";
import Image from "next/image";


export default function AboutUsCard({icon, gradient, title, subtitle, description}: AboutUsCardType) {

  return (  
    <article 
      className={`
        flex flex-col text-center sm:text-left items-center sm:items-start 
        gap-[3.2rem] sm:gap-[10rem] lg:gap-[8rem] pt-[3.5rem] lg:pt-[4.6rem] px-[2rem] sm:px-[4.6rem]
        h-[33.9rem] sm:h-[46.8rem] rounded-[5rem]
      `}
      style={{
        background: `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`
      }}
    >
      <Image src={icon} alt={title} width={80} height={80} />

      <div className="flex flex-col gap-[1rem] lg:gap-[2.5rem]">
        <h4 className="font-extrabold text-[1.4rem] sm:text-[2.4rem]">{title}</h4>
        <h6 className="font-bold text-[1.4rem] sm:text-[1.6rem]">{subtitle}</h6>
        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] font-normal lg:font-medium leading-[2.4rem] text-white max-w-[51rem]">{description}</p>
      </div>
    </article>
  )
}