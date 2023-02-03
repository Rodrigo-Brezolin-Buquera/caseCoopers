import { Card, CardHeader, Heading, CardBody, StackDivider, Text, Stack, Box, Button } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
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
        <Card w={"380px"} minH={"500px"} alignItems={"center"} bg={"brand.400"}
        >
            <Box
                w={"100%"}
                h={"1em"}
                background={props.cardName === "Done" ? "brand.100" : "brand.500"}
            />

            <CardHeader>
                <Heading size='xl'>{props.cardName}</Heading>
            </CardHeader>

            <CardBody
                w={"100%"}
                display={"flex"}
                flexDirection={"column"}
                gap={"2em"}
                justifyContent={"align-self"}
                pt={"0"}
            >

                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                    <Text fontSize='xl' >
                        {props.firstLine}
                    </Text>
                    <Text fontSize='xl' fontWeight={props.cardName === "Done" ? "bold" : "normal"} >
                        {props.secondLine}
                    </Text>
                </Box>
                <Box minH={"300px"} >
                    {props.children}
                </Box>

                <EraseAllButton
                    loading={cardLoading}
                    action={eraseAllTasks}
                />

            </CardBody>
        </Card>)
}