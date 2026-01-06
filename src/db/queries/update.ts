import { tasks, InsertTask } from "../schema";
import { db } from "../db";
import { eq, is } from "drizzle-orm";

export async function updateTask(taskId: number, isDone: { isDone: boolean }) {
  return await db
    .update(tasks)
    .set(isDone as Partial<InsertTask>)
    .where(eq(tasks.id, taskId))
    .returning();
}
