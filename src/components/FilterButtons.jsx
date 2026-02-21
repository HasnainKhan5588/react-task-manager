function FilterButtons({ setFilter, filter, clearCompletedTasks }) {
  const baseBtn =
    "flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200";

  const activeStyle = "bg-indigo-500 text-white shadow-md";
  const inactiveStyle = "bg-white/20 text-gray-200 hover:bg-white/30";

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => setFilter("all")}
        className={`${baseBtn} ${
          filter === "all" ? activeStyle : inactiveStyle
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`${baseBtn} ${
          filter === "active" ? activeStyle : inactiveStyle
        }`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`${baseBtn} ${
          filter === "completed" ? activeStyle : inactiveStyle
        }`}
      >
        Completed
      </button>

      <button
        onClick={clearCompletedTasks}
        className="flex-1 py-2 rounded-lg text-sm font-medium bg-rose-500/80 hover:bg-rose-600 text-white transition-all duration-200"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default FilterButtons;
