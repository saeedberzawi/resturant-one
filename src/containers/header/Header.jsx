// import React, { useRef, useState } from "react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { home1, home2, home3, home4 } from "./imports";

// import MetaTa from "../../utils/MetaTa"
// import datat from '../../utils/info.json'
import { Helmet } from "react-helmet";

import "./header.css";

const Header = () => {
  return (
    <div className="main_page">
      <>
        <Swiper
          loop
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home1} alt="" className="slide__img" />{" "}
            <div className="slice__main">
              {/* <MetaTa description={datat.homePage} /> */}
              <h1 className="slice__head">Welcome To Our Restaurat</h1>
              <Helmet>
                {/* <title>UNION-BRZ Rusturant</title> */}
                <meta name="description" content="about we do over day " />
              </Helmet>
              <p className="slice__pargraph">
                Lorem ipsum dolor. Obcaecati natus iure reprehenderit ea maiores
                harum, fugit perspiciatis? Nesciunt at excepturi consequuntur
                fugiat a quia illo nemo! Quam rerum illo modi.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={home2} alt="" className="slide__img" />
            <div className="slice__main">
              <h1 className="slice__head">VIB Sector For Our Lovely Client</h1>
              <p className="slice__pargraph">
                Lorem ipsum dolor. Obcaecati natus iure reprehenderit ea maiores
                harum, fugit perspiciatis? Nesciunt at excepturi consequuntur
                fugiat a quia illo nemo! Quam rerum illo modi.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={home3} alt="" className="slide__img" />{" "}
            <div className="slice__main">
              <h1 className="slice__head">Special section for BBQ</h1>
              <p className="slice__pargraph">
                Lorem ipsum dolor. Obcaecati natus iure reprehenderit ea maiores
                harum, fugit perspiciatis? Nesciunt at excepturi consequuntur
                fugiat a quia illo nemo! Quam rerum illo modi.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={home4} alt="" className="slide__img" />{" "}
            <div className="slice__main">
              <h1 className="slice__head">The best chef in the country</h1>
              <p className="slice__pargraph">
                Lorem ipsum dolor. Obcaecati natus iure reprehenderit ea maiores
                harum, fugit perspiciatis? Nesciunt at excepturi consequuntur
                fugiat a quia illo nemo! Quam rerum illo modi.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};
export default Header;
