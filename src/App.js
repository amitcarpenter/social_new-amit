import "./App.css";
// import Header from './components/header/Header';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Contact from "./pages/home/contact";
import Login from "./pages/home/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/home/Signup";
import Users from "./components/Users";
import Service from "./pages/home/Service";
import Editsedule from "./components/post/Editsedule";
import Layout from "./pages/pageLayout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Integration from "./components/Integrations";

import Myprofile from "./components/myprofile";
import Sedule from "./components/Sedule";
import Accountoverview from "./components/Accountoverview";
import Post from "./components/post/Post";
import Analytics from "./components/analytic/Analytics";
import { useContextApi } from "./components/context/UseContext";
import TwitterLogint from "./components/TwitterLogint ";

function App() {
  const { userEmail } = useContextApi()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/twit" element={<TwitterLogint/>}/>
        {userEmail ? (
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Myprofile />} />
            <Route path="user" element={<Users />} />
            <Route path="integration" element={<Integration />} />
            <Route path="schedule" element={<Sedule />} />
            <Route path="account" element={<Accountoverview />} />
            <Route path="post" element={<Post />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="editschedule/:id" element={<Editsedule />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}

      </Routes>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;

