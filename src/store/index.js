import { configureStore } from "@reduxjs/toolkit";
import RoomsReducer from "./Rooms";
import SearchReducer from "./Search";
import PropertyReducer from "./Property";
import userLogin from "./userLogin";

const store = configureStore({
  reducer: {
    room: RoomsReducer,
    search: SearchReducer,
    property: PropertyReducer,
    login: userLogin,
  },
});

export default store;
