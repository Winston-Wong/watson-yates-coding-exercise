import { boolean, text, serial, pgTable } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  isDone: boolean("is_done").notNull().default(false),
});

export type SelectTask = typeof tasks.$inferSelect;
export type InsertTask = typeof tasks.$inferInsert;
