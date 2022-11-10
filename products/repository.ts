import { ulid } from "ulid";
import { Product } from "./models";
import { Product as IProduct } from "./interfaces";

const list = async () => {
  return await Product.find();
};

const store = async (data: IProduct) => {
  const id = ulid();
  const product = new Product({ name: data.name, price: data.price, id });
  await product.save();
  return product;
};

const getOne = async (id: string) => {
  return await Product.findOne({ id });
};

const update = async (id: string, data: IProduct) => {
  const product = Product.findOne({ id });
  const newProduct = await Product.findOneAndUpdate(product, data, {
    new: true,
  });
  return newProduct;
};

const destroy = async (id: string) => {
  const product = await Product.findOneAndDelete({ id });
  return product;
};

export default {
  list,
  store,
  getOne,
  update,
  delete: destroy,
};
