import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyType: [],
  minBudget: null,
  maxBudget: null,
  amenities: [],
  preferences: [],
  preferredRentType: null,
  gender: null,
};

const AdvancedSearchSlice = createSlice({
  name: "AdvanceSearch",
  initialState,
  reducers: {
    propertyType(state, action) {
      state.propertyType = action.payload;
    },
    minBudget(state, action) {
      state.minBudget = action.payload;
    },
    maxBudget(state, action) {
      state.maxBudget = action.payload;
    },
    amenities(state, action) {
      state.amenities = action.payload;
    },
    preferences(state, action) {
      state.preferences = action.payload;
    },
    preferredRentType(state, action) {
      state.preferredRentType = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
  },
});

export const AdvanceSearchActions = AdvancedSearchSlice.actions;

export default AdvancedSearchSlice.reducer;
