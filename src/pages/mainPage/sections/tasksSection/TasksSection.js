import { useEffect, useState } from "react"
import { getAllTasks } from "../../../../services/requests/getAllTasks"
import { useAuth } from "../../../../hooks/useAuth"
import { DragAndDropList } from "./components/DragAndDropList"

export const TasksSection = () => {
    const {userId} = useAuth()
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        getAllTasks("uMpfKFlaKcZPCt2tHswkIpirSRX2", setTasks) // depois de fazer login, trocar
    },[])
   
    const filterTasks = (done) => {
        return tasks?.length && tasks.filter(i=> i.done === done)
    }
  
    return (
    <section>
        <DragAndDropList list={filterTasks(true)}/>
         
        
    </section>
    )
}