import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import '../../components/Sedule.css';
import '../Dashboard/dashboard.css';
import { FiMenu } from "react-icons/fi";


import Offcanvas from 'react-bootstrap/Offcanvas';

const Layout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className=' bg-[#F2F2F2]'>
                <button
                    onClick={handleShow}
                    className='pl-4 pt-2 block lg:hidden flex items-center'>
                    <FiMenu className='w-12 h-12' />
                </button>
                <div className='flex'>
                    <div className={`lg:w-64 hidden lg:block h-full pl-10 bg-white rounded-br-[80px] rounded-tr-[80px] fixed overflow-y-auto transition-all duration-300`}>
                        <Sidebar/>
                    </div>
                    <div className={` lg:ml-64 lg:px-5 py-2 h-screen  bg-[#F2F2F2] w-full overflow-y-auto transition-all duration-300`}>
                        <Outlet />
                    </div>
                </div>
            </div>



            <Offcanvas
                show={show} 
                onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Sidebar  handleClose={handleClose} />
                </Offcanvas.Body>
           
            </Offcanvas>
            
        </>
    );
};

export default Layout;
