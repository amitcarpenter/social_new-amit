// Myprofile.js
import React, { useState } from "react";
import "./myprofile.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

  const userEmail = sessionStorage.getItem("userEmail");

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
          email: userEmail,
          currentPassword,
          newPassword,
          confirmPassword: confirmNewPassword,
        }),
      }
    );

    const data = await response.json();


    if (response.ok) {

      alert("Profile updated successfully");
      setCurrentPassword("")
      setNewPassword("")
      setConfirmNewPassword("")


    } else {

      alert(data.error || "Error updating profile");
    }
  };


  const [showPasswordz, setShowPassword] = useState(false);
  const [showPassconq, setSshowPasscon] = useState(false);
  const [showPasscontree, setSshowPasscontre] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setShowPassword(!showPasswordz);
  };

  const togglePasswordVisibilitypas = (e) => {
    e.preventDefault()
    setSshowPasscon(!showPassconq);
  };

  const togglePasswordVisibilitypatree= (e) => {
    e.preventDefault()
    setSshowPasscontre(!showPasscontree);
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
                    disabled
                    placeholder="Enter Current Email"
                    value={userEmail}
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
                    <div className="relative">
                      <input
                        type={showPasswordz ? "text" : "password"}
                        className="form-control"
                        id="currentPassword"
                        placeholder="Enter Current Password"
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                      />
                      <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                      >
                        {showPasswordz ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">

                    <div className="relative">
                      <input
                        type={showPassconq ? "text" : "password"}
                        className="form-control"
                        id="newPassword"
                        placeholder="Enter New Password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                      />
                      <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2"
                        onClick={togglePasswordVisibilitypas}
                      >
                        {showPassconq ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                      </button>
                    </div>

                  </div>
                  <div className="mb-3">

                    <div className="relative">
                      <input
                         type={showPasscontree ? "text" : "password"}
                        className="form-control"
                        id="confirmNewPassword"
                        placeholder="Confirm New Password"
                        value={confirmNewPassword}
                        onChange={handleConfirmNewPasswordChange}
                      />
                      <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2"
                        onClick={togglePasswordVisibilitypatree}
                      >
                        {showPasscontree ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                      </button>
                    </div>
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
