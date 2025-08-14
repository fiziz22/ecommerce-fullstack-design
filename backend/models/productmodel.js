// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,
   category: { type: String, required: false },
     stock: {
    type: Number,
    required: false,
    default: 0
  },
      recommended: { type: Boolean, default: false } 
});

export default mongoose.model("Product", productSchema);
