import React from 'react'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'

export const TermsCondition = () => {

    return (
        <>
            <Header />
            <div className=' bg-[#F2F2F2] py-12 '>
                <div className="container text-lg ">

                    <div className='px-8 py-16 border-[2px] border-[#fff] rounded-3xl  bg-white text-[#6278ac]'>
                        <h2 className="text-3xl font-bold mb-4 text-[#29325f] ">Terms And Services</h2>
                        <hr />

                        <div className='my-2'>
                            <p>
                                Please read these terms of service ( "terms of service", "terms" ) carefully before using
                                {""}  <Link to="#" className='px-1 hover:underline text-lg  text-[#29325f]  font-semibold'> www.example.com </Link> {""}
                                website ( “website”, "service" ) operated by
                                {""}  <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>  www.example.com   </Link> {""}

                                ( "us", 'we", "our" ).
                            </p>

                        </div>

                        <div className='py-4'>

                            <h3 className='text-xl text-[#11264D] font-semibold'> Conditions of use </h3>
                            <p> By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>



                            <h3 className='text-xl text-[#11264D] font-semibold'> Privacy policy </h3>
                            <p> Before you continue using our website, we advise you to read our .</p>
                            <p className='hover:underline cursor-pointer'> Privacy policy</p>
                            <p>regarding our user data collection. It will help you better understand our practices.</p>




                            <h3 className='text-xl text-[#11264D] font-semibold'> Age restriction </h3>
                            <p> You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreemen
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>


                            <h3 className='text-xl text-[#11264D] font-semibold'> Intellectual property </h3>
                            <p>
                                You agree that all materials, products, and services provided on this website are the property of
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                intellectual property in any way, including electronic, digital, or new trademark registrations. You grant
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
                            </p>



                            <h3 className='text-xl text-[#11264D] font-semibold'> User accounts </h3>
                            <p> As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password. If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address it accordingly. We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion .</p>


                            <h3 className='text-xl text-[#11264D] font-semibold'> Limitation on liability</h3>
                            <p>
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                is not liable for any damages that may occur to you as a result of your misuse of our
                                website.
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                reserves the right to edit, modify, and change this Agreement any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between
                                <Link to="#" className='px-1 hover:underline text-lg font-semibold text-[#29325f]  '>    https://social.jobsinindore.net   </Link> {""}
                                and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
                            </p>



                        </div>


                    </div>

                    <p className='text-center py-4 ' >
                        <Link to="/policy/privacy-policy" className='text-xl font-semibold hover:text-orange-700 text-orange-500 hover:underline '> Privecy & Policy </Link>
                    </p>

                </div>
            </div>
        </>
    )
}
