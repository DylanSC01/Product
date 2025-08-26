import type { EssentialApp } from "@/types/types";
import { LinkButton } from "@/components/ui/LinkButton";
import clsx from "clsx";

interface EssentialAppCardProps extends EssentialApp {}

const variantWrapper = {
  small: "w-full xl:max-w-[496px] p-[25px] lg:px-[55px] lg:py-[50px]",
  default: "w-full xl:max-w-[690px] p-[25px] pb-0 lg:pt-[50px] lg:px-[55px]",
  large: "w-full p-[25px] lg:p-[70px]",
};

const variantLayout = {
  small: "flex-col-reverse gap-9",
  default: "flex-col gap-7",
  large: "flex-col-reverse lg:flex-row justify-between gap-12",
};

const variantImage = {
  small: "w-full max-w-[271px]",
  default: "w-full",
  large: "w-full max-w-[515px]",
};

const variantTopDecoration = {
  small: "right-[27px] top-8  blur-[120px]  w-[118px] h-[118px] bg-green",
  default: "right-[41px] top-[45px]  blur-[120px]  w-[130px] h-[130px] bg-blue-violet",
  large: "-left-[37px] -bottom-[98px]  blur-[500px] w-[211px] h-[263px] blur-[500px] bg-blue-violet",
}

const varianBottomDecoration = {
  small: "left-[35px] bottom-3  blur-[120px]  w-[118px] h-[118px] bg-blue-violet",
  default: "left-[26px] bottom-[29px]  blur-[180px]  w-[166px] h-[166px] bg-neon-blue",
  large: "w-[211px] h-[263px] right-[25px] -top-[28px]  bg-summer-sky blur-[500px] ",
}

export const EssentialAppCard = ({
  title,
  description,
  image,
  alt,
  variant = "default",
  link,
}: EssentialAppCardProps) => {
  return (
    <div
      className={clsx(
        "bg-gray-800 border border-gray-500 rounded-xl relative overflow-hidden",
        variantWrapper[variant],

      )}
    >
      <div className={clsx("block absolute", variantTopDecoration[variant])} />
      <div className={clsx("block absolute ", varianBottomDecoration[variant])} />

      <div className={clsx("flex items-center", variantLayout[variant])}>
        <div className={clsx(" w-full text-white", variant === "large" && "max-w-[490px]")}>
          <h5 className="heading-5">{title}</h5>
          <p className="text-rg mt-4">{description}</p>

          {link && (
            <LinkButton href={link} variant="outline" className="mt-9">
              Learn More
            </LinkButton>
          )}
        </div>

        {image && (
          <div>
            <img
              src={image}
              alt={alt}
              className={clsx("w-full", variantImage[variant])}
            />
          </div>
        )}
      </div>
    </div>
  );
};
