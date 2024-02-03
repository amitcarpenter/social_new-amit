// Myprofile.js
import React, { useState } from "react";
import "./myprofile.css";

function Myprofile() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmNewPasswordChange = (e) =>
    setConfirmNewPassword(e.target.value);

  const handleSaveChanges = async () => {
    // Make API call to update profile
    const response = await fetch(
      "http://192.227.234.133/backend/api/update-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          currentPassword,
          newPassword,
          confirmPassword: confirmNewPassword,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Profile updated successfully
      alert("Profile updated successfully");
    } else {
      // Handle errors and display appropriate messages
      alert(data.error || "Error updating profile");
    }
  };
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="top_div_edit">
            <div className="top">
              <h1>Edit Profile</h1>
              <p className="update_pad">Update your information</p>
            </div>
            <div className="top">
              <button className="btn-Save" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="btn-cancel">Cancel</button>
            </div>
          </div>
          {/* First Column */}
          <div className="col-md-6 first_col">
            {/* Basic Info Form */}
            <h5>Basic Information</h5>
            <div className="mb-5 basic_div">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter Current Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </form>
            </div>

            {/* Change Password Form */}
            <div>
              <h5>SECURITY</h5>
              <form>
                <div className="Password_div">
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      placeholder="Enter Current Password"
                      value={currentPassword}
                      onChange={handleCurrentPasswordChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      placeholder="Enter New Password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmNewPassword"
                      placeholder="Confirm New Password"
                      value={confirmNewPassword}
                      onChange={handleConfirmNewPasswordChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-5  sec_col">
            {/* Profile Avatar Section */}
            <h5>Profile Avatar</h5>
            <div className="mb-5 avtar_div">
              <div className="mb-3">
                <img
                  src="asset/Ellipse.png"
                  alt="Profile Avatar"
                  className="img-fluid profile-image"
                />
              </div>
              <div className="mb-3">
                <button className="btn-secondary">Upload</button>
                <button className="btn-danger">Remove</button>
              </div>
            </div>

            <div className="plan_main_div">
              <h5 className="plans">PLANS</h5>
              <div class="row plan_div">
                <div class="col-4">
                  <p>Current Plan </p>
                  <p>Expiring at </p>
                  <p>Price </p>
                </div>
                <div class="col-2">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div class="col-4">
                  <p>Basic</p>
                  <p>29/10/2023</p>
                  <p>₹399</p>
                </div>
                <div className="btn_plan">
                  <button className="btn-Upgrade">Upgrade Plan</button>
                  <button className="btn-Renew">Renew Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
