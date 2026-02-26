function FilterButtons({ setFilter, filter, clearCompletedTasks }) {
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 mt-2 mb-4">
      <button
        onClick={() => setFilter("all")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          filter === "all"
            ? "bg-indigo-500 text-white shadow-md"
            : "bg-white/20 text-gray-200 hover:bg-white/30"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          filter === "active"
            ? "bg-indigo-500 text-white shadow-md"
            : "bg-white/20 text-gray-200 hover:bg-white/30"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          filter === "completed"
            ? "bg-indigo-500 text-white shadow-md"
            : "bg-white/20 text-gray-200 hover:bg-white/30"
        }text-[12px]  md:text-sm`}
      >
        Completed
      </button>

      <button
        onClick={clearCompletedTasks}
        className="flex-1 py-1 px-1 rounded-lg text-[12px]  md:text-sm font-medium bg-rose-500/80 hover:bg-rose-600 text-white transition-all duration-200"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default FilterButtons;
