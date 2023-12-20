import { Router } from "express";
import { createStore } from "./../controllers/store.controller";

const router = Router();

router.post('/store', createStore)

export default router;
