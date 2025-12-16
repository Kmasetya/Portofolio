import React from "react";
import { Link } from "react-router-dom";
// import { BiLogoReact } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] 
                bg-white/10 backdrop-blur-md shadow-md z-50 rounded-xl"
      style={{ fontFamily: "'Nico Moji', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "Nico Moji" }}
        >
          KD
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-4 text-white font-medium">
          <li className="hover:bg-blue-600 hover:text-blue-700 cursor-pointer transition py-2 px-4 rounded-lg">
            Home
          </li>
          <li className="hover:bg-blue-600 hover:text-blue-700 cursor-pointer transition py-2 px-4 rounded-lg">
            About
          </li>
          <li className="hover:bg-blue-600 hover:text-blue-700 cursor-pointer transition py-2 px-4 rounded-lg">
            Project
          </li>
          {/* Button */}
          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition">
            Contact
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
