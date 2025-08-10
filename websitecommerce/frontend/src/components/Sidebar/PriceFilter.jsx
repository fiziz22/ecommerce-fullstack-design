import React from "react";

const PriceFilter = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Price</h3>
      <div className="flex gap-2">
        <input type="number" placeholder="Min" className="border px-2 py-1 rounded w-full" />
        <input type="number" placeholder="Max" className="border px-2 py-1 rounded w-full" />
      </div>
    </div>
  );
};

export default PriceFilter;
