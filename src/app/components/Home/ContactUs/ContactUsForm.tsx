"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import useContactSubmit from "@/app/hooks/useContactSubmit";

export default function ContactUsForm() {
  const t = useTranslations("homepage.contact.form");
  const { submit, loading } = useContactSubmit();

  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask]   = useState("");
  const [promo, setPromo] = useState("");
  const [hp, setHp]       = useState(""); // hidden honeypot

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = await submit({ name, email, task, promo, hp });
    if (ok) { setName(""); setEmail(""); setTask(""); setPromo(""); setHp(""); }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[1.8rem] lg:w-[40%] xl:w-full my-[4rem] lg:my-0">
      {/* honeypot */}
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
        id="home-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("name")}
        className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white
                   py-[1.2rem] sm:py-[1.5rem] px-[1.6rem] sm:px-[3.6rem] rounded-full border-[1px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
      />

      <input
        type="email"
        id="home-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("email")}
        className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white
                   py-[1.2rem] sm:py-[1.5rem] px-[1.6rem] sm:px-[3.6rem] rounded-full border-[1px] outline-none h-[4.8rem]"
        style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
      />

      <div className="relative">
        <textarea
          id="home-task"
          maxLength={2000}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={t("task")}
          className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white h-[12.9rem]
                     py-[1.9rem] pl-[1.2rem] sm:pl-[3.6rem] pr-[7rem] sm:pr-[8rem] rounded-[2.5rem] border-[1px] outline-none w-full scroll-none overflow-y-hidden"
          style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-white font-medium text-[1.2rem] sm:text-[1.6rem]">
          {task.length}/2000
        </span>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-[1.6rem]">
        <input
          type="text"
          id="home-promo"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          placeholder={t("promo")}
          className="bg-blue-500 text-white text-[1.2rem] sm:text-[1.6rem] placeholder-white
                     py-[1.2rem] sm:py-[1.5rem] px-[1.6rem] sm:px-[3.6rem] rounded-full border-[1px] outline-none h-[6.6rem] w-full"
          style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
        />

        <button
          type="submit"
          disabled={loading}
          className="text-[1.8rem] font-bold py-[2.1rem] px-[3.6rem] rounded-full flex items-center justify-center
                     h-[6.6rem] w-full xl:w-[30.9rem] bg-black hover:bg-white hover:text-black duration-300 text-white cursor-pointer text-nowrap disabled:opacity-60"
        >
          🚀 {loading ? t("sending") : t("cta")}
        </button>
      </div>
    </form>
  );
}
