import React from 'react';

const HomeHeroSection = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* Left: Categories */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-md p-4">
          <h3 className="font-semibold mb-3">All Categories</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Gadgets</li>
            <li>Clothes</li>
            <li>Accessories</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>Electronics</li>
            <li>Animals and pets</li>
            <li>Machinery tools</li>
            <li>More category</li>
          </ul>
        </div>

        {/* Middle: Banner */}
        <div className="lg:col-span-7">
          <div className="rounded-md shadow-sm overflow-hidden">
            <img
              src="/banner.png"
              alt="Promotional Banner"
              className="w-full h-full object-cover max-h-[300px]"
            />
          </div>
        </div>

        {/* Right: Login + Offers */}
        <div className="lg:col-span-3 space-y-4">
          {/* Login / Join */}
          <div className="bg-white shadow-sm rounded-md p-4 text-center">
            <p className="mb-2 font-medium text-gray-700">Welcome!</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
              Login
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
              Join Now
            </button>
          </div>

          {/* Offer 1 */}
          <div className="bg-yellow-100 h-24 rounded-md flex items-center justify-center shadow-sm text-sm font-medium text-gray-800">
            Get US $10 off with a new supplier
          </div>

          {/* Offer 2 */}
          <div className="bg-pink-100 h-24 rounded-md flex items-center justify-center shadow-sm text-sm font-medium text-gray-800">
            Refer a friend and earn rewards
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
