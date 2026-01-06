"use client";

import TaskTable from "../components/TaskTable";
import Task from "../components/Task";
import { useTasks } from "../hooks/useTasks";
import type { TaskData } from "../types/Task";
import AddItem from "../components/AddItem";

export default function Home() {
  const { tasks, loading, error } = useTasks();

  return (
    <>
      {error && <div>Error loading data: {error}</div>}
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <TaskTable>
            {tasks!.map((task: TaskData) => (
              <tr key={task.id}>
                <Task task={task} />
              </tr>
            ))}
          </TaskTable>
          <div className="flex justify-center mt-4">
            <AddItem />
          </div>
        </>
      )}
    </>
  );
}
