import React from "react";
import Desi from "../../../menulist/containers/desert-c/Derset";
import BackToTopButton from "../../../components/social/BackToTopButton";
import { Link } from "react-router-dom";
import { Social } from "../../../components";

const BreakFast = () => {
  return (
    <div className="container">
      <div className="cici"></div>
      <h1 className="coco">Derset</h1>
      <button className="shake">
        {" "}
        <Link to="/menu" style={{ color: "black", textDecoration: "none" }}>
          Back To Menu
        </Link>
      </button>
      <Desi />
      <Social />
      <BackToTopButton />
      <div className="cici"></div>
    </div>
  );
};

export default BreakFast;
