import React from "react";
import HouseSearch from "../assets/houseSearch.png";

const FloatingImage = () => {
  return (
    <div className="relative my-auto mr-5 mt-[-10px]  float-right">
      <img
        src={HouseSearch}
        alt="Serch house logo"
        width={"300px"}
        height={"300px"}
        className="object-contain"
      />
      <div className="absolute inset-x-1/4 bottom-0 h-4 bg-gradient-to-t from-gray-800 to-transparent rounded-full"></div>
    </div>
  );
};

export default FloatingImage;
