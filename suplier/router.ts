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
    const suplier = await controller.addSuplier(req.body);
    res
      .status(201)
      .json({ message: "Proveedor agregado correctamente", suplier });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const suplier = await controller.getOneSuplier(id);
    res.json(suplier);
  } catch (error) {
    res.json({ message: "Ha ocurrido un error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const suplier = await controller.update(id, data);
    res.json({
      message: "Se ha actualizado correctamente los datos del proveedor",
      suplier,
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
    await controller.delete(id);
    res.json({ message: "Proveedor elimidado" });
  } catch (error) {
    res.json({
      message: "Ha ocurrido un error",
    });
  }
});

export default router;
