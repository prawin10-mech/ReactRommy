import { configureStore } from "@reduxjs/toolkit";
import RoomsReducer from "./Rooms";
import SearchReducer from "./Search";
import AdvanceSearchReducer from "./AdvanceSearch";
import PropertyReducer from "./Property";
import userLogin from "./User";

const store = configureStore({
  reducer: {
    room: RoomsReducer,
    search: SearchReducer,
    property: PropertyReducer,
    user: userLogin,
    advanceSearch: AdvanceSearchReducer,
  },
});

export default store;
