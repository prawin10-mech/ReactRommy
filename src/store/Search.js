import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchType: "room",
  searchText: null,
  propertyType: null,
  baths_beds: null,
  price: null,
  commercialProperty: false,
};

const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    roomSearch(state) {
      state.searchType = "room";
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
    baths_beds(state, action) {
      state.baths_beds = action.payload;
    },
    price(state, action) {
      state.price = action.payload;
    },
    commercialProperty(state) {
      state.commercialProperty = !state.commercialProperty;
    },
  },
});

export const SearchActions = SearchSlice.actions;

export default SearchSlice.reducer;
