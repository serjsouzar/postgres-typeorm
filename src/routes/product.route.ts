import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./../controllers/product.controller";
import { validatioMiddleware, productSchema, productUpdateSchema } from "../schemas/product.validation";

const router = Router()

router.post('/products', validatioMiddleware(productSchema),createProduct )
router.get('/products', getAllProducts )
router.get('/products/:id', getProductById )
router.put('/products/:id',validatioMiddleware(productUpdateSchema), updateProduct )
router.delete('/products/:id', deleteProduct )

export default router