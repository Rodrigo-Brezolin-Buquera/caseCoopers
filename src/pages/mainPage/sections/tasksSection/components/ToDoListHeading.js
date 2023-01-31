import { Box, Heading, Text } from "@chakra-ui/react";


export const ToDoListHeading = () => {
    return (
        <Box
            h={"180px"}
            bg={"brand.300"}
            marginBottom={"2em"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            clipPath={"polygon(0 15%, 100% 0, 100% 85%, 0 100%)"}
        >
            <Box
                w={"50%"}
                h={"180px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}

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