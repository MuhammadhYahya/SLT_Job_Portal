
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';
const JobRow = ({ job, isSelected, onClick }) => (
  <tr
    className={`transition-all cursor-pointer ${
      isSelected ? "bg-blue-100 " : "bg-gray-100 hover:bg-gray-200"
    } rounded-lg shadow-sm`}
    onClick={onClick}
  >
    <td className="px-4 py-3 rounded-l-xl">{job.id}</td>
    <td className="px-4 py-3">{job.field}</td>
    <td className="px-4 py-3">{job.createdDate}</td>
    <td className="px-4 py-3">
      <span className="px-3 py-1 text-sm font-semibold rounded-full">
        {job.status}
      </span>
    </td>
    <td className="px-4 py-3 rounded-r-xl">
      <div className="flex items-center space-x-4">
        {/* <EditIcon /> */}
         <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </td>
  </tr>
);

export default JobRow;
