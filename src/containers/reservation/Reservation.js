import React, { useEffect } from "react";
import "./reservation.css";
import about from "../../assets/about1.png";
// aos
import Aos from "aos";
import "aos/dist/aos.css";

const mystyle = {
  textIndent: "7px",
};
const Reservation = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
  }, []);
  return (
    <>
      <div className="reservation" id="reservation">
        <h2 className="reser__h" data-aos="flip-up">
          Reservation
        </h2>
        <div className="weh">
          <div className="tabe" data-aos="fade-right">
            <h2>BOOK YOUR TABLE</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="phone" placeholder="Phone" />
            <input type="date" name="" id="" className="" style={mystyle} />
            <input type="time" name="" id="" style={mystyle} />
            <input
              list="programing"
              placeholder="Guest"
              style={{ padding: "5 20 5 5" }}
            />
            <datalist id="programing">
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
            </datalist>
            <button type="submit" className="sub">
              Book Your Table Now
            </button>
          </div>
          <div className="wel">
            <div className="wel__text" data-aos="fade-up">
              <h2>
                Welcome TO <br /> UNION-BRZ
              </h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. A small river named
                Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, <br/> in which roasted
                parts. <br />
              </p>
            </div>
            <div className="wel__imga">
              <img src={about} alt="" data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
      <div className="custom__b">
        <div class="overlay02">
          <h3 className="bg__he">NOW BOOKING</h3>
          <h1 className="bg__hea">Private Dinners & Happy Hours</h1>
        </div>
      </div>
    </>
  );
};

export default Reservation;
