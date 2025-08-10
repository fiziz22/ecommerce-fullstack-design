import React, { useState } from "react";
import Navbar from "../components/navbar";
import CategoryTabs from "../components/CategoryTabs";
import Newsletter from "../components/nesletter";
import Footer from "../components/footer";

export default function WebDetail() {
  const [activeTab, setActiveTab] = useState("description");

  const tabClasses = (tab) =>
    `px-4 py-2 border-b-2 ${
      activeTab === tab
        ? "border-blue-500 text-blue-500 font-semibold"
        : "border-transparent text-gray-500 hover:text-blue-500"
    } cursor-pointer`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Category Tabs */}
      <CategoryTabs />

      {/* Product Detail Section */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Left: Product Images */}
        <div className="col-span-3">
          <img
            src="/shirt.png"
            alt="Product"
            className="w-full border rounded mb-4"
          />
          <div className="flex gap-2">
            {["/shirt.png", "/shirt.png", "/shirt.png", "/shirt.png"].map(
              (thumb, i) => (
                <img
                  key={i}
                  src={thumb}
                  alt={`Thumb ${i}`}
                  className="w-16 h-16 border rounded cursor-pointer"
                />
              )
            )}
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className="col-span-6 bg-white p-6 rounded shadow">
          <p className="text-green-600 font-semibold mb-1">In stock</p>
          <h1 className="text-2xl font-bold mb-2">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">⭐⭐⭐⭐</span>
            <span className="text-orange-500 font-bold">9.3</span>
            <span className="text-gray-500">32 reviews</span>
            <span className="text-gray-500">• 154 sold</span>
          </div>

          {/* Price tiers */}
          <div className="flex border rounded overflow-hidden mb-4">
            <div className="p-4 border-r">
              <p className="text-red-500 font-bold text-lg">$98.00</p>
              <p className="text-sm text-gray-500">50-100 pcs</p>
            </div>
            <div className="p-4 border-r">
              <p className="text-gray-800 font-bold text-lg">$90.00</p>
              <p className="text-sm text-gray-500">100-700 pcs</p>
            </div>
            <div className="p-4">
              <p className="text-gray-800 font-bold text-lg">$78.00</p>
              <p className="text-sm text-gray-500">700+ pcs</p>
            </div>
          </div>

          {/* Details table */}
          <div className="space-y-2 text-sm">
            <p><strong>Price:</strong> Negotiable</p>
            <p><strong>Type:</strong> Classic shoes</p>
            <p><strong>Material:</strong> Plastic material</p>
            <p><strong>Design:</strong> Modern nice</p>
            <p><strong>Customization:</strong> Customized logo and design custom packages</p>
            <p><strong>Protection:</strong> Refund Policy</p>
            <p><strong>Warranty:</strong> 2 years full warranty</p>
          </div>
        </div>

        {/* Right: Supplier Info */}
        <div className="col-span-3 bg-white p-6 rounded shadow flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
              R
            </div>
            <div>
              <p className="font-semibold">Supplier</p>
              <p className="text-gray-500 text-sm">Guanjoi Trading LLC</p>
            </div>
          </div>

          <div className="space-y-1 text-sm text-gray-600">
            <p>🇩🇪 Germany, Berlin</p>
            <p>✔ Verified Seller</p>
            <p>🌍 Worldwide shipping</p>
          </div>

          <button className="bg-blue-500 text-white w-full py-2 rounded">
            Send inquiry
          </button>
          <button className="border w-full py-2 rounded">
            Seller's profile
          </button>

          <button className="text-blue-500 text-sm">♡ Save for later</button>
        </div>
      </div>

      {/* Tabs + Content */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Left Content */}
        <section className="col-span-9">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <div className={tabClasses("description")} onClick={() => setActiveTab("description")}>
              Description
            </div>
            <div className={tabClasses("reviews")} onClick={() => setActiveTab("reviews")}>
              Reviews
            </div>
            <div className={tabClasses("shipping")} onClick={() => setActiveTab("shipping")}>
              Shipping
            </div>
            <div className={tabClasses("about")} onClick={() => setActiveTab("about")}>
              About Seller
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="bg-white rounded shadow p-6 space-y-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              {/* Details Table */}
              <table className="w-full text-sm border">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 bg-gray-50 w-1/3">Model</td>
                    <td className="p-2">#8786867</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 bg-gray-50">Style</td>
                    <td className="p-2">Classic style</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 bg-gray-50">Certificate</td>
                    <td className="p-2">ISO-898921212</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 bg-gray-50">Size</td>
                    <td className="p-2">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="p-2 bg-gray-50">Memory</td>
                    <td className="p-2">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="bg-white rounded shadow p-6">
              <p className="text-gray-600">⭐ 4.8 average rating from 32 reviews</p>
              {/* Example Review */}
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold">John D.</p>
                  <p className="text-sm text-gray-500">"Great product, fits perfectly."</p>
                </div>
                <div>
                  <p className="font-semibold">Sarah W.</p>
                  <p className="text-sm text-gray-500">"Quality is amazing for the price."</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="bg-white rounded shadow p-6">
              <p className="text-gray-700">Ships within 3-5 business days via DHL Express.</p>
              <p className="text-gray-500 text-sm">Free shipping on orders over $100.</p>
            </div>
          )}

          {activeTab === "about" && (
            <div className="bg-white rounded shadow p-6">
              <p className="text-gray-700">
                Guanjoi Trading LLC is a verified global seller specializing in high-quality fashion products with over
                10 years of experience.
              </p>
            </div>
          )}
        </section>

        {/* Right: You May Like */}
        <aside className="col-span-3 bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-4">You may like</h2>
          <div className="space-y-4">
            {[
              { name: "Men Blazers Sets Elegant Formal", img: "/shirt.png" },
              { name: "Men Shirt Sleeve Polo Contrast", img: "/bag.png" },
              { name: "Apple Watch Series Space Gray", img: "/watch.png" },
              { name: "Basketball Crew Socks Long Stuff", img: "/lamp.png" },
              { name: "New Summer Men's castrol T-Shirts", img: "/shirt.png" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 border rounded"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">$7.00 - $99.50</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

          {/* Related Products */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {[
            { name: "Wireless Bluetooth Headphones", price: "$59.00", img: "/headphones.png" },
            { name: "Portable Speaker", price: "$39.99", img: "/plant.png" },
            { name: "Smart Watch Series 6", price: "$129.00", img: "/watch.png" },
            { name: "Gaming Mouse RGB", price: "$29.50", img: "/pot.png" },
            { name: "Noise Cancelling Earbuds", price: "$79.00", img: "/shirt.png" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-white rounded shadow hover:shadow-lg transition p-4 flex-shrink-0"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <p className="text-sm font-medium mb-1">{item.name}</p>
              <p className="text-blue-600 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Banner */}
      <div className="bg-blue-600 text-white py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Get up to <span className="text-yellow-300">50% OFF</span> on selected products!
        </h2>
        <p className="mb-4">Limited time offer. Don’t miss out!</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
