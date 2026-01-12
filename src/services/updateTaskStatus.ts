import { db } from "../db";
import { tasks } from "../db/schema";
import { eq } from "drizzle-orm";

// Builds and updates and UPDATE SQL query
export async function updateTaskStatus(taskId: number, isDone: boolean) {
  await db
    .update(tasks)
    .set({ isDone })
    .where(eq(tasks.id, taskId));
}
