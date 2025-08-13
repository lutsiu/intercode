"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore"

export default function ContactUsButton() {

  const {open} = useContactPopupStore();

  return (
    <button
      onClick={open}
      className="bg-black text-white font-bold text-[1.8rem] 
                   py-[2.1rem] lg:py-[1.5rem] xl:py-[2.1rem] 
                   px-[7.3rem] lg:px-[3rem] xl:px-[3.8rem] 
                   h-[6.6rem] rounded-full w-full lg:w-fit
                   text-nowrap
                   flex items-center justify-center
                   "
    >
      Contact us
    </button>
  )
}