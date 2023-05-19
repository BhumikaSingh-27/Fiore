import React, { useContext, useEffect, useState } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Home/components/Footer";
import { DataContext } from "../../contexts/DataContext";

const Product = () => {
    
    const {state} = useContext(DataContext)
    
  return (
    <>
      <Navbar />
      <div className="product-page">
        <div>
          <Filter />
        </div>
        <div className="product-list">
          
          {
            state.productData.map((flower)=> <ProductCard flower={flower} />)
          }
           
         
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
