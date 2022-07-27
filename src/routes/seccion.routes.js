import { Router } from "express";
import {
  createSeccion,
  getSecciones,
  updateSeccion,
  deleteSeccion,
  getSeccion,
} from "../controllers/seccion.controller.js";

const router = Router();

// Routes
router.post("/", createSeccion);
router.put("/:id", updateSeccion);
router.delete("/:id", deleteSeccion);
router.get("/", getSecciones);
router.get("/:id", getSeccion);

export default router;