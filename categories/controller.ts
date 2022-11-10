import repository from "./repository";
import { Category as ICategory } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const addCategory = async (data: ICategory) => {
  if (!data.name) throw new Error("Property name is missing");
  const product = await repository.addCategory(data);
  return product;
};

const getOneCategory = async (id: string) => {
  const product = await repository.getOneCategory(id);
  if (!product) throw new Error("Product not found");
  return product;
};

const update = async (id: string, data: ICategory) => {
  const product = await repository.update(id, data);
  if (!product) throw new Error("has not been updated correctly");
  return product;
};

const destroy = async (id: string) => {
  const product = await repository.delete(id);
  if (!product) throw new Error("Product not found");
  return product;
};

export default {
  list,
  addCategory,
  getOneCategory,
  update,
  delete: destroy,
};
