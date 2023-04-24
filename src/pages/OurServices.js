import React, { useState } from "react";
import MainBgImg from "../assets/mainBackground.jpg";
import FloatingImage from "../components/FloatingImage";
import Search from "../components/Search";
import CityCourosol from "../components/UI/CityCourosol";

const OurServices = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center w-full h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${MainBgImg})` }}
    >
      <div className="flex  justify-between">
        <div className="py-16">
          <p className="text-4xl font-bold text-white pl-10">
            Find your perfect sharing space.
          </p>
          <Search />
        </div>
        <FloatingImage />
      </div>
      <div className="">
        <CityCourosol />
      </div>
    </div>
  );
};

export default OurServices;
