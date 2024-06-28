import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});
