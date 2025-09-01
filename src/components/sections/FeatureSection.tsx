import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import type { Feature } from "@/types/types";
import { fadeInUp, slideInUp, staggerContainer } from "@/animations";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

export const FeatureSection = ({
  title,
  description,
  features,
}: FeatureSectionProps) => {
  return (
    <section>
      <div className="container">
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center"
        >
          <h2 className="heading-2 max-w-[800px]">{title}</h2>
          <p className="max-w-[380px] subtitle-rg">{description}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
