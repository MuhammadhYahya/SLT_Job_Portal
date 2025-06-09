// import AdminSidebar from "../../components/AdminSidebar";

// const CreateJob = () => {
//   return (
//     <>
//       <div className="flex min-h-screen">
//         <AdminSidebar />
//         <main className="flex-1 p-6  pt-40 ">
          
//         </main>
//       </div>
//     </>
//   );
// };

// export default CreateJob;
import AdminLayout from "../../layouts/AdminLayout";

const CreateJob = () => {
  return (
    <AdminLayout>
      {/* Your page content here */}
      <h1 className="text-2xl font-bold mb-4">Create Job</h1>
      {/* Form goes here */}
    </AdminLayout>
  );
};

export default CreateJob;
