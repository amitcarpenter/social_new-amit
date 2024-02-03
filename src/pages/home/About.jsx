import React from 'react'
import Header from '../../components/header/Header'
import Footerr from '../../components/footer/footerr'

import '../../pages/home/about.css'

function About() {
    return (
        <>
            <Header />

            <section className="first_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-7">
                            <h1>Our Story</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.</p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5">
                            <img src="asset/about1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="second_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-5">
                            <img src="asset/Delivery.png" alt="" />
                        </div>
                        <div className="col-12 col-md-7 col-lg-7">
                            <h1>Mission</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="third_sec">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-7 col-lg-7">
                            <h1>Vision</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.</p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5">
                            <img src="asset/businessman.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="fourth_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-5">
                            <img src="asset/young.png" alt="" />
                        </div>
                        <div className="col-12 col-md-7 col-lg-7">
                            <h1>Values</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas fusce leo. Amet molestie auctor purus ultricies integer eget. Libero id nulla vulputate malesuada quis mi viverra tempus.Lorem ipsum dolor sit amet consectetur. Nunc lacus adipiscing leo netus aliquam duis vulputate odio. Euismod ac egestas la vulputate malesuada quis mi viverra tempus.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footerr />

        </>

    )
}

export default About