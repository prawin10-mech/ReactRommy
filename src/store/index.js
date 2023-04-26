import { configureStore } from "@reduxjs/toolkit";
import RoomsReducer from "./Rooms";
import SearchReducer from "./Search";

const store = configureStore({
  reducer: {
    room: RoomsReducer,
    search: SearchReducer,
  },
});

export default store;
