/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "../styles/testimonial.module.css";
import { Testimonial } from "../types"; // Replace with your actual path

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

export default function TestimonialCard({
  testimonials,
}: TestimonialCardProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.testimonial}>
      <Slider {...settings}>
        {testimonials.map((prop, index) => (
          <div key={index} className={style["testimonial-card"]}>
            <img src="/images/quote.png" alt="Double quote" />
            <p>{prop.testimonial}</p>
            <img src={prop.image_url} alt={prop.name} />
            <h4>{prop.name}</h4>
            <h6>{prop.job_description}</h6>
          </div>
        ))}
      </Slider>
    </div>
  );
}
