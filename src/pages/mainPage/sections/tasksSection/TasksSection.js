import { useEffect, useState } from "react"
import { getAllTasks } from "../../../../services/requests/getAllTasks"
import { useAuth } from "../../../../hooks/useAuth"
import { DragAndDropList } from "./components/DragAndDropList"
import { ToDoListHeading } from "./components/ToDoListHeading"

export const TasksSection = () => {
    const { userId } = useAuth()
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllTasks("uMpfKFlaKcZPCt2tHswkIpirSRX2", setTasks) // depois de fazer login, trocar
    }, [loading])



    return (
        <section>
            <ToDoListHeading />
            <DragAndDropList
                tasks={tasks}
                userId={"uMpfKFlaKcZPCt2tHswkIpirSRX2"}
                setLoading={setLoading}
            />


        </section>
    )
}