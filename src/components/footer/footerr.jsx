import React from "react";
import "../footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

function footerr() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row row_content">
          <div className="col-12 col-md-3 col-lg-4 first_col_footer">
            <h4>Company Name</h4>
            <li>
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <a href="https://www.facebook.com/"> </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />{" "}
              <a href="https://twitter.com/"> </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />{" "}
              <a href="https://www.instagram.com/"> </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} />{" "}
              <a href="https://www.pinterest.com/"> </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />{" "}
              <a href="https://www.youtube.com/"> </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} /> <a href="YOUR_TIKTOK_URL"></a>
            </li>
          </div>

          <div className="col-12 col-md-3 col-lg-2">
            <p>Company</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/"> About Us</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/about"> Career</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/contact"> Blog</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/contact"> Privacy Policy</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/contact"> Terms of Service</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/contact"> Become a Partner</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3">
            <p>Integration</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/">Facebook Management</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/">Twitter Management</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/">Instagram Management</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/">LinkedIn Management</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/">TikTok Management</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-2">
            <p>Support</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/"> Contact Us</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> <a href="/"> FAQ</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <a href="/"> What’s New</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bot_txt">
          <p>Copyright ©2023 Company. All Rights Reserved.amit</p>
        </div>
      </div>
    </section>
  );
}

export default footerr;
