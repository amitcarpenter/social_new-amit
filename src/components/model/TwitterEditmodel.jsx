import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';

const TwitterEditmodel = ({ showeditmodel, handleCloseEdiatmodel }) => {

    const [email, setEmail] = useState(null);
    const [twitterApiKey, setTwitterApiKey] = useState('');
    const [twitterApiSecret, setTwitterApiSecret] = useState('');
    const [twitterAccessToken, setTwitterAccessToken] = useState('');
    const [twitterAccessSecret, setTwitterAccessSecret] = useState('');
    const [twitterBearerToken, setTwitterBearerToken] = useState('');
    const [twitterAppId, setTwitterAppId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTwitterApiKeyChange = (e) => {
        setTwitterApiKey(e.target.value);
    };

    const handleTwitterApiSecretChange = (e) => {
        setTwitterApiSecret(e.target.value);
    };

    const handleTwitterAccessTokenChange = (e) => {
        setTwitterAccessToken(e.target.value);
    };

    const handleTwitterAccessSecretChange = (e) => {
        setTwitterAccessSecret(e.target.value);
    };

    const handleTwitterBearerTokenChange = (e) => {
        setTwitterBearerToken(e.target.value);
    };

    const handleTwitterAppIdChange = (e) => {
        setTwitterAppId(e.target.value);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!email || !twitterApiKey || !twitterApiSecret || !twitterAccessToken || !twitterAccessSecret || !twitterBearerToken || !twitterAppId) {
            setError("All fields are required");
            return;
        }

        const payload = {
            "email": email,
            "TWITTER_API_KEY": twitterApiKey,
            "TWITTER_API_SECRET": twitterApiSecret,
            "TWITTER_ACCESS_TOKEN": twitterAccessToken,
            "TWITTER_ACCESS_SECRET": twitterAccessSecret,
            "TWITTER_BEARER_TOKEN": twitterBearerToken,
            "TWITTER_APP_ID": twitterAppId
        }

        try {
            const response = await axios.put('https://socialize-dev.heytech.vision/backend_api/api/edit-twitter-data', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                toast.success('Your data edit successfully');
                setTwitterApiKey('');
                setTwitterApiSecret('');
                setTwitterAccessToken('');
                setTwitterAccessSecret('');
                setTwitterBearerToken('');
                setTwitterAppId('');
                setError('');
                handleCloseEdiatmodel()
            } else {
                setError(response.data.message || 'An error occurred');
            }
        } catch (error) {
            console.log(error.response)
        
        }
    };

    const userEmail = sessionStorage.getItem("userEmail");

    const GetFormdata = async () => {
        const paylod = {
            "email": userEmail
        }
        try {
            const response = await axios.post(`https://socialize-dev.heytech.vision/backend_api/api/get-details-by-email`, paylod);

            const { email,
                twitter_api_key,
                twitter_api_secret,
                twitter_access_token,
                twitter_access_secret,
                twitter_bearer_token,
                twitter_app_id } = response.data

            setEmail(email);
            setTwitterApiKey(twitter_api_key);
            setTwitterApiSecret(twitter_api_secret);
            setTwitterAccessToken(twitter_access_token);
            setTwitterAccessSecret(twitter_access_secret);
            setTwitterBearerToken(twitter_bearer_token);
            setTwitterAppId(twitter_app_id);

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        GetFormdata()
    }, [userEmail])



    return (

        <Modal show={showeditmodel}
            size="lg"
            onHide={handleCloseEdiatmodel}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span style={{ display: 'block', textAlign: 'center' }}>Edit Twitter data</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form className="px-10 mx-auto"
                        onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 mb-3">{error}</div>}
                        {success && <div className="text-green-500 mb-3">{success}</div>}
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-900">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                placeholder="name@123.com"
                                value={email}
                                disabled
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="twitterApiKey" className="block mb-1 font-medium text-gray-900">Twitter API Key</label>
                            <input
                                type="text"
                                id="twitterApiKey"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={twitterApiKey}
                                onChange={handleTwitterApiKeyChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="twitterApiSecret" className="block mb-1 font-medium text-gray-900">Twitter API Secret</label>
                            <input
                                type="text"
                                id="twitterApiSecret"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={twitterApiSecret}
                                onChange={handleTwitterApiSecretChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="twitterAccessToken" className="block mb-1 font-medium text-gray-900">Twitter Access Token</label>
                            <input
                                type="text"
                                id="twitterAccessToken"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={twitterAccessToken}
                                onChange={handleTwitterAccessTokenChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="twitterAccessSecret" className="block mb-1 font-medium text-gray-900">Twitter Access Secret</label>
                            <input
                                type="text"
                                id="twitterAccessSecret"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={twitterAccessSecret}
                                onChange={handleTwitterAccessSecretChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="twitterBearerToken" className="block mb-1 font-medium text-gray-900">Twitter Bearer Token</label>
                            <input
                                type="text"
                                id="twitterBearerToken"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={twitterBearerToken}
                                onChange={handleTwitterBearerTokenChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="twitterAppId" className="block mb-1 font-medium text-gray-900">Twitter App ID</label>
                            <input
                                type="text"
                                id="twitterAppId"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                value={twitterAppId}
                                onChange={handleTwitterAppIdChange}
                                required
                            />
                        </div>

                        <button type="submit"

                            className="bg-blue-500 w-full  text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>

                    </form>

                </div>
            </Modal.Body>

        </Modal>


    )
}

export default TwitterEditmodel