import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <TaskProvider>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>Task Manager</h1>
        <TaskForm />
        <hr />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;