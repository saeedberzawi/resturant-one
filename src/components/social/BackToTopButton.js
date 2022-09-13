import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    },);
  }, []);
  const scrollUp = () => {
    setTimeout(()=>{

      window.scrollTo({
        top: 0,
        behavior: "smooth",
        
      });
    },0,500)
  };
  return (
    <div>
      {backToTopButton && (
        <button className="upmove" onClick={scrollUp}>
          UP
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
