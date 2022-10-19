import { Router, Request, Response, NextFunction } from 'express';
import controller from './controller';

const router = Router();


router.get("/products", async (req: Request, res: Response, next: NextFunction) => {
    const productos = await controller.list();
    res.json(productos);
});

router.post("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await controller.store(req.body)
        res.status(201).json(product);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

router.get("/products/:id", async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const product = await controller.getOne(id);
    res.json(product);
});

router.delete("/products/:id", (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // let myproducts = products.filter(item => item.id !== id);
    res.json({});
});


export default router; 