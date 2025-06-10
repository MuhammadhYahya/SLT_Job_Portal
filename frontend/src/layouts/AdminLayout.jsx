import AdminSidebar from "../components/AdminSidebar";


const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen "> {/* pt-24 = below fixed Navbar */}
      <AdminSidebar />
      <main className="flex-1 p-6 pt-40 md:ml-[250px]">{children}</main>
    </div>
  );
};

export default AdminLayout;
