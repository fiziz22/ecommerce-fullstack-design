import React from "react";
import ProductCard from "./ProductCard";
const products = [
  { id: 1, name: "Wireless Earbuds", price: 49, image: "/headphones.png" },
  { id: 2, name: "Smart Watch", price: 99, image: "/watch.png" },
  { id: 3, name: "Bluetooth Speaker", price: 39, image: "/phone.png" },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
