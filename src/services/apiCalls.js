import axios from "axios";

export const loginUser = async (credentials) => {
  return await axios.post(`http://localhost:5000/auth/login`, credentials);
};

export const registerUser = async (registerBody) => {
  return axios.post(`http://localhost:5000/users`, registerBody);
};

export const modifyUser = async (modifyUserBody, userData) => {
  return axios.put(`http://localhost:5000/users`, modifyUserBody, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};
