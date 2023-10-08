import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointmentData: {},
  },
  reducers: {
    loadAppointmentData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { loadAppointmentData } = appointmentSlice.actions;

export const appointmentDataCheck = (state) => state.appointment;

export default appointmentSlice.reducer;
