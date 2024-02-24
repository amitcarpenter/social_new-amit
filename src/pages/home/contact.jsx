import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footerr from "../../components/footer/footerr";
import "../../pages/home/contact.css";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Validation for required fields
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "This field is required";
    }
    if (!emailAddress.trim()) {
      errors.emailAddress = "This field is required";
    }
    if (!subject.trim()) {
      errors.subject = "This field is required";
    }
    if (!message.trim()) {
      errors.message = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      // Make a POST request to the contact endpoint with the form data
      const response = await axios.post("https://socialize-dev.heytech.vision/backend/api/contact", {
        fullName: fullName,
        email: emailAddress,
        subject: subject,
        message: message,
      });

      if (response.status === 201) {
        setSuccessMessage("Message submitted successfully!");
        setErrorMessage("");
        setFullName("");
        setEmailAddress("");
        setSubject("");
        setMessage("");
        setErrors({});
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      } else {
        setSuccessMessage("");
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error);

      } else {
        setErrorMessage("Submission failed. Please try again.");
      }
      console.error(
        "Submission failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <Header />
      <section className="contact_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-7">
              <img src="asset/Contact.png" alt="" />
            </div>

            <div className="col-12 col-md-7 col-lg-4">
              <h1>How can we help you?</h1>
              <p>
                We love hearing from you. Reach out below and let us know how we
                can help.
              </p>

              <form className="user-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  {errors.emailAddress && <div className="error-message">{errors.emailAddress}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  {errors.subject && <div className="error-message">{errors.subject}</div>}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>

                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}

                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}

                <button className="btn_cont" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footerr />
    </>
  );
}

export default Contact;
