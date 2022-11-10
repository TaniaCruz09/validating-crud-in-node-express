import { ulid } from "ulid";
import { Tag } from "./models";
import { Tag as ITag } from "./interfaces";

const list = async () => {
  return await Tag.find();
};

const addTag = async (data: ITag) => {
  const id = ulid();
  const tag = new Tag({ name: data.name, price: data.price, id });
  await tag.save();
  return tag;
};

const getOneTag = async (id: string) => {
  return await Tag.findOne({ id });
};

const update = async (id: string, data: ITag) => {
  const product = Tag.findOne({ id });
  const newProduct = await Tag.findOneAndUpdate(product, data, {
    new: true,
  });
  return newProduct;
};

const destroy = async (id: string) => {
  const product = await Tag.findOneAndDelete({ id });
  return product;
};

export default {
  list,
  addTag,
  getOneTag,
  update,
  delete: destroy,
};
