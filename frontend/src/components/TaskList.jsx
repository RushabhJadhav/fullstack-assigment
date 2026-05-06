import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, toggleTaskStatus, deleteTask } = useTasks();
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "pending") return task.status === "pending";
    return true;
  });

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const indexOfLastTask = currentPage * itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
        
        <div className="flex bg-gray-200 p-1 rounded-lg">
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-4 py-1 rounded-md text-sm font-medium capitalize transition duration-200 ${
                filter === f
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {currentTasks.length === 0 ? (
        <p className="text-gray-500 italic text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
          {filter === "all" ? "No tasks found. Add some above!" : `No ${filter} tasks found.`}
        </p>
      ) : (
        <div className="grid gap-4">
          {currentTasks.map((task) => (
            <div
              key={task._id}
              className={`p-4 rounded-lg shadow-sm border flex justify-between items-center transition duration-200 ${
                task.status === "completed" ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex-1">
                <h3 className={`font-semibold text-lg ${task.status === "completed" ? "line-through text-gray-500" : "text-gray-800"}`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className={`text-sm mt-1 ${task.status === "completed" ? "text-gray-400" : "text-gray-600"}`}>
                    {task.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Created: {new Date(task.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => toggleTaskStatus(task._id, task.status)}
                  className={`px-3 py-1 rounded text-xs font-medium transition duration-200 ${
                    task.status === "completed"
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {task.status === "completed" ? "Mark Pending" : "Mark Completed"}
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="px-3 py-1 rounded text-xs font-medium bg-red-100 text-red-700 hover:bg-red-200 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
