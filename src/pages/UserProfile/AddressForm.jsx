import React from "react";
import "./UserProfile.css";

const AddressForm = () => {
  return (
    <div className="form-container">
      <div className="form-address">
        <h2>Add new Address</h2>
        <div className="input-body">
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter House No, Road, colony" />
          <input type="text" placeholder="Enter City" />
          <input type="text" placeholder="Enter State" />
          <input type="text" placeholder="Enter Country" />
          <input type="text" placeholder="Enter Postal Code" />
          <input type="number" placeholder="Enter Mobile Number" />
        </div>
        <div className="button-div">
          <button className="save-btn">save</button>
          <button className="remove-address-btn">cancel</button>
          <button className="dummy-btn">Fill with dummy data</button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
