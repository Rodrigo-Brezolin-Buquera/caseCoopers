import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { PhotoContainer } from "./components/PhotoContainer";
import { TextContainer } from "./components/TextContainer";
import Arrow from "../../../assets/Arrow.png"

export const HomeSection = () => {
    return (
        <section>
            <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                bg={"brand.400"}
            >
                <TextContainer />
                <Box 
                    display={"flex"}
                    alignItems={"end"}
                >
                    <Image w={"30px"} src={Arrow} objectFit={"contain"} />
                </Box>

                <PhotoContainer />

            </Box>
        </section>

    )
}