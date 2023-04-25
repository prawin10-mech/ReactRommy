import React, { useState } from "react";
import RoomBuilding from "../assets/roomBuilding.png";
import RoomWomen from "../assets/roomWomen.png";
import { useDispatch, useSelector } from "react-redux";
import { roomsTypeActions } from "../store/Rooms";

const Rooms = () => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.roomType.roomsType);

  const handleProperty = () => {
    dispatch(roomsTypeActions.propertyAds());
  };

  const handleRoomMate = () => {
    dispatch(roomsTypeActions.roommateAds());
  };

  return (
    <div className="flex justify-center">
      <div className="m-10 flex gap-10">
        <div className="flex cursor-pointer" onClick={() => handleRoomMate()}>
          <img
            src={RoomBuilding}
            alt="propertyAds"
            width={"200px"}
            className="h-40 relative left-19 bottom-[18px]"
          />
          <p
            className={`p-10 h-32 w-64 text-center text-xl  bg-white shadow-md text-orange-500 flex-1 ml-[-40px] font-bold ${
              activeLink === "propertyAds"
                ? "border-x-2 border-t-2 border-purple-500 rounded-md bg-white text-purple-600"
                : "rounded-md"
            }`}
            style={{
              boxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
              WebkitBoxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
              MozBoxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
            }}
          >
            Find Room
          </p>
        </div>
        <div className="flex cursor-pointer" onClick={() => handleProperty()}>
          <img
            src={RoomWomen}
            alt="roommateAds"
            width={"230px"}
            className="relative left-24 bottom-[60px]"
          />
          <p
            className={`p-10 h-32 w-64 text-center text-xl  bg-white text-orange-500 shadow-md flex-1 font-bold ${
              activeLink === "roommateAds"
                ? "border-x-2 border-t-2 border-purple-500 rounded-md bg-white text-purple-600"
                : "rounded-md"
            } `}
            style={{
              boxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
              WebkitBoxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
              MozBoxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
            }}
          >
            Find Roommate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
