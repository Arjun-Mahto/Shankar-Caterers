import React, { useState } from "react";
import logo from "../../assets/logo.png"; // import your logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white border-amber-500 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center overflow-x-hidden">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Shankar Caterer Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Menu (Desktop) */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="text-gray-700 hover:text-red-700">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-red-700">About</a></li>
            <li><a href="#CateringServices" className="text-gray-700 hover:text-red-700">Services </a></li>
            {/* <li><a href="#menu" className="text-gray-700 hover:text-red-700">Menu</a></li> */}
            {/* <li><a href="#gallery" className="text-gray-700 hover:text-red-700">Gallery</a></li> */}
            <li><a href="#contact" className="text-gray-700 hover:text-red-700">Contact</a></li>
          </ul>

          {/* Book Now Button (Desktop only) */}
          <a
            href="#contact"
            className="hidden md:block bg-yellow-600 px-5 text-black py-2 rounded-full hover:bg-amber-600 hover:text-white transition hover:scale-105"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl text-red-700 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
              <li><a href="#home" className="text-gray-700 hover:text-red-700">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-red-700">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-red-700">Services</a></li>
              {/* <li><a href="#menu" className="text-gray-700 hover:text-red-700">Menu</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-red-700">Gallery</a></li> */}
              <li><a href="#contact" className="text-gray-700 hover:text-red-700">Contact</a></li>
              <li>
                <a
                  href="#contact"
                  className="bg-yellow-600 px-5 text-black py-2 rounded-full hover:bg-blue-800 hover:text-white transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content hiding behind navbar */}
      <div className="h-24"></div>
    </div>
  );
}

export default Navbar;
