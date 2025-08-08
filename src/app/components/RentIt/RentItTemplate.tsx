import { RentItTemplateType } from "@/app/types/RentItType";
import Image from "next/image";

interface Props {
  item: RentItTemplateType;
  onClick: () => void;
}

export default function RentItTemplate({item, onClick}: Props) {

  const {title, image, description} = item;
  return (
    <article className="flex flex-col md:gap-[4rem] items-center 
                        px-[1.6rem] md:px-[0.8rem] 
                        pt-[1.6rem] md:pt-[0.8rem] 
                        pb-[2.4rem] md:pb-[3.6rem]">
      <Image 
        src={image} 
        alt={title} 
        width={326} 
        height={204}
      />
      <div className="md:hidden mt-[3.2rem] md:mt-0 flex flex-col gap-[1.6rem] mb-[1.6rem] text-center">
        <h5 className="text-[2.4rem] font-extrabold">{title}</h5>
        <p className="text-[1.4rem] text-[#656565]">{description}</p>
      </div>
      <button 
        onClick={onClick}
        className="text-[1.8rem] font-bold border-[1px] border-black flex items-center justify-center
                         py-[2.4rem] px-[3.6rem]  rounded-full cursor-pointer 
                         h-[6.6rem] hover:bg-black hover:text-white duration-300"
      >
        Детальніше
      </button>
    </article>
  )
}