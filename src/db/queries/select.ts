import { db } from "../db";
import { tasks, SelectTask } from "../schema";

export async function getTasks(): Promise<SelectTask[]> {
  try {
    const allTasks = await db
      .select()
      .from(tasks)
      .orderBy(tasks.id, "asc");

    return allTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}
