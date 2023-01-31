import { Box, Button, Text} from "@chakra-ui/react"
import { LogoImage } from "../../../../components/LogoImage"

export const Header = () => {
    return (
        <header>
            <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={" 10px 80px 0 80px"}
            >
                <LogoImage/>
                <Button bg={"brand.300"} >
                    <Text color={"brand.400"}>entrar</Text>
                </Button>
            </Box>
        </header>
    )
}