import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import Filter from "./Filter";
import PageFilter from "./PageFilter";
import Sorting from "./Sorting";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          setLoading(true);
        }
      });
  }, [skip, limit]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then(console.log);
  }, []);
  return (
    <div>
      <div>
        <Breadcrumb>
          <span className="breadcrumb-item active">Shop</span>
        </Breadcrumb>
        <div className="container-fluid">
          <div className="row px-xl-5">
            <Filter></Filter>
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3 relative">
                <Sorting limit={limit} setLimit={setLimit}></Sorting>
                {loading ? (
                  <Loader></Loader>
                ) : (
                  products?.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      className="col-lg-4 col-md-6 col-sm-6 pb-1"
                    ></Product>
                  ))
                )}
                <PageFilter
                  skip={skip}
                  setSkip={setSkip}
                  activePage={activePage}
                  setActivePage={setActivePage}
                ></PageFilter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
