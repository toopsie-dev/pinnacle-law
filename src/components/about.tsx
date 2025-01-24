import style from "../styles/about.module.css";

export default function About() {
  const redirectContactSection = () => {
    window.location.href = "#contact";
  };

  return (
    <div id="about" className={`container ${style.about}`}>
      <div className="content">
        <div className={style.title}>
          <h3>about us</h3>
          <h2>who we are</h2>
          <p>
            The Pinnacle Law Group aims to be the preeminent full service law
            firm in south Florida. Pinnacle aims to serve its clients’ diverse
            needs, with practice groups in litigation, real estate, criminal
            law, entertainment law, and corporate law. Pinnacle serves all of
            Florida with a focus on Palm Beach, Broward, and Miami-Dade
            counties. Pinnacle’s attorneys have experience working for The White
            House, Securities and Exchange Commission, United States Attorney’s
            Office, State Attorney’s Office, and in the private sector.
            Pinnacle’s attorneys have successfully represented clients across
            the country and offer representation in both state and federal
            courts across the country.
          </p>
          <button onClick={redirectContactSection} className="btn">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
}
