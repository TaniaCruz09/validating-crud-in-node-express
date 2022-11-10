import { Express } from "express";
import authRouter from "./auth/router";
import productsRouter from "./products/router";
import saleRouter from "./sale/router";
import suplierRouter from "./suplier/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/products", productsRouter);
  app.use("/sale", saleRouter);
  app.use("/suplier", suplierRouter);
};

export default router;
