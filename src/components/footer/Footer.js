import React from "react";
import "./footer.css";

import { ImTwitter, ImYoutube } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__sec1">
        <h1>We Make Delicious & Nutritious Food</h1>
      </div>
      <div className="footer__sec2">
        <div className="sec2__one">
          <h2>UNION-BRZ</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove
          </p>
          <ul>
            <li>
              {" "}
              <a
                href="https://twitter.com/SMhdBRZ"
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter
                  size="2rem"
                  color="var(--color-header)"
                  position="fixed"
                />
              </a>
            </li>
            <li>
              <a
                href=" https://wa.me/+9647510429521"
                target="_blank"
                rel="noreferrer"
              >
                <RiWhatsappFill size="2rem" color="var(--color-header)" />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://linktr.ee/s_mhd_brz"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinktree size="2rem" color="var(--color-header)" />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.youtube.com/watch?v=sy-qMG_m-ug"
                target="_blank"
                rel="noreferrer"
              >
                <ImYoutube size="2rem" color="var(--color-header)" />
              </a>
            </li>
          </ul>
        </div>
        <div className="sec2__two">
          <h2>OPEN HOURS</h2>
          <div className="sec2__two-pp">
            <ul>
              <li>Sunday</li>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
            </ul>
            <ul>
              <li>9:00 - 24:00</li>
              <li>9:00 - 24:00</li>
              <li>9:00 - 24:00</li>
              <li>9:00 - 24:00</li>
              <li>9:00 - 02:00</li>
              <li>9:00 - 02:00</li>
              <li>9:00 - 02:00</li>
            </ul>
          </div>
        </div>
        <div className="sec2__three">
          <h2>Our Branch</h2>
          <p>erbil</p>
          <p>baghadad</p>
          <p>soulmaina</p>
          <p>karkok</p>
          <p>beurit</p>
        </div>
        <div className="sec2__four">
          <h2>NEWSLETTER</h2>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>
          <input placeholder="Enter E-mail Address" className="papa" />
          <br />
          <button className="poop">Subscribe</button>
        </div>
      </div>
      <div className="footer__sec3">
        <p>
          {" "}
          Copyright ©2022 All rights reserved | Made By
          <a href="https://linktr.ee/s_mhd_brz"> Saeed MHD AL_BerZawi</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
