import { LaunchPlanType } from "@/app/types/LaunchPlanType";
import { Icon } from "@iconify/react";

export default function PlanCard({
  title,
  price,
  period,
  annualPrice,
  description,
  features,
  popular,
}: LaunchPlanType) {
  return (
    <article
      className={`
        px-[4rem] pt-[4.8rem] pb-[5.6rem] h-[66.7rem] border-[1px] rounded-[3rem]
        flex flex-col 
        ${popular ? 
          "bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] border-transparent text-white"
          : "bg-white border-[#D4D2E3] text-black"}
      `}
    >
      {/* Wrap everything except the button */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <h4 className="text-[2.8rem] font-bold">{title}</h4>
          {popular && (
            <span className="flex items-center justify-center bg-white w-[10.8rem] h-[4.6rem]
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
            {annualPrice && <span className="text-[1.8rem] font-semibold leading-[3rem]">₴{annualPrice}/рік</span>}
            <p className="leading-[2.8rem] text-[1.8rem]">{description}</p>
            <div className={`${popular ? "bg-white" :"bg-[#D4D2E3]"} w-[30.8rem] h-[1px] mx-auto mt-[1rem]`} />
          </div>
        </div>

        <ul className={`
          flex flex-col ${popular ? "gap-[2.3rem]" : "gap-[1.6rem]"}
          mt-[1.6rem]
        `}>
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-[1.4rem]">
              <div className={`flex items-center justify-center ${popular ? "bg-white" : "bg-black"} rounded-full w-[2.6rem] h-[2.6rem]`}>
                <Icon 
                  icon="ic:round-check" 
                  width="20" 
                  height="20"
                  className={popular ? "text-black" : "text-white"}
                />
              </div>
              <span className="text-[1.6rem] font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Button is pushed to bottom */}
      <button 
        className="
          mt-auto rounded-full bg-black text-white py-[2.1rem]
          flex justify-center items-center w-[30.8rem] text-[1.8rem] font-bold cursor-pointer"
      >
        Обрати
      </button>
    </article>
  );
}
