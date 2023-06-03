import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const OrderSummary = () => {
  const { state, discount } = useContext(DataContext);
  return (
    <div className="order-summary-body">
      <div className="order-summary-main">
        <div className="order-summary-container">
          <div>
            <img
              src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1685752625/NegProjects/wired-lineal-1103-confetti_zkqc7t.gif"
              alt="celebration"
            />
          </div>
          <div className="order-summary-details">
            <h1>Congratulations, your order is placed!</h1>

            <div>
              {state?.cartData.map((item, index) => (
                <div key={index} className="orders">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.name}
                    width="100"
                    height="100"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>Quantity:{item.qty} </p>
                    <p></p>
                  </div>
                </div>
              ))}
              <h3>Total Amount: &#x20B9; {discount}</h3>
            </div>
          </div>
          
        </div>
        <h1>
            <i>
              Thank you for shopping with <span>Foire <img src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1685259140/NegProjects/E-commerce/logo1_pskkes.jpg" alt="logo" /></span>
            </i>
          </h1>
      </div>
    </div>
  );
};

export default OrderSummary;
