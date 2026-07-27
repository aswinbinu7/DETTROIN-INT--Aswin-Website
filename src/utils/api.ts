import axios from "axios";

console.log("API URL Loaded:", process.env.NEXT_PUBLIC_API_URL);

// Create an Axios instance with your environment variable as the base URL
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: You can add interceptors here later to automatically attach your JWT token
// to every request once the user is logged in!

export default api;