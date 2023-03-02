import React from "react";
import Categories from "./Categories";
import Features from "./Features";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <Features></Features>
      <Categories></Categories>
    </div>
  );
};

export default Home;
