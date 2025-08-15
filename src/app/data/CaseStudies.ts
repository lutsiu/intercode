import { CaseStudyPageCardType, CaseStudyType } from "../types/CaesStudyType";
import { ShowCaseGalleryItem } from "../types/ShowCaseGalleryType";

const caseStudies: CaseStudyType[] = [
  { 
    id: 1,
    image: "/caseStudies/docgo.webp",
    title: "DocGo",
    subtitle: "Приватна клініка",
  },
  { 
    id: 2,
    image: "/caseStudies/learnup.webp",
    title: "LearnUp",
    subtitle: "Освітній стартап",
  },
  { 
    id: 3,
    image: "/caseStudies/eatflow.webp",
    title: "EatFlow",
    subtitle: "Доставка їжі",
  },
  { 
    id: 4,
    image: "/caseStudies/lushglow.webp",
    title: "Lush Glow",
    subtitle: "Бренд доглядової косметики",
  },
  { 
    id: 5,
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
    textColor: "black",
  }
];

export default caseStudies;

const IMG = "/cat.png";

export const showCaseGalleryData: ShowCaseGalleryItem[] = Array.from(
  { length: 5 },
  (_, i) => ({
    id: i + 1,
    images: [IMG, IMG, IMG, IMG],
  })
);
