import style from "../styles/banner.module.css";

export default function Banner() {
  const redirectContactSection = () => {
    window.location.href = "#contact";
  };

  return (
    <div id="home" className={`container ${style.container}`}>
      <div className="content">
        <h1>
          get <span className="brand-color">started</span>
        </h1>
        <p>
          Don't wait! Contact us for free a consultation. The sooner you have an
          attorney fight for you, the better your chances of getting the proper
          care and results your are entitle to.
        </p>
        <button onClick={redirectContactSection} className="btn">
          contact us
        </button>
      </div>
    </div>
  );
}
