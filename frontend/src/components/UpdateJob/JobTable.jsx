import JobRow from "./JobRow";

const JobTable = ({ jobs, selectedIndex, onSelect }) => {
  return (
    <div className="w-full max-w-7xl bg-white bg-opacity-90 rounded-2xl shadow-lg p-4 sm:p-6 font-['Roboto']">
      <div className="overflow-x-auto">
        <table
          className="min-w-full table-auto border-separate"
          style={{ borderSpacing: "0 1rem" }}
        >
          <thead>
            <tr className="bg-blue-800 text-white text-left text-sm uppercase">
              <th className="px-4 py-3 rounded-l-3xl font-semibold">Job ID</th>
              <th className="px-4 py-3 font-semibold">Job Field</th>
              <th className="px-4 py-3 font-semibold">Created Date</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 rounded-r-3xl font-semibold">
                Modification
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <JobRow
                  key={index}
                  job={job}
                  isSelected={selectedIndex === index}
                  onClick={() => onSelect(index)}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500 text-lg"
                >
                  No jobs found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;
