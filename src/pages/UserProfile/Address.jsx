import React, { useContext, useEffect } from "react";
import "./UserProfile.css";
import "../../components/Navbar/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext";
import { toast } from "react-toastify";
import { FaVolumeOff } from "react-icons/fa";

const Address = () => {
  const { userInfo, userAdd, setNewAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  //   const editTheForm = (add) => {
  //     navigate("/addressform");
  //     addressDispatch({
  //       type: "EDIT_ADDRESS",
  //       payload: add,
  //     });
  //   };

  const userKey = userInfo?.email;
  const userAddress = userAdd[userKey];

  const EditAddress = (addressId) => {
    console.log(addressId);
    const addToUpdate = userAddress.find(({ id }) => id === addressId);
    console.log(addToUpdate);
    setNewAddress(addToUpdate)
    navigate("/addressform")
  };
  useEffect(() => {
    setNewAddress({
      id: null,
      name: null,
      houseNo: null,
      city: null,
      stateName: null,
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
          ({
            id,
            name,
            houseNo,
            city,
            stateName,
            country,
            postalCode,
            mobile,
          }) => {
            return (
              <div key={id} className="address-body">
                <div className="address-body">
                  <h4>{name}</h4>
                  <p style={{ textAlign: "left" }}>
                    {houseNo},{city},{stateName},{country}.<br />
                    Pincode: {postalCode}.
                    <br />
                    mobile:{mobile}
                  </p>
                </div>
                <div className="address-button">
                  <button className="edit-btn" onClick={() => EditAddress(id)}>
                    Edit
                  </button>
                  <button className="remove-address-btn">Remove</button>
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
