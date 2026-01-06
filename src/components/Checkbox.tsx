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
    setChecked(!checked);
    // TODO: make sure that 'isDone' is updated in the database
    // ...
    mutate("/api/tasks");
  };

  return <input type="checkbox" checked={checked} onChange={handleClick} />;
}
