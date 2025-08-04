import { CaseStudyPageCardType, CaseStudyType } from "../types/CaesStudyType";

const caseStudies: CaseStudyType[] = [
  {
    image: "/caseStudies/docgo.webp",
    title: "DocGo",
    subtitle: "Приватна клініка",
  },
  {
    image: "/caseStudies/learnup.webp",
    title: "LearnUp",
    subtitle: "Освітній стартап",
  },
  {
    image: "/caseStudies/eatflow.webp",
    title: "EatFlow",
    subtitle: "Доставка їжі",
  },
  {
    image: "/caseStudies/lushglow.webp",
    title: "Lush Glow",
    subtitle: "Бренд доглядової косметики",
  },
  {
    image: "/caseStudies/bricknkey.webp",
    title: "Brick & Key",
    subtitle: "Агентство з нерухомості",
  },
];

export const caseStudiesPageCards: CaseStudyPageCardType[] = [
  {
    projectName: "LearnUp",
    client: "Освітній стартап",
    task: "MVP для тесту гіпотези — курси з англійської онлайн",
    deliverables: [
      "Простий сайт з каталогом курсів",
      "Реєстрація, оплата, таймери та кабінет учня",
      "Система домашок і сертифікації"
    ],
    stack: ["Vue.js", "Firebase", "Stripe"],
    results: "MVP за 12 днів, перші 100 користувачів — за тиждень",
    image: "/caseStudies/learn-up-big.webp",
    textColor: "black",
  },
  {
    projectName: "Lush Glow",
    client: "Бренд доглядової косметики",
    task: "Створити швидкий e-commerce сайт із мінімалістичним дизайном",
    deliverables: [
      "Дизайн UX/UI з упором на мобільний досвід",
      "Інтеграція Stripe + Nova Poshta API",
      "Адмін-панель для керування товарами"
    ],
    stack: ["React", "Next.js", "Firebase", "Tailwind"],
    results: "+53% до онлайн-продажів за перші 3 тижні",
    image: "/caseStudies/lush-glow-big.webp",
    textColor: "white",
  },
  {
    projectName: "DocGo",
    client: "Приватна клініка",
    task: "Цифровізувати процеси запису і зберігання даних",
    deliverables: [
      "Web і мобільний додаток для пацієнтів",
      "Інтеграція календаря лікарів і онлайн-оплати",
      "Безпечне зберігання медичних даних"
    ],
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    results: "-42% навантаження на рецепцію, +70% пацієнтів обирають онлайн-запис",
    image: "/caseStudies/doc-go-big.webp",
    textColor: "white",
  }
];

export default caseStudies;
