import express from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getAllTasks);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;