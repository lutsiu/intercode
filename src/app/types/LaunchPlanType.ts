export interface LaunchPlanType {
  title: string;
  price: number;
  annualPrice?: number;
  description: string;
  features: string[];
  popular: boolean;
  period: 'monthly' | 'annual';
}
