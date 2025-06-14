import AdminSidebar from "../components/AdminSidebar";
import userJOBbg from "../assets/adminBG.png";

const AdminLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen ">
    <div className="flex min-h-screen "> {/* pt-24 = below fixed Navbar */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${userJOBbg})`,
            }}
          ></div>
      <AdminSidebar />
      <main className="flex-1 p-6 pt-40 md:ml-[250px]">{children}</main>
    </div>
    </div>
  );
};

export default AdminLayout;
