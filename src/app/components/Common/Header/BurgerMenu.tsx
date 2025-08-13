"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactUsButton from "../ContactUsButton";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LANGUAGE_OPTIONS } from "@/app/data/LanguageOptions";

type LangCode = "uk" | "en" | "pl";
interface Props { setOpenMenu: Dispatch<SetStateAction<boolean>>; openMenu: boolean }

export default function BurgerMenu({ setOpenMenu, openMenu }: Props) {
  const [active, setActive] = useState<LangCode>("uk");
  const activeFlag = LANGUAGE_OPTIONS.find((l) => l.code === active)?.flag ?? "🇺🇦";

  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onOutside = (e: PointerEvent) => {
      if (!openMenu) return;
      const el = menuRef.current;
      if (el && !el.contains(e.target as Node)) setOpenMenu(false);
    };
    window.addEventListener("pointerdown", onOutside);
    return () => window.removeEventListener("pointerdown", onOutside);
  }, [openMenu, setOpenMenu]);

  const close = () => setOpenMenu(false);

  return (
    <menu
      ref={menuRef}
      aria-hidden={!openMenu}
      className={[
        "absolute top-[4.8rem] sm:top-[8.1rem] left-0 z-[1000]",
        "rounded-l-0 rounded-r-[3rem] min-w-[27rem]",
        "px-[1.2rem] pt-[3.2rem] pb-[2.4rem]",
        "flex flex-col gap-[2.4rem]",
        "transition-all duration-300 ease-out",
        openMenu ? "opacity-100 translate-y-0 pointer-events-auto"
                 : "opacity-0 -translate-y-2 pointer-events-none",
      ].join(" ")}
      style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
    >
      <button className="absolute top-[2.4rem] right-[2.4rem]" onClick={close}>
        <Icon icon="material-symbols-light:close" className="w-[3rem] h-[3rem]" />
      </button>

      <ul className="flex flex-col gap-[1.6rem] px-[3.7rem]">
        <Link href="/" onClick={close} className="text-[1.2rem] sm:text-[1.4rem]">Про нас</Link>
        <Link href="/services" onClick={close} className="text-[1.2rem] sm:text-[1.4rem]">Послуги, які працюють</Link>
        <Link href="/case-studies" onClick={close} className="text-[1.2rem] sm:text-[1.4rem]">Case Studies</Link>
        <Link href="/rent-it" onClick={close} className="text-[1.2rem] sm:text-[1.4rem]">Rent an IT Solution</Link>
      </ul>

      <div className="px-[3.7rem] flex items-center text-[1.4rem]">
        <span className="mr-[0.8rem] text-[1.8rem] leading-none">{activeFlag}</span>
        <div
          className="flex items-center
                     [&>button:not(:last-child)]:after:content-['|']
                     [&>button:not(:last-child)]:after:mx-[0.8rem]
                     [&>button:not(:last-child)]:after:text-black/30"
          role="group"
          aria-label="Language switcher"
        >
          {LANGUAGE_OPTIONS.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => setActive(code as LangCode)}
              className={`cursor-pointer hover:opacity-80 ${
                code === active ? "text-[#2C95E0] font-semibold" : "text-black/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ContactUsButton />
    </menu>
  );
}
