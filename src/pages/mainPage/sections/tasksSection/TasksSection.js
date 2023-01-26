import { useEffect, useState } from "react"
import { getAllTasks } from "../../../../services/requests/getAllTasks"
import { useAuth } from "../../../../hooks/useAuth"

export const TasksSection = () => {
    const {userId} = useAuth()
    const [tasks, setTasks] = useState([])
    
    useEffect(()=>{
        getAllTasks("uMpfKFlaKcZPCt2tHswkIpirSRX2", setTasks) // depois de fazer login, trocar
    },[])
    
    console.log(tasks)
    return <div>
        main
    </div>
}