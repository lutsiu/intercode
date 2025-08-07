import { Icon } from "@iconify/react";
import SectionTitle from "../SectionTitle";
import { useContactPopupStore } from "@/app/store/contactPopupStore";


export default function ContactUsPopup() {

  const close = useContactPopupStore((state) => state.close);
  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div 
        className="bg-white rounded-[2.5rem] w-[69.5%] relative px-[12rem] py-[6.8rem] flex flex-col gap-[3.6rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon 
          icon="clarity:close-line"
          width={24}
          height={24}
          className="absolute top-[1.6rem] right-[2.7rem] cursor-pointer"
          onClick={close}
        />

        <SectionTitle title={"Напиши нам — і ми включимось!"} paddingBottom={0} />

        <div className="text-center leading-[2.1rem] text-[#A09F9F]">
          <h4 className="text-[1.4rem] font-light">
            Реагуємо швидко. Без спаму. Без менеджерів з шаблонами.
          </h4>
          <h4 className="text-[1.4rem] font-light">
            Заповни коротку форму — і ми все скажемо по-людськи.
          </h4>
        </div>

        <form className="flex flex-col gap-[1.8rem] text-[#A09F9F] px-[7.7rem]">
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
      </div>
    </div>
  );
}
