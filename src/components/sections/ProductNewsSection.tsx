import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/LinkButton";
import { NewProductCard } from "@/components/ui/NewProductCard";
import type { ButtonProps, ProductNew } from "@/types/types";
import { fadeIn, fadeInUp, slideInUp, staggerContainer } from "@/animations";

interface ProductNewsSectionProps {
  title: string;
  button: ButtonProps;
  products: ProductNew[];
}

export const ProductNewsSection = ({
  title,
  button,
  products,
}: ProductNewsSectionProps) => {
  return (
    <section className="pb-20 xl:pb-[140px]">
      <div className="container">
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap justify-center xl:justify-between items-center gap-6 mb-[60px]"
        >
          <h2 className="heading-2">{title}</h2>
          <LinkButton href={button.link}>{button.text}</LinkButton>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="flex gap-4 flex-wrap"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <NewProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
