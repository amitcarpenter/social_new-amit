import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';

const InstagramEditmodel = ({ Instasform, handlecloseInstasform }) => {

  const userEmail = sessionStorage.getItem("userEmail");
  
  const [igEmail, setIgEmail] = useState("");
  const [igPassword, setIgPassword] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !igEmail || !igPassword) {
      setError("All fields are required");
      return;
    }

    const payload = {
      "email": email,
      "instagram_username": igEmail,
      "ig_password": igPassword,

    }
    try {
      const response = await axios.put('https://socialize-dev.heytech.vision/backend/api/edit-instagram-data', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        toast.success('Your data added successfully');
        // setEmail('');
        setIgEmail("")
        setIgPassword('');
        handlecloseInstasform()

      } else {
        setError(response.data.message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };



  const GetFormdata = async () => {
    const paylod = {
      "email": userEmail
    }
    try {
      const response = await axios.post(`https://socialize-dev.heytech.vision/backend/api/get-details-by-email`, paylod);

      const { email,
        instagram_username,
        ig_password,
      } = response.data

      setEmail(email);
      setIgEmail(instagram_username);
      setIgPassword(ig_password);


    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    GetFormdata()
  }, [userEmail])



  return (

    <Modal show={Instasform}
      size="md"
      onHide={handlecloseInstasform}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span style={{ display: 'block', textAlign: 'center' }}>Edit Instagram data</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="max-w-md mx-auto"
          onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-3">{error}</div>}

          <div className="mb-3">
            <label htmlFor="email" className="block mb-1 font-medium text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="name@flowbite.com"
              value={email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="facebook_page_id" className="block mb-1 font-medium text-gray-900"> User Name</label>
            <input
              type="text"
              id="facebook_page_id"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              value={igEmail}
              onChange={(e) => setIgEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="facebook_access_token" className="block mb-1 font-medium text-gray-900"> User password </label>
            <input
              type="text"
              id="facebook_access_token"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              value={igPassword}
              onChange={(e) => setIgPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit"

            className="bg-blue-500 w-full  text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>

        </form>

      </Modal.Body>

    </Modal>
  )
}

export default InstagramEditmodel