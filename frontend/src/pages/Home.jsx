import heroBg from "../assets/bg.png";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import jobs from "../data/jobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center text-white relative
        "
        style={{
          backgroundImage: `url(${heroBg})`,
          minHeight: "600px",
          height: "100vh",
        }}
      >
        <section className="absolute top-130 left-0 w-full bg-white py-12 px-4 md:px-8 shadow-lg rounded-t-[60px]">
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
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
