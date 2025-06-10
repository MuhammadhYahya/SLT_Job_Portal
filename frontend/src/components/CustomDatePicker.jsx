import DatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';

import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ label, onChange, selected }) => {
  return (
    <div>
      <label className="block md:text-3xl text-2xl font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <DatePicker
          selected={selected}
          onChange={onChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select date"
          className="w-full md:h-[70px] h-[50px]  pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <CalendarDays className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
