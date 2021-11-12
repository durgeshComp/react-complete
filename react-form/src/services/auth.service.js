import axios from "axios";

const API_URL = "http://localhost:5000/api/";

export const signup = (name, email, password) => {
  const headers = {
    'Content-Type': 'application/json'
  };
  return axios.post(API_URL + "signup", {
    name,
    email,
    password,
  }, { headers });
};

export const signin = (email, password) => {
  const headers = {
    'Content-Type': 'application/json'
  };
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    }, { headers })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const loggout = () => {
  localStorage.removeItem("user");
};

