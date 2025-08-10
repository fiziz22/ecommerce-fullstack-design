import React from 'react';

const Gadgets = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        {/* Left banner with full height */}
        <div className="relative bg-gray-100 h-full min-h-[328px] flex items-center justify-center text-center rounded-lg overflow-hidden">
          <img
            src="./gadgets.png"
            alt="Home & Outdoor"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-white bg-black/50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Electronic Gadgets</h2>
            <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
              Source
            </button>
          </div>
        </div>

        {/* Column 1 */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="./phone.png" alt="Chair Set" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Phones</p>
            <p className="text-xs text-gray-500">From PKR 2,500</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="./lamp.png" alt="Outdoor Lamp" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Lamps</p>
            <p className="text-xs text-gray-500">From PKR 1,200</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="laptop.png" alt="Grill Stand" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Laptops</p>
            <p className="text-xs text-gray-500">From PKR 4,000</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="mixers.png" alt="Umbrella" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Mixers</p>
            <p className="text-xs text-gray-500">From PKR 3,000</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="camera.png" alt="Bench" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Cameras</p>
            <p className="text-xs text-gray-500">From PKR 7,000</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="blenders.png" alt="Outdoor Mat" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Blenders</p>
            <p className="text-xs text-gray-500">From PKR 1,800</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="watch.png" alt="Garden Tools" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Watches</p>
            <p className="text-xs text-gray-500">From PKR 950</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="headphones.png" alt="Plant Pot" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Headphones</p>
            <p className="text-xs text-gray-500">From PKR 500</p>
          </div>
        </div>

      </div>
            <div className="w-full mt-6">
  <img 
    src="Section-inquiry.png"
    alt="Promotional Banner" 
    className="w-full h-auto object-cover rounded-2xl shadow-md" 
  />
</div>
    </section>
  );
};

export default Gadgets;
