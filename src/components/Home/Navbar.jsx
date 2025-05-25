import { useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-10 w-[calc(100%-40px)] max-w-[1800px] bg-white rounded-[90px] px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-h-[80px]">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className="w-[150px] h-[80px] object-contain rounded-3xl"
          />
          <span className="font-['Montserrat'] font-semibold text-xl md:text-3xl text-blue-700">
            Training Program
          </span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        <ul className="hidden md:flex gap-5 font-[inter] text-xl md:text-2xl">
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              About
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Services
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-3 text-center text-lg">
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
