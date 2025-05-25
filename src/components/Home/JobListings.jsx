import JobCard from "./JobCard";
const JobListings = () => {
  const jobs = [
    {
      title: "Trainee Network Engineers",
      description:
        "We are hiring trainee network engineers for SLTMobitel. This is an excellent degree, a recognized degree in Computer Science, Information Technology, Electrical Engineering, etc. (Final semester, company training full year, 04th year), and fresh graduates are preferred.",
      requirements: [
        "No Job experiences are needed.",
        "Networking knowledge.",
        "University or Equivalent Collage.",
        "Hardware Firewall and security knowledge.",
        "Networking device configuration knowledge.",
      ],
    },
    {
      title: "ACCOUNTANT-FINANCIAL ACCOUNTING",
      description:
        "Sri Lanka Telecom  is  in  search  of  high  caliber, result-oriented  and  qualified  individuals  capable of playing a key  role  in  the  finance  team. You will be engaged in a range  of  tasks  in  financial  accounting  in  a  highly IT-backed  work environment  and expected to collaborate with    subsidiary    companies    and    cross - functional departments  to  implement  key  business  drivers   and operational controls.",
      requirements: [
        "Associate Membership of ICASL/CIMA/ACCA.",
        "Preference will be given to the candidates who are partly qualified.",
        "An excellent leader with excellent interpersonal and communication skills.",
      ],
    },
    {
      title: "ENGINEERS",
      description:
        "As an Engineer of the Engineering ICT Solutions Provider, you will be analyzing the requirements of our team, which is mainly responsible for planning, designing, operating and maintaining our state-of-the-art ICT Infrastructure.",
      requirements: [
        "Four year Degree in BSc Engineering (Electrical or Electronic, Telecommunication, IT) from a University/Institution recognized by UGC of Sri Lanka.",
        "Thorough knowledge of the latest ICT developments, technologies and trends.",
      ],
    },
    {
      title: "TECHNICIANS",
      description:
        "Technicians are mainly responsible to install, maintain and repair electronic communication equipment in telecommunication networks and internet supply systems. Technicians also maintain customer equipment, end systems, its fixed and inputs teams.",
      requirements: [
        "NVQ Level 4 or above in the field of Electrical/ Electronic/ Telecommunication/ IT.",
        "Should have knowledge in computer hardware and network installation and maintenance.",
      ],
    },
  ];

  return (
    <section className="absolute top-130 left-0 w-full bg-white py-12 px-4 md:px-8 shadow-lg rounded-t-[60px]">
      <div className="container mx-auto">
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
    </section>
  );
};

export default JobListings;