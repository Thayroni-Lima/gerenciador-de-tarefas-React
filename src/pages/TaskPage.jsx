import { useSearchParams } from "react-router-dom"

function TaskPage () {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")

    return (
        <div>
            <h1>
                {id}
            </h1>
        </div>
    )
}

export default TaskPage