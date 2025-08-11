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
      className="flex flex-col gap-[1.8rem] text-[#A09F9F] sm:px-[2rem] md:px-[5.5rem] xl:px-[7.7rem] mt-[2.4rem] md:mt-[3.6rem]"
    >
      <input 
        type="text" 
        name="name-input"
        placeholder="Ім’я Прізвище" 
        id="name-input" 
        className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem] rounded-full border-[2px]  outline-none h-[4.8rem]"
        style={{borderColor: "rgba(160,159,159,0.3)"}}
      />
      <input 
        type="email" 
        name="email-input"
        placeholder="Email" 
        id="email-input" 
        className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem] rounded-full border-[2px] outline-none h-[4.8rem]"
          style={{borderColor: "rgba(160,159,159,0.3)"}}
      />
      <div className="relative">
        <textarea 
          name="task" 
          id="task"
          placeholder="Що потрібно зробити?" 
          maxLength={2000}
          className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F] h-[12.9rem]
            py-[1.2rem] md:py-[1.9rem] pl-[1.5rem] md:pl-[3.6rem] pr-[8rem] rounded-[2.5rem] border-[2px] outline-none w-full resize-none"
            style={{borderColor: "rgba(160,159,159,0.3)"}}
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-[#A09F9F] font-medium text-[1.6rem]">
          0/2000
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[1.6rem]">
        <input 
          type="text" 
          name="promocode-input"
          placeholder="PROMO CODE" 
          id="promocode-input" 
          className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
            py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem] rounded-full border-[2px] outline-none 
            h-[5.6rem] lg:h-[6.6rem] 
            w-full lg:w-[55%]"
            style={{borderColor: "rgba(160,159,159,0.3)"}}
        />
        <button 
          type="submit"
          className="text-[1.8rem] font-bold py-[2.1rem] px-[1.5rem] md:px-[3.6rem] rounded-full 
            h-[6.6rem] w-full lg:w-[45%] text-white bg-black cursor-pointer text-nowrap"
        >
          🚀 Почати спільну справу
        </button>
      </div>
    </form>
  )
}