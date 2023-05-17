import React from "react";
import "./UserProfile.css";

const AddressForm = () => {
  return (
    <div>
      <div className="form-address"> 
        <h3>Add new Address</h3>
        <div className="input-body">
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="number" />
        <div>
          <button>save</button>
          <button className="remove-address-btn">cancel</button>
          <button>Fill with dummy data</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
