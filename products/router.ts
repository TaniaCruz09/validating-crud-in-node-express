import { Router, Request, Response } from "express";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const productos = await controller.list();
  res.status(201).json(productos);
});

router.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const product = await controller.store(req.body);
    res
      .status(201)
      .json({ message: "Producto agregado exitosamente", product });
  } catch (error: any) {
    if (error.name === "ProductsException") {
      return res.status(400).json({
        message: error.message,
      });
    }
    res.status(500).json({
      message: error,
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

router.patch("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = await controller.update(id, data);
    res.json({
      message: "Se ha actualizado correctamente el producto",
      product,
    });
  } catch (error: any) {
    if (error.message === "Product not found") {
      return res.status(404).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: error,
    });
  }
});

router.delete("/:id", requireAuth, async (req: Request, res: Response) => {
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
