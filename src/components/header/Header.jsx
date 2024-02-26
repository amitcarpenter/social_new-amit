import React from "react";
import "../header/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <nav className="nav_header">
          <div className=" flex text-[#11264D] text-[16px]  flex-wrap items-center justify-between mx-auto ">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
              <span className="self-center font-semibold whitespace-nowrap text-[#377DFF]">
                Company Logo
              </span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="/login" className=" mr-2 md:mr-5">
                <span className="block py-2 px-2  font-medium login_btn">
                  Login
                </span>
              </Link>
              <button
                type="button"
              >
                <Link to="/signup"
                  className="text-white md:block hidden bg-[#0077B7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-2xl  px-6 lg:px-12 py-2.5 lg:py-3 text-center ">

                  Get started
                </Link>
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col  font-medium  rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <Link to="/" className="block py-2  md:p-0 ">
                    Features
                  </Link>
                </li>
                {/* <li>
                  <Link to="/Testimonials" className="block py-2  md:p-0 ">
                    Testimonials
                  </Link>
                </li> */}
                <li>
                  <Link to="/about" className="block py-2  md:p-0">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="block py-2  md:p-0 ">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block py-2  md:p-0 ">
                    Contact
                  </Link>
                </li>

                <li className="hidden">
                  <Link to="/contact" className="block py-2  md:p-0 ">
                    Contact
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
