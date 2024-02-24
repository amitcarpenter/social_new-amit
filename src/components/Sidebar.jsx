import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LuLogOut } from "react-icons/lu";
import { useContextApi } from './context/UseContext';
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import { LuPlug2 } from "react-icons/lu";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineScheduleSend } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
const Sidebar = ({ handleClose }) => {
    const { Role, handleLogout } = useContextApi()

    console.log(Role, "role....")

    const { pathname } = useLocation();
    console.log(pathname, "---path name")

    const navigate = useNavigate();

    const handleClick = (path) => {
        if (typeof handleClose === 'function') {
            handleClose();
        }
        navigate(path);
    };

    return (
        <div className=' h-full bg-white'>
            <div className='text-lg py-10'>
                <h4 className='font-bold text-xl'> Menu</h4>
            </div>

            <p onClick={() => handleClick("/dashboard")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span>
                    <FaUser size={24} />
                </span>
                <span> My Profile</span>
            </p>

            <p onClick={() => handleClick("account")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/account" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2 mb-2.5`}>
                <span><MdDashboard size={25} /></span>
                <span>Dashboard</span>
            </p>

            <p onClick={() => handleClick("integration")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/integration" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span><LuPlug2 size={25} /></span>
                <span> Integrations</span>
            </p>

            <p onClick={() => handleClick("post")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/post" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span><PiNotePencilBold size={25} /></span>
                <span>POST</span>
            </p>

            <p onClick={() => handleClick("Schedule")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/Schedule" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span><MdOutlineScheduleSend size={25} /></span>
                <span> Schedule</span>
            </p>


            <p onClick={() => handleClick("analytics")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/analytics" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span><MdAnalytics size={25} /> </span>
                <span> Analytics</span>
            </p>


            <p onClick={() => handleClick("#")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/Settings" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span> <IoMdSettings size={25} /></span>
                <span> Settings</span>
            </p>


            <p onClick={() => handleClick("#")} className={`flex items-center gap-3 cursor-pointer
         ${pathname === "/dashboard/Support" ? "border-r-sky-600 border-r-4 text-blue-600" : "text-gray-600"}  hover:text-gray-700 py-2  mb-2.5`}>
                <span><MdOutlineEmail size={25} /></span>
                <span> Support</span>
            </p>



            {
                Role == "admin" && (
                    <Link

                        to="user"
                        className={`flex items-center gap-3 cursor-pointer text-gray-600 hover:text-gray-700 py-2 mb-2`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <path
                                d="M18.5 8C18.5 8.53043 18.2893 9.03914 17.9142 9.41421C17.5391 9.78929 17.0304 10 16.5 10C15.9696 10 15.4609 9.78929 15.0858 9.41421C14.7107 9.03914 14.5 8.53043 14.5 8C14.5 7.46957 14.7107 6.96086 15.0858 6.58579C15.4609 6.21071 15.9696 6 16.5 6C17.0304 6 17.5391 6.21071 17.9142 6.58579C18.2893 6.96086 18.5 7.46957 18.5 8Z"
                                fill="#A7A7A7"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.443 1.25H12.557C14.866 1.25 16.675 1.25 18.087 1.44C19.531 1.634 20.671 2.04 21.566 2.934C22.461 3.829 22.866 4.969 23.06 6.414C23.25 7.825 23.25 9.634 23.25 11.943V12.031C23.25 13.94 23.25 15.502 23.146 16.774C23.042 18.054 22.829 19.121 22.351 20.009C22.141 20.4 21.881 20.751 21.566 21.066C20.671 21.961 19.531 22.366 18.086 22.56C16.675 22.75 14.866 22.75 12.557 22.75H12.443C10.134 22.75 8.325 22.75 6.913 22.56C5.469 22.366 4.329 21.96 3.434 21.066C2.641 20.273 2.231 19.286 2.014 18.06C1.799 16.857 1.76 15.36 1.752 13.502C1.75 13.029 1.75 12.529 1.75 12.001V11.943C1.75 9.634 1.75 7.825 1.94 6.413C2.134 4.969 2.54 3.829 3.434 2.934C4.329 2.039 5.469 1.634 6.914 1.44C8.325 1.25 10.134 1.25 12.443 1.25ZM7.113 2.926C5.835 3.098 5.064 3.426 4.495 3.995C3.925 4.565 3.598 5.335 3.426 6.614C3.252 7.914 3.25 9.622 3.25 12V12.844L4.251 11.967C4.6902 11.5828 5.25902 11.3799 5.84223 11.3994C6.42544 11.4189 6.97944 11.6593 7.392 12.072L11.682 16.362C12.0149 16.6948 12.4546 16.8996 12.9235 16.9402C13.3925 16.9808 13.8608 16.8547 14.246 16.584L14.544 16.374C15.0997 15.9835 15.7714 15.7932 16.4493 15.834C17.1273 15.8749 17.7713 16.1446 18.276 16.599L21.106 19.146C21.392 18.548 21.561 17.762 21.651 16.653C21.749 15.448 21.75 13.946 21.75 12C21.75 9.622 21.748 7.914 21.574 6.614C21.402 5.335 21.074 4.564 20.505 3.994C19.935 3.425 19.165 3.098 17.886 2.926C16.586 2.752 14.878 2.75 12.5 2.75C10.122 2.75 8.413 2.752 7.113 2.926Z"
                                fill="#A7A7A7"
                            />
                        </svg>
                        Users
                    </Link>
                )
            }



            <p
                onClick={handleLogout}
                className={`flex items-center gap-3 cursor-pointer
                "border-r-sky-600 border-r-4 text-red-600 hover:text-red-700  py-2 mb-2`}>
                <LuLogOut size={30} />
                <p className='text-xl text-red-600 font-bold'>Logout</p>
            </p>
        </div>
    )
}

export default Sidebar





