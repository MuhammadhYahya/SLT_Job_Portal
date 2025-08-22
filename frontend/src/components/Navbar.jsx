import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X, User } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login status
  const [isProfileOpen, setIsProfileOpen] = useState(false); // profile drawer
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Check login status on mount & whenever token changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    navigate("/login");
  };

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
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
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

          {!isLoggedIn ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2"
              >
                <User className="w-6 h-6" />
              </button>
            </li>
          )}
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

        {!isLoggedIn ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2"
            >
              <User className="w-6 h-6" />
            </button>
          </li>
        )}
      </>
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[1800px] px-6 py-4 shadow-md rounded-[90px] bg-white">
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

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-5 font-[inter] text-xl md:text-2xl">
            {renderNavLinks()}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-32 flex flex-col gap-3 text-center text-lg backdrop-blur-md rounded-2xl p-4 shadow-lg z-40 relative bg-white">
          {renderNavLinks()}
        </ul>
      )}

      {/* Profile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity ${
          isProfileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsProfileOpen(false)}
      ></div>

      {/* Profile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 shadow-xl ${
          isProfileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full justify-start">
          <h2 className="text-xl font-bold mb-6">Profile</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsProfileOpen(false)}
              >
                My Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;