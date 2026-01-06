import { TaskData } from "../types/Task";
import Checkbox from "./Checkbox";

export default function Task({ task }: { task: TaskData }) {
  return (
    <>
      {/* TODO: add some styling to the table rows */}
      <td>
        <Checkbox task_id={task.id as number} isDone={task.isDone} />
      </td>
      {/* TODO: if task is done, add a strikethrough or gray out */}
      <td>{task.name}</td>
    </>
  );
}
