import React, { useState } from 'react';
import TwitterLogin from 'react-twitter-login';

const TwitterLogint = () => {
    const [twitterToken, setTwitterToken] = useState(null);

    const handleTwitterLogin = (authData) => {

        console.log(authData, "____error ");

        // Extract necessary information from authData

        if (authData.oauth_token && authData.oauth_token_secret) {
            console.log('Twitter Token:', authData.oauth_token);
            console.log('Twitter Token Secret:', authData.oauth_token_secret);
            setTwitterToken(authData.oauth_token);
        }
    };

    
    const handleTwitterError = (error) => {
        console.error('Error logging in with Twitter:', error);
        // Handle the error as needed
    };


    const handleTwitterLogout = () => {
        // Handle the Twitter logout, if needed
        setTwitterToken(null);
    };

    return (
        <div className='py-20 ml-20'>
            {twitterToken ? (
                <div>
                    <button onClick={handleTwitterLogout}>Logout</button>
                </div>
            ) : (



                <TwitterLogin
                    authCallback={handleTwitterLogin}
                    onFailure={handleTwitterError}    // Add onFailure callback to handle login errors
                    consumerKey="B0gEJ0X1Y1bUjkyOhmxo0MvBm"
                    consumerSecret="8qlf3i2l7AKdrtucNcC6DToX4KdLnIJD4NCuIl6yeiafp6Vf0D"
                    callbackUrl="http://192.227.234.133/backend/api/auth/twitter"
                    requestTokenUrl="https://cors.bridged.cc/https://api.twitter.com/oauth/request_token"

                    // Update with your frontend callback URL
                    className="twitter-login-button"

                    buttonTheme="dark"


                />
            )}
        </div>
    );
};

export default TwitterLogint;
