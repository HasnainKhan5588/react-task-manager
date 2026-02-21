import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(() => {
    return localStorage.getItem("filter") || "all";
  });
  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [search, setSearch] = useState("");

  const handleAdd = (input) => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const remainingTasks = tasks.filter((task) => !task.completed).length;
  const handleDell = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "active") return !task.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
  const handleEdit = (id, newTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newTask } : task)),
    );
  };

  const clearCompletedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 space-y-4 text-white">
        <h1 className="text-2xl font-bold text-center">Task Manager</h1>

        <TaskForm handleAdd={handleAdd} />

        <FilterButtons
          setFilter={setFilter}
          clearCompletedTasks={clearCompletedTasks}
        />

        <p className="text-sm text-gray-300">{remainingTasks} task(s) left</p>

        <input
          type="text"
          value={search}
          placeholder="Search task..."
          className="w-full p-2 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        <TaskList
          tasks={filteredTasks}
          handleDell={handleDell}
          toggleCompleted={toggleCompleted}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
