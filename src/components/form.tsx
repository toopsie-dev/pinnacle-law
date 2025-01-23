import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Your email are successfully sent!",
      icon: "success",
    });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_15uoy1o",
          "template_m23mxa3",
          form.current,
          "wE6bJs9oU0nBZsIyj" // Use the public key directly
        )
        .then(
          () => {
            form.current?.reset();
            showSwal();
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Failed to send the email. Please try again.");
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="phone" placeholder="Phone" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Message" rows={4} required />
      <button type="submit">Submit</button>
    </form>
  );
}
