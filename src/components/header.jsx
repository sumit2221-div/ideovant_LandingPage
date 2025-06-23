import React from "react";
import logo from "../assets/logo.jpg"; // Ensure correct path

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4  flex items-center justify-between">
        
        {/* Logo + Brand */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Ideovent Logo"
            className="h-16 w-16 object-contain"
          />
        
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
