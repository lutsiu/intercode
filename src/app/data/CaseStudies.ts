// src/app/data/CaseStudies.ts
import { CaseStudyPageCardType, CaseStudyType } from "../types/CaesStudyType";
import { ShowCaseGalleryItem } from "../types/ShowCaseGalleryType";

const caseStudies: CaseStudyType[] = [
  { id: 1, image: "/caseStudies/docgo.webp",     title: "homepage.cases.items.docgo.title",     subtitle: "homepage.cases.items.docgo.subtitle" },
  { id: 2, image: "/caseStudies/learnup.webp",   title: "homepage.cases.items.learnup.title",   subtitle: "homepage.cases.items.learnup.subtitle" },
  { id: 3, image: "/caseStudies/eatflow.webp",   title: "homepage.cases.items.eatflow.title",   subtitle: "homepage.cases.items.eatflow.subtitle" },
  { id: 4, image: "/caseStudies/lushglow.webp",  title: "homepage.cases.items.lushglow.title",  subtitle: "homepage.cases.items.lushglow.subtitle" },
  { id: 5, image: "/caseStudies/bricknkey.webp", title: "homepage.cases.items.bricknkey.title", subtitle: "homepage.cases.items.bricknkey.subtitle" }
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

const IMG = "/cat.png";
export const showCaseGalleryData: ShowCaseGalleryItem[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  images: [IMG, IMG, IMG, IMG]
}));
  