import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/LinkButton";
import { ProductFeatureCard } from "@/components/ui/ProductFeatureCard";

import type { ButtonProps, ProductFeature } from "@/types/types";
import { slideInUp } from "@/animations";

interface ProductFeaturesSectionProps {
  title: string;
  description: string;
  button: ButtonProps;
  imageUrl: string;
  imageAlt: string;
  productsFeatures: ProductFeature[];
}

export const ProductFeaturesSection = ({
  title,
  description,
  button,
  imageUrl,
  imageAlt,
  productsFeatures,
}: ProductFeaturesSectionProps) => {
  return (
    <section>
      <motion.div
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        className="container overflow-hidden relative"
      >
        <div className="absolute left-4 -top-4  blur-[200px]  w-[197px] h-[197px] bg-blue-violet"></div>
        <div className="absolute right-14 bottom-11  blur-[200px]  w-[197px] h-[197px] bg-summer-sky"></div>
        <div className="border border-gray-500 rounded-[10px] bg-gray-800 p-5 lg:px-14 lg:py-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
            <div className="max-w-[454px]">
              <h3 className="heading-3">{title}</h3>
              <p className="text-rg mt-4 mb-10">{description}</p>
              {button && (
                <LinkButton
                  href={button.link}
                  variant={button.variant}
                  className="w-full"
                >
                  {button.text}
                </LinkButton>
              )}
            </div>
            <div className="max-w-[527px]">
              <img src={imageUrl} alt={imageAlt} />
            </div>
          </div>
          <div className="flex flex-wrap gap-7 mt-10">
            {productsFeatures.map((feature, index) => (
              <ProductFeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
