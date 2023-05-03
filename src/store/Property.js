import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  quantity: null,
  quantityTaken: null,
  preferedRentType: null,
  monthlyPrice: null,
  weeklyPrice: null,
  dailyPrice: null,
  deposit: null,
  depositPrice: null,
  description: null,
  posterType: null,

  city: null,
  location: null,
  buildingName: null,
  appartmentNumber: null,
  floorNumber: null,

  firstName: null,
  lastName: null,
  email: null,
  phone: null,

  numberOfPeople: null,
  gender: null,
  grouping: null,
  nationality: null,
  smoking: null,
  drinking: null,
  visitors: null,
  cooking: null,
};

const PropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    type(state, action) {
      state.type = action.payload;
    },
    quantity(state, action) {
      state.quantity = action.payload;
    },
    quantityTaken(state, action) {
      state.quantityTaken = action.payload;
    },
    preferedRentType(state, action) {
      state.preferedRentType = action.payload;
    },
    monthlyPrice(state, action) {
      state.monthlyPrice = action.payload;
    },
    weeklyPrice(state, action) {
      state.weeklyPrice = action.payload;
    },
    dailyPrice(state, action) {
      state.dailyPrice = action.payload;
    },

    deposit(state, action) {
      state.deposit = action.payload;
    },
    depositPrice(state, action) {
      state.depositPrice = action.payload;
    },
    description(state, action) {
      state.description = action.payload;
    },

    posterType(state, action) {
      state.posterType = action.payload;
    },

    city(state, action) {
      state.city = action.payload;
    },
    location(state, action) {
      state.location = action.payload;
    },
    buildingName(state, action) {
      state.buildingName = action.payload;
    },
    appartmentNumber(state, action) {
      state.appartmentNumber = action.payload;
    },
    floorNumber(state, action) {
      state.floorNumber = action.payload;
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
    phone(state, action) {
      state.phone = action.payload;
    },

    numberOfPeople(state, action) {
      state.numberOfPeople = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
    grouping(state, action) {
      state.grouping = action.payload;
    },
    nationality(state, action) {
      state.nationality = action.payload;
    },
    smoking(state, action) {
      state.smoking = action.payload;
    },
    drinking(state, action) {
      state.drinking = action.payload;
    },
    visitors(state, action) {
      state.visitors = action.payload;
    },
    cooking(state, action) {
      state.cooking = action.payload;
    },
  },
});

export const PropertyActions = PropertySlice.actions;

export default PropertySlice.reducer;
