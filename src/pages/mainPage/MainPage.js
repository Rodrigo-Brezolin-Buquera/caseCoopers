import { TasksSection } from "./sections/tasksSection/TasksSection"
import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { Footer } from "./sections/footer/footer";

export const MainPage = () => {
    return (
        <Box
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
        >

            <TasksSection />

            <Footer/>
        </Box>
    )
}