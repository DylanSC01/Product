import { FeatureCard } from "@/components/ui/FeatureCard";
import type { Feature } from "@/types/types";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Feature[]
}

export const FeatureSection = ({ title, description, features }: FeatureSectionProps) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="heading-2 max-w-[800px]">
            {title}
          </h2>
          <p className="max-w-[380px] subtitle-rg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
