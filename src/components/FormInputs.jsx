export const FormField = ({ label, name, type = "text", onChange }) => (
  <div className="flex items-center ">
    <label className="w-1/3 text-gray-700 font-medium flex justify-between pr-16">
      {label}
      <span>:</span>
    </label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      className="flex-1 border border-gray-300 rounded-3xl px-3 py-2 focus:outline-blue-400 text-3xl"
      required
    />
  </div>
);

export const FormSelect = ({ label, name, options = [], onChange }) => (
  <div className="flex items-center ">
    <label className="w-1/3 text-gray-700 font-medium flex justify-between pr-16">
      {label}
      <span>:</span>
    </label>
    <select
      name={name}
      onChange={onChange}
      className="flex-1 border border-gray-300  px-3 py-2 focus:outline-blue-400 rounded-3xl text-3xl"
      required
    >
      <option value="">Select</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
