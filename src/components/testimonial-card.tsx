import style from "../styles/testimonial.module.css";
import { Testimonial } from "../types"; // Replace with your actual path

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

export default function TestimonialCard({
  testimonials,
}: TestimonialCardProps) {
  return (
    <div className={style.testimonial}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={style["testimonial-card"]}>
          <img src="/images/quote.png" alt="Double quote" />
          <p>{testimonial.testimonial}</p>
          <img src={testimonial.image_url} alt={testimonial.name} />
          <h4>{testimonial.name}</h4>
          <h6>{testimonial.job_description}</h6>
        </div>
      ))}
    </div>
  );
}
