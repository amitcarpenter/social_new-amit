import React, { useRef, useState, useEffect } from "react";
import "./editsedule.css";
import { Dropdown as SemanticDropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import TimePicker from "react-time-picker";
import { Link, useParams } from "react-router-dom";

function Editsedule() {
  const fileInputRef = useRef(null);
  const { id } = useParams();

  const [arrivalDate, setArrivalDate] = useState("");
  const [time, setTime] = useState("");
  const [socialMediaArray, setSocialMediaArray] = useState([]);
  const [imagePost, setImagePost] = useState("");
  const [postContent, setPostContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dropdownOptions = [
    {
      key: "1",
      text: (
        <span>
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </span>
      ),
      value: "facebook",
    },
    {
      key: "2",
      text: (
        <span>
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#377DFF" }} />{" "}
          Twitter
        </span>
      ),
      value: "twitter",
    },
    {
      key: "3",
      text: (
        <span>
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </span>
      ),
      value: "instagram",
    },
    {
      key: "4",
      text: (
        <span>
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#377DFF" }} />{" "}
          Linkdin
        </span>
      ),
      value: "linkedin",
    },
  ];


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    console.log("File Name:", selectedFile);
    setImagePost(selectedFile);
  };

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
    console.log(event.target.value);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    console.log(newTime);
    console.log(time);
  };

  const handleSocialMediaChange = (selectedOptions) => {
    if (Array.isArray(selectedOptions)) {
      console.log(selectedOptions);
      setSocialMediaArray(selectedOptions);
    } else {
      console.error("Selected options is not an array:", selectedOptions);
    }
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const userEmail = sessionStorage.getItem("userEmail");

  const handleScheduleButtonClick = () => {

    const formData = {
      social_media_array: socialMediaArray,
      image_post: imagePost,
      post_content: postContent,
      email: userEmail,
      schedule_time: `${arrivalDate} ${time}`,
    };

    console.log(formData);

    // Your API call function
    const schedulePost = async () => {
      try {
        const response = await fetch(
          `http://192.227.234.133/backend/api/edit-scheduled-post/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          setErrorMessage("Failed to edit  post");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
          throw new Error("Failed to edit post");
        }

        const data = await response.json();
        console.log("Post Edit successfully:", data.message);
        setSuccessMessage(`Post Edit successfully: ${data.message}`);
        setErrorMessage("");
        // Save email in sessionStorage
        setTimeout(() => {
          // setArrivalDate("");
          // setTime("");
          // setSocialMediaArray([]);
          // setImagePost("");
          // setPostContent("");
          setSuccessMessage("");
        }, 4000);
      } catch (error) {
        // setErrorMessage(error.response.data.error);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        console.error("Error scheduling post:", error.message);
      }
    };

    // Call the API function
    schedulePost();
  };

  useEffect(() => {
    const getPostById = async () => {
      try {
        const response = await fetch(
          `http://192.227.234.133/backend/api/get-scheduled-post/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        const postData = await response.json();
     
        setArrivalDate(postData.schedule_time.split(" ")[0]);
        setTime(postData.schedule_time.split(" ")[1]);
        setSocialMediaArray(postData.social_media_array);
        setImagePost(postData.image_post);
        setPostContent(postData.post_content);

        console.log(arrivalDate, "arrivalDate");
        console.log(time, "time");
        console.log("Post data:", postData);
      } catch (error) {
        console.error("Error fetching post:", error.message);
      }
    };

    getPostById();
  }, [id]);

  return (
    <div className=" integration_con">
      <div className=" container">
        <Link to="/dashboard" className="text-center back_btndash">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Your Dashboard
        </Link>

        <div className="row main_row">
          <div className="bg-white rounded-2xl  p-6">
            <h6 className="text-center text-black py-2 text-xl">
              Schedule a Post
            </h6>

            <div className="max-w-[700px] mx-auto border rounded py-1 relative ">
              <div className="row col-12 multiselect">
                <div className="inline ">
                  <SemanticDropdown
                    placeholder="Select Topics"
                    fluid
                    multiple
                    selection
                    options={dropdownOptions}
                    onChange={(event, data) =>
                      handleSocialMediaChange(data.value)
                    }
                    value={socialMediaArray}
                  />
                </div>
              </div>

              <div>
                <form>
                  <div className="w-full border-t-2 border-t-gray-200 rounded-lg bg-gray-50  mt-2">
                    <div className="px-4 py-2 bg-white ">
                      <label htmlFor="comment" className="sr-only">
                        Your comment
                      </label>
                      <textarea
                        id="comment"
                        rows="7"
                        className="w-full  focus:outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:placeholder-gray-400"
                        placeholder="Write a comment..."
                        required
                        onChange={handlePostContentChange}
                        value={postContent}
                      ></textarea>
                    </div>

                    <div className="flex gap-2 items-center bg-white px-4">
                      <div>
                        <i className="smili_emoji">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                          >
                            <rect width="34" height="34" fill="white"></rect>
                            <circle
                              cx="17"
                              cy="17"
                              r="12"
                              fill="black"
                            ></circle>
                            <path
                              d="M16.9999 2.83325C9.16575 2.83325 2.83325 9.20825 2.83325 16.9999C2.83325 20.7572 4.32581 24.3605 6.98257 27.0173C8.29807 28.3328 9.85979 29.3763 11.5786 30.0882C13.2973 30.8002 15.1395 31.1666 16.9999 31.1666C20.7572 31.1666 24.3605 29.674 27.0173 27.0173C29.674 24.3605 31.1666 20.7572 31.1666 16.9999C31.1666 15.1395 30.8002 13.2973 30.0882 11.5786C29.3763 9.85979 28.3328 8.29807 27.0173 6.98257C25.7018 5.66708 24.14 4.62357 22.4213 3.91163C20.7025 3.19968 18.8603 2.83325 16.9999 2.83325ZM21.9583 11.3333C22.5218 11.3333 23.0623 11.5571 23.4609 11.9557C23.8594 12.3542 24.0833 12.8947 24.0833 13.4583C24.0833 14.0218 23.8594 14.5623 23.4609 14.9609C23.0623 15.3594 22.5218 15.5833 21.9583 15.5833C21.3947 15.5833 20.8542 15.3594 20.4557 14.9609C20.0571 14.5623 19.8333 14.0218 19.8333 13.4583C19.8333 12.8947 20.0571 12.3542 20.4557 11.9557C20.8542 11.5571 21.3947 11.3333 21.9583 11.3333ZM12.0416 11.3333C12.6052 11.3333 13.1457 11.5571 13.5442 11.9557C13.9427 12.3542 14.1666 12.8947 14.1666 13.4583C14.1666 14.0218 13.9427 14.5623 13.5442 14.9609C13.1457 15.3594 12.6052 15.5833 12.0416 15.5833C11.478 15.5833 10.9375 15.3594 10.539 14.9609C10.1405 14.5623 9.91659 14.0218 9.91659 13.4583C9.91659 12.8947 10.1405 12.3542 10.539 11.9557C10.9375 11.5571 11.478 11.3333 12.0416 11.3333ZM16.9999 24.7916C13.6991 24.7916 10.8941 22.7233 9.76075 19.8333H24.2391C23.0916 22.7233 20.3008 24.7916 16.9999 24.7916Z"
                              fill="#FFB814"
                            ></path>
                          </svg>
                        </i>
                      </div>
                      <div className="inline-block p-1">
                        <label htmlFor="file-input" className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="27"
                            viewBox="0 0 33 27"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_23_746)">
                              <path
                                d="M31.35 0H8.25C7.81239 0 7.39271 0.17779 7.08327 0.494257C6.77384 0.810725 6.6 1.23995 6.6 1.6875V6.75H14.85V3.375H24.75V20.25H31.35C31.7876 20.25 32.2073 20.0722 32.5167 19.7557C32.8262 19.4393 33 19.0101 33 18.5625V1.6875C33 1.23995 32.8262 0.810725 32.5167 0.494257C32.2073 0.17779 31.7876 0 31.35 0ZM11.9625 5.43164C11.9625 5.55751 11.9136 5.67823 11.8266 5.76724C11.7396 5.85625 11.6215 5.90625 11.4984 5.90625H9.95156C9.82849 5.90625 9.71045 5.85625 9.62342 5.76724C9.53639 5.67823 9.4875 5.55751 9.4875 5.43164V3.84961C9.4875 3.72374 9.53639 3.60302 9.62342 3.51401C9.71045 3.425 9.82849 3.375 9.95156 3.375H11.4984C11.6215 3.375 11.7396 3.425 11.8266 3.51401C11.9136 3.60302 11.9625 3.72374 11.9625 3.84961V5.43164ZM30.1125 16.4004C30.1125 16.5263 30.0636 16.647 29.9766 16.736C29.8895 16.825 29.7715 16.875 29.6484 16.875H28.1016C27.9785 16.875 27.8604 16.825 27.7734 16.736C27.6864 16.647 27.6375 16.5263 27.6375 16.4004V14.8184C27.6375 14.6925 27.6864 14.5718 27.7734 14.4828C27.8604 14.3938 27.9785 14.3438 28.1016 14.3438H29.6484C29.7715 14.3438 29.8895 14.3938 29.9766 14.4828C30.0636 14.5718 30.1125 14.6925 30.1125 14.8184V16.4004ZM30.1125 10.916C30.1125 11.0419 30.0636 11.1626 29.9766 11.2516C29.8895 11.3406 29.7715 11.3906 29.6484 11.3906H28.1016C27.9785 11.3906 27.8604 11.3406 27.7734 11.2516C27.6864 11.1626 27.6375 11.0419 27.6375 10.916V9.33398C27.6375 9.20811 27.6864 9.08739 27.7734 8.99838C27.8604 8.90938 27.9785 8.85938 28.1016 8.85938H29.6484C29.7715 8.85938 29.8895 8.90938 29.9766 8.99838C30.0636 9.08739 30.1125 9.20811 30.1125 9.33398V10.916ZM30.1125 5.43164C30.1125 5.55751 30.0636 5.67823 29.9766 5.76724C29.8895 5.85625 29.7715 5.90625 29.6484 5.90625H28.1016C27.9785 5.90625 27.8604 5.85625 27.7734 5.76724C27.6864 5.67823 27.6375 5.55751 27.6375 5.43164V3.84961C27.6375 3.72374 27.6864 3.60302 27.7734 3.51401C27.8604 3.425 27.9785 3.375 28.1016 3.375H29.6484C29.7715 3.375 29.8895 3.425 29.9766 3.51401C30.0636 3.60302 30.1125 3.72374 30.1125 3.84961V5.43164ZM21.45 8.4375H1.65C1.21239 8.4375 0.792709 8.61529 0.483274 8.93176C0.173839 9.24823 0 9.67745 0 10.125L0 25.3125C0 25.7601 0.173839 26.1893 0.483274 26.5057C0.792709 26.8222 1.21239 27 1.65 27H21.45C21.8876 27 22.3073 26.8222 22.6167 26.5057C22.9262 26.1893 23.1 25.7601 23.1 25.3125V10.125C23.1 9.67745 22.9262 9.24823 22.6167 8.93176C22.3073 8.61529 21.8876 8.4375 21.45 8.4375ZM4.95 11.8125C5.27634 11.8125 5.59535 11.9115 5.86669 12.0969C6.13803 12.2823 6.34952 12.5459 6.4744 12.8542C6.59929 13.1626 6.63196 13.5019 6.5683 13.8292C6.50463 14.1566 6.34748 14.4572 6.11673 14.6932C5.88597 14.9292 5.59197 15.09 5.2719 15.1551C4.95183 15.2202 4.62007 15.1868 4.31857 15.059C4.01707 14.9313 3.75938 14.715 3.57808 14.4375C3.39677 14.16 3.3 13.8338 3.3 13.5C3.3 13.0524 3.47384 12.6232 3.78327 12.3068C4.09271 11.9903 4.51239 11.8125 4.95 11.8125ZM19.8 23.625H3.3V21.9375L6.6 18.5625L8.25 20.25L14.85 13.5L19.8 18.5625V23.625Z"
                                fill="#04B800"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_23_746">
                                <rect width="33" height="27" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          ref={fileInputRef}
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>

                      <div className=" inline-block  p-1 ">
                        <input
                          type="file"
                          id="file-input"
                          ref={fileInputRef}
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div className="border-t-2 py-2 flex flex-col sm:flex-row text-center justify-center gap-4">
                      <div className="inline-flex gap-1 items-center justify-center px-3 border">
                        <span className="calender">
                          <input
                            type="date"
                            id="arrivalDate"
                            name="arrivalDate"
                            value={arrivalDate}
                            onChange={handleArrivalDateChange}
                            className="border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          />
                        </span>
                      </div>

                      <div className="inline-block">
                        <TimePicker
                          onChange={handleTimeChange}
                          value={time}
                          format="hh:mm a"
                          clearIcon={null}
                          disableClock={true}
                          className="border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <div className="text-center py-3">
              <button
                className="py-2 px-16 text-white bg-[#377DFF]"
                onClick={handleScheduleButtonClick}
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editsedule;
