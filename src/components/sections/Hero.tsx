import { LinkButton } from "@/components/ui/LinkButton";
import type { ButtonProps } from "@/types/types";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

export const Hero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryButton,
  secondaryButton,
}: HeroProps) => {
  return (
    <section className="relative">
      <div className="absolute -left-24 top-[323px] w-[274px] h-[226px] rounded-full bg-blue-violet opacity-100 blur-[250px] z-0" />
      <div className="absolute right-24 top-[519px] w-[190px] h-[156px] rounded-full bg-summer-sky opacity-100 blur-[250px] z-0" />
      <div className="container">
        <h1 className="heading-1 text-center text-white">{title}</h1>
        <p className="subtitle-lg text-center max-w-[799px] mx-auto pt-6 md:pt-8 px-4 md:px-0">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-6 md:pt-8 mb-8 md:mb-12 px-4 md:px-0">
          {primaryButton && (
            <LinkButton
              href={primaryButton.link}
              variant={primaryButton.variant}
            >
              {primaryButton.text}
            </LinkButton>
          )}

          {secondaryButton && (
            <LinkButton
              href={secondaryButton.link}
              variant={secondaryButton.variant}
            >
              {secondaryButton.text}
            </LinkButton>
          )}
        </div>
        <img
          className="max-w-[808px] w-full mx-auto px-4 md:px-0"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </section>
  );
};
