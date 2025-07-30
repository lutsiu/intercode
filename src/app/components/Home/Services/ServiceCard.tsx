import { ServiceCardType } from "@/app/types/ServiceCardType";
import Image from "next/image";
export default function ServiceCard({icon, title, duration, link}: ServiceCardType) {
  const [firstWord, secondWord] = title.split(" ");

  return (
    <article className="w-[40.2rem] h-[36rem] rounded-[4rem] py-[2.4rem] pl-[2.7rem]
                    bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] flex flex-col justify-between">

  <div>
    <div className="w-[8rem] h-[8rem] bg-icon-bg flex items-center justify-center rounded-[1.7rem]">
      <Image 
        src={icon} 
        alt={title} 
        height={32}
        width={32}
      />
    </div>
    <h4 className="text-[3.6rem] text-white font-extrabold mt-[6.5rem] leading-[4rem]">
      {firstWord}
      {secondWord && <><br />{secondWord}</>}
    </h4>
  </div>

  <p className="text-[1.6rem] font-bold text-[#C7CEF9]">{duration}</p>
</article>

  )
}