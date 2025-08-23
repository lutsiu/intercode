"use client";

import { RentItPopupInfoType } from "@/app/types/RentItPopupInfoType";
import { Icon } from "@iconify/react";
import SectionTitle from "../../Common/SectionTitle";
import BlackButton from "../../Common/BlackButton";
import TemplatePopupGallery from "./TemplatePopupGallery";
import TemplatePopupContent from "./TemplatePopupContent";
import useClosePopupOnEscape from "@/app/hooks/useClosePopupOnEscape";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface Props { item: RentItPopupInfoType; onClose: () => void }

export default function TemplatePopup({ item, onClose }: Props) {
  const router = useRouter();
  const t = useTranslations();

  const heading = t("rentIt.templateLabel", {
    id: item.id.toUpperCase(),
    default: `TEMPLATE: ${item.id.toUpperCase()}`
  });

  const handleClick = () => { onClose?.(); router.push("/contact"); };
  useClosePopupOnEscape(onClose);

  console.log(item);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-start pt-[5rem] justify-center overflow-y-auto"
      role="dialog" aria-modal="true" id={item.id} onClick={onClose}
    >
      <div
        className="bg-white rounded-[2.5rem] relative
                   w-[90%] sm:w-[85%] lg:w-[71%]
                   px-[2.8rem] sm:px-[4rem] md:px-[8rem] xl:px-[15rem]
                   pt-[3.2rem] md:pt-[8.5rem]
                   pb-[3.2rem] md:pb-[5rem]
                   flex flex-col gap-[3.2rem] sm:gap-[4rem] lg:gap-[6rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon icon="clarity:close-line" width={24} height={24}
              className="absolute top-[1.6rem] right-[2.4rem] md:right-[2.7rem] cursor-pointer"
              onClick={onClose} />

        <SectionTitle title={heading} paddingBottom={0} />
        <TemplatePopupGallery images={item.pictures} />
        <TemplatePopupContent item={item} />

        <div className="w-fit mx-auto">
          <BlackButton text={t("rentIt.popup.cta", { default: "🔑 Взяти в оренду" })} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
