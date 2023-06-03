import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  // meaning of upper line: if userInfo exist in localStorage, then parse it to JSON, else set it to null
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // setCredentials is a reducer function
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    // meaning of upper line: set userInfo to action.payload, and set userInfo to localStorage

    logout: (state, action) => {
      // how to get logout action? see frontend\src\pages\LogoutPage.js
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    // meaning of upper line: set userInfo to null, and remove userInfo from localStorage
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// why createSlice?
// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
