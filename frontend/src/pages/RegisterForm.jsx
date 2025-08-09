import signupImg from "../assets/registrer.png";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user" // default role
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password confirmation check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("Sending registration data:", formData);
      const res = await axios.post("http://localhost:5000/api/users/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
console.log("Registration response:", res.data);
      alert("Registered successfully!");
      console.log(res.data);
    } catch (err) {
      console.error("Registration error:", err.response || err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
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
              e.target.src = "https://placehold.co/600x400/ffffff/cccccc?text=Illustration";
            }}
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-blue-800 text-white p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
            Register
          </h1>

          {/* ✅ Wrap everything inside <form> including the submit button */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Username */}
            <div>
              <label className="block text-sm font-light mb-2">User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-light mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-light mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-light mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="block text-sm font-light mb-2">Select Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full p-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
