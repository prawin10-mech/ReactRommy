import { createSlice } from "@reduxjs/toolkit";

const initialState = { roomsType: "propertyAds", rooms: [] };

const RoomsTypeSlice = createSlice({
  name: "rooms type",
  initialState,
  reducers: {
    propertyAds(state) {
      state.roomsType = "roommateAds";
    },
    roommateAds(state) {
      state.roomsType = "propertyAds";
    },
    availableRooms(state, action) {
      state.rooms = action.payload;
    },
  },
});

export const roomsTypeActions = RoomsTypeSlice.actions;

export default RoomsTypeSlice.reducer;
