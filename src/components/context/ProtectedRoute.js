
import { Routes, Navigate, Route } from "react-router-dom";
import { useContextApi } from "./UseContext";
import Myprofile from "../myprofile";
import Users from "../Users";
import Integration from "../Integrations";
import Sedule from "../Sedule";
import Accountoverview from "../Accountoverview";
import Post from "../post/Post";
import Analytics from "../analytic/Analytics";
import Layout from "../../pages/pageLayout/Layout";



import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
// import '../../components/Sedule.css';
// import '../Dashboard/dashboard.css';
import { FiMenu } from "react-icons/fi";





import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";


const ProtectedRoute = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { userEmail } = useContextApi();

  if (!userEmail) {
    // Redirect to login page if the user is not authenticated
    return <Navigate to="/" />;
  }


  return (
    <Routes>

      <div className=' bg-[#F2F2F2]'>
        <button
          onClick={handleShow}
          className='pl-4 pt-2 block lg:hidden flex items-center'>
          <FiMenu className='w-12 h-12' />
        </button>
        <div className='flex'>
          <div className={`lg:w-64 hidden lg:block h-full pl-10 bg-white rounded-br-[80px] rounded-tr-[80px] fixed overflow-y-auto transition-all duration-300`}>
            <Sidebar />
          </div>
          <div className={` lg:ml-64 lg:px-5 py-2 h-full  bg-[#F2F2F2] w-full overflow-y-auto transition-all duration-300`}>
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Route index element={<Layout />} /> */}
      <Route index element={<Myprofile />} />
      <Route path="user" element={<Users />} />
      <Route path="integration" element={<Integration />} />
      <Route path="schedule" element={<Sedule />} />
      <Route path="account" element={<Accountoverview />} />
      <Route path="post" element={<Post />} />
      <Route path="analytics" element={<Analytics />} />
      {/* <Route path="editschedule/:id" element={<Editsedule />} /> */}



      <Offcanvas
        show={show}
        onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar handleClose={handleClose} />
        </Offcanvas.Body>

      </Offcanvas>


    </Routes>
  )

}; export default ProtectedRoute