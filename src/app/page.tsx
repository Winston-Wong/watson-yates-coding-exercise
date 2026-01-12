"use client";

import { useState } from "react";
import TaskTable from "../components/TaskTable";
import Task from "../components/Task";
import { useTasks } from "../hooks/useTasks";
import type { TaskData } from "../types/Task";
import AddItem from "../components/AddItem";

export default function Home() {
  const { tasks, loading, error } = useTasks();
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  // Filter tasks on the front end
  // Why? - No additional API requests when toggling the filter, instant UI updates, 
  const visibleTasks = showCompletedOnly
    ? tasks?.filter((task) => task.isDone)
    : tasks;

  return (
    <>
      {error && <div>Error loading data: {error}</div>}
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          {/* Filter toggle */}
          <div className="flex justify -center mb-4 gap-2">
            <input
              type="checkbox"
              checked={showCompletedOnly}
              onChange={() => setShowCompletedOnly((prev) => !prev)}
            />
            <span>Show completed only</span>
          </div>

          {/* Task list */}
          <TaskTable>
            {visibleTasks!.map((task: TaskData) => (
              <tr key={task.id}>
                <Task task={task} />
              </tr>
            ))}
          </TaskTable>

          {/* Add new Task */}
          <div className="flex justify-center mt-4">
            <AddItem />
          </div>
        </>
      )}
    </>
  );
}
