import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              to="/services"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-3 text-center text-lg">
          <li>
            <Link
              to="/"
              className="text-gray-800 font-medium hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 font-medium hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-800 font-medium hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 font-medium hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
