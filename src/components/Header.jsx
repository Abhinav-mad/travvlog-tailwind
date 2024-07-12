import React from "react";
import logo from "../assets/images/logo.png";
import { HiMenu } from "react-icons/hi";;

function Header() {
  return (
    <>
      
      <header className="flex justify-between items-center  bg-white shadow-md ">
        <div className="flex items-center space-x-4 md:mx-auto lg:mx-0">
        <HiMenu className="h-8 w-8 text-purple-500 md:hidden" />

          <img src={logo} alt="Travlog Logo" className="h-8 w-auto" loading="lazy" />
          <h1 className="text-xl font-bold ml-2 ">Travlog</h1>
          </div>
       
        <nav className="hidden md:flex md:space-x-4 lg:flex lg:mx-auto">
          <ul className="flex space-x-4 font-sans ">
            <li>
              <a href="#home" className="text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#discover" className="text-gray-700">
                Discover
              </a>
            </li>
            <li>
              <a href="#deals" className="text-gray-700">
                Special Deals
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="
         items-center  space-x-4 absolute right-4">
          <button className=" text-gray-700">Log In</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded shadow">
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
