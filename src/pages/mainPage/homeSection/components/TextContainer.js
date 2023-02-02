import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
 

export const TextContainer = () => {
    return (

            <Box                     
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"start"}  
                gap={"0.5em"}  
                p={"2em"}    
                w={"40%"} 
            >
                <Heading color={"brand.300"} >Organize</Heading>
                <Heading color={"brand.100"}>your daily jobs</Heading>
                <Text color={"brand.300"}>The only way to get things done</Text>
                <Button bg={"brand.100"} >Go to To-do list</Button>

            </Box>
    

    )
}