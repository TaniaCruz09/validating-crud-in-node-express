import { ulid } from "ulid";
import { Suplier } from "./models";
import { Suplier as ISuplier } from "./interfaces";

const list = async () => {
  return await Suplier.find();
};

const addSuplier = async (data: ISuplier) => {
  const id = ulid();
  const suplier = new Suplier({
    id,
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    address: data.address,
  });
  await suplier.save();
  return suplier;
};

const getOneSuplier = async (id: string) => {
  return await Suplier.findOne({ id });
};

const update = async (id: string, data: ISuplier) => {
  const suplier = Suplier.findOne({ id });
  const newSuplier = await Suplier.findOneAndUpdate(suplier, data, {
    new: true,
  });
  return newSuplier;
};

const destroy = async (id: string) => {
  const suplier = await Suplier.findOneAndDelete({ id });
  return suplier;
};

export default {
  list,
  addSuplier,
  getOneSuplier,
  update,
  delete: destroy,
};
