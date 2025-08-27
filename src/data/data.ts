import type {
  Feature,
  AppCategory,
  EssentialApp,
  ProductFeature,
  Testimonial,
  ProductNew,
  NavigationFooter,
  SocialLink,
} from "@/types/types";

export const SOCIAL_MEDIA_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    image: "/images/icons/facebook.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    image: "/images/icons/X.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    image: "/images/icons/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    image: "/images/icons/instagram.svg",
  },
];

export const NAVIGATION_FOOTER: NavigationFooter[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Post", href: "/blog-post" },
      { label: "Pricing", href: "/pricing" },
      { label: "Pricing single", href: "/pricing-single" },
      { label: "Features", href: "/features" },
      { label: "Careers", href: "/careers" },
      { label: "Careers single", href: "/careers-single" },
      { label: "Request a demo", href: "/request-demo" },
      { label: "Login", href: "/login" },
      { label: "Sign up", href: "/signup" },
    ],
  },
  {
    title: "Utility Pages",
    links: [
      { label: "Style guide", href: "/style-guide" },
      { label: "Password protected", href: "/password" },
      { label: "Licenses", href: "/licenses" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

export const PRODUCT_NEWS: ProductNew[] = [
  {
    image: "/images/product_news1.webp",
    alt: "",
    title: "Product Mail is taking on Gmail by betting on privacy",
    description:
      "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    date: "2023-10-01",
    link: "#",
  },
  {
    image: "/images/product_news2.webp",
    alt: "",
    title: "Wants You To Sign Out Of Google Workspace Forever",
    description:
      "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    date: "2023-10-01",
    link: "#",
  },
  {
    image: "/images/product_news3.webp",
    alt: "",
    title: "The Best Email Encryption Services for 2023",
    description:
      "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    date: "2023-10-01",
    link: "#",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Cameron Williamson",
    position: "Web Designer",
    testimonial:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Esther Howard",
    position: "Web Developer",
    testimonial:
      "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus",
    avatar: "/images/avatar2.webp",
  },
  {
    name: "Jenny Wilson",
    position: "UI/UX Designer",
    testimonial:
      "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.",
    avatar: "/images/avatar3.webp",
  },
  {
    name: "Cameron Williamson",
    position: "Web Designer",
    testimonial:
      "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Esther Howard",
    position: "Web Developer",
    testimonial:
      "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus",
    avatar: "/images/avatar2.webp",
  },
];

export const PRODUCT_FEATURES_SECTION: ProductFeature[] = [
  {
    title: "Product Mail",
    description:
      "Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.",
    image: "/images/product_mail.webp",
    alt: "Product Mail UI preview",
  },
  {
    title: "Product UI",
    description:
      "Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.",
    image: "/images/product_ui.webp",
    alt: "Product UI preview",
  },
];

export const NAV_ITEMS = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: "/images/icons/user_information.svg",
    title: "User information",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/images/icons/deal_tracking.svg",
    title: "Deal tracking",
    description:
      "Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/images/icons/pipeline.svg",
    title: "Pipeline management",
    description:
      "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/images/icons/reporting.svg",
    title: "Reporting dashboard",
    description:
      "Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/images/icons/meeting.svg",
    title: "Meeting scheduling",
    description:
      "Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/images/icons/email.svg",
    title: "Email tracking",
    description:
      "Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
];

export const APP_CATEGORIES: AppCategory[] = [
  {
    name: "Email,",
    icon: "/images/icons/email_purple.svg",
  },
  {
    name: "Events,",
    icon: "/images/icons/calendar.svg",
  },
  {
    name: "Files,",
    icon: "/images/icons/files.svg",
  },
  {
    name: "Documents",
    icon: "/images/icons/document.svg",
  },
];

export const ESSENTIAL_APPS: EssentialApp[] = [
  {
    id: "email-encryption",
    title: "End-to-end encrypted inbox and messages",
    description:
      "Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.",
    variant: "large",
    image: "/images/invitation.webp",
    link: "#",
    alt: "email encryption",
  },
  {
    id: "mobile-apps",
    title: "Mobile applications",
    description:
      "Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue",
    image: "/images/mobile_applications.webp",
    variant: "small",
    alt: "mobile apps",
  },
  {
    id: "file-upload",
    title: "Upload, share, and preview any file",
    description:
      "Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.",
    image: "/images/file_management.webp",
    variant: "default",
    alt: "file upload",
  },
];
