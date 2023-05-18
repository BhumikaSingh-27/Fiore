import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Home/components/Footer";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/products");
        const dt = await response.json();
        setData(dt.products);
        // console.log(dt.products);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  console.log("inside product", data);
  return (
    <>
      <Navbar />
      <div className="product-page">
        <div>
          <Filter />
        </div>
        <div className="product-list">
          {data.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  );
};

export default Product;
