import { TasksSection } from "./sections/tasksSection/TasksSection"
import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { Footer } from "./sections/footer/footer";
import { Header } from "./sections/header/Header.js";
import { HomeSection } from "./homeSection/HomeSection";

export const MainPage = () => {
    return (
        <Box
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            bg={"brand.400"}
        >
            <Header/>
            <HomeSection/>
            <TasksSection />

            <Footer/>
        </Box>
    )
}