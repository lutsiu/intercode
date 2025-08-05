import { RentItTemplateType } from "@/app/types/RentItType";
import Image from "next/image";

export default function RentItTemplate({title, image, description}: RentItTemplateType) {

  return (
    <article className="flex flex-col gap-[4rem] items-center px-[0.8rem] pt-[0.8rem] pb-[3.6rem]">
      <Image 
        src={image} 
        alt={title} 
        width={326} 
        height={204}
      />
      <h5 className="text-[2.4rem] font-extrabold">{title}</h5>
      <p className="text-[1.4rem] text-[#656565]">{description}</p>
      <button className="text-[1.8rem] font-bold border-[1px] border-black flex items-center justify-center
                         py-[2.4rem] px-[3.6rem]  rounded-full cursor-pointer 
                         h-[6.6rem] hover:bg-black hover:text-white duration-300"
      >
          Детальніше
      </button>
    </article>
  )
}