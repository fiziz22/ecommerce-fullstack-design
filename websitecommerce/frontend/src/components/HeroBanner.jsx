import React from 'react';

const HeroBanner = () => {
  return (
    <section className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">Latest Trending Products</h1>
        <p className="text-gray-600 mb-4">Shop our new arrivals and best offers!</p>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search anything..."
            className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-sm"
          />
          <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Home</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1606813904194-fb64b1e7c0b1?auto=format&fit=crop&w=600&q=80"
        alt="Banner"
        className="rounded-lg max-w-xs hidden md:block"
      />
    </section>
  );
};

export default HeroBanner;
