"use client"; // File runs in browser, not on the server

import { useState } from "react"; // Lets component store and update local state
import { mutate } from "swr"; // Keeps UI in sync after data changes


export default function Checkbox({
  task_id,
  isDone,
}: {
  task_id: number;
  isDone: boolean;
}) {
  const [checked, setChecked] = useState(isDone);

  const handleClick = async () => {
    // User sees instant feedback without waiting for the server
    const newValue = !checked;
    setChecked(newValue);

    // Send update to the API
    await fetch("/api/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task_id,
        isDone: newValue,
      }),
    });
    
    mutate("/api/tasks"); // Revalidate cached data
  };

  return <input type="checkbox" checked={checked} onChange={handleClick} />;
}

// Data flow:
// 1. User clicks checkbox
// 2. UI updates instantly
// 3 API request updates database
// 4. Refetch data
// 5. UI stays in sync with backend