import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
const PageFilter = ({ skip, setSkip, activePage, setActivePage }) => {
  const pages = [1, 2, 3, 4];
  const nextButton = () => {
    setSkip(skip + 10);
    setActivePage(activePage + 1);
  };
  const prevButton = () => {
    setSkip(skip - 10);
    setActivePage(activePage - 1);
  };
  return (
    <div className="col-12">
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${activePage === 1 && "disabled"} `}>
            <button onClick={prevButton} className="page-link">
              Previous
            </button>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${page === activePage && "active"} `}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <button onClick={() => nextButton()} className="page-link" href="#">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageFilter;
