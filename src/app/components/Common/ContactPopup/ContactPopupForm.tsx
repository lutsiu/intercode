import { useContactPopupStore } from "@/app/store/contactPopupStore"
import { FormEvent } from "react";

export default function ContactPopupForm() {

  const {close} = useContactPopupStore();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    close();
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-[1.8rem] text-[#A09F9F] px-[7.7rem] mt-[3.6rem]"
    >
      <input 
        type="text" 
        name="name-input"
        placeholder="Ім’я Прізвище" 
        id="name-input" 
        className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
          py-[1.5rem] px-[3.6rem] rounded-full border border-[#A09F9F] outline-none h-[4.8rem]"
      />
      <input 
        type="email" 
        name="email-input"
        placeholder="Email" 
        id="email-input" 
        className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
          py-[1.5rem] px-[3.6rem] rounded-full border border-[#A09F9F] outline-none h-[4.8rem]"
      />
      <div className="relative">
        <textarea 
          name="task" 
          id="task"
          placeholder="Що потрібно зробити?" 
          maxLength={2000}
          className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F] h-[12.9rem]
            py-[1.9rem] pl-[3.6rem] pr-[8rem] rounded-[2.5rem] border border-[#A09F9F] outline-none w-full resize-none"
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-[#A09F9F] font-medium text-[1.6rem]">
          0/2000
        </span>
      </div>
      <div className="flex items-center gap-[1.6rem]">
        <input 
          type="text" 
          name="promocode-input"
          placeholder="PROMO CODE" 
          id="promocode-input" 
          className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
            py-[1.5rem] px-[3.6rem] rounded-full border border-[#A09F9F] outline-none h-[6.6rem] w-[46%] "
        />
        <button 
          type="submit"
          className="text-[1.8rem] font-bold py-[2.1rem] px-[3.6rem] rounded-full 
            h-[6.6rem] w-[54%] text-white bg-black cursor-pointer text-nowrap"
        >
          🚀 Почати спільну справу
        </button>
      </div>
    </form>
  )
}