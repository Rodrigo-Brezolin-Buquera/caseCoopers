import { CircularProgress, Button, Box, Text } from "@chakra-ui/react"
import { deleteTaskById } from "../../../../../services/requests/deleteTaskById"
import { useState } from "react"

export const DeleteTaskButton = ({ userId, taskId }) => {
    const [loading, setLoading] = useState(false)


    const deleteTask = async() => {
        await deleteTaskById(userId, taskId, setLoading)
    }

    return (
        <Box>
            {loading ?
                <CircularProgress isIndeterminate color={"black"} size="30px" />
                :
                <Button
                    onClick={deleteTask}
                    borderRadius={"25px"}
                >
                    <Text>Delete</Text>
                </Button>
            }
        </Box>
    )
}