import { Card, CardHeader, Heading, CardBody, StackDivider, Text, Stack, Box, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { EraseAllButton } from "./EraseAllButton"
import { deleteTaskByStatus } from "../../../../../services/requests/deleteTaskByStatus"

export const TasksCard = (props) => {
    const [cardLoading, setCardLoading] = useState(false)


    const eraseAllTasks = async () => {
        const status = props.cardName === "Done" ? true : false
        props.setLoading(true)
        await deleteTaskByStatus(props.userId, status, setCardLoading)
        props.setLoading(false)
    }

    useEffect(() => { }, [cardLoading])

    return (
        <Card w={"350px"} minH={"500px"} alignItems={"center"} >
            <CardHeader>
                <Heading size='md'>{props.cardName}</Heading>
            </CardHeader>

            <CardBody w={"100%"} display={"flex"} flexDirection={"column"} gap={"2em"} justifyContent={"align-self"}>

                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                    <Text size='xs' >
                        {props.firstLine}
                    </Text>
                    <Text size='xs' fontWeight={"bold"} >
                        {props.secondLine}
                    </Text>
                </Box>
                <Box minH={"300px"} >
                    {props.children}
                </Box>

                <EraseAllButton loading={cardLoading} action={eraseAllTasks} />


            </CardBody>
        </Card>)
}