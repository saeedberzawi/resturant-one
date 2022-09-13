import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { dots, dishe1, dishe2, dishe3 } from "./imports";

import "./special.css";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

const moneStyle = {
  color: "black",
  textDecoration: "none",
};
const Special = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 50 });
  }, []);
  return (
    <div className="tab__m" id="special">
      <h2 data-aos="fade-up">Special</h2>
      <button data-aos="fade-left">
        <Link to="/menu" style={moneStyle}>
          View The Menu
        </Link>
      </button>
      <img src={dots} alt="" className="dotot" data-aos="fade-right"/>
      <div className="maindish">
        <div className="dish" data-aos="fade-right">
          <img src={dishe1} alt="" className="dish__dots" />
          <p className="dish__did">Dolor Sit Amet</p>
          <p className="dish__fid">
            <span>$</span>45
          </p>
        </div>
        <div className="dish" data-aos="fade-up">
          <img src={dishe2} alt="" />
          <p className="dish__did">Lorem Ipsum</p>
          <p className="dish__fid">
            <span>$</span>45
          </p>
        </div>
        <div className="dish" data-aos="fade-left">
          <img src={dishe3} alt="" />
          <p className="dish__did">Dolor Sit Amet</p>
          <p className="dish__fid">
            {" "}
            <span>$</span>45
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Special;
