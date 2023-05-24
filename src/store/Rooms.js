import { createSlice } from "@reduxjs/toolkit";

const initialState = { roomsType: "property", rooms: [] };

const RoomsTypeSlice = createSlice({
  name: "rooms type",
  initialState,
  reducers: {
    propertyAds(state) {
      state.roomsType = "roommate";
    },
    roommateAds(state) {
      state.roomsType = "property";
    },
    availableRooms(state, action) {
      state.rooms = action.payload;
    },
  },
});

export const roomsTypeActions = RoomsTypeSlice.actions;

export default RoomsTypeSlice.reducer;
