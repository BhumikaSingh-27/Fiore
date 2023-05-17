import React from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";

const Product = () => {
  return (
    <div className="product-page">
      <Filter />
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
