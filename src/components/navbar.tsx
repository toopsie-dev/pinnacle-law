/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavContext } from "../contexts/navigation";
import { useThemeContext } from "../contexts/theme";
import style from "../styles/navbar.module.css";

export default function Navbar() {
  const { theme, switchTheme } = useThemeContext();
  const { isSticky, isMobile, handleScroll, handleMenu } = useNavContext();

  const isWindowScroll = () => {
    handleScroll(window.pageYOffset > 0 ? true : false);
  };

  useEffect(() => {
    const _isMobile = window.innerWidth < 960 ? true : false;
    handleMenu(_isMobile);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("scroll", isWindowScroll);
    return () => {
      window.removeEventListener("scroll", isWindowScroll);
    };
  }, [isSticky]);

  return (
    <nav className={`${style.container} ${isSticky ? style.sticky : ""}`}>
      <div className={style.content}>
        <div className={style["logo-container"]}>
          <img
            className={isSticky ? style["shrink-logo"] : ""}
            src="/images/logo.png"
            alt="Pinnacle law logo"
          />
        </div>
        <div className={style["navigation-container"]}>
          {isMobile && <RxHamburgerMenu />}
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonial">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={() => switchTheme(theme === "dark" ? false : true)}>
              {theme === "dark" ? (
                <ImSun size={40} color="#ffffff" />
              ) : (
                <FiMoon size={40} color="#ffffff" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
