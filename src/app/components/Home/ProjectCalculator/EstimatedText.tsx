"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";

export default function EstimatedText() {

  const {open} = useContactPopupStore();

  return (
    <div className="mt-[2rem] lg:mt-[19.3rem] flex flex-col items-center lg:items-start">
      <p className="text-[2.4rem] lg:text-[2.85rem] 2xl:text-[3.6rem] font-extrabold
                    leading-[2.4rem] lg:leading-[4rem] 
                    text-center lg:text-left
                    mb-[6.3rem] lg:mb-[3.2rem]">
        Отримай вартість <br className="lg:hidden"/> твого проекту <br/> протягом 12 годин!
      </p>
      <button 
        className="bg-black text-white cursor-pointer rounded-full flex justify-center items-center
                     text-wrap sm:text-nowrap
                     w-[19.3rem] sm:w-[27.6rem] h-[8.3rem] sm:h-[6.6rem] py-[0.9rem] lg:py-[2.1rem] px-[3.6rem] text-[1.8rem] font-bold "
        onClick={open}
    >
      Розрахувати вартість
    </button>
    </div>
  )
}