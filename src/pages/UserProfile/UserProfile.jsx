import React, { useContext, useEffect } from "react";
import Profile from "./Profile";
import Address from "./Address";
import { AddressContext } from "../../contexts/AddressContext";

const UserProfile = () => {
  const { setCheckoutAddress } = useContext(AddressContext);

  useEffect(() => {
    setCheckoutAddress("Select the address to deliver the product");
  }, []);
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
