"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";
import BlackButton from "../../Common/BlackButton";

export default function EstimatedText() {

  const {open} = useContactPopupStore();

  return (
    <div className="pt-[31.8rem] pl-[7.4rem]">
      <p className="text-[3.6rem] font-extrabold leading-[4rem] mb-[3.2rem]">
        Отримай вартість твого проекту <br/> протягом 12 годин!
      </p>
      <BlackButton text="Розрахувати вартість" onClick={open}/>
    </div>
  )
}