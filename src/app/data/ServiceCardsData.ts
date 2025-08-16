import { ServiceCardType } from "../types/ServiceCardType";

export const servicesTitleKey = "homepage.services.title";
export const servicesCtaKey = "homepage.services.cta";

const serviceCards: ServiceCardType[] = [
  {
    icon: "/services/star.svg",
    title: "homepage.services.cards.outstaffing.title",
    duration: "homepage.services.cards.outstaffing.duration"
  },
  {
    icon: "/services/desktop.svg",
    title: "homepage.services.cards.web.title",
    duration: "homepage.services.cards.web.duration"
  },
  {
    icon: "/services/rocket.svg",
    title: "homepage.services.cards.mvp.title",
    duration: "homepage.services.cards.mvp.duration"
  },
  {
    icon: "/services/smartphone.svg",
    title: "homepage.services.cards.mobile.title",
    duration: "homepage.services.cards.mobile.duration"
  },
  {
    icon: "/services/robot.svg",
    title: "homepage.services.cards.bots.title",
    duration: "homepage.services.cards.bots.duration"
  }
];

export default serviceCards;
