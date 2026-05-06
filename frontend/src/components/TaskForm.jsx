import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState({
    title: "",
    desscription: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(formData);
    setFormData({ title: "", desscription: "", status: false });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="desscription"
        placeholder="Description"
        value={formData.desscription}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="status"
          checked={formData.status}
          onChange={handleChange}
        />
        Completed
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
