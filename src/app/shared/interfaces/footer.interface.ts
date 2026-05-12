export interface IFooterLink {
  label: string;
  routerLink: string;
}

export interface IFooterColumn {
  title: string;
  links: IFooterLink[];
}

export interface ISocialLink {
  icon: string;
  url: string;
}
