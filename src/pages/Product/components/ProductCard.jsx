import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="product-card">
        <img class="product-img" src="https://picsum.photos/500/500" alt="" />
        <div className="prduct-title">
          <div class="product-name">
            <div>Name of product</div>
            <span onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? <FaHeart color="red" /> : <FaRegHeart />}
            </span>
          </div>
          <div className="product-star">
            <div>
              2 <FaStar size={10} />
            </div>
          </div>
        </div>
        {/* <div>Author</div> */}
        <div class="product-price-details">
          {" "}
          <h2>&#x20B9;200</h2> <span className="cross-text"> &#x20B9;400</span>
        </div>
        <button className="add-btn">
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
