import { useState, useRef, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import SearchBar from "../../components/UpdateJob/SearchBar";
import JobTable from "../../components/UpdateJob/JobTable";
const UpdateJob = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);

  const jobData = [
    {
      id: "IT",
      field: "QA Trainee",
      createdDate: "2023/10/14",
      status: "Rejected",
    },
    {
      id: "HR",
      field: "HR Trainee",
      createdDate: "2023/09/11",
      status: "Accepted",
    },
    {
      id: "Finance",
      field: "Accountant",
      createdDate: "2023/08/16",
      status: "Rejected",
    },
    {
      id: "IT",
      field: "Web Developer",
      createdDate: "2023/08/02",
      status: "Accepted",
    },
    {
      id: "Marketing",
      field: "SEO Specialist",
      createdDate: "2023/07/25",
      status: "Accepted",
    },
  ];

  const filteredJobs = jobData.filter((job) =>
    [job.id, job.field, job.status].some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleKeyDown = (e) => {
    if (!filteredJobs.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredJobs.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) => (prev - 1 + filteredJobs.length) % filteredJobs.length
      );
    }
  };

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    // style of ths div is used in admin layout as a universal to all pages
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={containerRef}
    >

      <AdminLayout>
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <JobTable
            jobs={filteredJobs}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />
        </div>
      </AdminLayout>
    </div>
  );
};

export default UpdateJob;
