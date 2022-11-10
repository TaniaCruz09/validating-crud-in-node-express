import { Router, Request, Response } from "express";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  const list = await controller.list();
  res.json(list);
});

router.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const category = await controller.addCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/:id", requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await controller.getOneCategory(id);
    res.json(category);
  } catch (error) {
    res.json({ message: "Ha ocurrido un error" });
  }
});

router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = req.body;
    const category = await controller.update(id, data);
    res.json({
      message: "Se ha actualizado correctamente el producto",
      category,
    });
  } catch (error) {
    res.json({
      message: "Ha ocurrido un error",
    });
  }
});

router.delete("/:id", requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await controller.delete(id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error",
    });
  }
});

export default router;
