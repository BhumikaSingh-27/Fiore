import React, { useContext } from "react";
import "./UserProfile.css";
import { DataContext } from "../../contexts/DataContext";
import { AddressContext } from "../../contexts/AddressContext";

const Profile = () => {
  const { userLogOut } = useContext(DataContext);
  const { userInfo } = useContext(AddressContext);

  return (
    <div>
      <div className="profile-container">
        <h3>Profile Details</h3>
        <hr />
        <div className="align-center">
          <div style={{ textAlign: "start" }}>
            <p>
              <b>full name:</b> {userInfo.firstName} {userInfo.lastName}
              <br />
              <b>email:</b> {userInfo.email}
            </p>
          </div>
        </div>
        <button className="add-btn" onClick={() => userLogOut("/profile")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
