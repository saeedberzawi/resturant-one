import React from "react";
import Drinks from "../../../menulist/containers/drink-c/Drink";
import BackToTopButton from "../../../components/social/BackToTopButton";
import { Link } from "react-router-dom";
import { Social } from "../../../components";

const Drink = () => {
  return (
    <div className="container">
      <div className="cici"></div>
      <h1 className="coco">Drink</h1>
      <button className="shake">
        {" "}
        <Link to="/menu" style={{ color: "black", textDecoration: "none" }}>
          Back To Menu
        </Link>
      </button>
      <Drinks />
      <Social />
      <BackToTopButton />
      <div className="cici"></div>
    </div>
  );
};

export default Drink;
