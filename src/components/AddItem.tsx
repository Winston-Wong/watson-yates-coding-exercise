import { createTask } from "@/services/createTask";
import { useState } from "react";
import { mutate } from "swr";

export default function AddItem() {
  const [newTaskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: any) => {
    // submit new task to DB
    e.preventDefault();
    const res = await createTask({ name: newTaskName, isDone: false });
    // update error message and task name
    if (res.error) {
      setError(res.error);
    } else {
      setError("");
      setTaskName("");
      // refresh the api data to be displayed
      mutate("/api/tasks");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2"
        placeholder="New task..."
        value={newTaskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2 cursor-pointer"
      >
        Add
      </button>
      <p className="text-red-500 mt-2 ml-2">
        {error && <span className="text-red-500">{error}</span>}
      </p>
    </form>
  );
}
