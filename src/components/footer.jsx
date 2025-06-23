import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-400">
            Contact Us
          </h3>
          <p className="text-sm mb-1">
            Email:{" "}
            <a
              href="mailto:info@ideovent.com"
              className="text-blue-400 hover:underline"
            >
              info@ideovent.com
            </a>
          </p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-400">
            Quick Links
          </h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-400">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-400 transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 <span className="text-white font-semibold">Ideovent Technologies</span> — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
