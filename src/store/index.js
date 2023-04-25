import { configureStore } from "@reduxjs/toolkit";
import RoomsTypeActions from "./Rooms";

const store = configureStore({
  reducer: {
    roomType: RoomsTypeActions,
  },
});

export default store;
