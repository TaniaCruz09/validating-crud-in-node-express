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
    const sale = await controller.addSale(req.body);
    res.status(201).json({ message: "Venta agregada correctamente", sale });
  } catch (error: any) {
    if (error.name === "SaleException") {
      res.status(400).json({
        message: error.message,
      });
    }
    res.status(500).json({ message: error });
  }
});

router.get("/:id", requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sale = await controller.getOneSale(id);
    res.json(sale);
  } catch (error) {
    res.json({ message: "Ha ocurrido un error" });
  }
});

router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const sale = await controller.update(id, data);
    res.json({
      message: "Se ha actualizado correctamente los datos de la venta",
      sale,
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
    res.json({ message: "venta elimidada correctamente" });
  } catch (error) {
    res.json({
      message: "Ha ocurrido un error",
    });
  }
});

export default router;
