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

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validation can be added here if needed

      // Make a POST request to the contact endpoint with the form data
      const response = await axios.post("http://192.227.234.133/backend/api/contact", {
        fullName: fullName,
        email: emailAddress,
        subject: subject,
        message: message, // Update the field name to 'message'
      });

      // Handle the response here
      if (response.status === 201) {
        setSuccessMessage("Message submitted successfully!");
        setErrorMessage("");
        // You can clear the form fields here if needed
        setFullName("");
        setEmailAddress("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      // Handle errors - show an error message to the user or log the error
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        setErrorMessage("Submission failed. Please try again.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
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
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
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
