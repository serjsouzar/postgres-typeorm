import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./../controllers/product.controller";
import { validationMiddleware, productSchema, productUpdateSchema } from "../schemas/product.validation";

const router = Router()

router.post('/products', validationMiddleware(productSchema),createProduct )
router.get('/products', getAllProducts )
router.get('/products/:id', getProductById )
router.put('/products/:id',validationMiddleware(productUpdateSchema), updateProduct )
router.delete('/products/:id', deleteProduct )

export default router