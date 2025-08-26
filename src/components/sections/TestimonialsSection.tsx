import TestimonialCarrousel from "../ui/TestimonialCarrousel";
import type { Testimonial } from "@/types/types";

interface TestimonialSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({
  title,
  description,
  testimonials,
}: TestimonialSectionProps) => {
  return (
    <section>
      <div className="container relative">
        <h2 className="heading-2 text-center">{title}</h2>
        <p className="subtitle-rg mx-auto max-w-[636px] mt-6 text-center mb-17">
          {description}
        </p>

        <TestimonialCarrousel testimonials={testimonials} />
      </div>
    </section>
  );
};
