import React, { useEffect, useState } from 'react'
import './Accountoverview.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useContextApi } from './context/UseContext';
import { IoMdRefreshCircle } from "react-icons/io";
function Accountoverview() {

    const { userEmail, data, } = useContextApi();

    const [insraData, setinsraData] = useState(data)
    const [facebookdata, setFacebookData] = useState({})

    const handleLikedata = async () => {
        try {
            const payload = {
                "email": userEmail
            };

            const response = await axios.post(
                'http://192.227.234.133/backend/api/get_instagram_user_info',
                payload // Pass payload as request body
            );
            setinsraData(response.data.showjsondata)
            console.log('Response FDG LIKE:', response.data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };



    const handleFacebook = async () => {
        try {
            const payload = {
                "email": userEmail
            };

            const response = await axios.post(
                'http://192.227.234.133/backend/api/get_facebook_user_info',
                payload // Pass payload as request body
            );
            setFacebookData(response.data.facebook_data)
            console.log('Response FDG LIKE:', response.data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    useEffect(() => {
        handleFacebook()
    }, [])
    return (
        <div className=" account_con">
            <div className="container">
                <h1>Dashboard</h1>
                <p>Welcome back, John Doe!</p>
                <div className="row main_row">

                    <h2>Account Overview</h2>
                    <div className="col-6 pt-4">

                        <div className="face_div">
                            <h3>Facebook</h3>
                            {/* <p className="john_name">john.doe</p> */}
                            <div className="row">
                                <div className="col-6 pt-4">
                                    <p><FontAwesomeIcon icon={faFacebook} />Followers</p>
                                    <p className='value_app'>{facebookdata.followers_count}</p>
                                </div>
                                <div className="col-6 pt-4">
                                    <p><FontAwesomeIcon icon={faFacebook} />About</p>
                                    <p className='value_app'>{facebookdata.about}</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-6 pt-4">
                        <div className="face_div relative">
                            <h3>Instagram</h3>
                            <span className='absolute right-3 top-2'>
                                <IoMdRefreshCircle
                                    onClick={handleLikedata}
                                    className='w-10 h-10' /></span>
                            <p className="john_name">{insraData?.instagram_username}</p>
                            <div className="row">
                                <div className="col-4 pt-4">
                                    <p> <FontAwesomeIcon icon={faInstagram} />Followers</p>
                                    <p className='value_app'>{insraData?.instagram_followers}</p>
                                </div>
                                <div className="col-4 pt-4">
                                    <p> <FontAwesomeIcon icon={faInstagram} />Following</p>
                                    <p className='value_app'>{insraData?.instagram_following}</p>
                                </div>

                                <div className="col-4 pt-4">
                                    <p> <FontAwesomeIcon icon={faInstagram} />post</p>
                                    <p className='value_app'>{insraData?.instagram_posts}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pt-4">

                        <div className="face_div">
                            <h3>Twitter</h3>
                            {/* <p className="john_name">john.doe</p> */}
                            <div className="row">
                                <div className="col-6 pt-4">
                                    <p>
                                        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />Followers
                                    </p>
                                    <p className='value_app'>N/A</p>
                                </div>
                                <div className="col-6 pt-4">
                                    <p>
                                        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Retweets
                                    </p>
                                    <p className='value_app'>N/A</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Accountoverview