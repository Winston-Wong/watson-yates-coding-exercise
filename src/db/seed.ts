import { db } from "./db";
import { InsertTask, tasks } from "./schema";

const sampleData = [
  { name: "Clone repo", isDone: false },
  { name: "Download dependencies", isDone: false },
  { name: "Implement API endpoint", isDone: false },
];

export default async function seed(data: InsertTask[]) {
  for (const task of data) {
    await db.insert(tasks).values(task).returning();
  }
}

seed(sampleData);
