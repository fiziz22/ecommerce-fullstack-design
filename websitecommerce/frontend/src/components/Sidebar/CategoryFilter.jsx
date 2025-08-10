import React from "react";

const CategoryFilter = () => {
  const categories = ["All", "Gadgets", "Clothes", "Accessories", "Home", "Beauty"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx} className="cursor-pointer hover:text-blue-600">
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
