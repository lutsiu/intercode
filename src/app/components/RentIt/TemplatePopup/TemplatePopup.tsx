"use client";

import { RentItPopupInfoType } from "@/app/types/RentItPopupInfoType";
import { Icon } from "@iconify/react";
import SectionTitle from "../../Common/SectionTitle";
import BlackButton from "../../Common/BlackButton";
import TemplatePopupGallery from "./TemplatePopupGallery";
import TemplatePopupContent from "./TemplatePopupContent";
import useClosePopupOnEscape from "@/app/hooks/useClosePopupOnEscape";
import { useRouter } from "next/navigation";

interface Props {
  item: RentItPopupInfoType;
  onClose: () => void;
}

export default function TemplatePopup({ item, onClose }: Props) {
  const { id } = item;
  
  const router = useRouter();
  
  const handleClick = () => {
    onClose?.();
    router.push("/contact");
  };
  useClosePopupOnEscape(onClose);
  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center lg:pt-[10rem] justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      id={id}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[2.5rem] relative
                    w-[90%] sm:w-[85%] lg:w-[71%]  
                    px-[2.8rem] sm:px-[4rem] md:px-[8rem] xl:px-[15rem] 
                    pt-[3.2rem] md:pt-[8.5rem] 
                    pb-[3.2rem] md:pb-[5rem] 
                    flex flex-col 
                    gap-[3.2rem] sm:gap-[4rem] lg:gap-[6rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon 
          icon="clarity:close-line"
          width={24}
          height={24}
          className="absolute top-[1.6rem] right-[2.4rem] md:right-[2.7rem] cursor-pointer"
          onClick={onClose}
        />

        <SectionTitle title={`TEMPLATE: ${id.toUpperCase()}`} paddingBottom={0} />

        <TemplatePopupGallery />

        <TemplatePopupContent item={item} />

        <div className="w-fit mx-auto">
          <BlackButton text="🔑 Взяти в оренду" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
