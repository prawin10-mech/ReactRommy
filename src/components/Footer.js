import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import FooterMobile from "../assets/footerMobile.png";

const Footer = () => {
  return (
    <div className="footer-container flex flex-col sm:flex-row justify-between h-auto sm:h-96 mt-2 mx-10 mb-10 bg-white relative overflow-hidden">
      <div className="mt-4 sm:mt-24 sm:w-1/4">
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
        <div className="flex flex-col sm:flex-row justify-between w-screen mt-4">
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
          <div className="mt-[-100px] ml-[-100px]">
            <img src={FooterMobile} alt="footer phone" width={"350px"} />
          </div>
        </div>
      </div>
      <style>{`
        @media screen and (min-width: 1290px) {
          .footer-container {
            font-size: 1.2rem;
          }
        }

        @media screen and (min-width: 1440px) {
          .footer-container {
            font-size: 1.4rem;
          }
        }

        @media screen and (min-width: 1800px) {
          .footer-container {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
