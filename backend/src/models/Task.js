import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true
  },
  desscription: {
    type: String,
  },
  status: {
    type: Boolean,
  },
}, {
  timestamps: true
});

const Task = mongoose.model("Task", taskSchema);

export default Task;