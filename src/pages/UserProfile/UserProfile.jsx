import React, { useContext } from "react";
import Profile from "./Profile";
import Address from "./Address";
import { AddressContext } from "../../contexts/AddressContext";

const UserProfile = () => {
  const { address } = useContext(AddressContext);
  console.log("save", address.addressData);
  return (
    <div className="profile-body">
      <h1>Account</h1>
      <div className="align-profile">
        <div>
          <Profile />
        </div>
        <div>
          <Address />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
