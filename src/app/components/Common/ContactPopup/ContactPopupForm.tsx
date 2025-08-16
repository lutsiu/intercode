"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

interface Props {
  containerPx: boolean;
}

export default function ContactPopupForm({ containerPx }: Props) {
  const t = useTranslations("contactPopup.form");
  const { close } = useContactPopupStore();
  const [task, setTask] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    close();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        flex flex-col gap-[1.8rem] text-[#A09F9F]
        ${containerPx ? "sm:px-[2rem] md:px-[5.5rem] xl:px-[7.7rem]" : ""}
        mt-[2.4rem] md:mt-[3.6rem]
      `}
    >
      <input
        type="text"
        name="name-input"
        placeholder={t("name")}
        id="name-input"
        className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem] rounded-full border-[2px]  outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(160,159,159,0.3)" }}
      />

      <input
        type="email"
        name="email-input"
        placeholder={t("email")}
        id="email-input"
        className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem] rounded-full border-[2px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(160,159,159,0.3)" }}
      />

      <div className="relative">
        <textarea
          name="task"
          id="task"
          placeholder={t("task")}
          maxLength={2000}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F] h-[12.9rem]
            py-[1.2rem] md:py-[1.9rem] pl-[1.5rem] md:pl-[3.6rem] pr-[8rem] rounded-[2.5rem] border-[2px] outline-none w-full resize-none"
          style={{ borderColor: "rgba(160,159,159,0.3)" }}
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-[#A09F9F] font-medium text-[1.6rem]">
          {task.length}/2000
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[1.6rem]">
        <input
          type="text"
          name="promocode-input"
          placeholder={t("promo")}
          id="promocode-input"
          className="text-[1.6rem] placeholder-[#A09F9F] text-[#A09F9F]
            py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem] rounded-full border-[2px] outline-none
            h-[5.6rem] lg:h-[6.6rem]
            w-full lg:w-[55%]"
          style={{ borderColor: "rgba(160,159,159,0.3)" }}
        />

        <button
          type="submit"
          className="text-[1.8rem] lg:text-[1.4rem] xl:text-[1.8rem] font-bold py-[2.1rem] px-[1.5rem] md:px-[3.6rem] rounded-full
            h-[6.6rem] w-full lg:w-[45%] text-white bg-black cursor-pointer text-nowrap
            flex justify-center items-center"
        >
          🚀 {t("cta")}
        </button>
      </div>
    </form>
  );
}
