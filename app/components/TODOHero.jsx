"use client";
import React, { useEffect, useState } from "react";

const TODOHero = () => {
  const [savedCount, setSavedCount] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const count = Number(localStorage.getItem("taskCount")) || 0;
      const goal = Number(localStorage.getItem("taskGoal")) || 0;
      setSavedCount(count);
      setTotalTasks(goal);
    };

    updateCounts();
    window.addEventListener("taskUpdated", updateCounts);

    return () => {
      window.removeEventListener("taskUpdated", updateCounts);
    };
  }, []);

  return (
    <section className="w-full max-w-xl mx-auto bg-gradient-to-r from-green-100 via-lime-100 to-emerald-100 rounded-3xl p-8 mt-6 shadow-xl text-center">
      <h2 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-sm">
        ✅ Progress Tracker
      </h2>
      <div className="flex items-center justify-center gap-6 text-3xl font-bold text-green-900">
        <p>Tasks Done:</p>
        <span className="bg-white text-green-600 px-6 py-3 rounded-full shadow-lg border border-green-300">
          {savedCount} / {totalTasks}
        </span>
      </div>
      <div className="mt-4 text-md text-green-700 font-medium">
        {savedCount === totalTasks && totalTasks !== 0
          ? "🎉 You've completed all your tasks!"
          : `Keep going! ${totalTasks - savedCount} more to go.`}
      </div>
    </section>
  );
};

export default TODOHero;
