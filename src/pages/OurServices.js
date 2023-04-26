import React from "react";
import FloatingImage from "../components/FloatingImage";
import Search from "../components/Search";
import CityCourosol from "../components/UI/CityCourosol";
import Rooms from "../components/Rooms";
import AvailableRooms from "../components/cityCorosols/AvailableRooms";

const OurServices = () => {
  return (
    <div className="flex flex-col justify-between !important">
      <div className="flex flex-col justify-between !important">
        <div className="flex justify-around">
          <div className="pt-16">
            <p className="text-4xl font-bold text-white pl-10">
              Find your perfect sharing space.
            </p>
            <div className="pt-5">
              <Search />
            </div>
          </div>
          <FloatingImage />
        </div>
        <div>
          <CityCourosol />
          <Rooms />
          <AvailableRooms />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
