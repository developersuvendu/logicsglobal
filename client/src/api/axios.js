import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/api",
  headers: { 'Content-Type': 'application/json' }
});

// Add token automatically
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;