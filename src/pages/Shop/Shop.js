import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Product from "../../components/Product";
import Filter from "./Filter";
import PageFilter from "./PageFilter";
import Sorting from "./Sorting";
const Shop = () => {
  return (
    <div>
      <Breadcrumb>
        <span className="breadcrumb-item active">Shop</span>
      </Breadcrumb>
      <div class="container-fluid">
        <div class="row px-xl-5">
          <Filter></Filter>
          <div class="col-lg-9 col-md-8">
            <div class="row pb-3">
              <Sorting></Sorting>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <Product className="col-lg-4 col-md-6 col-sm-6 pb-1"></Product>
              <PageFilter></PageFilter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
