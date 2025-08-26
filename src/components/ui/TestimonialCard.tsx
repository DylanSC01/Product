import type { Testimonial } from "@/types/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const gradientVariant = index % 2 === 0 ? "even" : "odd";

  return (
    <figure className="relative flex justify-center pb-6 max-w-full sm:w-[392px]">
      <blockquote className="w-full sm:w-[343px] border border-gray-500 bg-gray-800 p-6 rounded-[10px] relative z-10 flex flex-col h-full">
        <header className="flex justify-between">
          <div className="flex gap-2">
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              className="w-10 h-10 rounded-[10px]"
            />
            <figcaption>
              <h3 className="text-md text-white">{testimonial.name}</h3>
              <p className="text-xs mt-2">{testimonial.position}</p>
            </figcaption>
          </div>
          <img
            src="/images/icons/testimonial_icon.svg"
            alt=""
            className="w-[57px] h-[41px]"
          />
        </header>
        <p className="text-rg mt-6">{testimonial.testimonial}</p>
      </blockquote>

      <div className="w-full h-[110px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent rounded-[10px] overflow-hidden">
        <TestimonialGradient variant={gradientVariant} />
      </div>
    </figure>
  );
};

const TestimonialGradient = ({ variant }: { variant: "even" | "odd" }) => {
  const gradients =
    variant === "even"
      ? ["bg-blue-violet", "bg-summer-sky", "bg-green"]
      : ["bg-[#8541EB]", "bg-[#A550E2]", "bg-[#4162EC]"];

  return (
    <>
      {gradients.map((color, idx) => (
        <div
          key={idx}
          className={`h-[119px] w-[119px] ${color} rounded-full blur-[100px] absolute`}
          style={{
            left: idx === 0 ? "1.25rem" : idx === 1 ? "8.5rem" : undefined,
            right: idx === 2 ? 0 : undefined,
            top: "-2rem",
          }}
        />
      ))}
    </>
  );
};
