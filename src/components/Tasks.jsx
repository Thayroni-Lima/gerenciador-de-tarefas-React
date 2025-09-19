import { ChevronRight, ChevronRightIcon } from "lucide-react";

function Task(props) {
  return (
    <div className="bg-slate-600 p-4 rounded-2xl">
      <ul className="space-y-4">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button onClick={props.onTaskClick} className="bg-slate-800 text-white rounded-md p-2 w-full">{task.title}</button>
            <button className="bg-slate-800 text-white rounded-md p-2"><ChevronRightIcon /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
