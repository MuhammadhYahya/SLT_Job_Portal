import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vacancies from "./pages/Vacancies";
import ApplyForm from "./pages/ApplyForm";
import JobStatus from "./pages/JobStatus";
import Login from "./pages/login";
import RegisterForm from "./pages/RegisterForm";
import Navbar from "./components/Navbar";
import CreateJob from "./pages/admin/CreateJob";
import UpdateJobs from "./pages/admin/UpdateJobs";
import ReceivedCVs from "./pages/admin/ReceivedCVs";
import AcceptedCVs from "./pages/admin/AcceptedCVs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/job-status" element={<JobStatus />} />
          <Route path="/admin/create-job" element={<CreateJob />} />
          <Route path="/admin/update-jobs" element={<UpdateJobs />} />
          <Route path="/admin/received-cvs" element={<ReceivedCVs />} />
          <Route path="/admin/accepted-cvs" element={<AcceptedCVs />} />
        </Route>

        {/* Routes without Navbar */}
        <Route element={<LayoutWithoutNavbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function LayoutWithoutNavbar() {
  return <Outlet />;
}

export default App;
