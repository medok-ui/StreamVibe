import { IPricingPlan } from '../../shared/interfaces/home.interfaces';

export const PRICING_PLANS: IPricingPlan[] = [
  {
    id: 'basic',
    title: 'Basic Plan',
    description:
      'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    price: 9.99,
  },
  {
    id: 'standard',
    title: 'Standard Plan',
    description:
      'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
    price: 12.99,
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    description:
      'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
    price: 14.99,
  },
];
