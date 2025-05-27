import AboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section className="pt-[150px] px-6 font-[lato]">
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center md:text-5xl md:text-left md:pl-10">
        About Us
      </h2>
      <div className="max-w-12xl mx-auto flex flex-col-reverse md:flex-row justify-center gap-10">
        {/* Left Content */}
        <div className="flex-1 ">
          <p className="text-gray-800 mb-6 leading-[100%] font-bold text-xl md:text-2xl md:mb-16">
            "Welcome to [Your Company Name], where innovation meets passion.
            Established with a commitment to [briefly mention your mission or
            purpose], we strive to [highlight key values or goals]. Our
            dedicated team of [mention your team's expertise] is driven by a
            shared vision: [describe the overarching goal or impact]. At [Your
            Company Name], we believe in [mention any unique approach or
            philosophy]. Join us on this exciting journey as we [briefly
            describe what sets your company apart]."
          </p>
          <div className="text-center md:text-left md:pl-10">
            <button className=" md:w-[220px] md:py-4  bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition ">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={AboutImage}
            alt="Team Illustration"
            className="w-full max-w-[800px] mx-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
