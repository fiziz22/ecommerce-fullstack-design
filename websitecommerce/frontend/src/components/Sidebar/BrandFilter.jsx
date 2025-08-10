import React from "react";

const BrandFilter = () => {
  const brands = ["Apple", "Samsung", "Sony", "Xiaomi", "Oppo"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Brands</h3>
      <ul className="space-y-2">
        {brands.map((brand, idx) => (
          <li key={idx}>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
