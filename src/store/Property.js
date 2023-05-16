import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  edit: false,
  editedData: [],
  properties: [],
  type: null,
  quantity: null,
  quantityTaken: null,
  preferedRentType: null,
  monthlyPrice: null,
  weeklyPrice: null,
  dailyPrice: null,
  deposit: null,
  depositPrice: null,
  description: null,
  posterType: null,

  city: null,
  location: null,
  buildingName: null,
  appartmentNumber: null,
  floorNumber: null,

  amenities: [],

  firstName: null,
  lastName: null,
  email: null,
  phone: null,

  images: [],
  videos: [],

  numberOfPeople: null,
  gender: null,
  grouping: null,
  nationality: null,
  smoking: null,
  drinking: null,
  visitors: null,
  cooking: null,
};

const PropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    properties(state, action) {
      state.properties = action.payload;
    },
    type(state, action) {
      state.type = action.payload;
    },
    quantity(state, action) {
      state.quantity = action.payload;
    },
    quantityTaken(state, action) {
      state.quantityTaken = action.payload;
    },
    preferedRentType(state, action) {
      state.preferedRentType = action.payload;
    },
    monthlyPrice(state, action) {
      state.monthlyPrice = action.payload;
    },
    weeklyPrice(state, action) {
      state.weeklyPrice = action.payload;
    },
    dailyPrice(state, action) {
      state.dailyPrice = action.payload;
    },

    deposit(state, action) {
      state.deposit = action.payload;
    },
    depositPrice(state, action) {
      state.depositPrice = action.payload;
    },
    description(state, action) {
      state.description = action.payload;
    },

    posterType(state, action) {
      state.posterType = action.payload;
    },

    city(state, action) {
      state.city = action.payload;
    },
    location(state, action) {
      state.location = action.payload;
    },
    buildingName(state, action) {
      state.buildingName = action.payload;
    },
    appartmentNumber(state, action) {
      state.appartmentNumber = action.payload;
    },
    floorNumber(state, action) {
      state.floorNumber = action.payload;
    },

    firstName(state, action) {
      state.firstName = action.payload;
    },
    lastName(state, action) {
      state.lastName = action.payload;
    },
    email(state, action) {
      state.email = action.payload;
    },
    phone(state, action) {
      state.phone = action.payload;
    },
    images(state, action) {
      state.images = [...state.images, action.payload];
    },
    videos(state, action) {
      state.videos = [...state.videos, action.payload];
    },

    numberOfPeople(state, action) {
      state.numberOfPeople = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
    grouping(state, action) {
      state.grouping = action.payload;
    },
    nationality(state, action) {
      state.nationality = action.payload;
    },
    smoking(state, action) {
      state.smoking = action.payload;
    },
    drinking(state, action) {
      state.drinking = action.payload;
    },
    visitors(state, action) {
      state.visitors = action.payload;
    },
    cooking(state, action) {
      state.cooking = action.payload;
    },

    edit(state, action) {
      state.edit = action.payload;
    },
    amenities(state, action) {
      state.amenities = action.payload;
      console.log(state.amenities);
    },
    deleteImage(state, action) {
      state.images = state.images.filter((image, i) => i !== action.payload);
    },
    deleteVideo(state, action) {
      state.videos = state.videos.filter((video, i) => i !== action.payload);
    },

    editedData(state, action) {
      state.properties = action.payload.properties;
      state.type = action.payload.type;
      state.quantity = action.payload.quantity;
      state.quantityTaken = action.payload.quantityTaken;
      state.preferedRentType = action.payload.preferedRentType;
      state.monthlyPrice = action.payload.monthlyPrice;
      state.weeklyPrice = action.payload.weeklyPrice;
      state.dailyPrice = action.payload.dailyPrice;
      state.deposit = action.payload.deposit;
      state.depositPrice = action.payload.depositPrice;
      state.description = action.payload.description;
      state.posterType = action.payload.posterType;
      state.city = action.payload.address.city;
      state.location = action.payload.address.location;
      state.buildingName = action.payload.address.buildingName;
      state.appartmentNumber = action.payload.address.appartmentNumber;
      state.floorNumber = action.payload.address.floorNumber;
      state.firstName = action.payload.agentInfo.firstName;
      state.lastName = action.payload.agentInfo.lastName;
      state.email = action.payload.agentInfo.email;
      state.phone = action.payload.agentInfo.phone;
      state.images = action.payload.images;
      state.videos = action.payload.videos;
      state.amenities = action.payload.amenities;
      state.numberOfPeople = action.payload.socialPreferences.numberOfPeople;
      state.gender = action.payload.socialPreferences.gender;
      state.grouping = action.payload.socialPreferences.grouping;
      state.nationality = action.payload.socialPreferences.nationality;
      state.smoking = action.payload.socialPreferences.smoking ? "yes" : "no";
      state.drinking = action.payload.socialPreferences.drinking ? "yes" : "no";
      state.visitors = action.payload.socialPreferences.visitors ? "yes" : "no";
      state.cooking = action.payload.socialPreferences.cooking ? "yes" : "no";
      state.id = action.payload._id;

      console.log(state.amenities, action.payload.amenities);
    },
    clearEditedData(state, action) {
      state.properties = null;
      state.type = null;
      state.quantity = null;
      state.quantityTaken = null;
      state.preferedRentType = null;
      state.monthlyPrice = null;
      state.weeklyPrice = null;
      state.dailyPrice = null;
      state.deposit = null;
      state.depositPrice = null;
      state.description = null;
      state.posterType = null;
      state.city = null;
      state.location = null;
      state.buildingName = null;
      state.appartmentNumber = null;
      state.floorNumber = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.phone = null;
      state.numberOfPeople = null;
      state.gender = null;
      state.grouping = null;
      state.nationality = null;
      state.videos = [];
      state.images = [];
      state.smoking = "";
      state.drinking = "";
      state.visitors = "";
      state.cooking = "";
      state.poster = {};
      state.id = null;
      state.amenities = [];
    },
  },
});

export const PropertyActions = PropertySlice.actions;

export default PropertySlice.reducer;
