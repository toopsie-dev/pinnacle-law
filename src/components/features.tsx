import { useState } from "react";
import style from "../styles/feature.module.css";
import { Feature } from "../types";
import FeatureCard from "./feature-card";

type FeatureProp = Feature;

export default function Features() {
  const [features] = useState<FeatureProp[]>([
    {
      image_url: "/images/feature-1.png",
      title: "Zero Fees Unless We Win",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      image_url: "/images/feature-2.png",
      title: "Trial Attorneys",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      image_url: "/images/feature-3.png",
      title: "Availability",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      image_url: "/images/feature-4.png",
      title: "Prosecutor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
  ]);

  return (
    <div className={`container ${style.container}`}>
      <div className={`content ${style.content}`}>
        <FeatureCard features={features} />
      </div>
    </div>
  );
}
