"use client";

import { RentItPopupInfoType } from "@/app/types/RentItPopupInfoType";
import { useTranslations } from "next-intl";

interface Props { item: RentItPopupInfoType }

export default function TemplatePopupContent({ item }: Props) {
  const t = useTranslations();
  const { who, includes, style, feature, results } = item;

  return (
    <div className="flex flex-col gap-[1.5rem] md:gap-[2.4rem] text-center lg:text-left">
      <ContentBlock title={t("rentIt.popup.sections.who")}     text={t(who as string)} />
      <ContentList  title={t("rentIt.popup.sections.includes")} items={includes.map(k => t(k as string))} />
      <ContentBlock title={t("rentIt.popup.sections.style")}   text={t(style as string)} />
      <ContentBlock title={t("rentIt.popup.sections.feature")} text={t(feature as string)} />
      <ContentList  title={t("rentIt.popup.sections.results")} items={results.map(k => t(k as string))} />
    </div>
  );
}

function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-[1.5rem] md:gap-[2.4rem]">
      <h5 className="font-bold text-[1.4rem] md:text-[1.6rem]">{title}</h5>
      <p className="text-[1.4rem] md:text-[1.6rem] leading-[2.4rem]">{text}</p>
    </div>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[1.5rem] md:gap-[2.4rem]">
      <h5 className="font-bold text-[1.6rem]">{title}</h5>
      <ul className="flex flex-col md:pl-[1rem]">
        {items.map((s, i) => (
          <li key={i} className="text-[1.4rem] md:text-[1.6rem] leading-[2.4rem]">• {s}</li>
        ))}
      </ul>
    </div>
  );
}
