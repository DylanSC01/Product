
interface ProductFeatureCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const ProductFeatureCard = ({ title, description, image, alt }: ProductFeatureCardProps) => {
  return (
    <div className="bg-black border border-gray-500 rounded-[10px] p-8 pb-0 max-w-[540px]">
        <h6 className="heading-6 pb-2">{title}</h6>
        <p className="text-rg pb-8">{description}</p>
        <img src={image} alt={alt} />
    </div>
  )
}
