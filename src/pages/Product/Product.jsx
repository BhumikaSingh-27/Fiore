import React, { useContext, useEffect } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import "./Product.css";
import "./components/Filter.css";
import { DataContext } from "../../contexts/DataContext";
import { Circles } from "react-loader-spinner";

const Product = () => {
  const { state, getProductData, loading } = useContext(DataContext);

  const searchedData = state.searchText
    ? state.productData.filter(({ name }) =>
        name.toLowerCase().includes(state.searchText.toLowerCase())
      )
    : [...state.updatedProductData];

  const dataFilteredByPrice = state.priceFilter
    ? searchedData.filter(
        ({ discountedPrice }) => discountedPrice <= state.priceFilter
      )
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
          ? a.discountedPrice - b.discountedPrice
          : b.discountedPrice - a.discountedPrice
      )
    : dataByRating;

  useEffect(() => {
    if (state.productData.length === 0) {
      getProductData();
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="product-page">
          <div className="filter-body">
            <div className="filter-position">
              <Filter />
            </div>
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
            {finalFilteredData.length === 0 &&
              state.productData.length !== 0 && (
                <h2>Sorry, no products found!🙁</h2>
              )}
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
