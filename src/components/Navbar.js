import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              MyLogo
            </a>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#home" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-400">
          <a
            href="#home"
            className="block px-4 py-2 text-white hover:bg-blue-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-blue-300"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-white hover:bg-blue-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-blue-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
