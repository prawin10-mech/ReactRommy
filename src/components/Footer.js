import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import FooterMobile from "../assets/footerMobile.png";

const Footer = () => {
  return (
    <div className="flex justify-between h-96 m-10 bg-white relative overflow-y-hidden">
      <div className="mt-24">
        <NavLink to={"/"} className="flex">
          <img
            src={logo}
            alt="Roomy finder logo"
            width={"80px"}
            height={"80px"}
            className="mr-2"
          />
          <div className="">
            <p className="text-bold text-2xl text-purple-800">Roomy</p>
            <p className="text-bold text-2xl text-orange-600">Finder</p>
          </div>
        </NavLink>
        <div className="flex justify-between gap-24">
          <div>
            <p className="font-bold">Company</p>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Invest</p>
            <ul>
              <li>Mutual Funds</li>
              <li>Gold</li>
              <li>NFC</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Insure</p>
            <ul>
              <li>Health</li>
              <li>Life</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Goals</p>
            <ul>
              <li>Mutual Funds</li>
              <li>Gold</li>
              <li>NFC</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Resources</p>
            <ul>
              <li>Health</li>
              <li>Life</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Contact Details</p>
            <ul>
              <li>abc@test.com</li>
              <li>+1234567890</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-10 right-[-130px] overflow-y-hidden">
          <img src={FooterMobile} alt="footer phone" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
