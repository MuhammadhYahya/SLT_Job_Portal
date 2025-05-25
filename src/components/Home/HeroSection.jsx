import heroBg from "../../assets/bg.png";
import JobListings from "./JobListings";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          minHeight: "600px",
          height: "100vh",
        }}
      >
        <JobListings />
      </div>
    </>
  );
};

export default HeroSection;
