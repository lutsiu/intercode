"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import {useContactPopupStore} from "@/app/store/contactPopupStore";

export default function ContactUsForm() {
  const t = useTranslations("homepage.contact.form");
  const {open} = useContactPopupStore();
  const [task, setTask] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    open();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-[1.8rem] lg:w-[40%] xl:w-full my-[4rem] lg:my-0"
    >
      <input
        type="text"
        name="name-input"
        id="name-input"
        placeholder={t("name")}
        className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white
                   py-[1.2rem] sm:py-[1.5rem] px-[1.6rem] sm:px-[3.6rem] rounded-full border-[1px] outline-none h-[4.8rem]"
        style={{borderColor: "rgba(255, 255, 255, 0.3)"}}
      />

      <input
        type="email"
        name="email-input"
        id="email-input"
        placeholder={t("email")}
        className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white
                   py-[1.2rem] sm:py-[1.5rem] px-[1.6rem] sm:px-[3.6rem] rounded-full border-[1px] outline-none h-[4.8rem]"
        style={{borderColor: "rgba(255, 255, 255, 0.3)"}}
      />

      <div className="relative">
        <textarea
          name="task"
          id="task"
          maxLength={2000}
          placeholder={t("task")}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white h-[12.9rem]
                     py-[1.9rem] pl-[1.2rem] sm:pl-[3.6rem] pr-[7rem] sm:pr-[8rem] rounded-[2.5rem] border-[1px] outline-none w-full scroll-none overflow-y-hidden"
          style={{borderColor: "rgba(255, 255, 255, 0.3)"}}
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-white font-medium text-[1.2rem] sm:text-[1.6rem]">
          {task.length}/2000
        </span>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-[1.6rem]">
        <input
          type="text"
          name="promocode-input"
          id="promocode-input"
          placeholder={t("promo")}
          className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white
                     py-[1.2rem] sm:py-[1.5rem] px-[1.6rem] sm:px-[3.6rem] rounded-full border-[1px] outline-none h-[6.6rem] w-full"
          style={{borderColor: "rgba(255, 255, 255, 0.3)"}}
        />

        <button
          type="submit"
          className="text-[1.8rem] font-bold py-[2.1rem] px-[3.6rem] rounded-full flex items-center justify-center
                     h-[6.6rem] w-full xl:w-[30.9rem] text-white bg-black cursor-pointer text-nowrap"
        >
          🚀 {t("cta")}
        </button>
      </div>
    </form>
  );
}
