import React, { useCallback, useContext } from "react";
import "./Checkout.css";
import { DataContext } from "../../../contexts/DataContext";

const CheckoutCard = () => {
  const {state,totalPrice,discount} = useContext(DataContext)

  return (
    <>
      <div className="checkout-container">
        <hr />
        <h3>ORDER DETAILS</h3>
        <hr />
        <div className="container-margin">
            <div className="checkout-header">
          <div className="checkout-flex">
            <h3>Item</h3>
            <h3>Qty</h3>
          </div>
          </div>

          {/* this will vary, we need to apply map and return this */}
    
          {
            state?.cartData?.map((ele)=>(<div  key={ele._id} className="checkout-flex"> 
              <p>{ele.name}</p>
              <p>{ele.qty}</p>
            </div>))
          }
        
         
            {/* <p>Book Name</p>
            <p>1</p>
          </div>
          <div className="checkout-flex">
            <p>Book Name</p>
            <p>1</p>
          </div> */}
          {/*this block  */}
        </div>
        <hr />
        <h3>PRICE DETAILS</h3>
        <hr />
        <div className="container-margin">
          <div className="checkout-flex">
            <p>Price ({state.cartData.length} items)</p>
            <p>&#x20B9; {totalPrice}</p>
          </div>
          <div className="checkout-flex">
            <p>Discount</p>
            <p> &#x20B9; {totalPrice-discount} </p>
          </div>
          <div className="checkout-flex">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="checkout-flex">
            <h3>Total Amount</h3>
            <h3>&#x20B9; {discount}</h3>
          </div>
        </div>
        <hr />
        <h3>DELIVER TO</h3>
        <hr />
        <div className="checkout-flex-column">
          <div className="checkout-flex-column start">
            <div>UserName</div>
            <div className="address">address- savita sandan</div>
          </div>
          <button className="add-btn checkout">Place order</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
