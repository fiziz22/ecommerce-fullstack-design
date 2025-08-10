import React, { useState } from "react";
import Navbar from "../components/navbar";
import CategoryTabs from "../components/CategoryTabs";
import Newsletter from "../components/nesletter";
import Footer from "../components/footer";

export default function WebListView() {
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [viewType, setViewType] = useState("grid");

  const products = [
    { id: 1, name: "Wireless Earbuds", price: 49, rating: 4, image: "/headphones.png" },
    { id: 2, name: "Smart Watch", price: 99, rating: 5, image: "/watch.png" },
    { id: 3, name: "Bluetooth Speaker", price: 39, rating: 3, image: "/laptop.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Category Tabs */}
      <CategoryTabs />

      {/* Main Content */}
      <div className="flex flex-1 container mx-auto px-6 mt-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 space-y-6 bg-white p-4 shadow rounded">
          <div>
            <h3 className="font-bold mb-2">Categories</h3>
            <ul className="space-y-1">
              {["Mobile Accessories", "Smartphones", "Laptops"].map((cat) => (
                <li key={cat}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Brands</h3>
            <ul className="space-y-1">
              {["Apple", "Samsung", "Sony"].map((brand) => (
                <li key={brand}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Features</h3>
            <ul className="space-y-1">
              {["Wireless", "Noise Cancelling", "Waterproof"].map((f) => (
                <li key={f}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> {f}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Price Range</h3>
            <div className="flex gap-2 mb-2">
              <input type="number" placeholder="Min" className="border p-1 rounded w-1/2" />
              <input type="number" placeholder="Max" className="border p-1 rounded w-1/2" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded">Apply</button>
          </div>

          <div>
            <h3 className="font-bold mb-2">Condition</h3>
            <label className="flex items-center gap-2">
              <input type="radio" name="condition" /> New
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="condition" /> Used
            </label>
          </div>

          <div>
            <h3 className="font-bold mb-2">Ratings</h3>
            {[5, 4, 3].map((stars) => (
              <label key={stars} className="flex items-center gap-2">
                <input type="checkbox" />{"⭐".repeat(stars)}
              </label>
            ))}
          </div>
        </aside>

        {/* Product Section */}
        <main className="w-3/4 space-y-6">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>{products.length} items in Mobile Accessories</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                />
                Verified Only
              </label>
              <select className="border px-2 py-1 rounded">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewType("grid")}
                  className={`px-2 py-1 border rounded ${viewType === "grid" ? "bg-gray-200" : ""}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`px-2 py-1 border rounded ${viewType === "list" ? "bg-gray-200" : ""}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Product List */}
          {viewType === "grid" ? (
            <div className="grid grid-cols-3 gap-4">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="border p-4 rounded bg-white shadow hover:shadow-md transition"
                >
                  <img src={p.image} alt={p.name} className="w-full h-40 object-cover mb-3" />
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-yellow-500">{"⭐".repeat(p.rating)}</p>
                  <p className="text-gray-600">${p.price}</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="flex border rounded bg-white shadow hover:shadow-md transition overflow-hidden"
                >
                  <img src={p.image} alt={p.name} className="w-40 h-40 object-cover" />
                  <div className="flex flex-col justify-between p-4 flex-1">
                    <div>
                      <h3 className="font-bold text-lg">{p.name}</h3>
                      <p className="text-yellow-500">{"⭐".repeat(p.rating)}</p>
                      <p className="text-gray-600 mt-1">${p.price}</p>
                    </div>
                    <div className="mt-2">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-end">
            <button className="px-3 py-1 border rounded">Prev</button>
            <button className="px-3 py-1 border rounded bg-gray-200">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </main>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
