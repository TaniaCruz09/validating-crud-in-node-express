import repository from "./repository";
import { Product as IProduct } from "./interfaces";
import validations from "./validations";

const list = async () => {
  return await repository.list();
};

const store = async (data: IProduct) => {
  validations.validateProductInput(data);
  const product = await repository.store(data);
  return product;
};

const getOne = async (id: string) => {
  const product = await repository.getOne(id);
  if (!product) throw new Error("Product not found");
  return product;
};

const update = async (id: string, data: IProduct) => {
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
  store,
  getOne,
  update,
  delete: destroy,
};
