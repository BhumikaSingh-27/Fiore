import React, { useEffect } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Home/components/Footer";

const Product = () => {

    useEffect(
        (async()=>{
            try{

            }catch(e){
                console.log(e)
            }
})()
,[])
  return (
    <>
      <Navbar />
      <div className="product-page">
        <div>
          <Filter />
        </div>
        <div className="product-list">
          <ProductCard />
          <ProductCard />
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
