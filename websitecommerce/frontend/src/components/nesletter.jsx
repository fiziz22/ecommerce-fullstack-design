import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Subscribe on our newsletter</h2>
      <p className="text-sm text-gray-600 mb-6">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="📧 Email"
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none w-64"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
