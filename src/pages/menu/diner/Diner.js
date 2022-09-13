import React from "react";
import Din from "../../../menulist/containers/diner-c/Diner";
import { Link } from "react-router-dom";
import BackToTopButton from "../../../components/social/BackToTopButton";
import { Social } from "../../../components";

const Diner = () => {
  return (
    <div className="container">
      <div className="cici"></div>
      <h1 className="coco">Diner</h1>
      <button className="shake">
        {" "}
        <Link to="/menu" style={{ color: "black", textDecoration: "none" }}>
          Back To Menu
        </Link>
      </button>
      <Din />
      <Social />
      <BackToTopButton />
      <div className="cici"></div>
    </div>
  );
};

export default Diner;
