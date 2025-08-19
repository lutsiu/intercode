"use client";

import { useEffect, useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useContactPopupStore } from "@/app/store/contactPopupStore";
import useContactSubmit from "@/app/hooks/useContactSubmit";

interface Props { containerPx: boolean; }

export default function ContactPopupForm({ containerPx }: Props) {
  const t = useTranslations("contactPopup.form");
  const { close, preset } = useContactPopupStore();
  const { submit, loading } = useContactSubmit();

  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask]   = useState("");
  const [promo, setPromo] = useState("");
  const [hp, setHp]       = useState(""); // honeypot

  useEffect(() => { setTask(preset || ""); }, [preset]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = await submit({ name, email, task, promo, hp });
    if (ok) {
      setName(""); setEmail(""); setTask(""); setPromo(""); setHp("");
      close();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        "flex flex-col gap-[1.8rem] text-black",
        containerPx ? "sm:px-[2rem] md:px-[5.5rem] xl:px-[7.7rem]" : "",
        "mt-[2.4rem] md:mt-[3.6rem]"
      ].join(" ")}
    >
      {/* hidden honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
        aria-hidden
      />

      <input
        type="text"
        id="popup-name"
        placeholder={t("name", { default: "Full name" })}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-[1.6rem] placeholder-[#A09F9F] text-black
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem]
          rounded-full border-[2px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(160,159,159,0.3)" }}
      />

      <input
        type="email"
        id="popup-email"
        placeholder={t("email", { default: "Email" })}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[1.6rem] placeholder-[#A09F9F] text-black
          py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem]
          rounded-full border-[2px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(160,159,159,0.3)" }}
      />

      <div className="relative">
        <textarea
          id="popup-task"
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
          id="popup-promo"
          placeholder={t("promo", { default: "PROMO CODE" })}
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          className="text-[1.6rem] placeholder-[#A09F9F] text-black
            py-[1.2rem] md:py-[1.5rem] px-[1.5rem] md:px-[3.6rem]
            rounded-full border-[2px] outline-none
            h-[5.6rem] lg:h-[6.6rem] w-full lg:w-[55%]"
          style={{ borderColor: "rgba(160,159,159,0.3)" }}
        />

        <button
          type="submit"
          disabled={loading}
          className="text-[1.8rem] lg:text-[1.4rem] xl:text-[1.8rem] font-bold py-[2.1rem]
            px-[1.5rem] md:px-[3.6rem] rounded-full h-[6.6rem]
            w-full lg:w-[45%] bg-black hover:bg-white hover:text-black duration-300 text-white
            border-[2px] 
            cursor-pointer text-nowrap whitespace-nowrap flex-shrink-0
            flex justify-center items-center disabled:opacity-60"
        >
          🚀 {loading ? t("sending") : t("cta", { default: "Start the project" })}
        </button>
      </div>
    </form>
  );
}
