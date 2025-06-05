import { useNavigate } from "react-router-dom";
const JobCard = ({ title, description, requirements = [] }) => {
  const navigate = useNavigate();
  navigate("/apply");
  return (
    <div className="p-6 rounded-[30px] shadow-lg flex flex-col h-full w-full max-w-[400px] mx-auto font-['inter']">
      <div className="bg-[rgb(0,71,171)] text-white text-xl md:text-2xl min-h-[130px] font-bold flex justify-center items-center py-4 px-6 rounded-t-[20px] text-center">
        {title}
      </div>

      {description && (
        <p className="text-sm md:text-base text-black m-4 leading-none">
          {description}
        </p>
      )}

      {requirements.length > 0 && (
        <ul className="text-sm md:text-base text-gray-600 pl-3  space-y-1.5">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start leading-relaxed">
              <span className="mr-2">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex-grow" />

      <button
        onClick={() => navigate("/apply", { state: { jobTitle: title } })}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full cursor-pointer w-full max-w-[200px] mx-auto"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
