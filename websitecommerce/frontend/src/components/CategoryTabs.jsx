import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';


const categories = ['All category', 'Gadgets', 'Clothes', 'Accessories', 'Home', 'Beauty'];

const CategoryTabs = () => {
  return (
    <div className="overflow-x-auto px-4 py-2 bg-white shadow-sm">
      <div className="flex justify-between items-center gap-4">
        {/* Left: Hamburger + Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap">
          {/* Hamburger icon */}
          <button className="p-2 rounded-md hover:bg-gray-100">
   <Bars3Icon className="h-6 w-6 text-gray-700" />

          </button>

          {/* Category Buttons */}
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="px-4 py-2 rounded-md bg-gray-100 text-blue-600 whitespace-nowrap hover:bg-blue-50 transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right side dropdowns */}
        <div className="flex-shrink-0 flex gap-3 items-center">
          {/* Language Dropdown */}
          <select className="border text-sm rounded-md px-2 py-1 bg-gray-100 text-gray-700">
            <option>English (US)</option>
            <option>English (UK)</option>
            <option>Urdu</option>
          </select>

          {/* Ship to Dropdown */}
          <select className="border text-sm rounded-md px-2 py-1 bg-gray-100 text-gray-700">
            <option>Ship to US</option>
            <option>Ship to UK</option>
            <option>Ship to Pakistan</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
