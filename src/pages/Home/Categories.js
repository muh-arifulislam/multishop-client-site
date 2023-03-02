import React from "react";
import CategoryItem from "../../components/CategoryItem";

const Categories = () => {
  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
      </div>
    </div>
  );
};

export default Categories;
