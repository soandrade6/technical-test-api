import Router from "express";
import { createMovement } from "../controllers/movement.controller.js";

const router = Router();

router.post("movements", createMovement)

export default router;