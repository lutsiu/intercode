import type {Metadata} from "next";
import {site, canonical, languageAlternates} from "@/app/lib/seo";

export type Locale = "uk" | "en" | "pl";
type PageKey = "home" | "services" | "cases" | "rentIt" | "contact";

const copy: Record<PageKey, Record<Locale, {title: string; description: string}>> = {
  home: {
    uk: { title: "Софт, який заробляє!", description: "Розробляємо сайти, апки, боти та MVP. Стартуємо за 3 дні." },
    en: { title: "Software that earns!", description: "We build websites, apps, bots and MVPs. Start in 3 days." },
    pl: { title: "Oprogramowanie, które zarabia!", description: "Tworzymy strony, aplikacje, boty i MVP. Start w 3 dni." }
  },
  services: {
    uk: { title: "Послуги, які працюють", description: "Мінімум «можемо все». Максимум — що потрібно бізнесу." },
    en: { title: "Services that work", description: "Minimum 'we can do everything.' Maximum—what your business really needs." },
    pl: { title: "Usługi, które działają", description: "Minimum „zrobimy wszystko”. Maximum — to, czego potrzebuje Twój biznes." }
  },
  cases: {
    uk: { title: "Кейси", description: "Реальні проєкти та результати." },
    en: { title: "Case studies", description: "Real projects and measurable results." },
    pl: { title: "Realizacje", description: "Prawdziwe projekty i wyniki." }
  },
  rentIt: {
    uk: { title: "Орендуй IT-рішення", description: "Запуск за 3 дні без розробки з нуля. Готовий сайт під ключ + підтримка." },
    en: { title: "Rent an IT Solution", description: "Launch in 3 days without building from scratch. Ready-made site + support." },
    pl: { title: "Wynajmij rozwiązanie IT", description: "Start w 3 dni bez budowy od zera. Gotowa strona + wsparcie." }
  },
  contact: {
    uk: { title: "Напиши нам — і ми включимось!", description: "Швидко реагуємо. Без спаму. Коротка форма — людською мовою." },
    en: { title: "Write to us — and we’ll jump in!", description: "We respond fast. No spam. A short form in plain language." },
    pl: { title: "Napisz do nas — od razu działamy!", description: "Odpowiadamy szybko. Bez spamu. Krótki formularz." }
  }
};

function pick<T extends PageKey>(locale: string, page: T) {
  const l: Locale = (["uk","en","pl"] as const).includes(locale as Locale)
    ? (locale as Locale)
    : "uk";
  return copy[page][l];
}

/** Small DRY helper you can reuse inside each page’s generateMetadata */
export function pageMeta(locale: string, page: PageKey, path: string): Metadata {
  const {title, description} = pick(locale, page);
  return {
    title,
    description,
    alternates: {
      canonical: canonical(path),
      languages: languageAlternates(path)
    },
    openGraph: {
      title,
      description,
      url: canonical(path).toString(),
      siteName: site.name,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }]
    }
  };
}
