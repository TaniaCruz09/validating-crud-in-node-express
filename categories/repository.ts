import { ulid } from "ulid";
import { Category } from "./models";
import { Category as ICategory } from "./interfaces";

const list = async () => {
  return await Category.find();
};

const addCategory = async (data: ICategory) => {
  const id = ulid();
  const category = new Category({
    id,
    name: data.name,
    description: data.description,
    slug: data.slug,
  });
  await category.save();
  return category;
};

const getOneCategory = async (id: string) => {
  return await Category.findOne({ id });
};

const update = async (id: string, data: ICategory) => {
  const product = Category.findOne({ id });
  const newProduct = await Category.findOneAndUpdate(product, data, {
    new: true,
  });
  return newProduct;
};

const destroy = async (id: string) => {
  return await Category.findOneAndDelete({ id });
};

export default {
  list,
  addCategory,
  getOneCategory,
  update,
  delete: destroy,
};
