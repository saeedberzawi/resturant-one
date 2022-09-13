import React, { useEffect } from "react";
import "./about.css";
import { about1, about2, about3, ser1, ser2, ser3 } from "./imports";
// aos
import Aos from "aos";
import "aos/dist/aos.css";
import { Social } from "../../components";
import BackToTopButton from "../../components/social/BackToTopButton";

const About = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
  }, []);
  return (
    <>
      <div className="about">
        <div className="about__overlay"></div>
        <h2 className="about__header">About</h2>
      </div>
      <div className="mohga">
        <div className="mohga__img">
          <img src={about2} alt="" className="one__one" data-aos="fade-down" />
          <img src={about3} alt="" className="one__o2" data-aos="fade-down" />
          <img src={about1} alt="" className="one__o3" data-aos="fade-down" />
        </div>
        <div className="mohga__text">
          <h2 data-aos="flip-up">This is our secrets</h2>
          <h1 data-aos="flip-up">Perfect Ingredients</h1>
          <p data-aos="fade-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <button data-aos="fade-left">Learn More</button>
        </div>
      </div>
      <div className="services">
        <h1 data-aos="flip-up">Services</h1>
        <h2 data-aos="flip-up">Catering Services</h2>
        <div className="services__sector">
          <div className="sector__one">
            <img src={ser1} alt="" />
            <h2>Birthday Party</h2>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="sector__one">
            <img src={ser2} alt="" />
            <h2>Business Meetings</h2>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="sector__one">
            <img src={ser3} alt="" />
            <h2>Wedding Party</h2>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <Social />
      <BackToTopButton />
    </>
  );
};

export default About;
