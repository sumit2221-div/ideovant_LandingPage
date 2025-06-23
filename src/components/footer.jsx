import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Contact Info */}
        <p className="text-base md:text-lg font-medium mb-4">
          Contact us at: <a href="mailto:info@ideovent.com" className="text-blue-400 hover:underline">info@ideovent.com</a> | +91 98765 43210
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mt-6">
          <a href="#" className="hover:text-blue-500 transition text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition text-xl">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-pink-400 transition text-xl">
            <FaInstagram />
          </a>
          <a href="#"  className="hover:text-sky-400 transition text-xl">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 <span className="text-white font-semibold">Ideovent Technologies</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
