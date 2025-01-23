import style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={`container ${style.container}`}>
      <div className={`content ${style.content}`}>
        <div>
          <img src="/images/logo.png" alt="" />
          <p>
            The Pinnacle Law Group aims to be the preeminent full service law
            firm in south Florida.
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com/lilismelvin07" target="_blank">
                <img src="/images/fb-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yaksu07/" target="_blank">
                <img src="/images/instagram-icon.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Dade</h3>
          <h5>305.760.9555</h5>
          <h3>Broward</h3>
          <h5>305.760.9555</h5>
        </div>
        <div>
          <h3>Miami Dade County</h3>
          <ul>
            <li>
              <a
                href="https://maps.app.goo.gl/SB5wDSLqhzneFKAdA"
                target="_blank"
              >
                4000 NW 36th Ave, #102 Miami, FL 33142
              </a>
            </li>
            <li>
              <span>Tel:</span>
              <a href="tel:305 - 760 - 9555"> 305 - 760 - 9555</a>
            </li>
            <li>
              <span>Email:</span>
              <a href="mailto:info@thepicnnaclelaw.com">
                {" "}
                info@thepicnnaclelaw.com
              </a>
            </li>
          </ul>
          <button className="learn-more-btn">get directions</button>
        </div>
        <div>
          <h3>Miami Dade County</h3>
          <ul>
            <li>
              <a
                href="https://maps.app.goo.gl/SB5wDSLqhzneFKAdA"
                target="_blank"
              >
                4000 NW 36th Ave, #102 Miami, FL 33142
              </a>
            </li>
            <li>
              <span>Tel:</span>
              <a href="tel:305 - 760 - 9555"> 305 - 760 - 9555</a>
            </li>
            <li>
              <span>Email:</span>
              <a href="mailto:info@thepicnnaclelaw.com">
                {" "}
                info@thepicnnaclelaw.com
              </a>
            </li>
          </ul>
          <button className="learn-more-btn">get directions</button>
        </div>
      </div>
    </div>
  );
}
