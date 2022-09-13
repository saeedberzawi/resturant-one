import React from "react";
import Fast from "../../../menulist/containers/breakfast-c/BreakFast";
import BackToTopButton from "../../../components/social/BackToTopButton";
import { Link } from "react-router-dom";
import { Social } from "../../../components";

const BreakFast = () => {
  return (
    <div className="container">
      <div className="cici"></div>
      <h1 className="coco">BreakFast</h1>
      <button className="shake">
        {" "}
        <Link to="/menu" style={{ color: "black", textDecoration: "none" }}>
          Back To Menu
        </Link>
      </button>
      <Fast />
      <Social/>
      <BackToTopButton />
      <div className="cici"></div>
    </div>
  );
};

export default BreakFast;
