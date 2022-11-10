import mongoose from "mongoose";

const suplierSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  address: String,
});

export const Suplier = mongoose.model("Suplier", suplierSchema);
