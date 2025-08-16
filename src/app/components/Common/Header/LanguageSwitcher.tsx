'use client';

import Image from "next/image";
import triangle from "../../../../../public/triangle.svg";
import { useState, MouseEvent } from "react";
import { LANGUAGE_OPTIONS } from "@/app/data/LanguageOptions";
import type { LanguageOption } from "@/app/types/LanguageOptionType";

// from your next-intl wrappers:
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale(); // "uk" | "en" | "pl"

  const active = LANGUAGE_OPTIONS.find(l => l.code === locale) ?? LANGUAGE_OPTIONS[0];

  const handlePick = (e: MouseEvent, opt: LanguageOption) => {
    e.stopPropagation();               
    setShowModal(false);
    if (opt.code !== locale) {
      router.push(pathname, { locale: opt.code }); 
    }
  };

  return (
    <div
      onClick={() => setShowModal(prev => !prev)}
      className="flex items-center gap-[0.7rem] relative cursor-pointer"
    >
      <div className="">
        <Image
          src={triangle}
          alt="Triangle"
          width={8}
          height={8}
          className={`w-[0.8rem] h-[0.8rem] transition-transform ${showModal ? 'rotate-180' : ''}`}
        />
      </div>

      <p className="flex items-start gap-[0.7rem]">
        <span className="text-[2rem] inline-block leading-none">{active.flag}</span>
        <span className="text-[1.6rem] font-semibold inline-block leading-none mt-[0.1rem]">
          {active.label}
        </span>
      </p>

      <ul
        className={`
          absolute right-[-1rem] top-[3.5rem] z-[1000] w-[8.6rem]
          bg-white px-[1.6rem] py-[1.6rem] rounded-[1rem] border-[0.1rem] border-[#D4D2E3]
          shadow-[0_4px_4px_rgba(0,0,0,0.15)]
          flex flex-col gap-[1.2rem]
          transition-all duration-200 ease-out
          ${showModal ? 'opacity-100 translate-y-0 delay-150 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 delay-0 pointer-events-none'}
        `}
        onClick={e => e.stopPropagation()}
        role="menu"
        aria-hidden={!showModal}
      >
        {LANGUAGE_OPTIONS.map((l) => (
          <li
            key={l.code}
            className="flex gap-[0.6rem]"
            role="menuitem"
            onClick={(e) => handlePick(e, l)}
          >
            <span className="text-[2rem]">{l.flag}</span>
            <span
              className={`text-[1.6rem] mt-[0.25rem] ${
                locale === l.code ? "font-bold text-blue-500" : "font-normal text-black"
              }`}
            >
              {l.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
