import { AppCategoryItem } from "@/components/ui/AppCategoryItem";
import { EssentialAppCard } from "@/components/ui/EssentialAppCard";
import { LinkButton } from "@/components/ui/LinkButton";

import type { AppCategory, ButtonProps, EssentialApp } from "@/types/types";

interface EssentialAppsSectionProps {
  title: string;
  appsCategories: AppCategory[];
  essentialApps: EssentialApp[];
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

export const EssentialAppsSection = ({
  title,
  appsCategories,
  essentialApps,
  primaryButton,
  secondaryButton,
}: EssentialAppsSectionProps) => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-15">
          <h1 className="heading-2 mb-5">{title}</h1>
          <div className="flex flex-wrap justify-center gap-7">
            {appsCategories.map((category) => (
              <AppCategoryItem key={category.name} category={category} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {essentialApps.map((app) => (
            <EssentialAppCard key={app.id} {...app} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
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
      </div>
    </section>
  );
};
