import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });
    
    const task = new Task({ title, description, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({message: "Task not found"});
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });
    if (!task) return res.status(404).json({message: "Task not found"});
    res.status(200).json({message: "Task deleted successfully"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}
