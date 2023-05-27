import React, { useContext, useEffect } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import "./Product.css";
import { DataContext } from "../../contexts/DataContext";
import { Circles } from "react-loader-spinner";

const Product = () => {
  const { state, dispatch, loading } = useContext(DataContext);

  const searchedData = state.searchText
    ? state.productData.filter(({ name }) =>
        name.toLowerCase().includes(state.searchText.toLowerCase())
      )
    : [...state.updatedProductData];

  const dataFilteredByPrice = state.priceFilter
    ? searchedData.filter(({ discount }) => discount <= state.priceFilter)
    : searchedData;

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
      <div>
        <div className="product-page">
          <div className="filter-body">
            <Filter />
          </div>
          <div className="product-list">
            {loading && (
              <div className="loader">
                <Circles color={"red"} />
              </div>
            )}
            {finalFilteredData.map((flower) => (
              <ProductCard flower={flower} />
            ))}
          </div>
        </div>
        {/* <footer>
          {" "}
          <Footer />
        </footer> */}
      </div>
    </>
  );
};

export default Product;
