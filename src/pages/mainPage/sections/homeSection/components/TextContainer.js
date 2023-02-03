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
            p={"4em"}
            minW={"380px"}
        >
            <Heading color={"brand.300"} size={"4xl"} >Organize</Heading>
            <Heading color={"brand.100"}>your daily jobs</Heading>
            <Text
                mt={"0.5em"} mb={"0.5em"}
                color={"brand.300"}
                fontSize={"2xl"}
                letterSpacing={"wide"}
            >
                The only way to get things done
            </Text>
            <Button bg={"brand.100"} w={"300px"} h={"64px"} >
                <Text
                    fontSize={"2xl"}
                    color={"brand.400"}
                >
                    Go to To-do list

                </Text>
            </Button>

        </Box>


    )
}