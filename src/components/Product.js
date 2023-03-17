import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, className }) => {
  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 pb-1 ${className}`}>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "100%",
              minHeight: "300px",
              maxHeight: "300px",
            }}
            className="img-fluid w-100"
            src={product?.thumbnail}
            alt=""
          />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt"></i>
            </a>
            <Link
              to="/shop/bottol202EB"
              className="btn btn-outline-dark btn-square"
            >
              <i className="fa fa-search"></i>
            </Link>
          </div>
        </div>
        <div className="text-center py-4">
          <Link
            to="/shop/bottol202EB"
            className="h6 text-decoration-none text-truncate"
          >
            Product Name Goes Here
          </Link>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>$123.00</h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
