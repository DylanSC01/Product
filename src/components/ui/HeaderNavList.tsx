import type { NavItems } from "@/types/types";

interface HeaderNavList {
  navItems: NavItems[];
}

export const HeaderNavList = ({ navItems }: HeaderNavList) => {
  return (
    <nav className="main-nav">
      <ul className="flex flex-col lg:flex-row justify-center gap-4">
        {navItems.map((nav, index) => (
          <li key={nav.name}>
            <a
              href={nav.href}
              className={`p-2.5 ${
                index === 0 && "text-white"
              } hover:text-white`}
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
