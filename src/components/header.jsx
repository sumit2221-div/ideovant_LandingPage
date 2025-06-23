import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Ideovent Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-blue-600 hidden sm:inline">Ideovent</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-blue-600 focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-6 py-4 flex flex-col space-y-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
