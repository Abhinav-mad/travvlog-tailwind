import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
      
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Travlog Logo" className="h-8" loading="lazy" />
          <h1 className="text-xl font-bold ml-2">Travlog</h1>
        </div>
        <nav>
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
        <div>
          <button className="mr-4 text-gray-700">Log In</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
