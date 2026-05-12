import { IFooterColumn, ISocialLink } from '../../shared/interfaces/footer.interface';

export const FOOTER_COLUMNS: IFooterColumn[] = [
  {
    title: 'Home',
    links: [
      { label: 'Categories', routerLink: '/categories' },
      { label: 'Devices', routerLink: '/devices' },
      { label: 'Pricing', routerLink: '/pricing' },
      { label: 'FAQ', routerLink: '/faq' },
    ],
  },
  {
    title: 'Movies',
    links: [
      { label: 'Genres', routerLink: '/movies/genres' },
      { label: 'Trending', routerLink: '/movies/trending' },
      { label: 'New Release', routerLink: '/movies/new' },
      { label: 'Popular', routerLink: '/movies/popular' },
    ],
  },
  {
    title: 'Shows',
    links: [
      { label: 'Genres', routerLink: '/shows/genres' },
      { label: 'Trending', routerLink: '/shows/trending' },
      { label: 'New Release', routerLink: '/shows/new' },
      { label: 'Popular', routerLink: '/shows/popular' },
    ],
  },
  {
    title: 'Support',
    links: [{ label: 'Contact Us', routerLink: '/contact' }],
  },
  {
    title: 'Subscription',
    links: [
      { label: 'Plans', routerLink: '/subscriptions/plans' },
      { label: 'Features', routerLink: '/subscriptions/features' },
    ],
  },
];

export const SOCIAL_LINKS: ISocialLink[] = [
  { icon: '/assets/svg/social/facebook.svg', url: 'https://facebook.com/...' },
  { icon: '/assets/svg/social/twitter.svg', url: 'https://twitter.com/...' },
  { icon: '/assets/svg/social/linkedin.svg', url: 'https://linkedin.com/...' },
];
