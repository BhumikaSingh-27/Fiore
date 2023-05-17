import React from "react";
import "./UserProfile.css";

const Address = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="header">
          <h3>My Address</h3>
          <hr />
        </div>
        <div className="address-body">
          <h4> Name:</h4>
          <div> address:Savita Sadan</div>
        </div>
        <div className="address-button">
          <button className="edit-btn">Edit</button>
          <button className="remove-address-btn">Remove</button>
        </div>
        <h3>+ Add a new Address</h3>
      </div>
    </div>
  );
};

export default Address;
