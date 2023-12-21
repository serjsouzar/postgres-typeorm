import { Router } from "express";
import { createStore, updateStore } from "./../controllers/store.controller";
import { validationMiddleware, storeSchema } from "../schemas/store.validation";

const router = Router();

router.post('/store',validationMiddleware(storeSchema), createStore)
router.put('/store/:id', updateStore)

export default router;
