

import { TaskData } from "../types/Task";
import Checkbox from "./Checkbox";

export default function Task({ task }: { task: TaskData }) {
  return (
    <>
      <td className="p-2">
        <Checkbox task_id={task.id as number} isDone={task.isDone} />
      </td>
      <td
        className={`p-2 ${
          task.isDone ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {task.name}
      </td>
    </>
  );
}
