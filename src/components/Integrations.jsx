import React, { useState } from "react";
import "./Integration.css";

function Integration() {
  const [email, setEmail] = useState("");
  const [socialApiKey, setSocialApiKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Add your logic for handling form submission here
  console.log("Email:", email);
  console.log("Password:", socialApiKey);

  const [igEmail, setIgEmail] = useState("");
  const [igPassword, setIgPassword] = useState("");

  const handleSubmit_insta = async () => {
    try {
      if (!email || !igEmail || !igPassword) {
        setErrorMessage("Please fill in all fields.");
        return;
      }

      const response = await fetch(
        "http://192.227.234.133/backend/api/instagram-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            ig_email: igEmail,
            ig_password: igPassword,
          }),
        }
      );

      if (!response.ok) {
        setErrorMessage(
          "An error occurred while submitting Instagram details."
        );
        setSuccessMessage("");
        throw new Error(
          `Instagram details submission failed with status ${response.status}`
        );
      }

      setSuccessMessage("Instagram details submitted successfully");
      setErrorMessage("");
      setTimeout(() => {
        handleModalClose();
      }, 2000);
    } catch (error) {
      setErrorMessage("An error occurred while submitting Instagram details.");
      setSuccessMessage("");
      console.error("Error submitting Instagram details:", error);
    }
  };

  const sendFormData = async () => {
    // Basic validation
    if (!email || !socialApiKey) {
      alert("Please fill in all fields.");
      return;
    }

    // Additional validation (you can customize this based on your requirements)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Your API request
    try {
      const response = await fetch(
        "http://192.227.234.133/backend/api/add-social-key",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, socialApiKey }),
        }
      );

      if (response.ok) {
        console.log("API request successful");
        alert("Key successfully added");
        // Handle success, e.g., show a success message
      } else {
        alert("API request failed");
      }
    } catch (error) {
      alert("API request failed");
      console.error("Error sending API request", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData();
  };

  const handleModalClose = () => {
    // Clear form fields
    setEmail("");
    setIgEmail("");
    setIgPassword("");

    // Clear messages
    setErrorMessage("");
    setSuccessMessage("");

    // Close the modal
    const modal = document.getElementById("exampleModal");
    const modalInstance = new window.bootstrap.Modal(modal);
    modalInstance.hide();
  };

  const userEmail = sessionStorage.getItem("userEmail");

  console.log("userEmail", userEmail);
  // Usage

  return (
    <div className=" integration_con">
      <div className="container">
        <h1>Integrations</h1>
        <p>Connect Your social accounts</p>
        <div className="row main_row">
          <form className="form-inline amitform">
            <a href="https://www.ayrshare.com/best-social-media-posting-and-scheduling-apis/">
              <button className="btn btn-primary mb-2" type="button">
                Get Social Api Key
              </button>
            </a>

            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Email
              </label>
              <input
                type="text"
                className="form-control inputPassword2"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>

            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Social Api Key
              </label>
              <input
                type="text"
                className="form-control inputPassword2"
                id="inputPassword2"
                value={socialApiKey}
                onChange={(e) => setSocialApiKey(e.target.value)}
                placeholder="Enter Social Api Key"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>

          <div className="col-12 col-md-3 col-lg-4  pt-4">
            <div className="face_div_x">
              <div className="mb-3 Icon_container">
                <h6>Facebook</h6>
                <span className="left_icon_social">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.5143 4.48595C17.5314 2.50314 14.3229 2.50314 12.3424 4.48595L10.0713 6.75704L11.2666 7.95236L13.5377 5.68126C14.7986 4.42032 16.9268 4.28673 18.3189 5.68126C19.7135 7.07579 19.5799 9.20158 18.3189 10.4625L16.0479 12.7336L17.2455 13.9313L19.5166 11.6602C21.4947 9.67736 21.4947 6.46876 19.5143 4.48595ZM10.465 18.3188C9.2041 19.5797 7.07598 19.7133 5.68379 18.3188C4.28926 16.9242 4.42285 14.7985 5.68379 13.5375L7.95488 11.2664L6.75723 10.0688L4.48613 12.3399C2.50332 14.3227 2.50332 17.5313 4.48613 19.5117C6.46895 21.4922 9.67754 21.4945 11.658 19.5117L13.9291 17.2406L12.7338 16.0453L10.465 18.3188ZM6.10098 4.90782C6.06574 4.87293 6.01815 4.85336 5.96855 4.85336C5.91896 4.85336 5.87137 4.87293 5.83613 4.90782L4.90801 5.83595C4.87311 5.87119 4.85354 5.91878 4.85354 5.96837C4.85354 6.01796 4.87311 6.06555 4.90801 6.10079L17.9018 19.0945C17.9744 19.1672 18.0939 19.1672 18.1666 19.0945L19.0947 18.1664C19.1674 18.0938 19.1674 17.9742 19.0947 17.9016L6.10098 4.90782Z"
                      fill="#FE4C4C"
                    />
                  </svg> */}
                </span>
              </div>
              <div className="mb-4">
                <span className="icons_social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_23_682)">
                      <path
                        d="M90 45C90 20.1473 69.8527 0 45 0C20.1473 0 0 20.147 0 45C0 67.4606 16.4559 86.0776 37.9688 89.4533V58.0078H26.543V45H37.9688V35.0859C37.9688 23.8078 44.6871 17.5781 54.9657 17.5781C59.8894 17.5781 65.0391 18.457 65.0391 18.457V29.5312H59.3648C53.7743 29.5312 52.0312 33.0001 52.0312 36.559V45H64.5117L62.5166 58.0078H52.0312V89.4533C73.5441 86.0776 90 67.461 90 45Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M62.5166 58.0078L64.5117 45H52.0312V36.559C52.0312 32.9998 53.7746 29.5312 59.3648 29.5312H65.0391V18.457C65.0391 18.457 59.8894 17.5781 54.9657 17.5781C44.6871 17.5781 37.9688 23.8078 37.9688 35.0859V45H26.543V58.0078H37.9688V89.4533C40.2948 89.8178 42.6456 90.0006 45 90C47.3544 90.0007 49.7053 89.8179 52.0312 89.4533V58.0078H62.5166Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_23_682">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="">
                <a href="https://app.ayrshare.com/social-accounts?p=intro">
                  <button type="button" className="btn btn-primary">
                    Connect
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-4  pt-4">
            <div className="face_div_x">
              <div className="mb-3 Icon_container">
                <h6>Instagram</h6>
                <span className="left_icon_social"></span>
              </div>
              <div className="mb-4">
                <span className="icons_social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_23_701)">
                      <path
                        d="M68.9062 0H21.0938C9.44399 0 0 9.44399 0 21.0938V68.9062C0 80.556 9.44399 90 21.0938 90H68.9062C80.556 90 90 80.556 90 68.9062V21.0938C90 9.44399 80.556 0 68.9062 0Z"
                        fill="url(#paint0_radial_23_701)"
                      />
                      <path
                        d="M68.9062 0H21.0938C9.44399 0 0 9.44399 0 21.0938V68.9062C0 80.556 9.44399 90 21.0938 90H68.9062C80.556 90 90 80.556 90 68.9062V21.0938C90 9.44399 80.556 0 68.9062 0Z"
                        fill="url(#paint1_radial_23_701)"
                      />
                      <path
                        d="M45.0032 9.84375C35.4554 9.84375 34.257 9.88559 30.5072 10.0561C26.7645 10.2277 24.2096 10.82 21.9744 11.6895C19.6618 12.5873 17.7005 13.7886 15.7465 15.7433C13.7907 17.6977 12.5895 19.659 11.6888 21.9705C10.8169 24.2065 10.2238 26.7623 10.0554 30.5033C9.8877 34.2534 9.84375 35.4523 9.84375 45.0004C9.84375 54.5484 9.88594 55.743 10.0561 59.4928C10.2284 63.2355 10.8207 65.7903 11.6895 68.0256C12.588 70.3382 13.7893 72.2995 15.744 74.2535C17.6977 76.2093 19.659 77.4134 21.9698 78.3112C24.2068 79.1807 26.762 79.773 30.504 79.9446C34.2541 80.1151 35.4516 80.157 44.9989 80.157C54.5477 80.157 55.7423 80.1151 59.4921 79.9446C63.2348 79.773 65.7925 79.1807 68.0295 78.3112C70.341 77.4134 72.2995 76.2093 74.2528 74.2535C76.2085 72.2995 77.4095 70.3382 78.3105 68.0266C79.1747 65.7904 79.7681 63.2348 79.9439 59.4935C80.1123 55.7437 80.1562 54.5484 80.1562 45.0004C80.1562 35.4523 80.1123 34.2541 79.9439 30.504C79.7681 26.7613 79.1747 24.2068 78.3105 21.9716C77.4095 19.659 76.2085 17.6977 74.2528 15.7433C72.2974 13.7879 70.3417 12.5866 68.0273 11.6898C65.7861 10.82 63.2299 10.2273 59.4872 10.0561C55.7371 9.88559 54.5432 9.84375 44.9923 9.84375H45.0032ZM41.8493 16.1793C42.7855 16.1779 43.83 16.1793 45.0032 16.1793C54.3902 16.1793 55.5026 16.213 59.2095 16.3814C62.6372 16.5382 64.4977 17.1109 65.7369 17.5922C67.3777 18.2292 68.5473 18.9911 69.7771 20.2219C71.0075 21.4523 71.769 22.6241 72.4078 24.2648C72.8891 25.5023 73.4625 27.3628 73.6186 30.7905C73.787 34.4967 73.8236 35.6098 73.8236 44.9923C73.8236 54.3748 73.787 55.4882 73.6186 59.194C73.4618 62.6217 72.8891 64.4822 72.4078 65.72C71.7708 67.3608 71.0075 68.529 69.7771 69.7588C68.5466 70.9893 67.3784 71.7507 65.7369 72.3881C64.4991 72.8715 62.6372 73.4428 59.2095 73.5996C55.5033 73.768 54.3902 73.8046 45.0032 73.8046C35.6157 73.8046 34.503 73.768 30.7972 73.5996C27.3695 73.4414 25.509 72.8687 24.2687 72.3874C22.6283 71.75 21.4562 70.9886 20.2257 69.7581C18.9953 68.5276 18.2338 67.3587 17.595 65.7172C17.1137 64.4794 16.5403 62.6189 16.3842 59.1912C16.2158 55.485 16.1821 54.372 16.1821 44.9835C16.1821 35.5954 16.2158 34.4879 16.3842 30.7818C16.541 27.354 17.1137 25.4936 17.595 24.2543C18.2324 22.6136 18.9953 21.4418 20.2261 20.2113C21.4566 18.9809 22.6283 18.219 24.2691 17.5806C25.5083 17.0972 27.3695 16.5259 30.7972 16.3684C34.0404 16.2218 35.2972 16.1779 41.8493 16.1705V16.1793ZM63.7696 22.0166C61.4405 22.0166 59.5508 23.9045 59.5508 26.2339C59.5508 28.563 61.4405 30.4527 63.7696 30.4527C66.0987 30.4527 67.9883 28.563 67.9883 26.2339C67.9883 23.9048 66.0987 22.0152 63.7696 22.0152V22.0166ZM45.0032 26.9459C35.0329 26.9459 26.949 35.0297 26.949 45.0004C26.949 54.971 35.0329 63.051 45.0032 63.051C54.9738 63.051 63.0548 54.971 63.0548 45.0004C63.0548 35.03 54.9731 26.9459 45.0025 26.9459H45.0032ZM45.0032 33.2814C51.4751 33.2814 56.7221 38.5277 56.7221 45.0004C56.7221 51.4723 51.4751 56.7193 45.0032 56.7193C38.5309 56.7193 33.2845 51.4723 33.2845 45.0004C33.2845 38.5277 38.5309 33.2814 45.0032 33.2814Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_23_701"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(23.9062 96.9318) rotate(-90) scale(89.1967 82.96)"
                      >
                        <stop stop-color="#FFDD55" />
                        <stop offset="0.1" stop-color="#FFDD55" />
                        <stop offset="0.5" stop-color="#FF543E" />
                        <stop offset="1" stop-color="#C837AB" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_23_701"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-15.0754 6.48316) rotate(78.681) scale(39.8714 164.351)"
                      >
                        <stop stop-color="#3771C8" />
                        <stop offset="0.128" stop-color="#3771C8" />
                        <stop
                          offset="1"
                          stop-color="#6600FF"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <clipPath id="clip0_23_701">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="">
                {/* <button className=' button_Connect'>conected</button> */}

                {/* Button trigger modal */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Connect
                </button>

                {/* Modal  */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body text-center">
                        <input
                          className="account-input"
                          placeholder="Email"
                          name="email"
                          type="text"
                          required=""
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          className="account-input"
                          placeholder="Enter IG_Emails"
                          name="ig_email"
                          type="text"
                          required=""
                          value={igEmail}
                          onChange={(e) => setIgEmail(e.target.value)}
                        />
                        <input
                          className="account-input"
                          placeholder="Enter IG_Password"
                          name="ig_password"
                          type="text"
                          required=""
                          value={igPassword}
                          onChange={(e) => setIgPassword(e.target.value)}
                        />
                      </div>
                      {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                      )}
                      {successMessage && (
                        <div className="alert alert-success">
                          {successMessage}
                        </div>
                      )}
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            handleSubmit_insta();
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-4  pt-4">
            <div className="face_div_x">
              <div className="mb-3 Icon_container">
                <h6>Twitter</h6>
                {/* <span className='left_icon_social'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.5143 4.48595C17.5314 2.50314 14.3229 2.50314 12.3424 4.48595L10.0713 6.75704L11.2666 7.95236L13.5377 5.68126C14.7986 4.42032 16.9268 4.28673 18.3189 5.68126C19.7135 7.07579 19.5799 9.20158 18.3189 10.4625L16.0479 12.7336L17.2455 13.9313L19.5166 11.6602C21.4947 9.67736 21.4947 6.46876 19.5143 4.48595ZM10.465 18.3188C9.2041 19.5797 7.07598 19.7133 5.68379 18.3188C4.28926 16.9242 4.42285 14.7985 5.68379 13.5375L7.95488 11.2664L6.75723 10.0688L4.48613 12.3399C2.50332 14.3227 2.50332 17.5313 4.48613 19.5117C6.46895 21.4922 9.67754 21.4945 11.658 19.5117L13.9291 17.2406L12.7338 16.0453L10.465 18.3188ZM6.10098 4.90782C6.06574 4.87293 6.01815 4.85336 5.96855 4.85336C5.91896 4.85336 5.87137 4.87293 5.83613 4.90782L4.90801 5.83595C4.87311 5.87119 4.85354 5.91878 4.85354 5.96837C4.85354 6.01796 4.87311 6.06555 4.90801 6.10079L17.9018 19.0945C17.9744 19.1672 18.0939 19.1672 18.1666 19.0945L19.0947 18.1664C19.1674 18.0938 19.1674 17.9742 19.0947 17.9016L6.10098 4.90782Z" fill="#FE4C4C" />
                                    </svg>
                                </span> */}
              </div>
              <div className="mb-4">
                <span className="icons_social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M80.7863 26.64C80.8411 27.4338 80.8411 28.227 80.8411 29.0278C80.8411 53.4263 62.2666 81.5653 28.3036 81.5653V81.5513C18.2701 81.5653 8.44448 78.6914 0 73.2727C1.45898 73.4484 2.925 73.5363 4.39453 73.5398C12.7105 73.5465 20.7872 70.7574 27.327 65.6206C23.4738 65.5478 19.7397 64.2727 16.6468 61.9736C13.5538 59.6745 11.2567 56.4663 10.0765 52.7977C12.8447 53.332 15.6966 53.2216 18.4134 52.4791C9.79875 50.7389 3.60141 43.1705 3.60141 34.3807V34.1466C6.16943 35.5772 9.04363 36.3699 11.982 36.4577C3.86719 31.0352 1.36758 20.2416 6.26695 11.8034C10.9026 17.5076 16.6863 22.1729 23.2424 25.4962C29.7985 28.8196 36.9803 30.7267 44.3215 31.0936C43.5897 27.9427 43.698 24.655 44.6356 21.5591C45.5731 18.4632 47.307 15.6677 49.6638 13.4522C57.1008 6.46102 68.7973 6.81962 75.7877 14.2531C79.923 13.4365 83.8885 11.9204 87.5137 9.76993C86.1352 14.0454 83.2508 17.6747 79.3969 19.9828C83.0571 19.5513 86.6316 18.5711 90 17.0754C87.5221 20.7862 84.4019 24.0252 80.7863 26.64Z"
                      fill="#1D9BF0"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <a href="https://app.ayrshare.com/social-accounts?p=intro">
                  <button type="button" className="btn btn-primary">
                    Connect
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-4 pt-4">
            <div className="face_div_x">
              <div className="mb-3 Icon_container">
                <h6>LinkedIn</h6>
              </div>
              <div className="mb-4">
                <span className="icons_social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M81.5625 2.10938H8.4375C6.77834 2.09249 5.18025 2.73449 3.99388 3.89449C2.80751 5.0545 2.12977 6.63776 2.10938 8.29688V81.7172C2.13346 83.3739 2.81282 84.9535 3.99879 86.1105C5.18476 87.2675 6.78075 87.9075 8.4375 87.8906H81.5625C83.2218 87.9038 84.8188 87.2596 86.0045 86.0989C87.1903 84.9382 87.8684 83.3553 87.8906 81.6961V8.27579C87.861 6.62153 87.1797 5.04582 85.9948 3.89114C84.8098 2.73646 83.217 2.09615 81.5625 2.10938Z"
                      fill="#0076B2"
                    />
                    <path
                      d="M14.8079 34.2633H27.5415V75.2344H14.8079V34.2633ZM21.1782 13.8727C22.6387 13.8727 24.0664 14.3058 25.2806 15.1174C26.4949 15.9289 27.4411 17.0824 27.9997 18.4318C28.5583 19.7813 28.7041 21.266 28.4187 22.6984C28.1332 24.1307 27.4294 25.4462 26.3962 26.4784C25.363 27.5106 24.0468 28.2132 22.6142 28.4973C21.1816 28.7813 19.697 28.6341 18.3481 28.0743C16.9992 27.5144 15.8466 26.567 15.0362 25.352C14.2258 24.137 13.794 22.7089 13.7954 21.2484C13.7973 19.2916 14.5759 17.4156 15.9603 16.0325C17.3446 14.6495 19.2214 13.8726 21.1782 13.8727ZM35.529 34.2633H47.7353V39.8883H47.904C49.6056 36.668 53.754 33.2719 59.9485 33.2719C72.8439 33.2437 75.2345 41.7305 75.2345 52.7344V75.2344H62.5009V55.3008C62.5009 50.5547 62.4165 44.4445 55.8845 44.4445C49.3524 44.4445 48.2415 49.6195 48.2415 54.9914V75.2344H35.529V34.2633Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <a href="https://app.ayrshare.com/social-accounts?p=intro">
                  <button type="button" className="btn btn-primary">
                    Connect
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
