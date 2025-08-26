import type { SocialLink } from "@/types/types";

interface SocialIconsProps {
  links: SocialLink[];
}

export const SocialIcons = ({ links }: SocialIconsProps) => (
  <div className="flex gap-4">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.url}
        className="text-gray-400 hover:text-white transition"
        aria-label={link.name}
      >
        <img src={link.image} alt={link.name} />
      </a>
    ))}
  </div>
);
