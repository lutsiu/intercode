import { LaunchPlanType } from "../types/LaunchPlanType";

export const launchPlans: LaunchPlanType[] = [
  // MONTHLY PLANS
  {
    title: "Basic",
    price: 900,
    description: "Для тих, кому просто треба “щоб сайт був” — без зайвого.",
    features: [
      "Головна + контакти",
      "Telegram-кнопка",
      "Мобільна адаптація",
    ],
    popular: false,
    period: "monthly",
    featuresMarginTop: 6.9,
  },
  {
    title: "Standard",
    price: 1500,
    description: "Ідеальний варіант для бізнесу, якому важливо виглядати живим.",
    features: [
      "Головна + 3 внутрішні сторінки",
      "Заміна фото, текстів",
      "Блок “Про нас” або “Портфоліо”",
      "Telegram + e-mail + Instagram",
    ],
    popular: true,
    period: "monthly",
    featuresMarginTop: 4.8,
  },
  {
    title: "Flex",
    price: 2400,
    description: "Підлаштовується під тебе — як good бариста під твій ранок.",
    features: [
      "Повна кастомізація контенту",
      "До 6 сторінок",
      "Анімації, форма заявки",
      "Підтримка в месенджері",
    ],
    popular: false,
    period: "monthly",
    featuresMarginTop: 4.8,
  },

  // ANNUAL PLANS
  {
    title: "Basic",
    price: 750,
    annualPrice: 9000,
    description: "Мінімум клопоту — максимум спокою на рік.",
    features: [
      "Головна сторінка + контакти",
      "Telegram-кнопка або форма",
      "Мобільна адаптація",
      "Хостинг + техпідтримка",
      "1 бонусна правка при запуску",
    ],
    popular: false,
    period: "annual",
    featuresMarginTop: 2.7,
  },
  {
    title: "Standard",
    price: 1250,
    annualPrice: 15000,
    description: "Все потрібне — і ще трішки зверху.",
    features: [
      "Головна + 3 сторінки (послуги, про нас, портфоліо)",
      "Мобільна адаптація, SEO-базова",
      "Telegram, e-mail, Instagram",
      "1 редизайн або оновлення контенту протягом року",
    ],
    popular: true,
    period: "annual",
    featuresMarginTop: 1.35,
  },
  {
    title: "Flex",
    price: 1990,
    annualPrice: 23880,
    description: "Для тих, хто хоче жити зі своїм сайтом.",
    features: [
      "До 6 сторінок, кастом контенту",
      "Анімації, форма заявки, розділи “FAQ”, “Блог”",
      "Пріоритетна підтримка",
      "Щомісячні дрібні зміни (1/міс)",
      "1 повне оновлення/рік",
    ],
    popular: false,
    period: "annual",
    featuresMarginTop: 2.2,
  },
];
