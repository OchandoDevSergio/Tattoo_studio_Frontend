import axios from "axios";

export const bringDesigns = async () => {
  return await axios.get(`http://localhost:5000/designs`);
};

export const registerDesign = async (newDesignBody, userData) => {
  return axios.post(`http://localhost:5000/designs`, newDesignBody, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const searchCriteria = async (criteria) => {
  return await axios.get(`http://localhost:5000/designs/${criteria}`);
};

// export const searchCustomerPayment = async (customerId) => {
//   return await axios.get(`http://localhost:5000/paymentdatas/${customerId}`);
// };
export const searchCustomerPayment = async (customerId, tokenPayment) => {
  return await axios.get(`http://localhost:5000/paymentdatas/${customerId}`, {
    headers: {
      authorization: "Bearer " + tokenPayment,
    },});
};

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
