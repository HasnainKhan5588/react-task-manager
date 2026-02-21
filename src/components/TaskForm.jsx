import { useState } from "react";

function TaskForm({ handleAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleAdd(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full sm:flex-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <button
          type="submit"
          disabled={!input.trim()}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white font-medium transition-all duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
