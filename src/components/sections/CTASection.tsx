import { CTACard, type CTASectionProps } from "../ui/CTACard";

export const CTASection = (props: CTASectionProps) => {
  return (
    <section>
      <div className="container">
        <CTACard {...props} />
      </div>
    </section>
  );
};
