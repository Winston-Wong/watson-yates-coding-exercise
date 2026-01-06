import { TaskData } from "@/types/Task";

export async function createTask(task: TaskData) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return res.json();
}
