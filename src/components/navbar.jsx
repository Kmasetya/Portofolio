import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] bg-white/10 backdrop-blur-md shadow-md z-50 rounded-xl"
      style={{ fontFamily: "'Nico Moji', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto py-2 px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          KD
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 text-white font-medium">
          <li
            className="hover:bg-blue-600 hover:text-blue-200 cursor-pointer transition py-2 px-4 rounded-lg"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="hover:bg-blue-600 hover:text-blue-200 cursor-pointer transition py-2 px-4 rounded-lg"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="hover:bg-blue-600 hover:text-blue-200 cursor-pointer transition py-2 px-4 rounded-lg"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>

          {/* FIXED CONTACT */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition"
          >
            Contact
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-2 bg-white/10 backdrop-blur-md text-white p-4 rounded-b-xl">
          <li
            className="hover:bg-blue-600 hover:text-blue-200 cursor-pointer transition py-2 px-4 rounded-lg"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="hover:bg-blue-600 hover:text-blue-200 cursor-pointer transition py-2 px-4 rounded-lg"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="hover:bg-blue-600 hover:text-blue-200 cursor-pointer transition py-2 px-4 rounded-lg"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>

          {/* FIXED CONTACT (MOBILE) */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition"
          >
            Contact
          </button>
        </ul>
      )}
    </nav>
  );
}
