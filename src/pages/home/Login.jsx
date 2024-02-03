import React, { useState } from "react";
import axios from "axios";
import "../../pages/home/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.227.234.133/backend/api/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setErrorMessage("");
        // Save email in sessionStorage
        sessionStorage.setItem("userEmail", email);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);

        console.log("Login successful:", response.data);
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        setErrorMessage("Login failed. Please try again.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }

      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <section className="user_user">
        <div className="container">
          <div className="row">
            <div className="login_main_col col-12 col-lg-6 col-md-6">
              <img src="asset/login.png" alt="" />
            </div>
            <div className="login_main_col col-12 col-lg-4 col-md-6">
              <h1 className="">Login</h1>
              <p className="dont_acunt">
                Don't have an account?<a href="signup"> Sign Up</a>
              </p>

              <input
                className="account-inputll"
                placeholder="Email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required=""
              />

              <input
                className="account-inputll"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />

              <p className="rem_me">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="32"
                  viewBox="0 0 62 32"
                  fill="none"
                >
                  <rect
                    y="3.05176e-05"
                    width="62"
                    height="32"
                    rx="16"
                    fill="#D9D9D9"
                  />
                  <circle cx="16" cy="16" r="13" fill="white" />
                </svg>{" "}
                Remember me
              </p>

              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <button className="login_btn1" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
