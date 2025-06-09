import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Job Creation", path: "/admin/create-job" },
    { name: "Job Modification", path: "/admin/update-jobs" },
    { name: "Received CVs", path: "/admin/received-cvs" },
    { name: "Accepted CVs", path: "/admin/accepted-cvs" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar (full height) */}
      <aside
        className={`
          fixed md:static pt-40 top-0 left-0 
          h-screen md:h-screen w-[250px] 
          bg-[#003366] text-white p-6
          transform md:translate-x-0 transition-transform duration-300 ease-in-out
          z-40 md:z-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        <nav className="flex flex-col gap-6 mt-20 md:mt-0">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2 pl-6 rounded-l-full transition-all duration-200 hover:bg-white hover:text-[#003366] ${
                  isActive ? "bg-white text-[#003366] font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile toggle button */}
      <button
        className="fixed top-1/2 left-0 z-50 p-2 bg-[#003366] text-white rounded-r-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>
    </>
  );
};

export default AdminSidebar;
