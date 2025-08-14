import express from 'express';
import Product from '../models/productmodel.js';

const router = express.Router();

// CREATE - Add a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, description, image, category, stock, recommended } = req.body;
    const newProduct = new Product({ name, price, description, image, category, stock, recommended });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product' });
  }
});

// READ - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get products' });
  }
});

// READ - Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get product' });
  }
});

// UPDATE - Update product by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product' });
  }
});

// DELETE - Delete product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
});

export default router;
