"use client";

import { useState } from "react";
import { mutate } from "swr";


export default function Checkbox({
  task_id,
  isDone,
}: {
  task_id: number;
  isDone: boolean;
}) {
  const [checked, setChecked] = useState(isDone);

  const handleClick = async () => {
    const newValue = !checked;
    setChecked(newValue);
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
    
    mutate("/api/tasks");
  };

  return <input type="checkbox" checked={checked} onChange={handleClick} />;
}
