import React, { useState } from "react";
import axios from "axios";
import "../../pages/home/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

      const response = await axios.post("https://socialize-dev.heytech.vision/backend_api/api/register", {
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
          navigate("/login");
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





  const [showPassword, setShowPassword] = useState(false);
  const [showPasscon, setSshowPasscon] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const togglePasswordVisibilitypas = () => {
    setSshowPasscon(!showPasscon);
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
                Already have an account?<Link to="/login"> Login</Link>
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


              <div className="relative">
                <input
                  className=""
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
                />
                <button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                </button>

              </div>

              <div className="relative">
                <input
                  className=""
                  placeholder="Confirm Password"
                  name="password"
                  type={showPasscon ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required=""
                />
                <button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2"
                  onClick={togglePasswordVisibilitypas}
                >
                  {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                </button>

              </div>


              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <button className="sign_btn " onClick={handleSignup}>
                Sign Up
              </button>
              <span className=" items-center justify-center cursor-pointer py-2">
                By signing up you accept the <Link to="/policy/terms-and-services" className="hover:underline text-blue-600 text-sm px-1"> Terms </Link> and
                <Link to="/policy/privacy-policy" className="text-blue-600  hover:underline text-sm pl-1">
                  Privacy Policy.
                </Link>

              </span>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

