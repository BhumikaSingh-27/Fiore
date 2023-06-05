import React, { useContext, useEffect } from "react";
import "./UserProfile.css";
import "../../components/Navbar/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext";

const Address = () => {
  const { userInfo, userAdd, setNewAddress, setUserAdd } =
    useContext(AddressContext);
  const navigate = useNavigate();

  const userKey = userInfo?.email;
  const userAddress = userAdd[userKey];

  const EditAddress = (addressId) => {
    const addToUpdate = userAddress.find(({ id }) => id === addressId);
    setNewAddress(addToUpdate);
    navigate("/addressform");
  };

  const removeAddress = (addressId) => {
    console.log(userAddress);
    const address = userAddress.filter((ele) => ele.id !== addressId);
    setUserAdd((prev) => ({ ...prev, [userKey]: address }));
    console.log(address);
  };

  useEffect(() => {
    setNewAddress({
      id: null,
      name: null,
      houseNo: null,
      city: null,
      state: null,
      country: null,
      postalCode: null,
      mobile: null,
    });
  }, []);

  return (
    <div>
      <div className="profile-container">
        <div className="header">
          <h3>My Address</h3>
          <hr />
        </div>

        {userAddress?.map(
          ({ id, name, houseNo, city, state, country, postalCode, mobile }) => {
            return (
              <div key={id} className="address-body">
                <div className="address-body">
                  <h4>{name}</h4>
                  <p style={{ textAlign: "left" }}>
                    {houseNo},{city},{state},{country}.<br />
                    Pincode: {postalCode}.
                    <br />
                    mobile:{mobile}
                  </p>
                </div>
                <div className="address-button">
                  <button className="edit-btn" onClick={() => EditAddress(id)}>
                    Edit
                  </button>
                  <button
                    className="remove-address-btn"
                    onClick={() => removeAddress(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          }
        )}

        <NavLink className="not-a-link navlink" to="/addressform">
          <h3>+ Add a new Address</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Address;
