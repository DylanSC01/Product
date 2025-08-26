import { X } from "lucide-react";
import clsx from "clsx";

import { HeaderNavList } from "@/components/ui/HeaderNavList";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";

import type { NavItems } from "@/types/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItems[];
}

export const MobileMenu = ({ isOpen, onClose, navItems }: Props) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-64 bg-black shadow-lg transform transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b-2 border-solid border-gray-200">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="p-6">
          <HeaderNavList navItems={navItems} />
          <LinkButton className="mt-5 w-full" href="#">
            Book a Call
          </LinkButton>
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  );
};
