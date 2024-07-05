export const NavSectionAsComponent = ["div", "section"] as const;

export interface NavSectionSocialMediaUrls {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface NavSectionElement {
  label: string;
  target: string;
}

export type NavSectionAsComponent = (typeof NavSectionAsComponent)[number];
