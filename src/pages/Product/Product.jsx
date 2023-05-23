import React, { useContext } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Home/components/Footer";
import { DataContext } from "../../contexts/DataContext";

const Product = () => {
  const { state } = useContext(DataContext);

  const dataFilteredByPrice = state.priceFilter
    ? state.productData.filter(({ discount }) => discount <= state.priceFilter)
    : [...state.updatedProductData];

  const dataByCategory = state.catType.length
    ? dataFilteredByPrice.filter(({ categoryName }) =>
        state.catType.includes(categoryName)
      )
    : dataFilteredByPrice;

  const dataByRating = state.rating
    ? dataByCategory.filter(({ rating }) => rating >= state.rating)
    : dataByCategory;

  const finalFilteredData = state.sortType
    ? [...dataByRating].sort((a, b) =>
        state.sortType === "LH"
          ? a.discount - b.discount
          : b.discount - a.discount
      )
    : dataByRating;

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div>
          <Navbar />
        </div>

        <div className="product-page">
          <div>
            <Filter />
          </div>
          <div className="product-list">
            {finalFilteredData.map((flower) => (
              <ProductCard flower={flower} />
            ))}
          </div>
        </div>
        <footer>
          {" "}
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Product;
