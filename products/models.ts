import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  detail: String,
  amount: Number,
  category: String,
  price: Number,
});

export const Product = mongoose.model("Product", productSchema);
