import React from "react";
import { Link } from "react-router-dom";

import { Customer } from "../../containers";

import "./menu.css";
import All from "../../menulist/containers/all-c/All";
import { Social } from "../../components";
import BackToTopButton from "../../components/social/BackToTopButton";

const Menu = () => {
  return (
    <div className="menulo">
      <div className="menulo__video">
        <video
          src="https://storage.coverr.co/videos/t9kUBEdBb54vpsZBHu300oGxDg74PZHvN?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU4MDY0MTgzfQ.wfMxK4ba7U1NwgCsdzDtS_ZZNJ8qMCJbEFs-FaTu-KQ"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="wekimeki">
        <button>
          <Link to="/bread" style={{ color: "black", textDecoration: "none" }}>
            BreakFast
          </Link>
        </button>
        <button>
          <Link to="/diner" style={{ color: "black", textDecoration: "none" }}>
            Diner
          </Link>
        </button>
        <button>
          <Link to="/drink" style={{ color: "black", textDecoration: "none" }}>
            Drink
          </Link>
        </button>
        <button>
          <Link to="/desert" style={{ color: "black", textDecoration: "none" }}>
            Desert
          </Link>
        </button>
        <button className="zizi">
          <Link to="/" style={{ color: "red", textDecoration: "none" }}>
            Back To Home
          </Link>
        </button>
      </div>
      <All />
      <Customer />
      <Social />
      <BackToTopButton />
    </div>
  );
};

export default Menu;
