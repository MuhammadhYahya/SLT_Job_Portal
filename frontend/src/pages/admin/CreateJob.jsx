import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import CustomDatePicker from "../../components/CustomDatePicker";
import { FormInput } from "../../components/FormInputs";

const CreateJob = () => {
  const [dueDate, setDueDate] = useState(null);
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    navigate("/admin/update-jobs");
  };

  return (
    <AdminLayout>
      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm w-full font-[inter]">
        {/* Form Title */}
        <h1 className="md:text-4xl text-3xl font-bold mb-8 ">
          Company Job Vacancy :{" "}
          <span className="block md:inline">Web Development Trainee</span>
        </h1>

        {/* Form Element */}
        <form onSubmit={handleCreate} action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 md:gap-y-8">
            {/* Row 1 */}
            <div className="lg:col-span-1">
              <FormInput id="jobId" label="Job ID :" />
            </div>
            <div className="lg:col-span-2"></div>
            {/* Row 2: Three fields normally spaced */}
            <FormInput id="jobField" label="Job Field :" />
            <FormInput id="jobPosition" label="Job Position :" />
            <FormInput id="contactNumber" label="Contact Number :" />
            {/* Row 3: Three fields normally spaced */}
            <FormInput id="background" label="Background :" />
            <FormInput id="salary" label="Salary :" />

            {/* Due Date with calendar icon */}
            <CustomDatePicker
              label="Due Date:"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
            />

            {/* Row 4: Two fields, each span one column, 3rd column empty */}
            <FormInput id="companyEmail" label="Company Email:" type="email" />
            <FormInput id="companyLocation" label="Company Location:" />
            <div></div>
            {/* Row 5: WorkType (1 col), JobDescription (2 cols) */}
            <div className="lg:col-span-1">
              <FormInput id="workType" label="Work Type:" />
            </div>
            <div className="lg:col-span-2">
              <label
                htmlFor="jobDescription"
                className="block md:text-3xl text-2xl font-medium  mb-2"
              >
                Job Description :
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                rows="5"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex md:justify-end justify-center ">
            <button
              onClick={handleCreate}
              type="submit"
              className=" px-8 py-2.5 bg-blue-700 text-white font-semibold rounded-4xl shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateJob;
