import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Change if your backend runs on another port
  withCredentials: false,
});

export default api;
