import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = new Task({ title, description, status });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export const updateTask = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const deleteTask = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}