import { Router } from "express";
import { createProduct, getAllProducts, getProductById } from "./../controllers/product.controller";

const router = Router()

router.post('/products', createProduct )
router.get('/products', getAllProducts )
router.get('/products/:id', getProductById )

export default router