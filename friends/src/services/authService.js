import axios from "axios";

export const apiEndpoint = "http://localhost:5000/api";

// GET TOKEN FROM LOCALSTORAGE
export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

// SET TOKEN FROM LOCALSTORAGE
export const setToken = payload => {
  return localStorage.setItem("token", payload);
};

// REMOVE TOKEN FROM LOCALSTORAGE
export const removeToken = () => {
  return localStorage.removeItem("token");
};

// SET HEADERS ON AXIOS REQUEST
export const axiosAuth = () => {
  const token = getToken();

  return axios.create({
    baseURL: apiEndpoint,
    headers: {
      Authorization: token
    }
  });
};

export default {
  getToken,
  setToken,
  removeToken,
  axiosAuth
};
