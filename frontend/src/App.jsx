import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desscription: "",
    status: false
  });

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", formData);
      setTasks([...tasks, res.data]);
      setFormData({ title: "", description: "", status: false });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Task Manager</h1>
      
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

      <hr />

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.status ? "✅" : "❌"}
            <p>{task.desscription}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;