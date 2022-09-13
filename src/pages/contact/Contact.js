import React from "react";
import { Social } from "../../components";
import BackToTopButton from "../../components/social/BackToTopButton";
import { Reservation } from "../../containers";
import "./contact.css";
import { phone, point, email } from "./imports";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__overlay"></div>
        <h1>Contact</h1>
        <div className="contact__text"></div>
        <p className="ovarlayal__text">
          {" "}
          <img src={phone} alt="" />
          +1 234 567 890 +1 234 567 890
        </p>
        <p className="ovarlayal__text text_2">
          {" "}
          <img src={point} alt="" />
          14 Soho Square, London, United Kingdom
        </p>
        <p className="ovarlayal__text text_3">
          <img src={email} alt="" />
          lorem.ipsum@dolor.com
        </p>
      </div>
      <Reservation/>
      <div className="getin">
        <div className="getin__touch">
          <h2>GET IN TOUCH</h2>
          <div className="touch__in">
            <input type="text" placeholder="Your Name : |"></input>
            <input type="email" placeholder="Your Email : |"></input>
            <input type="message" placeholder="Your Message : |"></input>
            <button>send message</button>
          </div>
        </div>
        <div className="getin__map"></div>
        {/* <iframe
          width="821"
          height="250"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=621&amp;height=424&amp;hl=en&amp;q=Bakhtiari%20Main%20Street,%20Erbil+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <a href="https://maps-generator.com/"></a>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=ffa06035d35bd6d71eab143a3b8ee348c087537a"
        ></script> */}
        <Social />
      </div>
      
      <BackToTopButton />
    </>
  );
};

export default Contact;
