// src/app/data/ServicePageItems.ts
import { ServicePageItemType } from "../types/ServicePageItemType";

const serviceItems: ServicePageItemType[] = [
  {
    icon: "/services/desktop.svg",
    title: "servicesPage.items.web.title",
    subtitle: "servicesPage.items.web.subtitle",
    popup: {
      title: "servicesPage.items.web.popup.title",
      intro: "servicesPage.items.web.popup.intro",
      description: "servicesPage.items.web.popup.description",
      image: "/servicesPopups/website.webp",
      features: [
        "servicesPage.items.web.popup.features.1",
        "servicesPage.items.web.popup.features.2",
        "servicesPage.items.web.popup.features.3",
        "servicesPage.items.web.popup.features.4"
      ],
      finalNote: "servicesPage.items.web.popup.finalNote",
      actionText: "servicesPage.items.web.popup.actionText"
    }
  },
  {
    icon: "/services/smartphone.svg",
    title: "servicesPage.items.mobile.title",
    subtitle: "servicesPage.items.mobile.subtitle",
    popup: {
      title: "servicesPage.items.mobile.popup.title",
      intro: "servicesPage.items.mobile.popup.intro",
      description: "servicesPage.items.mobile.popup.description",
      image: "/servicesPopups/mobile-app.webp",
      features: [
        "servicesPage.items.mobile.popup.features.1",
        "servicesPage.items.mobile.popup.features.2",
        "servicesPage.items.mobile.popup.features.3",
        "servicesPage.items.mobile.popup.features.4"
      ],
      finalNote: "servicesPage.items.mobile.popup.finalNote",
      actionText: "servicesPage.items.mobile.popup.actionText"
    }
  },
  {
    icon: "/services/robot.svg",
    title: "servicesPage.items.bots.title",
    subtitle: "servicesPage.items.bots.subtitle",
    popup: {
      title: "servicesPage.items.bots.popup.title",
      intro: "servicesPage.items.bots.popup.intro",
      description: "servicesPage.items.bots.popup.description",
      image: "/servicesPopups/telegram-bot.webp",
      features: [
        "servicesPage.items.bots.popup.features.1",
        "servicesPage.items.bots.popup.features.2",
        "servicesPage.items.bots.popup.features.3",
        "servicesPage.items.bots.popup.features.4"
      ],
      finalNote: "servicesPage.items.bots.popup.finalNote",
      actionText: "servicesPage.items.bots.popup.actionText"
    }
  },
  {
    icon: "/services/rocket.svg",
    title: "servicesPage.items.mvp.title",
    subtitle: "servicesPage.items.mvp.subtitle",
    popup: {
      title: "servicesPage.items.mvp.popup.title",
      intro: "servicesPage.items.mvp.popup.intro",
      description: "servicesPage.items.mvp.popup.description",
      image: "/servicesPopups/mvp.webp",
      features: [
        "servicesPage.items.mvp.popup.features.1",
        "servicesPage.items.mvp.popup.features.2",
        "servicesPage.items.mvp.popup.features.3",
        "servicesPage.items.mvp.popup.features.4"
      ],
      finalNote: "servicesPage.items.mvp.popup.finalNote",
      actionText: "servicesPage.items.mvp.popup.actionText"
    }
  },
  {
    icon: "/services/star.svg",
    title: "servicesPage.items.outstaff.title",
    subtitle: "servicesPage.items.outstaff.subtitle",
    popup: {
      title: "servicesPage.items.outstaff.popup.title",
      intro: "servicesPage.items.outstaff.popup.intro",
      description: "servicesPage.items.outstaff.popup.description",
      image: "/servicesPopups/outstaffing.webp",
      features: [
        "servicesPage.items.outstaff.popup.features.1",
        "servicesPage.items.outstaff.popup.features.2",
        "servicesPage.items.outstaff.popup.features.3",
        "servicesPage.items.outstaff.popup.features.4",
        "servicesPage.items.outstaff.popup.features.5"
      ],
      finalNote: "servicesPage.items.outstaff.popup.finalNote",
      actionText: "servicesPage.items.outstaff.popup.actionText"
    }
  }
];

export default serviceItems;
