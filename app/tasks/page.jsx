"use client";
import React, { useState, useEffect } from "react";

const TaskPage = () => {
  const [storedTasks, setStoredTasks] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("to-do-list");
    if (data) {
      setStoredTasks(JSON.parse(data));
    }
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedTasks = storedTasks.filter((_, i) => i !== indexToDelete);
    setStoredTasks(updatedTasks);
    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
    const currentCount = Number(localStorage.getItem("taskCount")) || 0;
    const newCount = currentCount > 0 ? currentCount - 1 : 0;
    localStorage.setItem("taskCount", newCount);
    window.dispatchEvent(new Event("taskUpdated"));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-amber-100 to-yellow-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 drop-shadow-lg text-center">
        ✅ Your Tasks
      </h1>

      {storedTasks.length === 0 ? (
        <p className="text-lg text-gray-600">No Tasks Found</p>
      ) : (
        <ul className="w-full max-w-2xl space-y-4">
          {storedTasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white rounded-xl p-4 shadow-md border border-amber-200 hover:shadow-lg transition-all"
            >
              <span className="text-lg text-gray-800 font-medium">{task}</span>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-red-400 text-white rounded-lg text-sm font-semibold hover:bg-red-500 transition-all"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskPage;
