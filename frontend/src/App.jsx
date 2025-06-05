import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Vacancies from "./pages/Vacancies";
import ApplyForm from "./pages/ApplyForm";
import JobStatus from "./pages/JobStatus";

const App = () => {
  return (
    <BrowserRouter>
      {/* Common Navbar visible on every page */}
      <Navbar />

      {/* Route definitions */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/job-status" element={<JobStatus/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;