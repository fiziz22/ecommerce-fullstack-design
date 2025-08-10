import React from 'react';

const RecommendedItems = () => {
  return (
    <section className="w-full px-4 py-6">
      <h2 className="text-xl font-semibold text-black mb-4">Recommended Items</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {/* Product Card */}
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/shirt.png" alt="T-shirt" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$10.30</p>
          <p className="text-xs text-gray-500">T-shirts with multiple colors, for men</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/pant.png" alt="Jacket" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$10.30</p>
          <p className="text-xs text-gray-500">Jeans shorts for men blue color</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/bag.png" alt="Coat" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$12.50</p>
          <p className="text-xs text-gray-500">Brown winter coat medium size</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/phone.png" alt="Wallet" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$34.00</p>
          <p className="text-xs text-gray-500">Jeans bag for travel for men</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="bag.png" alt="Backpack" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$99.00</p>
          <p className="text-xs text-gray-500">Leather wallet</p>
        </div>

        {/* Row 2 */}
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/camera.png" alt="Shorts" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$9.99</p>
          <p className="text-xs text-gray-500">Canon camera black, 100x zoom</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/headphones.png" alt="Headset" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$8.99</p>
          <p className="text-xs text-gray-500">Headset for gaming with mic</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/watch.png" alt="Smartwatch" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$10.30</p>
          <p className="text-xs text-gray-500">Smartwatch silver color modern</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/bag.png" alt="Pot" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$10.30</p>
          <p className="text-xs text-gray-500">Blue wallet for men leather material</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow text-center">
          <img src="/bag.png" alt="Kettle" className="mx-auto h-32 object-contain mb-2" />
          <p className="text-sm font-semibold">$80.95</p>
          <p className="text-xs text-gray-500">Jeans bag for travel for men</p>
        </div>
      </div>
    </section>
  );
};

export default RecommendedItems;
