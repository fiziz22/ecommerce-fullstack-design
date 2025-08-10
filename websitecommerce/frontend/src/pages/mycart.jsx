import React, { useState } from "react";
import Navbar from "../components/navbar";
import Newsletter from "../components/nesletter";
import Footer from "../components/footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Bluetooth Headphones", price: 59.0, qty: 1, img: "/headphones.png" },
    { id: 2, name: "Smart Watch Series 6", price: 129.0, qty: 2, img: "/watch.png" },
  ]);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => setCartItems((items) => items.filter((item) => item.id !== id));

  const removeAll = () => setCartItems([]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* My Cart + Coupon + Bill Summary */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* My Cart Section */}
        <div className="col-span-8">
          <h2 className="text-2xl font-bold mb-4">My Cart</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white rounded shadow p-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 border-t border-b">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 border rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                  <button className="text-blue-500 text-sm">Save for later</button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              ← Back to Shop
            </button>
            <button
              onClick={removeAll}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove All
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-4 space-y-6">
          {/* Coupon */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-bold mb-2">Apply Coupon</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border rounded px-3 py-2 flex-1"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Apply
              </button>
            </div>
          </div>

          {/* Bill Summary */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-bold mb-4">Bill Summary</h3>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>
                ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>
                ${(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0) + 10).toFixed(2)}
              </span>
            </div>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Saved for later */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Saved for later</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {[
            { name: "Portable Speaker", price: "$39.99", img: "/plant.png" },
            { name: "Gaming Mouse RGB", price: "$29.50", img: "/pot.png" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-white rounded shadow hover:shadow-lg transition p-4 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-3 rounded"
                />
                <p className="text-sm font-medium mb-1">{item.name}</p>
                <p className="text-blue-600 font-bold mb-3">{item.price}</p>
              </div>
              <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Move to Cart
              </button>
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
