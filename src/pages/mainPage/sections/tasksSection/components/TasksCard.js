import { Card, CardHeader, Heading, CardBody, StackDivider, Text, Stack, Box,  Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { EraseAllButton } from "./EraseAllButton"
import { deleteTaskByStatus } from "../../../../../services/requests/deleteTaskByStatus"

export const TasksCard = (props) => {
    const [loading, setLoading] = useState(false)


    const eraseAllTasks = () => {
        const status = props.cardName === "Done" ? true : false
        deleteTaskByStatus(props.userId,status, setLoading )
    }
    
    useEffect(()=>{},[loading, eraseAllTasks])

    return (
        <Card w={"300px"} alignItems={"center"} >
            <CardHeader>
                <Heading size='md'>{props.cardName}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box >
                        <Text size='xs' >
                            {props.firstLine}
                        </Text>
                        <Text size='xs' fontWeight={"bold"} >
                            {props.secondLine}
                        </Text>
                    </Box>
                    <Box >
                        {props.children}
                    </Box>
                    <Box>
                       <EraseAllButton loading={loading}  action={eraseAllTasks}/>
                    </Box>
                </Stack>
            </CardBody>
        </Card>)
}