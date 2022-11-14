import repository from "./repository";
import { Sale as ISale } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const addSale = async (data: ISale) => {
  const sale = await repository.addSale(data);
  return sale;
};

const getOneSale = async (id: string) => {
  const sale = await repository.getOneSale(id);
  if (!sale) throw new Error("Sale not found");
  return sale;
};

const update = async (id: string, data: ISale) => {
  const sale = await repository.update(id, data);
  if (!sale) throw new Error("has not been updated correctly");
  return sale;
};

const destroy = async (id: string) => {
  const sale = await repository.delete(id);
  if (!sale) throw new Error("Sale not found");
  return sale;
};

export default {
  list,
  addSale,
  getOneSale,
  update,
  delete: destroy,
};
