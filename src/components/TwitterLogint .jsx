import React, { useState } from 'react';
import TwitterLogin from 'react-twitter-login';

const TwitterLogint  = () => {
  const [twitterToken, setTwitterToken] = useState(null);

  const handleTwitterLogin = (authData) => {
    console.log(authData);
    if (authData.oauth_token && authData.oauth_token_secret) {
      console.log('Twitter Token:', authData.oauth_token);
      console.log('Twitter Token Secret:', authData.oauth_token_secret);
      setTwitterToken(authData.oauth_token);
    }
  };

  const handleTwitterError = (error) => {
    console.error('Error logging in with Twitter:', error);
  };

  const handleTwitterLogout = () => {
    setTwitterToken(null);
  };

  return (
    <div>
      {twitterToken ? (
        <div>
          <button onClick={handleTwitterLogout}>Logout</button>
        </div>
      ) : (
        <TwitterLogin
          authCallback={handleTwitterLogin}
          onFailure={handleTwitterError}
          consumerKey="B0gEJ0X1Y1bUjkyOhmxo0MvBm"
          consumerSecret="8qlf3i2l7AKdrtucNcC6DToX4KdLnIJD4NCuIl6yeiafp6Vf0D"
          callbackUrl="http://localhost:5000/api/auth/twitter"
          buttonTheme="dark"
        />
      )}
    </div>
  );
};

export default TwitterLogint ;
