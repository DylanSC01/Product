import { motion } from "framer-motion";
import { AppCategoryItem } from "@/components/ui/AppCategoryItem";
import { EssentialAppCard } from "@/components/ui/EssentialAppCard";
import { LinkButton } from "@/components/ui/LinkButton";

import type { AppCategory, ButtonProps, EssentialApp } from "@/types/types";
import { fadeIn, fadeInUp, slideInUp, staggerContainer } from "@/animations";

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
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-15"
        >
          <h1 className="heading-2 mb-5">{title}</h1>
          <div className="flex flex-wrap justify-center gap-7">
            {appsCategories.map((category) => (
              <AppCategoryItem key={category.name} category={category} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap gap-8"
        >
          {essentialApps.map((app) => (
            <motion.div key={app.id} variants={fadeIn}>
              <EssentialAppCard key={app.id} {...app} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
        >
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
        </motion.div>
      </div>
    </section>
  );
};
