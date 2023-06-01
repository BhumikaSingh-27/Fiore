import React, { useContext } from "react";
import "./Filter.css";
import { DataContext } from "../../../contexts/DataContext";

const Filter = () => {
  const { state, dispatch } = useContext(DataContext);


  return (
    <div>
      <div className="filter-main-body">
        <div className="filter-component">
          <h4>Filters</h4>
          <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => dispatch({ type: "RESET_ALL" })}
          >
            Clear
          </p>
        </div>

        <div className="filter-price">
          <h4 className="price-h4">Price</h4>
          <div className="slider-range">
            <p>500</p>
            <p>1500</p>
            <p>3000</p>
          </div>
          <input
            // defaultValue="3000"
            type="range"
            min="500"
            max="3000"
            value={state.priceFilter}
            onChange={(e) =>
              dispatch({ type: "SET_PRICE", payload: e.target.value })
            }
          />
        </div>
        <div className="filter-category">
          <h4>Category</h4>
          <div className="filter-category-name">
            <label>
              <input
                checked={state.checkCategory.isRoses}
                type="checkbox"
                value="Roses"
                onChange={(e) =>
                  dispatch({ type: "SET_ROSES", payload: e.target })
                }
              />
              <span> Roses</span>
            </label>
            <label>
              <input
                checked={state.checkCategory.isLilies}
                type="checkbox"
                value="Lilies"
                onChange={(e) =>
                  dispatch({ type: "SET_LILIES", payload: e.target })
                }
              />
              <span> Lilies</span>
            </label>
            <label>
              <input
                checked={state.checkCategory.isOrchids}
                type="checkbox"
                value="Orchids"
                onChange={(e) =>
                  dispatch({ type: "SET_ORCHIDS", payload: e.target })
                }
              />
              <span> Orchids</span>
            </label>
          </div>
        </div>
        <div className="filter-category">
          <h4>Ratings</h4>
          <div className="filter-category-name">
            <label>
              <input
                checked={state.checkRating === "4"}
                type="radio"
                name="ratings"
                value="4"
                onChange={(e) =>
                  dispatch({ type: "SET_RATING", payload: e.target.value })
                }
              />
              <span> 4 stars and above</span>
            </label>
            <label>
              <input
                checked={state.checkRating === "3"}
                type="radio"
                name="ratings"
                value="3"
                onChange={(e) =>
                  dispatch({ type: "SET_RATING", payload: e.target.value })
                }
              />
              <span> 3 stars and above</span>
            </label>
            <label>
              <input
                type="radio"
                name="ratings"
                checked={state.checkRating === "2"}
                value="2"
                onChange={(e) =>
                  dispatch({ type: "SET_RATING", payload: e.target.value })
                }
              />
              <span> 2 stars and above</span>
            </label>
            <label>
              <input
                type="radio"
                name="ratings"
                checked={state.checkRating === "1"}
                value="1"
                onChange={(e) =>
                  dispatch({ type: "SET_RATING", payload: e.target.value })
                }
              />
              <span> 1 stars and above</span>
            </label>
          </div>
        </div>
        <div className="filter-category">
          <h4>Sort by</h4>
          <div className="filter-category-name">
            <label>
              <input
                checked={state.checkSort === "LH"}
                type="radio"
                name="price"
                value="LH"
                onChange={(e) =>
                  dispatch({ type: "SET_SORTING", payload: e.target.value })
                }
              />

              <span> Price - Low to High</span>
            </label>
            <label>
              <input
                checked={state.checkSort === "HL"}
                type="radio"
                name="price"
                value="HL"
                onChange={(e) =>
                  dispatch({ type: "SET_SORTING", payload: e.target.value })
                }
              />
              <span> Price - High to Low</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
