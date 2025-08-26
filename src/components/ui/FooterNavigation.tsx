import clsx from "clsx";
import type { NavigationFooter } from "@/types/types";

interface FooterNavigationProps {
  section: NavigationFooter;
}

const textAlignClasses = "text-center xl:text-left";

export const FooterNavigation = ({ section }: FooterNavigationProps) => (
  <nav>
    <h3 className={`${textAlignClasses} text-white mb-4`}>
      {section.title}
    </h3>
    <ul
      className={clsx({
        "xl:columns-2": section.links.length >= 7,
        "columns-1": section.links.length < 7,
      })}
    >
      {section.links.map((link) => (
        <li
          key={link.label}
          className={`${textAlignClasses} text-white mb-4`}
        >
          <a
            href={link.href}
            className="text-[16px] leading-[16px] text-gray-300 hover:text-white transition"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
