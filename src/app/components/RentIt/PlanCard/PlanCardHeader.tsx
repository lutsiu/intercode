import { LaunchPlanType } from "@/app/types/LaunchPlanType";

export default function PlanCardHeader({
  title,
  price,
  annualPrice,
  description,
  popular,
}: LaunchPlanType) {
  return (
    <div className="sm:h-[20.8rem] flex flex-col">
      <div className="flex">
        <h4 className="text-[2.4rem] sm:text-[2.8rem] font-bold">{title}</h4>
        {popular && (
          <span className="ml-auto flex items-center justify-center bg-white max-w-[10.8rem] h-[4.6rem]
                          text-black rounded-full px-[2.2rem] py-[1.4rem] text-[1.6rem]">
            Popular
          </span>
        )}
      </div>

      <div>
        <div className="flex items-center">
          <p className="text-[5.6rem] font-bold leading-[6.6rem]">₴{price}</p>
          <span className="text-[2rem] font-medium leading-[2rem] mt-[3.5rem]">/місяць</span>
        </div>
        <div className="mt-[0.8rem] max-w-[30.8rem]">
          {annualPrice && (
            <span className="text-[1.8rem] font-semibold leading-[3rem]">
              ₴{annualPrice}/рік
            </span>
          )}
          <p className="leading-[2.8rem] text-[1.8rem]">{description}</p>
        </div>
      </div>
    </div>
  );
}
