import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {},
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    userout: (state, action) => {
      return {
        ...state,
        credentials: {},
      };
    },
    changeUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { login, userout, changeUser } = userSlice.actions;

export const userDataCheck = (state) => state.user;

export default userSlice.reducer;
