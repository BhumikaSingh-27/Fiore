import React, { useContext } from "react";
import "./UserProfile.css";
import "../../components/Navbar/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext";
import { toast } from "react-toastify";

const Address = () => {
  const { address, addressDispatch } = useContext(AddressContext);
  const navigate = useNavigate();

  const editTheForm = (add) => {
    navigate("/addressform");
    addressDispatch({
      type: "EDIT_ADDRESS",
      payload: add,
    });
  };
  console.log(address);

  return (
    <div>
      <div className="profile-container">
        <div className="header">
          <h3>My Address</h3>
          <hr />
        </div>

        {address?.addressData?.map(
          (
            { id, name, houseNo, city, state, country, postalCode, mobile },
            index
          ) => {
            return (
              <div key={index} className="address-body">
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
                  <button
                    className="edit-btn"
                    onClick={() =>
                      editTheForm({
                        id,
                        name,
                        houseNo,
                        city,
                        state,
                        country,
                        postalCode,
                        mobile,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="remove-address-btn"
                    onClick={() => {
                      addressDispatch({
                        type: "REMOVE_ADD",
                        payload: id,
                      });
                      toast.error("Address has been removed!", {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "light",
                        autoClose: 1000,
                        className: "toast-align",
                        // theme:"colored"
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          }
        )}

        <NavLink className="not-a-link navlink" to="/addressform">
          <h3 onClick={() => addressDispatch({ type: "RESET_ADDRESS" })}>
            + Add a new Address
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Address;
