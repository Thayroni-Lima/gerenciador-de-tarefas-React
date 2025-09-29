import { useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App () {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  function addTask (title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }
  
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })

    setTasks(newTasks)
  }

  function deleteTask(taskId) { 
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-fit space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center m-y-3">
        Gerenciador de Tarefas
      </h1>
      <AddTasks addTask={addTask}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
    </div>
  )
}

export default App