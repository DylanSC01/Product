import type { ProductNew } from "@/types/types";
import { LinkButton } from "./LinkButton";
import { MoveRight } from "lucide-react";

interface NewProductCardProps {
  product: ProductNew;
}

export const NewProductCard = ({ product }: NewProductCardProps) => {
  const { image, alt, title, description, date, link } = product;

  return (
    <div className="w-full md:max-w-[392px] flex flex-col h-full justify-between border border-gray-500 rounded-[10px] p-6 bg-gray-800">
      <div>
        <img src={image} alt={alt} className="rounded-[10px]"/>
        <h3 className="heading-6 mt-5">{title}</h3>
        <p className="text-sm mt-4">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-5 border-t border-gray-500 pt-5">
        <p className="text-sm">{date}</p>
        <LinkButton href={link} variant="secondary">
          Read more <MoveRight />
        </LinkButton>
      </div>
    </div>
  );
};
