import { Router } from "express";
import {
  createValor,
  getValores,
  updateValor,
  deleteValor,
  getValor,
} from "../controllers/valor.controller.js";

const router = Router();

// Routes
router.post("/", createValor);
router.put("/:id", updateValor);
router.delete("/:id", deleteValor);
router.get("/", getValores);
router.get("/:id", getValor);

export default router;