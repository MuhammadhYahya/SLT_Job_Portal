import { useNavigate } from "react-router-dom";
import userJOBbg from "../assets/userJobBg.png";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";
const Vacancies = () => {
    const navigate = useNavigate(); 

  const handleCheckStatus = () => {
    navigate("/job-status"); 
  };
  return (
    <>
      <div
        className="bg-cover bg-center  relative"
        style={{
          backgroundImage: `url(${userJOBbg})`,
          minHeight: "600px",
          height: "100vh",
        }}
      >
        <div className="pt-[200px] px-24 font-[inter]">
          <h2 className="text-3xl font-bold  mb-4 text-center md:text-4xl md:text-left md:pl-10">
            Find Your Job that is prefer for you
          </h2>
          <section className="absolute top-80 left-0  w-full bg-white py-12 px-4 md:px-8 shadow-lg rounded-t-[60px]">
            <div className=" max-w-[1800px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {jobs.map((job, index) => (
                  <JobCard
                    key={index}
                    title={job.title}
                    description={job.description}
                    requirements={job.requirements}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <button onClick={handleCheckStatus} className="bg-blue-800 hover:bg-blue-900 text-white text-2xl md:text-3xl cursor-pointer md:px-8 md:py-4 px-6 py-3 rounded-full shadow-md transition duration-300">
                Check the Applied Job Status
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
