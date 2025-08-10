// components/DealsAndOffers.jsx
import React from 'react';

const offers = [
  {
    name: 'Wireless Headphones',
    discount: '30% OFF',
    image: '/headphones.png',
  },
  {
    name: 'Smart Watches',
    discount: '25% OFF',
    image: '/watch.png',
  },
  {
    name: 'Cameras',
    discount: '15% OFF',
    image: '/camera.png',
  },
  {
    name: 'Laptops',
    discount: '35% OFF',
    image: '/laptop.png',
  },
  {
    name: 'Phones',
    discount: '40% OFF',
    image: '/phone.png',
  },
];

const DealsAndOffers = () => {
  return (
    <div className="bg-white shadow-sm p-4 rounded-lg my-6 mx-4">
      <div className="grid grid-cols-6 gap-4 items-center">
        {/* First column: title and timer */}
        <div className="col-span-1 flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800">Deals & Offers</h2>
          <p className="text-sm text-red-500 mt-1">Ends in: 02h 14m</p>
        </div>

        {/* Offer cards */}
        {offers.map((item, index) => (
          <div key={index} className="col-span-1 bg-gray-100 rounded-md p-2 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-full object-contain mx-auto"
            />
            <p className="mt-2 text-sm font-semibold text-gray-700">{item.name}</p>
            <p className="text-xs text-green-600">{item.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default DealsAndOffers;
