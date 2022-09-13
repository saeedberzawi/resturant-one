import React, { useEffect } from "react";
import { chef1, chef2, chef3, chef4 } from "./imports";
import "./cheif.css";
// aos
import Aos from "aos";
import "aos/dist/aos.css";

const Cheif = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
  }, []);
  return (
    <div className="chef" id="chef">
      <h3 className="chef__header" data-aos="flip-up">Chef</h3>
      <h1 className="chef__text" data-aos="flip-up">Our Master Chef</h1>
      <div className="chef__box">
        <div className="box" data-aos="fade-right">
          <img src={chef4} alt="" className="box__image" />
          <div className="box__content">
            <h2 className="content__header">John Gustavo</h2>
            <h2 className="content__head">CEO, Co Founder</h2>
            <p className="content__text">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="box" data-aos="fade-right">
          <img src={chef2} alt="" className="box__image" />
          <div className="box__content">
            <h2 className="content__header">Michelle Fraulen</h2>
            <h2 className="content__head">Head Chef</h2>
            <p className="content__text">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="box"data-aos="fade-left">
          <img src={chef3} alt="" className="box__image" />
          <div className="box__content">
            <h2 className="content__header">Alfred Smith</h2>
            <h2 className="content__head">Chef Cook</h2>
            <p className="content__text">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div className="box" data-aos="fade-left">
          <img src={chef1} alt="" className="box__image" />
          <div className="box__content">
            <h2 className="content__header">Antonio Santibanez</h2>
            <h2 className="content__head">Chef Cook</h2>
            <p className="content__text">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheif;
