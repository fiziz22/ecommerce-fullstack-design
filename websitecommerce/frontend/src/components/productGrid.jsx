import React from 'react';

const products = [
  {
    name: 'Clay Pot',
    price: '$80.00',
    image: 'https://images.unsplash.com/photo-1616627985873-6f41e1cf0b4c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Backpack',
    price: '$30.90',
    image: 'https://images.unsplash.com/photo-1600185366009-c0f7d1dc4c2b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Jacket',
    price: '$30.30',
    image: 'https://images.unsplash.com/photo-1602810316635-4fa3fda09b81?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'T-shirt',
    price: '$10.90',
    image: 'https://images.unsplash.com/photo-1586864381710-7ecf40dfc199?auto=format&fit=crop&w=400&q=80',
  },
];

const ProductGrid = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Recommended Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded p-3 shadow hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-md font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
