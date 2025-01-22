import style from "../styles/feature.module.css";
import { Feature } from "../types";

type FeatureProp = Feature;

interface FeatureCardProps {
  features: FeatureProp[];
}

export default function FeatureCard({ features }: FeatureCardProps) {
  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className={style["feature-card"]}>
          <img src={feature.image_url} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </>
  );
}
