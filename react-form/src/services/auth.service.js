import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const signup = (username, email, password) => {
    const headers = {
        'Content-Type': 'application/json'
    };
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  }, {headers});
};

const signin = (username, password) => {
    const headers = {
        'Content-Type': 'application/json'
    };
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    }, {headers})
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logoutApp = () => {
  localStorage.removeItem("user");
};

export default {
    signup,
    signin,
    logoutApp,
};