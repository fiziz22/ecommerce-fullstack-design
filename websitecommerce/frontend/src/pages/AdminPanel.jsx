import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [editId, setEditId] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5006/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 // Add new or update existing product
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:5006/api/products/${editId}`
      : "http://localhost:5006/api/products";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", price: "", description: "" });
    setEditId(null);
    fetchProducts();
  } catch (err) {
    console.error("Error saving product:", err);
  }
};

// Delete product
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  try {
    await fetch(`http://localhost:5006/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  } catch (err) {
    console.error("Error deleting product:", err);
  }
};


  // Set form for editing
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      description: product.description,
    });
    setEditId(product._id);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Edit Product" : "Add New Product"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border p-2 rounded col-span-1 md:col-span-3"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded col-span-1 md:col-span-3"
          >
            {editId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Products Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="border p-2">{p.name}</td>
                  <td className="border p-2">${p.price}</td>
                  <td className="border p-2">{p.description}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
