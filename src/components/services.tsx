import style from "../styles/service.module.css";
import { Service } from "../types";
import ServiceCard from "./service-card";

export default function Services() {
  const services: Service[] = [
    {
      image_url: "/images/service-1.png",
      title: "Personal Injury Law",
      description:
        "Injuries or accidents caused by negligence of others should be compensated for. Personal Injury Laws protect your right to proper compensation and treatment. It is crucial to get experienced lawyers to help you claim the settlement that you deserve.",
    },
    {
      image_url: "/images/service-2.png",
      title: "Criminal Law",
      description:
        "Criminal lawyers are criminal defense attorneys who represent clients who have been accused of a crime. As an accused, you want the best criminal defense lawyer you can get.",
    },
    {
      image_url: "/images/service-3.png",
      title: "Buseness Law",
      description:
        "A business lawyer is a professional who helps small and large businesses with drafting and reviewing contracts, or facing legal issues like lawsuits, regulatory compliance or intellectual property protection issues.",
    },
    {
      image_url: "/images/service-4.png",
      title: "Tax Law",
      description:
        "A tax lawyer is a legal professional who specializes in taxation. They can provide legal advice on a variety of tax-related issues, including income tax, estate tax, gift tax, and property tax.",
    },
    {
      image_url: "/images/service-5.png",
      title: "Family Law",
      description:
        "Family lawyers in South Florida deal with a variety of family law issues. This can include things such as divorce, child custody, and adoption.",
    },
    {
      image_url: "/images/service-6.png",
      title: "Contract Law",
      description:
        "Contracts are legal bindings of agreements between two or more parties. It is important to tune your clauses to what works best for you.",
    },
  ];
  return (
    <div id="services" className="container">
      <div className="content center">
        <div className={`title ${style.title}`}>
          <h3>Our Services</h3>
          <h2>Areas of Expertise</h2>
        </div>
        <div className={style.services}>
          <ServiceCard services={services} />
        </div>
      </div>
    </div>
  );
}
