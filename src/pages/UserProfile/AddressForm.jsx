import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import "./UserProfile.css";
import { AddressContext } from "../../contexts/AddressContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddressForm = () => {
  const {
    newAddress,
    setNewAddress,
    setUserAdd,
    userAdd,
    userInfo,
    updateAddress,
  } = useContext(AddressContext);

  const navigate = useNavigate();

  const goback = () => {
    navigate("/profile");
  };

  const saveAddress = (addressId) => {
    if (Object.keys(userAdd).includes(userInfo.email)) {
      const add = userAdd[userInfo.email];
      console.log("add id edit", add, addressId);
      if (addressId) {
        const upadd = add?.map((addressObj) => {
          if (addressObj.id === addressId) {
            return { ...newAddress };
          } else {
            return addressObj;
          }
        });
        setUserAdd((userAdd) => ({ ...userAdd, [userInfo.email]: upadd }));
        toast.success("Address is updated!", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "light",
          autoClose: 1000,
          className: "toast-align",
          // theme:"colored"
        });
      } else {
        setUserAdd((userAdd) => ({
          ...userAdd,
          [userInfo.email]: [...add, { ...newAddress, id: uuid() }],
        }));
        toast.success("New Address is Added", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "light",
          autoClose: 1000,
          className: "toast-align",
          // theme:"colored"
        });
      }
    } else {
      setUserAdd((userAdd) => ({
        ...userAdd,
        [userInfo.email]: [{ ...newAddress, id: uuid() }],
      }));
      toast.success("New Address is Added", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 1000,
        className: "toast-align",
        // theme:"colored"
      });
    }
    navigate("/profile");
  };

  return (
    <div className="form-container">
      <div className="form-address">
        <h2>Add new Address</h2>
        <div className="input-body">
          <input
            type="text"
            placeholder="Enter Name"
            value={newAddress.name}
            onChange={(e) =>
              setNewAddress({ ...newAddress, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter House No, Road, colony"
            value={newAddress.houseNo}
            onChange={(e) =>
              setNewAddress({ ...newAddress, houseNo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter City"
            value={newAddress.city}
            onChange={(e) =>
              setNewAddress({ ...newAddress, city: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter State"
            value={newAddress.state}
            onChange={(e) =>
              setNewAddress({ ...newAddress, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Country"
            value={newAddress.country}
            onChange={(e) =>
              setNewAddress({ ...newAddress, country: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Postal Code"
            value={newAddress.postalCode}
            onChange={(e) =>
              setNewAddress({ ...newAddress, postalCode: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter Mobile Number"
            value={newAddress.mobile}
            max="10"
            onChange={(e) =>
              setNewAddress({ ...newAddress, mobile: e.target.value })
            }
          />
        </div>
        <div className="button-div">
          <button
            className="save-btn"
            onClick={() => saveAddress(newAddress.id)}
          >
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
