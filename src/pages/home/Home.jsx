import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Footerr from "../../components/footer/footerr";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />

      <div className="container flex text-[#11264D]   flex-wrap items-center py-4 md:pt-20  mx-auto md:px-16 px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

          <div className="order-2 md:order-1">
            <h1 className="text-4xl lg:text-5xl mb-4">Social media Simplified</h1>
            <p className="text-xl lg:text-2xl mb-4 lg:leading-[30px] tracking-[3px] ">
              Tired of logging into each social media platform to post? Discover
              the power of our all-in-one social media management tool tailored
              to simplify your experience.
            </p>
            <p className="text-xl lg:text-2xl mb-4 lg:leading-[30px] tracking-[3px] ">
              Say goodbye to countless hours of planning your social media
              campaign as our revolutionary tool streamlines the process,
              allowing you to accomplish it effortlessly within minutes.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img src="asset/woman.png" alt="" />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex text-[#11264D] flex-wrap  py-4 md:pt-20  mx-auto  px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
          <div className="order-1 md:order-2">
            <h1 className=" text-4xl lg:text-5xl mb-4">
              Save Time for
              <br /> Great Content
            </h1>

            <p className="text-xl lg:text-2xl mb-4 lg:leading-[30px] tracking-[3px] ">
              Our tool helps you - <br />
              <strong> Plan </strong> --{">"}
              <strong> Schedule </strong> "--{">"}
              <strong> Post </strong> <br />
              on all major platforms from one place. That means you can save
              time and focus on creating great content.
            </p>
          </div>
          <div className="order-2 md:order-1">
            <img src="asset/Girltab.png" alt="" />
          </div>
        </div>
      </div>


      <div className="container  py-5 md:pt-20  mx-auto md:px-16 px-4">
        <h1 className="text-center text-4xl lg:text-5xl  mb-8">Features at a glance</h1>
        <div className="">

          <div className="flex flex-col lg:flex-row">
            <div className=" mb-4 lg:mt-16 z-0">
              <img
                className=" w-full lg:h-[350px] lg:w-[600px] "
                src="asset/image 1.png" alt="" />
            </div>
            <div className=" mb-4 lg:mt-8 lg:-ml-28 -z-10">
              <img
                className=" w-full lg:h-[350px] lg:w-[600px]"
                src="asset/image 2.png" alt="" />
            </div>
            <div className="lg:-ml-28 -z-50">
              <img
                className=" w-full lg:h-[350px] lg:w-[600px]"
                src="asset/image 3.png" alt="" />
            </div>



          </div>
        </div>
      </div>

      <div className="container  py-5 md:pt-20  mx-auto md:px-16 px-4">

        <div className="flex flex-wrap justify-between items-center  Icon_Wrap">
          <div className="class">
            <svg
              className="clas_bulb_icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M64.1915 2L60.7363 5.45512"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 2L5.45512 5.45512"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M64.1915 50.3717L60.7363 46.9166"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 50.3717L5.45512 46.9166"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.7305 57.282H43.4612"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.1855 67.6473H40.006"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.0947 5.45508C19.2739 5.45508 12.1984 12.1936 12.3642 22.7307C12.445 27.8681 14.0912 31.3685 17.5469 34.8236C21.0025 38.2787 22.7301 40.0063 22.7295 46.9166H43.4601C43.4608 40.0067 45.1884 38.2787 48.6425 34.824C52.0972 31.3688 53.745 27.8681 53.8255 22.7307C53.9913 12.1936 46.9159 5.45508 33.0947 5.45508Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="poste">
              <h6>Post Ideas</h6>
              <p className="inspire_p">
                Never be deprived of
                <br /> inspiration.
              </p>
            </div>
          </div>
          <div className="class">
            <svg
              className="clas_bulb_icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M37.649 36.268L29.589 31.458C28.185 30.626 27.041 28.624 27.041 26.986V16.326"
                stroke="#292D32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.2 12.4C3.95 16.742 2 22.15 2 28C2 42.352 13.648 54 28 54C42.352 54 54 42.352 54 28C54 13.648 42.352 2 28 2C24.282 2 20.72 2.78 17.522 4.21"
                stroke="#292D32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="poste">
              <h6>Automated Publishing</h6>
              <p className="inspire_p">
                Schedule your posts,
                <br />
                sit back and relax.
              </p>
            </div>
          </div>

          <div className="class">
            <svg
              className="clas_bulb_icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.4564 50.5118L7.6 58L9.6774 44.8796C4.74933 40.3373 2 34.0279 2 27.0526C2 13.2164 12.8178 2 30 2C47.1822 2 58 13.2164 58 27.0526C58 40.8888 47.1822 52.1053 30 52.1053C26.149 52.1053 22.6178 51.5418 19.4564 50.5118Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5701 23.7778C19.2883 23.7778 20.6812 25.1707 20.6812 26.8889C20.6812 28.4844 19.4802 29.7993 17.9329 29.9791L17.5701 30C15.8382 30 14.4453 28.6071 14.4453 26.8889C14.4453 25.2934 15.6463 23.9784 17.1936 23.7987L17.5701 23.7778Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.0154 23.7778C31.7336 23.7778 33.1265 25.1707 33.1265 26.8889C33.1265 28.4844 31.9255 29.7993 30.3782 29.9791L30.0154 30C28.2835 30 26.8906 28.6071 26.8906 26.8889C26.8906 25.2934 28.0916 23.9784 29.6389 23.7987L30.0154 23.7778Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.459 23.7778C44.1772 23.7778 45.5701 25.1707 45.5701 26.8889C45.5701 28.4844 44.3691 29.7993 42.8218 29.9791L42.459 30C40.7271 30 39.3342 28.6071 39.3342 26.8889C39.3342 25.2934 40.5352 23.9784 42.0825 23.7987L42.459 23.7778Z"
                fill="black"
              />
            </svg>
            <div className="poste">
              <h6>Optimization Tips</h6>
              <p className="inspire_p">
                Instantly create expertly
                <br />
                crafted posts.
              </p>
            </div>
          </div>

          <div className="class">
            <svg
              className="clas_bulb_icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M2 2V54"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54 54H2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5547 39.5555L28.7214 24.3889L38.8325 34.5L53.9991 19.3333"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="poste">
              <h6>Analytics</h6>
              <p className="inspire_p">
                Monitor and build your
                <br />
                success.
              </p>
            </div>
          </div>

          <div className="class">
            <svg
              className="clas_bulb_icons"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M19.85 53H35.15C47.9 53 53 47.9 53 35.15V19.85C53 7.1 47.9 2 35.15 2H19.85C7.1 2 2 7.1 2 19.85V35.15C2 47.9 7.1 53 19.85 53Z"
                stroke="#292D32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.85 22.4C22.6667 22.4 24.95 20.1167 24.95 17.3C24.95 14.4834 22.6667 12.2 19.85 12.2C17.0333 12.2 14.75 14.4834 14.75 17.3C14.75 20.1167 17.0333 22.4 19.85 22.4Z"
                stroke="#292D32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.70898 45.2228L16.2805 36.7823C18.295 35.4308 21.202 35.5838 23.0124 37.1393L23.8539 37.8788C25.8429 39.5873 29.0559 39.5873 31.0449 37.8788L41.6529 28.7753C43.6419 27.0668 46.8549 27.0668 48.8439 28.7753L53.0004 32.3453"
                stroke="#292D32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="poste">
              <h6>Media Library</h6>
              <p className="inspire_p">
                Manage all your media
                <br />
                in one place.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="text-center exploral">
        <button className="bg-[#0077B7] text-white font-medium text-xl all_feature_btn">Explore All Features</button>
      </div>

      <div className="back_colour relative py-4 mb-24 ">
        <div className="container">
          <div className="">
            <p className="social_p">
              Dominate Social Media 
              <br />
              like a Pro!
            </p>
            <div className="gt_btnn">
              <Link to="/signup">
                <button className="get_bbtn">Get Started</button>
              </Link>
            </div>
          </div>

          <img className="hidden lg:block absolute -top-[130px] right-8 lg:w-[450px]" src="asset/rocket.png.png" alt="" />
        </div>
      </div>
      <Footerr />
    </>
  );
};

export default Home;
