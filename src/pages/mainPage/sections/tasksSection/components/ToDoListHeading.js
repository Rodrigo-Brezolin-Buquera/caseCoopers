import { Box, Heading, Text } from "@chakra-ui/react";


export const ToDoListHeading = () => {
    return (
        <Box
            w={"120%"}
            h={"180px"}
            bg={"brand.300"}
            marginBottom={"2em"}
            transform="rotate(-5deg)"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box
                w={"50%"}
                h={"180px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                transform="rotate(5deg)"

            >
                <Heading color={"brand.400"}  >To-do List </Heading>
                <Text 
                color={"brand.400"}
                textAlign={"center"}
                > Drag and drop to set your main priorities, check when done and create what´s new.
                </Text>
            </Box>

        </Box>
    )
}