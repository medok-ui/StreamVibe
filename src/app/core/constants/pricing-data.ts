import { IPricingFeature } from '../../shared/interfaces/pricing-feature.interface';

export const PRICING_DATA: IPricingFeature[] = [
  {
    featureName: 'Price',
    basic: 'USD. 9.99/Month',
    standard: 'USD. 12.99/Month',
    premium: 'USD. 14.99/Month',
  },
  {
    featureName: 'Content',
    basic: 'Access to a wide selection of movies and shows, including some new releases.',
    standard:
      'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
    premium:
      'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
  },
  {
    featureName: 'Devices',
    basic: 'Watch on one device simultaneously',
    standard: 'Watch on Two device simultaneously',
    premium: 'Watch on Four device simultaneously',
  },
  {
    featureName: 'Free Trail',
    basic: '7 Days',
    standard: '7 Days',
    premium: '7 Days',
  },
  {
    featureName: 'Cancel Anytime',
    basic: 'Yes',
    standard: 'Yes',
    premium: 'Yes',
  },
  {
    featureName: 'HDR',
    basic: 'No',
    standard: 'Yes',
    premium: 'Yes',
  },
  {
    featureName: 'Dolby Atmos',
    basic: 'No',
    standard: 'Yes',
    premium: 'Yes',
  },
  {
    featureName: 'Ad - Free',
    basic: 'No',
    standard: 'Yes',
    premium: 'Yes',
  },
  {
    featureName: 'Offline Viewing',
    basic: 'No',
    standard: 'Yes, for select titles.',
    premium: 'Yes, for all titles.',
  },
  {
    featureName: 'Family Sharing',
    basic: 'No',
    standard: 'Yes, up to 5 family members.',
    premium: 'Yes, up to 6 family members.',
  },
];
