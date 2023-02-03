import { useEffect, useState } from "react"
import { getAllTasks } from "../../../../services/requests/getAllTasks"
import { useAuth } from "../../../../hooks/useAuth"
import { DragAndDropList } from "./components/DragAndDropList"
import { ToDoListHeading } from "./components/ToDoListHeading"
import { Box, Image } from "@chakra-ui/react"
import Arrow from "../../../../assets/Arrow.png"
import Triangle from "../../../../assets/Triangle.png"

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
                    top={["-2%", "-3%", "-5%"]}
                    left={"50%"}
                />

                <ToDoListHeading />
                <Box
                    display={"flex"}
                    overflow={"hidden"}
                    position={"relative"}
                >
                    <Image
                        maxH={"500px"}
                        src={Triangle}
                        transform={"rotate(90deg)"}
                        position={"absolute"}
                        left={'-380px'}
                    />

                    <Image
                        maxH={"500px"}
                        src={Triangle}
                        color={"brand.200"}
                        mixBlendMode={"multiply"}
                        transform={"rotate(90deg)"}
                        position={"absolute"}
                        left={'-420px'}
                        top={"-20px"}
                    />


                    <DragAndDropList
                        tasks={tasks}
                        userId={"uMpfKFlaKcZPCt2tHswkIpirSRX2"}
                        setLoading={setLoading}
                    />
                </Box>

            </Box>



        </section>
    )
}