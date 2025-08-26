import { LinkButton } from "@/components/ui/LinkButton";
import { NewProductCard } from "@/components/ui/NewProductCard";
import type { ButtonProps, ProductNew } from "@/types/types";

interface ProductNewsSectionProps {
  title: string;
  button: ButtonProps;
  products: ProductNew[];
}

export const ProductNewsSection = ({title, button, products}: ProductNewsSectionProps) => {
  return (
    <section className="pb-20 xl:pb-[140px]">
      <div className="container">
        <div className="flex flex-wrap justify-center xl:justify-between items-center gap-6 mb-[60px]">
          <h2 className="heading-2">{title}</h2>
          <LinkButton href={button.link}>{button.text}</LinkButton>
        </div>
        <div className="flex gap-4 flex-wrap">
          {products.map((product, index) => (
            <NewProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
