import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const API = axios.create({ baseURL: apiUrl });
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
