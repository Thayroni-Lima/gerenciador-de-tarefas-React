import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App () {
  const [tasks, setTasks] = useState([{
    id: v4(),
    title: "Estudar Programação",
    description: "Estudar muito para ganhar muito",
    isCompleted: false
  }, {
    id: v4(),
    title: "Estudar Inglês",
    description: "Estudar muito para falar muito",
    isCompleted: false
  }, {
    id: v4(),
    title: "Estudar Matemática",
    description: "Estudar muito para calcular muito",
    isCompleted: false
  }]);

  function addTask (title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
    console.log(newTask.id)
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
    <div className="w-[500px] space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center m-y-3">
        Gerenciador de Tarefas
      </h1>
      <AddTasks addTask={addTask}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
    </div>
  )
}

export default App