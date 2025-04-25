"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Form = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [viewTasks, setViewTasks] = useState(false);
  const [count, setCount] = useState(0);
  const taskGoal = 10;
  const router = useRouter();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("to-do-list")) || [];
    setTasks(storedTasks);

    const storedCount = Number(localStorage.getItem("taskCount")) || 0;
    setCount(storedCount);
  }, []);

  useEffect(() => {
    localStorage.setItem("taskCount", count);
    localStorage.setItem("taskGoal", taskGoal);
  }, [count]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentTask.trim()) return;

    const updatedTasks = [...tasks, currentTask];
    const newCount = count + 1;

    setTasks(updatedTasks);
    setCount(newCount);

    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
    localStorage.setItem("taskCount", newCount);
    localStorage.setItem("taskGoal", taskGoal);
    window.dispatchEvent(new Event("taskUpdated"));

    setCurrentTask("");
    alert("🚀 Task added successfully!");
  };

  useEffect(() => {
    if (viewTasks) {
      router.push("/tasks");
    }
  }, [router, viewTasks]);

  return (
    <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl shadow-xl p-8 mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center"
      >
        <h2 className="text-4xl font-extrabold text-purple-700 drop-shadow-md">
          📝 Add a New Task
        </h2>

        <div className="flex w-full gap-4 items-center">
          <input
            type="text"
            id="addTask"
            placeholder="What's on your mind?"
            value={currentTask}
            onChange={(event) => setCurrentTask(event.target.value)}
            className="flex-1 px-5 py-3 rounded-xl border border-purple-300 bg-white shadow-inner text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200"
          >
            ➕ Add
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <button
          onClick={() => setViewTasks(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          📋 View My Tasks
        </button>
      </div>
    </div>
  );
};

export default Form;
