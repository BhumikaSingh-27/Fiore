import React, { useContext } from "react";
import "./Product.css";
import "./components/Filter.css";
import "../Cart/Cart.css";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const ProductDetails = () => {
  const { prodId } = useParams();
  const { state } = useContext(DataContext);

  const prodInfo = state.productData.find(
    ({ _id }) => _id.toString() === prodId
  );
  console.log(prodInfo)
  return (
    <div className="product-details-container" key={prodInfo?._id}>
      <div className="product-details">
        <img
          className="product-details-img"
          src={prodInfo.image}
          alt={prodInfo?.name}
        />
        <div className="display-flex">
          <h2>{prodInfo?.name}</h2>
          <div className="price-info">
            <h1>&#x20B9; {prodInfo?.discount}</h1>
            <p className="cross-price">&#x20B9;{prodInfo?.price} </p>{" "}
            <span>
              (
              {Math.round(
                ((prodInfo?.price - prodInfo?.discount) / prodInfo?.price) * 100
              )}
              %OFF)
            </span>
          </div>
          <div className="item-info">
            <p>
              <b>Details:</b>
            </p>
            {prodInfo?.desc?.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
            {/* <li>Bunch of 5 Roses</li>
            <li>Red Vase</li> */}
            <p>
              <b>Rating:</b>{" "}
              <span className="star">
                {prodInfo?.rating} <FaStar />
              </span>
            </p>
          </div>
          <div>
            <ul className="ul-align-icons">
              <li className="space-icons">
                <img
                  src="https://imgcdn.floweraura.com/ssr-build//static/media/fast_delivery.1bb49c82.svg"
                  alt=""
                />
                <p>OnTime Delivery</p>
              </li>
              <li className="space-icons">
                <img
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684391519/payment_ihehn0.svg"
                  alt=""
                />
                100% Safe & Secure Payments
              </li>
              <li className="space-icons">
                <img
                  src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684391600/smile.c7a70acc_j9a3bi.svg"
                  alt=""
                />
                7 Million Smiles Delivered
              </li>
            </ul>
          </div>
          <div className="button-style">
            <button className="add-to-wishlist">Move to wishlist</button>
            <button className="add-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
