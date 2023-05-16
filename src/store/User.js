import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isLoggedIn: false,
  myBookings: [],
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    email(state, action) {
      state.email = action.payload;
    },
    password(state, action) {
      state.password = action.payload;
    },
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    myBookings(state, action) {
      state.myBookings = action.payload;
    },
  },
});

export const UserActions = LoginSlice.actions;

export default LoginSlice.reducer;
