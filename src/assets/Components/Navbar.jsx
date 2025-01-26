import logo from "../../assets/kevinRushLogo.png";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between px-6 py-4 shadow-md lg:px-12">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" style={{ height: "3rem" }} className="w-auto" />
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/m-saad-453202213/"
          target="_blank"
          // rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer"
          />
        </a>

        <a
          href="https://github.com/msaad1682"
          target="_blank"
          // rel="noopener noreferrer"
        >
          <FaGithub
            className="text-gray-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
