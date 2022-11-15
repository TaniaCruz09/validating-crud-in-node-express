import { Product as IProduct } from "./interfaces";
import { ProductsException } from "./errorClass";

const validateProductInput = ({
  name,
  price,
  detail,
  amount,
  category,
}: IProduct) => {
  //validando name
  if (!name) throw new ProductsException("Property name is missing");
  if (typeof name !== "string")
    throw new ProductsException("name must be a string");
  if (name.length < 3)
    throw new ProductsException("Property name must be at least 3 characters");
  if (name.length > 25)
    throw new ProductsException("Property name must be at most 20 characters");

  //validando price
  if (!price) throw new ProductsException("Property price is missing");
  if (typeof price !== "number") throw new Error("price must be a number");

  //validando detail
  if (!detail) throw new ProductsException("Property name is missing");
  if (typeof detail !== "string")
    throw new ProductsException("name must be a string");
  if (detail.length < 3)
    throw new ProductsException("Property name must be at least 3 characters");
  if (detail.length > 25)
    throw new ProductsException("Property name must be at most 20 characters");

  //validando amount
  if (!amount) throw new ProductsException("Property price is missing");
  if (typeof amount !== "number") throw new Error("price must be a number");

  //validando category
  if (!category) throw new ProductsException("Property name is missing");
  if (typeof category !== "string")
    throw new ProductsException("name must be a string");
  if (category.length < 3)
    throw new ProductsException("Property name must be at least 3 characters");
  if (category.length > 25)
    throw new ProductsException("Property name must be at most 20 characters");
};

export default {
  validateProductInput,
};
