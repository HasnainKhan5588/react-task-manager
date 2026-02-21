import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDell, toggleCompleted, handleEdit }) {
  return (
    <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-1">
      {tasks.length === 0 ? (
        <div className="text-center text-gray-300 py-6 bg-white/10 rounded-xl border border-white/10">
          No tasks found
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDell={handleDell}
            toggleCompleted={toggleCompleted}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
