import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "landlord",
  firstName: "",
  lastName: "",
  gender: null,
  country: null,
  email: "",
  password: "",
  confirmPassword: "",
  countryCode: "",
  phone: "",
  termAndCondition: false,
  landlordAgrement: false,
};

const signUpSlice = createSlice({
  name: "SignUp",
  initialState,
  reducers: {
    type(state, action) {
      state.type = action.payload;
    },
    firstName(state, action) {
      state.firstName = action.payload;
    },
    lastName(state, action) {
      state.lastName = action.payload;
    },
    email(state, action) {
      state.email = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
    country(state, action) {
      state.country = action.payload;
    },
    password(state, action) {
      state.password = action.payload;
    },

    confirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
    countryCode(state, action) {
      state.countryCode = action.payload;
    },
    phone(state, action) {
      state.phone = action.payload;
    },
    termAndCondition(state, action) {
      state.termAndCondition = action.payload;
    },
    landlordAgrement(state, action) {
      state.landlordAgrement = action.payload;
    },
  },
});

export const SignupActions = signUpSlice.actions;

export default signUpSlice.reducer;
