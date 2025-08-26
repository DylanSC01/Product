import { useState } from "react";
import { Menu } from "lucide-react";

import { LinkButton } from "@/components/ui/LinkButton";
import { HeaderNavList } from "@/components/ui/HeaderNavList";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { NAV_ITEMS } from "@/data/data";
import { Logo } from "../ui/Logo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);
  const handleOpenMenu = () => setIsOpen(true);

  return (
    <header className="border-b border-gray-600 pb-6 pt-14">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Logo />
          </div>
          <div className="hidden lg:block">
            <HeaderNavList navItems={NAV_ITEMS} />
          </div>
          <div className="hidden lg:block">
            <LinkButton href="#">Get a demo</LinkButton>
          </div>

          <button
            className="text-white lg:hidden"
            aria-label="Toggle navigation"
            onClick={handleOpenMenu}
          >
            <Menu className="h-9 w-9" />
          </button>

          <MobileMenu
            isOpen={isOpen}
            onClose={handleCloseMenu}
            navItems={NAV_ITEMS}
          />
        </div>
      </div>
    </header>
  );
};
