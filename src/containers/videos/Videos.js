import React, { useEffect } from "react";
import "./video.css";
// aos
import Aos from "aos";
import "aos/dist/aos.css";

const Videos = () => {
  // aos
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 50 });
  }, []);
  return (
    <div className="vis" id="video">
      <div className="sas sis" data-aos="fade-right">
        <video
          src="https://storage.coverr.co/videos/OznRSjpB3ZZaIpeJZtSHweu01weoxlzO2?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3ODIyMTgwfQ.Bgkj0O7PO0C_BNBeI93y897wLihsPw_ct98ATmlfxF4"
          muted
          loop
          autoPlay
        />
        <h2 className="whiteman">Fresh Meat</h2>
      </div>
      <div className="sas " data-aos="fade-left">
        <h2 className="sas__btn">Fresh bread</h2>
        <video
          src="https://storage.coverr.co/videos/zzZxifsJCqFMLXo9EF6aNX8hiiLumAU01?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3ODIwMDUzfQ.72N8d4wY0hV_dbByB0b7TljCPWIRfCHmm2XWPixofFc"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="sas sis" data-aos="fade-right">
        <video
          src="https://storage.coverr.co/videos/7b1OD2zfqqCx5wm31rcyBEXESnTa00QpQ?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3ODIyMTUwfQ.yu4x3zQC4uFBFK5lcl5S4buPnrx1VMZLrUgpE3Y1SMg"
          muted
          loop
          autoPlay
        />
        <h2 className="balckman">Like the way you love</h2>
      </div>
    </div>
  );
};

export default Videos;
