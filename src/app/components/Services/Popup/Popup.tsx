// app/components/Services/Popup/Popup.tsx
"use client";

import { ServicePageItemType } from "@/app/types/ServicePageItemType";
import { Icon } from "@iconify/react";
import PopupTitle from "./PopupTitle";
import PopupImage from "./PopupImage";
import PopupButton from "./PopupButton";
import PopupDescription from "./PopupDescription";
import useClosePopupOnEscape from "@/app/hooks/useClosePopupOnEscape";
import { useTranslations } from "next-intl";

interface Props {
  item: ServicePageItemType;
  onClose: () => void;
}

export default function ServicePopup({ onClose, item }: Props) {
  const { popup } = item;
  const t = useTranslations();

  const title = t(popup.title as any, { default: popup.title });
  const intro = t(popup.intro as any, { default: popup.intro });
  const description = t(popup.description as any, { default: popup.description });
  const features = popup.features.map((f) => t(f as any, { default: f }));
  const finalNote = t(popup.finalNote as any, { default: popup.finalNote });
  const actionText = t(popup.actionText as any, { default: popup.actionText });
  const whatWeDo = t("servicesPage.common.whatWeDo", { default: "Що зробимо:" });

  useClosePopupOnEscape(onClose);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center sm:items-start justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[3.5rem] md:rounded-[2.5rem] relative 
                   w-[90%] sm:w-[85%] lg:w-[71%] 
                   px-[2.8rem] md:px-[8rem] xl:px-[15rem] 
                   py-[3.2rem] md:py-[8.5rem] 
                   flex flex-col 
                   gap-[2.4rem] sm:gap-[3rem] lg:gap-[6rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon
          icon="clarity:close-line"
          width={24}
          height={24}
          className="absolute top-[2.4rem] sm:top-[2.6rem] right-[2.4rem] sm:right-[3.7rem] cursor-pointer"
          onClick={onClose}
        />

        <PopupTitle title={title} intro={intro} description={description} />
        <PopupImage image={popup.image} title={title} />
        <PopupDescription heading={whatWeDo} features={features} finalNote={finalNote} />
        <PopupButton onClick={onClose} actionText={actionText} />
      </div>
    </div>
  );
}
