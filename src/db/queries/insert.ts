import { db } from "../db";
import { tasks, InsertTask } from "../schema";

export async function createTask(task: InsertTask) {
  // add a task to the database
  return await db.insert(tasks).values(task).returning();
}
