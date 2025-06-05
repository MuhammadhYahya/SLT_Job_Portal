import { useState } from "react";
import userJOBbg from "../assets/userJobBg.png";
import jobData from "../data/jobData";

const JobStatus = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev + 1) % jobData.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev - 1 + jobData.length) % jobData.length);
    }
  };

  return (
    <div className="relative h-screen" tabIndex={0} onKeyDown={handleKeyDown}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${userJOBbg})`,
        }}
      ></div>

      {/* table */}
      <div className="relative z-10 pt-46 flex justify-center">
        <div className="w-full max-w-8xl bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 mx-4 md:mx-8 md:p-8 ">
          <h2 className="font-['inter'] text-xl md:text-4xl font-bold mb-4">
            Applied Job Status:
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full  table-auto border-separate border-spacing-y-6 md:text-2xl font-['Roboto']">
              <thead>
                <tr className="bg-blue-800 text-white text-left">
                  <th className="px-4 py-2 rounded-tl-xl rounded-bl-xl">
                    Job Field
                  </th>
                  <th className="px-4 py-2">Job Position</th>
                  <th className="px-4 py-2">Recommendation</th>
                  <th className="px-4 py-2 rounded-tr-xl rounded-br-xl">
                    Status
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
                    <td className="px-4 py-2">{job.field}</td>
                    <td className="px-4 py-2">{job.position}</td>
                    <td className="px-4 py-2">{job.recommendation}</td>
                    <td className="px-4 py-2">{job.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatus;
