import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
              Task Manager
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Stay organized and productive
            </p>
          </header>
          
          <main className="space-y-10">
            <TaskForm />
            <TaskList />
          </main>
          
          <footer className="mt-16 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Task Manager App. All rights reserved.
          </footer>
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
