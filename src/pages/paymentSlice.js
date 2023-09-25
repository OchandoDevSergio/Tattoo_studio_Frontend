import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentData: {},
  },
  reducers: {
    loadPaymentData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { loadPaymentData } = paymentSlice.actions;

export const paymentDataCheck = (state) => state.design;

export default paymentSlice.reducer;
