import { Box, Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box
            w={"100%"}
            h={"140px"}
            bg={"brand.300"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            zIndex={"-1"}
            mt={"2em"}
        >
            <Text color={"brand.400"}>Need help?</Text>
            <Text color={"brand.400"}>coopers@coopers.pro</Text>
            <Text color={"brand.400"}>© 2021 Coopers. All rights reserved.</Text>
            <Box
                h={"20px"}
                w={"300px"}
                background={"brand.100"}
                position={"absolute"}
                bottom={"0"}        
            />
        </Box>
    )
}