import repository from "./repository";
import { Suplier as ISuplier } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const addSuplier = async (data: ISuplier) => {
  if (!data.name) throw new Error("Property name is missing");
  const suplier = await repository.addSuplier(data);
  return suplier;
};

const getOneSuplier = async (id: string) => {
  const suplier = await repository.getOneSuplier(id);
  if (!suplier) throw new Error("Suplier not found");
  return suplier;
};

const update = async (id: string, data: ISuplier) => {
  const suplier = await repository.update(id, data);
  if (!suplier) throw new Error("has not been updated correctly");
  return suplier;
};

const destroy = async (id: string) => {
  const suplier = await repository.delete(id);
  if (!suplier) throw new Error("Suplier not found");
  return suplier;
};

export default {
  list,
  addSuplier,
  getOneSuplier,
  update,
  delete: destroy,
};
