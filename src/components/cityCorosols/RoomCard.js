import React from "react";
import RoomImage from "../../assets/test.jpg";

const RoomCard = ({ room }) => {
  console.log(room);
  return (
    <div className="relative">
      <div className="relative">
        <p className="absolute top-0 left-0 bg-purple-800 text-white text-sm font-semibold m-2 px-1 rounded-sm">
          Featured
        </p>
        <img
          src={room?.images[0]}
          alt="room"
          width={"200px"}
          height={"250px"}
        />
      </div>
      <p>{room.type}</p>
      <p>{room.monthlyPrice} AED</p>
    </div>
  );
};

export default RoomCard;
