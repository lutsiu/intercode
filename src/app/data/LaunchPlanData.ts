import { LaunchPlanType } from "../types/LaunchPlanType";

export const launchPlans: LaunchPlanType[] = [
  // MONTHLY
  {
    title: "rentIt.pricing.tiers.basic.title",
    price: 900,
    description: "rentIt.pricing.tiers.basic.desc",
    features: [
      "rentIt.pricing.tiers.basic.features.1",
      "rentIt.pricing.tiers.basic.features.2",
      "rentIt.pricing.tiers.basic.features.3",
    ],
    popular: false,
    period: "monthly",
    featuresMarginTop: 6.9,
  },
  {
    title: "rentIt.pricing.tiers.standard.title",
    price: 1500,
    description: "rentIt.pricing.tiers.standard.desc",
    features: [
      "rentIt.pricing.tiers.standard.features.1",
      "rentIt.pricing.tiers.standard.features.2",
      "rentIt.pricing.tiers.standard.features.3",
      "rentIt.pricing.tiers.standard.features.4",
    ],
    popular: true,
    period: "monthly",
    featuresMarginTop: 4.8,
  },
  {
    title: "rentIt.pricing.tiers.flex.title",
    price: 2400,
    description: "rentIt.pricing.tiers.flex.desc",
    features: [
      "rentIt.pricing.tiers.flex.features.1",
      "rentIt.pricing.tiers.flex.features.2",
      "rentIt.pricing.tiers.flex.features.3",
      "rentIt.pricing.tiers.flex.features.4",
    ],
    popular: false,
    period: "monthly",
    featuresMarginTop: 4.8,
  },

  // ANNUAL
  {
    title: "rentIt.pricing.tiers.basic.title",
    price: 750,
    annualPrice: 9000,
    description: "rentIt.pricing.tiersAnnual.basic.desc",
    features: [
      "rentIt.pricing.tiersAnnual.basic.features.1",
      "rentIt.pricing.tiersAnnual.basic.features.2",
      "rentIt.pricing.tiersAnnual.basic.features.3",
      "rentIt.pricing.tiersAnnual.basic.features.4",
      "rentIt.pricing.tiersAnnual.basic.features.5",
    ],
    popular: false,
    period: "annual",
    featuresMarginTop: 2.7,
  },
  {
    title: "rentIt.pricing.tiers.standard.title",
    price: 1250,
    annualPrice: 15000,
    description: "rentIt.pricing.tiersAnnual.standard.desc",
    features: [
      "rentIt.pricing.tiersAnnual.standard.features.1",
      "rentIt.pricing.tiersAnnual.standard.features.2",
      "rentIt.pricing.tiersAnnual.standard.features.3",
      "rentIt.pricing.tiersAnnual.standard.features.4",
    ],
    popular: true,
    period: "annual",
    featuresMarginTop: 1.35,
  },
  {
    title: "rentIt.pricing.tiers.flex.title",
    price: 1990,
    annualPrice: 23880,
    description: "rentIt.pricing.tiersAnnual.flex.desc",
    features: [
      "rentIt.pricing.tiersAnnual.flex.features.1",
      "rentIt.pricing.tiersAnnual.flex.features.2",
      "rentIt.pricing.tiersAnnual.flex.features.3",
      "rentIt.pricing.tiersAnnual.flex.features.4",
      "rentIt.pricing.tiersAnnual.flex.features.5",
    ],
    popular: false,
    period: "annual",
    featuresMarginTop: 2.2,
  },
];
