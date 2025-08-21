// src/app/data/CaseStudies.ts
import { CaseStudyPageCardType, CaseStudyType } from "../types/CaesStudyType";
import { ShowCaseGalleryItem } from "../types/ShowCaseGalleryType";

export const caseStudies: CaseStudyType[] = [
  { id: 1, image: "/caseStudies/bank.webp",           title: "homepage.cases.items.docgo.title",     subtitle: "homepage.cases.items.docgo.subtitle" },        // mobile bank
  { id: 2, image: "/caseStudies/fitness.webp",        title: "homepage.cases.items.eatflow.title",   subtitle: "homepage.cases.items.eatflow.subtitle" },      // fitness app
  { id: 3, image: "/caseStudies/construction.webp",   title: "homepage.cases.items.bricknkey.title", subtitle: "homepage.cases.items.bricknkey.subtitle" },    // construction website
  { id: 4, image: "/caseStudies/restaurant.webp",     title: "homepage.cases.items.learnup.title",   subtitle: "homepage.cases.items.learnup.subtitle" },      // French restaurant
  { id: 5, image: "/caseStudies/mental-health.webp",  title: "homepage.cases.items.lushglow.title",  subtitle: "homepage.cases.items.lushglow.subtitle" }      // mental health app
];

export const caseStudiesPageCards: CaseStudyPageCardType[] = [
  {
    projectName: "LearnUp",
    client: "caseStudiesPage.items.learnup.client",
    task: "caseStudiesPage.items.learnup.task",
    deliverables: [
      "caseStudiesPage.items.learnup.deliverables.1",
      "caseStudiesPage.items.learnup.deliverables.2",
      "caseStudiesPage.items.learnup.deliverables.3"
    ],
    stack: ["Vue.js", "Firebase", "Stripe"],
    results: "caseStudiesPage.items.learnup.results",
    image: "/caseStudies/learn-up-big.webp",
    textColor: "black"
  },
  {
    projectName: "Lush Glow",
    client: "caseStudiesPage.items.lushglow.client",
    task: "caseStudiesPage.items.lushglow.task",
    deliverables: [
      "caseStudiesPage.items.lushglow.deliverables.1",
      "caseStudiesPage.items.lushglow.deliverables.2",
      "caseStudiesPage.items.lushglow.deliverables.3"
    ],
    stack: ["React", "Next.js", "Firebase", "Tailwind"],
    results: "caseStudiesPage.items.lushglow.results",
    image: "/caseStudies/lush-glow-big.webp",
    textColor: "white"
  },
  {
    projectName: "DocGo",
    client: "caseStudiesPage.items.docgo.client",
    task: "caseStudiesPage.items.docgo.task",
    deliverables: [
      "caseStudiesPage.items.docgo.deliverables.1",
      "caseStudiesPage.items.docgo.deliverables.2",
      "caseStudiesPage.items.docgo.deliverables.3"
    ],
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    results: "caseStudiesPage.items.docgo.results",
    image: "/caseStudies/doc-go-big.webp",
    textColor: "black"
  }
];

export default caseStudies;

const bankImages = Array.from(
  { length: 8 },
  (_, i) => `/caseStudiesGallery/bank/mobile_bank_case${i + 1}.webp`
);

const fitnessImages = Array.from(
  { length: 8 },
  (_, i) => `/caseStudiesGallery/fitness/fitness_mobile_app_case${i + 1}.webp`
);

const constructionImages = Array.from(
  { length: 9 },
  (_, i) => `/caseStudiesGallery/construction/constraction_company_case${i + 1}.webp`
);

const restaurantImages = Array.from(
  { length: 5 },
  (_, i) => `/caseStudiesGallery/restaurant/restourant_website_case${i + 1}.webp`
);

const mentalImages = Array.from(
  { length: 6 },
  (_, i) => `/caseStudiesGallery/mental/mental_health_app_case${i + 1}.webp`
);

export const showCaseGalleryData: ShowCaseGalleryItem[] = [
  { id: 1, images: bankImages },          // mobile bank
  { id: 2, images: fitnessImages },       // fitness app
  { id: 3, images: constructionImages },  // construction website
  { id: 4, images: restaurantImages },    // French restaurant
  { id: 5, images: mentalImages }         // mental health app
];