import express from "express";
import { getAllTasks } from "../controllers/task.controller";

const router = express.Router();

router.get("/", getAllTasks);

// router.post("/");

// router.put("/");

// router.delete("/");

export default router;