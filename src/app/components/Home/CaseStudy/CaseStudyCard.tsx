import { CaseStudyType } from "@/app/types/CaesStudyType";
import Image from "next/image";

export default function CaseStudyCard({image, title, subtitle}: CaseStudyType) {

  return (
    <article className="flex flex-col border-[2px]  rounded-[1.6rem] sm:rounded-none sm:border-none
                       border-[#D4D2E3] 
                       sm:pt-0 pt-[1.6rem] 
                       sm:px-[0] px-[1.6rem]
                       sm:pb-0 pb-[3.2rem]
                       shadow-[0_8px_12px_-6px_rgba(0,0,0,0.25)]
                       sm:shadow-none
                       ">
      <div className="relative w-full aspect-[326/204] rounded-[1.6rem] overflow-hidden">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h5 className="text-[1.8rem] md:text-[2.4rem] font-extrabold text-center mt-[3.2rem] md:mt-[4rem]">{title}</h5>
      <h6 className="font-bold md:font-semibold text-[1.4rem] text-[#656565] text-center mt-[2rem] md:mt-[3.2rem]">{subtitle}</h6>
    </article>
  )
}