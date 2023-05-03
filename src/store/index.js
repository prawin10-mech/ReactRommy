import { configureStore } from "@reduxjs/toolkit";
import RoomsReducer from "./Rooms";
import SearchReducer from "./Search";
import PropertyReducer from "./Property";

const store = configureStore({
  reducer: {
    room: RoomsReducer,
    search: SearchReducer,
    property: PropertyReducer,
  },
});

export default store;
