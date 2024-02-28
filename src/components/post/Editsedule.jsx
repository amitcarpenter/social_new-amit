import React, { useEffect, useState } from "react";
// import "./Sedule.css";
import { Dropdown as SemanticDropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaImage } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import TimePicker from "react-time-picker";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Sedule() {

  const { id } = useParams();
  // console.log(id, "____id")

  const [arrivalDate, setArrivalDate] = useState(null);
  const [time, setTime] = useState(null);
  const [socialMediaArray, setSocialMediaArray] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

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

  ];

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleSocialMediaChange = (event, data) => {
    setSocialMediaArray(data.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  let formattedDateTime = null;
  if (arrivalDate) {
    if (time) {
      const formattedDate = new Date(arrivalDate);
      const formattedTime = time.substring(0, 5);
      formattedDateTime = `${formattedDate.toISOString().split('T')[0]}T${formattedTime}:00.000+05:30`;
    }
  }



  const userEmail = sessionStorage.getItem("userEmail");

  const handleScheduleButtonClick = async (event) => {
    const formData = new FormData();
    formData.append('imagePost', selectedFile);
    formData.append('social_media_array', JSON.stringify(socialMediaArray));
    formData.append('post_content', postContent);
    formData.append('email', userEmail);
    formData.append('schedule_time', formattedDateTime);

    try {
      const response = await axios.put(
        `https://socialize-dev.heytech.vision/backend_api/api/edit-scheduled-post/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setSuccessMessage(`Post Edit successfully`);
      setArrivalDate(null);
      setTime(null);
      setSelectedFile(null);
      setSocialMediaArray([]);
      setErrorMessage("");
      setPostContent("");

      document.getElementById("file-input").value = "";

    } catch (error) {
      setErrorMessage("Failed to schedule post");
      console.error("Error scheduling post:", error);
    }
  };

  const getPostById = async (id) => {
    try {
      const response = await axios.get(`https://socialize-dev.heytech.vision/backend_api/api/get-scheduled-post/${id}`);

      if (!response.data) {
        throw new Error("Failed to fetch post");
      }
      const postData = response.data;

      // console.log(response.data, "---ediat data")

      const arrivalDate = new Date(postData.schedule_time);

      const date = arrivalDate.toISOString().split('T')[0];
      const time = arrivalDate.toTimeString().split(' ')[0];

      setArrivalDate(date);
      setTime(time);
      setSocialMediaArray(postData.social_media_array);
      setSelectedFile(postData.image_post);
      setPostContent(postData.post_content);

    } catch (error) {
      console.error("Error fetching post:", error.message);
    }
  };



  useEffect(() => {
    getPostById(id)
  }, [id])

  return (
    <div className="integration_con">
      <div className="container">
        <h1>Schedule</h1>
        <p>Automate your social media content. Keep track of all your scheduled posts in one place.</p>
        <div className="row main_row">
          <div className="bg-white rounded-2xl p-6">
            <h6 className="text-center text-black py-2 text-xl">Schedule a Post</h6>
            <div className="max-w-[700px] mx-auto border rounded py-1 relative">
              <div className="row col-12 multiselect">
                <div className="inline">
                  <SemanticDropdown
                    placeholder="Select Social Media"
                    fluid
                    multiple
                    selection
                    options={dropdownOptions}
                    onChange={handleSocialMediaChange}
                    value={socialMediaArray}
                  />
                </div>
              </div>
              <div>
                <form>
                  <div className="w-full border-t-2 border-t-gray-200 rounded-lg bg-gray-50 mt-2">
                    <div className="px-4 py-2 bg-white">
                      <textarea
                        id="comment"
                        rows="7"
                        className="w-full focus:outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:placeholder-gray-400"
                        placeholder="Write a comment..."
                        required
                        value={postContent}
                        onChange={handlePostContentChange}
                      ></textarea>
                    </div>
                    </div>

                    <div className="flex gap-2 items-center bg-white px-4"><div className="flex gap-2 items-center bg-white px-4">
                      <MdEmojiEmotions className="w-10 h-10" color="#FFB814" />
                      <div className="inline-block p-1">
                        <label htmlFor="file-input" className="cursor-pointer flex items-center">
                          <FaImage className="w-10 h-10" color="#04B800" />
                          <input
                            type="file"
                            name="post_image"
                            id="file-input"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />

                          {selectedFile ? `${selectedFile.name}` : "Image size should be less then 500 X 500  "}
                        </label>
                      </div>
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
                          disabled={true} // Set disabled prop to true
                          className="border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                      </div>
                    </div>
                </form>
              </div>
            </div>

            {successMessage && (
              <p className="success-message text-center">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="error-message text-center">{errorMessage}</p>
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

export default Sedule;
