import AdminLayout from "../../layouts/AdminLayout";
import { useState } from "react";
import jobData from "../../data/recivedCVsdata";
const AcceptedCVs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev + 1) % jobData.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev - 1 + jobData.length) % jobData.length);
    }
  };
  return (
        <AdminLayout>
            <div tabIndex={0} onKeyDown={handleKeyDown}>
        {/* Background Image */}

        {/* table */}
        <div className="relative z-10 pt-10 flex justify-center">
          <div className="w-full max-w-8xl bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 mx-4 md:mx-8 md:p-8 ">
            <h2 className="font-['inter'] text-xl md:text-4xl font-bold mb-4">
              Received CVs:
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full  table-auto border-separate border-spacing-y-6 md:text-2xl font-['Roboto']">
                <thead>
                  <tr className="bg-blue-800 text-white text-left">
                    <th className="px-4 py-2 rounded-tl-xl rounded-bl-xl">
                      Job Title
                    </th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Gender</th>
                    <th className="px-4 py-2">Field</th>
                    <th className="px-4 py-2">Contact Number</th>
                    <th className="px-4 py-2 rounded-tr-xl rounded-br-xl">
                      CV
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobData.map((job, index) => (
                    <tr
                      key={index}
                      className={`transition-all cursor-pointer ${
                        selectedIndex === index
                          ? "bg-blue-100  "
                          : "bg-gray-100 hover:bg-gray-200"
                      } rounded-lg`}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <td className="px-4 py-2">{job.jobTitle}</td>
                      <td className="px-4 py-2">{job.applicantName}</td>
                      <td className="px-4 py-2">{job.gender}</td>
                      <td className="px-4 py-2">{job.field}</td>
                      <td className="px-4 py-2">{job.contactNumber}</td>
                      <td className="px-4 py-2">{job.cv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AcceptedCVs