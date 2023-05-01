import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchType: "property",
  searchText: null,
  propertyType: null,
  location: null,
  price: null,
  commercialProperty: false,
  availableRooms: [],
  budget: [0, 10000],
  anemities: [],
  preferences: [],
  propertyTypes: [],
  PreferredRentType: [],
  gender: null,
};

const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    roomSearch(state, action) {
      state.searchType = action.payload;
    },
    searchText(state, action) {
      state.searchText = action.payload;
    },
    propertyType(state, action) {
      console.log("object");
      state.propertyType = action.payload;
    },
    location(state, action) {
      state.location = action.payload;
    },
    price(state, action) {
      state.price = action.payload;
    },
    commercialProperty(state) {
      state.commercialProperty = !state.commercialProperty;
    },
    availableRooms(state, action) {
      state.availableRooms = action.payload;
    },
    budget(state, action) {
      state.budget = action.payload;
    },
    anemities(state, action) {
      state.anemities = action.payload;
    },
    preferences(state, action) {
      state.preferences = action.payload;
    },
    propertyTypes(state, action) {
      state.propertyTypes = action.payload;
    },
    PreferredRentType(state, action) {
      state.PreferredRentType = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
  },
});

export const SearchActions = SearchSlice.actions;

export default SearchSlice.reducer;
