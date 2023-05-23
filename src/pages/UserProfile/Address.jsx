import React, { useContext } from "react";
import "./UserProfile.css";
import "../../components/Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext";

const Address = () => {
  const { address, addressDispatch } = useContext(AddressContext);

  return (
    <div>
      <div className="profile-container">
        <div className="header">
          <h3>My Address</h3>
          <hr />
        </div>

        {address.addressData?.map(
          (
            { name, houseNo, city, state, country, postalCode, mobile },
            index
          ) => {
            return (
              <div key={index} className="address-body">
                <h4>{name}</h4>
                <p style={{ textAlign: "left" }}>
                  {houseNo},{city},{state},{country}.<br />
                  Pincode: {postalCode}.
                  <br />
                  mobile:{mobile}
                </p>
              </div>
            );
          }
        )}

        <div className="address-button">
          <button className="edit-btn">Edit</button>
          <button className="remove-address-btn">Remove</button>
        </div>
        <NavLink className="not-a-link navlink" to="/addressform">
          <h3>
            + Add a new Address
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Address;
