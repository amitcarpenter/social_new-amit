import React from 'react'
import './Accountoverview.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Accountoverview() {
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
                    <p className="john_name">john.doe</p>
                    <div className="row">
                        <div className="col-6 pt-4">
                            <p><FontAwesomeIcon icon={faFacebook} />Engagement</p>
                            <p className='value_app'>1476</p>
                        </div>
                        <div className="col-6 pt-4">
                        <p><FontAwesomeIcon icon={faFacebook} />Total Likes</p>
                            <p className='value_app'>1476</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="col-6 pt-4">
                <div className="face_div">
                    <h3>Instagram</h3>
                    <p className="john_name">john.doe</p>
                    <div className="row">
                        <div className="col-4 pt-4">
                        <p> <FontAwesomeIcon icon={faInstagram} />Followers</p> 
                            <p className='value_app'>1476</p>
                        </div>
                        <div className="col-4 pt-4">
                        <p> <FontAwesomeIcon icon={faInstagram} />Likes</p>
                            <p className='value_app'>1476</p>
                        </div>

                        <div className="col-4 pt-4">
                        <p> <FontAwesomeIcon icon={faInstagram} />Comments</p>
                            <p className='value_app'>1476</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 pt-4">
          
                <div className="face_div">
                    <h3>Twitter</h3>
                    <p className="john_name">john.doe</p>
                    <div className="row">
                        <div className="col-6 pt-4">
                        <p>
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />Followers
    </p>
                            <p className='value_app'>1476</p>
                        </div>
                        <div className="col-6 pt-4">
                        <p>
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Retweets
    </p>
                            <p className='value_app'>1476</p>
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