"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";
import { useTranslations } from "next-intl";

export default function PlanCardButton({
  period,
  title, 
}: {
  period: "monthly" | "annual";
  title: string;
}) {
  const { open } = useContactPopupStore();
  const t = useTranslations();

  // 1) If title is a key like "rentIt.pricing.tiers.flex.title", extract the slug from it.
  const keyMatch = title.match(/rentIt\.pricing\.tiers\.(basic|standard|flex)\.title/i);
  const slugFromKey = (keyMatch?.[1] as "basic" | "standard" | "flex" | undefined) ?? undefined;

  // 2) Otherwise, normalize the visible label to a slug.
  const slugFromLabel = (() => {
    const k = title.trim().toLowerCase();

   
    if (k === "standart") return "standard";

    // english
    if (k === "basic" || k === "standard" || k === "flex") return k;

    // ukrainian
    if (k === "базовий") return "basic";
    if (k === "стандарт") return "standard";
    if (k === "флекс") return "flex";

    // polish
    if (k === "podstawowy") return "basic";
    if (k === "standard") return "standard";
    if (k === "elastyczny") return "flex";

    return undefined;
  })();

  const slug: "basic" | "standard" | "flex" =
    slugFromKey ?? slugFromLabel ?? "standard"; // safe fallback

  // Localized period label (e.g., "Monthly plan", "Річний план", "Plan roczny")
  const rawPeriod = t(`rentIt.pricing.plans.${period}`, { default: period });

  // Avoid "plan plan" if your label already ends with "plan/план".
  const periodClean = rawPeriod.replace(/\s*(plan|план)\s*$/i, "");

  // Localized tier label; if `title` was a key, use it directly, else resolve via slug.
  const tierLabel = keyMatch
    ? t(title as string, { default: title })
    : t(`rentIt.pricing.tiers.${slug}.title`, { default: title.replace(/standart/gi, "Standard") });

  // Final preset (uses your existing translation template)
  const preset = t("contactPopup.autofill.plan", {
    period: periodClean,
    tier: tierLabel,
    default: `Цікавить ${periodClean} «${tierLabel}».`,
  });

  return (
    <button
      onClick={() => open(preset)}
      className="
        mt-auto rounded-full bg-black text-white py-[2.1rem]
        flex justify-center items-center w-[24.5rem] sm:w-[30.8rem] h-[6.6rem]
        text-[1.8rem] font-bold cursor-pointer"
    >
      {t("rentIt.pricing.choose", { default: "Обрати" })}
    </button>
  );
}
