import repository from "./repository";
import { Tag as ITag } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const addTag = async (data: ITag) => {
  if (!data.name) throw new Error("Property name is missing");
  const tag = await repository.addTag(data);
  return tag;
};

const getOneTag = async (id: string) => {
  const tag = await repository.getOneTag(id);
  if (!tag) throw new Error("Product not found");
  return tag;
};

const update = async (id: string, data: ITag) => {
  const tag = await repository.update(id, data);
  if (!tag) throw new Error("has not been updated correctly");
  return tag;
};

const destroy = async (id: string) => {
  const product = await repository.delete(id);
  if (!product) throw new Error("Product not found");
  return product;
};

export default {
  list,
  addTag,
  getOneTag,
  update,
  delete: destroy,
};
