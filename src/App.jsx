import { useState } from "react"
import CreateTask from "./components/CreateTask"
import Tasks from "./components/Tasks"

function App () {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar Programação",
    description: "Estudar muito para ganhar muito",
    isCompleted: false
  }, {
    id: 2,
    title: "Estudar Inglês",
    description: "Estudar muito para falar muito",
    isCompleted: false
  }, {
    id: 3,
    title: "Estudar Matemática",
    description: "Estudar muito para calcular muito",
    isCompleted: false
  }]);
  
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })

    setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-400 flex flex-wrap justify-center p-5">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center m-8">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  )
}

export default App