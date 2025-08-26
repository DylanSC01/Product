import { LinkButton } from "@/components/ui/LinkButton";
import type { ButtonProps } from "@/types/types";

export interface CTASectionProps {
  icon: string;
  title: string;
  description: string;
  button: ButtonProps;
}

export const CTACard = ({
  icon,
  title,
  description,
  button
}: CTASectionProps) => {
  return (
    <div
      className="
        max-w-[1016px] mx-auto 
        border border-[#282D45] 
        bg-[url(/images/bg_cta.webp)] 
        rounded-[10px] 
        py-10 sm:py-16 lg:py-[90px] 
        px-4 sm:px-8 
        text-center 
        bg-cover bg-center
      "
    >
      <div className="max-w-[485px] mx-auto">
        <img
          src={icon}
          alt={title}
          className="mb-6 sm:mb-8 mx-auto w-12 sm:w-16 lg:w-auto"
        />
        <h2 className="heading-4 text-white text-lg sm:text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base">{description}</p>
        <LinkButton
          href={button.link}
          className="!bg-[#5865F2] mt-6 sm:mt-8 w-full sm:w-auto"
        >
          {button.text}
        </LinkButton>
      </div>
    </div>
  );
};
