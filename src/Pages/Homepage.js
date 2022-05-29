import React from "react";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Banner/Carousel";
import CoinsTable from "../components/CoinsTable";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Carousel />
      <CoinsTable />
    </div>
  );
};

export default Homepage;
