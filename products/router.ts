import { Router, Request, Response } from "express";
import validations from "./validations";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const productos = await controller.list();
  res.status(201).json(productos);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const product = await controller.store(req.body);
    res
      .status(201)
      .json({ message: "Producto agregado exitosamente", product });
  } catch (validations) {
    res.json({
      message: validations.message,
    });
  }
});

router.get("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await controller.getOne(id);
    res.json(product);
  } catch (error) {
    res.json({
      message: "Ha ocurrido un error",
    });
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
