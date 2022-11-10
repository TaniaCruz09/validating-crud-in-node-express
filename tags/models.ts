import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  password: String,
});

export const Tag = mongoose.model("Tag", tagsSchema);
