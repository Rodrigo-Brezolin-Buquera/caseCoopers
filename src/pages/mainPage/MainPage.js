import { TasksSection } from "./sections/tasksSection/TasksSection"
import React from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./sections/footer/footer";
import { Header } from "./sections/header/Header.js";
import { HomeSection } from "./sections/homeSection/HomeSection";
import { FormSection } from "./sections/formSection/FormSection";
import { CarouselSection } from "./sections/carouselSection/CarouselSection";

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
            <CarouselSection/>
            <FormSection/>
            <Footer/>
        </Box>
    )
}