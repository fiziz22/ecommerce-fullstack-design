import React from 'react';
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from 'react-icons/fa';
import logo from '../assets/logo-symbol.png'; // make sure this path is correct

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          {/* Hamburger for mobile only */}
          <div className="md:hidden">
            <FaBars className="w-6 h-6 text-gray-500" />
          </div>

          {/* Logo + Brand */}
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-blue-500 text-xl font-bold">BrandName</span>
        </div>

        {/* Search Bar - Desktop only */}
        <div className="hidden md:flex items-center w-1/2 max-w-lg border border-blue-500 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-2 py-2 text-sm outline-none"
          />
          <select className="bg-white text-sm text-gray-600 px-2 border-l border-blue-500 outline-none">
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 text-sm font-medium">
            Search
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-gray-500">
          <FaUser className="w-5 h-5" />
          <FaHeart className="w-5 h-5 hidden md:inline" />
          <FaShoppingCart className="w-5 h-5" />
          {/* Hamburger icon is only for mobile, already added on left */}
        </div>
      </div>

      {/* Mobile Search Bar - shown below on small screens only */}
      <div className="md:hidden mt-3 flex items-center border border-blue-500 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-2 py-2 text-sm outline-none"
        />
        <select className="bg-white text-sm text-gray-600 px-2 border-l border-blue-500 outline-none">
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 text-sm font-medium">
          Search
        </button>
      </div>
    </nav>
  );
}
