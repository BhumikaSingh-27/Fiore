import React from "react";
import "./UserProfile.css";

const Profile = () => {
  return (
    <div>
      <div className="profile-container">
        <h3>Profile Details</h3>

        <hr />
        <div>
          <p>
            <b>FullName</b>
          </p>
        </div>
        <button className="add-btn">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
