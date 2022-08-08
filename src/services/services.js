import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json", // default
});

export default axiosInstance;
