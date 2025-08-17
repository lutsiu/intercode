// src/app/components/RentIt/PlanCard/PlanCardButton.tsx
import { useContactPopupStore } from "@/app/store/contactPopupStore";
import { useTranslations } from "next-intl";

export default function PlanCardButton() {
  const { open } = useContactPopupStore();
  const t = useTranslations();

  return (
    <button
      onClick={open}
      className="
        mt-auto rounded-full bg-black text-white py-[2.1rem]
        flex justify-center items-center w-[24.5rem] sm:w-[30.8rem] h-[6.6rem]
        text-[1.8rem] font-bold cursor-pointer"
    >
      {t("rentIt.pricing.choose", { default: "Обрати" })}
    </button>
  );
}
