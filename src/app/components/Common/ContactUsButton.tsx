"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore"

export default function ContactUsButton() {

  const {open} = useContactPopupStore();

  return (
    <button
      onClick={open}
      className="bg-black text-white font-bold text-[1.8rem] py-[2.1rem] px-[3.8rem] h-[6.6rem] rounded-full block w-fit"
    >
      Contact us
    </button>
  )
}