import React, { useState, useEffect } from "react";
import FiArrowUp from "../assets/img/backto_top.svg";
import "../App.css";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="back_to_top ">
          <img
            className="scrollTop"
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? "flex" : "none" }}
            src={FiArrowUp}
            alt="img"
          />
        </div>
      </section>
    </>
  );
};
export default BackToTop;
