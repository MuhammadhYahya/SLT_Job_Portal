import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const isVacanciesPage = location.pathname === "/vacancies";

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-10 w-[calc(100%-40px)] max-w-[1800px] bg-white rounded-[90px] px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-h-[80px]">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <Link to="/">
            {" "}
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

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        {isVacanciesPage ? (
          <ul className="hidden md:flex gap-5 font-[inter] text-xl md:text-2xl">
            <li>
              <Link to="/vacancies">Job status</Link>
            </li>
             <span>|</span>
            <li>
              <Link to="/vacancies#apply">Apply for job</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/vacancies#contact">jobs for you</Link>
            </li>
             <span>|</span>
            <li>
              <Link to="/">Home</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex gap-5 font-[inter] text-xl md:text-2xl">
            <li>
              <Link
                to="/"
                className="text-gray-800 font-medium hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link
                to="/about"
                className="text-gray-800 font-medium hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link
                to="/vacancies"
                className="text-gray-800 font-medium hover:text-blue-500"
              >
                Vacancies
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link
                to="/login"
                className="text-gray-800 font-medium hover:text-blue-500"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-3 text-center text-lg">
          {isVacanciesPage ? (
            <>
              <li>
                <Link to="/vacancies" onClick={() => setIsOpen(false)}>
                  Job status
                </Link>
              </li>
              <li>
                <Link to="/vacancies#apply" onClick={() => setIsOpen(false)}>
                 Apply for job
                </Link>
              </li>
              <li>
                <Link to="/vacancies#contact" onClick={() => setIsOpen(false)}>
                  Jobs for you
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/vacancies" onClick={() => setIsOpen(false)}>
                  Vacancies
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
