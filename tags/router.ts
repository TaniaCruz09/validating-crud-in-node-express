import { Router, Request, Response } from "express";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const list = await controller.list();
  res.json(list);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const product = await controller.addTag(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await controller.getOneTag(id);
    res.json(product);
  } catch (error) {
    res.json({ message: "Ha ocurrido un error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = await controller.update(id, data);
    res.json({
      message: "Se ha actualizado correctamente el producto",
      product,
    });
  } catch (error) {
    res.json({
      message: "Ha ocurrido un error",
    });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await controller.delete(id);
    res.json({ message: "Producto elimidado", product });
  } catch (error) {
    res.json({
      message: "Ha ocurrido un error",
    });
  }
});

export default router;
