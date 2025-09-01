import { motion } from "framer-motion";
import { CTACard, type CTASectionProps } from "../ui/CTACard";
import { fadeInUp } from "@/animations";

export const CTASection = (props: CTASectionProps) => {
  return (
    <section>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <CTACard {...props} />
        </motion.div>
      </div>
    </section>
  );
};
