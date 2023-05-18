import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className="product-card">
        <img class="product-img" src={item.image} alt="" />
        <div className="prduct-title">
          <div class="product-name">
            <div>{item.name}</div>
            <span onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? <FaHeart color="red" /> : <FaRegHeart />}
            </span>
          </div>
          <div className="product-star">
            <div className="align-star">
              {item.rating} <FaStar size={10} />
            </div>
          </div>
        </div>
        
        <div class="product-price-details">
          {" "}
          <h2>&#x20B9;{item.price}</h2>{" "}
          <p className="cross-text">&#x20B9;200 </p><span>(30%OFF)</span>
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
  );
};

export default ProductCard;
