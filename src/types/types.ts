export interface SocialLink {
  name: string;
  url: string;
  image: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface NavigationFooter {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  image: string;
}

export interface NavigationFooter {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface ProductNew {
  image: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  avatar: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface AppCategory {
  name: string;
  icon: string;
}

export interface EssentialApp {
  id: string;
  title: string;
  description: string;
  variant?: "default" | "large" | "small";
  image: string;
  alt: string;
  link?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ButtonProps {
  text: string;
  link: string;
  variant?: ButtonVariant;
}

export type ButtonVariant = "primary" | "outline" | "secondary";

export interface NavItems {
  name: string;
  href: string;
}
