"use client";

import { useEffect, useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useContactPopupStore } from "@/app/store/contactPopupStore";

interface Props {
  containerPx: boolean;
}

export default function ContactPopupForm({ containerPx }: Props) {
  const t = useTranslations("contactPopup.form");
  const { close, preset } = useContactPopupStore();
  const [task, setTask] = useState("");

  // Prefill textarea when popup opens via a plan button
  useEffect(() => {
    setTask(preset || "");
  }, [preset]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    close();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        flex flex-col gap-[1.8rem] text-black
        ${containerPx ? "sm:px-[2rem] md:px-[5.5rem] xl:px-[7.7rem]" : ""}
        mt-[2.4rem] md:mt-[3.6rem]
      `}
    >
      <input
        type="text"
        name="name-input"
        id="name-input"
        placeholder={t("name", { default: "Full name" })}
        className="text-[1.6rem] placeholder-[#A09F9F] text-black
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem]
          rounded-full border-[2px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(160,159,159,0.3)" }}
      />

      <input
        type="email"
        name="email-input"
        id="email-input"
        placeholder={t("email", { default: "Email" })}
        className="text-[1.6rem] placeholder-[#A09F9F] text-black
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem]
          rounded-full border-[2px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(160,159,159,0.3)" }}
      />

      <div className="relative">
        <textarea
          name="task"
          id="task"
          maxLength={2000}
          placeholder={t("task", { default: "What needs to be done?" })}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="text-[1.6rem] placeholder-[#A09F9F] text-black h-[12.9rem]
            py-[1.2rem] md:py-[1.9rem] pl-[1.5rem] md:pl-[3.6rem] pr-[8rem]
            rounded-[2.5rem] border-[2px] outline-none w-full resize-none"
          style={{ borderColor: "rgba(160,159,159,0.3)" }}
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-black font-medium text-[1.6rem]">
          {task.length}/2000
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[1.6rem]">
        <input
          type="text"
          name="promocode-input"
          id="promocode-input"
          placeholder={t("promo", { default: "PROMO CODE" })}
          className="text-[1.6rem] placeholder-[#A09F9F] text-black
            py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem]
            rounded-full border-[2px] outline-none
            h-[5.6rem] lg:h-[6.6rem] w-full lg:w-[55%]"
          style={{ borderColor: "rgba(160,159,159,0.3)" }}
        />

        <button
          type="submit"
          className="text-[1.8rem] lg:text-[1.4rem] xl:text-[1.8rem] font-bold py-[2.1rem]
            px-[1.5rem] md:px-[3.6rem] rounded-full h-[6.6rem]
            w-full lg:w-[45%] text-white bg-black cursor-pointer text-nowrap
            flex justify-center items-center"
        >
          🚀 {t("cta", { default: "Start the project" })}
        </button>
      </div>
    </form>
  );
}
