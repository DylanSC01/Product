import type { Feature } from "@/types/types";

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  console.log(feature);
  return (
    <div className="rounded-lg border border-gray-500 p-6 bg-gray-800">
      <img
        src={feature.icon}
        alt={`${feature.title} icon`}
        className="w-11 h-11 mb-7"
      />
      <h3 className="heading-6 mb-3">{feature.title}</h3>
      <p className="text-rg">{feature.description}</p>
    </div>
  );
};
