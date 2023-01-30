import { TasksSection } from "./sections/tasksSection/TasksSection"
import React from "react";
import { Box } from "@chakra-ui/react";

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
        </Box>
    )
}