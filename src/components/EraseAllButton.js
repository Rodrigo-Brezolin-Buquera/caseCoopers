import { CircularProgress, Button, Box, Text } from "@chakra-ui/react"

export const EraseAllButton = ({ loading, action }) => {
    return (
        <Box>
            {loading ?
                <CircularProgress isIndeterminate color={"black"} size="30px" />
                :
                <Button
                    h={"30px"}
                    bg={"brand.600"}
                    borderRadius={"25px"}
                    onClick={action}>
                    <Text>Erase All</Text>
                </Button>
            }
        </Box>
    )
}