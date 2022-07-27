import { Router } from "express";
import {
  createTemplate,
  getTemplates,
  updateTemplate,
  deleteTemplate,
  getTemplate,
} from "../controllers/template.controller.js";

const router = Router();

// Routes
router.post("/", createTemplate);
router.put("/:id", updateTemplate);
router.delete("/:id", deleteTemplate);
router.get("/", getTemplates);
router.get("/:id", getTemplate);

export default router;