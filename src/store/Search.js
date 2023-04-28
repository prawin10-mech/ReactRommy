import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchType: "property",
  searchText: null,
  propertyType: null,
  location: null,
  price: null,
  commercialProperty: false,
  availableRooms: [],
};

const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    roomSearch(state) {
      state.searchType = "property";
    },
    roommateSearch(state) {
      state.searchType = "roommate";
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
  },
});

export const SearchActions = SearchSlice.actions;

export default SearchSlice.reducer;
