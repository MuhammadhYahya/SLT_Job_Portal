import loginImg from "../assets/login.png";
import { Link } from "react-router-dom";
// SVG for the Google icon
const GoogleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 12.19C34.553 8.62 29.577 6.5 24 6.5C13.255 6.5 5 14.754 5 25.5s8.255 19 19 19s19-8.255 19-19c0-1.802-.266-3.53-.744-5.143z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12.5 24 12.5c3.059 0 5.842 1.154 7.961 3.039l5.843-5.844C34.553 8.62 29.577 6.5 24 6.5C16.318 6.5 9.896 9.998 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 44.5c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36.5 24 36.5c-5.22 0-9.641-3.657-11.283-8.542l-6.522 5.025C9.505 39.556 16.227 44.5 24 44.5z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.888 44 31.138 44 25.5c0-1.802-.266-3.53-.744-5.143z"
    ></path>
  </svg>
);

export default function App() {
  return (
    // Main container
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-[Lato] p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 bg-blue-800 text-white p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Login</h1>

          <form className="flex flex-col gap-6">
            <div>
              <label className="text-xl">Email address :</label>
              <input
                type="email"
                placeholder=""
                className="w-full mt-2 p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-xl">Password :</label>
              <input
                type="password"
                placeholder=""
                className="w-full mt-2 p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full text-xl bg-white text-blue-800 font-bold py-3 rounded-full mt-4 hover:bg-gray-200 transition-colors duration-300 shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xl">
              Don't you have an account?{" "}
              <Link to="/signup" className=" hover:underline">SignUp</Link>
                
         
            </p>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="px-4 text-sm font-light tracking-wider">OR</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div>

            <div className="flex justify-center">
              <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 shadow-md">
                <GoogleIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 bg-white hidden md:flex items-center justify-center p-8">
          <img src={loginImg} alt="image" className="max-w-md w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
