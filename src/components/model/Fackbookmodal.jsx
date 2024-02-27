import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
const Fackbookmodal = ({setfacebookstatus, facebookmodel,

    handlefacebookmodelhide }) => {

    const userEmail = sessionStorage.getItem("userEmail");
    const [email, setEmail] = useState(userEmail);
    const [facebook_page_id, setfacebook_page_id] = useState('');
    const [facebook_access_token, setfacebook_access_token] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlefacebook_page_idChange = (e) => {
        setfacebook_page_id(e.target.value);
    };

    const handlefacebook_access_tokenChange = (e) => {
        setfacebook_access_token(e.target.value);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!email || !facebook_page_id || !facebook_access_token) {
            setError("All fields are required");
            return;
        }

        const payload = {
            "email": email,
            "facebook_page_id": facebook_page_id,
            "facebook_access_token": facebook_access_token,

        }
        try {
            const response = await axios.post('https://socialize-dev.heytech.vision/backend_api/api/add-facebook-data', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                toast.success('Your data added successfully');
                // setEmail('');
                setfacebook_page_id('');
                setfacebook_access_token('');
                setError('');
                setfacebookstatus(true)
                handlefacebookmodelhide()

            } else {
                setError(response.data.message || 'An error occurred');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };


    return (
        <Modal show={facebookmodel}
            size="md"
            onHide={handlefacebookmodelhide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span style={{ display: 'block', textAlign: 'center' }}>Add Facebook data</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="max-w-md mx-auto"
                    onSubmit={handleSubmit}>
                    {error && <div className="text-red-500 mb-3">{error}</div>}
                    {success && <div className="text-green-500 mb-3">{success}</div>}
                    <div className="mb-3">
                        <label htmlFor="email" className="block mb-1 font-medium text-gray-900">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="name@flowbite.com"
                            value={email}
                            disabled
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="facebook_page_id" className="block mb-1 font-medium text-gray-900"> facebook page Id</label>
                        <input
                            type="text"
                            id="facebook_page_id"
                            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            value={facebook_page_id}
                            onChange={handlefacebook_page_idChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="facebook_access_token" className="block mb-1 font-medium text-gray-900"> facebook access token </label>
                        <input
                            type="text"
                            id="facebook_access_token"
                            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            value={facebook_access_token}
                            onChange={handlefacebook_access_tokenChange}
                            required
                        />
                    </div>

                    <button type="submit"

                        className="bg-blue-500 w-full  text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>

                </form>

            </Modal.Body>

        </Modal>
    );
};

export default Fackbookmodal;
