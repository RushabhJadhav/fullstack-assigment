import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div>
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
  );
};

export default TaskList;
