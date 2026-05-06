import express from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;