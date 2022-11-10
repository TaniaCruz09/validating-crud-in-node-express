import { ulid } from "ulid";
import { Sale } from "./models";
import { Sale as ISale } from "./interfaces";

const list = async () => {
  return await Sale.find();
};

const addSale = async (data: ISale) => {
  const id = ulid();
  const sale = new Sale({
    id,
    productName: data.productName,
    amount: data.amount,
    date: data.date,
    tax: data.tax,
    total: data.total,
  });
  await sale.save();
  return sale;
};

const getOneSale = async (id: string) => {
  return await Sale.findOne({ id });
};

const update = async (id: string, data: ISale) => {
  const sale = Sale.findOne({ id });
  const newSale = await Sale.findOneAndUpdate(sale, data, {
    new: true,
  });
  return newSale;
};

const destroy = async (id: string) => {
  return await Sale.findOneAndDelete({ id });
};

export default {
  list,
  addSale,
  getOneSale,
  update,
  delete: destroy,
};
