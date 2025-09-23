import { ChevronRightIcon, Trash } from "lucide-react";

function Task(props) {
  return (
      <ul className="bg-slate-600 p-4 rounded-2xl space-y-4">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button 
              onClick={() => props.onTaskClick(task.id) && console.log('justClicked')}
              className={`bg-slate-800 text-white rounded-md p-2 w-full font-bold ${task.isCompleted && 'line-through font-normal'}`}>
                {task.title}
            </button>

            <button
              className="bg-slate-800 text-white rounded-md p-2">
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => props.deleteTask(task.id)}
              className="bg-slate-800 text-white rounded-md p-2">
              <Trash   />
            </button>            
          </li>
        ))}
      </ul>
  );
}

export default Task;
