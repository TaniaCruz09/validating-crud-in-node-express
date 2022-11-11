import { Product as IProduct } from "./interfaces";

const validateProductInput = (data: IProduct) => {
  const { name, price } = data;

  //validando que el nombre no este vacio, que sea de tipo string y que lo escrito no sea menor que 3 ni mayor que 5.
  if (!name) throw new Error("Property name is missing");
  if (typeof name !== "string") throw new Error("name must be a string");
  if (data.name.length < 3)
    throw new Error("Property name must be at least 3 characters");
  if (data.name.length > 20)
    throw new Error("Property name must be at most 20 characters");

  //validando que el precio no este vacio y que sea un numero.
  if (!price) throw new Error("Property name is missing");
  if (typeof price !== "number") throw new Error("price must be a number");
};

export default {
  validateProductInput,
};
