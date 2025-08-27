import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Testimonial } from "@/types/types";

import { TestimonialCard } from "./TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SWIPER_BREAKPOINTS } from "@/constanst";

import "swiper/css";
import "swiper/css/navigation";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}


const TestimonialCarrousel = ({ testimonials }: TestimonialCarouselProps) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-btn-prev",
          nextEl: ".swiper-btn-next",
        }}
        breakpoints={SWIPER_BREAKPOINTS}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-11">
        <button className="swiper-btn-prev btn-swiper" aria-label="Previous slide">
          <ArrowLeft className="text-white" />
        </button>
        <button className="swiper-btn-next btn-swiper" aria-label="Next slide">
          <ArrowRight className="text-white" />
        </button>
      </div>
    </>
  );
};

export default TestimonialCarrousel;
