/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavContext } from "../contexts/navigation";
import { useThemeContext } from "../contexts/theme";
import style from "../styles/navbar.module.css";

export default function Navbar() {
  const { theme, switchTheme } = useThemeContext();
  const {
    isSticky,
    showSidebar,
    isMobile,
    handleScroll,
    handleMenu,
    handleShowSidebar,
  } = useNavContext();

  const isWindowScroll = () => {
    handleScroll(window.pageYOffset > 0 ? true : false);
  };

  const toogleSidebar = () => {
    const sidebar = document.querySelector("#sidebar") as HTMLElement | null;

    if (!showSidebar) {
      if (sidebar) {
        sidebar?.style.setProperty("display", "flex");
      }
    } else {
      sidebar?.style.setProperty("display", "none");
    }
    handleShowSidebar();
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
            src="./images/logo.png"
            alt="Pinnacle law logo"
          />
        </div>
        {isMobile ? (
          <RxHamburgerMenu size={35} color="#cca776" onClick={toogleSidebar} />
        ) : (
          ""
        )}
        <div
          id="sidebar"
          className={
            !isMobile
              ? style["navigation-container"]
              : style["sidebar-container"]
          }
        >
          <div className={style["menu"]}>
            {isMobile ? (
              <IoMdClose size={35} color="#cca776" onClick={toogleSidebar} />
            ) : (
              ""
            )}
          </div>
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
