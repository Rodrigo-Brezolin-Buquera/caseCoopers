import { useEffect, useState } from "react"
import { getAllTasks } from "../../../../services/requests/getAllTasks"
import { useAuth } from "../../../../hooks/useAuth"
import { DragAndDropList } from "./components/DragAndDropList"
import { ToDoListHeading } from "./components/ToDoListHeading"
import { Box,Image } from "@chakra-ui/react"
import Arrow from "../../../../assets/Arrow.png"

export const TasksSection = () => {
    const { userId } = useAuth()
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllTasks("uMpfKFlaKcZPCt2tHswkIpirSRX2", setTasks) // depois de fazer login, trocar
    }, [loading])



    return (
        <section>
            <Box mb={"4em"} position={"relative"}>

            <Image
                    w={"40px"}
                    h={"40px"}
                    src={Arrow}
                    position={"absolute"}
                    top={"-5%"}
                    left={"50%"}   
                />

                <ToDoListHeading />
                <DragAndDropList
                    tasks={tasks}
                    userId={"uMpfKFlaKcZPCt2tHswkIpirSRX2"}
                    setLoading={setLoading}
                />
            </Box>



        </section>
    )
}