import logo from "../../assets/kevinRushLogo.png";
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between px-6 py-4 shadow-md lg:px-12">
      {/* Logo */}
      <div className="flex items-center">
      <img src={logo} alt="Logo" style={{ height: "3rem" }} className="w-auto" />
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-6 text-2xl">
        <FaLinkedin
          className="text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer"
        />
        <FaGithub
          className="text-gray-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
        />
        <FaSquareXTwitter
          className="text-gray-500 hover:text-blue-700 hover:scale-110 transition duration-300 cursor-pointer"
        />
        <FaInstagram
          className="text-gray-500 hover:text-pink-500 hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar
