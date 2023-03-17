import React, { useEffect, useState } from "react";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=8&skip=0`)
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
  }, []);
  return <section></section>;
};

export default FeatureProducts;
