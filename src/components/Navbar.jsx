"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-custom-border bg-gradient-to-l from-slate-400 to-slate-900 border-r-2 z-10  m-2 ml-4 mr-4 p-4 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://img.icons8.com/?size=100&id=BrfYSrYduPIn&format=png&color=000000"
            alt="Logo"
            width={40} // Specify the width of the image
            height={40} // Specify the height of the image
            className="h-10"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-yellow-50 font-sans text-lg uppercase font-bold hover:text-yellow-400"
          >
            HOME
          </Link>
          <Link
            href="/formats"
            className="text-yellow-50 font-sans text-lg uppercase font-bold hover:text-yellow-400"
          >
            FORMATS
          </Link>
          <Link
            href="/plans"
            className="text-yellow-50 font-sans text-lg uppercase font-bold hover:text-yellow-400"
          >
            PLANS
          </Link>

          {/* Login/Logout Button */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-yellow-500 border font-sans text-lg uppercase font-bold pl-8 pr-8 border-yellow-500 p-2 rounded hover:bg-gray-900 hover:border-yellow-50 hover:text-yellow-50"
              >
                LOGOUT
              </button>
            ) : (
              <Link href="/login">
                <button className="text-yellow-500 border font-sans text-lg uppercase font-bold pl-8 pr-8 border-yellow-500 p-2 rounded hover:bg-gray-900 hover:border-yellow-50 hover:text-yellow-50">
                  LOGIN
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-yellow-50 font-sans text-lg uppercase font-bold hover:text-yellow-400"
            >
              HOME
            </Link>
            <Link
              href="/formats"
              className="text-yellow-50 font-sans text-lg uppercase font-bold hover:text-yellow-400"
            >
              FORMATS
            </Link>
            <Link
              href="/plans"
              className="text-yellow-50 font-sans text-lg uppercase font-bold hover:text-yellow-400"
            >
              PLANS
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-yellow-500 border font-sans text-lg uppercase font-bold border-yellow-500 p-2 rounded hover:bg-gray-900 hover:border-yellow-50 hover:text-yellow-50"
              >
                LOGOUT
              </button>
            ) : (
              <Link href="/login">
                <button className="text-yellow-500 border font-sans text-lg uppercase font-bold border-yellow-500 p-2 rounded hover:bg-gray-900 hover:border-yellow-50 hover:text-yellow-50">
                  LOGIN
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
