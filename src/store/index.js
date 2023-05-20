import { configureStore } from "@reduxjs/toolkit";
import RoomsReducer from "./Rooms";
import SearchReducer from "./Search";
import AdvanceSearchReducer from "./AdvanceSearch";
import PropertyReducer from "./Property";
import userLogin from "./User";
import Signup from "./Signup";

const store = configureStore({
  reducer: {
    room: RoomsReducer,
    search: SearchReducer,
    property: PropertyReducer,
    user: userLogin,
    advanceSearch: AdvanceSearchReducer,
    signup: Signup,
  },
});

export default store;
