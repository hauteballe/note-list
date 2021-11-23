import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
});
