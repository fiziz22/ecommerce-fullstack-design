import React from 'react';

const HomeandOutdoor = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        {/* Left banner with full height */}
        <div className="relative bg-gray-100 h-full min-h-[328px] flex items-center justify-center text-center rounded-lg overflow-hidden">
          <img
            src="./homedecor.png"
            alt="Home & Outdoor"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-white bg-black/50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Home & Outdoor</h2>
            <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
              Source
            </button>
          </div>
        </div>

        {/* Column 1 */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="./sofa.png" alt="Chair Set" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Chair Set</p>
            <p className="text-xs text-gray-500">From PKR 2,500</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="./lamp.png" alt="Outdoor Lamp" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Outdoor Lamp</p>
            <p className="text-xs text-gray-500">From PKR 1,200</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="racks.png" alt="Grill Stand" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Grill Stand</p>
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
            <img src="kitchen dishes.png" alt="Bench" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Dishes</p>
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
            <img src="plant.png" alt="Garden Tools" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Garden Tools</p>
            <p className="text-xs text-gray-500">From PKR 950</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <img src="pot.png" alt="Plant Pot" className="mx-auto mb-2 w-20 h-20 object-cover" />
            <p className="text-sm font-medium">Plant Pot</p>
            <p className="text-xs text-gray-500">From PKR 500</p>
          </div>
        </div>

      </div>


    </section>
    
  );
};

export default HomeandOutdoor;
