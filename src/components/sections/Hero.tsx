import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/LinkButton";
import type { ButtonProps } from "@/types/types";
import { fadeIn, staggerContainer, slideInUp, fadeInUp } from "@/animations";

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
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <div className="absolute -left-24 top-[323px] w-[274px] h-[226px] rounded-full bg-blue-violet opacity-100 blur-[250px] z-0" />
      <div className="absolute right-24 top-[519px] w-[190px] h-[156px] rounded-full bg-summer-sky opacity-100 blur-[250px] z-0" />
      <div className="container">
        <motion.h1
          variants={fadeIn}
          className="heading-1 text-center text-white"
        >
          {title}
        </motion.h1>
        <motion.p variants={fadeInUp} className="subtitle-lg text-center max-w-[799px] mx-auto pt-6 md:pt-8 px-4 md:px-0">
          {subtitle}
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-6 md:pt-8 mb-8 md:mb-12 px-4 md:px-0">
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
        <motion.img
          variants={slideInUp}
          className="max-w-[808px] w-full mx-auto px-4 md:px-0"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </motion.section>
  );
};
