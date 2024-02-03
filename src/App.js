import "./App.css";
// import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Contact from "./pages/home/contact";
import Login from "./pages/home/Login";
import Dashboard from "./pages/Dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/home/Signup";
import Users from "./components/Users";
import Service from "./pages/home/Service";
import Editsedule from "./components/post/Editsedule";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Dashboard />} />

          <Route path="/editschedule/:id" element={<Editsedule />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



