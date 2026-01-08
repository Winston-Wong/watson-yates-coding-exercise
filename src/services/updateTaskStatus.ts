import { db } from "../db";
import { tasks } from "../db/schema";
import { eq } from "drizzle-orm";

export async function updateTaskStatus(taskId: number, isDone: boolean) {
  await db
    .update(tasks)
    .set({ isDone })
    .where(eq(tasks.id, taskId));
}
