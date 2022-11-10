import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  id: String,
  productName: String,
  amount: Number,
  date: String,
  tax: String,
  total: Number,
});

export const Sale = mongoose.model("Sale", saleSchema);
