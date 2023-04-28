import React from "react";
import RoomBuilding from "../assets/roomBuilding.png";
import RoomWomen from "../assets/roomWomen.png";
import { useDispatch, useSelector } from "react-redux";
import { roomsTypeActions } from "../store/Rooms";

const Rooms = () => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.room.roomsType);

  const handleProperty = () => {
    dispatch(roomsTypeActions.propertyAds());
  };

  const handleRoomMate = () => {
    dispatch(roomsTypeActions.roommateAds());
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="m-10 flex flex-col md:flex-row gap-10">
        <div
          className="flex flex-col md:flex-row cursor-pointer"
          onClick={() => handleRoomMate()}
        >
          <img
            src={RoomBuilding}
            alt="propertyAds"
            width={"200px"}
            className="h-auto md:h-40 w-auto md:w-40 mx-auto md:mx-0 relative md:left-19 bottom-[18px]"
          />
          <p
            className={`p-5 md:p-10 h-auto md:h-32 w-auto md:w-64 text-center text-xl  bg-white shadow-md text-orange-500 flex-1 md:ml-[-40px] font-bold ${
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
        <div
          className="flex flex-col md:flex-row cursor-pointer"
          onClick={() => handleProperty()}
        >
          <img
            src={RoomWomen}
            alt="roommateAds"
            width={"250px"}
            className="h-auto md:h-48 w-auto md:w-40 mx-auto md:mx-0 relative md:left-24 bottom-[40px]"
          />
          <p
            className={`p-5 md:p-10 h-auto md:h-32 w-auto md:w-64 text-center text-xl  bg-white text-orange-500 shadow-md flex-1 font-bold ${
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
