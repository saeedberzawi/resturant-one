import React from "react";
// link smooth
import { Link } from "react-scroll";

import "./upheader.css";

const UpHeader = () => {
  return (
    <div>
      <ul className="upheader">
        <li>
          <Link
            to="award"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            delay={0.2}
          >
            Award
          </Link>
        </li>
        <li>
          <Link to="chef" spy={true} smooth={true} offset={-150} duration={500}>
            Chef
          </Link>
        </li>
        <li>
          <Link
            to="special"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            Special
          </Link>
        </li>
        <li>
          <Link
            to="video"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Videos
          </Link>
        </li>
        <li>
          <Link
            to="reservation"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            Reservation
          </Link>
        </li>
        <li>
          <Link
            to="customer"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Cust Say's
          </Link>
        </li>
        <li>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Open H
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UpHeader;
