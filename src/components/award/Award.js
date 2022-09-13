import React from "react";
import {
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
} from "./imports";
import BackToTopButton from "../../components/social/BackToTopButton";
import "./award.css";

const Award = () => {
  return (
    <div className="aw__wi" id="award">
      <h1 className="award">Global Award</h1>
      <div class="sli">
        <div class="sli-track">
          {/*  8 slides  */}
          <div class="slipjp">
            <img src={logo01} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo02} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo03} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo04} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo05} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo06} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo07} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo08} alt="" />
          </div>
          {/* same 8 slies double ----------------------- */}
          <div class="slipjp">
            <img src={logo01} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo02} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo03} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo04} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo05} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo06} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo07} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo08} alt="" />
          </div>
          {/* same 8 slies double ----------------------- */}
          <div class="slipjp">
            <img src={logo01} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo02} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo03} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo04} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo05} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo06} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo07} alt="" />
          </div>
          <div class="slipjp">
            <img src={logo08} alt="" />
          </div>
        </div>
      </div>
      <div className="award__bg">
      <div class="overlay"></div>
        <h3 className="bg__head">NOW BOOKING</h3>
        <h1 className="bg__header">Private Dinners & Happy Hours</h1>
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default Award;
