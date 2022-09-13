import React, { useEffect } from "react";
// import { ImageViewer } from "react-image-viewer-dv";

import {
  photo1,
  photo2,
  photo3,
  photo4,
  chef,
  customer1,
  customer10,
  customer11,
  customer12,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
  customer7,
  customer8,
  customer9,
} from "./imports";

import "./imgs.css";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

const Imgs = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 50 });
  }, []);
  return (
    <div>
      <div className="all">
        <div className="first">
          <div className="imagefilter">
            <img src={customer12} alt="" />
            <img src={customer1} alt="" />
            <img src={customer2} alt="" />
            <img src={customer3} alt="" />
            <img src={customer4} alt="" />
            <img src={customer5} alt="" />
            <img src={customer6} alt="" />
            <img src={customer7} alt="" />
            <img src={customer8} alt="" />
            <img src={customer9} alt="" />
            <img src={customer10} alt="" />
            <img src={customer11} alt="" />
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
          </div>
          <div>
            <h2 data-aos="fade-right">Customers</h2>
            <p data-aos="fade-right">Always Take Care And Be Happaines</p>
          </div>
        </div>
        <div className="second" data-aos="fade-left">
          <h2>holla</h2>
          <p> we are Always here, just for here.</p>
          <img src={chef} alt="" />
        </div>
      </div>
      <div className="custom__bg">
        <div class="overlay01"></div>
        <h3 className="bg__heado">NOW BOOKING</h3>
        <h1 className="bg__headedo">Private Dinners & Happy Hours</h1>
      </div>
    </div>
  );
};

export default Imgs;
