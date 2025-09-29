import { useState } from "react"

function AddTasks ({addTask}) {
    const [title, setTitle] = useState("")
    const [descripton, setDescripton] = useState("")

    return (
        <div
        className="bg-slate-600 p-4 rounded-2xl">
            <div
            className="bg-slate-800 p-4 rounded-2xl flex flex-col items-center"
            >
                <h2 className="text-white font-bold h-8">Inserir Task</h2>

                <input
                    className="border-white border-2 outline-black rounded-2xl text-white w-full p-1 m-1"
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}/>
                
                <input
                    className="border-white border-2 outline-black rounded-2xl text-white w-full p-1 m-1"
                    type="text"
                    placeholder="Descrição"
                    value={descripton}
                    onChange={(event) => setDescripton(event.target.value)}/>
                
                <button
                    onClick={() => {
                        if (!title.trim() || !descripton.trim()) {
                            return alert("Título ou Descrição vazios");
                        }
                        addTask(title, descripton);
                        setTitle("");
                        setDescripton("");
                    } }
                    className="bg-slate-500 w-full text-white px-4 py-2 m-2 rounded-2xl">Adicionar Task</button>
            </div>
        </div>
    )
}

export default AddTasks