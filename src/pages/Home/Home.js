import React from "react";
import OfferBanner from "../../components/OfferBanner";
import Products from "../../components/Products";
import Vendor from "../../components/Vendor";
import Categories from "./Categories";
import Features from "./Features";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <Features></Features>
      <Categories></Categories>
      <Products></Products>
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <OfferBanner></OfferBanner>
          <OfferBanner></OfferBanner>
        </div>
      </div>
      <Products></Products>
      <Vendor></Vendor>
    </div>
  );
};

export default Home;
