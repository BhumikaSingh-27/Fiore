import React, { useContext } from "react";
import "./UserProfile.css";
import { AddressContext } from "../../contexts/AddressContext";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const { address, addressDispatch } = useContext(AddressContext);

  const navigate = useNavigate();

  const goback = () => {
    navigate("/profile");
  };

  const saveAddress = () => {

    addressDispatch({ type: "ADD_ADDRESS" });
    navigate("/profile");
  };
  
  const updateAddress = () => {
    addressDispatch({ type: "FILL_DUMMY_ADDRESS" });
  };
  return (
    <div className="form-container">
      <div className="form-address">
        <h2>Add new Address</h2>
        <div className="input-body">
          <input
            type="text"
            placeholder="Enter Name"
            value={address.name}
            onChange={(e) =>
              addressDispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter House No, Road, colony"
            value={address.houseNo}
            onChange={(e) =>
              addressDispatch({ type: "SET_HOUSENO", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter City"
            value={address.city}
            onChange={(e) =>
              addressDispatch({ type: "SET_CITY", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter State"
            value={address.state}
            onChange={(e) =>
              addressDispatch({ type: "SET_STATE", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Country"
            value={address.country}
            onChange={(e) =>
              addressDispatch({ type: "SET_COUNTRY", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Postal Code"
            value={address.postalCode}
            onChange={(e) =>
              addressDispatch({ type: "SET_POSTAL", payload: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter Mobile Number"
            value={address.mobile}
            max="10"
            onChange={(e) =>
              addressDispatch({ type: "SET_NUMBER", payload: e.target.value })
            }
          />
        </div>
        <div className="button-div">
          <button className="save-btn" onClick={saveAddress}>
            save
          </button>
          <button className="remove-address-btn" onClick={goback}>
            cancel
          </button>
          <button className="dummy-btn" onClick={updateAddress}>
            Fill with dummy data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
