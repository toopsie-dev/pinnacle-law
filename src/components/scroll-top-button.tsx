import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [showScrollTopIcon, setShowScrollTopIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopIcon(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopIcon && (
        <div className="scroll-top-icon" onClick={scrollTop}>
          {<IoIosArrowUp color="white" size={20} />}
        </div>
      )}
    </div>
  );
}
