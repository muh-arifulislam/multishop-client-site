import React from "react";

const Sorting = ({ limit, setLimit }) => {
  return (
    <div className="col-12 pb-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <button className="btn btn-sm btn-light">
            <i className="fa fa-th-large"></i>
          </button>
          <button className="btn btn-sm btn-light ml-2">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="ml-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              Sorting
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Latest
              </a>
              <a className="dropdown-item" href="#">
                Popularity
              </a>
              <a className="dropdown-item" href="#">
                Best Rating
              </a>
            </div>
          </div>
          <div className="btn-group ml-2">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              Showing
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                onClick={() => setLimit(9)}
                className={`dropdown-item ${limit === 9 && "active"}`}
              >
                9
              </button>
              <button
                onClick={() => setLimit(18)}
                className={`dropdown-item ${limit === 18 && "active"}`}
              >
                18
              </button>
              <button
                onClick={() => setLimit(36)}
                className={`dropdown-item ${limit === 36 && "active"}`}
              >
                36
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
