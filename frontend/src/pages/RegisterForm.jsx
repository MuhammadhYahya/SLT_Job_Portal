import signupImg from "../assets/registrer.png"

export default function RegisterForm() {
  return (
    // Main container
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 bg-white hidden md:flex items-center justify-center p-8">
          <img
            src={signupImg}
            alt="An illustration of a person creating a new account on a giant smartphone screen."
            className="max-w-md w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/ffffff/cccccc?text=Illustration";
            }}
          />
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full md:w-1/2 bg-blue-800 text-white p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
            Register
          </h1>

          <form className="grid grid-cols-[auto_1px_1fr] gap-6  items-center w-full">
            <label className="text-right text-base font-light pr-4">
              User ID
            </label>
            <div className="row-span-4 bg-white w-px h-full mr-5" />
            <input
              type="text"
              className="w-full p-3  rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="text-right text-base font-light pr-4">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="text-right text-base font-light pr-4">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="text-right text-base font-light pr-4">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </form>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
