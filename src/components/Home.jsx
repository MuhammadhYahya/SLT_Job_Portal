import React from "react";
import Navbar from "./Home/Navbar";
import HeroSection from "./Home/HeroSection";
import JobListings from "./Home/JobListings";
import JobCard from "./Home/JobCard";
import Footer from "./Home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JobListings />
      <JobCard />
      <Footer />
    </>
  );

};

export default Home;
