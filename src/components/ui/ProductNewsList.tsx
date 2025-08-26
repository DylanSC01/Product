import type { ProductNew } from "@/types/types";
import { ProductNewCard } from "./ProductNewCard";



interface ProductNewsListProps {
  news: ProductNew[];
}

export const ProductNewsList = ({ news }: ProductNewsListProps) => {
  return (
    <div>
     { news.map((item, index) => <ProductNewCard key={index} product={item} />)}
    </div>
  )
}
