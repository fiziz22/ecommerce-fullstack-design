import React from "react";
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded shadow">
      <p>120 items in Mobile Accessories</p>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Verified Only
        </label>
        <select className="border px-2 py-1 rounded">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div className="flex gap-2">
          <button><ViewGridIcon className="h-5 w-5" /></button>
          <button><ViewListIcon className="h-5 w-5" /></button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
