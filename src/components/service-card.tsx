import style from "../styles/service.module.css";
import { Service } from "../types";

type ServiceProps = Service;

interface ServiceCardProps {
  services: ServiceProps[];
}

export default function ServiceCard({ services }: ServiceCardProps) {
  return (
    <>
      {services.map((service, index) => (
        <div key={index} className={style["service-card"]}>
          <div className={style["service-icon"]}>
            <img src={service.image_url} alt={service.title} />
          </div>
          <div className={style["service-content"]}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more-btn">learn more</button>
          </div>
        </div>
      ))}
    </>
  );
}
