import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, toggleTaskStatus, deleteTask } = useTasks();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500 italic text-center py-8">No tasks found. Add some above!</p>
      ) : (
        <div className="grid gap-4">
          {tasks.map((task) => (
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
    </div>
  );
};

export default TaskList;
