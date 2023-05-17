import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchType: "property",
  searchText: null,
  propertyType: null,
  location: "Dubai",
  price: null,
  commercialProperty: false,
  availableRooms: [],
  budget: [0, 10000],
  amneities: [],
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
    amneities(state, action) {
      state.amneities = action.payload;
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
