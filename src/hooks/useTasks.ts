// useTasks.ts
"use client";

import { TaskData } from "../types/Task";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useTasks() {
  // this function is a SWR hook to fetch tasks from the API on the client
  const url = "/api/tasks";
  const { data, isLoading, error } = useSWR<TaskData[]>(url, fetcher);
  return { tasks: data, loading: isLoading, error };
}
