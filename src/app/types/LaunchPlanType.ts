export interface LaunchPlanType {
  title: string;
  price: number;
  annualPrice?: number;
  description: string;
  features: string[];
  featuresMarginTop: number;
  popular: boolean;
  period: 'monthly' | 'annual';
}
