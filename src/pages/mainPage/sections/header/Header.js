import { Box, Button, Text, useDisclosure} from "@chakra-ui/react"
import { LogoImage } from "../../../../components/LogoImage"
import { LoginModal } from "./LoginModal"

export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Button bg={"brand.300"} onClick={onOpen} w={"120px"} borderRadius={"0"}  >
                    <Text color={"brand.400"}>entrar</Text>
                </Button>
            </Box>

            <LoginModal isOpen={isOpen} onClose={onClose}/>
        </header>
    )
}