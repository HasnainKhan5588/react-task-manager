import { useState } from "react";

function TaskItem({ handleDell, task, toggleCompleted, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (!editText.trim()) return; // prevent empty edit
    handleEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200">
      {isEditing ? (
        <div className="flex w-full gap-2">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 rounded-lg bg-gray-400/40 hover:bg-gray-400/60 text-white text-sm transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div
            onClick={() => toggleCompleted(task.id)}
            className={`flex items-center gap-3 flex-1 cursor-pointer select-none ${
              task.completed ? "line-through text-gray-400" : "text-white"
            }`}
          >
            <div className="w-5 h-5 border-2 border-indigo-400 rounded-md flex items-center justify-center">
              {task.completed && (
                <span className="text-indigo-400 text-sm">✓</span>
              )}
            </div>

            <p className="break-words">{task.text}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1.5 rounded-lg bg-indigo-400/80 hover:bg-indigo-500 text-white text-sm transition"
            >
              Edit
            </button>

            <button
              onClick={() => handleDell(task.id)}
              className="px-3 py-1.5 rounded-lg bg-rose-500/80 hover:bg-rose-600 text-white text-sm transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
