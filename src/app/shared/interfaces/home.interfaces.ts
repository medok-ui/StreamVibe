export interface ICategoryCard {
  name: string;
  image: string;
}

export interface IDeviceInfo {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

export interface IFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface IPricingPlan {
  id: string;
  title: string;
  description: string;
  price: number;
}
