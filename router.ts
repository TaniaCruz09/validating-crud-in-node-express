import { Express } from "express";
import authRouter from "./auth/router";
import productsRouter from "./products/router";
import categoriesRouter from "./categories/router";
import tagsRouter from "./tags/router";
import saleRouter from "./sale/router";
import suplierRouter from "./suplier/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/tags", tagsRouter);
  app.use("/sale", saleRouter);
  app.use("/suplier", suplierRouter);
};

export default router;
