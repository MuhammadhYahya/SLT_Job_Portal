import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FormField, FormSelect } from "../components/FormInputs";
import { CloudUpload } from "lucide-react";

const ApplyForm = () => {
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "Job Title Not Found";

  const [formData, setFormData] = useState({
    initials: "",
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    contact: "",
    field: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Upload logic here...
  };

  return (
    <div className=" min-h-screen max-w-[1500px] mx-auto w-full flex justify-center items-center px-4 py-10 pt-[180px] font-[inter] ">
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded-xl p-8 w-full  space-y-6 text-4xl "
      >
        <div className="space-y-3 ">
          <div className="flex items-center">
            <label className="w-1/3 text-gray-700 font-medium flex justify-between pr-16">
              Job Title <span>:</span>
            </label>
            <p className="text-3xl">{jobTitle}</p>
          </div>

          <FormField
            label="Name with Initials"
            name="initials"
            onChange={handleChange}
          />
          <FormField
            label="Full Name"
            name="fullName"
            onChange={handleChange}
          />

          <FormSelect
            label="Gender"
            name="gender"
            options={["Male", "Female", "Other"]}
            onChange={handleChange}
          />

          <FormField
            label="Date of Birth"
            name="dob"
            type="date"
            onChange={handleChange}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <FormField
            label="Contact Number"
            name="contact"
            type="tel"
            onChange={handleChange}
          />

          <FormSelect
            label="Field"
            name="field"
            options={["Software", "Networking", "HR", "Other"]}
            onChange={handleChange}
          />

          {/* CV Upload */}
          <div className="mt-28">
            <label className="block mb-6 text-gray-700 font-medium ">
              Upload your CV here
            </label>
            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
              <label
                htmlFor="cvUpload"
                className="cursor-pointer text-gray-500 flex flex-col items-center justify-center space-y-2"
              >
                <CloudUpload />
                <span>Drag&Drop files here </span>
                <span>or</span>
                <span className="text-blue-400 font-semibold border-4 border-blue-400 p-5 rounded-md">
                  Browse Files
                </span>
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                id="cvUpload"
                className="hidden"
              />
              {/* Show file name if selected */}
              {formData.cv && (
                <p className="mt-4 text-gray-600 text-sm">
                  Selected file:{" "}
                  <span className="font-medium">{formData.cv.name}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="w-full max-w-[400px] bg-blue-900 text-white py-2 rounded-4xl hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
