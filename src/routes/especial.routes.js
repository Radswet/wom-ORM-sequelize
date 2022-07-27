import { Router } from "express";
import {
  createEspecial,
  getEspeciales,
  updateEspecial,
  deleteEspecial,
  getEspecial,
} from "../controllers/especial.controller.js";

const router = Router();

// Routes
router.post("/", createEspecial);
router.put("/:id", updateEspecial);
router.delete("/:id", deleteEspecial);
router.get("/", getEspeciales);
router.get("/:id", getEspecial);

export default router;