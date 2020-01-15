import axios from "axios";

const apiEndpoint = "http://localhost:5000/api";

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

// LOGIN
export const login = async credentials => {
  try {
    const { data } = await axios.post(`${apiEndpoint}/login`, credentials);
    setToken(data.payload);
  } catch (error) {
    console.error(error);
  }
};

// LOGOUT
export const logout = () => {
  try {
    removeToken();
  } catch (error) {
    console.log(error);
  }
};

// GET FRIENDS
export const getFriends = (setFriends, id) => {
  axiosAuth()
    .get(`/friends/?id=${id}`)
    .then(res => {
      console.log(res);
      setFriends(res.data);
    })
    .catch(error => {
      console.log(error);
    });
};

// ADD

// DELETE

// UPDATE

export default {
  getToken,
  setToken,
  removeToken,
  axiosAuth,
  login,
  logout,
  getFriends
};
