import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
  } catch (error) {
    console.log(error);
  }
}