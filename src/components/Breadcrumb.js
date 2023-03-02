import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <Link to="/" className="breadcrumb-item text-dark">
              Home
            </Link>
            {props.children}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
