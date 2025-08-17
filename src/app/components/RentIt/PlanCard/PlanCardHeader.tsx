// src/app/components/RentIt/PlanCard/PlanCardHeader.tsx
import { LaunchPlanType } from "@/app/types/LaunchPlanType";
import { useTranslations } from "next-intl";

export default function PlanCardHeader({
  title,
  price,
  annualPrice,
  description,
  popular,
}: LaunchPlanType) {
  const t = useTranslations();
  const titleText = t(title as string, { default: title });
  const descText = t(description as string, { default: description });
  const popularText = t("rentIt.pricing.popular", { default: "Popular" });
  const perMonth = t("rentIt.pricing.perMonth", { default: "/місяць" });
  const perYear = t("rentIt.pricing.perYear", { default: "/рік" });

  return (
    <div className="sm:h-[20.8rem] flex flex-col">
      <div className="flex">
        <h4 className="text-[2.4rem] sm:text-[2.8rem] font-bold">{titleText}</h4>
        {popular && (
          <span className="ml-auto flex items-center justify-center bg-white 
                          max-w-[9.3rem] sm:max-w-[10.8rem] 
                          max-h-[4rem] sm:max-h-[4.6rem]
                          text-black rounded-full 
                          px-[1.85rem] sm:px-[2.2rem] 
                          py-[1.1rem] sm:py-[1.4rem] 
                          text-[1.4rem] sm:text-[1.6rem]">
            {popularText}
          </span>
        )}
      </div>

      <div>
        <div className="flex items-center">
          <p className="text-[4rem] sm:text-[5.6rem] font-semibold sm:font-bold leading-[2.4rem] sm:leading-[6.6rem]">
            ₴{price}
          </p>
          <span className="text-[1.6rem] sm:text-[2rem] font-medium leading-[2rem] mt-[2.5rem] sm:mt-[3.5rem]">
            {perMonth}
          </span>
        </div>
        <div className="mt-[0.8rem] max-w-[30.8rem]">
          {annualPrice && (
            <span className="text-[1.8rem] font-semibold leading-[3rem]">
              ₴{annualPrice}{perYear}
            </span>
          )}
          <p className="leading-[1.9rem] sm:leading-[2.8rem] text-[1.4rem] sm:text-[1.8rem]">
            {descText}
          </p>
        </div>
      </div>
    </div>
  );
}
