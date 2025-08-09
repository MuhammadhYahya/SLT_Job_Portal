import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isJobPages =
    location.pathname.startsWith("/vacancies") ||
    location.pathname.startsWith("/apply") ||
    location.pathname.startsWith("/job-status");


  const isAdminPages = location.pathname.startsWith("/admin");

  const renderNavLinks = () => {
    
    if (isAdminPages) {
      return (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/login">Logout</Link>
          </li>
        </>
      );
    }

    if (isJobPages) {
      return (
        <>
          <li>
            <Link to="/job-status">Job Status</Link>
          </li>
          <li>
            <Link to="/vacancies">Apply for Job</Link>
          </li>
          <li>
            <Link to="/vacancies">Jobs for You</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/vacancies">Vacancies</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </>
    );
  };

  return (
    <>
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[1800px]  px-6 py-4 shadow-md rounded-[90px] bg-white">
      <div className="flex justify-between items-center max-h-[80px]">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] h-[80px] object-contain rounded-3xl"
            />
          </Link>
          <span className="font-['Montserrat'] font-semibold text-xl md:text-3xl text-blue-700">
            Training Program
          </span>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden                                                ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-5 font-[inter] text-xl md:text-2xl">
          {renderNavLinks()}
        </ul>
      </div>
    </nav>
    <nav>
      
         {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-32 top-10 flex flex-col gap-3 text-center text-lg backdrop-blur-md  rounded-2xl p-4 shadow-lg z-40 relative bg-white">
          {renderNavLinks()}
        </ul>
      )}
    </nav>
    </>
  );
};

export default Navbar;

