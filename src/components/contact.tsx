import style from "../styles/contact.module.css";
import Form from "./form";

export default function Contact() {
  return (
    <div className={`container ${style.container}`}>
      <div className={`content ${style.content}`}>
        <h3>Contact Us</h3>
        <h2>Request a Free Consultation</h2>
        <p>
          Fill out the form below to receive a free and confidential initial
          consultation.
        </p>
        <Form />
      </div>
    </div>
  );
}
