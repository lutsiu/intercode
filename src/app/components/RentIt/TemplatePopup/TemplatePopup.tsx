import { RentItPopupInfoType } from "@/app/types/RentItPopupInfoType";
import { Icon } from "@iconify/react";
import SectionTitle from "../../Common/SectionTitle";
import BlackButton from "../../Common/BlackButton";
import TemplatePopupGallery from "./TemplatePopupGallery";
import TemplatePopupContent from "./TemplatePopupContent";

interface Props {
  item: RentItPopupInfoType;
  onClose: () => void;
}

export default function TemplatePopup({ item, onClose }: Props) {
  const { id } = item;

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      id={id}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[2.5rem] w-[71%] relative px-[15rem] pt-[8.5rem] pb-[5rem] flex flex-col gap-[6rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon 
          icon="clarity:close-line"
          width={24}
          height={24}
          className="absolute top-[1.6rem] right-[2.7rem] cursor-pointer"
          onClick={onClose}
        />

        <SectionTitle title={`TEMPLATE: ${id.toUpperCase()}`} paddingBottom={0} />

        <TemplatePopupGallery />

        <TemplatePopupContent item={item} />

        <div className="w-fit mx-auto">
          <BlackButton text="🔑 Взяти в оренду" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
