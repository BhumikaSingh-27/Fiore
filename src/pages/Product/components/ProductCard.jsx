import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductCard = ({ flower }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { _id, name, image, price, discount, rating } = flower;
  return (
    <>
      <div key={_id}>
        
          <div className="product-card">
          <img class="product-img" src={image} alt={name} />
          <span  className="heart" onClick={() => setIsClicked(!isClicked)}>
                  {isClicked ? <FaHeart color="red" /> : <FaRegHeart />}
                </span>
            <div className="prduct-title">
              <div class="product-name">
              <NavLink className="not-a-link product-link" to={`/product/${_id}`}> <div>{name}</div></NavLink>
                
              </div>
              <div className="product-star">
                <div className="align-star">
                  {rating} <FaStar size={10} />
                </div>
              </div>
            </div>

            <div class="product-price-details">
              {" "}
              <h2>&#x20B9;{discount}</h2>{" "}
              <p className="cross-text">&#x20B9;{price} </p>
              <span>
                ({Math.round(((price - discount) / price) * 100)}%OFF)
              </span>
            </div>
            {/* <div class="product-price-details">
        <div className="price-info">
            <h1>&#x20B9;7000</h1>
            <p className="cross-price">&#x20B9;200 </p> <span>(30%OFF)</span>
          </div>
          </div> */}
            <button className="add-btn">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
      </div>
    </>
  );
};

export default ProductCard;
