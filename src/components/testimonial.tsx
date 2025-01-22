import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "../styles/testimonial.module.css";
import { Testimonial } from "../types";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      image_url: "/images/John.png",
      name: "John Doe",
      job_description: "Lawyer",
      testimonial:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea",
    },
  ];

  return (
    <div className="container">
      <div className={`content ${style.content}`}>
        <h3>testimonials</h3>
        <h2>what our client says</h2>
        <TestimonialCard testimonials={testimonials} />
      </div>
    </div>
  );
}
