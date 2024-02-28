import React, { useState, useEffect } from "react";
import axios from "axios";
// import DatePicker from 'react-datepicker'; // Import the React date picker
// import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for the React date picker
import "./Post.css";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

function Post() {
  const [posts, setPosts] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const userEmail = sessionStorage.getItem('userEmail');

  const fetchScheduledPosts = async (email) => {
    try {
      const response = await axios.post('https://socialize-dev.heytech.vision/backend_api/api/get-scheduled-posts', {
        email: email
      });

      if (!response.data) {
        throw new Error('No data received from the server');
      }

      setPosts(response.data);
      console.log(response.data, "_____post data")
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  useEffect(() => {
    fetchScheduledPosts(userEmail);
  }, [userEmail]);



  const handlevalue = (value) => {
    if (value && value.length === 2) {
      setStartDate(value[0].startOf('day'));
      setEndDate(value[1].endOf('day'));
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const filterPostsByDateRange = () => {
    if (!startDate || !endDate) return posts;

    return posts.filter(post => {
      const postDate = new Date(post.schedule_time);
      return postDate >= startDate && postDate <= endDate;
    });
  };


  const filteredPosts = filterPostsByDateRange();





  const renderIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_266_342)">
              <path
                d="M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37253 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6575 4.6875C15.9705 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.3398 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z"
                fill="#1877F2"
              />
              <path
                d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_266_342">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.543 7.10403C21.5576 7.31571 21.5576 7.52721 21.5576 7.74078C21.5576 14.247 16.6044 21.7508 7.54763 21.7508V21.747C4.87202 21.7508 2.25186 20.9844 0 19.5394C0.389063 19.5863 0.78 19.6097 1.17188 19.6107C3.38946 19.6124 5.54326 18.8687 7.28719 17.4988C6.25968 17.4794 5.26393 17.1394 4.43914 16.5263C3.61436 15.9132 3.00178 15.0577 2.68706 14.0794C3.42525 14.2219 4.18575 14.1925 4.91025 13.9945C2.613 13.5304 0.960375 11.5122 0.960375 9.16821V9.10578C1.64518 9.48728 2.41163 9.69865 3.19519 9.72209C1.03125 8.27609 0.364688 5.39778 1.67119 3.14759C2.90736 4.66871 4.44967 5.91279 6.19797 6.79902C7.94626 7.68525 9.86142 8.1938 11.8191 8.29165C11.6239 7.45142 11.6528 6.57469 11.9028 5.74912C12.1528 4.92355 12.6152 4.17809 13.2437 3.58728C15.2269 1.72296 18.3459 1.81859 20.2101 3.80084C21.3128 3.5831 22.3703 3.1788 23.337 2.60534C22.9694 3.74547 22.2002 4.71328 21.1725 5.32878C22.1486 5.21369 23.1017 4.95233 24 4.55346C23.3392 5.54302 22.5072 6.40674 21.543 7.10403Z"
              fill="#1D9BF0"
            />
          </svg>
        );
      case "instagram":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_266_350)">
              <path
                d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
                fill="url(#paint0_radial_266_350)"
              />
              <path
                d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
                fill="url(#paint1_radial_266_350)"
              />
              <path
                d="M12.0008 2.625C9.45478 2.625 9.13519 2.63616 8.13525 2.68163C7.13719 2.72738 6.45591 2.88534 5.85984 3.11719C5.24316 3.35662 4.72013 3.67697 4.19906 4.19822C3.67753 4.71937 3.35719 5.24241 3.117 5.85881C2.8845 6.45506 2.72634 7.13662 2.68144 8.13422C2.63672 9.13425 2.625 9.45394 2.625 12.0001C2.625 14.5463 2.63625 14.8648 2.68163 15.8647C2.72756 16.8628 2.88553 17.5441 3.11719 18.1402C3.35681 18.7568 3.67716 19.2799 4.19841 19.8009C4.71938 20.3225 5.24241 20.6436 5.85862 20.883C6.45516 21.1148 7.13653 21.2728 8.13441 21.3186C9.13444 21.364 9.45375 21.3752 11.9997 21.3752C14.5461 21.3752 14.8646 21.364 15.8646 21.3186C16.8626 21.2728 17.5447 21.1148 18.1412 20.883C18.7576 20.6436 19.2799 20.3225 19.8007 19.8009C20.3223 19.2799 20.6425 18.7568 20.8828 18.1404C21.1133 17.5441 21.2715 16.8626 21.3184 15.8649C21.3633 14.865 21.375 14.5463 21.375 12.0001C21.375 9.45394 21.3633 9.13444 21.3184 8.13441C21.2715 7.13634 21.1133 6.45516 20.8828 5.85909C20.6425 5.24241 20.3223 4.71937 19.8007 4.19822C19.2793 3.67678 18.7578 3.35644 18.1406 3.11728C17.543 2.88534 16.8613 2.72728 15.8632 2.68163C14.8632 2.63616 14.5448 2.625 11.9979 2.625H12.0008ZM11.1598 4.31447C11.4095 4.31409 11.688 4.31447 12.0008 4.31447C14.5041 4.31447 14.8007 4.32347 15.7892 4.36838C16.7032 4.41019 17.1994 4.56291 17.5298 4.69125C17.9674 4.86112 18.2793 5.06428 18.6072 5.3925C18.9353 5.72062 19.1384 6.03309 19.3088 6.47062C19.4371 6.80062 19.59 7.29675 19.6316 8.21081C19.6765 9.19913 19.6863 9.49594 19.6863 11.9979C19.6863 14.4999 19.6765 14.7968 19.6316 15.7851C19.5898 16.6991 19.4371 17.1952 19.3088 17.5253C19.1389 17.9629 18.9353 18.2744 18.6072 18.6023C18.2791 18.9305 17.9676 19.1335 17.5298 19.3035C17.1997 19.4324 16.7032 19.5848 15.7892 19.6266C14.8009 19.6715 14.5041 19.6812 12.0008 19.6812C9.49753 19.6812 9.20081 19.6715 8.21259 19.6266C7.29853 19.5844 6.80241 19.4317 6.47166 19.3033C6.03422 19.1333 5.72166 18.9303 5.39353 18.6022C5.06541 18.274 4.86234 17.9623 4.692 17.5246C4.56366 17.1945 4.41075 16.6984 4.36913 15.7843C4.32422 14.796 4.31522 14.4992 4.31522 11.9956C4.31522 9.49209 4.32422 9.19678 4.36913 8.20847C4.41094 7.29441 4.56366 6.79828 4.692 6.46781C4.86197 6.03028 5.06541 5.71781 5.39363 5.38969C5.72175 5.06156 6.03422 4.85841 6.47175 4.68816C6.80222 4.55925 7.29853 4.40691 8.21259 4.36491C9.07744 4.32581 9.41259 4.31409 11.1598 4.31212V4.31447ZM17.0052 5.87109C16.3841 5.87109 15.8802 6.37453 15.8802 6.99572C15.8802 7.61681 16.3841 8.12072 17.0052 8.12072C17.6263 8.12072 18.1302 7.61681 18.1302 6.99572C18.1302 6.37463 17.6263 5.87072 17.0052 5.87072V5.87109ZM12.0008 7.18556C9.34209 7.18556 7.18641 9.34125 7.18641 12.0001C7.18641 14.6589 9.34209 16.8136 12.0008 16.8136C14.6597 16.8136 16.8146 14.6589 16.8146 12.0001C16.8146 9.34134 14.6595 7.18556 12.0007 7.18556H12.0008ZM12.0008 8.87503C13.7267 8.87503 15.1259 10.2741 15.1259 12.0001C15.1259 13.7259 13.7267 15.1252 12.0008 15.1252C10.2749 15.1252 8.87588 13.7259 8.87588 12.0001C8.87588 10.2741 10.2749 8.87503 12.0008 8.87503Z"
                fill="white"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_266_350"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(6.375 25.8485) rotate(-90) scale(23.7858 22.1227)"
              >
                <stop stop-color="#FFDD55" />
                <stop offset="0.1" stop-color="#FFDD55" />
                <stop offset="0.5" stop-color="#FF543E" />
                <stop offset="1" stop-color="#C837AB" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_266_350"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-4.02009 1.72884) rotate(78.681) scale(10.6324 43.827)"
              >
                <stop stop-color="#3771C8" />
                <stop offset="0.128" stop-color="#3771C8" />
                <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
              </radialGradient>
              <clipPath id="clip0_266_350">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_266_347)">
              <path
                d="M21.75 0.562526H2.25C1.80756 0.558023 1.3814 0.729221 1.06504 1.03856C0.74867 1.34789 0.56794 1.77009 0.5625 2.21253V21.7913C0.568923 22.2331 0.750087 22.6543 1.06634 22.9628C1.3826 23.2714 1.8082 23.442 2.25 23.4375H21.75C22.1925 23.441 22.6183 23.2693 22.9345 22.9597C23.2507 22.6502 23.4316 22.2281 23.4375 21.7857V2.2069C23.4296 1.76577 23.2479 1.34558 22.9319 1.03766C22.6159 0.729747 22.1912 0.558997 21.75 0.562526Z"
                fill="#0076B2"
              />
              <path
                d="M3.94871 9.1369H7.34434V20.0625H3.94871V9.1369ZM5.64746 3.6994C6.03692 3.6994 6.41764 3.81491 6.74144 4.03133C7.06523 4.24774 7.31757 4.55533 7.46653 4.91518C7.61548 5.27503 7.65436 5.67097 7.57824 6.05293C7.50213 6.43488 7.31444 6.78567 7.03891 7.06093C6.76339 7.33619 6.41242 7.52355 6.0304 7.5993C5.64837 7.67505 5.25246 7.6358 4.89275 7.4865C4.53304 7.3372 4.2257 7.08457 4.00959 6.76057C3.79349 6.43656 3.67834 6.05574 3.67871 5.66628C3.67921 5.14446 3.88685 4.64418 4.25601 4.27537C4.62517 3.90657 5.12564 3.6994 5.64746 3.6994ZM9.47434 9.1369H12.7293V10.6369H12.7743C13.2281 9.77815 14.3343 8.87253 15.9862 8.87253C19.425 8.86503 20.0625 11.1282 20.0625 14.0625V20.0625H16.6668V14.7469C16.6668 13.4813 16.6443 11.8519 14.9025 11.8519C13.1606 11.8519 12.8643 13.2319 12.8643 14.6644V20.0625H9.47434V9.1369Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_266_347">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  const handleDeleteClick = (postId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (isConfirmed) {

      deletePost(postId);
    } else {

      console.log("Deletion cancelled");
    }
  };

  const deletePost = async (postId) => {
    try {

      const response = await fetch(
        `https://socialize-dev.heytech.vision/backend_api/api/delete-scheduled-post/${postId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
        // If the deletion was successful, you can update your state or perform any other necessary actions
        console.log("Post deleted successfully");
      } else {

        console.error("Error deleting post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="integration_con ">
      <div className="container">
        <h1 className="text-[#11264D] text-3xl lg:text-5xl font-bold ">All Posts</h1>
        <p>Keep track of all your scheduled posts in one place.</p>
        <div className="row main_row items-center ">
          <div className="col-12 col-md-6 mb-3 lg:mb-0">
            <Link to="" className="bg-white text-sm   px-3.5 py-3.5 rounded-full border-[1px] border-sky-500">
              + New Post
            </Link>
          </div>
          <div className="col-12 col-md-6 mb-4 lg:mb-0 ">
            <div className="d-flex gap-2 md:flex-row flex-col justify-end items-center">
              <RangePicker
                onChange={(value) => handlevalue(value)}
              />
              <button className=" hidden lg:flex items-center justify-center px-4 border-[1px] rounded-3xl py-3.5 bg-white">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 5.00001C8.73478 5.00001 8.48043 5.10537 8.29289 5.2929C8.10536 5.48044 8 5.73479 8 6.00001C8 6.26523 8.10536 6.51958 8.29289 6.70712C8.48043 6.89465 8.73478 7.00001 9 7.00001C9.26522 7.00001 9.51957 6.89465 9.70711 6.70712C9.89464 6.51958 10 6.26523 10 6.00001C10 5.73479 9.89464 5.48044 9.70711 5.2929C9.51957 5.10537 9.26522 5.00001 9 5.00001ZM6.17 5.00001C6.3766 4.41448 6.75974 3.90744 7.2666 3.5488C7.77346 3.19015 8.37909 2.99756 9 2.99756C9.62091 2.99756 10.2265 3.19015 10.7334 3.5488C11.2403 3.90744 11.6234 4.41448 11.83 5.00001H19C19.2652 5.00001 19.5196 5.10537 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001C20 6.26523 19.8946 6.51958 19.7071 6.70712C19.5196 6.89465 19.2652 7.00001 19 7.00001H11.83C11.6234 7.58554 11.2403 8.09258 10.7334 8.45122C10.2265 8.80986 9.62091 9.00246 9 9.00246C8.37909 9.00246 7.77346 8.80986 7.2666 8.45122C6.75974 8.09258 6.3766 7.58554 6.17 7.00001H5C4.73478 7.00001 4.48043 6.89465 4.29289 6.70712C4.10536 6.51958 4 6.26523 4 6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10537 4.73478 5.00001 5 5.00001H6.17ZM15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8947 14.7348 13 15 13C15.2652 13 15.5196 12.8947 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12.17 11C12.3766 10.4145 12.7597 9.90744 13.2666 9.5488C13.7735 9.19015 14.3791 8.99756 15 8.99756C15.6209 8.99756 16.2265 9.19015 16.7334 9.5488C17.2403 9.90744 17.6234 10.4145 17.83 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8947 19.2652 13 19 13H17.83C17.6234 13.5855 17.2403 14.0926 16.7334 14.4512C16.2265 14.8099 15.6209 15.0025 15 15.0025C14.3791 15.0025 13.7735 14.8099 13.2666 14.4512C12.7597 14.0926 12.3766 13.5855 12.17 13H5C4.73478 13 4.48043 12.8947 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.17ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8947 8.73478 19 9 19C9.26522 19 9.51957 18.8947 9.70711 18.7071C9.89464 18.5196 10 18.2652 10 18C10 17.7348 9.89464 17.4804 9.70711 17.2929C9.51957 17.1054 9.26522 17 9 17ZM6.17 17C6.3766 16.4145 6.75974 15.9074 7.2666 15.5488C7.77346 15.1902 8.37909 14.9976 9 14.9976C9.62091 14.9976 10.2265 15.1902 10.7334 15.5488C11.2403 15.9074 11.6234 16.4145 11.83 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8947 19.2652 19 19 19H11.83C11.6234 19.5855 11.2403 20.0926 10.7334 20.4512C10.2265 20.8099 9.62091 21.0025 9 21.0025C8.37909 21.0025 7.77346 20.8099 7.2666 20.4512C6.75974 20.0926 6.3766 19.5855 6.17 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6.17Z"
                      fill="#5546E8"
                    />
                  </svg>
                </span>
                Filters
              </button>
            </div>

          </div>
        </div>

        <div className="row">

          {filteredPosts.length === 0 ? (
            <p className="text-center">No posts available for the selected date range.</p>
          ) : (


            filteredPosts.map(post => (
              <div key={post.id} className="user-container mb-3 ">
                <div className="bg-[#FFFFFF] p-3 rounded-lg flex flex-col md:flex-row  gap-4">
                  <div className="relative">
                    {/* <img src="asset/Rectangle.png" alt="" /> */}
                    <img
                      className="min-w-60 h-44 rounded-md"
                      src={post.image_post}

                      alt="image-data" />

                    <span className="absolute top-0 right-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_266_356)">
                          <rect
                            width="40"
                            height="40"
                            rx="20"
                            fill="white"
                            fill-opacity="0.4"
                          />
                          <path
                            d="M6.4 19H8C8.28334 19 8.521 19.096 8.713 19.288C8.905 19.48 9.00067 19.7173 9 20C9 20.2833 8.904 20.521 8.712 20.713C8.52 20.905 8.28267 21.0007 8 21H4C3.71667 21 3.479 20.904 3.287 20.712C3.095 20.52 2.99934 20.2827 3 20V16C3 15.7167 3.096 15.479 3.288 15.287C3.48 15.095 3.71734 14.9993 4 15C4.28334 15 4.521 15.096 4.713 15.288C4.905 15.48 5.00067 15.7173 5 16V17.6L7.4 15.2C7.58334 15.0167 7.81667 14.925 8.1 14.925C8.38334 14.925 8.61667 15.0167 8.8 15.2C8.98334 15.3833 9.075 15.6167 9.075 15.9C9.075 16.1833 8.98334 16.4167 8.8 16.6L6.4 19ZM17.6 19L15.2 16.6C15.0167 16.4167 14.925 16.1833 14.925 15.9C14.925 15.6167 15.0167 15.3833 15.2 15.2C15.3833 15.0167 15.6167 14.925 15.9 14.925C16.1833 14.925 16.4167 15.0167 16.6 15.2L19 17.6V16C19 15.7167 19.096 15.479 19.288 15.287C19.48 15.095 19.7173 14.9993 20 15C20.2833 15 20.521 15.096 20.713 15.288C20.905 15.48 21.0007 15.7173 21 16V20C21 20.2833 20.904 20.521 20.712 20.713C20.52 20.905 20.2827 21.0007 20 21H16C15.7167 21 15.479 20.904 15.287 20.712C15.095 20.52 14.9993 20.2827 15 20C15 19.7167 15.096 19.479 15.288 19.287C15.48 19.095 15.7173 18.9993 16 19H17.6ZM5 6.4V8C5 8.28334 4.904 8.521 4.712 8.713C4.52 8.905 4.28267 9.00067 4 9C3.71667 9 3.479 8.904 3.287 8.712C3.095 8.52 2.99934 8.28267 3 8V4C3 3.71667 3.096 3.479 3.288 3.287C3.48 3.095 3.71734 2.99934 4 3H8C8.28334 3 8.521 3.096 8.713 3.288C8.905 3.48 9.00067 3.71734 9 4C9 4.28334 8.904 4.521 8.712 4.713C8.52 4.905 8.28267 5.00067 8 5H6.4L8.8 7.4C8.98334 7.58334 9.075 7.81667 9.075 8.1C9.075 8.38334 8.98334 8.61667 8.8 8.8C8.61667 8.98334 8.38334 9.075 8.1 9.075C7.81667 9.075 7.58334 8.98334 7.4 8.8L5 6.4ZM19 6.4L16.6 8.8C16.4167 8.98334 16.1833 9.075 15.9 9.075C15.6167 9.075 15.3833 8.98334 15.2 8.8C15.0167 8.61667 14.925 8.38334 14.925 8.1C14.925 7.81667 15.0167 7.58334 15.2 7.4L17.6 5H16C15.7167 5 15.479 4.90434 15.287 4.713C15.095 4.52167 14.9993 4.284 15 4C15 3.71667 15.096 3.479 15.288 3.287C15.48 3.095 15.7173 2.99934 16 3H20C20.2833 3 20.521 3.096 20.713 3.288C20.905 3.48 21.0007 3.71734 21 4V8C21 8.28334 20.904 8.521 20.712 8.713C20.52 8.905 20.2827 9.00067 20 9C19.7167 9 19.479 8.904 19.287 8.712C19.095 8.52 18.9993 8.28267 19 8V6.4Z"
                            fill="black"
                          />
                          <path
                            d="M14.4 27H16C16.2833 27 16.521 27.096 16.713 27.288C16.905 27.48 17.0007 27.7173 17 28C17 28.2833 16.904 28.521 16.712 28.713C16.52 28.905 16.2827 29.0007 16 29H12C11.7167 29 11.479 28.904 11.287 28.712C11.095 28.52 10.9993 28.2827 11 28V24C11 23.7167 11.096 23.479 11.288 23.287C11.48 23.095 11.7173 22.9993 12 23C12.2833 23 12.521 23.096 12.713 23.288C12.905 23.48 13.0007 23.7173 13 24V25.6L15.4 23.2C15.5833 23.0167 15.8167 22.925 16.1 22.925C16.3833 22.925 16.6167 23.0167 16.8 23.2C16.9833 23.3833 17.075 23.6167 17.075 23.9C17.075 24.1833 16.9833 24.4167 16.8 24.6L14.4 27ZM25.6 27L23.2 24.6C23.0167 24.4167 22.925 24.1833 22.925 23.9C22.925 23.6167 23.0167 23.3833 23.2 23.2C23.3833 23.0167 23.6167 22.925 23.9 22.925C24.1833 22.925 24.4167 23.0167 24.6 23.2L27 25.6V24C27 23.7167 27.096 23.479 27.288 23.287C27.48 23.095 27.7173 22.9993 28 23C28.2833 23 28.521 23.096 28.713 23.288C28.905 23.48 29.0007 23.7173 29 24V28C29 28.2833 28.904 28.521 28.712 28.713C28.52 28.905 28.2827 29.0007 28 29H24C23.7167 29 23.479 28.904 23.287 28.712C23.095 28.52 22.9993 28.2827 23 28C23 27.7167 23.096 27.479 23.288 27.287C23.48 27.095 23.7173 26.9993 24 27H25.6ZM13 14.4V16C13 16.2833 12.904 16.521 12.712 16.713C12.52 16.905 12.2827 17.0007 12 17C11.7167 17 11.479 16.904 11.287 16.712C11.095 16.52 10.9993 16.2827 11 16V12C11 11.7167 11.096 11.479 11.288 11.287C11.48 11.095 11.7173 10.9993 12 11H16C16.2833 11 16.521 11.096 16.713 11.288C16.905 11.48 17.0007 11.7173 17 12C17 12.2833 16.904 12.521 16.712 12.713C16.52 12.905 16.2827 13.0007 16 13H14.4L16.8 15.4C16.9833 15.5833 17.075 15.8167 17.075 16.1C17.075 16.3833 16.9833 16.6167 16.8 16.8C16.6167 16.9833 16.3833 17.075 16.1 17.075C15.8167 17.075 15.5833 16.9833 15.4 16.8L13 14.4ZM27 14.4L24.6 16.8C24.4167 16.9833 24.1833 17.075 23.9 17.075C23.6167 17.075 23.3833 16.9833 23.2 16.8C23.0167 16.6167 22.925 16.3833 22.925 16.1C22.925 15.8167 23.0167 15.5833 23.2 15.4L25.6 13H24C23.7167 13 23.479 12.9043 23.287 12.713C23.095 12.5217 22.9993 12.284 23 12C23 11.7167 23.096 11.479 23.288 11.287C23.48 11.095 23.7173 10.9993 24 11H28C28.2833 11 28.521 11.096 28.713 11.288C28.905 11.48 29.0007 11.7173 29 12V16C29 16.2833 28.904 16.521 28.712 16.713C28.52 16.905 28.2827 17.0007 28 17C27.7167 17 27.479 16.904 27.287 16.712C27.095 16.52 26.9993 16.2827 27 16V14.4Z"
                            fill="#11264D"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_266_356"
                            x="-4"
                            y="-4"
                            width="48"
                            height="48"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="2"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_266_356"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_266_356"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-end gap-3">
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}

                        <Link
                          to={`/dashboard/editschedule/${post.id}`}
                          className="post_edit"
                        >
                          {" "}
                          Edit
                        </Link>

                      </span>

                      <span
                        className="w-[32px] h-[32px] shrink-0"
                        onClick={() => handleDeleteClick(post.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M22.5 9.5L9.5 22.5M9.5 9.5L22.5 22.5"
                            stroke="black"
                            stroke-width="2.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="md:w-[95%]">

                      <p className="text-[rgba(17, 38, 77, 0.60)] font-[400] ">
                        {post.post_content}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end ">
                      <div className="inline-flex items-center  px-2 py-1 rounded-[8px] border-[#D1D1D1] border">
                        <span className="w-[22px] h-[22px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11.0002 18.3333C12.9451 18.3333 14.8103 17.5607 16.1856 16.1854C17.5609 14.8102 18.3335 12.9449 18.3335 11C18.3335 9.05506 17.5609 7.1898 16.1856 5.81453C14.8103 4.43926 12.9451 3.66665 11.0002 3.66665C9.05524 3.66665 7.18998 4.43926 5.81471 5.81453C4.43945 7.1898 3.66683 9.05506 3.66683 11C3.66683 12.9449 4.43945 14.8102 5.81471 16.1854C7.18998 17.5607 9.05524 18.3333 11.0002 18.3333ZM11.0002 1.83331C12.2039 1.83331 13.3959 2.07042 14.5081 2.53108C15.6202 2.99175 16.6308 3.66696 17.482 4.51817C18.3332 5.36937 19.0084 6.3799 19.4691 7.49205C19.9297 8.6042 20.1668 9.7962 20.1668 11C20.1668 13.4311 19.2011 15.7627 17.482 17.4818C15.7629 19.2009 13.4313 20.1666 11.0002 20.1666C5.931 20.1666 1.8335 16.0416 1.8335 11C1.8335 8.56883 2.79927 6.23725 4.51835 4.51817C6.23743 2.79908 8.56901 1.83331 11.0002 1.83331ZM11.4585 6.41665V11.2291L15.5835 13.6766L14.896 14.8041L10.0835 11.9166V6.41665H11.4585Z"
                              fill="black"
                            />
                          </svg>{" "}
                        </span>{" "}
                        <span className="pl-1">
                          {new Date(post.schedule_time).toLocaleString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </span>
                      </div>


                      <ul className="flex items-center gap-2 pt-1">
                        {post && Array.isArray(post.social_media_array) && post.social_media_array.length > 0 ? (
                          post.social_media_array.map((platform, index) => (
                            <li className="" key={index}>{renderIcon(platform)}</li>
                          ))
                        ) : (
                          <li>No data available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


            )))}


        </div>
      </div>
    </div>
  );
}

export default Post;
