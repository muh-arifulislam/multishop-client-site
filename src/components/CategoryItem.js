import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ name }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <Link className="text-decoration-none" to="/shop">
        <div className="cat-item d-flex align-items-center mb-4">
          <div
            className="overflow-hidden"
            style={{ width: "100px", height: "100px" }}
          >
            <img className="img-fluid" src="assets/img/cat-1.jpg" alt="" />
          </div>
          <div className="flex-fill pl-3">
            <h6>{name.toUpperCase()}</h6>
            <small className="text-body">100 Products</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
