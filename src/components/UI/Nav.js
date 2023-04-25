import React, { useState } from "react";
import RoomyFinderLogo from "../../assets/roomyFinderLogo.jpg.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("ourServices");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav-container p-3 flex justify-between bg-white">
      <NavLink to={"/"} className="flex align-content-center">
        <img
          src={RoomyFinderLogo}
          alt="Roomy finder logo"
          width={"80px"}
          height={"80px"}
          className="mr-2"
        />
        <div className="m-auto">
          <p className="text-bold text-2xl text-purple-800">Roomy</p>
          <p className="text-bold text-2xl text-orange-600">Finder</p>
        </div>
      </NavLink>
      <div className="flex m-auto">
        <NavLink
          to={"/aboutUs"}
          className={`mr-3 text-bold text-purple-800 px-3 py-2 rounded-lg ${
            activeLink === "aboutUs"
              ? "bg-purple-800 text-white"
              : "hover:bg-purple-800 hover:text-white"
          }`}
          onClick={() => handleClick("aboutUs")}
        >
          About Us
        </NavLink>
        <NavLink
          to={"/"}
          className={`mr-3 text-bold text-purple-800 px-3 py-2 rounded-lg ${
            activeLink === "ourServices"
              ? "bg-purple-800 text-white"
              : "hover:bg-purple-800 hover:text-white"
          }`}
          onClick={() => handleClick("ourServices")}
        >
          Our Services
        </NavLink>
        <NavLink
          to={"/contactUs"}
          className={`mr-3 text-bold text-purple-800 px-3 py-2 rounded-lg ${
            activeLink === "contactUs"
              ? "bg-purple-800 text-white"
              : "hover:bg-purple-800 hover:text-white"
          }`}
          onClick={() => handleClick("contactUs")}
        >
          Contact Us
        </NavLink>
        <NavLink
          to={"/postProperty"}
          className={`text-bold text-purple-800 px-3 py-2 rounded-lg ${
            activeLink === "postProperty"
              ? "bg-purple-800 text-white"
              : "hover:bg-purple-800 hover:text-white"
          }`}
          onClick={() => handleClick("postProperty")}
        >
          Post Property
        </NavLink>
      </div>
      <div className="my-auto">
        <button className="px-4 py-1 border-2 border-orange-500 bg-orange-500 text-white mr-3 rounded-full">
          Login
        </button>
        <button className="px-4 py-1 border-2 text-orange-500 border-orange-500 bg-white rounded-full hover:bg-orange-500 hover:text-white">
          Sign up
        </button>
      </div>
      <style>{`
        @media screen and (min-width: 1290px) {
          .nav-container {
            font-size: 1.2rem;
          }
        }

        @media screen and (min-width: 1440px) {
          .nav-container {
            font-size: 1.4rem;
          }
        }

        @media screen and (min-width: 1800px) {
          .nav-container {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
