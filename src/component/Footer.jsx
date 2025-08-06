import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
      {/* Moovee + Icon */}
      <div className="flex items-center space-x-6">
        <h2 className="uppercase text-red-600 text-4xl font-bold">Moovee</h2>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/truongtuong.2502/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook className="text-4xl sm:text-4xl lg:text-3xl hover:text-blue-500 transition-transform transform hover:scale-125 duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/t%C6%B0%E1%BB%9Dng-tr%C6%B0%C6%A1ng-a58343327/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl sm:text-4xl lg:text-3xl hover:text-blue-700 transition-transform transform hover:scale-125 duration-300" />
          </a>
          <a
            href="https://www.instagram.com/truongquangtuong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram className="text-4xl sm:text-4xl lg:text-3xl hover:text-pink-500 transition-transform transform hover:scale-125 duration-300" />
          </a>
        </div>
      </div>

      {/* Powered */}
      <p className="text-gray-400 text-md">Powered by TuongTruong</p>
    </div>
  );
}

export default Footer;
