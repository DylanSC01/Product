import { motion } from "framer-motion";
import TestimonialCarrousel from "../ui/TestimonialCarrousel";
import type { Testimonial } from "@/types/types";
import { fadeIn, fadeInUp } from "@/animations";

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
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="heading-2 text-center"
        >
          {title}
        </motion.h2>
        <motion.p
          initial="hidden"
          variants={fadeInUp}
          whileInView="visible"
          className="subtitle-rg mx-auto max-w-[636px] mt-6 text-center mb-17"
        >
          {description}
        </motion.p>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
          <TestimonialCarrousel testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
};
