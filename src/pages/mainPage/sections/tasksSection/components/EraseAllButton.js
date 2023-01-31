import { CircularProgress, Button, Box, Text } from "@chakra-ui/react"

export const EraseAllButton = ({ loading, action }) => {
    return (
        <Box w={"100%"}  display={"flex"} justifyContent={"center"} >
            {loading ?
                <CircularProgress isIndeterminate color={"black"} size="30px" />
                :
                <Button
                    h={"30px"}
                    w={"70%"}
                    bg={"black"}
                    borderRadius={"5px"}
                    onClick={action}>
                    <Text color={"white"}>Erase All</Text>
                </Button>
            }
        </Box>
    )
}