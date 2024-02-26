import React from "react"
import "../footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";


function footerr() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row row_content">
          <div className="col-12 col-md-3 col-lg-4 first_col_footer">
            <h4>Company Name</h4>
            <ul className="flex justify-start gap-1.5 p-0 ">
              <li>
                <Link to="https://www.facebook.com/">
                  <FaFacebookF className="h-8 w-8 lg:w-10 lg:h-10" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/">
                  <FaTwitter className="h-8 w-8 lg:w-10 lg:h-10" />
                </Link>
              </li>

              <li>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin className="h-8 w-8 lg:w-10 lg:h-10" />
                </Link>
              </li>

              <li>
              {/* <Link to="https://www.instagram.com/"> */}
                <Link to="#">
                  <FaInstagram className="h-8 w-8 lg:w-10 lg:h-10" />
                </Link>
              </li>
            </ul>
            {/* <li>
              <FontAwesomeIcon icon={faYoutube} />{" "}
             <Link to="https://www.youtube.com/"> </Link>
            </li> */}
            {/* <li>
              <FontAwesomeIcon icon={faTiktok} /><Link to="YOUR_TIKTOK_URL"></Link>
            </li> */}
          </div>

          <div className="col-12 col-md-3 col-lg-2">
            <p>Company</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="/about"> About Us</Link>
              </li>
              {/* <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
               <Link to="/about"> Career</Link>
              </li> */}
              {/* <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
               <Link to="/contact"> Blog</Link>
              </li> */}
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#"> Privacy Policy</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#"> Terms of Service</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to='#'> Become a Partner</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3">
            <p>Integration</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#">Facebook Management</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#">Twitter Management</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#">Instagram Management</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#">LinkedIn Management</Link>
              </li>
              {/* <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
               <Link to="/">TikTok Management</Link>
              </li> */}
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-2">
            <p>Support</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="/contact"> Contact Us</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /><Link to="#"> FAQ</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="#"> What’s New</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bot_txt">
          <p>Copyright ©2023 Company. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}

export default footerr;
