import type { AppCategory } from "@/types/types";

interface AppCategoryItemProps {
  category: AppCategory;
}

export const AppCategoryItem = ({ category }: AppCategoryItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={category.icon}
        alt={`${category.name} icon`}
        className="h-4 lg:h-[30px] w-auto"
      />
      <p className="heading-3 text-white">{category.name}</p>
    </div>
  );
}; 