import { Router } from "express";
import {
  createInput,
  getInputs,
  updateInput,
  deleteInput,
  getInput,
} from "../controllers/input.controller.js";

const router = Router();

// Routes
router.post("/", createInput);
router.put("/:id", updateInput);
router.delete("/:id", deleteInput);
router.get("/", getInputs);
router.get("/:id", getInput);

export default router;