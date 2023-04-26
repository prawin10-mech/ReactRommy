import React from "react";
import DemoImage from "../../assets/demoRoom.jpg";
import DemoPerson from "../../assets/demoPerson.jpg";
import { useSelector } from "react-redux";

const RoomCard = ({ room }) => {
  const roomsType = useSelector((state) => state.room.roomsType);
  let image;
  let propertyAds;
  if (roomsType === "propertyAds") {
    propertyAds = true;
    image = room.images.length > 0 ? room.images[0] : DemoImage;
  } else {
    propertyAds = false;
    image = room.images.length > 0 ? room.images[0] : DemoPerson;
  }

  return (
    <div className="relative">
      <div className="relative">
        <p className="absolute top-0 left-0 bg-purple-800 text-white text-sm font-semibold m-2 px-1 rounded-sm">
          Featured
        </p>
        <img src={image} alt="room" width={"200px"} height={"250px"} />
      </div>
      <p>{room.type}</p>
      {propertyAds && <p>{room.monthlyPrice} AED</p>}
    </div>
  );
};

export default RoomCard;
