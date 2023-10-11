import axios from "axios";

export const bringDesigns = async () => {
  return await axios.get(`http://localhost:5000/designs`);
};

export const bringArtists = async () => {
  return await axios.get(`http://localhost:5000/artists`);
};

export const bringAllAppointments = async (userData) => {
  return await axios.get(`http://localhost:5000/appointments`, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const createAppointment = async (newAppointmentBody, userData) => {
  console.log("entro al apicall")
  return axios.post(`http://localhost:5000/appointments`, newAppointmentBody, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
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

export const searchPortfolio = async (userId, userData) => {
  return await axios.get(`http://localhost:5000/artists/${userId}`, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const createNewPaymentData = async (registerPaymentBody, userData) => {
  return axios.post(`http://localhost:5000/paymentdatas`, registerPaymentBody, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const searchCustomerPayment = async (customerId, tokenPayment) => {
  return await axios.get(`http://localhost:5000/paymentdatas/${customerId}`, {
    headers: {
      authorization: "Bearer " + tokenPayment,
    },});
};

export const modifyPaymentData = async (modifyPaymentDataBody, tokenPayment) => {
  return axios.put(`http://localhost:5000/paymentdatas`, modifyPaymentDataBody, {
    headers: {
      authorization: "Bearer " + tokenPayment,
    },
  });
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

export const deleteTattoo= async (tattooId, userData) => {


  let erase = tattooId.id

  return axios.delete(`http://localhost:5000/designs/${erase}`, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};
