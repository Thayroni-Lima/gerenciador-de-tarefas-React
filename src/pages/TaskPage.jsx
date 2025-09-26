import { ChevronDownCircleIcon, ChevronLeftCircle, ChevronLeftIcon } from "lucide-react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"

function TaskPage () {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate()

    return (
        <div className="bg-slate-600 p-4 rounded-2xl space-y-4">
            <div className="flex space-x-3">
                <button 
                className="bg-slate-500 text-2xl p-4 rounded-2xl space-y-4 font-bold"
                onClick={() => navigate (-1)}>
                    <ChevronLeftIcon />
                </button>
                <h2 className="bg-slate-400 text-2xl p-4 rounded-2xl space-y-4 font-bold">
                    {title}
                </h2>
            </div>
            

            <div className="bg-slate-200 p-4 rounded-2xl space-y-4 font-bold">
                Detalhes
                <p className="bg-white p-4 rounded-2xl space-y-4 font-normal">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TaskPage