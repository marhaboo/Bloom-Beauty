import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: process.env.EXT_PUBLIC_API_URL,
});
