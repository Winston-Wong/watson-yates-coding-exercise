import { db } from "../db";
import { tasks, SelectTask } from "../schema";

// Queries the database for all tasks, orders them by id, returns results as typed array
export async function getTasks(): Promise<SelectTask[]> {
  try {
    // Builds and executes SQL query
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
