import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Autoplay } from "swiper";

import {
  dish1,
  dish2,
  dish3,
  dish4,
  dish5,
  dish6,
  dish7,
  dish8,
  dish9,
  dish10,
  dish11,
  dish12,
  dish13,
  dish14,
  dish15,
  dish16,
  dish17,
  dish18,
  dish19,
  dish20,
  braekfast1,
  braekfast2,
  braekfast3,
  braekfast4,
  braekfast5,
  braekfast6,
  braekfast7,
  braekfast8,
  braekfast9,
  desert1,
  desert2,
  desert3,
  desert4,
  desert5,
  desert6,
  dirnk1,
  dirnk2,
  dirnk3,
  dirnk4,
  dirnk5,
  dirnk6,
  dirnk7,
  dirnk8,
  helthy,
  helthy1,
} from "../imports";
import "./all.css";

const mysisi = {
  width: "50px",
  height: "130px",
};

const All = () => {
  return (
    <>
      <div>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiperles"
        >
          {/* diner -----------------  */}
          <SwiperSlide>
            <div className="wearehere">
              <div className="menulist">
                <img src={dish1} alt="" className="menulist__imge" />
                <div className="menulist__section">
                  <h2 className="menulistsec__header">
                    lorem ipsum dolor sit amet
                  </h2>
                  <p className="menulistsec__text">
                    set commodo augue eu diam tincidunt, sit amet auctor lectus
                    semper.
                    <br />
                    mauris porttitor diam at fringilla tempor
                  </p>
                </div>
                <p className="menulist__text">
                  {" "}
                  <span>$</span>45
                </p>
              </div>
              <div className="menulist">
                <img src={dish2} alt="" className="menulist__imge" />
                <div className="menulist__section">
                  <h2 className="menulistsec__header">
                    lorem ipsum dolor sit amet
                  </h2>
                  <p className="menulistsec__text">
                    set commodo augue eu diam tincidunt, sit amet auctor lectus
                    semper.
                    <br />
                    mauris porttitor diam at fringilla tempor
                  </p>
                </div>
                <p className="menulist__text">
                  {" "}
                  <span>$</span>45
                </p>
              </div>
              <div className="menulist">
                <img src={dish3} alt="" className="menulist__imge" />
                <div className="menulist__section">
                  <h2 className="menulistsec__header">
                    lorem ipsum dolor sit amet
                  </h2>
                  <p className="menulistsec__text">
                    set commodo augue eu diam tincidunt, sit amet auctor lectus
                    semper.
                    <br />
                    mauris porttitor diam at fringilla tempor
                  </p>
                </div>
                <p className="menulist__text">
                  {" "}
                  <span>$</span>45
                </p>
              </div>
              <div className="menulist">
                <img src={dish4} alt="" className="menulist__imge" />
                <div className="menulist__section">
                  <h2 className="menulistsec__header">
                    lorem ipsum dolor sit amet
                  </h2>
                  <p className="menulistsec__text">
                    set commodo augue eu diam tincidunt, sit amet auctor lectus
                    semper.
                    <br />
                    mauris porttitor diam at fringilla tempor
                  </p>
                </div>
                <p className="menulist__text">
                  {" "}
                  <span>$</span>45
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={dish5} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish6} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish7} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish8} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={dish9} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish10} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish11} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish12} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={dish13} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish14} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish15} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish16} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={dish17} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish18} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish19} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dish20} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          {/* breakfast --------------------- */}
          <SwiperSlide>
            <div className="menulist">
              <img src={braekfast1} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={braekfast2} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={braekfast3} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={braekfast4} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={braekfast5} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={braekfast6} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={braekfast7} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={braekfast8} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={braekfast9} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            {/*  helthy --------------------------- */}
            <div className="menulist">
              <img src={helthy} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={helthy1} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            {/* dsert ----------------- */}
            <div className="menulist">
              <img src={desert1} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={desert2} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={desert3} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={desert4} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={desert5} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={desert6} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>

            {/*  drink ---------------------------- */}
            <div className="menulist">
              <img
                src={dirnk1}
                alt=""
                className="menulist__imge"
                style={mysisi}
              />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img
                src={dirnk2}
                alt=""
                className="menulist__imge"
                style={mysisi}
              />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img
                src={dirnk3}
                alt=""
                className="menulist__imge"
                style={mysisi}
              />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={dirnk4} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dirnk5} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dirnk6} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
            <div className="menulist">
              <img src={dirnk7} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="menulist">
              <img src={dirnk8} alt="" className="menulist__imge" />
              <div className="menulist__section">
                <h2 className="menulistsec__header">
                  lorem ipsum dolor sit amet
                </h2>
                <p className="menulistsec__text">
                  set commodo augue eu diam tincidunt, sit amet auctor lectus
                  semper.
                  <br />
                  mauris porttitor diam at fringilla tempor
                </p>
              </div>
              <p className="menulist__text">
                {" "}
                <span>$</span>45
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default All;
