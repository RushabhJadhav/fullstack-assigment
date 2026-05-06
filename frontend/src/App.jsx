import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Signup from "./components/Signup";

const AppContent = () => {
  const { user, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (!user) {
    return isLogin ? (
      <Login toggleAuth={() => setIsLogin(false)} />
    ) : (
      <Signup toggleAuth={() => setIsLogin(true)} />
    );
  }

  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10 text-center flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="text-left">
              <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
                Task Manager
              </h1>
              <p className="text-sm text-gray-500">Logged in as {user.email}</p>
            </div>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </header>
          
          <main className="space-y-10">
            <TaskForm />
            <TaskList />
          </main>
        </div>
      </div>
    </TaskProvider>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
