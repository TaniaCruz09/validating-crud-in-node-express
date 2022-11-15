import { Product as IProduct } from "./interfaces";
import { ProductsException } from "./errorClass";

const validateProductInput = ({ name, price }: IProduct) => {
  //validando que el nombre no este vacio, que sea de tipo string
  //y que lo escrito no sea menor que 3 ni mayor que 5.
  if (!name) throw new ProductsException("Property name is missing");
  if (typeof name !== "string")
    throw new ProductsException("name must be a string");
  if (name.length < 3)
    throw new ProductsException("Property name must be at least 3 characters");
  if (name.length > 20)
    throw new ProductsException("Property name must be at most 20 characters");

  //validando que el precio no este vacio y que sea un numero.
  if (!price) throw new ProductsException("Property price is missing");
  if (typeof price !== "number") throw new Error("price must be a number");
};

export default {
  validateProductInput,
};
