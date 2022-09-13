import React from "react";
import {
  Cheif,
  Customer,
  Header,
  Reservation,
  Special,
  Videos,
} from "../../containers";
import { Award, Social,UpHeader } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <UpHeader/>
      <Social />
      <Award />
      <Cheif />
      <Special />
      <Videos />
      <Reservation />
      <Customer />
    </div>
  );
};

export default Home;
