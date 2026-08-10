import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollOnTop.css";

function ScrollOnTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`btn-scroll-top ${isVisible ? "show" : ""}`}>
      <button onClick={scrollToTop}>
        <FaArrowUp className="ArrowUpIcon" />
      </button>
    </div>
  );
}
export default ScrollOnTop;