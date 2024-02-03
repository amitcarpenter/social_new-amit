import React, { useState } from "react";
import axios from "axios";
import "../../pages/home/signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if (!name || !email || !password || !confirmPassword) {
        setErrorMessage("Please fill in all fields.");
        setSuccessMessage("");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        setSuccessMessage("");
        return;
      }

      const response = await axios.post("http://192.227.234.133/backend/api/register", {
        fullName: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      if (response.status === 201) {
        setSuccessMessage(response.data.message);
        setErrorMessage("");

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }

      console.log("Signup response:", response.data);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error);
        setSuccessMessage("");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        setErrorMessage("Signup failed. Please try again.");
        setSuccessMessage("");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }

      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <section className="user_us">
        <div className="container">
          <div className="row">
            <div className="sign_main_col col-12 col-lg-6 col-md-6">
              <img className="sign_up" src="asset/Signup.png" alt="" />
            </div>

            <div className="login_main_col col-12 col-lg-4 col-md-6">
              <h1 className="">Sign Up</h1>
              <p className="dont_acunt">
                Already have an account?<a href="/login"> Login</a>
              </p>

              <input
                className="account-inputt"
                placeholder="Full Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required=""
              />

              <input
                className="account-inputt"
                placeholder="Email Address"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required=""
              />

              <input
                className="account-inputt"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />

              <input
                className="account-inputt"
                placeholder="Confirm Password"
                name="pass"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required=""
              />
              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <button className="sign_btn" onClick={handleSignup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

