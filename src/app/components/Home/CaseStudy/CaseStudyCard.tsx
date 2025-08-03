import { CaseStudyType } from "@/app/types/CaesStudyType";
import Image from "next/image";

export default function CaseStudyCard({image, title, subtitle}: CaseStudyType) {

  return (
    <article className="flex flex-col">
      <div className="relative w-full aspect-[326/204] rounded-[1.6rem] overflow-hidden">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h5 className="text-[2.4rem] font-extrabold text-center mt-[4rem]">{title}</h5>
      <h6 className="font-semibold text-[1.4rem] text-[#656565] text-center mt-[3.2rem]">{subtitle}</h6>
    </article>
  )
}