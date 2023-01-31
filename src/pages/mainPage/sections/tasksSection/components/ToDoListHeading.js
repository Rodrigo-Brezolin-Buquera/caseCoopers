import { Box, Heading, Text } from "@chakra-ui/react";


export const ToDoListHeading = () => {
    return (
        <Box 
        w={"100%"}
         h={"180px"} 
        bg={"brand.300"} 
        display={"flex"} 
        flexDirection={"column"}
         justifyContent={"center"}
         alignItems={"center"} 
         marginBottom={"2em"}
         >
            <Heading color={"brand.400"}>To-do List</Heading>
            <Text color={"brand.400"}> Drag and drop to set your main priorities, check when done and create what´s new.</Text>
        </Box>
    )
}