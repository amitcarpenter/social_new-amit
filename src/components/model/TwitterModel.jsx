import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const TwitterModel = ({ handleClose, setcheckbuttonStatus }) => {

    const userEmail = sessionStorage.getItem("userEmail");

    const [email, setEmail] = useState(userEmail);
    const [twitterApiKey, setTwitterApiKey] = useState('');
    const [twitterApiSecret, setTwitterApiSecret] = useState('');
    const [twitterAccessToken, setTwitterAccessToken] = useState('');
    const [twitterAccessSecret, setTwitterAccessSecret] = useState('');
    const [twitterBearerToken, setTwitterBearerToken] = useState('');
    const [twitterAppId, setTwitterAppId] = useState('');
    const [error, setError] = useState('');


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
            const response = await axios.post('https://socialize-dev.heytech.vision/backend_api/api/add-twitter-data', payload, {
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
                setcheckbuttonStatus(true)
                setError('');
                handleClose()
            } else {
                setError(response.data.message || 'An error occurred');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };


    return (
        <div>
            <form className="max-w-md mx-auto"
                onSubmit={handleSubmit}>
                {error && <div className="text-red-500 mb-3">{error}</div>}
             
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-900">Your email</label>
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
    );
};

export default TwitterModel;
