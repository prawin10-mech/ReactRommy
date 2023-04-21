import React, { useState } from "react";
import MainBgImg from "../assets/backgroundImage.jpg";
import HouseSearch from "../assets/houseSearch.jpg";
import Search from "../components/Search";
import CityCourosol from "../components/UI/CityCourosol";

const OurServices = () => {
  return (
    <div className=" bg-purple-500  w-[100%] justify-between ">
      <div className="flex w-[100%] justify-between ">
        <div className="py-16">
          <p className="text-4xl font-bold  text-white pl-10">
            Find your perfect sharing space.
          </p>
          <Search />
        </div>
        <div className="my-auto mr-10 float-right">
          <img src={HouseSearch} alt="Serch house logo" />
        </div>
      </div>
      <div>
        <CityCourosol />
      </div>
    </div>
  );
};

export default OurServices;
