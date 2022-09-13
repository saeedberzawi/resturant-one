import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

import {
  person1,
  person2,
  person3,
  person4,
  person5,
} from "../customer/imports";

import "./customer.css";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

const Customer = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
  }, []);
  return (
    <>
      <div className="wasa">
        <div className="kosumak" id="customer">
          <h2 data-aos="flip-up">Testimony</h2>
          <h1 data-aos="flip-up">Happy Customer</h1>
        </div>
        <div className="maghrab">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="coscos">
                <img src={person1} alt="" />
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h2>ian boner</h2>
                <p>CUSTOMER</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="coscos">
                <img src={person2} alt="" />
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h2>jhoney leonard</h2>
                <p>CUSTOMER</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="coscos">
                <img src={person3} alt="" />
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h2>jhone terry</h2>
                <p>CUSTOMER</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="coscos">
                <img src={person4} alt="" />
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h2>frank lampard</h2>
                <p>CUSTOMER</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="coscos">
                <img src={person5} alt="" />
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <h2>sars wekie</h2>
                <p>CUSTOMER</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Customer;
