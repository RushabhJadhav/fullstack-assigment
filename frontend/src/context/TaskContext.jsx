import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { token } = useAuth();
  const API_URL = "http://localhost:5000/api/tasks";

  const getHeaders = () => ({
    headers: { Authorization: `Bearer ${token}` }
  });

  const fetchTasks = async () => {
    if (!token) return;
    try {
      const res = await axios.get(API_URL, getHeaders());
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const res = await axios.post(API_URL, taskData, getHeaders());
      setTasks((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTaskStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "completed" ? "pending" : "completed";
      const res = await axios.patch(`${API_URL}/${id}`, { status: newStatus }, getHeaders());
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? res.data : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, getHeaders());
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [token]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
