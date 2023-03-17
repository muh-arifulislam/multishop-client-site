import React, { useEffect, useState } from "react";
import OfferBanner from "../../components/OfferBanner";
import Product from "../../components/Product";
import Products from "../../components/Products";
import Vendor from "../../components/Vendor";
import Categories from "./Categories";
import Features from "./Features";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
    fetch("https://dummyjson.com/products?limit=8&skip=0")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <Features></Features>
      <Categories categories={categories}></Categories>,
      <section>
        <div className="container-fluid pt-5 pb-3">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Our Products</span>
          </h2>
          <div className="row px-xl-5">
            {products?.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <OfferBanner></OfferBanner>
          <OfferBanner></OfferBanner>
        </div>
      </div>
      <section>
        <div className="container-fluid pt-5 pb-3">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Feature Products</span>
          </h2>
          <div className="row px-xl-5">
            {products?.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
      <Vendor></Vendor>
    </div>
  );
};

export default Home;
